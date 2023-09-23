
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout';
import HomePage from './pages/homePage/';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element ={<HomePage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
