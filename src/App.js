import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='flex flex-col justify-between  '>
          <Navbar />

          <main className=' mx-auto px-40 pb-12 h-100 '>
            <Routes>
              <Route path='/' element={<Home />}></Route>
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
