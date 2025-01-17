import './App.css';
import Navbar from './components/Navbar';
import Message from './components/Message';
import TextForm from './components/TextForm';
import Greet from './components/Greet';
import NameList from './components/NameList';
import { useState } from 'react';
import LiftingStateUp from './components/LiftingStateUp';
import UpdatedCompoent from './components/HOC';
const WithHOC = UpdatedCompoent(TextForm);


function App() {
  const [name,setName] = useState('')

  console.log(name)
  return (
    <>
      <Navbar title="MyApp" contact = "Contact Us"/>
      <Message/>
      <WithHOC />
      {/* <TextForm/> */}
      <Greet/>
      <NameList/>
      <LiftingStateUp name= {name} setName = {setName}/>
      <p>this is parent component : {name}</p>
    </>

  );
}

export default App;
