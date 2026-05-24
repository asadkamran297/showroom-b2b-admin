import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '@/features/auth/pages/Login'
import { Dashboard } from '@/features/dashboard/pages/Dashboard'
import { Deals } from '@/features/deals/pages/Deals'
import { Leads } from '@/features/leads/pages/Leads'
import { Notifications } from '@/features/notifications/pages/Notifications'
import { Roles } from '@/features/roles/pages/Roles'
import { ShowroomDetail } from '@/features/showrooms/pages/ShowroomDetail'
import { Showrooms } from '@/features/showrooms/pages/Showrooms'
import { Users } from '@/features/users/pages/Users'
import { VehicleForm } from '@/features/vehicles/pages/VehicleForm'
import { Vehicles } from '@/features/vehicles/pages/Vehicles'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/showrooms" element={<Showrooms />} />
        <Route path="/showrooms/:id" element={<ShowroomDetail />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/new" element={<VehicleForm />} />
        <Route path="/vehicles/:id/edit" element={<VehicleForm />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/users" element={<Users />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </BrowserRouter>
  )
}
