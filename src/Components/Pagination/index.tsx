import React, { FC } from 'react'
import { ETheme } from '../../Constants/Types/theme.types'

import { generateRenderProps } from '../../Utils/helpers'

import './Pagination.scss'
import _ from '../../Styles/exportColors.scss'

import { Button } from '../..'
import { DOTS, usePagination } from '../../Utils/hooks'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Set currentPage */
  currentPage: number, 
  /** Set totalCount */
  totalCount: number, 
  /** Set siblingCount */
  siblingCount: number, 
  /** Set pageSize */
  pageSize: number,
  /** Set currentPage Function */
  onPageChange: Function
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  currentPage: 1,
  siblingCount: 1,
  pageSize: 3,
  totalCount: 10,
  onPageChange: () => {}
}

const Pagination: FC<Props> = (props: Props) => {
  const { theme, currentPage, totalCount, siblingCount, pageSize, onPageChange } = generateRenderProps(defaultProps, props)

  const paginationRange: (string | number)[] | undefined = usePagination({ currentPage, totalCount, siblingCount, pageSize })

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null
  }

  return (
    <div className='TablePagination'>
      <div className='pagination-list'>
        {paginationRange?.map((page: number | string, i: number) => {
          return (
            (page === DOTS ?
              <div key={i} className='pagination-points'>...</div>
              : <Button
                theme={theme}
                key={`page-${page}-${i}`}
                variant={'secondary'}
                label={`${page}`}
                onClick={(e: any) => onPageChange(+page)}
                className={`pagination-item ${ page == currentPage ? 'active' : ''}`}
              />)
          )
        })}
      </div>
    </div>
  )
}

export default Pagination
