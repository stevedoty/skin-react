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
import {Category} from '../../.storybook/util/stories-hierarchy';
import {withKnobs} from '@storybook/addon-knobs';
import {withA11y} from '@storybook/addon-a11y';
import TourTip from './components/tourtip';
import {longString} from '../test-utils';

const story: any = {
  title: Category.SKINDS6,
  component: TourTip,
  decorators: [withKnobs, withA11y]
};
const Heading = (props) => (
  <h2 className="tourtip__heading" {...props}>
    Tourtip
  </h2>
);
const Content = () => <p>Here's something new to help you be successful at your task.</p>;
const defaultProps = {
  heading: <Heading id="tourtip-label" />,
  content: <Content />
};
export const _TourTip = () => {
  const [expanded, setExpanded] = React.useState(true);
  const props = {...defaultProps};
  return (
    <>
      <button className="btn btn--secondary" onClick={() => setExpanded(!expanded)}>
        Controlled Toggle TourTips
      </button>
      <div style={{margin: '150px'}}>
        <TourTip {...props} onCloseClick={() => setExpanded(!expanded)} expanded={expanded}>
          <p>{longString}</p>
        </TourTip>
        <TourTip {...props} pointer="top-right">
          <p>{longString}</p>
        </TourTip>
      </div>
    </>
  );
};
export default story;
