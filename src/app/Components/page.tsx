


// pages/index.js
import Header from '../Header/page';
import Hero from '../HeroSec/page';
import Footer from '../Footer/page';
import '../Components/style.css'; 
const Home = () => {
  return (
  
    <div className='main'>
      <Header />
      <Hero />
      <Footer />
    </div>
  
  );
};

export default Home;

