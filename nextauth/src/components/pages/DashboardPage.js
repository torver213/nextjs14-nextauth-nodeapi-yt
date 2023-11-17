import { checkUserRole } from '@/utils'
import React from 'react'
import AdminDashboard from './AdminDashboard'
import UserDashboard from './UserDashboard'

const DashboardPage = ({session}) => {
    const checkRole = checkUserRole(session?.user?.role)
    if(checkRole.isAdminRole) return <AdminDashboard session={session} />
    if(checkRole.isUserRole) return <UserDashboard session={session} />
    return null
}

export default DashboardPage