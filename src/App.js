import './App.css';
import Navbar from './components/Navbar';
import Message from './components/Message';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="MyApp" contact = "Contact Us"/>
      <Message/>
      <TextForm/>
    </>

  );
}

export default App;
