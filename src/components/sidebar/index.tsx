import {
    LogoContainer,
    MenuIcon, SettingsIcon, SidebarAvatar,
    SidebarMenu,
    SidebarSettings,
    SidebarWrapper
} from "./style.ts";
import IconLogo from "../../assets/logo.svg?react";
import IconOrder from "../../assets/order-icon.svg?react";
import IconSettings from "../../assets/settings-icon.svg?react";
import IconAvatar from "../../assets/avatar.svg?react";

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <LogoContainer>
                <IconLogo/>
            </LogoContainer>
            <SidebarMenu>
                <MenuIcon>
                    <IconOrder/>
                </MenuIcon>
            </SidebarMenu>
            <SidebarSettings>
                <SettingsIcon>
                    <IconSettings/>
                </SettingsIcon>
            </SidebarSettings>
            <SidebarAvatar>
                <IconAvatar/>
            </SidebarAvatar>
        </SidebarWrapper>
    );
};

export default Sidebar;
