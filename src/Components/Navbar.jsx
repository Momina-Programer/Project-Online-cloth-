import heroimg from '../assets/heroimg.jpg'
import {  Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
        <div className="bg-[#EFE8C2]"> 
        <nav className="bg-[#EFE8C2] border-gray-200 py-2.5 dark:bg-gray-900">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link to ="/Home" className="flex items-center">
           
            <span className="self-center text-xl font-semibold whitespace-nowrap text-[#224F34] dark:text-white">LOGO</span>
        </Link>
        <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
            </div>
<div className="mr-60"> 
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#314D1C"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
            </div>
            <Link to='/Login'
                className="text-[#272727] border border-emerald-800    focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0  focus:outline-none ">LOGIN</Link>
           
           
           
            <button data-collapse-toggle="mobile-menu-2" type="button"
				className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="mobile-menu-2" aria-expanded="true">
				
                <span className="sr-only">Open main menu</span>
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clipRule="evenodd"></path>
				</svg>
				<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clipRule="evenodd"></path>
				</svg>
			</button>
        </div>
        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 ml-80 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
     
          
        

                <li>
                    <Link to="/"
                        className="block py-2 pl-3 pr-4   text-[#224F34] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700        hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">HOME</Link>
                </li>
                <li>
                    <Link to='/Shop'
                        className="block py-2 pl-3 pr-4   text-[#224F34] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700        hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">SHOP</Link>
                </li>

                <li>
                    <Link to='/About'
                        className="block py-2 pl-3 pr-4   text-[#224F34] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700        hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">ABOUT</Link>
                </li>


                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4  text-[#224F34] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700        hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">FEATURES</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4   text-[#224F34] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700        hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">CONTACT</a>
                </li>
            </ul>
        </div>
        
    </div>

</nav>


<section className="ml-36 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl italic md:italic text-[#6F6A42]  text-3xl mb-4 font-medium ">Uncover and         <br className="hidden lg:inline-block"/>
cultivate your 
<br className="hidden lg:inline-block"/>
distinctive style

      </h1>
      <p className="mb-8 leading-relaxed text-black">Lorem ipsum dolor sit amet consectetur. <br/>
Faucibus odio gravida amet tellus <br/>
adipiscing donec adipiscing dignissim.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#6F6A42] border-0 py-2 px-6 focus:outline-none  rounded text-lg">Explore Now</button>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
<img src={heroimg} alt='hero' />
    </div>
  </div>
</section>

</div>

        </>
    )
}
export default Navbar