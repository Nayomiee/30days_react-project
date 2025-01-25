import React from 'react'
import Card from './Card'


const CardGallery = () => {
  return (
    <div className='w-[90%] bg-white rounded-md px-5 mx-auto py-10 text-justify grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-6'>
      <Card text={"View Project"} to={'/counterapp'} name={"Counter App"} info={"A simple React counter app to increment, decrement and reset values"} img={'/src/assets/Images/counterapp.png'} placeholder={'Counter App Folder'}/>
    </div>
  )
}

export default CardGallery
