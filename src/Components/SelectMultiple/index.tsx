import React, { BaseSyntheticEvent, useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme, widgetThemes } from '../../Constants/Types/theme.types'
import Checkbox from '../Checkbox' 

import './SelectMultiple.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  className?: string
  items: Array<OptionsData>,
  onSelect?: Function,
  disabled?: boolean,
  placeholder?: string,
  removedItem?: string | null
}

export type OptionsData = {
    title: string | undefined,
    value: boolean
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  items: [],
  onSelect: () => { },
  disabled: false,
}

// @ts-ignore
const CustomToggle = React.forwardRef(({ children, disable, onClick }: {children: any, disable: boolean, onClick: (e: any) => void}, ref) => ( 
  // @ts-ignore
  <button
    // @ts-ignore
    ref={ref}
    onClick={(e) => {
      e.preventDefault()
      onClick(e)
    }}
    disabled={disable}
  >
    <div className="DropDown__label">
      {children}
    </div>

    {!disable && (<svg className="DropDown__arrow" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6L0 0L12 8.80993e-07L6 6Z" fill="#999BBC"/>
    </svg>) }
  </button>
))

CustomToggle.displayName = 'CustomToggle'

const SelectMultiple: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const [hover, setHover] = useState<boolean>(false)
  const [index, setIndex] = useState<number | null>(null)

  const {
    theme,
    className,
    items,
    onSelect,
    disabled,
    placeholder,
    removedItem
  } = renderProps
  
  const [eventKey, setEventKey] = useState<string>(items[0].title)
  const [title, setTitle] = useState<string>(placeholder)
  const [checkedValues, setCheckedValues] = useState<string[]>([])

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

  useEffect(() => {
    if (removedItem) {
      const i = checkedValues.indexOf(removedItem)
      if (i !== -1) {
        const temp = [...checkedValues]
        temp.splice(i, 1)
        setCheckedValues(temp)
      }
    }
  }, [removedItem])

  const handleEnter = (i: number) => {
    setIndex(i)
    setHover(true)
  }

  const handleLeave = () => {
    setIndex(null)
    setHover(false)
  }

  const isChecked = (event: React.BaseSyntheticEvent) => {
    setTitle(event.target.innerText)
  }

  const onSelectHandler = (key: any, event: React.BaseSyntheticEvent) => {
    setEventKey(key)

    const i = checkedValues.indexOf(key)
    if (i !== -1) {
      const temp = [...checkedValues]
      temp.splice(i, 1)
      setCheckedValues(temp)
    } else {
      setCheckedValues([...checkedValues, key])
    }
    onSelect(key)
  }

  const list = (
    <>
      { items?.map((item: any, idx: number) => (
        <Dropdown.Item
          style={idx === index ? hoveredItem : styledItem}
          key={item.title}
          eventKey={item.title}
          onSelect={onSelectHandler}
          onMouseEnter={() => handleEnter(idx)}
          onMouseLeave={handleLeave}
          className={`SelectMultiple-items color-scheme-${theme}`}
        >
          <Checkbox
            theme={theme}
            manualChecked={checkedValues.includes(item.title)}
            onChange={isChecked}
            label={<div className={`SelectMultiple-label color-scheme-${theme}`}>{item.title}</div>}
          />
        </Dropdown.Item>
      ))
      }
    </>
  )
  
  return (
    <Dropdown className={`DropDown SelectMultiple ${className} color-scheme-${theme}`}>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-selector-toggle" disable={disabled}>
        { title }
      </Dropdown.Toggle>
      <Dropdown.Menu className={`color-scheme-${theme}`}>
        { list }
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SelectMultiple
