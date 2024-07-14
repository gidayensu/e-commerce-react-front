import { useLocation } from 'react-router-dom';
import {  useRef } from 'react';

function TopScroll({children}) {
    let prevLocationRef = useRef(null)
    
    const {pathname} = useLocation();
        if (prevLocationRef.current !== pathname) {
            window.scrollTo(0,0);
            prevLocationRef = pathname;
        }
   

 return (
    children
 );
}

export default TopScroll;