import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { SignIn } from './pages/SignIn/SignIn';
import { AnimatePresence } from 'framer-motion';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { LeaderboardPage } from './pages/LeaderboardPage/LeaderboardPage';
import { PlayGame } from './pages/PlayGame/PlayGame';

export const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/play" element={<PlayGame />} />
      </Routes>
    </AnimatePresence>
  );
}

