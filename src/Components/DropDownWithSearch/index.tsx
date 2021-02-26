import React, { FC, useState, BaseSyntheticEvent, ReactNode } from 'react'
import { Dropdown } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

import {
  ETheme,
  widgetThemes,
} from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './DropDownWithSearch.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Title, if controlled */
  title?: string | ReactNode
  /** Value passed to the onSelect handler, useful for identifying the selected menu item */
  eventKey?: any
  /** Set dropping down options */
  items?: { 
    symbol: string
    name: string
    address: string
    decimals: number
    logoURI: string
    value: string
  }[]
  /** Function, that became active by clicking on an option */
  onClick?: Function
  /** Function, that became active after an option has become selected */
  onSelect?: (eventKey: any, event: BaseSyntheticEvent) => any
  /** Set class selectors */
  className?: string
  /** Set component uncontrolled */
  uncontrolled?: boolean

  label?: string
  disabled?: boolean
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  items: [
    {
      symbol: '',
      name: 'First',
      address: '',
      decimals: 0,
      logoURI: '',
      value: '1'
    },
    {
      symbol: '',
      name: 'Second',
      address: '',
      decimals: 0,
      logoURI: '',
      value: '2'
    },
  ],
  className: '',
  title: '',
  onClick: () => { },
  onSelect: (eventKey: any, event: BaseSyntheticEvent) => { },
}

const DropdownSelector: FC<Props> = (props: Props) => {
  const [hover, setHover] = useState<boolean>(false)
  const [index, setIndex] = useState<number | null>(null)

  const renderProps = generateRenderProps(defaultProps, props)
  const {
    title,
    items,
    label,
    theme,
    onClick,
    onSelect,
    className,
    uncontrolled,
    disabled
  } = renderProps

  const [titleLogo, setTitleLogo] = useState<string>('')
  const [toggled, setToggled] = useState<boolean>(false)
  const [inputSearch, setInputSearch] = useState<string>('')
  const [localItems, setLocalItems] = useState<{
    symbol: string
    name: string
    address: string
    decimals: number
    logoURI: string
    value: string
  }[]>([{
    symbol: '',
    name: '',
    address: '',
    decimals: 0,
    logoURI: '',
    value: ''
  }])
  const [selectorTitle, setSelectorTitle] = useState<any>(items.length ? items[0].title : '')

  const handleSelect = (key: any, event: BaseSyntheticEvent) => {
    setSelectorTitle(event.target.innerText)
  }

  const handleEnter = (i: number) => {
    setIndex(i)
    setHover(true)
  }

  const handleLeave = () => {
    setIndex(null)
    setHover(false)
  }

  const { color, backgroundColor, borderColor } = widgetThemes[theme as ETheme]

  const togglerStyles = {
    backgroundColor: backgroundColor['primary'].value,
    // borderColor: borderColor['primary'].value,
    borderColor: '#404069',
    // color: color['info'].value,
    borderStyle: 'solid',
    borderRadius: '4px',
    borderWidth: '1px'
  }

  const styledItem = {
    backgroundColor: backgroundColor['primary'].value,
    // borderColor: borderColor['primary'].value,
    color: color['info'].value,
    // borderStyle: 'solid',
  }

  const hoveredItem = {
    backgroundColor: backgroundColor['primary'].hover,
    // borderColor: borderColor['primary'].hover,
    color: color['info'].hover,
  }

  const searchRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    setLocalItems([...items])

    const selected = items.find((el: any) => el.name.toLowerCase() === title.toLowerCase())
    selected && setTitleLogo(selected.logoURI)
  }, [])

  return (
    <div className={`DropDownSearch ${toggled ? 'search' : ''} ${disabled ? 'disabled' : ''}`}>
      <Dropdown onToggle={(isOpen, event) => {
        setToggled(isOpen)
        !isOpen && setInputSearch('')
        if (searchRef && searchRef.current) {
            searchRef.current.select()
        }
        setLocalItems([...items])
      }}>
        <Dropdown.Toggle id="dropdown-selector-toggle" style={togglerStyles}>
          {titleLogo !== '' ? <img src={titleLogo} alt=""/> : null}
          <span>{title || selectorTitle}</span>
          <svg className="dropdown-arrow" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1143 8.55713L7.5573 2.00017L1.00033 8.55713" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </Dropdown.Toggle>
        <Dropdown.Menu className={`color-scheme-${theme}`}>
          {
            (localItems.length && !disabled) ? localItems.map((item: any, idx: number) => (
              <Dropdown.Item
                style={idx === index ? hoveredItem : styledItem}
                key={uuidv4()}
                eventKey={`${idx}`}
                href={item.href}
                to={item.to}
                onClick={onClick}
                onSelect={uncontrolled ? handleSelect : onSelect}
                onMouseEnter={() => handleEnter(idx)}
                onMouseLeave={handleLeave}
                as={item.as}
              >
                <img src={item.logoURI} alt=""/>
                {item.name}
              </Dropdown.Item>
            )) : null
          }
        </Dropdown.Menu>
      </Dropdown>
      <input type="text" ref={searchRef} value={inputSearch} onChange={(e) => {
        const newArr = items.filter((el: {
          symbol: string
          name: string
          address: string
          decimals: number
          logoURI: string
          value: string
        }) => el.name.toLocaleLowerCase().includes(e.target.value.toLowerCase()))
        setLocalItems([...newArr])
        setInputSearch(e.target.value)
      }} />
      <div className="DropDownSearch__label">{label}</div>
    </div>
  )
}

export default DropdownSelector
