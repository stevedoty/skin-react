import * as React from 'react';
import classNames from 'classnames';
import {PointerType} from './tourtip';

export interface ToolTipBaseProps<T> extends React.HTMLProps<T> {
  pointer?: PointerType;
}
export const ToolTipBase = ({...props}: ToolTipBaseProps<HTMLSpanElement>) => {
  const className = classNames(props.className);
  return <span {...props} className={className} />;
};

export default ToolTipBase;
