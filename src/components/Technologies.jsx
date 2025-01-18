import React from 'react'
import python from '../assets/techs/python.png'
import opencv from '../assets/techs/opencv.png'
import ml from '../assets/techs/ml.png'
import ai from '../assets/techs/ai-model.png'
import css from '../assets/techs/css-3.png'
import vuln from '../assets/techs/security-audit.png'
import bug from '../assets/techs/bug-report.png'
import { motion } from 'motion/react'


import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiGnubash, SiMongodb } from 'react-icons/si'
import { DiMysql } from 'react-icons/di'
import { FaHtml5, FaJs, FaNodeJs, FaPhp } from 'react-icons/fa'


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
})

function Technologies() {
    return (
        <div className='border-b border-neutral-700 pb-24 lg:mb-10'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>Technologies</motion.h2>

            {/* row one */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4 mb-12'>

                <motion.div
                    variants={iconVariants(1.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src={python} alt="Python icon" />
                </motion.div>
            </motion.div>

            {/* row two */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4 mb-12'>
                <motion.div
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src={opencv} alt="Opencv icon" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src={ml} alt="ML icon" />
                </motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src={ai} alt="AI icon" className='bg-white rounded-lg' />
                </motion.div>
            </motion.div>

            {/* row three */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4 mb-12'>

                <motion.div
                    variants={iconVariants(1.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaHtml5 className='text-7xl text-[#e34c26]' />
                </motion.div>

                <motion.div
                    variants={iconVariants(1.75)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src={css} alt="css image" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaPhp className='text-7xl text-[#8892be]' />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.25)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiMysql className='text-7xl text-cyan-500' />
                </motion.div>
            </motion.div>

            {/* row four */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4 mb-12'>

                <motion.div
                    variants={iconVariants(1.75)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaJs className='text-7xl text-yellow-400' />
                </motion.div>

                <motion.div
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.25)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssFill className='text-7xl text-cyan-400' />
                </motion.div>

                <motion.div
                    variants={iconVariants(1.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl text-green-500' />
                </motion.div>

                <motion.div
                    variants={iconVariants(1.85)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl text-green-500' />
                </motion.div>
            </motion.div>

            {/* row five */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className='flex flex-wrap items-center justify-center gap-4 mb-12'>

                <motion.div
                    variants={iconVariants(1.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiGnubash className='text-7xl text-white' />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.25)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src={vuln} alt="vulnerability assessment image" />
                </motion.div>

                <motion.div
                    variants={iconVariants(2.75)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <img src={bug} alt="bug bounty image" />
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Technologies