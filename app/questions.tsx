import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
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

const questions = ({posts}) => {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [expandedReplies, setExpandedReplies] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdownId((prevId) => (prevId === id ? null : id));
  };

  const toggleReplies = (postId) => {
    setExpandedReplies((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  return (
    <FlatList
        data={posts}
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
                <Text className="font-[Nunito-ExtraBold]">Question:</Text >
                <Text className="font-[Nunito-SemiBold]"> {item.question}</Text>
              </Text>
              <Text className="font-[Nunito-Medium] text-[14px] text-[#1E1E1E] leading-[20px]">{item.desc}</Text>
            </View>
            <View className="flex-row items-center mt-[24px] gap-[8px]">
              <Text className="font-[Nunito-SemiBold] text-[14px] text-[#8D8D8D] leading-[19px]">Replies</Text >
              <Dot />
              <Text className="font-[Nunito-SemiBold] text-[14px] text-[#8D8D8D] leading-[19px]">{item.reply.length} reply</Text>
              <Text className="font-[Nunito-Bold] text-[14px] text-[#3A643B] leading-[19px] ml-auto" onPress={() => toggleReplies(item.id)}>
              {expandedReplies[item.id] ? "Show less replies" : `View All ${item.reply.length} Replies`}
              </Text>
            </View>
            {/* replies */}
          <View className="bg-[#F3FAF1] rounded-[8px] px-[8px] mt-[16px] py-[11px]">
            <View className="flex-row items-center gap-[13px] px-[6px]">
              <Image
                source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
                className="h-[42] w-[41] rounded-full"
                onError={() => console.log("Error loading image")}
              />
              <View>
                <Text className="font-[Nunito-SemiBold] text-[16px] text-[#3A643B]">{item.reply[0].name}</Text>
                <Text className="font-[Nunito-Medium] text-[14px] text-[#B6B6B6]">{timeAgo(item.reply[0].createdAt)}</Text>
              </View>
              <TouchableOpacity className="ml-auto mr-[2px]">
                <VertOpt height={12.5} />
              </TouchableOpacity>
            </View>
            <Text className="font-[Nunito-SemiBold] mt-[6px] mb-[9px] mr-[15px]">{item.reply[0].answer}</Text>
            {item.reply[0].attachment && (
                <Image
                source={{ uri: item.reply[0].attachment }}
                className="h-[303px] w-auto rounded-[12px] mb-[13px]"
                onError={() => console.log("Error loading image")}
              />
              ) }
            <View className="flex-row items-center gap-[16px]">
              <View className="flex-row items-center">
                <Heart />
                <Text className="font-[Nunito-Medium] text-[12px] text-[#3A643B] ml-[4px]">{item.reply[0].likes}</Text>
              </View>
              <View className="flex-row items-center">
                <Comment />
                <Text className="font-[Nunito-Medium] text-[12px] text-[#9D9D9D] ml-[4px]">{item.reply[0].comments}</Text>
              </View>
            </View>
          </View>

          {/* Show additional replies if expandedReplies is true */}
          {expandedReplies[item.id] && item.reply.slice(1).map((reply, index) => (
            <View key={index} className="bg-[#F3FAF1] rounded-[8px] px-[8px] mt-[10px] py-[11px]">
              <View className="flex-row items-center gap-[13px] px-[6px]">
                <Image
                  source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
                  className="h-[42] w-[41] rounded-full"
                  onError={() => console.log("Error loading image")}
                />
                <View>
                  <Text className="font-[Nunito-SemiBold] text-[16px] text-[#3A643B]">{reply.name}</Text>
                  <Text className="font-[Nunito-Medium] text-[14px] text-[#B6B6B6]">{timeAgo(reply.createdAt)}</Text>
                </View>
                <TouchableOpacity className="ml-auto mr-[2px]">
                  <VertOpt height={12.5} />
                </TouchableOpacity>
              </View>
              <Text className="font-[Nunito-SemiBold] mt-[6px] mb-[9px] mr-[15px]">{reply.answer}</Text>
              {reply.attachment && (
                <Image
                source={{ uri: reply.attachment }}
                className="h-[303px] w-auto rounded-[12px] mb-[13px]"
                onError={() => console.log("Error loading image")}
              />
              ) }
              <View className="flex-row items-center gap-[16px]">
                <View className="flex-row items-center">
                  <Heart />
                  <Text className="font-[Nunito-Medium] text-[12px] text-[#3A643B] ml-[4px]">{reply.likes}</Text>
                </View>
                <View className="flex-row items-center">
                  <Comment />
                  <Text className="font-[Nunito-Medium] text-[12px] text-[#9D9D9D] ml-[4px]">{reply.comments}</Text>
                </View>
              </View>
            </View>
          ))}
            <View className="mt-[24px] mx-[2px] bg-[#EDEDED] h-[1px] w-full" />
          
            <View className="flex-row items-center justify-center my-[16px] gap-[28px]">
              <View className="flex-row items-center">
                <HeartOutlined />
                <Text className="font-[Nunito-Regular] text-[12px] text-[#8D8D8D] ml-[6px]">{item.likes} Likes</Text>
              </View>
              <View className="flex-row items-center">
                <Reply />
                <Text className="font-[Nunito-Regular] text-[12px] text-[#8D8D8D] ml-[6px]">{item.reply.length} Reply</Text>
              </View>
              <View className="flex-row items-center">
                <Saves />
                <Text className="font-[Nunito-Regular] text-[12px] text-[#8D8D8D] ml-[6px]">{item.saves} Saves</Text>
              </View>
            </View>
            
          </View>
        )}
      />
  )
}

export default questions