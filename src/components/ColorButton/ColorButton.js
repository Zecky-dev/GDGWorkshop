import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './ColorButton.style';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/Feather'

const ColorButton = ({color = colors.black, isSelected, ...rest}) => {
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: color }, isSelected && styles.selectedContainer]}
            {...rest}
        >
            {isSelected && <Icon name="check" color={colors.white} size={24} />}
        </TouchableOpacity>
    )
};

export default ColorButton;