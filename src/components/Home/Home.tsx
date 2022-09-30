import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import './home.css'

const Home = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('signup') && localStorage.getItem('login')){
        navigate('/home')
        }
      else if(localStorage.getItem('signup')){
        navigate('/login')
      }
      else if(!localStorage.getItem('signup')){
        navigate('/')
      }
      },[])
 
  return (
    <div className='main-home'>
        <Navbar />

        <h1>Search Images and News...</h1>

        
        <Carousel className='home' >
            <Carousel.Item interval={1500} >
                <img
                className="home-image"
                src="https://media.istockphoto.com/photos/homepage-domain-html-web-design-concept-picture-id517373852?k=20&m=517373852&s=612x612&w=0&h=KCl2xBUltXs89Xo8flIC7U72uBQaZQllN2b3yDJ7DJM="
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                className="home-image"
                src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/988/posts/30254/image/website-homepage%20(1).jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1500} >
                <img
                className="home-image"
                src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373__480.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    </div>
  )
}

export default Home



