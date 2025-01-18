import React from 'react'
import { PROJECTS } from '../constraints'
import { motion } from 'motion/react'

function Projects() {
    return (
        <div className='border-b border-neutral-700 pb-4 mb-10'>
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
            className='text-4xl text-center my-20'>Projects</motion.h2>
            {PROJECTS.map((project, index) => (
                <div key={index} className='mb-10 flex flex-wrap justify-center'>
                    <div className='w-full lg:w-1/4 flex justify-center items-center'>
                        <motion.img 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 2 }}
                        src={project.image} alt={project.title} width={200} height={200} className='mb-6 rounded-md' />
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4 '>
                        <motion.h6
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 2 }}
                         className='text-center mb-2 font-semibold'>{project.title}</motion.h6>
                        <motion.p 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 3 }}
                        className=' mb-4 text-neutral-400'>{project.description}</motion.p>
                        <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 4 }}
                        className='flex flex-wrap gap-2'>
                            {project.technologies.map((technology, index) => (
                                <motion.span
                                whileHover={{ scale: 1.25 }}
                                initial={{ scale: 1 }}
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
    )
}

export default Projects