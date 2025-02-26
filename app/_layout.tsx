// app/_layout.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';
import Header from '../components/organisms/Header';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Header />
        <Slot />
      </SafeAreaProvider>
    </Provider>
  );
}
