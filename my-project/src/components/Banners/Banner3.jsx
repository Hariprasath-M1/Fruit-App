import React from 'react'
import BannerPng from "../../assets/fruits/banner-bg.jpg"
import { motion } from "framer-motion"
import { FadeLeft } from "../../utility/animation"

const bgStyle = {
    backgroundImage: `url(${BannerPng})`,
    backgroudPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat"
};
const Banner3 = () => {
    return (
        <section className='container mb-12'>
            <div 
            style={bgStyle}
            className='container grid grid-cols-1 md:grid-cols-2
    space-y-6 md:space-y-14 rounded-3xl p-10'>
                {/* blank div */}
                <div>

                </div>
                {/* Brand Info */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4
        lg:max-w-[400px]'>
                        <motion.h1
                            variants={FadeLeft(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className='text-2xl lg:text-4xl font-bold uppercase'>
                            {" "}
                            Brnad Info
                        </motion.h1>
                        <motion.p
                            variants={FadeLeft(0.7)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Omnis consequuntur nostrum, vitae alias vero, necessitatibus sequi
                            tempora veritatis debitis dolor pariatur velit maxime sed
                            voluptates sint dolore aut expedita. Aspernatur.
                            </motion.p>
                        {/* button section */}
                        <motion.div
                            variants={FadeLeft(0.9)}
                            initial="hidden"
                            animate="visible"
                            className='flex justify-center md:justify-start'>
                            <button className='primary-btn'>Learn More</button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner3