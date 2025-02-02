import { ActivityIndicator, FlatList, Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Circle from "../components/circle.jsx";
import * as Font from 'expo-font';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/postsSlice.js';
import { fetchThoughts } from '../features/thoughtsSlice.js';
import PillSwitch from "../components/pillSwitch.jsx";
import Questions from "./questions.tsx";
import Thoughts from "./thoughts.tsx";

export default function Index() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);
  const { thoughts, tstatus, terror } = useSelector((state) => state.thoughts);
  
  const [selectedOption, setSelectedOption] = useState('Questions');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (status === 'idle') dispatch(fetchPosts());
    if (tstatus === 'idle') dispatch(fetchThoughts());
    
  }, [dispatch, status, tstatus]);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf'),
        'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
        'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
        'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
        'Nunito-ExtraBold': require('../assets/fonts/Nunito-ExtraBold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf')
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  if (status === 'loading' || tstatus === 'loading') return <View className="flex-1"><ActivityIndicator size="large" color="#3A643B" /></View>;
  if (status === 'failed') return <Text style={{ flex:1, color: 'red' }}>Error: {error}</Text>;
  if (tstatus === 'failed') return <Text style={{ color: 'red' }}>Error: {terror}</Text>;


  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFA]">
      <StatusBar barStyle="dark-content" className="bg-[#EAF2EA]"/>
      <View className="bg-[#EAF2EA] rounded-b-[42px] h-[188px] overflow-hidden">
        <Circle style={{ position: 'absolute', right: 0, top: 0 }} circleProps={{cx: 96, cy: -8, r: 96}} width={192} height={88}/>
        <Circle style={{position: "absolute", right: 0, bottom: 0}} circleProps={{cx: 96, cy: 96, r: 96}} width={159} height={71} top={117}/>
        <Text className="top-[48px] left-[15px] font-[Nunito-Medium] text-[29px]">Forum</Text>
      </View>
       <PillSwitch
        options={['Questions', 'Thoughts']}
        onSelect={handleOptionSelect}
        defaultSelected="Questions"
      />
      {selectedOption === 'Questions' && <Questions posts={posts} /> || <Thoughts thoughts={thoughts}/>}
      
    </SafeAreaView>
  );
}
