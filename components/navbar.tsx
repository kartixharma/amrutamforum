import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import HomeIcon from './homeIcon'
import AppointmentIcon from './appointmentIcon'
import Patient from './patient'
import Bulletin from './bulletin'
import Payment from './payment'


const Navbar = () => {
  const router = useRouter();

  return (
    <View className="bg-[#0C140C] flex-row justify-evenly items-center h-[77px] rounded-t-[32px]">
      <TouchableOpacity className="items-center p-1">
       <HomeIcon />
        <Text className="font-[Nunito-Regular] text-[10.75px] text-[#9DB29D] mt-[6px]">Home</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center p-1">
        <AppointmentIcon />
        <Text className="font-[Nunito-Regular] text-[10.75px] text-[#9DB29D] mt-[6px]">Appointment</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center p-1">
        <Patient />
        <Text className="font-[Nunito-Regular] text-[10.75px] text-[#9DB29D] mt-[6px]">Patient</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center p-1">
        <Bulletin />
        <Text className="font-[Nunito-Regular] text-[10.75px] text-[#9DB29D] mt-[6px]">Bulletin</Text>
      </TouchableOpacity>

      <TouchableOpacity className="items-center p-1">
        <Payment />
        <Text className="font-[Nunito-Regular] text-[10.75px] text-[#9DB29D] mt-[6px]">Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
