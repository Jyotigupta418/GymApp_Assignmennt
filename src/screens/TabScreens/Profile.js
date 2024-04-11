import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, ImageBackground, TouchableOpacity, } from 'react-native';
import { width, height } from '../../utils/dimensions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { CustomPicker } from '../../components/CustomPicker';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import RadioBtn from '../../components/RadioBtn';


const Profile = ({ navigation }) => {
  const [backgroundImg, setBackgroundImg] = useState(require('../../assets/1.jpg'));
  const [profileImg, setProfileImg] = useState(require('../../assets/2.jpg'));
  const [heightValue1, setHeightValue1] = useState('');
  const [selectedUnit1, setSelectedUnit1] = useState('foot');
  const [heightValue2, setHeightValue2] = useState('');
  const [selectedUnit2, setSelectedUnit2] = useState('inch');
  const [weightValue1, setweightValue1] = useState('');
  const [selectedUnitWeight1, setSelectedUnitWeight1] = useState('Kilogram');
  const [type, setType] = useState('Male');

  const handleCameraBackground = async () => {
    try {
      const options = {
        mediaType: 'photo',
        source: ['camera', 'library'],
      };

      const result = await launchImageLibrary(options);

      if (result.didCancel) {
        console.log('User canceled the action');
        return;
      }

      if (result.errorMessage) {
        console.error('Error:', result.errorMessage);
        return;
      }

      const source = { uri: result.assets[0].uri };
      setBackgroundImg(source);
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };

  const handleCameraProfile = async () => {
    try {
      const options = {
        mediaType: 'photo',
        source: ['camera', 'library'],
      };

      const result = await launchImageLibrary(options);

      if (result.didCancel) {
        console.log('User canceled the action');
        return;
      }

      if (result.errorMessage) {
        console.error('Error:', result.errorMessage);
        return;
      }

      const source = { uri: result.assets[0].uri };
      setProfileImg(source);
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  };

  const heightOptions1 = ['foot', 'mtr', 'in'];
  const heightOptions2 = ['inch', 'cm', 'in'];
  const weightOptions = ['Kilogram', 'Gram', 'Pound'];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: height * 0.15, marginBottom: 16 }}>
        <ImageBackground source={backgroundImg ? backgroundImg : require('../../assets/1.jpg')} style={{ width: '100%', height: width * 0.23, }}>
          <Entypo name="chevron-small-left" size={width * 0.1} color="black" style={{ position: 'absolute', top: 10, left: 10 }} onPress={() => navigation.goBack()} />
          <TouchableOpacity onPress={handleCameraBackground} style={{ backgroundColor: 'rgba(0,0,0,0.8)', position: 'absolute', top: 60, right: 10, height: 35, width: 35, borderRadius: 35 / 2, justifyContent: 'center', alignItems: 'center' }}>
            <Feather name="camera" size={width * 0.06} color="orange" />
          </TouchableOpacity>

          <Image source={profileImg ? profileImg : require('../../assets/2.jpg')} style={{ position: 'absolute', top: 45, width: width * 0.2, height: width * 0.2, alignSelf: 'center', borderRadius: 50, borderWidth: 1.5, borderColor: 'gray', overflow: 'hidden', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}></Image>

          <TouchableOpacity onPress={handleCameraProfile} style={{ backgroundColor: 'rgba(0,0,0,0.6)', position: 'absolute', top: width * 0.27, right: width * 0.45, height: 35, width: 35, borderRadius: 35 / 2, justifyContent: 'center', alignItems: 'center' }}>
            <Feather name="camera" size={width * 0.06} color="orange" />
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 50, marginHorizontal: width * 0.05, marginTop: 5 }}>

        <View style={{ marginTop: 11, padding: 10, backgroundColor: '#cefad0', borderWidth: 1.5, borderColor: '#83f28f', borderRadius: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <Text style={{ color: 'darkgreen', fontWeight: 'bold' }}>Yoga</Text>
              <Entypo name="dot-single" size={width * 0.05} color="darkgreen" />
              <Text style={{ color: 'darkgreen', fontWeight: 'bold' }}>Gym Active</Text>
            </View>
            <Text style={{ color: 'orange' }}>Expire on 20 March 2024</Text>
          </View>

          <Text style={{ color: 'black' }}>Star Gym</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>Bi****, Near flyover Na** Road, 110002</Text>

            <Text style={{ color: 'darkgreen', fontWeight: 'bold', fontSize: 16 }}>र 3099/-</Text>
          </View>
        </View>

        <Text style={{ marginTop: 2, marginBottom: 11, color: 'black' }}>2 more active plan <Text style={{ color: 'blue' }}>view</Text> </Text>

        <Text style={styles.label}>User Name</Text>
        <TextInput placeholder='pradeep321' placeholderTextColor={'gray'} style={styles.inputField} />
        <Text style={styles.label}>Name</Text>
        <TextInput placeholder='Pradeep' placeholderTextColor={'gray'} style={styles.inputField} />

        <View style={{ flexDirection: 'row', marginBottom: 11 }}>

          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={styles.label}>Height</Text>
            <View style={{ flexDirection: 'row', paddingHorizontal: width * 0.01, borderWidth: 1.5, borderColor: 'gray', borderRadius: 8 }}>
              <TextInput
                placeholder='5'
                placeholderTextColor={'gray'}
                style={[styles.inputField2]}
                keyboardType="numeric"
                value={heightValue1}
                onChangeText={setHeightValue1}
              />

              <CustomPicker
                value={selectedUnit1}
                options={heightOptions1}
                onSelect={(option) => setSelectedUnit1(option)}
              />

              <TextInput
                placeholder='5'
                placeholderTextColor={'gray'}
                style={[styles.inputField2, { marginLeft: width * 0.01 }]}
                keyboardType="numeric"
                value={heightValue2}
                onChangeText={setHeightValue2}
              />

              <CustomPicker
                value={selectedUnit2}
                options={heightOptions2}
                onSelect={(option) => setSelectedUnit2(option)}
              />
            </View>
          </View>

          <View style={{ flex: 1, }}>
            <Text style={styles.label}>Width</Text>
            <View style={{ flexDirection: 'row', paddingHorizontal: width * 0.01, paddingRight: 10, justifyContent: 'space-between', borderWidth: 1.5, borderColor: 'gray', borderRadius: 8 }}>
              <TextInput
                placeholder='5'
                placeholderTextColor={'gray'}
                style={[styles.inputField2]}
                keyboardType="numeric"
                value={weightValue1}
                onChangeText={setweightValue1}
              />

              <CustomPicker
                style={{ width: '90%' }}
                modalContainerStyle={{ width: '48%' }}
                value={selectedUnitWeight1}
                options={weightOptions}
                onSelect={(option) => setSelectedUnitWeight1(option)}
              />
            </View>
          </View>
        </View>

        {/* radiobtns */}

        <Text style={styles.label}>Gender</Text>
        <View style={{ flexDirection: 'row', marginBottom: 11, justifyContent: 'space-between' }}>
          <RadioBtn
            options={['Male']}
            onChange={(selectedType) => setType(selectedType)}
            selectedOption={type}
            dotStyle={{ backgroundColor: 'orange' }}
            textStyle={{ fontSize: width * 0.035, }}
          />
          <RadioBtn
            options={['Female']}
            onChange={(selectedType) => setType(selectedType)}
            selectedOption={type}
            dotStyle={{ backgroundColor: 'orange' }}
            textStyle={{ fontSize: width * 0.035, }}
          />
          <RadioBtn
            options={['Other']}
            onChange={(selectedType) => setType(selectedType)}
            selectedOption={type}
            dotStyle={{ backgroundColor: 'orange' }}
            textStyle={{ fontSize: width * 0.035, }}
          />
        </View>


        <Text style={styles.label}>Fitness Goal</Text>
        <TextInput placeholder='Body building' placeholderTextColor={'gray'} style={styles.inputField} />
        <Text style={styles.label}>Favourite Exercise</Text>
        <TextInput placeholder='Push up' placeholderTextColor={'gray'} style={styles.inputField} />
        <Text style={styles.label}>Workout Frequency</Text>
        <TextInput placeholder='at least 3-4 workouts per week' placeholderTextColor={'gray'} style={styles.inputField} />
        <Text style={styles.label}>Medical Condition</Text>
        <TextInput placeholder='None, heart disease, diabetes, etc' placeholderTextColor={'gray'} style={{ ...styles.inputField }} numberOfLines={2} />
        <Text style={styles.label}>Allergies</Text>
        <TextInput placeholder='None , eggs, milk, peanuts, etc' placeholderTextColor={'gray'} style={styles.inputField} />

      </ScrollView>

    </View>
  );
};

export const styles = StyleSheet.create({
  label: {
    fontSize: width * 0.035,
    fontWeight: '500',
    color: '#1a1a1a',
    fontFamily: 'sans-serif',
    marginBottom: 2
  },
  inputField: {
    fontSize: width * 0.032,
    fontFamily: 'sans-serif',
    color: '#1a1a1a',
    borderWidth: 1.5,
    borderColor: 'gray',
    borderRadius: 8,
    marginBottom: 11,
    height: height * 0.056,
    paddingHorizontal: width * 0.02
  },
  inputField2: {
    fontSize: width * 0.032,
    fontFamily: 'sans-serif',
    color: '#1a1a1a',
    height: height * 0.056
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.056,
  },
  selectedValue: {
    fontSize: width * 0.035,
    fontFamily: 'sans-serif',
    color: '#1a1a1a'
  },
  dropdownIcon: {
    marginLeft: width * 0.03
  },
  modalContainer: {
    position: 'absolute',
    right: 10,
    width: width * 0.12,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: 'gray'
  },
  option: {
    paddingVertical: 8,
    alignItems: 'center'
  },
  optionText: {
    fontSize: width * 0.035,
    fontFamily: 'sans-serif',
    color: '#1a1a1a'
  }
});

export default Profile;
