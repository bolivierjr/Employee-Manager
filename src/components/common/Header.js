import React from 'react';
import { Text, View } from 'react-native';

const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#66ffc2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 200 },
    shadowOpacity: 0.2,
    elevation: 5,
    borderBottomColor: '#000',
    borderBottomWidth: 0.1,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    color: '#737373',
    fontWeight: 'bold',
  },
};

export { Header };
