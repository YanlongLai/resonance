// @flow weak
/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { createShallowWithContext } from 'test/utils';
import AxisTick, { styleSheet } from './AxisTick';

describe('<AxisTick />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallowWithContext();
    classes = shallow.context.styleManager.render(styleSheet);
  });

  it('should render a div', () => {
    const wrapper = shallow(
      <AxisTick>Hello World</AxisTick>,
    );
    assert.strictEqual(wrapper.is('div'), true, 'should be a div');
  });

  it('should render with the paper class, default depth class, and rounded', () => {
    const wrapper = shallow(<AxisTick>Hello World</AxisTick>);
    assert.strictEqual(wrapper.hasClass(classes.paper), true, 'should have the AxisTick class');
    assert.strictEqual(wrapper.hasClass(classes.rounded), true, 'should be rounded by default');
  });

  it('should disable the rounded class', () => {
    const wrapper = shallow(<AxisTick rounded={false}>Hello World</AxisTick>);
    assert.strictEqual(wrapper.hasClass(classes.rounded), false, 'should not be rounded');
  });

  it('should set the zDepth shadow class', () => {
    const wrapper = shallow(<AxisTick zDepth={16}>Hello World</AxisTick>);
    assert.strictEqual(wrapper.hasClass(classes.dp16), true, 'should have the dp16 shadow class');
    wrapper.setProps({ zDepth: 24 });
    assert.strictEqual(wrapper.hasClass(classes.dp24), true, 'should have the dp24 shadow class');
    wrapper.setProps({ zDepth: 2 });
    assert.strictEqual(wrapper.hasClass(classes.dp2), true, 'should have the dp2 shadow class');
  });
});