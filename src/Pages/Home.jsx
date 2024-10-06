import img1 from '../assets/products/img1.jpg'
import img2 from '../assets/products/img2.jpg'
import img3 from '../assets/products/img3.jpg'
import img4 from '../assets/products/img4.jpg'
import img5 from '../assets/products/img5.jpg'
import img6 from '../assets/products/img6.jpg'
import img7 from '../assets/products/img7.jpg'
import img8 from '../assets/products/img8.jpg'
import img9 from '../assets/products/img9.jpg'
import img10 from '../assets/products/img10.jpg'
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Products from "../Components/Products"
import Shared from '../Components/Shared'
import Slider from '../Components/Slider'
import Slider1 from '../Components/Slider1'
// import CarouselControlsInside from "../Components/Slider"

const Home = () => {
    return (
        <>
<Navbar/>
<div className='mt-32'> 
<Slider/>
</div>
<Products/>
  

  <section className="text-gray-600 body-font ml-10">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img src={img1} alt="ecommerce" className="object-cover object-center w-full h-full block" />
        </a>
        <div className="mt-4">
   
          <h2 className="text-gray-900 title-font text-lg font-medium">Summer Wind T-shirt </h2>
          <p className="mt-1">$50.00 <span className="md:ml-10"> | </span> <span className="ml-9"> 4.0</span> </p>

        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center  block" src={img2}  />
        </a>
        <div className="mt-4">
        
          <h2 className="text-gray-900 title-font text-lg font-medium">Tailored Jacket</h2>
          <p className="mt-1">$50.00 <span className="md:ml-10"> | </span> <span className="ml-9"> 4.0</span> </p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img3}/>
        </a>
        <div className="mt-4">
  
          <h2 className="text-gray-900 title-font text-lg font-medium">Formal Classic suit</h2>
          <p className="mt-1">$50.00 <span className="md:ml-10"> | </span> <span className="ml-9"> 4.0</span> </p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img4}/>
        </a>
        <div className="mt-4">

          <h2 className="text-gray-900 title-font text-lg font-medium">White Solid Formal T-shirt</h2>
          <p className="mt-1">$42.09 <span className="md:ml-10"> | </span> <span className="ml-9"> 5.0</span> </p>
        </div>
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full mt-10">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img5}/>
        </a>
        <div className="mt-4">
         
          <h2 className="text-gray-900 title-font text-lg font-medium">Tailored Jacket</h2>
          <p className="mt-1">$41.03<span className="md:ml-10"> | </span> <span className="ml-9"> 5.0</span> </p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full mt-10">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img6}/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p className="mt-1">$29.99<span className="md:ml-10"> | </span> <span className="ml-9">4.5</span> </p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full mt-10">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img7}/>
        </a>
        <div className="mt-4">
         
          <h2 className="text-gray-900 title-font text-lg font-medium">Classic Top</h2>
          <p className="mt-1">$24.54<span className="md:ml-10"> | </span> <span className="ml-9">3.8</span> </p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full mt-10">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img8}/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">Formal Jeans</h2>
          <p className="mt-1">$38.99<span className="md:ml-10"> | </span> <span className="ml-9">5.0</span> </p>
        </div>
      </div>
    </div>
  </div>
</section>

<Shared/>

  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#6F6A42] ">Cool & Trendy Clothes For You</h1>
  
<b> <p className="mt-10 "> Lorem ipsum dolor sit amet consectetur. </p>   </b>
    </div>
    </div>

<section className="-mt-40 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-5 bg-white rounded overflow-hidden">
       
      </div>
     
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img alt="content" className="object-cover object-center h-full w-full" src={img9}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Accessories</h2>
        <p className="text-base leading-relaxed mt-2 text-center text-black">Lorem ipsum dolor sit amet 
consectetur. Mi enim a curabitur odio 
risus donec quis donec vel.</p>
    
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img alt="content" className="object-cover object-center h-full w-full" src={img10}/>
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Accessories</h2>
        <p className="text-base leading-relaxed mt-2 text-center text-black">Lorem ipsum dolor sit amet 
consectetur. Mi enim a curabitur odio 
risus donec quis donec vel.</p>  
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img alt="content" className="object-cover object-center h-full w-full" src={img9}/>
    </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Accessories</h2>
        <p className="text-base leading-relaxed mt-2 text-center text-black">Lorem ipsum dolor sit amet 
consectetur. Mi enim a curabitur odio 
risus donec quis donec vel.</p>
      </div>
    </div>
  </div>
</section>

<Slider1/>

<Footer/>


        </>
    )
}
export default Home