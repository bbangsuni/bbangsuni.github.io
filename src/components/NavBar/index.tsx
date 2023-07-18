import Icon from '../Icon'
import { MouseEvent } from 'react'
import style from './style.module.scss'

export interface NavBarProps {
  title: string
  onMenuButtonClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function NavBar({ title, onMenuButtonClick }: NavBarProps) {
  return (
    <nav className={style.navBar}>
      <h1 className={style.title}>{title}</h1>
      <button className={style.button} onClick={onMenuButtonClick}>
        <Icon icon="menu" stroke="#4b4637" />
      </button>
    </nav>
  )
}
