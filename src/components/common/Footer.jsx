import { FaXTwitter, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer className="relative  md:h-52 h-64 bg-sky-900 w-full mt-5">
        <main className='grid sm:grid-cols-5 grid-cols-2 gap-4 sm:gap-0 p-4 text-white  absolute inset-x-0 md:ml-20 md:mr-32'>
            <section className='sm:col-span-2 sm:pl-10 flex flex-col gap-3 text-sm justify-center'>
                <p>...logo</p>
                <p>&#169; 2024 GeeTech</p>
                <span className="flex gap-2">
                    <FaLinkedin/>
                    <FaXTwitter/>
                    <FaSquareFacebook/>
                    <AiFillInstagram/>
                </span>
                
            </section>
            <section className='flex flex-col gap-3 text-sm justify-center'>
                <h2 className="font-bold">Company</h2>
                <Link className="hover:underline" to="/about-us">About Us</Link>
                <Link className="hover:underline" to="/contact-us">Contact Us</Link>
            </section>
            <section className='flex flex-col gap-3 text-sm justify-center'>
            <h2 className="font-bold">Shop</h2>
                <Link className="hover:underline" to="/about-us">Buy Products</Link>
                <Link className="hover:underline" to="/contact-us">Cart</Link>
            </section>
            <section className='flex flex-col gap-3 text-xs justify-center sm:pr-10'>
                <h2 className="font-bold">join 4000 subscribers</h2>
                <span className="flex gap-2 flex-col">
                    <input className="rounded-lg h-8 p-2 text-sky-600" type="text" placeholder="Enter your email" />
                    <button className=" rounded-lg bg-sky-500 h-8 p-2 hover:bg-sky-700">Subscribe</button>
                </span>
                
            </section>
        </main>
        </footer>
    );
}

export default Footer;