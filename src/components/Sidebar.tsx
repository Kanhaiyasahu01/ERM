import { useAuthStore } from '../store';
import { LogOut, User, Users, BarChart2, Home, BookOpen, FileText, ClipboardList, Database, BadgeCheck, Wallet, BedDouble, Library, FileBarChart2, Workflow, ShieldCheck } from 'lucide-react';
import { useNavigate, NavLink } from 'react-router-dom';
import './Sidebar.css';

const navItems = [
  { to: '/dashboard', icon: <Home size={20} />, label: 'Dashboard', roles: ['admin', 'staff', 'student'] },
  { to: '/students', icon: <Users size={20} />, label: 'Students', roles: ['admin', 'staff'] },
  { to: '/staff', icon: <User size={20} />, label: 'Staff', roles: ['admin'] },
  { to: '/academics', icon: <BookOpen size={20} />, label: 'Academics', roles: ['admin', 'staff'] },
  { to: '/exams', icon: <ClipboardList size={20} />, label: 'Exams', roles: ['admin', 'staff'] },
  { to: '/admissions', icon: <FileText size={20} />, label: 'Admissions', roles: ['admin', 'staff'] },
  { to: '/reports', icon: <BarChart2 size={20} />, label: 'Reports', roles: ['admin', 'staff'] },
];

// SIH Prototype Sidebar Links (with icons)
const prototypeLinks = [
  { to: '/centralized-database', icon: <Database size={20} />, label: 'Centralized Database' },
  { to: '/admissions-prototype', icon: <BadgeCheck size={20} />, label: 'Admissions' },
  { to: '/fee-management', icon: <Wallet size={20} />, label: 'Fee Management' },
  { to: '/hostel-management', icon: <BedDouble size={20} />, label: 'Hostel Management' },
  { to: '/library-management', icon: <Library size={20} />, label: 'Library Management' },
  { to: '/examination-records', icon: <FileBarChart2 size={20} />, label: 'Examination Records' },
  { to: '/integration-automation', icon: <Workflow size={20} />, label: 'Integration & Automation' },
  { to: '/security-access', icon: <ShieldCheck size={20} />, label: 'Security & Access' },
];

export default function Sidebar() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img src={user.avatar} alt={user.name} className="avatar" />
        <div className="profile-info">
          <div className="name">{user.name}</div>
          <div className="role">{user.role}</div>
        </div>
      </div>
      <nav className="nav-links ">
        {[...navItems.filter(item => user.role && item.roles.includes(user.role)), ...prototypeLinks].map(item => (
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              `nav-link${isActive ? ' active' : ''}`
            }
            key={item.to}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <button className="logout-btn" onClick={() => { logout(); navigate('/login'); }}>
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
}
