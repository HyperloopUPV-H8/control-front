import styles from "components/Sidebar/SidebarItem/SidebarItem.module.scss";
import { NavLink } from "react-router-dom";

export type SidebarItemData = {
    path: string;
    icon: React.ReactNode;
};

type Props = {
    item: SidebarItemData;
};

export const SidebarItem = ({ item }: Props) => {
    return (
        <NavLink
            to={item.path}
            className={styles.link}
        >
            {item.icon}
        </NavLink>
    );
};
