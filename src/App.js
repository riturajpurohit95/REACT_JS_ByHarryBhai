// import logo from './logo.svg';
import React,{ useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


// let name = "<b>Ritu</b>";
function App() {
  const [mode,setMode] = useState('light');
  const [modeName,setModeName] = useState('Enable Dark Mode');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1000);
  }
  const toggleMode = ()=>{                      //---->   Exercise 1
    if(mode==='light'){
      setMode('dark');
      setModeName('Disable Dark Mode');
      document.body.style.backgroundColor = "#1c1c1c";
      // document.body.style.color = "white";
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      setModeName('Enable Dark Mode');
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode'
    }
  }
  // const removeBodyClasses = () =>{
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-warning')
  // }
  // const toggleMode = (clas)=>{                    //----> Exercise 2
  //   removeBodyClasses();
  //   document.body.classList.add('bg-'+clas)
  //   if(mode==='light'){
  //     setMode('dark');
  //     setModeName('Disable Dark Mode');
  //     document.body.style.backgroundColor = "#1c1c1c";
  //     // document.body.style.color = "white";
  //     showAlert("Dark mode has been enabled","success");
  //   }
  //   else{
  //     setMode('light');
  //     setModeName('Enable Dark Mode');
  //     document.body.style.backgroundColor = "white";
  //     // document.body.style.color = "black";
  //     showAlert("Light mode has been enabled","success");
  //   }
  // }
  return (
    // <>
    // <h1>This is me</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React With Harry Bhai
    //     </a>
    //   </header>
    // </div>
    // </>
    //Project 1
    //passing Props
    <>
    {/* <Router> */}
      <Navbar title='Navbar' about="About" mode={mode} toggleMode={toggleMode} modeName={modeName}/>  
      <Alert alert={alert}/>
      <div className="container my-5">
      {/* <Routes>
            <Route exact path="/about" Component={About}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to analyze' mode={mode}/>}></Route>
      </Routes> */}
      <TextForm showAlert={showAlert} heading='Enter the text to analyze' mode={mode}/>
      {/* <About/> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;