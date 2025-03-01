// app/(tabs)/_layout.tsx
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../assets/icons';

const pink = '#FFC0CB'; // Define the pink color

type IconKeys = 'inicio' | 'debitos' | 'destaques' | 'agendamentos' | 'noticias';

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ size, color }) => {
          // Map 'index' to 'inicio'
          const iconKey = route.name === 'index' ? 'inicio' : route.name;
          const IconComponent = icons[iconKey as IconKeys];
          return <IconComponent width={size} height={size} fill={color} color={pink} />;
        },
        tabBarActiveTintColor: '#117AE7',  // Active icons become bluer
        tabBarInactiveTintColor: 'black',  // Inactive icons are black
        tabBarLabelStyle: { fontSize: 11 },
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
