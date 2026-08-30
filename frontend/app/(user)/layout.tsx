import React, { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import AuthGuard from '@/components/AuthGuard';

const UserLayout = async ({ children }: { children: ReactNode }) => {
 
  return <AuthGuard>{children}</AuthGuard>
}

export default UserLayout