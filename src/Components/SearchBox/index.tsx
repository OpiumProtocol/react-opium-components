import React, { BaseSyntheticEvent, CSSProperties, KeyboardEvent, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme, widgetThemes } from '../../Constants/Types/theme.types'

import './SearchBox.scss'
import _ from '../../Styles/exportColors.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  className?: string
  onChange?: (eventKey: any, event: BaseSyntheticEvent) => any,
  onClick: (e: string) => any
  label?: string,
  value?: string,
  placeholder?: string,
  style?: CSSProperties
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  onChange: () => {},
  onClick: () => {}
}

const SearchBox: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    className,
    label,
    value,
    placeholder,
    style,
    onChange,
    onClick
  } = renderProps

  const [search, setSearch] = useState<string>(value)

  useEffect(() => {
    setSearch(value)
  }, [value])

  const styles = {
    borderColor: _.darkblue4,
    color: widgetThemes[theme as ETheme].color.secondary.value,
    ...style,
  }

  const handleClick = () => {
    onClick(value)
  }

  const renderInput = () => {
    const classNames = `OpiumInput SearchBoxInput ${className !== undefined ? className : ''}`

    const handleChange = (e: string) => {
      setSearch(e)
      onChange(e)
    }

    const onKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        onClick(search)
      }
    }

    return (
      <>
        <Form.Control
          className={classNames}
          type="text" 
          placeholder={placeholder ? placeholder : ''}
          onChange={(e) => handleChange(e.target.value)}
          onKeyPress={onKeyPress}
          style={styles}
          value={search ? search : ''}
        />
      </>
    )
  }
  
  return (
    <div className={`OpiumFieldset SearchBox color-scheme-${theme}`}>
      <div className="SearchBox-wrapper">
        {renderInput()}
        {
          <Button
            className="SearchBox__btn"
            variant="secondary"
            onClick={handleClick}
          >
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z" stroke="#999BBC" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Button>
        }
      </div>
      <div className="SearchBox__label">
        <Form.Label>{label}</Form.Label>
      </div>
    </div>
  )
}

export default SearchBox
