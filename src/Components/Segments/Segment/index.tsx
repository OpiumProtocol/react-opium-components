import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import Button from '../../OpiumButton'

import { generateRenderProps } from '../../../Utils/helpers'
import { ETheme, themes, TVariant } from '../../../Constants/Types/theme.types'

export type Props = {
  /** Item text */
  label?: string
  /** Item value */
  value?: string
  /** Define theme */
  theme?: ETheme
  /** Set active item value */
  currentValue?: string
  /** Function, that fires active item */
  onClick?: (val: string) => void
  /** Set component uncontrolled */
  uncontrolled?: boolean
  /** Disabled flag */
  disabled?: boolean
  /** Set button variant */
  variant?: TVariant
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  currentValue: '',
  onClick: () => { }
}

const Segment: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const { label, value, currentValue, theme, variant, onClick, uncontrolled, disabled } = renderProps

  const [hover, setHover] = React.useState<boolean>(false)
  const [currentVal, setCurrentVal] = React.useState<string>('')

  const { color, backgroundColor, borderColor } = themes[theme as ETheme]

  const styled = {
    color: color[variant as TVariant].value,
    backgroundColor: backgroundColor[variant as TVariant].value,
    borderColor: borderColor[variant as TVariant].value,
    borderStyle: 'solid',
    borderRadius: 'unset',
  }

  const hovered = {
    color: color[variant as TVariant].hover,
    backgroundColor: backgroundColor[variant as TVariant].hover,
    borderColor: borderColor[variant as TVariant].hover,
    borderStyle: 'solid',
    borderRadius: 'unset'
  }

  const styleItem = (val: string) => {
    if (hover && (val === currentVal || val === currentValue)) return hovered
    if (val === currentVal || val === currentValue) return hovered
    return styled
  }

  const uncontrolledClick = (val: string) => {
    setCurrentVal(val)
  }

  const handleEnter = (value: string) => {
    setCurrentVal(value)
    setHover(true)
  }

  const handleLeave = () => {
    setCurrentVal('')
    setHover(false)
  }

  const clickOutsideElementListener = (ref: any) => {
    React.useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          handleLeave()
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const FancyButton = React.forwardRef((props, ref) => (
    <Button
      key={uuidv4()}
      refs={ref}
      label={label}
      theme={theme}
      variant={variant}
      className='segments-item'
      style={styleItem(value)}
      onClick={uncontrolled ? () => uncontrolledClick(value) : () => onClick(value)}
      disabled={disabled}
      onMouseEnter={() => handleEnter(value)}
      onMouseLeave={() => handleLeave()}
    />
  ))
  const segmentRef = React.createRef()
  clickOutsideElementListener(segmentRef)

  return (
    <FancyButton ref={segmentRef} />
  )
}

export default Segment
