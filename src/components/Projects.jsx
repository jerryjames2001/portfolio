import React, { useEffect, useRef, useState } from 'react'
import { PROJECTS } from '../constraints'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlayCircle } from "react-icons/fa"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const containerRef = useRef(null)
    const cardRefs = useRef([])
    const [activeVideo, setActiveVideo] = useState(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!containerRef.current || cardRefs.current.length === 0) return

            const totalWidth = (cardRefs.current.length) * window.innerWidth

            gsap.to(cardRefs.current, {
                xPercent: -100 * (cardRefs.current.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    start: 'top top',
                    end: `+=${totalWidth}`,
                    anticipatePin: 1
                }
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <>
            <style>{`body, html { overflow-x: hidden; }`}</style>

            <div ref={containerRef} className="w-full h-screen mb-28">
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="text-4xl text-center text-white mt-6"
                >
                    Projects
                </motion.h2>

                <div className="flex h-screen items-center" style={{ width: `${PROJECTS.length * 100}vw` }}>
                    {PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className="w-[100vw] h-screen flex flex-col items-center justify-center overflow-y-auto pt-0"
                        >
                            <div className="flex flex-col items-center justify-center text-center w-full h-full">
                                {/* Image with Play Button */}
                                <div className="relative group w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] flex items-center justify-center">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="max-h-full max-w-full object-contain rounded-md"
                                    />
                                    {project.video && (
                                        <button
                                            onClick={() => setActiveVideo(project)}
                                            className="absolute text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <FaPlayCircle />
                                        </button>
                                    )}
                                </div>

                                <h6 className="text-xl sm:text-2xl lg:text-3xl mb-2 text-white">
                                    {project.title}
                                </h6>

                                <p className="text-neutral-400 text-center w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mb-2 px-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 justify-center mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <motion.span
                                            whileHover={{ scale: 1.25 }}
                                            initial={{ scale: 1 }}
                                            transition={{ duration: 1 }}
                                            key={i}
                                            className="mr-2 mt-2 px-2 text-sm font-semibold rounded text-purple-800"
                                            style={{
                                                background: 'rgba(0, 0, 0, 0.4)',
                                                backdropFilter: 'blur(8px)',
                                            }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal Video Player */}
                <AnimatePresence>
                    {activeVideo && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-50 flex items-center justify-center"
                            onClick={() => setActiveVideo(null)} // click outside to close
                        >
                            {/* Soft shadow only */}
                            <div className="absolute inset-0 bg-black bg-opacity-20 blur-sm pointer-events-none" />

                            {/* Video modal */}
                            <motion.div
                                initial={{ scale: 0.6, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.6, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="relative w-[85vw] h-[85vh] bg-black rounded-xl shadow-2xl overflow-hidden z-10"
                                onClick={(e) => e.stopPropagation()} // prevent closing on inner click
                            >
                                {activeVideo.videoType === 'youtube' ? (
                                    <iframe
                                        className="w-full h-full"
                                        src={activeVideo.video.replace("youtu.be", "www.youtube.com/embed")}
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                        title={activeVideo.title}
                                    />
                                ) : (
                                    <video className="w-full h-full" controls autoPlay>
                                        <source src={activeVideo.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </>
    )
}

export default Projects