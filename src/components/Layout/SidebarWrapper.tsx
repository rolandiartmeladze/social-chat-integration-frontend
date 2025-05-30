'use client';
import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  SidebarProvider,
} from "@/components/ui/sidebar";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SidebarWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SidebarProvider>
    <Sidebar
      collapsible="icon"
      data-open={isOpen}
      className="w-64 h-screen bg-accent text-sidebar-foreground"
    >
      <SidebarHeader className="relative flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          {isOpen && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-2xl font-bold cursor-default select-none">
                  Admin APP
                </TooltipTrigger>
                <TooltipContent>Application Sidebar</TooltipContent>
              </Tooltip>
            </TooltipProvider>)}
          <SidebarTrigger
            onClick={() => setIsOpen(!isOpen)}
            className="size-7 right-2 top-2 p-2 rounded cursor-pointer"
          />
        </div>

      </SidebarHeader>

      <SidebarContent className="flex flex-col gap-4">
      </SidebarContent>

      <SidebarFooter className="flex flex-row items-center justify-center gap-3 p-4 rounded-tl-lg">
        <Avatar className="m-2 size-9">
          <AvatarImage src="https://avatars.githubusercontent.com/u/13499054?v=4" />
          <AvatarFallback>RA</AvatarFallback>
        </Avatar>
        {isOpen && (
          <div className="flex flex-col whitespace-nowrap overflow-hidden">
            <span className="text-sm font-semibold text-sidebar-primary-foreground">
              Roland Artmeladze
            </span>
            <span className="text-xs text-sidebar-primary-foreground opacity-80">
              Full Stack Developer
            </span>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
    </SidebarProvider>
  );
}
