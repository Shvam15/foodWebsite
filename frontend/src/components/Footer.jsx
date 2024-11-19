import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <footer class="bg-gray-800 text-white py-10">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h2 class="text-2xl font-semibold mb-4">About Us</h2>
                <p class="text-gray-300">
                  At Foodie's Delight, we serve the finest cuisines crafted with
                  passion and fresh ingredients. Taste the difference in every
                  bite!
                </p>
              </div>
              <div>
                <h2 class="text-2xl font-semibold mb-4">Quick Links</h2>
                <ul class="space-y-2">
                  <li>
                    <a href="/" class="hover:text-yellow-500">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/menu" class="hover:text-yellow-500">
                      Menu
                    </a>
                  </li>
                  <li>
                    <a href="/about" class="hover:text-yellow-500">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contact" class="hover:text-yellow-500">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
                <ul class="text-gray-300 space-y-2">
                  <li>123 Food Street, Flavor Town</li>
                  <li>Phone: (123) 456-7890</li>
                  <li>Email: info@foodiesdelight.com</li>
                </ul>
              </div>

              <div>
                <h2 class="text-2xl font-semibold mb-4">Follow Us</h2>
                <div class="flex space-x-4">
                  <a href="#" class="hover:text-yellow-500">
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.56v15.29A4.15 4.15 0 0 1 19.85 24H4.14A4.15 4.15 0 0 1 0 19.85V4.14A4.15 4.15 0 0 1 4.14 0h15.71A4.15 4.15 0 0 1 24 4.14zM8.93 20.47V9.35H5.58v11.12h3.35zm-1.68-12.84a2.01 2.01 0 1 1 0-4.02 2.01 2.01 0 0 1 0 4.02zM20.47 20.47h-3.35v-5.91c0-1.41-.03-3.22-1.97-3.22-1.98 0-2.29 1.55-2.29 3.12v6.01h-3.35V9.35h3.22v1.52h.04c.45-.85 1.54-1.75 3.18-1.75 3.41 0 4.04 2.24 4.04 5.15v6.19h-.01z" />
                    </svg>
                  </a>
                  <a href="#" class="hover:text-yellow-500">
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.56v15.29A4.15 4.15 0 0 1 19.85 24H4.14A4.15 4.15 0 0 1 0 19.85V4.14A4.15 4.15 0 0 1 4.14 0h15.71A4.15 4.15 0 0 1 24 4.14zM8.93 20.47V9.35H5.58v11.12h3.35zm-1.68-12.84a2.01 2.01 0 1 1 0-4.02 2.01 2.01 0 0 1 0 4.02zM20.47 20.47h-3.35v-5.91c0-1.41-.03-3.22-1.97-3.22-1.98 0-2.29 1.55-2.29 3.12v6.01h-3.35V9.35h3.22v1.52h.04c.45-.85 1.54-1.75 3.18-1.75 3.41 0 4.04 2.24 4.04 5.15v6.19h-.01z" />
                    </svg>
                  </a>
                  <a href="#" class="hover:text-yellow-500">
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.54 5.95a8.92 8.92 0 0 1-2.57.71 4.52 4.52 0 0 0 1.98-2.49 9.03 9.03 0 0 1-2.86 1.09A4.51 4.51 0 0 0 11.42 9c0 .35.04.69.11 1A12.79 12.79 0 0 1 1.64 4.15a4.51 4.51 0 0 0 1.4 6.02 4.46 4.46 0 0 1-2.05-.57v.06c0 2.14 1.52 3.92 3.53 4.33a4.55 4.55 0 0 1-2.04.08 4.52 4.52 0 0 0 4.21 3.13 9.05 9.05 0 0 1-5.6 1.94A9.22 9.22 0 0 1 0 19.12a12.74 12.74 0 0 0 6.9 2.03c8.28 0 12.8-6.86 12.8-12.81 0-.2 0-.4-.01-.6a9.14 9.14 0 0 0 2.24-2.33l.01-.03z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <hr class="my-8 border-gray-600" />

            <div class="text-center text-gray-400 text-sm">
              &copy; 2024 Foodie's Delight. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
