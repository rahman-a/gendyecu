import * as React from "react";

function SvgPointer(props) {
  return (
    <svg 
    aria-hidden="true" 
    focusable="false" 
    data-prefix="fas" 
    data-icon="hand-pointer" 
    className="svg-inline--fa fa-hand-pointer fa-w-14" 
    role="img" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512"
    {...props}>
    <path 
    fill="currentColor" 
    d="M448 240v96c0 3.084-.356 6.159-1.063 9.162l-32 136C410.686 499.23 394.562 512 376 512H168a40.004 40.004 0 0 1-32.35-16.473l-127.997-176c-12.993-17.866-9.043-42.883 8.822-55.876 17.867-12.994 42.884-9.043 55.877 8.823L104 315.992V40c0-22.091 17.908-40 40-40s40 17.909 40 40v200h8v-40c0-22.091 17.908-40 40-40s40 17.909 40 40v40h8v-24c0-22.091 17.908-40 40-40s40 17.909 40 40v24h8c0-22.091 17.908-40 40-40s40 17.909 40 40zm-256 80h-8v96h8v-96zm88 0h-8v96h8v-96zm88 0h-8v96h8v-96z">
    </path>
    </svg>

  );
}

export default SvgPointer;