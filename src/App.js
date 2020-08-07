import React from 'react';
import './App.css';
import coffeeMachine from './components/coffee-machine/coffeeMachine';
import './components/coffee-machine/coffee.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <p>Divesh Singh portfolio</p>
      <coffeeMachine/>
      <img alt="Under construction" src="https://firebasestorage.googleapis.com/v0/b/portfolio-991b9.appspot.com/o/under_construction.gif?alt=media&token=ab184eaa-1e76-4827-8288-04d93f3214bd"/>
      <img alt="construction" src="https://firebasestorage.googleapis.com/v0/b/portfolio-991b9.appspot.com/o/construction.webp?alt=media&token=9337fcc4-9b5f-4d8a-8ec3-ced0388e9b85"/>
        <p>Meanwhile you can contact me at</p><p className="email">contact@diveshsingh.in</p>
        <div className="social">
          <p>OR visit me at</p>
          <button><a href="https://github.com/Divesh-singh">GitHub</a></button>{' '}
          <button><a href="https://www.instagram.com/divesh.js/">Instagram</a></button>{' '}
          <button><a href="https://www.linkedin.com/in/divesh-kumar-singh-222827167/">Linkedin</a></button>{' '}
          <button><a href="https://twitter.com/divesh_js">Twitter</a></button>
        </div> */}
        <div className="coffee-container">
  <div className="coffee-header">
    <div className="coffee-header__buttons coffee-header__button-one" />
    <div className="coffee-header__buttons coffee-header__button-two" />
    <div className="coffee-header__display" />
    <div className="coffee-header__details" />
  </div>
  <div className="coffee-medium">
    <div className="coffe-medium__exit" />
    <div className="coffee-medium__arm" />
    <div className="coffee-medium__liquid" />
    <div className="coffee-medium__smoke coffee-medium__smoke-one" />
    <div className="coffee-medium__smoke coffee-medium__smoke-two" />
    <div className="coffee-medium__smoke coffee-medium__smoke-three" />
    <div className="coffee-medium__smoke coffee-medium__smoke-for" />
    <div className="coffee-medium__cup" />
  </div>
  <div className="coffee-footer" />
</div>
      </header>
    </div>
  );
}

export default App;
