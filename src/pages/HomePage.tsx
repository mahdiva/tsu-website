import HomeHeader from 'components/sections/HomePage/HomeHeader';
import TestSection from 'components/sections/HomePage/TestSection';
import tsu_logo from 'images/logo_white_start.png'
import './HomePage.css';

function HomePage() {
  return (
    <div className="homePage">
      <HomeHeader />
      <TestSection />
    </div>
  );
}

export default HomePage;
