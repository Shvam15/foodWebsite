import React, { useContext, useEffect, useRef, useState } from "react";
import { ShopContext } from "../components/ShopContext";
import axios from "axios";
import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { assets } from "../assets/frontend_assets/assets";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import "./Menu.css";

// import "swiper/css";
// import "swiper/css/pagination";

const Menu = () => {
  const [foodList, setFoodList] = useState([]);
  const [loadMore, setLoadMore] = useState(10);
  // const [images, setImages] = useState([]);

  const handleLoadMore = () => {
    setLoadMore((prev) => prev + 10);
  };

  const { backendUrl } = useContext(ShopContext);

  const fetchProducts = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(backendUrl + "/api/food/listfooditems");
      console.log(data, "res");
      // console.log(data._id, "res");
      setFoodList(data);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(foodList, "len");
  useEffect(() => {
    fetchProducts();
  }, []);

  const nextSectionRef = useRef(null);

  return (
    <>
      <div className="absolute -z-10 top-0">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          direction="horizontal"
          className="w-screen h-screen"
        >
          <SwiperSlide className="flex flex-col-reverse justify-center items-center">
            <div>
              <div className="h-[70rem] w-[70rem] absolute -z-30 top-0 -mt-[30rem] bg-orange-500  ml-10 rounded-full blur-3xl "></div>
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                src={assets.pasta}
                alt=""
                className="-mt-[18rem] pl-8 w-[70rem]"
              />
              <p className="text-7xl z-30 absolute top-[25rem] left-10 text-black">
                Butter
              </p>
              <p className="text-7xl  z-30 absolute top-[25rem] right-10 text-black">
                Chicken
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col-reverse justify-center items-center">
            <div className="h-[70rem] w-[70rem] absolute -z-30 top-0 -mt-[30rem] bg-yellow-500 ml-10 rounded-full blur-3xl "></div>
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              src={assets.plate}
              alt=""
              className="-mt-[18rem] pl-8 w-[70rem]"
            />
            <p className="text-7xl z-30 absolute left-10 text-black">Italian</p>
            <p className="text-7xl z-30 absolute right-10 text-black">Pasta</p>
          </SwiperSlide>
          {/* <SwiperSlide className="bg-red-900 flex flex-col-reverse justify-center items-center">
            <img
              src={assets.chole}
              alt=""
              className="-mt-[18rem] pl-8 w-[70rem]"
            />
            <p className="text-7xl  z-30 absolute left-10 text-black">Chole</p>
            <p className="text-7xl  z-30 absolute right-10 text-black">Bhature</p>
          </SwiperSlide> */}
        </Swiper>
      </div>

      <hr className="mt-[40rem]" />

      <div>
        <div className="text-center p-10">
          <p className="text-8xl font-bold ">You May Also Like</p>
        </div>

        <div className="flex border h-full w-[100%]">
          {/* <div className="w-[20%] h-screen flex flex-col space-y-2 pl-5 border-red-400 shadow-lg">
          <div>
            <h1 className="text-7xl pb-5 pt-2  mt-20">Filters</h1>
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" name="southIndian" id="southIndian" />
            <label htmlFor="southIndian">South Indian</label>
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" name="chinese" id="chinese" />
            <label htmlFor="chinese">Chinese</label>
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" name="italian" id="italian" />
            <label htmlFor="italian">Italian</label>
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" name="mexican" id="mexican" />
            <label htmlFor="mexican">Mexican</label>
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" name="thai" id="thai" />
            <label htmlFor="thai">Thai</label>
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" name="japanese" id="japanese" />
            <label htmlFor="japanese">Japanese</label>
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" name="continental" id="continental" />
            <label htmlFor="continental">Continental</label>
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" name="indian" id="indian" />
            <label htmlFor="indian">Indian</label>
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" name="mediterranean" id="mediterranean" />
            <label htmlFor="mediterranean">Mediterranean</label>
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" name="french" id="french" />
            <label htmlFor="french">French</label>
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" name="american" id="american" />
            <label htmlFor="american">American</label>
          </div>

          <div className="flex items-center space-x-4">
            <input type="checkbox" name="" id="" />
            <label>Chinese</label>
          </div>
        </div> */}

          <div className="w-screen h-full p-10 ml-10">
            <div className="grid grid-cols-6 gap-6 gap-x-0">
              {foodList.length > 0 ? (
                foodList.slice(0, loadMore).map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="hover:scale-110 transition-transform duration-300"
                    >
                      <Card
                        id={data._id}
                        title={data.name}
                        description={data.description}
                        price={data.price}
                        image={`http://localhost:3000/images/${data.image}`}
                      />
                    </div>
                  );
                })
              ) : (
                <p>Loading food items...</p>
              )}
            </div>

            {foodList.length > loadMore && (
              <div className="absolute   right-24">
                {/* Positioned in bottom right */}
                <button
                  onClick={handleLoadMore}
                  className="bg-amber-600 text-white px-6 py-3  rounded-lg hover:bg-amber-700 transition-colors duration-300 shadow-md"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
