import { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineUser
} from "react-icons/ai";

function AuthForm({signUpRequested}) {

  const [showPassword, setShowPassword] = useState(false);
  const onClickHandler = () => {
    setShowPassword(()=> !showPassword);
  };

  return (
    <>
      <form className="grid grid-cols-1 gap-4 form-control input-bordered" action="">
      
      {signUpRequested && <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Name" required/>
          <AiOutlineUser className="w-4 h-4 opacity-70" />
        </label>}

      
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Email" required/>
          <AiOutlineMail className="w-4 h-4 opacity-70" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <input
            type={showPassword ? 'text': 'password'}
            className="grow"
            placeholder="Password"
          />
          <span className="w-4 h-4 opacity-70" onClick={onClickHandler}>
            {showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
          </span>
        </label>
        <button className="btn btn-primary"> {signUpRequested? 'Sign up': 'Login'} </button>
      </form>
    </>
  );
}

export default AuthForm;

