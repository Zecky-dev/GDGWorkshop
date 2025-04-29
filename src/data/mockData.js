const mockData = [
  {
    id: '1',
    title: 'Alışveriş Listesi',
    description:
      'Süt, ekmek, yumurta, peynir alınacak. Ayrıca, sabah kahvaltısı için birkaç çeşit peynir ve zeytin de alınmalı. Marketi hızlıca gezip her şeyi almak gerek.',
    createdAt: '2025-04-25 10:30',
    priority: {
      id: 1,
      label: '🚨 Çok önemli',
    },
    backgroundColor: '#10AC84', // Yeşil
  },
  {
    id: '2',
    title: 'Proje Teslimi',
    description:
      'Mobil uygulama proje dosyasını Cuma günü teslim etmeliyim. Kodun son hali üzerinde bir test yaparak hatasız olduğundan emin olmalıyım. Ayrıca, teslim sırasında proje dokümantasyonunu da eklemem gerek.',
    createdAt: '2025-04-20 14:00',
    priority: {
      id: 1,
      label: '🚨 Çok önemli',
    },
    backgroundColor: '#E74C3C', // Kırmızı
  },
  {
    id: '3',
    title: 'Kitap Okuma',
    description:
      'Her gün en az 30 sayfa kitap okuyacağım. Bu alışkanlığı kazandıktan sonra, daha fazla sayfa okumayı hedefliyorum. Şu anda "Savaş ve Barış" kitabını okuyorum, oldukça uzun bir kitap ama harika bir içeriği var.',
    createdAt: '2025-04-15 18:45',
    priority: {
      id: 3,
      label: '💤 Az önemli',
    },
    backgroundColor: '#2F3542', // Lacivert
  },
  {
    id: '4',
    title: 'Spor Programı',
    description:
      'Haftada 3 gün spor salonuna git. Bu hafta, özellikle üst vücut çalışmaya odaklanacağım ve biraz daha ağırlık artırarak kas yapmayı hedefliyorum. Ayrıca kardiyo da ihmal edilmemeli.',
    createdAt: '2025-04-22 09:15',
    priority: {
      id: 2,
      label: '📌 Orta önemli',
    },
    backgroundColor: '#10AC84', // Yeşil
  },
  {
    id: '5',
    title: 'Tatil Planı',
    description:
      'Yaz tatili için otel ve uçak bileti bakılacak. Önce birkaç popüler otel önerisi ve tatil köyü seçeneklerini incelemeliyim. Uçak bileti için erken rezervasyon fırsatları da araştırılmalı.',
    createdAt: '2025-04-18 16:20',
    priority: {
      id: 3,
      label: '💤 Az önemli',
    },
    backgroundColor: '#2F3542', // Lacivert
  },
  {
    id: '6',
    title: 'Sunum Hazırlığı',
    description:
      'Pazartesi yapılacak toplantı için sunum hazırlanacak. Sunumda, proje süreci, karşılaşılan zorluklar ve çözüm önerileri gibi konuları detaylı şekilde ele alacağım. Ayrıca, tüm slaytları profesyonel bir tasarımla düzenlemeliyim.',
    createdAt: '2025-04-23 11:00',
    priority: {
      id: 1,
      label: '🚨 Çok önemli',
    },
    backgroundColor: '#000000', // Siyah
  },
];

export default mockData;
