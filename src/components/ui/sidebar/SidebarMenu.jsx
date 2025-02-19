import { Users } from "lucide-react";
import SidebarLink from "./SidebarLink";
import {SidebarGroupTitle} from './SidebarGroupTitle'
import {listMenu} from '../../../utils/menu'

export const SidebarMenu = () => {
    const menus = listMenu()
    const icons = [
        {
            key: 'users',
            value: <Users/>
        }
    ]
    return (
        <ul className="space-y-2">
            {menus.map((menu) => (<div key={menu.gruop}>
                {/* group menu  */}
                <SidebarGroupTitle title={menu.gruop}/>

                {/* menu */}
                {menu.menu.map((subMenu) =>  (
                    <li key={subMenu.label}>
                        <SidebarLink to={subMenu.to} icon={icons.filter((icon) => icon.key === subMenu.icon)[0].value} label={subMenu.label} key={subMenu.label}/>
                    </li>
                ))}
            </div>
            ))}
        </ul>
    )

}
