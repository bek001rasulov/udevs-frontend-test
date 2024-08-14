import styled from "@emotion/styled";

export const SidebarWrapper = styled.aside`
    width: 56px;
    background-color: cadetblue;
    position: relative;
    transition: width 0.2s ease-in-out;
    button {
        position: absolute;
        top: 0;
        right: -16px;
    }
    
    &.short{
        width: 80px;
    }
`
