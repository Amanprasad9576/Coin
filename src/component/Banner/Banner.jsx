import BannerImage from '../../assets/banner.jpeg';
function Banner(){
    return (
        <div className="w-full h-[25rem] relative flex justify-center items-center">
            <img 
                src={BannerImage}
                className="h-full w-full object-cover"
                alt="CryptoTracker Banner"
            />
            {/* Centered Content */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="flex flex-col gap-4 text-center">
                    <div className="text-white text-5xl font-semibold">
                        CryptoTracker
                    </div>               
                    <div className="text-white text-sm font-bold">
                        All the information regarding CryptoTracker
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Banner;
