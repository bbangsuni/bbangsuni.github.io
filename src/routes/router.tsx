import { ROUTE } from './routes'
import Root from './Root'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: <Root />,
    children: [
      {
        path: ROUTE.HOME,
        element: <h1>Home</h1>,
      },
      {
        path: ROUTE.RECIPES,
        element: <h1>My Receipt</h1>,
      },
      { path: ROUTE.INGREDIENTS, element: <h1>Ingredients</h1> },
    ],
  },
])

export default router
