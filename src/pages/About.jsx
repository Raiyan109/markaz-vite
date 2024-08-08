import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'

const About = () => {
  const { t } = useTranslation()
  const { heading1, heading2, heading3, paragraph } = t('hero')

  return (
    <div>
      <Navbar />
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
              <a href='#' className='a'>
                <span className='span'>Button</span>
                <div className='liquid'></div>
              </a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About