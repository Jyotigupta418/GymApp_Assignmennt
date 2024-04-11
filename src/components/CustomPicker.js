import React, { useState } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { width, } from '../utils/dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {styles} from "../screens/TabScreens/Profile"

export const CustomPicker = ({ value, options, onSelect, style, modalContainerStyle }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
     <View style={{flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{...styles.pickerContainer, ...style}}>
        <Text style={styles.selectedValue}>{value}</Text>
        <FontAwesome5 name="caret-down" size={width * 0.035} color="gray" style={styles.dropdownIcon} />
      </TouchableOpacity>

      {modalVisible && (
        <View style={{...styles.modalContainer, ...modalContainerStyle}}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                onSelect(option);
                setModalVisible(false);
              }}
              style={styles.option}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};