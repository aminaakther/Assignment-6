import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Models from './component/Models';
import Active from './component/Active';
import Banner from './component/Banner';
import Footer from './component/Footer';
import GetStared from './component/GetStared';
import NavBar from './component/NavBar';
import Section from './component/Section';
import Simple from './component/Simple';
import Cart from './component/Cart';

function App() {
  const [activeTab, setActiveTab] = React.useState("Products");
  const [carts, setCarts] = React.useState([]);

  return (
    <>
      <NavBar carts={carts} />

      <ToastContainer position="top-right" autoClose={2000} />

      <Banner />
      <Active />

      <div className="tabs tabs-box justify-center gap-4 mt-8">
        <input
          type="radio"
          name="my_tabs_1"
          className={`btn rounded-full ${
            activeTab === "Products"
              ? "bg-gradient-to-r from-[#8b2cf5] to-[#a434ff] text-white"
              : "text-black"
          }`}
          aria-label="Products"
          onClick={() => setActiveTab("Products")}
          checked={activeTab === "Products"}
        />

        <input
          type="radio"
          name="my_tabs_1"
          className={`btn rounded-full ${
            activeTab === "Cart"
              ? "bg-gradient-to-r from-[#8b2cf5] to-[#a434ff] text-white"
              : "text-black"
          }`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("Cart")}
          checked={activeTab === "Cart"}
        />
      </div>

      {activeTab === "Products" && (
        <Models carts={carts} setCarts={setCarts} />
      )}

      {activeTab === "Cart" && (
        <Cart carts={carts} setCarts={setCarts} />
      )}

      <GetStared />
      <Simple />
      <Section />
      <Footer />
    </>
  );
}

export default App;