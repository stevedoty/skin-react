import * as React from 'react';
import classNames from 'classnames';
import ToolTipBase from './tooltip-base';
import ToolTipOverlay from './tooltip-overlay';
import {useEffect} from 'react';
import {isControlled} from '../../skin-utils';
export type PointerType =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'right-bottom'
  | 'right-top'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom'
  | 'left'
  | 'left-bottom'
  | 'left-top';
export interface TourTipProps<T> extends React.HTMLProps<T> {
  pointer?: PointerType;
  heading?: any;
  content?: any;
  onExpand?: any;
  onCollapse?: any;
  expanded?: any;
  onCloseClick?: any;
  a11yCloseText?: string;
}
export const TourTip = ({
  a11yCloseText="Dismiss tourtip",
  pointer,
  heading,
  content,
  children,
  onExpand = () => {},
  onCollapse = () => {},
  onCloseClick,
  expanded,
  ...props
}: TourTipProps<HTMLSpanElement>) => {
  const didMountRef = React.useRef(false);
  const controlled = isControlled(expanded);
  const [expandedState, setExpanded] = React.useState(controlled ? expanded : true);
  const handleCloseClick = (e) => {
    if (controlled) {
      onCloseClick(e);
    } else {
      setExpanded(!expandedState);
    }
  };
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    } else {
      if (controlled ? expanded : expandedState) {
        onExpand();
      } else {
        onCollapse();
      }
    }
  }, [expanded, expandedState]);
  const className = classNames(
    'tourtip',
    {'tourtip--expanded': controlled ? expanded : expandedState},
    props.className
  );
  const tourTipLabel = heading?.props?.id;
  const pointerValue = pointer || 'bottom';
  return (
    <span>
      <ToolTipBase type="tourtip" pointer={pointerValue}>
        <span {...props} className={className} aria-expanded={expanded}>
          {children && <span className="tourtip__host">{children}</span>}
          <ToolTipOverlay
            type="tourtip"
            pointer={pointerValue}
            onCloseClick={handleCloseClick}
            a11yCloseText={a11yCloseText}
            aria-labelledby={tourTipLabel}
          >
            {heading}
            {content}
          </ToolTipOverlay>
        </span>
      </ToolTipBase>
    </span>
  );
};

export default TourTip;
