import majediImg from '../assets/majedi.jpg'

const About = () => {
    return (
        <div className='py-0 lg:py-32 px-8 mb-72'>
            <div className='flex flex-col-reverse items-center lg:items-start lg:flex-row justify-between mb-10'>
                <h3 className='max-w-xl'>Is more than just a place to earn a degree - it is a place where you can <span className='text-gray-400'>discover your potential</span>
                </h3>
                <h2>About Markaj</h2>
            </div>
            <div className='flex justify-between flex-col items-center lg:items-start lg:flex-row'>
                <div className='flex-1'>
                    <h6 className='mb-0 lg:mb-8 max-w-xl lg:max-w-[250px]'>We invite you to explore our website, visit our campus, and learn more about what makes Markajul Quran Madrasa the right choice for you.</h6>
                    <h6 className='mb-3 max-w-[250px]'>pursue your passions, and prepare for a successful future.</h6>
                    <div>
                        <a href='#' className='a'>
                            <span className='span'>Join</span>
                            <div className='liquid'></div>
                        </a>
                    </div>
                </div>
                <div className='hidden lg:flex gap-5 flex-1 relative'>
                    <div className='flex flex-col gap-9 absolute left-24 top-0'>
                        <div className='space-y-1'>
                            <img src={majediImg} alt="" className='w-60 h-60 object-cover rounded-xl' />
                            <h6>Mufti Tarikul Islam Majedi</h6>
                            <h6>Principle</h6>
                        </div>
                        <div className='space-y-1'>
                            <img src={majediImg} alt="" className='w-60 h-60 object-cover rounded-xl' />
                            <h6>Mufti Tarikul Islam Majedi</h6>
                            <h6>Principle</h6>
                        </div>
                    </div>

                    <div className='flex flex-col gap-9 absolute right-0 top-10'>
                        <div className='space-y-1'>
                            <img src={majediImg} alt="" className='w-60 h-60 object-cover rounded-xl' />
                            <h6>Mufti Tarikul Islam Majedi</h6>
                            <h6>Principle</h6>
                        </div>
                        <div className='space-y-1'>
                            <img src={majediImg} alt="" className='w-60 h-60 object-cover rounded-xl' />
                            <h6>Mufti Tarikul Islam Majedi</h6>
                            <h6>Principle</h6>
                        </div>
                    </div>
                </div>

                {/* Images for mobile screen */}
                <div className='flex lg:hidden gap-5 flex-1 mt-10'>
                    <div className='flex flex-col gap-9 '>
                        <div className='space-y-1'>
                            <img src={majediImg} alt="" className='w-60 h-60 object-cover rounded-xl' />
                            <h6>Mufti Tarikul Islam Majedi</h6>
                            <h6>Principle</h6>
                        </div>
                        <div className='space-y-1'>
                            <img src={majediImg} alt="" className='w-60 h-60 object-cover rounded-xl' />
                            <h6>Mufti Tarikul Islam Majedi</h6>
                            <h6>Principle</h6>
                        </div>
                    </div>

                    <div className='flex flex-col gap-9'>
                        <div className='space-y-1'>
                            <img src={majediImg} alt="" className='w-60 h-60 object-cover rounded-xl' />
                            <h6>Mufti Tarikul Islam Majedi</h6>
                            <h6>Principle</h6>
                        </div>
                        <div className='space-y-1'>
                            <img src={majediImg} alt="" className='w-60 h-60 object-cover rounded-xl' />
                            <h6>Mufti Tarikul Islam Majedi</h6>
                            <h6>Principle</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About