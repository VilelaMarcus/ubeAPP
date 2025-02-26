import React from 'react';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { icons } from '../../assets/icons'; // <--- central icon mapping

type IconKeys = 'inicio' | 'debitos' | 'destaques' | 'agendamentos' | 'noticias';

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ size }) => {
          const iconKey = route.name === 'index' ? 'inicio' : route.name;
          const iconSource = icons[iconKey as IconKeys];

          return (
            <Image
              source={iconSource}
              style={{
                width: size,
                height: size,
                tintColor: 'black', // force black
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: { fontSize: 12 },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Início' }} />
      <Tabs.Screen name="debitos" options={{ title: 'Débitos' }} />
      <Tabs.Screen name="destaques" options={{ title: 'Destaques' }} />
      <Tabs.Screen name="agendamentos" options={{ title: 'Agendamentos' }} />
      <Tabs.Screen name="noticias" options={{ title: 'Notícias' }} />
    </Tabs>
  );
}
