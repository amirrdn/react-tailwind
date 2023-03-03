import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Defaultlayouts from './component/Defaultlayouts'
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" name="Home" element={
            <Defaultlayouts />}
          />
      </Routes>
</BrowserRouter>
  );
}

export default App;
