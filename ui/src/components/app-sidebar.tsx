import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { Frame, Info, Settings2 } from 'lucide-react';

const data = {
  navMain: [
    {
      title: 'Buttons',
      url: '#',
      icon: Frame,
      isActive: true,
      items: [
        {
          title: 'Primary button',
          url: '#',
        },
        {
          title: 'Icon button',
          url: '#',
        },
        {
          title: 'Button group',
          url: '#',
        },
      ],
    },
    {
      title: 'Cards',
      url: '#',
      icon: Frame,
      items: [
        {
          title: 'Basic card',
          url: '#',
        },
        {
          title: 'Media card',
          url: '#',
        },
        {
          title: 'Action card',
          url: '#',
        },
      ],
    },
    {
      title: 'Data display',
      url: '#',
      icon: Frame,
      items: [
        {
          title: 'Table',
          url: '#',
        },
        {
          title: 'Data grid',
          url: '#',
        },
        {
          title: 'List view',
          url: '#',
        },
        {
          title: 'Timeline',
          url: '#',
        },
      ],
    },
    {
      title: 'Navigation',
      url: '#',
      icon: Frame,
      items: [
        {
          title: 'Breadcrumbs',
          url: '#',
        },
        {
          title: 'Dropdown menu',
          url: '#',
        },
        {
          title: 'Command menu',
          url: '#',
        },
        {
          title: 'Pagination',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      name: 'Preferences',
      url: '#',
      icon: Settings2,
    },
    {
      name: 'About',
      url: '#',
      icon: Info,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="text-5xl text-black">▣</div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Steepbase</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavSecondary />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
