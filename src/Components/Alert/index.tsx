import React, { FC, useState, BaseSyntheticEvent } from 'react'
import { Dropdown } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

import { generateRenderProps } from '../../Utils/helpers'

import './Alert.module.scss'

interface Props {
  initialOption: string
  items?: { text: string, value: string }[]
  onClick: () => void
  onSelect: (eventKey: any, event: BaseSyntheticEvent) => any
}

const defaultProps: Props = {
  initialOption: 'Initial item',
  items: [],
  onClick: () => { },
  onSelect: (eventKey: any, event: BaseSyntheticEvent) => { },
}

const Alert: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const { initialOption, items, onClick, onSelect } = renderProps

  return (
    <h2>
      Alert
    </h2>
  )
}

export default Alert
