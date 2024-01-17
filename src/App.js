import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import PageContent from './components/PageContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Header/>
      <PageContent/>
      <Footer/>
      <ToastContainer/> 
    </div>
    
  );
}

export default App;

