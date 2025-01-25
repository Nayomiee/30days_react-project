import React from 'react'
import Header from '../../Components/Header/Header'
import CardGallery from "../../Components/ProjectCard/CardGallery";


const Projects = () => {
  return (
    <div className='h-full w-full bg-[#111a38] pb-20'>
      <Header/>
      <h1 className='text-white mt-5 text-5xl font-bold text-center'>PROJECTS</h1>
      <div className='my-5'>
      <CardGallery/>
      </div>
      
    </div>
  )
}

export default Projects
