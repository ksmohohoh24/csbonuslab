import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppNavbar from "./Navbar";
import Cards from "./Card";

function App() {
  return (
    <div className="App">
      
      <AppNavbar />

      
      <div className="container mt-4">
        <h1 className="text-center">CS 330L</h1>
        <h2 className="text-center">Section - 11</h2>
        <p className="text-center">WVU ID: 800436572</p>
        <p className="text-center">Hi I am Karim</p>

        
        <div id="cards" className="mt-4">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;