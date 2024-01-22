import { Button } from '@/components/ui/button'
import { UserButton } from "@clerk/nextjs";
import { redirect } from 'next/navigation'
export default function Home() {
  redirect('/courses')
  return (
    <div className="h-screen flex justify-center items-center">
      <UserButton afterSignOutUrl="/sign-in"/>
    </div>
  )
}
