

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
import CentralizedDatabasePage from './pages/CentralizedDatabasePage';
import AdmissionsPrototypePage from './pages/AdmissionsPrototypePage';
import FeeManagementPage from './pages/FeeManagementPage';
import HostelManagementPage from './pages/HostelManagementPage';
import LibraryManagementPage from './pages/LibraryManagementPage';
import ExaminationRecordsPage from './pages/ExaminationRecordsPage';
import DashboardsReportingPage from './pages/DashboardsReportingPage';
import IntegrationAutomationPage from './pages/IntegrationAutomationPage';
import SecurityAccessPage from './pages/SecurityAccessPage';
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
          <Route path="/centralized-database" element={user ? <CentralizedDatabasePage /> : <Navigate to="/login" />} />
          <Route path="/admissions-prototype" element={user ? <AdmissionsPrototypePage /> : <Navigate to="/login" />} />
          <Route path="/fee-management" element={user ? <FeeManagementPage /> : <Navigate to="/login" />} />
          <Route path="/hostel-management" element={user ? <HostelManagementPage /> : <Navigate to="/login" />} />
          <Route path="/library-management" element={user ? <LibraryManagementPage /> : <Navigate to="/login" />} />
          <Route path="/examination-records" element={user ? <ExaminationRecordsPage /> : <Navigate to="/login" />} />
          <Route path="/dashboards-reporting" element={user ? <DashboardsReportingPage /> : <Navigate to="/login" />} />
          <Route path="/integration-automation" element={user ? <IntegrationAutomationPage /> : <Navigate to="/login" />} />
          <Route path="/security-access" element={user ? <SecurityAccessPage /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to={user ? '/dashboard' : '/login'} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
