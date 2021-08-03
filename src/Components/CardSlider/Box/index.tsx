import React, { FC } from 'react'

import { generateRenderProps } from '../../../Utils/helpers'
import { ETheme } from '../../../Constants/Types/theme.types'
// @ts-ignore
import defaultImage from '../../../Images/card1-back-image.svg'
// @ts-ignore
import CardDefaulImageWeb4 from '../../../Images/card4-back-image.svg'
// @ts-ignore
import StakingSVG from '../../../Images/staking.svg'

import './Box.scss'

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
  grossReturn?: number;
  /** Box annual return */
  annualReturn?: number;
  /** Box read more link */
  link?: string;
};

const defaultProps: Props = {
  theme: ETheme.DARK,
  className: '',
  boxImage: defaultImage,
  title: '',
  grossReturn: 0.0,
  annualReturn: 0.0,
  link: '',
}

const Box: FC<Props> = (props: Props) => {
  const renderProps = generateRenderProps(defaultProps, props)

  const { theme, className, title, boxImage, grossReturn, annualReturn, link } = renderProps
  return (
    <div className={`custom-box ${className}`}>
      <div className="box-warap">
        <div className="text-block color-scheme-DARK ">
          <div className="box-slider">
            <table>
              <tbody>
                <tr className="stak-tr">
                  <td><img src={StakingSVG} /></td>
                  <td><a href={link}>Read more</a></td>
                </tr>
                <tr className="eth-tr">
                  <td>{title}</td>
                  <td>
                    <img src={boxImage} />
                  </td>
                </tr>
                <tr className="ret-tr">
                  <td >Return since inception :</td>
                  <td>{grossReturn}% *</td>
                </tr>
                <tr className="ann-tr">
                  <td >Annualized return:</td>
                  <td>{annualReturn}% *</td>
                </tr>
              </tbody>
            </table>
            <div className="gotostak">
            <button>go to staking</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Box
