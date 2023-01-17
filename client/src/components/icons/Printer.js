import * as React from "react";

function SvgPrinter(props) {
  return (
    <svg 
    width="1em" 
    height="1em" 
    viewBox="0 0 32 32" 
    version="1.1" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}>
    {/* Generator: Sketch 3.0.3 (7891) - http://www.bohemiancoding.com/sketch */}
    <title>{props.title}</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="icon-125-printer-text" fill="#000000">
            <path d="M6,9 L6,2.9973917 C6,1.89585781 6.89427625,1 7.99742191,1 L23.0025781,1 C24.1090746,1 25,1.89426273 25,2.9973917 L25,9 L6,9 L6,9 Z M5,25 L3.99428189,25 C2.3405687,25 1,23.6571128 1,22.0005775 L1,12.9994225 C1,11.3443507 2.34058566,10 3.99428189,10 L27.0057181,10 C28.6594313,10 30,11.3428872 30,12.9994225 L30,22.0005775 C30,23.6556493 28.6594143,25 27.0057181,25 L26,25 L26,20 L5,20 L5,25 L5,25 L5,25 Z M6,21 L6,29.000385 C6,30.1047419 6.89092539,31 7.99742191,31 L23.0025781,31 C24.1057238,31 25,30.1125667 25,29.000385 L25,21 L6,21 L6,21 Z M24,16 C24.5522848,16 25,15.5522848 25,15 C25,14.4477152 24.5522848,14 24,14 C23.4477152,14 23,14.4477152 23,15 C23,15.5522848 23.4477152,16 24,16 L24,16 Z M8,24 L8,25 L23,25 L23,24 L8,24 L8,24 Z M8,27 L8,28 L23,28 L23,27 L8,27 L8,27 Z" 
            id="printer-text">             
            </path>
        </g>
    </g>
</svg>
  );
}

export default SvgPrinter;
