
import "./App.css";
import Navbar from "./mycomponents/navbar";
import About from "./mycomponents/about";
import Gallery from "./mycomponents/gallery";
import Contact from "./mycomponents/contct";
import Home from "./mycomponents/home";
import SongDetail from "./mycomponents/SongDetail";
import SongList from "./mycomponents/SongList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { link } from "react-router-dom";
import Footer from "./mycomponents/footer";
export default function App() {
  //  let myvariable=345;
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
          </Switch>
        </div>
        <Footer />
        
      </div>
      
    </Router>
    
  );
}