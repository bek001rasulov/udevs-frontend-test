import {SidebarWrapper} from "./style.ts";
import {useState} from "react";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    return (
        <SidebarWrapper className={open ? 'short' : ""}>
            <button onClick={() => setOpen(!open)}>click</button>
        </SidebarWrapper>
    );
};

export default Sidebar;
