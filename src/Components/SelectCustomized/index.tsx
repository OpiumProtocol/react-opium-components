import React from 'react'
import { Dropdown } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './SelectCustomized.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  className?: string
  label?: string
  content: any
  onChange: (value: string) => void
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  content: '',
  onChange: () => {}
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
    <div className="SelectCustomized__label">
      {children}
    </div>
    <svg className="SelectCustomized__arrow" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.35355 0.646447C1.15829 0.451184 0.841709 0.451184 0.646447 0.646447C0.451184 0.841709 0.451184 1.15829 0.646447 1.35355L1.35355 0.646447ZM13.3536 1.35355C13.5488 1.15829 13.5488 0.841709 13.3536 0.646447C13.1583 0.451184 12.8417 0.451184 12.6464 0.646447L13.3536 1.35355ZM0.646447 1.35355L6.29289 7L7 6.29289L1.35355 0.646447L0.646447 1.35355ZM7.70711 7L13.3536 1.35355L12.6464 0.646447L7 6.29289L7.70711 7ZM6.29289 7C6.68342 7.39052 7.31658 7.39052 7.70711 7L7 6.29289L6.29289 7Z" fill="white"/>
    </svg>
  </button>
))

CustomToggle.displayName = 'CustomToggle'

const SelectCustomized: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const {
    theme,
    className,
    label,
    content,
    onChange
  } = renderProps

  const [selectedLabel, setSelectedLabel] = React.useState(label ? label : content[0].label)
  const [show, setShow] = React.useState(false)

  // @ts-ignore
  const handleToggle = (isOpen, event, metadata) => {
    if (isOpen || metadata.source !== 'select') {
      setShow(isOpen)
    }
  }

  return (
    <Dropdown
      className={`SelectCustomized ${className ? className : ''} color-scheme-${theme}`}
      show={show}
      onToggle={handleToggle}
    >
      <Dropdown.Toggle as={CustomToggle} id="dropdown-selector-toggle">
        {selectedLabel}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <ul>
          {content.map((el: any, i: number) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setShow(false)
                  setSelectedLabel(el.label)
                  onChange(el.label)
                }}
              >
                {el.label}
              </li>
            )
          })}
        </ul>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SelectCustomized
