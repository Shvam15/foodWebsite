import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <section
          className="bg-cover bg-center h-96"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center">
              About Us
            </h1>
          </div>
        </section>

        <section className="py-16 px-6 md:px-16 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 text-lg">
              At Foodie's Delight, our mission is to deliver culinary excellence
              with a passion for taste and quality. We started as a small
              kitchen, and today, we bring flavors from around the world to your
              table, combining tradition with innovation.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600">
                  Quality Ingredients
                </h3>
                <p className="text-gray-600 mt-4">
                  We source only the finest, freshest ingredients to ensure an
                  exceptional dining experience.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600">
                  Exceptional Service
                </h3>
                <p className="text-gray-600 mt-4">
                  Our team is dedicated to providing excellent service and
                  making you feel at home.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-600">
                  Sustainability
                </h3>
                <p className="text-gray-600 mt-4">
                  We are committed to sustainable practices, supporting local
                  farms, and minimizing waste.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 md:px-16 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-700">
                  "The best dining experience I've ever had! The flavors were
                  incredible and the staff was so welcoming!"
                </p>
                <span className="block mt-4 font-semibold text-yellow-600">
                  - John Doe
                </span>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-gray-700">
                  "A true gem in the city. Every dish was beautifully presented
                  and absolutely delicious."
                </p>
                <span className="block mt-4 font-semibold text-yellow-600">
                  - Jane Smith
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
