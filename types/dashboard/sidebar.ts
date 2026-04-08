export interface UserDetails{
    name: string,
    role?: string,
    profileImage?: string,
}

export interface MenuItem {
    name: string,
    icon: string,
    key: string,
}

export interface SidebarData{
    user: UserDetails,
    menu: MenuItem[],
}

export interface SidebarArrow{
    toggle:()=> void,
    isArrowVisible: boolean,
}