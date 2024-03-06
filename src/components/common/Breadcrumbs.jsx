import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
    const location = useLocation();
    const {pathname} = location;
    const segments = pathname.split('/');
    let url = '/';
    const breadcrumbs = segments.map((segment, index)=> {
        
        if (segment!==''){
            if (segment==segments[1]){
            url+= `${segment}`} else {
                url+= `/${segment}`
            }
        return(
          <li>
        <Link key={index} to={url}>{segment}</Link>
        </li>  
        );}
    })

    console.log(breadcrumbs)
  return (
    <div className="text-sm breadcrumbs ml-5 mt-2">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {breadcrumbs}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
