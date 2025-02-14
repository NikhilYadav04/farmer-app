import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavList from '../ui/NavList';

const StyledLi = styled.li`
  border-radius: 0.375rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  transition-property:
    color, background-color, border-color, text-decoration-color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

const Navbar = (props) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  if (localStorage.getItem('userdata') && !isLoggedIn) {
    setIsLoggedIn(true);
  }

  const handleLogin = () => {
    if (localStorage.getItem('userdata')) {
      setIsLoggedIn(true);
    }
    //setIsLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem('userdata');
    setIsLoggedIn(false);
  };

  return (
    <nav className="top-4 w-full px-3 py-2">
      <div className="container relative mx-auto text-sm">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <img className="h-12 w-12 bg-green-600" src={logo} alt="logo" />
          </div>
          <ul className="bg-green-00/50 ml-[6.5rem] hidden space-x-1 rounded-full border border-neutral-700 px-2 py-2 text-base tracking-wide lg:flex">
            <NavList to="/home" type="nav">
              Home
            </NavList>
            <NavList to="/chatbot" type="nav">
              Chatbot
            </NavList>
            <NavList to="/history" type="nav">
              History
            </NavList>
            <NavList to="/about" type="nav">
              About Us
            </NavList>
            <NavList to="/FAQ" type="nav">
              FAQs
            </NavList>
          </ul>
          <ul className="hidden items-center justify-center space-x-2 lg:flex">
            {isLoggedIn ? (
              <>
                <NavList onClick={handleLogout} type="secondary">
                  Logout
                </NavList>
              </>
            ) : (
              <>
                <NavList onClick={handleLogin} type="secondary" to="/register">
                  Register
                </NavList>
                <NavList onClick={handleLogin} type="primary" to="/signin">
                  Sign In
                </NavList>
              </>
            )}
          </ul>
          <div className="flex-col justify-end md:flex lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <ul className="fixed right-0 z-20 flex w-full flex-col items-center justify-center space-y-10 bg-neutral-900 p-12 text-base lg:hidden">
            <NavList to="/home" type="nav">
              Home
            </NavList>
            <NavList to="/chatbot" type="nav">
              Chatbot
            </NavList>
            <NavList to="/history" type="nav">
              History
            </NavList>
            <NavList to="/about" type="nav">
              About Us
            </NavList>
            <NavList to="/FAQ" type="nav">
              FAQs
            </NavList>
            <div className="flex space-x-6">
              {isLoggedIn ? (
                <NavList onClick={handleLogout} type="secondary">
                  Logout
                </NavList>
              ) : (
                <>
                  <NavList
                    onClick={handleLogin}
                    type="secondary"
                    to="/register"
                  >
                    Register
                  </NavList>
                  <NavList onClick={handleLogin} type="primary" to="/signin">
                    Sign In
                  </NavList>
                </>
              )}
            </div>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
