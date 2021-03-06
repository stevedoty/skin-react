/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Arturo Montoya
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import classNames from 'classnames';
import * as Skin from '../../skin';
import Icon, {IconName} from '../../Icon';
import TextboxWrapper from './textboxWrapper';
const getTag = (isMultiline: boolean) => (isMultiline ? 'textarea' : 'input');

export interface TextboxProps<T> extends Skin.Fluid, React.HTMLProps<T> {
  isUnderlined?: boolean;
  isMultiline?: boolean;
  isPostfixIcon?: boolean;
  isInvalid?: boolean;
  iconName?: IconName;
  iconProps?: object;
  forwardedRef?: any;
}
export const Textbox = ({
  isFluid,
  isUnderlined,
  isMultiline,
  isPostfixIcon,
  isInvalid,
  iconName,
  forwardedRef,
  iconProps = {width: '16', height: '16', 'aria-hidden': 'true'},
  ...props
}: TextboxProps<HTMLTextAreaElement | HTMLInputElement>) => {
  const className = classNames(
    'textbox__control',
    {
      'textbox__control--fluid': isFluid,
      'textbox__control--underline': isUnderlined && !isMultiline
    },
    props.className
  );
  return (
    <TextboxWrapper isFluid={isFluid} isPostfixIcon={isPostfixIcon}>
      {!isPostfixIcon && iconName && <Icon name={iconName} {...iconProps} />}
      {React.createElement(getTag(isMultiline), {
        type: 'text',
        'aria-invalid': isInvalid,
        ...props,
        className,
        ref: forwardedRef
      })}
      {isPostfixIcon && iconName && <Icon name={iconName} {...iconProps} />}
    </TextboxWrapper>
  );
};
export default Textbox;
