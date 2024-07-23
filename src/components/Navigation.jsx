import React from 'react'


function Navigation() {
  return (
    <>
        <div className='py-10 text-right text-xl block text-[#F7C59F] w-100' style={{
            backgroundImage: `url("../assets/scalloping.png")`
        }}>
            <button className='pr-4'> About Me </button>
            <button className='pr-4'> Projects </button>
            <button className='pr-4'> Contact </button>
        </div>
    </>
  )
}

export default Navigation