import {BrowserRouter as Router ,Route ,Routes} from "react-router-dom"
import Header from "./components/Header";

// styling imports
import "./styles/app.scss"
import "./styles/header.scss"
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<div>hello</div>}/>
      </Routes>
    </Router>
  );
}

export default App;
