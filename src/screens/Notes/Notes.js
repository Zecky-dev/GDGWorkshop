import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

// React native çekirdek bileşenleri
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

// Görünümlerimizin ekran çentiği altında kalmaması için kullandığımız container bileşeni
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

// Stiller (external styles)
import styles from './Notes.style';

// Renkler
import colors from '../../constants/colors';

// İkon
import Icon from 'react-native-vector-icons/AntDesign';
import NoteCard from '../../components/NoteCard';
import NoteEmpty from '../../components/NoteEmpty';

// Mock (sahte) veri
import mockData from '../../data/mockData';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Notların gösterildiği sayfa
const Notes = ({navigation}) => {
  // Ekrandaki notch ve diğer kısımlar için kullanaileceğimiz safe alanlar için kullandığımız hook
  const insets = useSafeAreaInsets();

  // Notları tutmak için kullandığımız state
  const [notes, setNotes] = useState([]);

  const onNotePress = note => {
    navigation.navigate('CreateEditNote', {type: 'edit', item: note});
  };

  // Sayfaya her odaklanıldığında güncel notların getirilmesi
  useFocusEffect(
    useCallback(() => {
      const fetchNotes = async () => {
        const savedNotes =
          JSON.parse(await AsyncStorage.getItem('saved-notes')) || [];
        setNotes(savedNotes);
      };

      fetchNotes();
    }, []),
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Sayfa başlığı */}
      <Text style={styles.title}>Notlarım</Text>

      {/* Not listesi */}
      <FlatList
        contentContainerStyle={styles.contentContainerStyle} // Liste içerisinde elemanları kapsayan konteynır için verdiğimiz stiller
        showsVerticalScrollIndicator={false} // Dikeydeki kaydırma çubuğunu kaldırır
        keyExtractor={item => item.id}
        data={notes.sort(note => note.createdAt).reverse()} // Tarihe göre sıralanmış dizi
        renderItem={({item}) => (
          <NoteCard note={item} onPress={() => onNotePress(item)} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => <NoteEmpty />}
      />

      {/* Not oluşturma butonu */}
      <TouchableOpacity
        // Multi stil verme
        style={[
          styles.createNoteButton,
          {top: insets.top + 24, right: insets.right + 16},
        ]}
        onPress={() => navigation.navigate('CreateEditNote', {type: 'create'})}>
        <Icon name="plus" color={colors.white} size={18} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Notes;
