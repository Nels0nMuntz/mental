"use client";

import {
  Button,
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/shared/ui";
import { Menu } from "lucide-react";
import Link from "next/link";

interface Props {
  actions?: React.ReactNode;
}

export function MobileMenu({ actions }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='flex-shrink-0 ml-2.5'>
          <Menu className='h-7 w-7' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center gap-y-8 mt-8'>
          <nav>
            <ul className='flex flex-col items-center text-sm gap-y-4'>
              <li>
                <Link href='/about' className='px-5 py-4'>
                  About
                </Link>
              </li>
              <li>
                <Link href='our-specialists' className='px-5 py-4'>
                  Our Experts
                </Link>
              </li>
              <li>
                <Link href='for-specialists' className='px-5 py-4'>
                  For Specialists
                </Link>
              </li>
            </ul>
          </nav>
          {actions}
        </div>
      </SheetContent>
    </Sheet>
  );
}
