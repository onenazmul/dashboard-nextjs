import { Apple, Calendar, ChevronDown, ChevronUp, Edit, Home, Inbox, Plus, PlusCircle, Projector, Search, Settings, User, User2 } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "./ui/sidebar"
import Link from "next/link"
import { DropdownMenu, DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"

const AppSidebar = () => {
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]
  return (
    <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/">
                  <Apple />
                  <span>The Application</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator className="mx-0" />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Group one</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                            <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                            </a>
                        </SidebarMenuButton>
                        {item.title === "Inbox" && (
                          <SidebarMenuBadge>5</SidebarMenuBadge>
                        )}
                      </SidebarMenuItem>
                  ))}
                </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>
              Projects
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Projector />
                    See all Projects
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>
                        <Plus/>
                        Add a Project
                      </SidebarMenuSubButton>
                      <SidebarMenuSubButton>
                        <Edit/>
                        Edit a Project
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarSeparator className="mx-0" />
        <SidebarFooter>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2 /> Nazmul H <ChevronUp className="ml-auto"/>
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
              <DropdownMenuItem>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>Setting</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar