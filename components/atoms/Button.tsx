// components/atoms/Button.tsx
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import { theme } from '../../theme/theme';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object;
  textStyle?: object;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.medium,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: theme.typography.fontSize.medium,
    fontWeight: 'bold',
  },
});

export default Button;
