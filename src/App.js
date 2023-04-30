import './App.css';
import Navbar from "./components/Navbar"
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
      <Navbar />

        <Routes>
          <Route exact path="/" element={<News key="all" category="all" />} />
          <Route exact path="/business" element={<News key="business" category="business" />} />
          <Route exact path="/sports" element={<News key="sports" category="sports" />} />
          <Route exact path="/technology" element={<News key="technology" category="technology" />} />
          <Route exact path="/world" element={<News key="world" category="world" />} />
          <Route exact path="/science" element={<News key="science" category="science" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
