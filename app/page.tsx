import { Button } from '@/components/ui/button'
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from 'next/navigation'
export default function Home() {
  const { userId } = auth();
  if(userId){
    redirect('/dashboard')

  }else{

    redirect('/courses')
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <UserButton afterSignOutUrl="/sign-in"/>
    </div>
  )
}
