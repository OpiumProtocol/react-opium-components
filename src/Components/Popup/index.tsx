import React, { ReactNode } from 'react'
import { Modal } from 'react-bootstrap'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

// @ts-ignore
import AttentionLogo from '../../Images/attention.svg'

import './Popup.scss'
import Loading from '../Loading'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Set title */
  title?: string

  warningTitle?: string

  showWarningIcon?: boolean

  subtitle?: string
  /** Show loader in attention block */
  loading?: boolean
  /** Show attention */
  attention?: boolean

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
  showWarningIcon: true,
  closePopup: () => {}
}

const Popup: React.FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    className,
    title,
    warningTitle,
    showWarningIcon,
    subtitle,
    component,
    popupIsOpen,
    closePopup,
    loading,
    attention
  } = renderProps

  return (
    <Modal
      show={popupIsOpen}
      onHide={closePopup}
      className={`Popup${className ? ' ' + className : ''}${warningTitle ? ' warning' : ''}`}
      contentClassName={`color-scheme-${theme}`}
    >
      {
        (title || warningTitle) &&
          <Modal.Header>
            {title && <Modal.Title>{title}</Modal.Title>}
            <div className="PopUp__subtitle">{subtitle}</div>

            {attention && warningTitle && (
              <div
                className="PopUp__warning-title"
                style={{ marginTop: (title && warningTitle) ? '30px' : 'none' }}
              >
                {showWarningIcon && <img src={AttentionLogo} className="attention-icon" />}
                <span className={'attention-text'}>{warningTitle}</span>
              </div>
            )}
            {!warningTitle && <button className="close-button" onClick={closePopup}>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2.00162" y1="2.05615" x2="15.5312" y2="15.5858" strokeWidth="2" strokeLinecap="round"/>
                <line x1="2.02563" y1="15.5296" x2="15.5553" y2="2.00001" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>}
          </Modal.Header>
      }

      <Modal.Body>
        {loading && <Loading theme={theme} type='spinningBubbles' height='6rem' />}
        {
          typeof component === 'string' ? (
            <div dangerouslySetInnerHTML={{ __html: component}}></div>
          ) : component
        }
      </Modal.Body>
    </Modal>
  )
}

export default Popup
