import * as React from "react";

function SvgEarth(props) {
  return (
   <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="1em" 
      height="1em" 
      {...props}
      viewBox="0 0 20.424 20.424">
        <path 
        d="M12.783,1.928A10.212,10.212,0,1,0,22.995,12.14,10.212,10.212,0,0,0,12.783,1.928Zm0,19.148a8.906,8.906,0,0,1-3.535-.727l4.65-5.232a.638.638,0,0,0,.161-.424V12.778a.638.638,0,0,0-.638-.638c-2.254,0-4.631-2.343-4.655-2.366a.638.638,0,0,0-.451-.187H5.762a.638.638,0,0,0-.638.638v3.83a.638.638,0,0,0,.353.571l2.2,1.1v3.747A8.941,8.941,0,0,1,4.708,8.311H7.039a.638.638,0,0,0,.451-.187l2.553-2.553a.638.638,0,0,0,.187-.451V3.575a8.961,8.961,0,0,1,6.468.531c-.083.07-.163.143-.24.22a3.83,3.83,0,0,0,2.705,6.538q.095,0,.19,0a14.988,14.988,0,0,1-.168,7.426.637.637,0,0,0-.017.1,8.908,8.908,0,0,1-6.385,2.686Z" 
        transform="translate(-2.571 -1.928)" fill="currentColor"/>
    </svg>
  );
}

export default SvgEarth;
