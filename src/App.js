import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Services from './components/services/Services';
import Pie from './components/footer/Footer';


function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Pie/>
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
