import React from 'react';
import { View, TextInput, StyleSheet, ViewStyle } from 'react-native';
import SeachIcon from '../../assets/icons/search.svg';
import MicIcon from '../../assets/icons/microfone.svg'; 

interface SearchInputProps {
  placeholder?: string;
  style?: ViewStyle;
  onChangeText?: (text: string) => void;
  value?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'EX: Pagar IPTU atrasado',
  style,
  onChangeText,
  value,
}) => {
  return (
    <View style={[styles.container, style]}>
      {/* Left Icon: Search */}
      <SeachIcon width={20} height={20} fill="#95a5a6" style={styles.icon} />

      {/* Text Input */}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#95a5a6" // Ensure placeholder color is visible
        onChangeText={onChangeText}
        value={value}
      />

      {/* Right Icon: Microphone */}
      <MicIcon width={20} height={20} fill="#95a5a6" style={styles.icon} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9', // Adjust to your design
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    marginHorizontal: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});