import React from 'react'

const Dummy = () => {
  return (
    <>
    {/* <style jsx global> */}
    <style jsx>
      {`
      .dummy {
        background: yellow;
      }
      `}
    </style>
    <div className='dummy'>I am Dummy Dummy</div>
    </>
  )
}

export default Dummy;