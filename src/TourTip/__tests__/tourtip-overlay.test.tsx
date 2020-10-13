/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Steve Doty
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import {ToolTipOverlay} from '../components/tooltip-overlay';
import * as React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';

let component;
let onClickHandler;

beforeEach(() => {
  onClickHandler = jest.fn();
});

afterEach(cleanup);
describe('given checkbox button is enabled', () => {
  const defaultProps = {
    type: 'infotip',
    a11yCloseText: 'Close'
  };

  beforeEach(async () => {
    component = await render(<ToolTipOverlay {...defaultProps} onCloseClick={onClickHandler} />);
  });

  describe('when the close button is clicked', () => {
    beforeEach(async () => {
      await fireEvent.click(component.getByLabelText(defaultProps.a11yCloseText));
    });

    it('then it dom event from button click', () => {
      expect(onClickHandler).toHaveBeenCalledTimes(1);
    });
  });
});
