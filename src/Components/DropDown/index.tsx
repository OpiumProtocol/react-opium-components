import React, { BaseSyntheticEvent, useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme, widgetThemes } from '../../Constants/Types/theme.types'

import './DropDown.scss'
import Scrollbars from 'react-custom-scrollbars'

export type Props = {
  /** Define theme */
  theme?: ETheme
  className?: string
  items: Array<OptionsData>,
  onSelect?: (eventKey: any, event: BaseSyntheticEvent) => any,
  bodyScrollHeight?: number | string
  value?: string
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
  bodyScrollHeight: '120',
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
    bodyScrollHeight,
    value
  } = renderProps

  const [eventKey, setEventKey] = useState<string>(items[0].id)
  const [title, setTitle] = useState<string>(items[0].title)
  const [ticker, setTicker] = useState<string>(items[0].ticker)

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

  const handleEnter = (i: number) => {
    setIndex(i)
    setHover(true)
  }

  const handleLeave = () => {
    setIndex(null)
    setHover(false)
  }

  const cutString = (text: string) => text.substring(0, 14)

  const findTicker = (key: any) => {  
    const currentItem = items.find((el: OptionsData) => {
      return el.id === key
    })
    setTicker(currentItem?.ticker)
  }

  const wrapTicker = (ticker: string) => {
    return ticker.indexOf('/') ? ticker : ''
  }

  const list = (
    <>
      {
        items?.map((item: any, idx: number) => (
          <Dropdown.Item
            style={idx === index ? hoveredItem : styledItem}
            key={item.id}
            title={title}
            eventKey={`${item.id}`}
            onSelect={(key: any, event: React.BaseSyntheticEvent) => {
              setEventKey(key)
              setTitle(event.target.innerText)
              findTicker(key)
              onSelect(key)
            }}
            onMouseEnter={() => handleEnter(idx)}
            onMouseLeave={handleLeave}
            className={`DropDown-items-${theme}`}
          >
            {item.title}
          </Dropdown.Item>
        ))
      }
    </>
  )

  return (
    <Dropdown className={`DropDown ${className} color-scheme-${theme}`}>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-selector-toggle">
        {value || cutString(title)}

      </Dropdown.Toggle>
      <Dropdown.Menu className={`color-scheme-${theme}`}>
        <Scrollbars
          style={{ width: '100%' }}
          autoHeight
          autoHeightMax={bodyScrollHeight}
          thumbMinSize={20}
        >
          { list }
        </Scrollbars>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDown
