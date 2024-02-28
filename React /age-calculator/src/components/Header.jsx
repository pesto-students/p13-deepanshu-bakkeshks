import React, {useState} from "react";
import { motion } from "framer-motion"; 

function Header(){
    const text = " React Age Calculator".split(" ");
  return (
    <>
      <div className="flex justify-center mt-8">
        <div></div>
        <motion.h2 whileHover={{scale:1.2}} transition={{duration:0.3}} className="text-5xl text-blue-900 hover:text-blue-400 mt-2">
        {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
            key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
          
        </motion.h2>
      
      </div>
       
    </>
  );
  }

export default Header;
