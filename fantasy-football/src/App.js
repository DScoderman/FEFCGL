
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout';
import LoginPage from './pages/loginPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element ={<LoginPage/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
