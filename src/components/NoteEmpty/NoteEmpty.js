import React from 'react';
import {View, Image, Text} from 'react-native'
import styles from './NoteEmpty.style';

const NoteEmpty = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.emptyNoteIcon}
                source={require('../../assets/images/note_empty.png')}
            />
            <Text
                style={styles.emptyNoteText}
            >
                Henüz Not Olusturmadın
            </Text>
        </View>
    )
}

export default NoteEmpty;