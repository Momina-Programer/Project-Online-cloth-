import product1 from '../assets/products/product1.jpg'
import product2 from '../assets/products/product2.jpg'
import product3 from '../assets/products/product3.jpg'



const ProductCard = () => {
    return (
<>


      <div className='bg-card rounded-lg shadow-md p-4'>
        <img src={product1} alt="Product" className='w-full h-48 object-cover rounded-t-lg'/>
        <h4 className="mt-2 font-semibold">Product Name</h4>
        <p className="text-lg font-bold">$120.23</p>
        <p className="text-sm text-muted-foreground">22 Orders</p>
        <button className='bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-2 p-2 rounded'>New Arrivals</button>
      
        </div>

        <div className='bg-card rounded-lg shadow-md p-4'>
        <img src={product2} alt="Product" className='w-full h-48 object-cover rounded-t-lg'/>
        <h4 className="mt-2 font-semibold">Product Name</h4>
        <p className="text-lg font-bold">$120.23</p>
        <p className="text-sm text-muted-foreground">22 Orders</p>
        <button className='bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-2 p-2 rounded'>New Arrivals</button>
      
        </div>

        <div className='bg-card rounded-lg shadow-md p-4'>
        <img src={product3} alt="Product" className='w-full h-48 object-cover rounded-t-lg'/>
        <h4 className="mt-2 font-semibold">Product Name</h4>
        <p className="text-lg font-bold">$120.23</p>
        <p className="text-sm text-muted-foreground">22 Orders</p>
        <button className='bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-2 p-2 rounded'>New Arrivals</button>
      
        </div>
   
        </>
      
    )
  }
  export default ProductCard