import React from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from './Input.style';
import colors from '../../constants/colors';

const Input = ({label, additionalStyles, ...rest}) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, additionalStyles?.input]}
                placeholderTextColor={colors.muted_black}
                {...rest}
            />
        </View>
    )
}

export default Input;