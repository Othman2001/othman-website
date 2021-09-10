import React from 'react'
import '../css/home.css'
import { Button } from '@material-ui/core';
import { motion } from "framer-motion";
import Robot from "./Robot";
function HomePage(){
    return(

        <div className= "home">

           <div className="home__main">
               <main className="home__grid">
                   <div className="home_part1">
                   <motion.h1
                   animate = {{  scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],}}
                   > <span className="span"> HI, </span>
                      <br />
                   I'm  <span className= "span"> Othman </span>
                   <br />
                   Front   <span className= "span">  end developer </span> 
                    </motion.h1>
                   <p className = "home__main__text">
                   Front-End-Developer / ReactJS </p>
                   <Button variant="outlined" className="home__button">
                       Contact Me
                   </Button>
                   </div>

                   <div className="home_part2">
                <Robot />
                   </div>
               </main>
           </div>
        </div>
    )
}
export  default HomePage
