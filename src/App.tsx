

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store';
import LoginPage from './pages/LoginPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import StudentsPage from './pages/StudentsPage.tsx';
import StaffPage from './pages/StaffPage.tsx';
import ReportsPage from './pages/ReportsPage.tsx';
import AcademicsPage from './pages/AcademicsPage.tsx';
import ExamsPage from './pages/ExamsPage.tsx';
import AdmissionsPage from './pages/AdmissionsPage.tsx';
import Sidebar from './components/Sidebar.tsx';
import './App.css';

function App() {
  const user = useAuthStore((s) => s.user);

  return (
    <Router>
      {user && <Sidebar />}
      <div className={user ? 'main-content' : ''}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/login" />} />
          <Route path="/students" element={user ? <StudentsPage /> : <Navigate to="/login" />} />
          <Route path="/staff" element={user ? <StaffPage /> : <Navigate to="/login" />} />
          <Route path="/academics" element={user ? <AcademicsPage /> : <Navigate to="/login" />} />
          <Route path="/exams" element={user ? <ExamsPage /> : <Navigate to="/login" />} />
          <Route path="/admissions" element={user ? <AdmissionsPage /> : <Navigate to="/login" />} />
          <Route path="/reports" element={user ? <ReportsPage /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to={user ? '/dashboard' : '/login'} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
