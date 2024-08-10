import About from '../components/About';
import AcademicExcellence from '../components/AcademicExcellence';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Registry from '../components/Registry';
import Specialities from '../components/Specialities';
import Success from '../components/Success';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <AcademicExcellence />
            <Success />
            <Specialities />
            <About />
            <Registry />
            <Footer />
        </div>
    );
};

export default Home;