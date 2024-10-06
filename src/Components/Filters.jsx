

const Filters = () => {
    
  return (
    <aside className="w-full md:w-1/4 bg-card p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Filters</h2>
      <div className="mt-4">
        <h3 className="text-md font-medium">Prices</h3>
        <input type="range" min="120" max="300" className="w-full" />
      </div>
      <div className="mt-4">
        <h3 className="text-md font-medium">FILTERS</h3>
        <label className="block">
          <input type="checkbox" className="mr-2" /> Women
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" /> Men
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" /> Girls
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" /> Babies
        </label>
      </div>
      <div className="mt-4">
        <h3 className="text-md font-medium">Brands</h3>
        <label className="block mt-3">
          <input type="checkbox" className="mr-2" /> Victoria Secret
        
        </label>
        <label className="block">
        <input type="checkbox" className="mr-2" /> Dior
            </label>
            <label className="block">
            <input type="checkbox" className="mr-2" /> Gucci
            </label>
            <label className="block">

            <input type="checkbox" className="mr-2" /> Fendi
            </label>
            <label className="block">
            <input type="checkbox" className="mr-2" />  Prada
            </label>
            <label className="block">
            <input type="checkbox" className="mr-2" /> Versace
            </label>

            <label className="block">
            <input type="checkbox" className="mr-2" /> Dolce & Gabbana
            </label>

            <label className="block">
          
            <input type="checkbox" className="mr-2" /> Zara
            </label>

            <label className="block">
       
            <input type="checkbox" className="mr-2" />Chanel
            </label>

            <p className="text-sm text-red-700 ml-8 mt-6" >+ 234 more</p>


<div className="mt-5"> 
            <h3 className="text-md font-medium">Categories</h3>
        <label className="block mt-3">
          <input type="checkbox" className="mr-2" /> Dresses </label>
          <label className="block">
          <input type="checkbox" className="mr-2" />Tops </label>
          <label className="block">
          <input type="checkbox" className="mr-2" />  Lingerie & Lounge Wear </label>
          <label className="block">
          <input type="checkbox" className="mr-2" /> Blouse  </label>
          <label className="block">
          <input type="checkbox" className="mr-2" /> Vintage  </label>

          <p className="text-sm text-red-700 ml-8 mt-6" >+ 4 more</p>
          </div>


          <div className="mt-5"> 
            <h3 className="text-md font-medium">SIZE</h3>
        <label className="block mt-3">
          <input type="checkbox" className="mr-2" /> Medium </label>
          <label className="block">
          <input type="checkbox" className="mr-2" />Large</label>
          <label className="block">
          <input type="checkbox" className="mr-2" />  Plus Size </label>
          <label className="block">
          <input type="checkbox" className="mr-2" /> Sexy Plus Size  </label>
    
          </div>
      </div>
    </aside>
  )
}




export default Filters