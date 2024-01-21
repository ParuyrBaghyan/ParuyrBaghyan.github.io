import './App.css';
import AboutMe from './modules/JS/AboutMe';
import GitHub from './modules/JS/GitHub';
import Header from './modules/JS/Header';
import vectors from './video/vectors.mov'
function App() {
  return (
    <div className="App">
      <video autoPlay loop muted >
        <source src={vectors} type='video/mp4' />
      </video>
      <Header />
      <div className="clear-place"></div>
      <div className="app-center-div">
        <AboutMe />
        <GitHub />
      </div>
    </div>
  );
}

export default App;
