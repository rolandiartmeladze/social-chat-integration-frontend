'use client';
import React, { useState } from "react";
import { Icons } from "@/components/icons"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@heroui/badge";
import { useAuth } from "@/hooks/useAuth";

import { useEffect } from "react";

export default function SidebarWrapper() {
  const { user } = useAuth();

  useEffect(() => {
    console.log("Authenticated user:", user);
  }, [user]); 
  
  const [isOpen, setIsOpen] = useState(false);
  const iconButtons = [
    { Icon: Icons.chat1, label: "chat" },
    { Icon: Icons.chart, label: "chart" },
    { Icon: Icons.voice, label: "voice" },
    { Icon: Icons.dataBase, label: "base" },
    { Icon: Icons.check, label: "check" },
    { Icon: Icons.folder, label: "folder" },
  ];
  return (

    <Sidebar
      collapsible="icon"
      data-open={isOpen}
      className="w-64 border-none"
    >
      <SidebarHeader className="relative flex items-center justify-between py-4">
        <div className="flex items-center gap-5">
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
        <ul className="flex flex-col gap-5 p-2 mt-4">
          <li className="size-9 p-2 justify-center items-center cursor-pointer">
            <Badge content="5" className="!-top-2 !-right-2.5 bg-[#A50000] flex justify-center items-center">
              <Icons.inBox className="size-5" />
            </Badge>
          </li>

          {iconButtons.map(({ Icon, label }, index) => (
            <li
              key={index}
              className="size-9 p-2 justify-center items-center cursor-pointer"
              title={label}
            >
              <Icon className="size-5" />
            </li>
          ))}
        </ul>
      </SidebarContent>

      <SidebarFooter className="flex flex-col items-center justify-center gap-3 p-4 rounded-tl-lg">
        <div className="flex justify-center items-center">
          <Icons.settings className="size-5" />
        </div>
        <div className="flex justify-center items-center">
          <Icons.bell className="size-5" />
        </div>
        <Avatar className="m-2 size-9">
          <AvatarImage src="https://avatars.githubusercontent.com/u/13499054?v=4" />
          <AvatarFallback>RA</AvatarFallback>
        </Avatar>
        {isOpen && (
          <div className="flex flex-col whitespace-nowrap overflow-hidden">
            <span className="text-sm font-semibold text-sidebar-primary-foreground">
              {user?.displayName}
            </span>
            <span className="text-xs text-sidebar-primary-foreground opacity-80">
              Full Stack Developer
            </span>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
