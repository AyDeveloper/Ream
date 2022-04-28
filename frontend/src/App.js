import './App.css';
import Features from './components/features/features';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Landing from './components/landing/landing';
import Sneak from './components/sneak/sneak';


function App() {
  return (
    <div className='container'>
      <Header/>
      <Landing/>
      <Features/>
      <Sneak/>
      <Footer/>
    </div>
  );
}

export default App;
