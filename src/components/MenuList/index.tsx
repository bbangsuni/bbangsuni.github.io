import Icon from '../Icon'
import style from './style.module.scss'
import { useNavigate } from 'react-router-dom'

export interface Menu {
  title: string
  route: string
}

export interface MenuListProps {
  menus: Menu[]
  onCloseClick: () => void
  onMenuItemClick: () => void
}

export default function MenuList({
  menus,
  onCloseClick,
  onMenuItemClick,
}: MenuListProps) {
  const navigate = useNavigate()

  return (
    <nav>
      <header className={style.header}>
        <button onClick={onCloseClick}>
          <Icon icon="close" width="15" />
        </button>
      </header>
      <ul className={style.menuList}>
        {menus.map((menu) => (
          <li className={style.menuItem} key={menu.route}>
            <button
              className={style.menuButton}
              onClick={() => {
                navigate(menu.route)
                onMenuItemClick()
              }}
            >
              <span>{menu.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
