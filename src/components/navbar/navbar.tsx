import { useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { UserNav } from "./user-nav";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
        <div className="mx-4 sm:mx-8 flex h-14 items-center justify-between">

          <div className="flex items-center">
            <h1 className="font-semibold md:block hidden font-[inter] text-base md:text-lg truncate max-w-[160px] sm:max-w-none">
              {title}
            </h1>
          </div>
          <div className="hidden md:flex flex-1 justify-center px-6">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-3 py-2 w-full rounded-full"
              />
            </div>
          </div>

          <div className="flex items-center justify-end space-x-3">
            <Button
             variant="outline"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>

            <ModeToggle />

            <Button
              variant="outline"
              size="icon"
              className="relative rounded-full hover:bg-accent"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
            </Button>

            <UserNav />
          </div>
        </div>
      </header>

      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Search</DialogTitle>
          </DialogHeader>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Type to search..."
              className="pl-9 pr-3 py-2 w-full rounded-full"
              autoFocus
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
