import React from 'react'
import SiteNavbar from './SiteNavbar'
import { getServerSession } from 'next-auth'
import authOptions from '@/app/api/auth/authOptions'

const MainNavbar = async() => {
  const session = await getServerSession(authOptions)
  return (<SiteNavbar session={session}/>)
}

export default MainNavbar