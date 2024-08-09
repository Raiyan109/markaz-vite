import AcademicExcellence from '../components/AcademicExcellence';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <AcademicExcellence />
            <Footer />
        </div>
    );
};

export default Home;