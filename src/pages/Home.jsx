import AcademicExcellence from '../components/AcademicExcellence';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Success from '../components/Success';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <AcademicExcellence />
            <Success />
            <Footer />
        </div>
    );
};

export default Home;