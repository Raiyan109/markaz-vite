import img1 from '../assets/specialities1.jpg'

const Specialities = () => {
    return (
        <div className="pb-32 pt-8 flex flex-col-reverse md:flex-col">
            <div className="flex flex-col-reverse md:flex-row items-center gap-5 md:gap-36 mb-12 px-10">
                <div>
                    <a href='#' className='a py-4 px-8 relative block uppercase overflow-hidden rounded-xl'>
                        <span className='relative z-10 text-black text-xl'>Join</span>
                        <div className='liquid'></div>
                    </a>
                </div>
                <h6 className='max-w-md md:max-w-[260px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non, dolorem officiis nulla architecto cum hic.</h6>
                <h2>Our Speciality</h2>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1">
                    <img src={img1} alt="" />
                </div>
                <div className="flex-1">
                    <div className='border-t border-gray-400 flex flex-col p-[35px] space-y-2'>
                        <h3>Vibrant Community</h3>
                        <h6>Join a diverse and inclusive community where students from all backgrounds come together to learn and grow.</h6>
                    </div>
                    <div className='border-t border-gray-400 flex flex-col p-[35px] space-y-2'>
                        <h3>Vibrant Community</h3>
                        <h6>Join a diverse and inclusive community where students from all backgrounds come together to learn and grow.</h6>
                    </div>
                    <div className='border-y border-gray-400 flex flex-col p-[35px] space-y-2'>
                        <h3>Vibrant Community</h3>
                        <h6>Join a diverse and inclusive community where students from all backgrounds come together to learn and grow.</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialities