import React, { BaseSyntheticEvent, CSSProperties, useState } from 'react'
import { Dropdown, Form } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme, widgetThemes } from '../../Constants/Types/theme.types'
import Scrollbars from 'react-custom-scrollbars'

import './Autocomplete.scss'
import _ from '../../Styles/exportColors.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  className?: string
  items: Array<OptionsData>,
  onSelect?: (eventKey: any, event: BaseSyntheticEvent) => any,
  bodyScrollHeight?: number | string,
  style?: CSSProperties,
  withCircle?: boolean
}

export type OptionsData = {
  id: string, 
  title: string, 
  address?: string,
  ticker?: string,
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  items: [],
  onSelect: (eventKey: any, event: BaseSyntheticEvent) => { },
  bodyScrollHeight: '120',
  withCircle: false
}

// @ts-ignore
const CustomToggle = React.forwardRef(({ children, onClick }: {children: any, onClick: (e: any) => void }, ref) => (
  // @ts-ignore
  <div
    // @ts-ignore
    ref={ref}
    className="DropDown__toggle"
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
  </div>
))

CustomToggle.displayName = 'CustomToggle'

const Autocomplete: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    className,
    items,
    onSelect,
    bodyScrollHeight,
    styles,
    withCircle
  } = renderProps

  const [hover, setHover] = useState<boolean>(false)
  const [index, setIndex] = useState<number | null>(null)
  const [eventKey, setEventKey] = useState<any>(items[0].id)
  const [title, setTitle] = useState<any>(items[0].title)
  const [searchList, setSearchList] = useState<Array<OptionsData>>(items)

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

  const list = (
    <>
      {
        searchList?.map((item: any, idx: number) => (
          <Dropdown.Item
            style={idx === index ? hoveredItem : styledItem}
            key={item.id}
            title={title}
            eventKey={`${item.id}`}
            onSelect={(key: any, event: React.BaseSyntheticEvent) => {
              setEventKey(key)
              setTitle(event.target.innerText)
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

  const renderInput = () => {
    const onChange = (val: string) => {
      setTitle(val)
      const results = val.length ? items.filter((item: OptionsData) => {
        return item.title.toLowerCase().includes(val)
      }) : items
      setSearchList(results)
    }
    return (
      <>
        { withCircle && (<div className="OpiumFieldset__circle"/>) }
        <Form.Control
          className={`OpiumInput ${withCircle ? 'OpiumInput__indent' : ''}`}
          type="text"
          style={styles}
          value={title}
          onChange={(e) => onChange(e.target.value)}
        />
      </>
    )
  }

  return (
    <div className={`OpiumFieldset OpiumAutocomplete color-scheme-${theme}`}>
      <Dropdown className={`DropDown ${className} color-scheme-${theme} Dropdown__width`}>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-selector-toggle" >
          {renderInput()}
        </Dropdown.Toggle>
        {!!searchList?.length && (
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
        )}
      </Dropdown>
    </div>
  )
}

export default Autocomplete
