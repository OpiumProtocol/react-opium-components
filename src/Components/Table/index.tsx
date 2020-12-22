import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Scrollbars from 'react-custom-scrollbars'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './Table.scss'

type TTableHeight = 'xs' | 's' | 'm' | 'l' | 'xl'
type TTableDimension = 'px' | 'em' | 'rem' | 'vh' | 'vw'

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
  /** Set head height */
  headHeight?: TTableHeight
  /** Set row height */
  rowHeight?: TTableHeight
  /** Set basis for height calculation */
  heightBasis?: {
    value: number
    dimension: TTableDimension
  }
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

  const { theme, thead, tbody, className, bodyScrollHeight, headHeight, rowHeight, heightBasis } = renderProps

  const basis: number = heightBasis ? heightBasis.value : 8
  const dimension: TTableDimension = heightBasis ? heightBasis.dimension : 'px'

  const hBasis = basis * 4

  const setHeight = (value: TTableHeight) => {
    if (value === 'xs') return { height: `${hBasis * 1.2}${dimension}` }
    if (value === 's') return { height: `${hBasis * 2}${dimension}` }
    if (value === 'l') return { height: `${hBasis * 5}${dimension}` }
    if (value === 'xl') return { height: `${hBasis * 7}${dimension}` }
    return { height: `${hBasis * 3}${dimension}` }
  }

  const setStyle = (value: TTableHeight) => {
    if (value === 'xs') {
      return { borderRadius: `${basis}px`, marginTop: `${basis * 0.25}px` }
    }
    if (value === 's') {
      return { borderRadius: `${basis * 2}px`, marginTop: `${basis * 0.5}px` }
    }
    if (value === 'l') {
      return { borderRadius: `${basis * 4}px`, marginTop: `${basis * 1.25}px` }
    }
    if (value === 'xl') {
      return { borderRadius: `${basis * 5}px`, marginTop: `${basis * 1.5}px` }
    }
    return { borderRadius: `${basis * 3}px`, marginTop: `${basis}px` }
  }

  const list = (
    <ul className="table-body">
      {
        tbody.map((row: any) => (
          <ul
            key={uuidv4()}
            className={`table-row color-scheme-${theme}`}
            style={{ ...setStyle(rowHeight), ...setHeight(rowHeight) }}>
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
    <div className={`custom-table ${className} color-scheme-${theme}`}>
      <ul
        className={`table-head color-scheme-${theme}`}
        style={setHeight(headHeight)}>
        {
          thead.map((title: string) => (
            <li className="table-head-cell cell" key={uuidv4()}>{title}</li>
          ))
        }
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
