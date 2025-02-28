import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface ServiceCardProps {
  title: string;
  Icon: React.FC<{ width: number; height: number; fill?: string; style?: StyleProp<ViewStyle> }>;
  style?: StyleProp<ViewStyle>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, Icon, style }) => {
  return (
    <View style={[styles.card, style]}>
      {/* Icon rendered as an SVG component */}
      <Icon width={24} height={24} fill="#117AE7" style={styles.icon} />
      {/* Title below the icon */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  card: {
    width: 130,
    height: 86,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    color: '#000',
  },
});
