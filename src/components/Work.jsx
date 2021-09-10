import React from 'react'
import "../css/work.css"
import Gallery from "./Gallery";
import project2 from '../images/project2.jpg'
import project3 from '../images/project3.jpg'
import project4 from '../images/project4.png'
import project5 from '../images/project5.png'
import project6 from '../images/project6.png'
import project7 from '../images/project7.png'
import project8 from '../images/fitness.PNG'

function Work (){
const data = [
    
    {imageUrl: project8 , projectLink:"http://othman-developer.me/Fitness-LandingPage/"},
    {imageUrl: project2 , projectLink:"http://othman-developer.me/CoderBreaker/" },
    {imageUrl: project3, projectLink: "http://othman-developer.me/ModeiestWebsite/"},
    {imageUrl: project4, projectLink: "http://othman-developer.me/LandingPage/"},
    {imageUrl: project5, projectLink: "https://otman-developer.web.app/"},
    {imageUrl: project6, projectLink: "https://ave-fashion-33dc1.firebaseapp.com/"},
    {imageUrl: project7, projectLink: "https://clone-ad9a5.web.app/"}


]

return(
    <div className= "work">
        {
            data.map((item)=>(
                <Gallery image={item.imageUrl} link={item.projectLink} />
            ))
        }
    </div>
)
}
export default  Work;
