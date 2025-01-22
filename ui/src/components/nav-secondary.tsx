import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { ExternalLink, Info, MoreHorizontal, Settings2 } from 'lucide-react';

export function NavSecondary() {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup className="mt-auto">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="sm"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Settings2 />
                <span>Preferences</span>

                <SidebarMenuAction asChild showOnHover>
                  <MoreHorizontal />
                </SidebarMenuAction>

                <span className="sr-only">Open preferences</span>
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-48"
              side={isMobile ? 'bottom' : 'right'}
              align="end"
            >
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
              <DropdownMenuRadioGroup value="light" onValueChange={() => {}}>
                <DropdownMenuRadioItem value="light">
                  Light
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="system">
                  System
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="sm"
            asChild
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <a
              href="https://drupal.org/project/steepbase"
              target="_blank"
              rel="noreferrer"
            >
              <Info />
              <span>About</span>

              <SidebarMenuAction asChild showOnHover>
                <ExternalLink />
              </SidebarMenuAction>

              <span className="sr-only">Open preferences</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
