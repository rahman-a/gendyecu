import React from 'react'

const Zoom = (props) => {
  return (
    <svg 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"  
        viewBox="0 0 50 50" 
        width="1em" 
        height="1em"
        {...props}>
            <path d="M33.619,4H16.381C9.554,4,4,9.554,4,16.381v17.238C4,40.446,9.554,46,16.381,46h17.238C40.446,46,46,40.446,46,33.619	V16.381C46,9.554,40.446,4,33.619,4z M30,30.386C30,31.278,29.278,32,28.386,32H15.005C12.793,32,11,30.207,11,27.995v-9.382	C11,17.722,11.722,17,12.614,17h13.382C28.207,17,30,18.793,30,21.005V30.386z M39,30.196c0,0.785-0.864,1.264-1.53,0.848l-5-3.125	C32.178,27.736,32,27.416,32,27.071v-5.141c0-0.345,0.178-0.665,0.47-0.848l5-3.125C38.136,17.54,39,18.019,39,18.804V30.196z"/>
    </svg>
  )
}

export default Zoom