import React from 'react'
import { Modal } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import Checkbox from '../Checkbox'

import './AuthorizationPopUp.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme

  popupIsOpen: boolean
  closePopup: () => void
  title: string
  list: {name: string, image: string}[]
  checkboxLabel?: string | React.ReactNode
  seeMoreBtnLabel: string
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  popupIsOpen: false,
  closePopup: () => {},
  title: 'connect wallet',
  list: [{ name: 'Test1', image: '' }],
  seeMoreBtnLabel: ''
}

const AuthorizationPopUp: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)
  const [isMore, setIsMore] = React.useState(false)
  const [isChecked, setIsChecked] = React.useState(false)

  const {
    theme,
    title,
    list,
    popupIsOpen,
    closePopup,
    checkboxLabel,
    seeMoreBtnLabel
  } = renderProps

  return (
    <Modal
      show={popupIsOpen}
      onHide={() => {
        setIsMore(false)
        setIsChecked(false)
        closePopup()
      }}
      className="AuthorizationPopUp"
      contentClassName={`color-scheme-${theme}`}
    >
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <button className="close-button" onClick={closePopup}>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2.00162" y1="2.05615" x2="15.5312" y2="15.5858" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <line x1="2.02563" y1="15.5296" x2="15.5553" y2="2.00001" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </Modal.Header>

      <Modal.Body>
        <Checkbox
          theme={theme}
          label={checkboxLabel}
          onChange={(value) => setIsChecked(value)}
        />
        <div className={`AuthorizationPopUp__wallets ${!isChecked ? 'blocked' : ''}`}>
          {
            list.map((el: {name: string, image: string}, i: number) => {
              if (i > 2 && !isMore) return null

              return (
                <button
                  key={el.name + i}
                  className="AuthorizationPopUp__wallet"
                  onClick={() => {
                    if (!isChecked) return
                  }}
                >
                  <div className="AuthorizationPopUp__icon" style={{ background: `url('${el.image}') rgba(255, 255, 255, 0.15)` }}></div>
                  <span>{el.name}</span>
                </button>)
            })
          }
        </div>
        {
          !isMore &&
          (<button
            onClick={() => {
              setIsMore(true)
            }}
            className="AuthorizationPopUp__more">
            {seeMoreBtnLabel}
          </button>)
        }
      </Modal.Body>
    </Modal>
  )
}

export default AuthorizationPopUp
