// @flow weak

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import customPropTypes from '../utils/customPropTypes';

export const styleSheet = createStyleSheet('Axis', (theme) => {
  const { palette } = theme;
  const shadows = {};

  theme.shadows.forEach((shadow, index) => {
    shadows[`dp${index}`] = {
      boxShadow: shadow,
    };
  });

  return {
    axis: {
      backgroundColor: palette.background.paper,
    },
    rounded: {
      borderRadius: '2px',
    },
    ...shadows,
  };
});

/**
 * A piece of material axis.
 *
 * ```js
 * import Axis from 'material-ui/Axis';
 *
 * const Component = () => <Axis zDepth={8}>Hello World</Axis>;
 * ```
 */
export default function Axis(props, context) {
  const {
    className: classNameProp,
    rounded,
    zDepth,
    ...other
  } = props;
  const classes = context.styleManager.render(styleSheet);

  const classNameZDepth = `dp${zDepth >= 0 ? zDepth : 0}`;
  const className = classNames(classes.axis, classes[classNameZDepth], {
    [classes.rounded]: rounded,
  }, classNameProp);

  return (
    <div className={className} {...other} />
  );
}

Axis.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Set to false to disable rounded corners.
   */
  rounded: PropTypes.bool,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   */
  zDepth: PropTypes.number,
};

Axis.defaultProps = {
  rounded: true,
  zDepth: 2,
};

Axis.contextTypes = {
  styleManager: customPropTypes.muiRequired,
};