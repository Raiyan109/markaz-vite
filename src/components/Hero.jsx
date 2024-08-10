import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
const Hero = () => {
    const { t } = useTranslation()
    const { heading1, heading2, heading3, paragraph } = t('hero')

    return (
        // <div className='flex mt-12 flex-col-reverse lg:flex-row px-10 lg:px-0'>
        //     <div className="flex-1">
        //         <div className="">
        //             <h1 className='flex justify-between flex-col lg:flex-row text-center md:text-left'>Keep <span className='relative inline-block'>Learning <img src={underline} alt="" className='absolute top-2 hidden lg:block' /></span></h1>
        //             <h1 className='text-center md:text-left'>on Track</h1>
        //             <h5 className='text-center md:text-left'>When schools and districts have reliable access to subscribe teachers and subs have the freedom to choose what and when they teach</h5>
        //             <div className='flex justify-center lg:justify-start'>
        //                 <button className="btn-fill mt-8">Get Started</button>
        //             </div>
        //         </div>
        //         <div className='flex items-center gap-3'>
        //             <div className='bg-offWhite w-60 rounded-3xl p-5 space-y-28'>
        //                 <h3 className='max-w-[150px]'>Best <span className='text-darkBlue'>Certified</span> Teacher Worldwide</h3>
        //                 <div className='flex flex-col justify-start items-end pb-5'>
        //                     <h3 className='text-4xl text-darkBlue font-bold'>210+</h3>
        //                     <h5 className='text-xs'>Expert already join us</h5>
        //                 </div>
        //             </div>
        //             <div>
        //                 <div className='bg-offWhite rounded-3xl'>
        //                     <h3>Best Certified Teacher Worldwide</h3>
        //                     <h3>210+</h3>
        //                     <h5>Expert already join us</h5>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="flex-1 relative">
        //         <div className='absolute right-0 top-[170px] z-10'>
        //             <img src={heroImg} alt="" className='w-full h-[600px]' />
        //         </div>
        //         <div className='bg-lightBrown w-56 h-56 absolute right-0 top-[50px] rounded-3xl hidden lg:block'></div>
        //         <div className='bg-lightBrown w-96 h-56 absolute right-0 top-[300px] rounded-3xl hidden lg:block'></div>
        //         <div className='bg-lightBrown w-[600px] h-56 absolute right-0 top-[550px] rounded-3xl hidden lg:block'>
        //             {/* <FaPencil className='text-white text-3xl absolute top-10 left-10' /> */}
        //         </div>
        //     </div>
        // </div>
        <div className="w-full h-[calc(100vh-90px)] lg:ps-28 md:ps-16 sm:ps-7 ps-4  flex items-center justify-center flex-col relative hero ">
            {/* mt-[8ch] */}
            <div className="flex-1 w-full flex items-stretch justify-between gap-12 pb-10">
                <motion.div className='w-[35%] h-auto rounded-md flex justify-center flex-col space-y-14'
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'linear', delay: 0.2 }}
                >
                    <motion.div className='space-y-5'
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'linear', delay: 0.2 }}
                    >
                        <motion.h1 className='text-7xl font-bold text-neutral-50 leading-[1.15]'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: 'linear', delay: 0.4 }}
                        >
                            {heading1}
                            <span className='text-primary/75 tracking-wider'> {heading2} </span>
                            {heading3}
                        </motion.h1>
                        <motion.h1 className='text-lg font-normal text-neutral-300 line-clamp-3 text-ellipsis'
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: 'linear', delay: 0.6 }}
                        >
                            {paragraph}
                        </motion.h1>
                    </motion.div>

                    <motion.button>
                        <button className='a py-4 px-8 relative block uppercase overflow-hidden rounded-xl'>
                            <span className='relative z-10 text-black text-xl'>Button</span>
                            <div className='liquid'></div>
                        </button>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero