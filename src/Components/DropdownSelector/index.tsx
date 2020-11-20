import React, { FC, useState, BaseSyntheticEvent } from 'react'
import { Dropdown } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

import { Theme } from '../../Constants/Types/theme.types'
import { generateRenderProps } from '../../Utils/helpers'

import './DropdownSelector.scss'

interface Props {
  theme: Theme
  initialOption: string
  items?: { text: string, value: string }[]
  onClick: () => void
  onSelect: (eventKey: any, event: BaseSyntheticEvent) => any
}

const defaultProps: Props = {
  theme: Theme.DARK,
  initialOption: 'Initial item',
  items: [],
  onClick: () => { },
  onSelect: (eventKey: any, event: BaseSyntheticEvent) => { },
}

const DropdownSelector: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const { initialOption, items, onClick, onSelect, theme } = renderProps

  return (
    <Dropdown className={`color-scheme-${theme}`}>
      <Dropdown.Toggle id="dropdown-selector-toggle" className={`color-scheme-${theme}`}>
        {'Dropdown Title'}
      </Dropdown.Toggle>
      <Dropdown.Menu className={`color-scheme-${theme}`}>
        <Dropdown.Item onClick={() => { }} className={`color-scheme-${theme}`} >
          {initialOption}
        </Dropdown.Item>
        {
          items.map((el) => (
            <Dropdown.Item
              key={uuidv4()}
              eventKey={el.value}
              onClick={onClick}
              onSelect={onSelect}
              className={`color-scheme-${theme}`}
            >
              {el.text}
            </Dropdown.Item>
          ))
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownSelector
