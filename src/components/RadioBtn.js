import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';


const RadioBtn = ({ options, onChange, selectedOption, dotStyle, textStyle }) => {
  const handleOptionSelect = (option) => {
    onChange(option);
  };

  return (
    <View>
      {options.map((option, index) => (
        <TouchableOpacity key={index} onPress={() => handleOptionSelect(option)}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ height: 20, width: 20, borderRadius: 10, borderWidth: 2, borderColor: 'grey', justifyContent: 'center', alignItems: 'center', marginRight: 10, marginVertical: 4 }}>
              {selectedOption === option && <View style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: '#0D6EFD', ...dotStyle }} />}
            </View>
            <Text style={{ fontSize: 16, color: 'black', ...textStyle }}>{option}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioBtn;
