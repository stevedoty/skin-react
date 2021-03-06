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

export interface PaginationProps<T> extends React.HTMLProps<T> {
  a11yText?: string;
}
export const Pagination = ({children, id, a11yText, ...props}: PaginationProps<HTMLElement>) => {
  const className = classNames('pagination', props.className);
  const HTMLProps = {...props, className};
  return (
    <nav {...HTMLProps}>
      <span aria-live="polite" role="status">
        <h2 className="clipped" id={id}>
          {a11yText}
        </h2>
      </span>
      {children}
    </nav>
  );
};
