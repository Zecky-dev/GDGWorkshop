// Stiller oluşturmak için kullanılan yapı
import {StyleSheet} from 'react-native';

// Kullanacağımız renkleri içe aktarıyoruz
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  // Kapsayıcı stilleri
  container: {
    // Görünümün bütün sayfayı kaplaması için
    flex: 1,
    backgroundColor: colors.backgroundColor,
    padding: 16, // iç boşluk, standart olarak 2 ve kuvvetleri (2,4,16,32,64..)
  },

  // Sayfa başlığı stilleri
  title: {
    color: colors.black,
    fontFamily: 'Quicksand-SemiBold', // farklı font kullanmak için..
    fontSize: 32, // font büyüklüğü değiştirmek için
    marginBottom: 16, // Notlarım yazısı altında boşluk bırakmak için
  },

  // Not oluşturma butonu

  // flexDirection varsayılan olarak column değerinde (alt alta ekleme) başlar
  // justifyContent kapsayıcı içerisindeki elemanları flexDirection yönünde hizalamak için kullanılır
  // flexDirection = row için yatayda ortalama
  // flexDirection = column için dikeyde ortalama

  // alignItems ise justifyContent'in tersi yönünde  hizalama yapmak için kullanılır
  // justifyContent yatayda hizalama yapıyorsa dikeyde hizalama yapar
  // justifyContent dikeyde hizalama yapıyorsa yatayda hizalama yapar

  createNoteButton: {
    width: 42,
    height: 42,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 21, // Kenarları yumuşatmak için kullanırız, 40x40 bir boyut için yarısı kadar radius yuvarlak görünüm sağlar
    
    position: "absolute", // Bileşenin sayfadaki diğer elemanlardan bağımsız olarak hizalanabilmesi için gerekli, alabileceği değerler = relative, absolute
    // Relative verildiği zaman diğer elemanları dikkate alarak yerleştirme yapılır
    
    alignSelf: 'flex-end', // Elemanın kendi hizalanmasının ayarlanmasını sağlar
  },

  // Boş bir View, sadece yüksekliği olacak boşluk görünümü verecek
  separator: {
    height: 12,
  },

  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 12,
  }

});

export default styles;
