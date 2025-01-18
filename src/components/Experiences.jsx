import React from 'react'
import { EXPERIENCES } from '../constraints'
import { motion } from 'motion/react'


function Experiences() {
    return (
        <div className='border-b border-neutral-700 pb-24 lg:mb-10'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>Experience</motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='flex flex-wrap justify-center'>
                        <div className='w-full lg:w-1/4 sm:text-center'>
                            <motion.p
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1.5 }}
                                className='mb-2 text-sm text-neutral-400 text-center'>{experience.year}</motion.p>
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <motion.h6
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 2 }}
                                className='mb-2 font-semibold justify-center text-center'>
                                {experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span>
                            </motion.h6>
                            <motion.p
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 5 }}
                                className='mb-4 text-neutral-400'>{experience.description}</motion.p>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 5 }}
                                className='flex flex-wrap gap-2'>
                                {experience.technologies.map((technology, index) => (
                                    <motion.span
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.25 }}
                                        transition={{ duration: 1 }}

                                        key={index}
                                        className='mr-2 mt-4 px-2 text-sm font-semibold rounded text-purple-800'
                                        style={{
                                            background: "rgba(0, 0, 0, 0.4)",
                                            backdropFilter: "blur(8px)",
                                        }}>
                                        {technology}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experiences