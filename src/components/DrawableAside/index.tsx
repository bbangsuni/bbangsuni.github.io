import { PropsWithChildren } from 'react'
import style from './style.module.scss'

export interface DrawableAsideProps extends PropsWithChildren {
  active: boolean
  onModalClick: () => void
}

export default function DrawableAside({
  active,
  onModalClick,
  children,
}: DrawableAsideProps) {
  return (
    <div
      className={`${style.modal} ${active ? style.modalActive : ''}`}
      onClick={onModalClick}
    >
      <aside
        className={`${style.aside} ${active ? style.active : ''}`}
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        <header>
          <button></button>
        </header>
        {children}
      </aside>
    </div>
  )
}
