import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Signup from './Signup';
import Organisation from './Organisation';
import Job from './Job';

const Navbar = ({ setActiveTab }) => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isOrganisationOpen, setIsOrganisationOpen] = useState(false);
  const [isJobOpen, setIsJobOpen] = useState(false);
  const [dimBackground, setDimBackground] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const signupFormRef = useRef(null);
  const organisationFormRef = useRef(null);
  const jobFormRef = useRef(null);

  const toggleSignup = () => {
    setIsSignupOpen(!isSignupOpen);
    setDimBackground(!dimBackground);
  };

  const toggleJob = () => {
    setIsJobOpen(!isJobOpen);
    setDimBackground(!dimBackground);
  };

  const toggleOrganisation = () => {
    setIsOrganisationOpen(!isOrganisationOpen);
    setDimBackground(!dimBackground);
  };

  const handleSignupClose = (e) => {
    if (signupFormRef.current && signupFormRef.current.contains(e.target)) {
      return;
    }
    setIsSignupOpen(false);
    setDimBackground(false);
  };

  const handleOrganisationClose = (e) => {
    if (organisationFormRef.current && organisationFormRef.current.contains(e.target)) {
      return;
    }
    setIsOrganisationOpen(false);
    setDimBackground(false);
  };

  const handleJobClose = (e) => {
    if (jobFormRef.current && jobFormRef.current.contains(e.target)) {
      return;
    }
    setIsJobOpen(false);
    setDimBackground(false);
  };

  return (
    <div className="relative z-50">
      <div className="bg-gray-100 py-4 fixed top-0 left-0 right-0 w-full">
        <div className="w-full flex justify-between items-center px-4">
          <ul
            onMouseLeave={() => {
              if (!isSignupOpen && !isOrganisationOpen && !isJobOpen) {
                setPosition((prev) => ({
                  ...prev,
                  opacity: 0,
                }));
              }
            }}
            className="relative flex rounded-full border-4 border-purple-600 bg-transparent p-1 w-full items-center"
          >
            <div className="flex items-center mr-6">
              <lord-icon
                src="https://cdn.lordicon.com/wmwqvixz.json"
                trigger="hover"
                style={{ width: '40px', height: '40px', marginLeft: '10px' }}
              ></lord-icon>
              <div className="ml-4 font-bold text-lg">
                AppName
              </div>
            </div>
            <div className="flex justify-center items-center flex-grow">
              <Tab setPosition={setPosition} setActiveTab={setActiveTab}>Home</Tab>
              <Tab setPosition={setPosition} setActiveTab={toggleOrganisation}>Profile</Tab>
              <Tab setPosition={setPosition} setActiveTab={toggleJob}>Job</Tab>
              <Tab setPosition={setPosition} setActiveTab={setActiveTab}>Features</Tab>
              <Tab setPosition={setPosition} setActiveTab={toggleSignup}>Signup</Tab>
            </div>
            <Cursor position={position} />
            <motion.input
              type="text"
              placeholder="Search"
              className="border border-gray-400 w-80 rounded-md py-1 px-3 mr-6"
              whileHover={{ scale: 1.05 }}
            />
            <div className="ml-1 mr-2">
              <lord-icon
                src="https://cdn.lordicon.com/ojnjgkun.json"
                trigger="hover"
                style={{ width: '40px', height: '40px' }}
              ></lord-icon>
            </div>
            <div className="ml-1 mr-2">
              <lord-icon
                src="https://cdn.lordicon.com/lznlxwtc.json"
                trigger="hover"
                style={{ width: '40px', height: '40px' }}
              ></lord-icon>
            </div>
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {isSignupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: dimBackground ? 1 : 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50"
            onClick={handleSignupClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-transparent rounded-lg p-6 z-50"
              style={{ minWidth: '300px' }}
              ref={signupFormRef}
              onClick={(e) => e.stopPropagation()}
            >
              <Signup onClose={handleSignupClose} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isJobOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: dimBackground ? 1 : 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50"
            onClick={handleJobClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-transparent rounded-lg p-6 z-50"
              style={{
                maxHeight: 'calc(100vh - 80px)', 
                overflow: 'auto',
                marginTop: '80px',
              }}
              ref={jobFormRef}
              onClick={(e) => e.stopPropagation()}
            >
              <Job onClose={handleJobClose} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOrganisationOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: dimBackground ? 1 : 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50"
            onClick={handleOrganisationClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-transparent rounded-lg p-6 z-50"
              style={{ minWidth: '300px' }}
              ref={organisationFormRef}
              onClick={(e) => e.stopPropagation()}
            >
              <Organisation onClose={handleOrganisationClose} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, setPosition, setActiveTab }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={() => setActiveTab(children)}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs font-medium text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full md:h-12 text-white"
      style={{
        backgroundColor: `rgba(50, 50, 50, 0.9999)`,
        width: "100px",
      }}
    />
  );
};

export default Navbar;
