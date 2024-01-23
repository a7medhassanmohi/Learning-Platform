import { UserButton } from "@clerk/nextjs";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="hidden md:block  md:w-64 fixed inset-y-0">
        <SideNav />
      </div>
      <div className="md:ps-64">
        <Header />
        {children}
      </div>
    </div>
  );
}
