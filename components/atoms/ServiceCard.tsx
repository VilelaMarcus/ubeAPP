import React from 'react';
import { View, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface ServiceCardProps {
  title: string;
  Icon: React.FC<SvgProps>;
  style?: StyleProp<ViewStyle>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, Icon, style }) => {
  return (
    <View style={[styles.card, style]}>
      <Icon width={30} height={30} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ServiceCard;