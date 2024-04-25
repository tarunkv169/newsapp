import React from 'react'
// import loading from "./loading.gif"
import for_dark_mode from "./for_dark_mode.gif";

export default function Spinner(props){
 
    return (
      <div className='text-center'>
        <img className='my-3' src={for_dark_mode} alt="loading" />
      </div>
    )
  
}
