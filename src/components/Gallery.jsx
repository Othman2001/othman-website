import React from 'react'
import"../css/gallery.css"
import { Button } from '@material-ui/core';
import { motion } from "framer-motion";

const variants = {
    hidden : {x:-7000 , opacity:0},
    visible : {x:0 , opacity:1}
}
function Gallery ({image , link}){
    return(
        <div className="gallery">
            <div className= "card">
                < motion.img 
                initial = "hidden"
                animate = "visible"
                variants={variants}
                 whileHover= {{scale:1.1}}
                src={image} className= "card__image"/>
               <div className="card__button">
                   <Button variant="outlined" className="home__button">
                       <a href={link} >view</a>
                   </Button>
               </div>
            </div>
        </div>
    )
}
export default  Gallery;
