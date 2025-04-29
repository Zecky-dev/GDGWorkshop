import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';

// Styles & Colors
import styles from './CreateEditNote.style';
import colors from '../../constants/colors';

// Custom components
import Button from '../../components/Button';
import Input from '../../components/Input';
import ColorButton from '../../components/ColorButton';
import PriorityButton from '../../components/PriorityButton';

// Constants
import NoteBackgroundColors from '../../constants/noteBackgroundColors';
import Priorities from '../../constants/priorityOptions';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {v4 as uuidv4} from 'uuid';

const CreateEditNote = ({route, navigation}) => {
  // Sayfa tipi ve varsa notun getirilmesi
  const {type, item} = route.params;

  const [note, setNote] = useState(
    type === 'edit'
      ? item
      : {
          title: '',
          description: '',
          priority: {
            id: '',
            label: '',
          },
          backgroundColor: '',
        },
  );

  const checkEmptyNoteFields = () => {
    console.log('CHECK_EMPTY_NOTE_FIELDS');
    console.log(note);
    if (
      note.title.trim() !== '' &&
      note.description.trim() !== '' &&
      note.backgroundColor.trim() !== '' &&
      note.priority
    ) {
      return false;
    }
    return true;
  };

  // Sayfanın türüne göre not kaydetme veya düzenleme yapan fonksiyon
  const createOrSaveNote = async () => {
    // Kaydedilmiş bütün notlar getiriliyor.
    const savedNotes =
      JSON.parse(await AsyncStorage.getItem('saved-notes')) || [];
    let tempNotes = [...savedNotes];

    // Sayfa tipi kontrolü yapılıyor, edit ise güncelleme yoksa yeni not ekleme işlemi yapılacak

    const isThereEmptyField = checkEmptyNoteFields();
    console.log('IS_THERE_EMPTY_FIELD', isThereEmptyField);
    if (!isThereEmptyField) {
      if (type === 'edit') {
        // Sadece id'si güncellemek istediğimiz nota eşit olan notu güncelleyip diğer notları olduğu gibi bırakıyoruz.
        tempNotes = savedNotes.map(savedNote => {
          if (savedNote.id === note.id) return note;
          return savedNote;
        });
      } else {
        // Notlar üzerine yeni bir ekleme yapılıyor
        tempNotes.push({
          ...note,
          id: uuidv4(),
          createdAt: new Date(),
        });
      }
      // Güncelleme veya ekleme işlemi bittikten sonra güncellenmiş notlar kaydediliyor
      await AsyncStorage.setItem('saved-notes', JSON.stringify(tempNotes));
      // İşlem bittiğinde önceki sayfaya geri dönülüyor.
      navigation.goBack();
    } else {
      Alert.alert('Hata!', 'Eksik veya boş alan bırakmayınız..', [
        {
          style: 'default',
          text: 'Tamam',
        },
      ]);
    }
  };

  // Not silme alert'i gösteren fonksiyon
  const showDeleteNoteAlert = async () => {
    Alert.alert('Not Silme İşlemi', 'Notu silmek istediğinize emin misiniz?', [
      {style: 'cancel', text: 'Hayır'},
      {style: 'destructive', text: 'Evet', onPress: deleteNote},
    ]);
  };

  const deleteNote = async () => {
    // Kaydedilmiş bütün notlar getiriliyor.
    const savedNotes =
      JSON.parse(await AsyncStorage.getItem('saved-notes')) || [];
    let tempNotes = [...savedNotes];
    tempNotes = tempNotes.filter(savedNote => note.id !== savedNote.id);
    await AsyncStorage.setItem('saved-notes', JSON.stringify(tempNotes));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 20}}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.topContainer}>
            <View style={styles.topLeftContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="left"
                  size={24}
                  color={colors.black}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <Text style={styles.title}>
                {type === 'create' ? 'Not Oluştur' : 'Notu Düzenle'}
              </Text>
            </View>
            <TouchableOpacity onPress={showDeleteNoteAlert}>
              <Icon name="delete" color={colors.note_color_red} size={28} />
            </TouchableOpacity>
          </View>

          <View style={styles.inputsContainer}>
            <Input
              value={note.title}
              label={'Not Başlığı'}
              placeholder="Not başlığı giriniz..."
              multiline={true}
              onChangeText={value => setNote({...note, title: value})}
            />
            <Input
              value={note.description}
              label={'Not Açıklaması'}
              placeholder="Not açıklaması giriniz..."
              multiline={true}
              additionalStyles={{input: {minHeight: 150}}}
              onChangeText={value => setNote({...note, description: value})}
            />

            <View style={styles.fieldContainer}>
              <Text style={styles.fieldTitle}>Not Arkaplan Rengi</Text>
              <View style={styles.colorsButtonContainer}>
                <FlatList
                  data={NoteBackgroundColors}
                  horizontal={true}
                  ItemSeparatorComponent={() => <View style={{width: 8}} />}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => (
                    <ColorButton
                      key={item}
                      color={item}
                      onPress={() => setNote({...note, backgroundColor: item})}
                      isSelected={note.backgroundColor === item}
                    />
                  )}
                />
              </View>
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.fieldTitle}>Önem Seviyesi</Text>
              <View style={styles.prioritiyButtonsContainer}>
                {Priorities.map(priority => (
                  <PriorityButton
                    key={priority.id}
                    label={priority.label}
                    isSelected={priority.id === note.priority.id}
                    onPress={() => setNote({...note, priority})}
                  />
                ))}
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={createOrSaveNote}
              label={type === 'create' ? 'Devam' : 'Kaydet'}
              activeOpacity={0.8}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateEditNote;
