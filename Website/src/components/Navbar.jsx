import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  if(localStorage.getItem("userdata") && !isLoggedIn) {
    setIsLoggedIn(true);
  }

  const handleLogin = () => {
    if(localStorage.getItem("userdata")) {
      setIsLoggedIn(true);
    }
    //setIsLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("userdata")
    setIsLoggedIn(false);
  };

  return (
    <nav className="top-4 px-3 py-2 w-full">
      <div className="container mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-12 bg-green-600" src={logo} alt="logo" />
          </div>
          <ul className="hidden lg:flex px-2 py-2 ml-[6.5rem] space-x-1 bg-green-00/50 border border-neutral-700 rounded-full tracking-wide text-base">
            <li
              onClick={() => {
                navigate("/home");
              }}
              className="hover:bg-green-500/10 hover:text-green-400 rounded-full py-3 px-7 transition ease-in-out hover:scale-110 duration-300"
            >
              Home
            </li>
            <li onClick={() => {
                navigate("/chatbot");
              }} className="hover:bg-green-500/10 hover:text-green-400 rounded-full py-3 px-7 transition ease-in-out hover:scale-110 duration-300">
             Chatbot
            </li>
            <li
             onClick={() => {
              navigate("/history");
            }}
              className="hover:bg-green-500/10 hover:text-green-400 rounded-full py-3 px-7 transition ease-in-out hover:scale-110 duration-300"
            >
              History
            </li>
            <li
              onClick={() => {
                navigate("/about");
              }}
              className="hover:bg-green-500/10 hover:text-green-400 rounded-full py-3 px-7 transition ease-in-out hover:scale-110 duration-300"
            >
              About Us
            </li>
            <li
              onClick={() => {
                navigate("/FAQ");
              }}
              className="hover:bg-green-500/10 hover:text-green-400 rounded-full py-3 px-7 transition ease-in-out hover:scale-110 duration-300"
            >
              FAQs
            </li>
          </ul>
          <ul className="hidden lg:flex justify-center space-x-2 items-center">
            {isLoggedIn ? (
              <>
                <li
                  onClick={handleLogout}
                  className="py-3 px-6 hover:bg-green-500/10 hover:text-green-400 rounded-md text-base transition ease-in-out hover:scale-110 duration-300"
                >
                  Logout
                </li>
              </>
            ) : (
              <>
                <li
                  onClick={() => {
                    navigate("/register");
                    handleLogin();
                  }}
                  className="py-3 px-6 hover:bg-green-500/10 hover:text-green-400 rounded-md text-base transition ease-in-out hover:scale-110 duration-300"
                >
                  Register
                </li>
                <li
                  onClick={() => {
                    navigate("/signin");
                    handleLogin();
                  }}
                  className="py-3 px-6 hover:bg-green-500/10 rounded-md text-[#fff] bg-gradient-to-r from-green-900 to-green-700 text-base transition ease-in-out hover:scale-110 duration-300"
                >
                  Sign In
                </li>
              </>
            )}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed bg-neutral-900 right-0 z-20 space-y-10 w-full p-12 flex flex-col justify-center items-center lg:hidden text-base">
            <a
              href="/home"
              className="hover:bg-green-500/10 hover:text-green-400 text-center rounded-full py-3 px-7 transition ease-in-out hover:scale-110 duration-300"
            >
              Home
            </a>
            <a
            onClick={() => {
              navigate("/chatbot");
            }}
              href="/featureSection"
              className="hover:bg-green-500/10 hover:text-green-400 text-center rounded-full py-3 px-7 transition ease-in-out hover:scale-110 duration-300"
            >
              Chatbot
            </a>
            <a
            onClick={() => {
              navigate("/history");
            }}
             className="hover:bg-green-500/10 hover:text-green-400 text-center rounded-full py-3 px-7 transition ease-in-out hover:scale-110 duration-300">
              History
            </a>
            <a
              onClick={() => {
                props.handleClick("aboutus");
              }}
              className="hover:bg-green-500/10 hover:text-green-400 text-center rounded-full py-3 px-7 transition ease-in-out hover:scale-110 duration-300"
            >
              About Us
            </a>
            <a className="hover:bg-green-500/10 hover:text-green-400 text-center rounded-full py-3 px-7 transition ease-in-out hover:scale-110 duration-300">
              FAQs
            </a>
            <div className="flex space-x-6">
              {isLoggedIn ? (
                <div
                  onClick={handleLogout}
                  className="py-3 px-6 hover:bg-green-500/10 hover:text-green-400 rounded-md text-base transition ease-in-out hover:scale-110 duration-300"
                >
                  Logout
                </div>
              ) : (
                <>
                  <div
                    onClick={() => {
                      navigate("/register");
                      handleLogin();
                    }}
                    className="py-3 px-6 hover:bg-green-500/10 hover:text-green-400 rounded-md text-base transition ease-in-out hover:scale-110 duration-300"
                  >
                    Register
                  </div>
                  <div
                    onClick={() => {
                      navigate("/signin");
                      handleLogin();
                    }}
                    className="py-3 px-6 hover:bg-green-500/10 rounded-md text-[#fff] bg-gradient-to-r from-green-900 to-green-700 text-base transition ease-in-out hover:scale-110 duration-300"
                  >
                    Sign In
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
