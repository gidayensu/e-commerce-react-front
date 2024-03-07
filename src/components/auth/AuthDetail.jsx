//use context API to manage state between AuthPage and LoginForm
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';
import { AiFillGoogleCircle  } from "react-icons/ai";


function AuthDetail({signUpRequested}) {

  return (
    <>
      <main className="w-full flex justify-center items-center mt-10 mb-10 sm:mt-0 sm:mb-0 sm:h-screen">
        <div className='grid-cols-1 sm:w-full max-w-md  '>
        <h1 className='text-xs mb-4'>{signUpRequested ? 'JOIN AND BUY' : 'WELCOME BACK' }</h1>
        <h2 className='font-bold text-2xl mb-3'>{signUpRequested ? 'Create Account' : 'Account Login' }</h2>
      
      {/* Large screens */}
        <div className="grid">
          <span className='flex items-center justify-center btn btn-neutral bg-gray-300 hover:text-gray-50 text-gray-800 w-72'>
            
            <AiFillGoogleCircle className='text-2xl '/>
            <p>{signUpRequested ? 'Sign up with Google' : 'Log in with Google'}</p>
          
          </span>
          
          <p className="col-span-2 text-sm text-center p-4"> {signUpRequested ? 'Or Sign Up Using Email' : 'Or Log in Using Email' } </p>
        </div>
       
        <div className="">
            <AuthForm signUpRequested={signUpRequested}/>
        </div>

        <div>
          {!signUpRequested && <p className='text-center mt-4'>
            Don't have an Account? <br/> <Link to='/account/signup' relative='path' className='text-blue-600'>REGISTER</Link>
            </p>}
          
            {signUpRequested && <p className='text-center mt`-4'>
            Already have an account? <br/> <Link to='/account/login' className='text-blue-600'>LOGIN</Link>
            </p>}
        </div>
        </div>
      </main>
    </>
  )
}

export default AuthDetail;
