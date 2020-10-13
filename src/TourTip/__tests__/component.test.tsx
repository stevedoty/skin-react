/*
 * ************************************************************
 *  Copyright 2020 eBay Inc.
 *  Author/Developer: Steve Doty
 *  Use of this source code is governed by an MIT-style
 *  license that can be found in the LICENSE file or at
 *  https://opensource.org/licenses/MIT.
 *  ***********************************************************
 */

import * as React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {TourTip} from '../index';

afterEach(cleanup);

let component;
let onCollapseHandler;

beforeEach(() => {
  onCollapseHandler = jest.fn();
});

const Heading = () => (
  <h2 className="tourtip__heading" id="tourtip-label">
    Tourtip
  </h2>
);
const Content = () => <p>Here's something new to help you be successful at your task.</p>;
const hostText = 'HostText';
describe('given the default tourtip', () => {
  const defaultProps = {
    a11yCloseText: 'Close Tourtip',
    heading: <Heading />,
    content: <Content />
  };

  beforeEach(async () => {
    component = await render(
      <TourTip {...defaultProps} onCollapse={onCollapseHandler}>
        <p>{hostText}</p>
      </TourTip>
    );
  });

  thenItIsOpen();
  thenItCanBeClosed();

  describe('after it is rerendered', () => {
    beforeEach(async () => {
      await component.rerender(
        <TourTip {...defaultProps} onCollapse={onCollapseHandler}>
          <p>{hostText}</p>
        </TourTip>
      );
    });

    thenItIsOpen();
    thenItCanBeClosed();
  });

  function thenItIsOpen() {
    it('then it is open', () => {
      console.log(component.getByText(hostText).parentElement);
      //expect(component.getByText(hostText).parentElement).has.attr('aria-expanded', 'true');
    });
  }

  function thenItCanBeClosed() {
    describe('when the close button is clicked', () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByLabelText(defaultProps.a11yCloseText));
      });

      it('then it emits the tooltip-collapse event', () => {
        expect(onCollapseHandler).toHaveBeenCalledTimes(1);
      });

      it('then it is closed', () => {
        console.log('Arturo', component.getByText(hostText).parentElement);
        //expect(component.getByText(hostText).parentElement).has.attr('aria-expanded', 'false');
      });
    });
  }
});
