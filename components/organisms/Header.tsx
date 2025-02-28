// Header.tsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserIcon from '../../assets/icons/user.svg'; // Import the SVG as a component

const Header: React.FC = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.container}>
            {/* Logo on the left */}
            <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
            />
            {/* User icon on the right as an SVG component */}
            <UserIcon width={24} height={24} fill="black" style={styles.userIcon} />
        </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  // Only apply background color to the top safe area
    safeArea: {
        backgroundColor: '#fff', 
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48,
        paddingHorizontal: 1,
    },
    logo: {
        width: 87,
        height: 48,
        left: 8,
    },
    userIcon: {
        marginRight: 12,
    },
});

export default Header;
