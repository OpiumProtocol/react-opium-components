import React, { useState, CSSProperties, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './SidebarMenu.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  className?: string
  style?: CSSProperties
  items: Array<string>
  activeItem?: string
  onClick?: Function
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  items: [],
  onClick: () => {}
}

const SidebarMenu: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    className,
    items,
    activeItem,
    onClick
  } = renderProps
  
  const [activeTitle, setActiveTitle] = useState<string>('')
  
  const handleClick = (title: string) => {  
    activeTitle === title ? setActiveTitle('') : setActiveTitle(title)
    onClick(title)
  }

  useEffect(() => {
    activeItem && setActiveTitle(activeItem)
  }, [activeItem])
  
  return (
    <div className="MenuList__block">
      <ListGroup className={`${className} MenuList`}>
        {items?.map((item: string, i: number) => {
          return (
            <ListGroup.Item 
              key={item + i} 
              className={`MenuList-item ${item === activeTitle ? 'active' : ''} MenuList-item-${theme}`}
              onClick={(e) => handleClick(item)}>
              {item}
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  )
}

export default SidebarMenu
