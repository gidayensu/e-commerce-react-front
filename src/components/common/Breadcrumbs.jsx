import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Breadcrumbs() {
  const { productData } = useSelector((state) => state.singleProduct);

  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split("/");
  let url = "/";

  //regex to check if the path is only numbers to use a product name instead
  const containsOnlyNumbers = (input) => /^\d+$/.test(input);

  const filteredSegments = segments.filter((segment) => segment !== "");

  const breadcrumbs = filteredSegments.map((segment, index) => {
    segment == segments[1] ? (url += segment) : (url += `/${segment}`);
    url === "/shop/product" && !containsOnlyNumbers(segment)
      ? (url = "/shop")
      : url;
    let displayedSegment = segment;
    containsOnlyNumbers(segment)
      ? (displayedSegment = productData[0].title)
      : displayedSegment;

    return (
      <li key={index}>
        {index === filteredSegments.length - 1 ? (
          <p>{displayedSegment}</p>
        ) : (
          <Link to={url}>{displayedSegment}</Link>
        )}
      </li>
    );
  });

  return (
    <div className="text-sm breadcrumbs md:ml-32 lg:ml-64 mb-2 ml-5 mt-2">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {breadcrumbs}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
