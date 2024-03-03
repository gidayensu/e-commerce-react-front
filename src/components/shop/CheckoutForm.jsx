import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import Select from 'react-select';
import countryList from 'react-select-country-list';


function CheckoutForm () {
    const [country, setCountry] = useState('Ghana');
    const [phoneNumber, setPhoneNumber] = useState('');
    const options = useMemo(()=> countryList().getData(), []);

    const phoneNumberInputHandler = (event)=> {
      const numericValue= event.target.value.replace(/\D/g, '');
      setPhoneNumber(numericValue);
    }
    
    const countryChangeHandler = (selectedCountry)=> {
      setCountry(selectedCountry);
    }

    const mdClass = "md:grid md:grid-cols-2 md:gap-6";
    const mdInputWidth = "md:w-32"
    return (
      <div className="flex flex-col md:grid md:grid-cols-2 ">
        
        {/* Shipping Details */}
        <div>
          <h1 className='font-bold text-2xl mb-4'>Shipping Details</h1>
            <div className={mdClass}>
        <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">First Name<span className="font-bold text-red-600">*</span></span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Last Name<span className="font-bold text-red-600">*</span></span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
          </div>


          <div className={mdClass}>
        <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Phone<span className="font-bold text-red-600">*</span></span>
            </div>
            <input
              type="tel"
              placeholder="0200 000 000"
              maxLength={10}
              className="input input-bordered w-full max-w-xs"
              value={phoneNumber}
              onChange={phoneNumberInputHandler}
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email<span className="font-bold text-red-600">*</span></span>
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
          </div>

          <div className={mdClass}>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Select Country<span className="font-bold text-red-600">*</span></span>
            </div>
            <Select options ={options} value={country} onChange={countryChangeHandler} />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Town/City<span className="font-bold text-red-600">*</span></span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
            </div>
            <div className={mdClass}>
            <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Street Address<span className="font-bold text-red-600">*</span></span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Digital Address</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              
            />
          </label>
          <button className='btn mt-10 btn-primary w-80'>Checkout</button>
            </div>
          </div>
          
      </div>
    );
}

export default CheckoutForm;