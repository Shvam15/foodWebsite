import React, { useContext, useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShopContext } from "./ShopContext";
import { assets, menu_list } from "../assets/frontend_assets/assets";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Hero.css";
import { gsap } from "gsap";
import { motion, useAnimation } from "framer-motion";
import Lenis from "lenis";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import StarRating from "./StarRating";

const Hero = () => {
  useEffect(() => {
    gsap.to(".pizza", {
      rotation: -360,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  const [foodList, setFoodList] = useState([]);

  const { backendUrl, food_list } = useContext(ShopContext);

  const fetchProducts = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(backendUrl + "/api/food/listfooditems");
      console.log(data, "res");
      setFoodList(data);
      // SetLoadMore(data.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [scale, setScale] = useState(1);
  const [cardScale, setCardScale] = useState(0);
  const exploreRef = useRef(null);
  // const cardRef = useRef(null);
  const lenisRef = useRef(null);

  const cardRef = useRef(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    lenisRef.current = new Lenis({
      smooth: true,
    });

    const updateScale = () => {
      const scroll = lenisRef.current?.scroll || 0;
      const newScale = 1 + scroll / 1000;
      setScale(Math.min(newScale, 2));
      setCardScale(Math.min(newScale, 2));
    };

    const animate = (time) => {
      lenisRef.current.raf(time);
      updateScale();
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      smooth: true,
    });

    const handleScroll = (time) => {
      lenis.raf(time);
      setScrollY(lenis.scroll);
      requestAnimationFrame(handleScroll);
    };

    requestAnimationFrame(handleScroll);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Smooth scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
    });

    // Start Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    function onScroll() {
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    } else {
      controls.start({ opacity: 0, y: 50, scale: 0.9 });
    }
  }, [isVisible, controls]);

  const imageVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  });

  return (
    <>
      <div className="hero min-w-[20rem]  mt-0 flex justify-between px-20 items-center h-[30rem] m-10 mb-0 rounded-3xl">
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="text-9xl font-serif">
            It's Not Just
            <br />
            <span className="text-red-700">FOOD</span>
          </p>
          <p className="text-6xl absolute left-[25rem] custom-font">
            It's EXPERIENCE
          </p>
        </motion.div>
        {/* 
        <div
          className="bg-orange-400 h-[20rem] w-[20rem] blur-2xl absolute right-28 top-[14rem]
         border rounded-full  "
        ></div> */}

        <motion.div
          initial={{ opacity: 0, zIndex: -100 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={assets.blob_2}
            alt=""
            className="absolute top-0  right-0 -z-50 w-[70rem] h-[48rem]"
          />
        </motion.div>

        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mt-20  w-[25rem] "
        >
          <img src={assets.pizza} alt="no image" className="pizza  w-[35rem]" />
        </motion.div>
      </div>

      <motion.button
        initial={{ x: -400, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="bg-red-700 ml-[8rem]  text-white px-10 py-6  rounded-full"
      >
        <div className="">
          <Link to="/menu">View Menu</Link>
        </div>
      </motion.button>

      {/* <div className="bg-yellow-400 rounded-full w-20 h-20 absolute top-[45.5rem] -z-30 -left-10"></div> */}

      <hr className="mt-[8.5rem] mb-6" />

      <div>
        <motion.h1
          ref={exploreRef}
          style={{ transform: `scale(${scale})` }}
          className="text-3xl font-bold text-center pt-8"
        >
          Explore More
        </motion.h1>

        <p className="text-lg text-center px-10 mx-20 my-10">
          Order Anytime, Anywhere: With our convenient delivery options, you can
          enjoy your favorite meals wherever you are. Whether it’s a busy
          workday, a cozy night in, or a gathering with friends, we bring
          delicious food straight to your door.
        </p>
      </div>

      <motion.div>
        <motion.div
          variants={imageVariants("left")}
          initial={{ x: -400 }}
          animate={scrollY > 400 ? "visible" : "hidden"} // Adjust scroll value as needed
          className="flex justify-around items-center bg-orange-100 rounded-2xl mx-10 px-10 mt-5"
        >
          <img src={assets.burger} alt="" className="h-40 w-40" />
          <p className="text-4xl pr-10 ">
            "Bite Into Bliss – Where Every Burger is a Flavor Adventure!"
          </p>
        </motion.div>

        <motion.div
          variants={imageVariants("right")}
          initial="hidden"
          animate={scrollY > 600 ? "visible" : "hidden"} // Adjust scroll value as needed
          className="flex justify-between bg-orange-500 my-10  rounded-xl mx-10"
        >
          <span className="text-white text-4xl pl-10 flex justify-center items-center ">
            "Satisfy your cravings with every cheesy, oven-baked slice! Our
            pizza is crafted with fresh ingredients, bold flavors, and a love
            for quality. One bite, and you'll be hooked!"
          </span>
          <img src={assets.p2} alt="" className="h-[15rem] w-[15rem] mr-10" />
        </motion.div>

        <motion.div
          variants={imageVariants("left")}
          initial="hidden"
          animate={scrollY > 900 ? "visible" : "hidden"}
          className=" bg-orange-100 rounded-2xl mx-10 mb-10 flex justify-around items-center"
        >
          <img src={assets.chole} alt="" className="h-[16rem]  w-[22rem]" />
          <p className="text-2xl pr-10">
            "Taste the Heart of North India! Dive into the bold, comforting
            flavors of chole bhature, buttery naans, and aromatic
            spices—authentic recipes that bring tradition to your table, one
            bite at a time!"
          </p>
        </motion.div>
      </motion.div>

      <motion.div className="mx-20 flex justify-between items-center ">
        <div>
          <h1 className="text-7xl custom-font">Our</h1>
          <h1 className="text-7xl custom-font pl-[5rem]">
            Most <span className="text-red-500 custom1-font">Lovvvvvvved</span>
          </h1>
          <h1 className="text-7xl custom-font pl-[30rem]">Dishes....</h1>
        </div>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transform: `scale(${1})` }}
          className="text-3xl font-bold text-center pt-8"
        >
          <Swiper
            initialSlide={4}
            // flipEffect={true}
            // fadeEffect={true}
            effect="cards"
            grabCursor={true}
            modules={[EffectCards, Navigation]}
            className="mySwiper flex justify-center items-center my-10 mr-32"
            centeredSlides={true}
            cardsEffect={{
              slideShadows: true,
              perSlideRotate: 0,
              perSlideOffset: 25,
            }}
          >
            {menu_list.map((data, index) => {
              return (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="flex flex-col justify-center items-center text-center py-5 px-8 bg-orange-100 rounded-2xl  transform transition-transform duration-200 hover:scale-105">
                    <h1 className="text-4xl font-bold text-orange-700 pt-4">
                      {data.menu_name}
                    </h1>
                    <img
                      src={data.menu_image}
                      alt=""
                      className="w-36 h-36 rounded-full border-4 border-orange-300 shadow-md mt-4"
                    />
                    <span className="pt-5 text-lg text-orange-600 font-semibold">
                      Customer Rating:
                    </span>
                    {/* Star Rating Component */}
                    <StarRating rating={data.menu_rating} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
