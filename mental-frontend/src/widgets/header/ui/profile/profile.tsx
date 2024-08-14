"use client";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Skeleton,
} from "@/shared/ui";
import Link from "next/link";
import { LogOut, User } from "lucide-react";

export function Profile() {
  // const session = useAppSession();
  // const { signOut, isPending } = useSignOut();
  // const user = session.data?.user;

  // if (session.status === "loading") {
  //   return <Skeleton className='w-8 h-8 rounded-full' />;
  // }

  // if (session.status === "unauthenticated") {
  //   return <SignInButton />;
  // }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='p-px rounded-full w-8 h-8'>
          {/* <Avatar profile={user} className='w-8 h-8' /> */}
          <User className='w-8 h-8' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 mr-2 '>
        <DropdownMenuLabel>
          <p>Account</p>
          <p className='text-xs text-muted-foreground overflow-hidden text-ellipsis'>
            {/* {user ? getProfileDisplayName(user) : undefined} */}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={`/profile`}>
              <User className='mr-2 h-4 w-4' />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className='mr-2 h-4 w-4' />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
