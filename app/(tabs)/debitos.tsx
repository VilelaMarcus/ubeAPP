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

export default function DebitosScreen() {
  // Mock user data
  const userName = 'Reginaldo';

  // State to track the current slider index
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderWidth = windowWidth * 0.85;

  const [searchValue, setSearchValue] = useState('');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.container}>
        {/* User Greeting */}
        <Text style={styles.greeting}>Olá, {userName} ;)</Text>
        
        <Text style={styles.subGreeting}>Busque por notícias ou serviços</Text>
        
        {/* Global SearchInput */}
        <View style={styles.searchContainer}>
          <SearchInput
            placeholder="EX: Pagar IPTU atrasado"
            value={searchValue}
            onChangeText={setSearchValue}
          />
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
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 20,
  },
  subGreeting: {
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