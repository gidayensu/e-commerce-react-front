import { AiFillInfoCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

function ErrorComponent ({title, message}) {
    return (
      
<div className="grid justify-center items-center text-center">
  <div className="grid justify-center items-center rounded-2xl bg-red-400 shadow-xl w-64">
    <div className="card-body flex flex-col items-center">
      <span className="text-3xl bg-white text-red-500 rounded-full w-10 h-10 flex items-center justify-center">
        <AiFillInfoCircle />
      </span>
      <h2 className="card-title">{title}</h2>
      <p>{message}</p>
      <div className="flex justify-center mt-2">
        <Link to='/'>
          <button className="bg-white text-red-500 h-10 w-28 hover:bg-[#e5e1e1] rounded-md">Home Page</button>
        </Link>
      </div>
    </div>
  </div>
</div>

    )
}

export default ErrorComponent;