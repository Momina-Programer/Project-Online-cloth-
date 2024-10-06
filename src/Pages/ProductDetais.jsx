import Footer from "../Components/Footer"
import productimg from '../assets/products/product3.jpg'
import img2 from '../assets/products/product2.jpg'
import img3 from '../assets/products/product5.jpg'
const BORDER_BOTTOM = 'border-b border-border'
const TEXT_PRIMARY = 'text-primary'
const TEXT_MUTED = 'text-muted'
const TEXT_MUTED_FOREGROUND = 'text-muted-foreground'
const FLEX = 'flex'
const JUSTIFY_BETWEEN = 'justify-between'
const SPACE_X_4 = 'space-x-4'
const cardClasses = "bg-card rounded-lg shadow-md overflow-hidden";
const imageClasses = "w-full h-48 object-cover";
const textClasses = "text-muted-foreground text-primary font-semibold text-accent";




const ProductDetails = ()=> {

  

const thumbnailImages = [
  productimg,
  productimg,
  productimg,
  productimg ,

];

const colorOptions = [
  { color: 'bg-blue-500' },
  { color: 'bg-red-500' },
  { color: 'bg-zinc-500' },
  { color: 'bg-black' },
];


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
            <a href="https://themesberg.com/product/tailwind-css/landing-page"
                className="text-[#272727] border border-emerald-800    focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0  focus:outline-none ">LOGIN</a>
           
           
           
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
                    <a href="#"
                        className="block py-2 pl-3 pr-4   text-[#224F34] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700        hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">HOME</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4   text-[#224F34] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700        hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">SHOP</a>
                </li>

                <li>
                    <a href="#"
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

       



    <div className="flex flex-col md:flex-row bg-background p-6 rounded-lg mt-40 ml-20">
      <div className="flex flex-col md:w-1/3">
        <div className="flex space-x-2 mb-4">
          {thumbnailImages.map((src, index) => (
            <img key={index} className="w-24 h-24 object-cover rounded-lg" src={src} alt={`Product Thumbnail ${index + 1}`} />
          ))}
        </div>
        <img className="w-full h-auto object-cover rounded-lg" src={productimg}alt="Main Product Image" />
      </div>
      <div className="md:w-2/3 md:pl-6 ml-10">
        <h2 className="text-xl font-bold text-foreground">Womens Denim Jacket (Blue)</h2>
        <p className="text-muted-foreground">Brand Name</p>
        <p className="text-yellow-500">★★★★☆ 4.4 (36 Reviews)</p>
        <p className="text-lg font-semibold text-primary">Rs. 700 <span className="line-through text-muted">Rs. 1000</span> (30% off)</p>
        <div className="mt-4">
          <label className="block text-muted-foreground">Select Size</label>
          <select className="border border-border rounded-md p-2">
            <option>Size Chart ⬇️</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="block text-muted-foreground">Select Color</label>
          <div className="flex space-x-2">
            {colorOptions.map((option, index) => (
              <button key={index} className="w-8 h-8 rounded-full" style={{ backgroundColor: option.color }}></button>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-bold">Best Offers</h3>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Special offer get 25% off 🏷️ T&C</li>
            <li>Bank offer get 30% off on Axis Bank Credit card 🏦 T&C</li>
            <li>Wallet offer get 40% cashback via Paytm wallet on first transaction 💰 T&C</li>
            <li>Special offer get 25% off 🏷️ T&C</li>
          </ul>
        </div>
        <button className="mt-6 bg-black text-primary-foreground text-white rounded-md p-2 ">Add to cart</button>
      </div>
    </div>


    <div className="max-w-4xl mx-auto p-4">
      <div className={`${FLEX} ${JUSTIFY_BETWEEN} ${BORDER_BOTTOM} pb-4`}>
        <h2 className={`text-lg font-semibold ${TEXT_PRIMARY}`}>Product Details</h2>
        <div className={`${FLEX} ${SPACE_X_4}`}>
          <a href="#" className={`${TEXT_MUTED} hover:${TEXT_PRIMARY}`}>
            Specification
          </a>
          <a href="#" className={`${TEXT_MUTED} hover:${TEXT_PRIMARY}`}>
            Ratings & Reviews
          </a>
        </div>
      </div>
   
      <div >
        <h3 className={`text-md font-semibold ${TEXT_PRIMARY}`}>Product Details</h3>
        <p className={TEXT_MUTED_FOREGROUND}>Blue washed jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem.</p>
      </div>
      <div >
        <h3 className={`text-md font-semibold ${TEXT_PRIMARY}`}>Size & Fit</h3>
        <p className={TEXT_MUTED_FOREGROUND}>The model (height ) is wearing a size S.</p>
      </div>
      <div >
        <h3 className={`text-md font-semibold ${TEXT_PRIMARY}`}>Material & Care</h3>
        <p className={TEXT_MUTED_FOREGROUND}>
          100% cotton
          <br />
          Machine Wash
        </p>
      </div>
    </div>



    <div className="p-4 mt-24">
      <h2 className="text-xl font-semibold mb-4">Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className={cardClasses}>
            <img src={ img2} alt={`Womens Denim Jacket ${index}`} className={imageClasses} />
            <div className="p-4">
              <h3 className="font-bold text-lg">Womens Denim Jacket {index}</h3>
              <p className={textClasses}>Brand Name</p>
              <p className={textClasses}>Rs. 700 <span className="line-through text-muted">Rs. 1000</span></p>
              <p className={textClasses}>30% off</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="p-4 mt-24">
      <h2 className="text-xl font-semibold mb-4">Customer Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className={cardClasses}>
            <img src={ img3} alt={`Womens Denim Jacket ${index}`} className={imageClasses} />
            <div className="p-4">
              <h3 className="font-bold text-lg">Womens Denim Jacket {index}</h3>
              <p className={textClasses}>Brand Name</p>
              <p className={textClasses}>Rs. 700 <span className="line-through text-muted">Rs. 1000</span></p>
              <p className={textClasses}>30% off</p>
            </div>
          </div>
        ))}
      </div>
    </div>




<Footer/>
        </>
    )
}

export default ProductDetails