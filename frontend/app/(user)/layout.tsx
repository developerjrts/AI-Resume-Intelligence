import React, { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

const UserLayout = async ({ children }: { children: ReactNode }) => {
  const cookieStore = await cookies();
  const session_code = cookieStore.get("session_code");

  if (!session_code) {
    redirect("/sign-in")
  }

  return <>{children}</>
}

export default UserLayout