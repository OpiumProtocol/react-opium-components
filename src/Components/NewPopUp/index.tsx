import React, { ReactNode } from 'react'
import { Modal } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './NewPopUp.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Set title */
  title?: string

  subtitle?: string

  /** Set size */
  size?: 'xs' | 'sm' | 'lg' | 'xl'
  /** Insert content */
  component?: string | ReactNode
  /** Hide close button */
  hideCross?: boolean
  /** Borderless flag */
  borderless?: boolean
  /** Close popup function */
  closePopup: Function
  /** Flag, that opens popup */
  popupIsOpen: boolean
  /** Function, that became active by clicking on action button */
  handleAction?: Function
  /** Show action/confirm button */
  showActionButton?: boolean
  /** Show cancel button */
  showCancelButton?: boolean
  /** Set title for action button */
  actionButtonTitle?: string
  /** Set title for cancel button */
  cancelButtonTitle?: string
  /** Set class selectors */
  className?: string
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  popupIsOpen: false,
  closePopup: () => {}
}

const NewPopUp: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    className,
    title,
    subtitle,
    component,
    popupIsOpen,
    closePopup,
  } = renderProps

  return (
    <Modal
      show={popupIsOpen}
      onHide={closePopup}
      className={`NewPopUp${className ? ' ' + className : ''}`}
      contentClassName={`color-scheme-${theme}`}
    >
      {
        title &&
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          <div className="NewPopUp__subtitle">{subtitle}</div>
          <button className="close-button" onClick={closePopup}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="2.00162" y1="2.05615" x2="15.5312" y2="15.5858" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="2.02563" y1="15.5296" x2="15.5553" y2="2.00001" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </Modal.Header>
      }

      <Modal.Body>
        {component}
      </Modal.Body>

      {/* <Modal.Footer>
        <OpiumButton
          label="Enter amount"
          onClick={() => {}}
          variant="secondary"
        />
      </Modal.Footer> */}
    </Modal>
  )
}

export default NewPopUp
