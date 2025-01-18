import React from "react";
import me_anime from "../assets/me_anime1.jpeg";
import { ABOUT_TEXT } from "../constraints";
import { motion } from "motion/react";

function About() {
  return (
    <div className="border-b border-neutral-700 pb-6 lg:mb-10">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5, delay:0.25}}
         className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <img
              src={me_anime}
              alt="about"
              className="h-96 w-auto object-contain sm:h-50 lg:h-80 xl:h-96 rounded-xl"
            />
          </div>
        </motion.div>

        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:0.5, delay:0.25}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
                {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
