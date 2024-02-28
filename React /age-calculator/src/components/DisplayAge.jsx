import React from "react";
import { motion } from "framer-motion";

function DisplayAge({ age }) {
  
  return (
    <div className="mt-24 flex justify-center">
      <motion.h3
        className="text-blue-800 text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {age ? (
          <motion.span
            key={age}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Age is: {age}
          </motion.span>
        ) : (
          "Select Date of Birth"
        )}
      </motion.h3>
    </div>
  );
}

export default DisplayAge;
