
import registry1 from '../assets/registry1.jpg'

const Registry = () => {


    return (
        <div className="px-10 mb-[450px] md:mb-[470px] relative">
            <div className="w-full h-[400px] lg:ps-28 md:ps-16 sm:ps-7 ps-4  flex items-center justify-center flex-col relative registry rounded-xl">

            </div>
            <div className='bg-white p-10 absolute -bottom-36 md:-bottom-48 right-20 md:right-10 rounded-s-xl flex flex-col gap-2 md:gap-5 w-80 h-64 md:w-[500px] md:h-full'>
                <h3 className='mb-8'>Data Of Registry</h3>
                <div className='space-y-7'>
                    <div>
                        <label className='relative'>
                            <input type="text" className='h-10 w-full px-6 text-lg text-gray-400 border rounded-lg border-gray-400 border-opacity-50 outline-none focus:border-gray-500 focus:text-gray-400 transition duration-200' />
                            <span className='text-lg text-opacity-80 text-gray-400 absolute left-0 -top-1 mx-4 px-2 transition duration-200 input-text'>Full name</span>
                        </label>
                    </div>
                    <div>
                        <label className='relative'>
                            <input type="text" className='h-10 w-full px-6 text-lg text-gray-400 border rounded-lg border-gray-400 border-opacity-50 outline-none focus:border-gray-500 focus:text-gray-400 transition duration-200' />
                            <span className='text-lg text-opacity-80 text-gray-400 absolute left-0 -top-1 mx-4 px-2 transition duration-200 input-text'>Address</span>
                        </label>
                    </div>
                    <div>
                        <label className='relative'>
                            <input type="text" className='h-10 w-full px-6 text-lg text-gray-400 border rounded-lg border-gray-400 border-opacity-50 outline-none focus:border-gray-500 focus:text-gray-400 transition duration-200' />
                            <span className='text-lg text-opacity-80 text-gray-400 absolute left-0 -top-1 mx-4 px-2 transition duration-200 input-text'>Last Madrasa</span>
                        </label>
                    </div>
                    <div>
                        <label className='relative'>
                            <input type="text" className='h-10 w-full px-6 text-lg text-gray-400 border rounded-lg border-gray-400 border-opacity-50 outline-none focus:border-gray-500 focus:text-gray-400 transition duration-200' />
                            <span className='text-lg text-opacity-80 text-gray-400 absolute left-0 -top-1 mx-4 px-2 transition duration-200 input-text'>Interest of Faculty</span>
                        </label>
                    </div>
                    <div>
                        <label className='relative'>
                            <input type="text" className='h-10 w-full px-6 text-lg text-gray-400 border rounded-lg border-gray-400 border-opacity-50 outline-none focus:border-gray-500 focus:text-gray-400 transition duration-200' />
                            <span className='text-lg text-opacity-80 text-gray-400 absolute left-0 -top-1 mx-4 px-2 transition duration-200 input-text'>Email</span>
                        </label>
                    </div>
                    <div>
                        <button className='a py-4 px-8 relative block uppercase overflow-hidden rounded-xl'>
                            <span className='relative z-10 text-black text-xl'>Register</span>
                            <div className='liquid'></div>
                        </button>
                    </div>
                </div>
            </div>
            <div className='absolute -bottom-96 md:top-[420px] left-10 space-y-5'>
                <h5 className='text-black'>@Markaj / <span className='text-gray-400'>Registry</span></h5>
                <div>
                    <h4 className='max-w-xl'>You can register by filling in your personal data in the right column. </h4>
                    <h4 className='text-gray-500 max-w-xl'>If you have filled in your data, the next step will be announced via email for further processing</h4>
                </div>
            </div>
        </div>
    )
}

export default Registry