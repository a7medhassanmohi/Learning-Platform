"use client"
import React, { useEffect, useState } from 'react'
import SideNav from './SideNav';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
type Props = {}

const MobileSidebar = (props: Props) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
    return (
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden ">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
        <SideNav />
        </SheetContent>
      </Sheet>
    );
}

export default MobileSidebar