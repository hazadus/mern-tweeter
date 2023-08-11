import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Feed from "./pages/Feed";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Feed />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
