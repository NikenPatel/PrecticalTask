import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useProductStore from "../store/productStore";
import useAuthStore from "../store/authStore";

const Header = () => {
  const { cart } = useProductStore();
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <header className=" relative shadow-lg px-3 py-2">
        <nav className="flex justify-between px-5">
          <div className="flex items-center">
            <h1 className="text-[32px] text-purple-500 font-semibold uppercase">
              Prectical Task
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                <li className="relative max-w-fit pr-3 md:pr-0 py-1 uppercase after:bg-purple-500  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <Link
                    className="text-purple-500 font-semibold"
                    to="/dashboard/user"
                  >
                    Users
                  </Link>
                </li>
                <li className="relative max-w-fit pr-3 md:pr-0 py-1 uppercase after:bg-purple-500  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <Link
                    className="text-purple-500 font-semibold"
                    to="/dashboard/product"
                  >
                    Products
                  </Link>
                </li>
                <li className="relative max-w-fit pr-3 md:pr-0 py-1 uppercase after:bg-purple-500  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <Link
                    className="text-purple-500 font-semibold"
                    to="/dashboard/cart"
                  >
                    <span className="text-[20px]">🛒</span>
                    {getTotalItems()}
                  </Link>
                </li>
                <button
                  className="text-white font-semibold bg-purple-500 px-3 py-2 rounded-lg"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
