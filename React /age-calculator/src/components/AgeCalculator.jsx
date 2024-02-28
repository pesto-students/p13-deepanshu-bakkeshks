import React, { useState } from "react";
import { motion } from "framer-motion";
import DisplayAge from "./DisplayAge";

function AgeCalculator() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState("");
  const text = "SELECT YOUR (DATE OF BIRTH):".split(" ");

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const calculateAge = () => {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();

    const yearDiff = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    const dayDiff = currentDate.getDate() - birthDate.getDate();

    let ageString = "";

    if (yearDiff > 0) {
      ageString += `${yearDiff} year `;
    }
    if (monthDiff > 0) {
      ageString += `${monthDiff} month `;
    }
    if (dayDiff > 0) {
      ageString += `${dayDiff} day`;
    }

    setAge(ageString);
  };
  return (
    <>
      <div className="flex justify-center mt-12 pr-36 ">
        <label className="text-l uppercase  text-blue-900 mt-1">
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
        </label>
        <input
          type="date"
          className="border-4"
          value={birthdate}
          onChange={handleBirthdateChange}
        ></input>
      </div>

      <div className="flex justify-center mt-12">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={calculateAge}
        >
          Calculate Age
        </motion.button>
      </div>
      <DisplayAge age={age} />
    </>
  );
}

export default AgeCalculator;
