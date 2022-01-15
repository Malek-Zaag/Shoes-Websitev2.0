import React from 'react'
import home from "./home.module.css"
import image from "../images/311826.png"
import { BsFacebook, BsTwitter, BsGithub } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa'
const Home = () => {
  return (
    <div>
      <div>
        <div className={home.title}>MShoes</div>
        <div className={home.about}>
          <img src={image} alt='logo' />
          <div className={home.abouttext}>
            <div>About US</div>
            <div>
              Our E-commerce entreprise is supposed to sell<br></br>
              the best quality shoes in the region with extraordinary<br></br>
              prices , we are now online but we are planning to have a<br></br>
              local shop in the city .
            </div>
          </div>
        </div>
        <div className={home.contact}>Contact US
          <div className={home.contactext}>
            <div className={home.contactcontainer}>
              <div><a href="https://www.facebook.com/malek.zg.5/"><BsFacebook />Facebook</a></div>
              <div><a href="https://www.instagram.com/zaagmelek/"><FaInstagram />Instagram</a></div>
              <div><a href="https://twitter.com/ZaagMalek"><BsTwitter />Twitter</a></div>
              <div><a href="https://github.com/Malek-Zaag"><BsGithub />Github</a> </div>
            </div>
          </div>
        </div>
        <div className={home.copyright}>&copy;Malek2022</div>
      </div>
    </div>
  )
}

export default Home
