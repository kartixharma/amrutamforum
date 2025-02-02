import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Animated, Dimensions } from 'react-native';

export default function PillSwitch({ options, onSelect, defaultSelected }) {
  const [selected, setSelected] = useState(defaultSelected || options[0]);
  const [translateX] = useState(new Animated.Value(0));

  const windowWidth = Dimensions.get('window').width;
  const pillWidth = (windowWidth - 48)/ 2 ;

  const handlePress = (option) => {
    setSelected(option);
    onSelect(option);

    const newTranslateX = option === options[1] ? pillWidth : 0;

    Animated.timing(translateX, {
      toValue: newTranslateX,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className="w-auto m-[24px] h-[40px] rounded-[12px] bg-[#FFFFFF] overflow-hidden relative">
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: pillWidth,
          height: '100%',
          backgroundColor: '#0C140C',
          borderRadius: 8,
          transform: [{ translateX }],
        }}
      />

      <View className="flex-row w-full h-full">
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            className="flex-1 justify-center items-center"
            onPress={() => handlePress(option)}
          >
            <Text className={`text-[14px] font-[Nunito-Medium] ${selected === option ? 'text-white' : 'text-[#2E2F2E]'}`}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
