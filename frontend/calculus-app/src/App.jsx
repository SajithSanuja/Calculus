import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { SignIn } from './pages/SignIn/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

