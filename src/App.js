import { Routes, Route } from 'react-router';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import './App.css';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';

function App() {
  return (
      <div>
        <Menu />
        <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;
