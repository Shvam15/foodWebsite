import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* <!-- Hero Section --> */}
        <section
          className="bg-cover bg-center h-96"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center">
              Contact Us
            </h1>
          </div>
        </section>

        {/* <!-- Contact Information --> */}
        <section className="py-16 px-6 md:px-16 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-700 text-lg mb-12">
              We would love to hear from you! Whether you have a question,
              feedback, or want to make a reservation, feel free to reach out.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* <!-- Location --> */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-yellow-600">
                  Our Location
                </h3>
                <p className="text-gray-700 mt-4">
                  123 Flavor St, Taste City, Yum State, 12345
                </p>
              </div>
              {/* <!-- Contact --> */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-yellow-600">
                  Contact Us
                </h3>
                <p className="text-gray-700 mt-4">Phone: (123) 456-7890</p>
                <p className="text-gray-700">Email: info@foodiesdelight.com</p>
              </div>
              {/* <!-- Social Media --> */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-yellow-600">
                  Follow Us
                </h3>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-600 hover:text-yellow-600">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-yellow-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-yellow-600">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-yellow-600">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Contact Form --> */}
        <section className="py-16 px-6 md:px-16 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              Send Us a Message
            </h2>
            <form action="#" className="space-y-6">
              <div>
                <label
                  for="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name
                </label>

                {/* <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" required ></input> */}
              </div>

              <div>
                <label
                  for="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Email
                </label>
                {/* <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" required></input> */}
              </div>
              <div>
                <label
                  for="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white font-semibold p-3 rounded-md hover:bg-yellow-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
