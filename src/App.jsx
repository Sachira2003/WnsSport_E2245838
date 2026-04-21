import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
// import Dashboard from '/pages/Dashboard';       

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Home />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />  
                
            </Routes>
            
        </BrowserRouter>
    );
}

export default App; 