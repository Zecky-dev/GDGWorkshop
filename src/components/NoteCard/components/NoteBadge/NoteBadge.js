import React from 'react';
import {View, Text} from 'react-native';
import styles from './NoteBadge.style';

const NoteBadge = ({label}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

export default NoteBadge;