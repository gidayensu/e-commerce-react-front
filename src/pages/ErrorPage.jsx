import { Link } from 'react-router-dom';
import MainNavigation from "../components/common/MainNavigation";
import Footer from "../components/common/Footer";
function ErrorPage () {
    return( <>
    <MainNavigation />
    <div className="text-center mt-32 mb-32 h-full"> 
    <h1 className='font-bold text-4xl'>Ooops...</h1>
    <br/>
    <h2 className='text-3xl'>Page not found</h2>
    <hr className="border-t border-gray-300 my-8 m-8" />
    <Link to="/"><button className='btn btn-primary'> Return Home </button></Link>
    </div>
<Footer/>
    </>)
}

export default ErrorPage;