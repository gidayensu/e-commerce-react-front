import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
    const location = useLocation();
    const {pathname} = location;
    const segments = pathname.split('/');
    let url = '/';

    const filteredSegments = segments.filter(segment=>segment !== "");
    
    const breadcrumbs = filteredSegments.map((segment, index) => {
        segment == segments[1] ? url += segment : url += `/${segment}`;
        return (
          <li key={index}>
            <Link to={url}>{segment}</Link>
          </li>
        );
      
    });

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
