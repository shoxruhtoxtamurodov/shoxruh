import React from 'react'

function Banner() {
  return (
    <div
    className='h-[750px] pl-44 flex items-center '
    style={{backgroundImage:"url(https://kartinkof.club/uploads/posts/2022-09/1662466521_1-kartinkof-club-p-novie-i-krasivie-kartinki-gelendvagen-1.jpg)",
    backgroundSize:"cover",
    backgroundPosition:"center"
    }}>
       <div className='w-1/2 text-white'>
        <h1 className='text-7xl pb-7'>Gelik rasmi </h1>
        <p className='text-justify text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam nesciunt, maiores earum optio nisi.</p>
        </div> 
    </div>
  )
}

export default Banner