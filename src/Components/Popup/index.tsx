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
  size?: 'sm' | 'lg' | 'xl'
  /** Insert content */
  component?: string | ReactNode
  /** Hide close button */
  hideCross?: boolean
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
    closePopup,
    popupIsOpen,
    handleAction,
    showActionButton,
    showCancelButton,
    actionButtonTitle,
    cancelButtonTitle,
    className,
  } = renderProps

  return (
    <Modal
      size={size}
      show={popupIsOpen}
      onHide={closePopup}
      className={`attention-popup ${className}`}
      contentClassName={`color-scheme-${theme}`}
    >
      {!hideCross && <button className="close-button" onClick={closePopup} />}
      <Modal.Body>
        {title && <Modal.Title>{title}</ Modal.Title>}
        {component && <div className="modal-description">{component}</div>}
      </Modal.Body>
      <Modal.Footer>
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
    </Modal>
  )
}

export default Popup
