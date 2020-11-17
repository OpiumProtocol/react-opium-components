import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Scrollbars from 'react-custom-scrollbars'

import { generateRenderProps } from '../../Utils/helpers'

import './Table.scss'

interface Props {
  thead: Array<JSX.Element>
  tbody: Array<Array<JSX.Element>>
  className?: string
  bodyScrollHeight?: number | string
}

const defaultProps: Props = {
  thead: [<span key={uuidv4()}>Head</span>],
  tbody: [
    [<span key={uuidv4()}>Cell 1</span>],
    [<span key={uuidv4()}>Cell 2</span>],
    [<span key={uuidv4()}>Cell 3</span>],
  ],
  className: '',
  bodyScrollHeight: '200',
}

const Table: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const { thead, tbody, className, bodyScrollHeight } = renderProps

  const list = (
    <ul className="table-body">
      {
        tbody.map((row) => (
          <ul key={uuidv4()} className="table-row">
            {
              row.map((cell) => (
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
      <ul className="table-head">
        {thead.map((title) => (
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
