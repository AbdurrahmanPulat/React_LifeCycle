import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Test from './Test';
import Missing from './Missing';
import { Route, Switch,  } from 'react-router-dom';
import { useState,  } from 'react';

function App() {

const [show,setShow]=useState(false)


  return (
    <div className="App">
  <button onClick={()=> setShow(show => !show)}>{show ? 'Display': "Show"}</button>
{   show && <Test/>
}    </div>
  );
}

export default App;
