import React, { FC, ReactNode } from 'react'
import { Form, Modal } from 'react-bootstrap'

import Button from '../OpiumButton'
import Loading from '../Loading'

import { generateRenderProps } from '../../Utils/helpers'
import { ETheme } from '../../Constants/Types/theme.types'

// @ts-ignore
import AttentionLogo from '../../Images/attention.svg'

import './Alert.scss'
import Checkbox from "../Checkbox";

export type Props = {
  /** Define theme */
  theme?: ETheme
  /** Set title */
  title?: string
  /** Set size */
  size?: 'sm' | 'lg' | 'xl'
  /** Insert content */
  description?: string | ReactNode
  /** Hide close button */
  hideCross?: boolean
  /** Show attention */
  attention?: boolean
  /** Show loader in attention block */
  loading?: boolean
  /** Close alert function */
  closePopup: Function
  /** Flag, that opens alert */
  popupIsOpen: boolean
  /** Show action/confirm button */
  showActionButton?: boolean
  /** Function, that became active by clicking on action button */
  handleAction?: Function
  /** Set title for action button */
  actionButtonTitle?: string
  /** Set title for cancel button */
  cancelButtonTitle: string
  /** Show checkbox */
  showCheckBox?: boolean
  /** Function, that became active by changing checkbox state */
  handleCheckBoxChange?: Function
  /** Checkbox initial state */
  checkBoxChecked?: boolean
  /** Set checkbox label */
  checkBoxLabel?: string
  /** Set class selectors */
  className?: string
}

const defaultProps: Props = {
  theme: ETheme.DARK,
  title: '',
  size: 'sm',
  description: '',
  attention: false,
  loading: false,
  closePopup: () => { },
  popupIsOpen: false,
  showActionButton: false,
  handleAction: () => { },
  actionButtonTitle: '',
  cancelButtonTitle: '',
  showCheckBox: true,
  handleCheckBoxChange: () => { },
  checkBoxChecked: true,
  checkBoxLabel: '',
  hideCross: false,
  className: ''
}

const Alert: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const {
    theme,
    title,
    size,
    description,
    attention,
    loading,
    closePopup,
    popupIsOpen,
    showActionButton,
    handleAction,
    actionButtonTitle,
    cancelButtonTitle,
    showCheckBox,
    handleCheckBoxChange,
    checkBoxChecked,
    checkBoxLabel,
    hideCross,
    className,
  } = renderProps

  const renderAttention = () => {
    return (
      <div className={`attention-icon-wrap ${className}`} >
        {
          loading ?
            <Loading theme={theme} type='spinningBubbles' height='6rem' />
            :
              <div>
                <img src={AttentionLogo} className="attention-icon" />
                <span className={"attention-text"}>Warning</span>
              </div>
        }
      </div>
    )
  }

  return (
    <Modal
      size={size}
      show={popupIsOpen}
      onHide={closePopup}
      className="attention-popup"
      contentClassName={`color-scheme-${theme}`}
    >
      <Modal.Header>
        {title && <Modal.Title>{title}</Modal.Title>}
        {!hideCross && <button className="close-button" onClick={closePopup} />}
      </Modal.Header>

      <Modal.Body>
        {attention && renderAttention()}
        {description && <div className="modal-description" dangerouslySetInnerHTML={{
          __html: description
        }} />}
        {/*{showCheckBox && <Form.Check type="checkbox" className='modal-checkbox' id='checkbox'>*/}
        {/*  <Form.Check.Input checked={checkBoxChecked} onChange={() => handleCheckBoxChange()} type="checkbox" />*/}
        {/*  <Form.Check.Label>{checkBoxLabel}</Form.Check.Label>*/}
        {/*</Form.Check>}*/}

        {
          showCheckBox && <Checkbox
              theme={theme}
              label="Do not show this massage again"
          />
        }
      </Modal.Body>
      <Modal.Footer>
        <div className="buttons-wrap">
          {
            showActionButton &&
            <Button
              theme={theme}
              variant={'primary'}
              onClick={handleAction}
              label={actionButtonTitle}
            />
          }
          <Button
            theme={theme}
            variant={'secondary'}
            onClick={closePopup}
            label={cancelButtonTitle}
          />
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default Alert
