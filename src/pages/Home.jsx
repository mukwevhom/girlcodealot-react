import CategoriesSection from '../components/CategoriesSection';
import DealsSection from '../components/DealsSection';
import HeroSection from '../components/HeroSection'
import MainLayout from '../layouts/MainLayout';

const Home = () => {
    return (
        <MainLayout >
            <HeroSection />
            <CategoriesSection />
            <DealsSection /> 
        </MainLayout >
    )
}

export default Home;
