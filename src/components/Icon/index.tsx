import { ReactComponent as ChevronLeftIcon } from './icons/chevron-left.svg'
import { ReactComponent as ChevronRightIcon } from './icons/chevron-right.svg'
import { ReactComponent as CloseIcon } from './icons/close.svg'
import { ReactComponent as MenuIcon } from './icons/menu.svg'

const ICON = ['chevron-left', 'chevron-right', 'menu', 'close'] as const
export type Icon = (typeof ICON)[keyof typeof ICON]

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: Icon
}

const DEFAULT_ICON_SIZE = 20

export default function Icon({
  icon,
  width = DEFAULT_ICON_SIZE,
  height = DEFAULT_ICON_SIZE,
  stroke = 'black',
  ...rest
}: IconProps) {
  switch (icon) {
    case 'chevron-left':
      return (
        <ChevronLeftIcon
          width={width}
          height={height}
          stroke={stroke}
          {...rest}
        />
      )
    case 'chevron-right':
      return (
        <ChevronRightIcon
          width={width}
          height={height}
          stroke={stroke}
          {...rest}
        />
      )
    case 'menu':
      return (
        <MenuIcon width={width} height={height} stroke={stroke} {...rest} />
      )
    case 'close':
      return (
        <CloseIcon width={width} height={height} stroke={stroke} {...rest} />
      )
    default:
      return <></>
  }
}
