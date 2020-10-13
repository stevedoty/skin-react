import * as React from 'react';
import classNames from 'classnames';
import Icon from '../../Icon';
import {typeRoles, pointerStyles} from './constants';
import {PointerType} from './tourtip';

export interface ToolTipOverlayProps<T> extends React.HTMLProps<T> {
  pointer?: PointerType;
  type?: any;
  a11yCloseText?: string;
  onCloseClick?: any;
}
export const ToolTipOverlay = ({
  type,
  pointer,
  a11yCloseText,
  onCloseClick,
  children,
  ...props
}: ToolTipOverlayProps<HTMLSpanElement>) => {
  const overlayStyles = pointerStyles[pointer || 'bottom'];
  const className = classNames(props.className, `${type}__overlay`);
  return (
    <span {...props} className={className} role={typeRoles[type]} style={overlayStyles}>
      <span className={`${type}__pointer ${type}__pointer--${pointer}`} />
      <span className={`${type}__mask`}>
        <span className={`${type}__cell`}>
          <span className={`${type}__content`}>{children}</span>
          {type !== 'tooltip' && (
            <button aria-label={a11yCloseText} className={`${type}__close`} type="button" onClick={onCloseClick}>
              <Icon name="close" />
            </button>
          )}
        </span>
      </span>
    </span>
  );
};

export default ToolTipOverlay;
