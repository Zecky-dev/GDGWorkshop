import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';

// TouchableOpacity'in sahip olduğu tüm diğer propları ...rest ile alabiliriz
const Button = ({label, ...rest}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest} // Diğer tüm props'ları ilet
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
