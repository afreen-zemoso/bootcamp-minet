interface MenuItem {
    text: string;
    isBlack?: boolean;
}

export interface FooterProps {
    menuItems: MenuItem[];
}
