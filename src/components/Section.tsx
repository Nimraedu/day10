import React from 'react'

const Section = () => {
  return (
    <div className='bg-orange-300 max-w-8xl text-center text-white font-bold grid grid-cols-3 grid-rows-2 '>
      Section
      <div className=' col-span-2 row-span-2 bg-pink-400 text-center text-white font-bold p-4'>Aside</div>
              <div className=' bg-orange-400  text-center text-white font-bold p-4'>Article</div>

    </div>
  )
}

export default Section
