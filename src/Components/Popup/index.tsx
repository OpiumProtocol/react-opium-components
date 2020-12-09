import React, { FC, ReactNode } from 'react'
import { Modal } from 'react-bootstrap'

import Button from '../OpiumButton'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

import './Popup.scss'

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Set title */
  title?: string
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
  cancelButtonTitle: string
  /** Set class selectors */
  className?: string
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  size: 'sm',
  title: '',
  component: '',
  hideCross: false,
  borderless: false,
  closePopup: () => { },
  popupIsOpen: false,
  handleAction: () => { },
  showActionButton: true,
  showCancelButton: true,
  actionButtonTitle: '',
  cancelButtonTitle: '',
  /** Set class selectors */
  className: ''
}

const Popup: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    size,
    title,
    component,
    hideCross,
    borderless,
    closePopup,
    popupIsOpen,
    handleAction,
    showActionButton,
    showCancelButton,
    actionButtonTitle,
    cancelButtonTitle,
    className,
  } = renderProps

  const borderlessStyle = {
    padding: '0',
    margin: '0',
  }

  return (
    <Modal
      size={size}
      show={popupIsOpen}
      onHide={closePopup}
      className={!borderless ? `attention-popup ${className}` : `${className}`}
      dialogClassName={size === 'xs' ? 'modal-fit-content' : ''}
      contentClassName={!borderless
        ? `color-scheme-${theme}`
        : `color-scheme-${theme} modal-p-0 modal-transparent`}
      style={!borderless ? {} : borderlessStyle}
    >
      {!hideCross && <button className="close-button" onClick={closePopup} />}
      <Modal.Body style={!borderless ? {} : borderlessStyle}>
        {title && <Modal.Title>{title}</ Modal.Title>}
        <div className="modal-description">{component}</div>
      </Modal.Body>
      {
        !borderless
          ? <Modal.Footer>
            <div className="buttons-wrap">
              {
                showActionButton &&
                <Button
                  theme={theme}
                  variant="primary"
                  onClick={handleAction}
                  label={actionButtonTitle}
                />
              }
              {
                showCancelButton &&
                <Button
                  theme={theme}
                  variant="secondary"
                  onClick={closePopup}
                  label={cancelButtonTitle}
                />
              }
            </div>
          </Modal.Footer>
          : null
      }
    </Modal>
  )
}

export default Popup
