import React, { FC } from 'react'

import { generateRenderProps } from '../../../Utils/helpers'
import { ETheme } from '../../../Constants/Types/theme.types'
// @ts-ignore
import defaultImage from '../../../Images/card1-back-image.svg'
// @ts-ignore
import StakingSVGDark from '../../../Images/staking-dark.svg'
// @ts-ignore
import StakingSVGLight from '../../../Images/staking-light.svg'
import './Box.scss'
// @ts-ignore
import Button from '../../OpiumButton'
import OpiumLink from '../../OpiumLink'
export type Props = {
  /** Define theme */
  theme?: ETheme;
  /** Set class selectors */
  className?: string;
  /** Set title */
  title?: string;
  /** Box Image */
  boxImage: string;
  /** Box Image Desktop */
  defaultImage?: string;
  /** Box gross return */
  grossReturn?: string;
  /** Box annual return */
  annualReturn?: string;
  /** Box read more link */
  link?: string;
};

const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
  boxImage: defaultImage,
  title: '',
  grossReturn: '',
  annualReturn: '',
  link: '',
}



const Box: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const { theme, className, title, boxImage, grossReturn, annualReturn, link, setTheme } = renderProps
  return (
    <div className={`custom-box ${theme}`}>
      <div className="box-warap">
        <div className={`text-block color-scheme-${theme}`}>
          <div className="box-slider">
            <table>
              <tbody>
                <tr className="stak-tr">
                  <td>
                    <img src={theme === 'DARK' ? StakingSVGDark : StakingSVGLight} />
                  </td>
                  <td>
                    {link}
                  </td>
                </tr>
                <tr className="eth-tr">
                  <td>{title}</td>
                  <td>
                    <img src={boxImage} />
                  </td>
                </tr>
                <tr className="ret-tr">
                  <td>Return since inception :</td>
                  <td>{grossReturn}</td>
                </tr>
                <tr className="ann-tr">
                  <td>Annualized return:</td>
                  <td>{annualReturn}</td>
                </tr>
              </tbody>
            </table>
            <div className="gotostak">
              <Button
                theme={theme}
                label="go to staking"
                variant={'secondary'}
                style={{ marginRight: '1rem' }}
                onClick={() => setTheme(ETheme.LIGHT)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Box
