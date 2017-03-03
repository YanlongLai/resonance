// @flow weak
/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { createShallowWithContext } from 'test/utils';
import Surface from './Surface';

describe('<Surface />', () => {
  let shallow;

  before(() => {
    shallow = createShallowWithContext();
  });

  it('should render an svg element', () => {
    const wrapper = shallow(
      <Surface />,
    );
    assert.strictEqual(wrapper.is('svg'), true, 'should be an svg');
  });

  it('should spread props', () => {
    const wrapper = shallow(
      <Surface data-test="hello" />,
    );
    assert.strictEqual(wrapper.prop('data-test'), 'hello', 'should be spread on Surface element');
  });

  it('should add user classes', () => {
    const wrapper = shallow(<Surface className="wu-tang" />);
    assert.strictEqual(wrapper.hasClass('wu-tang'), true, 'should have the wu-tang class');
  });
});