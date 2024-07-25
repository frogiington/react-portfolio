import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'

function AboutMe() {
  return (
    <>
    <div className='content'>
      <Header className='Head'/>
      <div>
        <div className='text-[#71A9F7] body'>
            <h3 className='mt-10 pb-2 font-bold bg-[#4C061D] text-[30px]'> About Me </h3>
            {/* <img src='src\assets\flower pfp.png' className=''></img> */}
            <p className= 'font-sans pb-10'>
                Hello! I am a newly graduated Software Engineering student versed in the MERN stack of programming. I love figuring out how to make my applications visually interesting, and I focus on colors and creativity, providing stunning user-interfaces with custom backgrounds. 
                Primarily, I work through JavaScript, but I am in the process of learning C# as well. Whether it is front-end or back-end work, I'm your girl!
            </p>
        </div>
        <Footer className='Foot'/>
      </div>
    </div>
    </>
  )
}

export default AboutMe