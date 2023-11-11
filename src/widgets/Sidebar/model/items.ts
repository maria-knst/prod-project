import React from 'react';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import MainIcon from 'shared/accets/icons/main.svg';
import AboutIcon from 'shared/accets/icons/about.svg';
import ProfileIcon from 'shared/accets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'main',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'about',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'profile',
        Icon: ProfileIcon,
    },
];
