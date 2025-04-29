import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './PriorityButton.style';

const PriorityButton = ({isSelected, label, ...rest}) => {
    return (
        <TouchableOpacity
            style={[styles.container, isSelected && styles.selectedContainer]}
            {...rest}
        >
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

export default PriorityButton;