import React from "react"
import { Link } from "react-router-dom"



//import { Outlet } from "react-router-dom"

const About = () => {
  //let navigation = useNavigate();
  //console.log(props)
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to={`/about/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`/about/about-author`}>About Author</Link>
        </li>
      </ul>
  </div>
)

}
export default About