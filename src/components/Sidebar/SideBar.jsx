import { NavLink } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import {MdOutlineContactMail} from 'react-icons/md'
import {MdOutlineWeb} from 'react-icons/md'
import {SiSemanticuireact} from 'react-icons/si'

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/tecnologias",
    name: "tecnologias",
    icon: <MdOutlineContactMail />,
  },
  {
    path: "/trabajos",
    name: "trabajos",
    icon: <MdOutlineWeb />,
  },
  {
    path: "/contactos",
    name: "contactos",
    icon: <SiSemanticuireact />,
  }
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  
    const [windowSize, setWindowSize] = useState({width:1000,height: 10000,});

   

    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();

      if(windowSize.width < 768){
        setIsOpen(false);
      }
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, [window.innerWidth, window.innerHeight, isOpen]); 
    
  

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "15vw" : "4vw",
            minWidth: isOpen ? "160px" : "60px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  KCastroverde
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeclassname="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main >{children}</main>
      </div>
    </>
  );
};

export default SideBar;
