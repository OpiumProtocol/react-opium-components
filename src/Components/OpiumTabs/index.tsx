import React, { FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Tab, Tabs } from 'react-bootstrap'

import { Theme } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './OpiumTabs.scss'

export type Props = {
  theme: Theme
  items?: {
    title: string,
    eventKey: string,
    content: JSX.Element,
  }[]
}

const defaultProps: Props = {
  theme: Theme.DARK,
  items: [],
}

const OpiumTabs: FC<Props> = (props: Props) => {
  const [activeTabKey, setActiveTabKey] = useState<string>('tab1')

  const renderProps = generateRenderProps(defaultProps, props)

  const { items, theme } = renderProps

  const tabItems = items.map((item) => {
    const { title, eventKey, content } = item
    return (
      < Tab
        key={uuidv4()}
        title={title}
        eventKey={eventKey}
        className={`color-scheme-${theme}`}
      >
        {content}
      </Tab>
    )
  })

  return (
    <div>
      <Tabs
        id="opium-tabs-component"
        activeKey={activeTabKey}
        className={`color-scheme-${theme}`}
        onSelect={(key: string) => setActiveTabKey(key)}
      >
        {tabItems}
      </Tabs>
    </div>
  )
}

export default OpiumTabs
