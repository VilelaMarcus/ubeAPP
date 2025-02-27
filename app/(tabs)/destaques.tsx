import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import SearchInput from '../../components/molecules/SearchInput';

// Get device dimensions
const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

// Dummy data for slider images
const sliderImages = [
  require('../../assets/images/slide1.png'),
  require('../../assets/images/slide2.png'),
  require('../../assets/images/slide3.png'),
];

// Dummy data for recent services
const recentServices = [
  { id: 1, title: '2ª via de IPTU' },
  { id: 2, title: 'Agendamentos' },
  { id: 3, title: 'Infrações' },
  { id: 4, title: 'Emitir Certidão' },
];

export default function DestaquesScreen() {
  // Mock user data
  const userName = 'Reginaldo';

  // State to track the current slider index
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderWidth = windowWidth * 0.85;

  const handleScroll = (event: { nativeEvent: { contentOffset: { x: any; }; }; }) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / sliderWidth);
    setCurrentIndex(index);
  };

  // Limit the number of dots to a maximum of 5
  const dotsCount = sliderImages.length > 5 ? 5 : sliderImages.length;

  const [searchValue, setSearchValue] = useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.container}>
        {/* Slider Section */}
        <View style={styles.sliderWrapper}>
          <View style={styles.sliderContainer}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={16}
            >
              {sliderImages.map((img, index) => (
                <Image key={index} source={img} style={styles.slideImage} />
              ))}
            </ScrollView>
          </View>
          {/* Pagination Dots below the slider */}
          <View style={styles.paginationContainer}>
            {Array.from({ length: dotsCount }).map((_, idx) => (
              <View
                key={idx}
                style={[
                  styles.dot,
                  currentIndex === idx ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>

        {/* User Greeting */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.textStyle}>Serviços por categoria</Text>
          <Text style={styles.labels}>Ver todas</Text>
        </View>

        {/* Últimos Serviços Section */}
        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Últimos Serviços</Text>
          <View style={styles.servicesButtonsContainer}>
            {recentServices.map((service) => (
              <TouchableOpacity key={service.id} style={styles.serviceButton}>
                <Text style={styles.serviceButtonText}>{service.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>Ver todos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  // Wrapper to hold both the slider and dots
  sliderWrapper: {
    marginTop: 0,
    marginLeft: 30,
    width: windowWidth * 0.85,
  },
  sliderContainer: {
    height: windowHeight * 0.5,
    width: windowWidth * 0.85,
  },
  slideImage: {
    width: windowWidth * 0.85,
    height: windowHeight * 0.5,
    borderRadius: 10,
    marginRight: 10,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  dot: {
    width: 8,
    marginTop: 4,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#3498db',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 20,
  },
  labels: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  searchContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
  },
  servicesContainer: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  servicesButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexBasis: '48%',
  },
  serviceButtonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  viewAllButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  viewAllText: {
    color: '#3498db',
    fontSize: 14,
  },
});