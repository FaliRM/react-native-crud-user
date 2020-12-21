import React from 'react';
import { Input } from 'react-native-elements';

interface Props {
  label: string;
  placeholder: string;
  onChangeText: (email: string) => void;
  value: string;
  secureTextEntry?: boolean;
}

const CardItem = ({
  label,
  placeholder,
  onChangeText,
  value,
  secureTextEntry = false,
}: Props) => (
  <Input
    label={label}
    onChangeText={onChangeText}
    value={value}
    placeholder={placeholder}
    autoCorrect={false}
    secureTextEntry={secureTextEntry}
  />
);

export default CardItem;
