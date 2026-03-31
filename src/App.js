import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/PAGES/Home';
import Aboutpagee from './components/PAGES/Aboutpagee';
import Servicepagee from './components/PAGES/Servicepagee';
import Pricepagee from './components/PAGES/Pricepagee';
import Contactpagee from './components/PAGES/Contactpagee';
import Bookingpagee from './components/PAGES/Bookingpagee';
import Testmonialpagee from './components/PAGES/Testmonialpagee';
import Ourteampagee from './components/PAGES/Ourteampagee';
import Recentwrkpagee from './components/PAGES/Recentwrkpagee';
import Expertpagee from './components/PAGES/Expertpagee';

import AdminLogin from './components/ADMIN/LOGIN/Login';
import Dashboard from './components/ADMIN/DASHBOARD/Dashboard';
import ServiceTable from './components/ADMIN/SERVICES/Servicetable';
import AddService from './components/ADMIN/SERVICES/Addservice';
import EditService from './components/ADMIN/SERVICES/Editservice';
import AddPackage from './components/ADMIN/PACKAGES/Addpackage';
import AdminPackageTable from './components/ADMIN/PACKAGES/Packagetable';
import EditPackage from './components/ADMIN/PACKAGES/EditPackage';
import AddExpert from './components/ADMIN/EXPERT/AddExpert';
import ExpertTable from './components/ADMIN/EXPERT/ExpertTable';
import EditExpert from './components/ADMIN/EXPERT/Editexpert';
import Wrktable from './components/ADMIN/RECENTWRK/Wrktable';
import AddRecentWork from './components/ADMIN/RECENTWRK/AddRecentwrk';
import Editwork from "./components/ADMIN/RECENTWRK/EditRecentWork";

import ScrollTop from './components/Scroll/ScrollTop';
import ScrollToTop from './components/Scroll/ScrollToTop';
import LogoutButton from './components/ADMIN/LOGOUT/Logout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <ScrollTop />
        <Routes>
          {/* Public Pages */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutpagee />} />
          <Route path='/service' element={<Servicepagee />} />
          <Route path='/pricepage' element={<Pricepagee />} />
          <Route path='/contact' element={<Contactpagee />} />
          <Route path='/team' element={<Expertpagee />} />
          <Route path='/book' element={<Bookingpagee />} />
          <Route path='/testmonial' element={<Testmonialpagee />} />
          <Route path='/ourteam' element={<Ourteampagee />} />
          <Route path='/ourworks' element={<Recentwrkpagee />} />

          {/* Admin Pages */}
          <Route path='/admin/login' element={<AdminLogin />} />

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <LogoutButton />
              <Dashboard />
            </ProtectedRoute>
          } />

          

          <Route path='/admin/services' element={
            <ProtectedRoute>
              <ServiceTable />
            </ProtectedRoute>
          } />

          <Route path='/admin/services/add' element={
            <ProtectedRoute>
              <AddService />
            </ProtectedRoute>
          } />

          <Route path="/admin/services/edit/:id" element={
            <ProtectedRoute>
              <EditService />
            </ProtectedRoute>
          } />

          <Route path="/admin/packages/add" element={
            <ProtectedRoute>
              <AddPackage />
            </ProtectedRoute>
          } />

          <Route path="/admin/packages/table" element={
            <ProtectedRoute>
              <AdminPackageTable />
            </ProtectedRoute>
          } />

          <Route path="/admin/packages/edit/:id" element={
            <ProtectedRoute>
              <EditPackage />
            </ProtectedRoute>
          } />

          <Route path="/admin/experts/add" element={
            <ProtectedRoute>
              <AddExpert />
            </ProtectedRoute>
          } />

          <Route path="/admin/experts/table" element={
            <ProtectedRoute>
              <ExpertTable />
            </ProtectedRoute>
          } />

          <Route path="/admin/expert/edit/:id" element={
            <ProtectedRoute>
              <EditExpert />
            </ProtectedRoute>
          } />

          <Route path="/admin/recentworks/add" element={
            <ProtectedRoute>
              <AddRecentWork />
            </ProtectedRoute>
          } />

          <Route path="/admin/recentworks/table" element={
            <ProtectedRoute>
              <Wrktable />
            </ProtectedRoute>
          } />

          <Route path="/admin/recentworks/edit/:id" element={
            <ProtectedRoute>
              <Editwork />
            </ProtectedRoute>
          } />

        </Routes>
      </Router>
    </div>
  );
}

export default App;