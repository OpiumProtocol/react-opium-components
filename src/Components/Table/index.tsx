import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Scrollbars from 'react-custom-scrollbars'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './Table.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Set table head items */
  thead: Array<JSX.Element>
  /** Set table body items */
  tbody: Array<Array<JSX.Element>>
  /** Set class selectors */
  className?: string
  /** Set body scroll height */
  bodyScrollHeight?: number | string
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  thead: [],
  tbody: [],
  className: '',
  bodyScrollHeight: '200',
}

const Table: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const { theme, thead, tbody, className, bodyScrollHeight } = renderProps

  const list = (
    <ul className="table-body">
      {
        tbody.map((row: any) => (
          <ul key={uuidv4()} className={`table-row color-scheme-${theme}`}>
            {
              row.map((cell: any) => (
                <li key={uuidv4()} className="table-cell cell">{cell}</li>
              ))
            }
          </ul>
        ))
      }
    </ul>
  )

  return (
    <div className={`custom-table ${className}`}>
      <ul className={`table-head color-scheme-${theme}`}>
        {thead.map((title: string) => (
          <li className="table-head-cell cell" key={uuidv4()}>{title}</li>
        ))}
      </ul>
      {
        bodyScrollHeight ? (
          <Scrollbars
            style={{ width: '100%' }}
            autoHeight
            autoHeightMax={bodyScrollHeight}
            renderThumbHorizontal={() => <div />}
          >
            {list}
          </Scrollbars>
        ) : list
      }
    </div>
  )
}

export default Table
