import React,{ useState } from 'react';
import logo from '../assets/logo1.png';
import {Link} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';
import {CiMenuFries} from 'react-icons/ci'

const Navbar = () => {
  const [click , setClick] = useState(false);
  const handleClick = () =>  setClick(!click);
  const items = <>
    <div className='lg:hidden block absolute top-24 w-full left-0 right-0 bg-slate-950/30 transition'>
      <ul className='text-center text-[18px] font-semibold p-20 cursor-pointer'>
        <Link spy={true} smooth={true} to='Home'>
          <li className='my-4 py-4 border-b border-transparent hover:text-orange-300 hover:rounded'>
            Home
          </li>
        </Link>
        <Link spy={true} smooth={true} to='Category'>
          <li className='my-4 py-4 border-b border-transparent hover:text-orange-300 hover:rounded'>
            Category
          </li>
        </Link>
        <Link spy={true} smooth={true} to='About'>
          <li className='my-4 py-4 border-b border-transparent hover:text-orange-300 hover:rounded'>
            Our Mission
          </li>
        </Link>
        <Link spy={true} smooth={true} to='Contact'>
          <li className='my-4 py-4 border-b border-transparent hover:text-orange-300 hover:rounded'>
            Contact Us
          </li>
        </Link>
      </ul>
    </div>
  </>

  return (
    <nav className="absolute shadow-md top-0 left-0 w-full flex justify-between bg-slate-950/30 z-50 text-white lg:py-5 px-20 py-4 flex-1">
          <div className='flex items-center flex-1'>
              <img src={logo} alt='Logo' className='h-16 w-32'/>
          </div>
          <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-semibold hidden'>
              <div className='flex-10'>  
                <ul className='flex gap-8 mr-16 text-[18px] cursor-pointer'>
                  <Link spy={true} smooth={true} to='Home'>
                    <li className='hover:text-orange-300 transition border-b-2 border-transparent hover:border-orange-300'>
                      Home
                    </li>
                  </Link>
                  <Link spy={true} smooth={true} to='Category'>
                    <li className='hover:text-orange-300 transition border-b-2 border-transparent hover:border-orange-300'>
                      Category
                    </li>
                  </Link>
                  <Link spy={true} smooth={true} to='About'>
                    <li className='hover:text-orange-300 transition border-b-2 border-transparent hover:border-orange-300'>
                      Our Mission
                    </li>
                  </Link>
                  <Link spy={true} smooth={true} to='Contact'>
                    <li className='hover:text-orange-300 transition border-b-2 border-transparent hover:border-orange-300'>
                      Contact Us
                    </li>
                  </Link>
                </ul>
          </div>
          </div>
          <div>
            {click && items}
          </div>
          <button className='block md:hidden transition border-2 font-semibold hover:border-orange-300 hover:text-orange-300 cursor-pointer' onClick={handleClick}>
            {click ? <FaTimes/> : <CiMenuFries/>}
          </button>
    </nav>  
  );
};

export default Navbar;