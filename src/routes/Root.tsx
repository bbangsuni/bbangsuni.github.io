import MenuList, { Menu } from '../components/MenuList'

import DrawableAside from '../components/DrawableAside'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { ROUTE } from './routes'
import { useState } from 'react'

const menus: Menu[] = [
  { title: '🏠', route: ROUTE.HOME },
  { title: '📝 레시피 관리', route: ROUTE.RECIPES },
  { title: '🥡 재료 관리', route: ROUTE.INGREDIENTS },
]

export default function Root() {
  const [isDrawerActive, setIsDrawerActive] = useState(false)

  const openDrawer = () => {
    setIsDrawerActive(true)
  }

  const closeDrawer = () => {
    setIsDrawerActive(false)
  }

  return (
    <>
      <header>
        <NavBar title="🥖 빵수니 계산기 🥖" onMenuButtonClick={openDrawer} />
      </header>

      <main>
        <Outlet />
      </main>

      <DrawableAside active={isDrawerActive} onModalClick={closeDrawer}>
        <MenuList
          menus={menus}
          onCloseClick={closeDrawer}
          onMenuItemClick={closeDrawer}
        />
      </DrawableAside>
    </>
  )
}
