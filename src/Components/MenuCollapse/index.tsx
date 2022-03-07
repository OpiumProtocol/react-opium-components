import React, { useState, CSSProperties } from 'react'
import { Accordion, Card, Button, ListGroup, Nav } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './MenuCollapse.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  className?: string
  style?: CSSProperties
  items: Array<Articles>
}
type Articles = {
  title: string
  articles?: (ArticlesEntity)[]
}
type ArticlesEntity = {
  title: string
  link?: string
  articles?: (ArticlesRoot)[]
}
type ArticlesRoot = {
  [key: string]: string
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  items: [],
}

const MenuCollapse: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    className,
    items
  } = renderProps
  
  const [arrIndex, setArrIndex] = useState<any[]>([])
  
  const handleClick = (title: string) => {    
    arrIndex.includes(title) ? setArrIndex(arrIndex.filter(i => i !== title)) : setArrIndex([...arrIndex, title])
  }

  const svgIcon = (styles: CSSProperties) => {
    return (
      <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ ...styles }} xmlns="http://www.w3.org/2000/svg">
        <path d="M4 0L7.4641 4.5L0.535898 4.5L4 0Z" fill="#999BBC"/>
      </svg>
    )
  }
  
  return (
    <>
      <ListGroup className={`${className} MenuAccordion__block`}>
        {items?.map((item: any, i: number) => {
          return (
            <Card className="MenuAccordion__card" key={item.title + i}>
              <Card.Title className={`MenuAccordion__title-${theme}`}>{ item.title }</Card.Title>
              {item?.articles.map((article: any, idx: number) => {
                return (
                  <div key={article.title + idx}>
                    { article?.articles ? 
                      <Accordion className="MenuAccordion">
                        <Accordion.Toggle as={Button} variant="link" eventKey={article.title} className="MenuAccordion__btn"
                          onClick={(e) => handleClick(article.title)}>
                          { article.title }
                          { arrIndex.includes(article.title) ? (
                            svgIcon({ transform: 'scale(-1, 1)' })
                          ) : (
                            svgIcon({ transform: 'scale(1, -1)' })
                          ) }
                        </Accordion.Toggle>
                        { article.articles && article?.articles.map((element: any, index: number) => {
                          return (
                            <Accordion.Collapse eventKey={article.title} key={element.title + index}>
                              <ListGroup className="MenuAccordion__collapse-list">
                                <ListGroup.Item><Nav.Link href={element.link} className={`nav-link-${theme}`}>{ element.title }</Nav.Link></ListGroup.Item>
                              </ListGroup>
                            </Accordion.Collapse>
                          )
                        })
                        }
                      </Accordion>
                      : <ListGroup.Item><Nav.Link href={article.link} className={`nav-link-${theme}`}>{ article.title }</Nav.Link></ListGroup.Item>
                    }
                  </div>
                )
              })}
            </Card>
          )
        })}
      </ListGroup>
    </>
  )
}

export default MenuCollapse
