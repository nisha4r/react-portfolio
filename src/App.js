import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Profile from './components/Profile';



function App() {
  return (
    <>
      <title>Nishanthi's Portfolio </title>
      <Header></Header>
      <main>
        <div className="portfolio-app"> Portfolio here</div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
