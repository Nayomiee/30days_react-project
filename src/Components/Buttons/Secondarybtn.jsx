import React from 'react'
import { Link } from 'react-router-dom'


const Secondarybtn = ({button,to,text}) => {
  return (
    <div>
       <button className="border-2 px-6 capitalize py-2 rounded-lg bg-[#0d1a29] text-white hover:transition-all hover:duration-300 hover:ease-in-out hover:bg-white hover:border-[#0d1a29] font-semibold hover:text-[#0d1a29]">
        {button}
        <Link to={to}>{text}</Link>
      </button>
    </div>
  )
}

export default Secondarybtn
