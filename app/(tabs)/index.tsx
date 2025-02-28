import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SearchInput from '../../components/molecules/SearchInput';
import ServiceCard from '../../components/atoms/ServiceCard';
import { iconMapper } from '@/types/ServicesType';

// Get device dimensions
const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

// Dummy data for slider images
const sliderImages = [
  require('../../assets/images/slide1.png'),
  require('../../assets/images/slide2.png'),
  require('../../assets/images/slide3.png'),
];

// Default data for recent services
const defaultRecentServices = [
  { id: 1, title: '2ª via de IPTU', Icon: iconMapper.IPTU },
  { id: 2, title: 'Agendamentos', Icon: iconMapper.AGENDAMENTO },
  { id: 3, title: 'Infrações', Icon: iconMapper.INFRACOES },
  { id: 4, title: 'Emitir Certidão', Icon: iconMapper.CERTIDAO },
];

export default function HomeScreen() {
  // Mock user data
  const userName = 'Reginaldo';
  // State for search input
  const [searchValue, setSearchValue] = useState('');
  // State for recent services
  const [recentServices, setRecentServices] = useState(defaultRecentServices);

  useEffect(() => {
    // Load recent services from AsyncStorage
    const loadRecentServices = async () => {
      try {
        const storedServices = await AsyncStorage.getItem('recentServices');
        if (storedServices) {
          const parsedServices = JSON.parse(storedServices);
          const updatedServices = parsedServices.map((service: { id: string | number; }) => ({
            ...service,
            Icon: iconMapper[service.id as keyof typeof iconMapper],
          }));
          setRecentServices(updatedServices);
        }
      } catch (error) {
        console.error('Failed to load recent services:', error);
      }
    };

    loadRecentServices();
  }, []);

  const handleServicePress = async (service: any) => {
    try {
      // Update recent services
      const updatedServices = [service, ...recentServices.filter(s => s.id !== service.id)].slice(0, 4);
      setRecentServices(updatedServices);
      // Store updated services in AsyncStorage
      await AsyncStorage.setItem('recentServices', JSON.stringify(updatedServices));
    } catch (error) {
      console.error('Failed to update recent services:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.container}>
        {/* User Greeting */}
        <Text style={styles.greeting}>Olá, {userName} ;)</Text>
        <Text style={styles.subGreeting}>Comece por aqui</Text>
        
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
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Últimos Serviços</Text>
            <Text style={styles.labels}>Ver todas</Text>
          </View>
          {/* Existing text-based service buttons */}
          <View style={styles.servicesButtonsContainer}>
            {recentServices.map(service => (
              <TouchableOpacity
                key={service.id}
                style={styles.serviceButton}
                onPress={() => handleServicePress(service)}
              >
                <Text style={styles.serviceButtonText}>{service.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* New Service Cards Section */}
          <View style={styles.serviceCardsContainer}>
            {recentServices.map(item => (
              <ServiceCard
                key={item.id}
                title={item.title}
                Icon={item.Icon}
                style={styles.serviceCard}
              />
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
  servicesContainer: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B3B3B',
    marginBottom: 10,
  },
  labels: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#757575',
    marginHorizontal: 20,
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
  // New Service Cards Container styling
  serviceCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  serviceCard: {
    marginBottom: 15,
  },
});