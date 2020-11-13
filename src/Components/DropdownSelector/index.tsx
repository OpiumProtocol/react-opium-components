import React, { FC, useState, BaseSyntheticEvent } from 'react'
import { Dropdown } from 'react-bootstrap'

import { v4 as uuidv4 } from 'uuid'

import './DropdownSelector.scss'

interface Props {
  initialOption: string
  items?: {text: string, value: string}[]
  onClick: () => void
  onSelect: (eventKey: any, event: BaseSyntheticEvent) => any
}

const defaultProps: Props = {
  initialOption: 'Initial item',
  items: [],
  onClick: () => {},
  onSelect: (eventKey: any, event: BaseSyntheticEvent) => {},
}

const generateRenderProps = (defaults: Props, props: Props): Props => {
  return { ...defaults, ...props }
}

const DropdownSelector: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const { initialOption, items, onClick, onSelect } = renderProps

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-selector-component">
        {'Dropdown Title'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => {}}>
          {initialOption}
        </Dropdown.Item>
        {
          items.map((el) => (
            <Dropdown.Item
              key={uuidv4()}
              eventKey={el.value}
              onClick={onClick}
              onSelect={onSelect}
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
