import React from 'react';

import { TouchableOpacity, Text, View } from 'react-native';

// Not altındaki badge görünümü için kullanılan bileşen (custom component)
import NoteBadge from './components/NoteBadge';
import moment from 'moment';
import 'moment/locale/tr';


import styles from './NoteCard.style';

const NoteCard = ({note, onPress}) => {
    
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: note.backgroundColor }]}
            onPress={onPress}
            activeOpacity={.8} // Üzerine bastığımız zaman uygulamak istediğimiz opaklık seviyesi 0, 1 arasında değer alır
        >
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.description}>{note.description}</Text>
            <View style={styles.badgesContainer}>
                <NoteBadge label={note.priority.label}/>
                <NoteBadge label={`🗓️ ${moment(note.createdAt).format('DD MMMM YYYY, HH:mm')}`}/>
            </View>
        </TouchableOpacity>
    )
}

export default NoteCard;