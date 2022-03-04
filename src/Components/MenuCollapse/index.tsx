import React, { BaseSyntheticEvent, useState, useEffect, CSSProperties } from 'react'
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme, widgetThemes } from '../../Constants/Types/theme.types'

import './MenuCollapse.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  className?: string
  style?: CSSProperties,
//   items: Array<ItemsData>,
  onClick?: Function,
}

export type ItemsData = {
  category: {
      title: string,
      articles: {
          title: string,
          url: string
      }
  }
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  //   items: [],
  onClick: () => {},
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
    <div className="MenuItems__label">
      {children}
    </div>
  
  </button>
))

CustomToggle.displayName = 'CustomToggle'

const MenuCollapse: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const [hover, setHover] = useState<boolean>(false)
  const [index, setIndex] = useState<number | null>(null)

  const {
    theme,
    className,
    items,
    onClick
  } = renderProps
  
  const { color, backgroundColor } = widgetThemes[theme as ETheme]
  
  return (
    <>
      <Accordion className="MenuAccordion">
        <Card className="MenuAccordion__card">
          <Accordion.Toggle as={Button} variant="link" eventKey="0" className="MenuAccordion__btn">
              Key terms
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <ListGroup className="MenuAccordion__list">
              <ListGroup.Item disabled>Strike price</ListGroup.Item>
              <ListGroup.Item>Options greeks</ListGroup.Item>
              <ListGroup.Item>... the money</ListGroup.Item>
              <ListGroup.Item>Strike price 1</ListGroup.Item>
            </ListGroup>
          </Accordion.Collapse>
        </Card>
        <Card className="MenuAccordion__card">
          <Accordion.Toggle as={Button} variant="link" eventKey="1" className="MenuAccordion__btn">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ListGroup className="MenuAccordion__list">
                <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  )
}

export default MenuCollapse
