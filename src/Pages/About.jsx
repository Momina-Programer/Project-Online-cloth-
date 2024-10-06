import Aboutimg from '../assets/Aboutimg.jpg'
import Cloth from '../assets/cloth.jpg'
import team from '../assets/team1.jpg'
import team1 from '../assets/team.jpg'
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";
const About = () => {

  const inputClass = 'flex-1 p-3 border border-border rounded-l-md focus:outline-none focus:ring focus:ring-ring'


  return (
    <>
     <nav className=" border-gray-200 py-2.5 dark:bg-gray-900">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
            {/* <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo"> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap text-[#224F34]  dark:text-white">LOGO</span>
        </a>
        <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
            </div>
<div className="mr-60"> 
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#314D1C"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
            </div>
            <Link to="/Login"
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
                    <a href="/Home"
                        className="block py-2 pl-3 pr-4   text-[#224F34] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700        hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">HOME</a>
                </li>
                <li>
                    <a href="/Shop"
                        className="block py-2 pl-3 pr-4   text-[#224F34] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700        hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">SHOP</a>
                </li>

                <li>
                    <a href="/About"
                        className="block py-2 pl-3 pr-4   text-[#224F34] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700        hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">ABOUT</a>
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

      <section className='text-gray-600 body-font '>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font md:ml-24 sm:text-4xl  text-[#6F6A42]  text-3xl mb-4 font-medium '>
              <b>About</b> Us
            </h1>

            <p className='mb-8 leading-relaxed w-80 text-justify text-black md:ml-24'>
              Welcome to Logo – your ultimate destination for cool and trendy
              fashion! At Logo, we are dedicated to providing the latest styles
              that resonate with the vibrant and dynamic spirit of today
              youth. Our collection is carefully curated to ensure that every
              piece embodies the cutting-edge trends and timeless coolness that
              define your unique style.
            </p>
          </div>
          <div className='lg:max-w-lg lg:w-full md:mr-14   md:w-1/2 w-5/6'>
            <img className='rounded' src={Aboutimg} alt='hero' width={'450px'} />
          </div>
        </div>
      </section>

      <div className='bg-gray-50'>
        <div className='flex flex-col text-center w-full '>
          <h1 className='text-2xl font-medium title-font mt-16 text-[#6F6A42] tracking-widest'>
            <b> Our Mission</b>
          </h1>
        </div>
        <section className='text-gray-600 body-font'>
          <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 -ml-10'>
              <img
                className='object-cover object-center rounded '
                alt='cloth'
                src={Cloth}
              />
            </div>
            <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
              <p className='  mb-16 text-black leading-loose text-lg'>
                Our mission is simple: to inspire and empower youngsters to
                express themselves through fashion. Whether your looking for
                the perfect outfit for a night out, a casual day at school, or
                anything in between, Logo has you covered. We believe in fashion
                as a form of self-expression, and our diverse range of clothing
                is designed to cater to every mood and moment.
              </p>
              <div className='flex justify-center'></div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col text-center w-full ">
        <h1 className="text-2xl font-medium title-font mt-16 text-[#6F6A42] tracking-widest"><b> Our Team </b></h1>
        </div>

        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img className="object-cover object-center  block"  src={team1} alt="ecommerce"  width={"500"}/>
        </a>
      
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={team}/>
        </a>
       
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={team1}/>
        </a>
      
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={team}/>
        </a>
    
      </div>
    </div>
  </div>
</section>


<section className=" body-font ml-36">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <b> <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#272727]">Lorem Ipsum
       
      </h3></b> 
      <p className="mb-8 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry.</p>
   
    </div>
  
  </div>
</section>



<div className="bg-[#6F6A42] p-6 rounded-lg text-secondary-foreground max-w-md mx-auto -mt-7">
      <h2 className="text-2xl font-bold mb-2 text-white">Stay in the loop</h2>
      <p className="text-muted-foreground mb-4 text-white">Subscribe to receive the latest news and updates about TDA. We promise not to spam you!</p>
      <div className="flex">
        <input type="email" placeholder="Enter email address" className={inputClass} />
        <button className= 'text-black pl-4 pr-4 p-2 bg-[#EFE8C2]'>Continue</button>
      </div>
    </div>

<Footer/>

    </>
  )
}

export default About
