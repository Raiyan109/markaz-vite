import excellenceImg from '../assets/academicExcellence1.png'
import { MdStars } from "react-icons/md";
const AcademicExcellence = () => {
    return (
        <div className='px-10 section-bottom-margin'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-20 mb-16' >
                <h1>Academic Excellence</h1>
                <h5 className='max-w-md md:max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non, dolorem officiis nulla architecto cum hic possimus libero in minus accusantium quia obcaecati incidunt quisquam autem harum, ullam a itaque.</h5>
            </div>
            <div className='flex flex-col-reverse md:flex-row items-end justify-between gap-5'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-2 border-l pl-4 border-gray-300'>
                        <MdStars size={30} />
                        <h3 className='mb-2'>Top Ranked Programs</h3>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus pariatur excepturi dolore sed, </h5>
                    </div>
                    <div className='flex flex-col gap-2 border-l pl-4 border-gray-300'>
                        <MdStars size={30} />
                        <h3 className='mb-2'>Top Ranked Programs</h3>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus pariatur excepturi dolore sed, </h5>
                    </div>
                    <div className='flex flex-col gap-2 border-l pl-4 border-gray-300'>
                        <MdStars size={30} />
                        <h3 className='mb-2'>Top Ranked Programs</h3>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus pariatur excepturi dolore sed, </h5>
                    </div>
                </div>
                <div>
                    <img src={excellenceImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AcademicExcellence