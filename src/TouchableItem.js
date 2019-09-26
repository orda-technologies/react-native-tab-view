/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

type Props = {
  onPress: () => mixed,
  delayPressIn?: number,
  borderless?: boolean,
  pressColor?: string,
  pressOpacity?: number,
  children?: React.Node,
  style?: ViewStyleProp,
};

export default class TouchableItem extends React.Component<Props> {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    delayPressIn: PropTypes.number,
    borderless: PropTypes.bool,
    pressColor: PropTypes.string,
    pressOpacity: PropTypes.number,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    pressColor: 'rgba(255, 255, 255, .4)',
  };

  render() {
    const { style, pressOpacity, ...rest } = this.props;

    return (
      <TouchableOpacity {...rest} style={style} activeOpacity={pressOpacity}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
