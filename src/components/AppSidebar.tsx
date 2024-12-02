import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/Sidebar";
import { NavLink } from "react-router-dom";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          url: "/docs",
        },
        {
          title: "Installation",
          url: "/docs/installation",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Button",
          url: "/docs/components/button",
        },
        {
          title: "Input, Textarea",
          url: "/docs/components/input-textarea",
          isActive: true,
        },
        {
          title: "Checkbox, Radio,  Switch",
          url: "/docs/components/checkbox-radio-switch",
        },
        {
          title: "Select",
          url: "/docs/components/select",
        },
        {
          title: "Slider",
          url: "/docs/components/slider",
        },
        {
          title: "Alert, Notification, Banner",
          url: "/docs/components/alert-notification-banner",
        },
        {
          title: "Dialog",
          url: "/docs/components/dialog",
        },
        {
          title: "Authentication",
          url: "/docs/components/authentication",
        },
      ],
    },
    {
      title: "Community",
      items: [
        {
          title: "Discord",
          url: "/docs/discord",
        },
        {
          title: "GitHub",
          url: "/docs/github",
        },
        {
          title: "X (Twitter)",
          url: "/docs/twitter",
        },
        {
          title: "Contribution Guide",
          url: "/docs/contribution ",
        },

      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="mt-16">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild></SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className="hover:bg-[#fafafa] dark:hover:bg-[#18181b] font-bold"
                >
                  <span>{item.title}</span>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild>
                          <NavLink
                            to={item.url}
                            className="block w-full text-left p-2 roundedbg-gray-200  hover:bg-gray-300/70 dark:hover:bg-gray-700"
                          >
                            {item.title}
                          </NavLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
