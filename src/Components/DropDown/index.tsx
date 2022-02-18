import React, { BaseSyntheticEvent, useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme, widgetThemes } from '../../Constants/Types/theme.types'

import './DropDown.scss'
import { objectsEqual, usePrevious } from '../../Utils/hooks'

export type Props = {
  /** Define theme */
  theme?: ETheme
  className?: string
  items: Array<OptionsData> | string[] | number[],
  onSelect?: (eventKey: any, event: BaseSyntheticEvent) => any,
  arrayNumbers?: boolean
  characters?: number
  value?: string | number
}

export type OptionsData = {
  id: string, 
  title: string, 
  address?: string,
  ticker?: string,
  decimals?: number
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  items: [],
  onSelect: (eventKey: any, event: BaseSyntheticEvent) => { },
  arrayNumbers: false,
  characters: 30
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
      <path d="M6 6L0 0L12 8.80993e-07L6 6Z" fill="#999BBC"/>
    </svg>
  </button>
))

CustomToggle.displayName = 'CustomToggle'

const DropDown: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const [hover, setHover] = useState<boolean>(false)
  const [index, setIndex] = useState<number | null>(null)

  const {
    theme,
    className,
    items,
    onSelect,
    arrayNumbers,
    characters,
    value
  } = renderProps
  
  const [eventKey, setEventKey] = useState<string>(items[0].id || items[0])
  const [title, setTitle] = useState<string>(items[0].title || items[0])

  const { color, backgroundColor } = widgetThemes[theme as ETheme]

  const hoveredItem = {
    backgroundColor: backgroundColor['primary'].hover,
    color: color['info'].hover,
  }
  
  const styledItem = {
    backgroundColor: backgroundColor['primary'].value,
    color: color['info'].value,
    borderStyle: 'solid',
  }

  const prevItems = usePrevious(items)

  useEffect(() => {
    if (!objectsEqual(items, prevItems)) {
      setTitle(items[0].title ? items[0].title : items[0])
      setEventKey(items[0].id ? items[0].id : items[0])
    }
  }, [items, prevItems])

  const handleEnter = (i: number) => {
    setIndex(i)
    setHover(true)
  }

  const handleLeave = () => {
    setIndex(null)
    setHover(false)
  }

  const cutString = (text: string) => {
    return text && text.substring(0, characters)
  }

  const list = (
    <>
      {
        !arrayNumbers 
          ? items?.map((item: any, idx: number) => (
            <Dropdown.Item
              style={idx === index ? hoveredItem : styledItem}
              key={item.id ? item.id : item}
              title={title}
              eventKey={`${item.id ? item.id : item}`}
              onSelect={(key: any, event: React.BaseSyntheticEvent) => {
                setEventKey(key)
                setTitle(event.target.innerText)
                onSelect(key)
              }}
              onMouseEnter={() => handleEnter(idx)}
              onMouseLeave={handleLeave}
              className={`DropDown-items-${theme}`}
            >
              { item.image && <img src={item.image} alt='img'/>}
              {item.title ? item.title : item}
            </Dropdown.Item>
          ))
          : items?.map((item: any, idx: number) => (
            <Dropdown.Item
              style={idx === index ? hoveredItem : styledItem}
              key={item}
              title={item}
              eventKey={`${item}`}
              onSelect={(key: any, event: React.BaseSyntheticEvent) => {
                setEventKey(key)
                setTitle(event.target.innerText)
                onSelect(key)
              }}
              onMouseEnter={() => handleEnter(idx)}
              onMouseLeave={handleLeave}
              className={`DropDown-items-${theme}`}
            >
              { item.image && <img src={item.image} alt='img'/>}
              {item}
            </Dropdown.Item>
          ))
      }
    </>
  )
  
  return (
    <Dropdown className={`DropDown ${className} color-scheme-${theme}`}>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-selector-toggle">
        { value || arrayNumbers ? title : cutString(title)}
      </Dropdown.Toggle>
      <Dropdown.Menu className={`color-scheme-${theme}`}>
        { list }
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDown
