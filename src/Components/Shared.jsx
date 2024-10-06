import img12 from '../assets/products/img12.jpg'

const sharedClasses = {
    cardContainer: 'flex flex-col md:flex-row items-center  bg-[#EFE8C2]  p-8',
    textPrimary: 'text-[#6F6A42]',
    textMuted: 'text-[#6F6A42]',
    card: 'bg-white p-4 rounded-lg shadow-md text-center',
    button: 'bg-[#6F6A42] text-white  py-2 px-4 rounded-lg'
};

const Shared = () => {
    return (
        <div className='mt-36'> 
        <div className={sharedClasses.cardContainer}>
            <div className="md:w-1/2">
                <h2 className={`text-3xl font-bold ${sharedClasses.textPrimary}`}>Exclusive Offer</h2>
                <p className={`mt-4 ${sharedClasses.textMuted}`}>Unlock the unlimited style upgrade with our exclusive offer. Enjoy savings of up to 40% off on your latest New Arrivals.</p>
                <div className="flex space-x-4 mt-6">
                    <div className={sharedClasses.card}>
                        <span className={`text-2xl font-bold ${sharedClasses.textPrimary}`}>05</span>
                        <span className={sharedClasses.textMuted}>Days</span>
                    </div>
                    <div className={sharedClasses.card}>
                        <span className={`text-2xl font-bold ${sharedClasses.textPrimary}`}>17</span>
                        <span className={sharedClasses.textMuted}>Hours</span>
                    </div>
                    <div className={sharedClasses.card}>
                        <span className={`text-2xl font-bold ${sharedClasses.textPrimary}`}>20</span>
                        <span className={sharedClasses.textMuted}>Min</span>
                    </div>
                </div>
                <button className={`mt-6 ${sharedClasses.button}`}>SHOP NOW</button>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
                <img src={img12} alt="Model wearing stylish clothing" className="" />
            </div>
        </div>
        </div>
    );
};

export default Shared ;
