import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import "../css/sidebar.css"

import VisibilityIcon from '@material-ui/icons/Visibility';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function SideBar() {


    return (



                <div className = "sidebar">
                    {/* icons */}
                    <div className="sidebar__icons">
                        <Link to="/" >
                            <HomeIcon  className = "sidebar__icon"  />
                        </Link>

                        <Link to="/about">
                            <PersonIcon className = "sidebar__icon" />
                        </Link>
                         <Link to="/work">
                             <VisibilityIcon className = "sidebar__icon" />
                         </Link>

                    </div>
                    <div className= "socail">
                        <a href="https://www.facebook.com/othman.abdealziz/">
                            <FacebookIcon className = "sidebar__icon" ></FacebookIcon>
                        </a>
                       <a href= "https://www.linkedin.com/in/othman-abdelaziz-44a94b197/">
                           <LinkedInIcon className = "sidebar__icon" />

                       </a>
                        <a href= "https://github.com/Othman2001">
                            <GitHubIcon className = "sidebar__icon"  />

                        </a>
                    </div>
                </div>





    )
}

export default SideBar
