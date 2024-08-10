import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import success2 from '../assets/success2.jpg'

const Success = () => {
    const { t } = useTranslation()
    const { heading1, heading2, heading3 } = t('hero')
    return (
        <div className="px-10 mb-[450px] md:mb-[450px] relative">
            <div className="w-full h-[500px] lg:ps-28 md:ps-16 sm:ps-7 ps-4  flex items-center justify-center flex-col relative success rounded-xl">
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

                        </motion.div>

                    </motion.div>
                </div>
            </div>
            <div className='bg-white p-3 absolute -bottom-36 md:-bottom-44 right-20 md:right-32 rounded-xl flex flex-col gap-2 md:gap-5 w-80 h-64 md:w-80 md:h-72'>
                <img src={success2} alt="" className='  object-cover rounded-xl h-80' />
                <h3>Student testimonials</h3>
                <h5 className='max-w-xs'>Hear directly from our students about their experience and what makes Markajul quran special</h5>
            </div>
            <div className='absolute -bottom-96 md:-bottom-[300px] left-10 space-y-5'>
                <h5 className='text-black'>Alumni achievements</h5>
                <div>
                    <h4 className='max-w-md'>Our graduates go on to achieve remarkable success in various fields. </h4>
                    <h4 className='text-gray-500 max-w-md'>Read about their journeys and how Markajul Quran helped shape their </h4>
                </div>
            </div>
        </div>
    )
}

export default Success