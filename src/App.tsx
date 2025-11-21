import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Welcome from './pages/Welcome';
import ProjectDetail from './pages/ProjectDetail';
import './styles/theme.css';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          {/* Welcome screen at root path */}
          <Route path="/" element={<Welcome />} />

          {/* Other routes wrapped in Layout */}
          <Route path="/home" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/project/:projectId" element={<Layout><ProjectDetail /></Layout>} />

          {/* Redirect unmatched routes to welcome screen */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <Analytics />
    </ErrorBoundary>
  );
}