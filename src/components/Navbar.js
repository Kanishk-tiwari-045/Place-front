import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SlideTabsExample = () => {
  return (
    <div className="bg-neutral-100 py-20">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-full max-w-screen-lg rounded-full border-2 border-purple-600 bg-transparent p-1"
      style={{ width: "100%"}} // Adjust opacity or transparency here
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      <Tab setPosition={setPosition}>Blog</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs font-medium text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
      style={{ flex: 1 }} // Make tabs spread evenly
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
        backgroundColor: `rgba(50, 50, 50, 0.9999)`, // Dark grayish-black color
        width: '100px', // Example width
      }}
    />
  );
};

export default SlideTabsExample;
