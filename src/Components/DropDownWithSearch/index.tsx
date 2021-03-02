import React, { FC, useState, BaseSyntheticEvent, ReactNode } from 'react'
import { Dropdown } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

import {
  ETheme,
  widgetThemes,
} from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './DropDownWithSearch.scss'

export type TOneInchToken = {
  symbol: string,
  name: string,
  address: string,
  decimals: number,
  logoURI: string
}

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Title, if controlled */
  eventKey?: any
  /** Set dropping down options */
  items?: TOneInchToken[]
  /** Function, that became active by clicking on an option */
  onClick?: Function
  /** Function, that became active after an option has become selected */
  onSelect?: Function
  /** Set class selectors */
  className?: string
  /** Label of the fielf */
  label?: string
  /** Disable dropdown to use */
  disabled?: boolean

  defaultFirstElement?: boolean
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
    },
    {
      symbol: '',
      name: 'Second',
      address: '',
      decimals: 0,
      logoURI: '',
    },
  ],
  className: '',
  onClick: () => { },
  onSelect: () => {},
}

const DropdownSelector: FC<Props> = (props: Props) => {
  const [hover, setHover] = useState<boolean>(false)
  const [index, setIndex] = useState<number | null>(null)

  const renderProps = generateRenderProps(defaultProps, props)
  const {
    items,
    label,
    theme,
    onClick,
    onSelect,
    className,
    defaultFirstElement,
    disabled
  } = renderProps

  const [title, setTitle] = React.useState<string>(items.length && defaultFirstElement ? items[0].name : '')
  const [titleLogo, setTitleLogo] = useState<string>(items.length && defaultFirstElement ? items[0].logoURI : '')
  const [toggled, setToggled] = useState<boolean>(false)
  const [inputSearch, setInputSearch] = useState<string>('')
  const [localItems, setLocalItems] = useState<TOneInchToken[]>([{
    symbol: '',
    name: '',
    address: '',
    decimals: 0,
    logoURI: '',
  }])

  const handleSelect = (item: TOneInchToken) => {
    setTitle(item.name)
    
    // set icon for title
    const selected = items.find((el: any) => el.name.toLowerCase() === item.name.toLowerCase())
    selected && setTitleLogo(selected.logoURI)
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
          <span>{title}</span>
          <svg className="dropdown-arrow" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1143 8.55713L7.5573 2.00017L1.00033 8.55713" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Dropdown.Toggle>
        <Dropdown.Menu className={`color-scheme-${theme}`}>
          {
            (localItems.length && !disabled) ? localItems.map((item: TOneInchToken, idx: number) => (
              <Dropdown.Item
                style={idx === index ? hoveredItem : styledItem}
                key={uuidv4()}
                eventKey={`${idx}`}
                onClick={onClick}
                onSelect={() => {
                  onSelect(item)
                  handleSelect(item)
                }}
                onMouseEnter={() => handleEnter(idx)}
                onMouseLeave={handleLeave}
              >
                <img src={item.logoURI} alt=""/>
                {item.name}
              </Dropdown.Item>
            )) : null
          }
        </Dropdown.Menu>
      </Dropdown>
      <input type="text" ref={searchRef} value={inputSearch} onChange={(e) => {
        const newArr = items.filter((el: TOneInchToken) => el.name.toLocaleLowerCase().includes(e.target.value.toLowerCase()))
        setLocalItems([...newArr])
        setInputSearch(e.target.value)
      }} />
      <div className="DropDownSearch__label">{label}</div>
    </div>
  )
}

export default DropdownSelector
