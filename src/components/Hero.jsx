import React from 'react'
import { HERO_CONTENT } from '../constraints'
import mine from "../assets/no_bg_mine.png"
import { motion } from "motion/react"
import resume from "/Jerry James Resume.pdf"
import Resume_Button from "../constraints/Resume_Button"
import { IoMdDownload } from "react-icons/io"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: delay },
    },
})

function Hero() {
    return (
        <div className='border-b border-neutral-700 pb-6 lg:mb-10'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>

                        <motion.h1
                            variants={container(0.25)}
                            initial='hidden'
                            animate='visible'
                            className='pb-14 font-thin tracking-tight leading-tight bg-gradient-to-r from-blue-400 via-teal-500 to-green-400 bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-transparent lg:mt-14'>
                            Jerry James
                        </motion.h1>

                        <motion.h2
                            variants={container(1)}
                            initial='hidden'
                            animate='visible'
                            className='bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-lg sm:text-xl md:text-2xl tracking-tight text-transparent'>
                            Full Stack Developer
                            <span className='hidden sm:inline-block mx-2'>|</span>
                            <span className='block sm:inline-block'>Penetration Tester</span>
                        </motion.h2>

                        <motion.p
                            variants={container(1.75)}
                            initial='hidden'
                            animate='visible'
                            className='my-2 max-w-xl pt-6 font-light tracking-tight'> {HERO_CONTENT} </motion.p>
                        {/* download resume button here */}
                        <motion.div
                            variants={container(2)}
                            initial="hidden"
                            animate="visible"
                            className="mt-6"
                        >
                            <a href={resume} download="Jerry_James_Resume.pdf">
                                <Resume_Button>
                                    <IoMdDownload className="text-2xl text-white"/>
                                    <span>Resume</span>
                                </Resume_Button>
                            </a>

                        </motion.div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center lg:justify-end'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.25 }}
                            src={mine}
                            alt="profile pic"
                            className='h-96 w-auto object-contain sm:h-50 lg:h-80 xl:h-96'
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
