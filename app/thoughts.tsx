import { View, Text, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Dot from "../components/dot.jsx";
import Heart from "../components/heart.jsx";
import HeartOutlined from "../components/heartOutlined.jsx";
import Reply from "../components/reply.jsx";
import Saves from "../components/saves.jsx";
import Comment from "../components/comment.jsx";
import { timeAgo } from '../utils/timeAgo.js';
import VertOpt from "../components/vertOpt.jsx";
import DropDownMenu from "../components/dropdown.jsx";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useRouter } from 'expo-router';

const Thoughts = ({thoughts}) => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [expandedComments, setExpandedComments] = useState({});
  const [text, setText] = useState('');

  const navigateToAddThoughts = () => {
    router.push("./addThoughts");
  };

  const toggleDropdown = (id) => {
    setOpenDropdownId((prevId) => (prevId === id ? null : id));
  };

  const toggleComments = (thoughtId) => {
    setExpandedComments((prevState) => ({
      ...prevState,
      [thoughtId]: !prevState[thoughtId],
    }));
  };

  return (
    <View className='flex-1'>
      <TouchableOpacity onPress={navigateToAddThoughts} className='absolute right-[24px] bottom-[24px] shadow-xl bg-[#3A643B] rounded-full size-[56px] z-50 items-center justify-center'>
        <AntDesign name="plus" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    <FlatList
        data={thoughts}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() =><View className="bg-[#EDEDED] h-[1px] w-full mb-[30px]" />}
        renderItem={({ item }) => (
          <View className="mx-[16px]">
            <View className="gap-[12px]">
              <View className="flex-row items-center gap-[18px]">
                <Image
                  source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
                  className="h-[44] w-[44] rounded-full"
                  onError={() => console.log("Error loading image")}
                />
                <View >
                  <Text className="font-[Nunito-Regular] text-[16px] text-[#1E1E1E]">{item.name}</Text>
                  <Text className="font-[Nunito-SemiBold] text-[14px] text-[#8D8D8D]">{timeAgo(item.createdAt)}</Text>
                </View>
                {openDropdownId === item.id && (
                    <DropDownMenu onSelect={(option) => toggleDropdown(null)} onClose={() => toggleDropdown(null)} />
                  )}
                <TouchableOpacity className="ml-auto pr-[2px] pl-4" onPress={() => toggleDropdown(item.id)}>
                  <VertOpt height={14}/>
                </TouchableOpacity>
              </View>
              <Text className="text-[16px] text-[#2E2F2E] leading-[28px]">
                <Text className="font-[Nunito-ExtraBold]">Thought:</Text >
                <Text className="font-[Nunito-SemiBold]"> {item.thought}</Text>
              </Text>
              <Text className="font-[Nunito-Medium] text-[14px] text-[#1E1E1E] leading-[20px]">{item.desc}</Text>
              <Image
                  source={{ uri: item.attachment}}
                  className="h-[300px] w-auto rounded-[12px] my-[10px]"
                  onError={() => console.log("Error loading image")}
                />
            </View>
            {/* comments */}
            {item.comments && item.comments.length > 0 && (
              <>
          <View className="my-[14px]">
            <View className="flex-row gap-[9px]">
              <Image
                source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
                className="h-[30px] w-[30px] rounded-full"
                onError={() => console.log("Error loading image")}
              />
              <View className='flex-1 gap-[4px] mr-[15px]'>
                <View className='flex-row gap-[8px] items-center'>
                  <Text className="font-[Nunito-SemiBold] text-[12px] text-[#3A643B] leading-[20px]">{item.comments[0].name}</Text>
                  <Dot />
                  <Text className="font-[Nunito-SemiBold] text-[12px] text-[#8D8D8D]">{timeAgo(item.comments[0].createdAt)}</Text>
                  <TouchableOpacity className="ml-auto">
                    <VertOpt height={12.5} />
                  </TouchableOpacity>
                </View>
                <Text className="font-[Nunito-Regular] text-[10px] text-[#2E2F2E] leading-[17px]">{item.comments[0].answer}</Text>
                <View className="flex-row items-center">
                  <Heart />
                  <Text className="font-[Nunito-Medium] text-[12px] text-[#3A643B] ml-[4px]">{item.comments[0].likes}</Text>
                </View>
              </View>
            </View>        
          </View>

          {expandedComments[item.id] && item.comments.slice(1).map((comment, index) => (
          <View key={comment.id || index} className="mb-[14px]">
          <View className="flex-row gap-[9px]">
            <Image
              source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
              className="h-[30px] w-[30px] rounded-full"
              onError={() => console.log("Error loading image")}
            />
            <View className='flex-1 gap-[4px] mr-[15px]'>
            <View className='flex-row gap-[8px] items-center'>
              <Text className="font-[Nunito-SemiBold] text-[12px] text-[#3A643B] leading-[20px]">{comment.name}</Text>
              <Dot />
              <Text className="font-[Nunito-SemiBold] text-[12px] text-[#8D8D8D]">{timeAgo(comment.createdAt)}</Text>
              <TouchableOpacity className="ml-auto">
                <VertOpt height={12.5} />
              </TouchableOpacity>
            </View>
            <Text className="font-[Nunito-Regular] text-[10px] text-[#2E2F2E] leading-[17px]">{comment.answer}</Text>
            <View className="flex-row items-center">
              <Heart />
              <Text className="font-[Nunito-Medium] text-[12px] text-[#3A643B] ml-[4px]">{comment.likes}</Text>
            </View>
            </View>
            
          </View>        
        </View>
          ))}
            <Text className="font-[Nunito-Bold] text-[14px] text-[#3A643B] leading-[19px]" onPress={() => toggleComments(item.id)}>
              {expandedComments[item.id] ? "Show less comments" : `View All ${item.comments.length} Comments`}
            </Text>
            </>
            )}
            <View className='flex-row items-center my-[24px] gap-[8px]'>
              <Image
                source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
                className="h-[41px] w-[41px] rounded-full"
                onError={() => console.log("Error loading image")}
              />
              <View className='flex-1'>
                <TextInput
                  className='font-[Nunito-Regular] text-[12px] text-[#1E1E1E] h-[30px] border-[#E0E0E0] border-[1px] rounded-[11px] px-[13px] py-[5px]'
                  placeholder='Add your comment'
                  value={text}
                  onChangeText={setText}
                />
              </View>
            </View>
            <View className="mx-[2px] bg-[#EDEDED] h-[1px] w-full" />
          
            <View className="flex-row items-center justify-center my-[16px] gap-[28px]">
              <View className="flex-row items-center">
                <HeartOutlined />
                <Text className="font-[Nunito-Regular] text-[12px] text-[#8D8D8D] ml-[6px]">{item.likes} Likes</Text>
              </View>
              <View className="flex-row items-center">
                <Reply />
                <Text className="font-[Nunito-Regular] text-[12px] text-[#8D8D8D] ml-[6px]">{item.comments.length} Comments</Text>
              </View>
              <View className="flex-row items-center">
                <Saves />
                <Text className="font-[Nunito-Regular] text-[12px] text-[#8D8D8D] ml-[6px]">{item.saves} Saves</Text>
              </View>
            </View>
            
          </View>
        )}
      />
      </View>
  )
}

export default Thoughts