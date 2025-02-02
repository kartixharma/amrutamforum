import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, BackHandler } from 'react-native';
import AddAnswerIcon from './addAnswerIcon.jsx';
import ReportIcon from './reportIcon.jsx';

export default function DropdownMenu({onSelect, onClose }) {

  const options = ['Add answer', 'Report']

  const handleSelectOption = (option) => {
    onSelect(option);
  };

  const handleBackPress = () => {
    onClose();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

  return (
    <View className="absolute top-4 right-0 w-[144px] bg-white rounded-[8px] shadow-lg z-50 gap-[8px] pt-[12px]">
        {options.map((option, index) => (
        <TouchableOpacity
            key={index}
            onPress={() => handleSelectOption(option)}
            className="pl-5 pb-[12px] border-b border-[#EDEDED]"
        >
          <View className='flex-row items-center gap-[14px]'>
            {option === 'Add answer' ? <AddAnswerIcon /> : <ReportIcon />}
            <Text className="font-[Nunito-Regular] text-[12px] text-[#1E1E1E]">{option}</Text>
          </View>
        </TouchableOpacity>
        ))}
    </View>
  );
}
