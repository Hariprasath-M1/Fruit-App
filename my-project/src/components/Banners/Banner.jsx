import React from 'react'
import BannerPng from "../../assets/fruits/Banner.png"
import { motion } from "framer-motion"
import { FadeLeft, Fadeup } from "../../utility/animation"

const Banner = () => {
  return (<section className='bg-secondary/10 p-10'>
    <div className='container grid grid-cols-1 md:grid-cols-2
    space-y-6 md:space-y-14'>
      {/* Banner Image */}
      <div className='flex justify-center items-center'>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          viewport={{ once: true }}
          src={BannerPng}
          alt="" className='w-[300px] md:max-w-[400px]
           h-full-object-cover drop-shadow' />
      </div>
      {/* Brand Info */}
      <div className='flex flex-col justify-center'>
        <div className='text-center md:text-left space-y-4
        lg:max-w-[400px]'>
          <motion.h1
            variants={Fadeup(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='text-2xl lg:text-4xl font-bold uppercase'>
            {" "}
            Brnad Info
          </motion.h1>
          <motion.p
            variants={Fadeup(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Omnis consequuntur nostrum, vitae alias vero, necessitatibus sequi
            tempora veritatis debitis dolor pariatur velit maxime sed
            voluptates sint dolore aut expedita. Aspernatur.</motion.p>
          <motion.p
            variants={Fadeup(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem magnam excepturi fugit dolores quaerat deleniti
            aliquam expedita hic recusandae facilis.
          </motion.p>
          {/* button section */}
          <motion.div
            variants={Fadeup(1.1)}
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

export default Banner