import React from 'react'
import { Dropdown } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './DropDown.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  label: string
  content: any
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  label: '',
  content: ''
}

// @ts-ignore
const CustomToggle = React.forwardRef(({ children, onClick }: {children: any, onClick: (e: any) => void}, ref) => (
  // @ts-ignore
  <button
    // @ts-ignore
    ref={ref}
    onClick={(e) => {
      e.preventDefault()
      onClick(e)
    }}
  >
    <div className="DropDown__label">
      {children}
    </div>
    <svg className="DropDown__arrow" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.35355 0.646447C1.15829 0.451184 0.841709 0.451184 0.646447 0.646447C0.451184 0.841709 0.451184 1.15829 0.646447 1.35355L1.35355 0.646447ZM13.3536 1.35355C13.5488 1.15829 13.5488 0.841709 13.3536 0.646447C13.1583 0.451184 12.8417 0.451184 12.6464 0.646447L13.3536 1.35355ZM0.646447 1.35355L6.29289 7L7 6.29289L1.35355 0.646447L0.646447 1.35355ZM7.70711 7L13.3536 1.35355L12.6464 0.646447L7 6.29289L7.70711 7ZM6.29289 7C6.68342 7.39052 7.31658 7.39052 7.70711 7L7 6.29289L6.29289 7Z" fill="white"/>
    </svg>
  </button>
))

CustomToggle.displayName = 'CustomToggle'

const DropDown: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    label,
    content
  } = renderProps

  return (
    <Dropdown className={`DropDown color-scheme-${theme}`}>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-selector-toggle">
        {label}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {content}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDown
