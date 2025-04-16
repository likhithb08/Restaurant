import React from 'react';

const App = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-red-600">Reddy Restaurant</a>
          <ul className="flex space-x-6">
            <li>
              <a href="#menu" className="text-gray-700 hover:text-red-600 transition duration-300">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-red-600 transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-pulse">
            Welcome to Reddy Restaurant
          </h1>
          <p className="text-xl text-gray-600 mb-8">Delicious Indian food served with love</p>
          <a
            href="#menu"
            className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 animate-bounce"
          >
            View Menu
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <img
                src="./src/assets/dish1.jpg"
                alt="Butter Chicken"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Butter Chicken
              </h3>
              <p className="text-gray-600">
                Creamy chicken in a rich tomato-based sauce.
              </p>
              <span className="block mt-4 text-red-600 font-bold">Rs 200</span>
            </div>
            {/* Menu Item 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <img
                src="./src/assets/dish2.jpg"
                alt="Tandoori Chicken"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Tandoori Chicken
              </h3>
              <p className="text-gray-600">
                Grilled chicken marinated in yogurt and spices.
              </p>
              <span className="block mt-4 text-red-600 font-bold">Rs 200</span>
            </div>
            {/* Menu Item 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <img
                src="./src/assets/dish3.jpg"
                alt="Paneer Tikka Masala"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Paneer Tikka Masala
              </h3>
              <p className="text-gray-600">
                Cubes of cottage cheese in a creamy tomato sauce.
              </p>
              <span className="block mt-4 text-red-600 font-bold">Rs 149</span>
            </div>
            {/* Menu Item 4 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <img
                src="./src/assets/dish4.jpg"
                alt="Dal Makhani"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dal Makhani
              </h3>
              <p className="text-gray-600">
                Rich red lentil curry with butter beans.
              </p>
              <span className="block mt-4 text-red-600 font-bold">Rs 99</span>
            </div>
            {/* Menu Item 5 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <img
                src="./src/assets/dish5.jpg"
                alt="Naan"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Naan
              </h3>
              <p className="text-gray-600">
                Traditional Indian flatbread.
              </p>
              <span className="block mt-4 text-red-600 font-bold">Rs 5</span>
            </div>
            {/* Menu Item 6 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-2xl transition duration-300">
              <img
                src="./src/assets/dish6.jpg"
                alt="Samosa"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Samosa
              </h3>
              <p className="text-gray-600">
                Crispy triangular pastries filled with spiced potatoes.
              </p>
              <span className="block mt-4 text-red-600 font-bold">Rs 15</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Reddy Restaurant. All rights reserved.</p>
          <p>Follow us on social media:</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook-square text-2xl"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter-square text-2xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;