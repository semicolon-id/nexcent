
import './App.css';

import Navbar from "./components/UI/navbar/navbar"
import Page from "./page/Page"
import Footer from "./components/UI/footer/Footer"

function App() {
  return (
    <div className='overflow-x-hidden scroll-smooth'>
    <Navbar />
    <Page />
    <Footer />
    </div>
  );
}

export default App;
