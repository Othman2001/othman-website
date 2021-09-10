import React from 'react'
import "../css/abou.css"

function AboutPage(){
const skills = [
    "HTML5",
    "CSS3",
    "BOOTSTRAP4",
    "SASS",
    "JAVASCRIPT",
    "REACTJS",
    "REDUX",
    "REACT CONTEXT"
]
    return(
      <div className="about">
      <div className= "about__textzone">
      <h1> About Me </h1>
      <h4 className= "text">
   Professional Front end Developer, creating modern layouts and modern appliactions uinsg React js and best frameworks in the industry.<br/>
          software development in one of the major fields in the world. iam aiming to use my front end skills and agile knowledge to build the best websites.<br/>
          Iam well orginzed person wiht good problem solving skills
          interested in entire frontend spectrum and working on ambtious projects with postive people
      </h4>
      </div>

          <div className= "about__skilss">
            <h2> skills </h2>
              <hr />
              <ul className= "skill">
                  {
                      skills.map((skill)=>(<li>{skill}

                      </li>))
                  }
              </ul>
          </div>
      </div>
    )
}
export  default  AboutPage
