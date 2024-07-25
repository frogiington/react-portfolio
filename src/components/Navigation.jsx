import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './UI/Navbar';


function Navigation() {
  return (
    // <Navbar
    //   link={[
    //       <Link key={1} className="nav-link" to ="/">
    //         About Me
    //       </Link>,
    //       <Link key={2} className="nav-link" to="/portfolio">
    //         Portflio
    //       </Link>,
    //       <Link key={3} className= "nav-link" to="/Contact">
    //         Contact
    //       </Link>

    //   ]}
        <div className='py-10 text-right text-xl block text-[#F7C59F] w-100'>
            <button className='pr-4'> About Me </button>
            <button className='pr-4'> Projects </button>
            <button className='pr-4'> Contact </button>
        </div>
  );
}

export default Navigation