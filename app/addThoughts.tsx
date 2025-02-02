import { View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackIcon from "../components/backIcon.jsx";
import { Image } from 'react-native';
import VideoIcon from '../components/videoIcon.jsx';
import ImageIcon from '../components/imageIcon.jsx';
import FileIcon from '../components/fileIcon.jsx';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import CrossIcon from '../components/crossIcon.jsx';
import PdfIcon from '../components/pdfIcon.jsx';
import * as FileSystem from 'expo-file-system';
import PlayIcon from '../components/playIcon.jsx';
import { postThought } from '../features/thoughtsSlice.js';
import { fetchThoughts } from '../features/thoughtsSlice.js';
import { useDispatch } from 'react-redux';
import { router } from 'expo-router';

const addThoughts = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [uri, setUri] = useState('');
    const [fileType, setFileType] = useState('');
    const [fileName, setFileName] = useState('');
    const [fileSize, setFileSize] = useState('');
    const dispatch = useDispatch();
    const [thought, setThought] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (thought.trim()) {
        dispatch(postThought({ thought }));
        setThought('');
        dispatch(fetchThoughts());
        router.navigate('./thoughts');
        }
    };


      const selectImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: false,
        });
    
        if (!result.canceled) {
          setUri(result.assets[0].uri);
          setFileType('image');
        }
      };
    
      const selectVideo = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Videos,
          allowsEditing: false,
        });
    
        if (!result.canceled) {
            setUri(result.assets[0].uri);
            setFileType('video');
        }
      };
      const selectFile = async () => {
        try {
          const result = await DocumentPicker.getDocumentAsync({
            type: 'application/pdf',
          });
      
          console.log('Document Picker Result:', result); 
      
          if (result.type !== 'cancel') {
            const fileUri = result.uri || result.assets?.[0]?.uri;
            if (!fileUri) {
              console.error('No URI found in result');
              return;
            }
      
            setUri(fileUri);
            setFileType('file');
      
            const name = await getFileNameFromUri(fileUri);
            const size = await getFileSizeFromUri(fileUri);
            setFileName(name);
            setFileSize(size);
          }
        } catch (err) {
          console.error('Error picking document:', err);
        }
      };
      
      const getFileNameFromUri = async (uri) => {
        try {
          const fileInfo = await FileSystem.getInfoAsync(uri);
          return fileInfo.uri ? fileInfo.uri.split('/').pop() : 'Unknown File'; 
        } catch (error) {
          console.error('Error getting file name:', error);
          return 'Unknown File';
        }
      };
      
      const getFileSizeFromUri = async (uri) => {
        try {
          const fileInfo = await FileSystem.getInfoAsync(uri);
          if (fileInfo.size) {
            return fileInfo.size;  // Return the file size in bytes
          } else {
            return 'Unknown Size';
          }
        } catch (error) {
          console.error('Error getting file size:', error);
          return 'Unknown Size';
        }
      };
      const handleTitleChange = (text) => {
        const wordArray = text.trim().split(/\s+/);
        if (wordArray.length <= 50) {
          setTitle(text);
        }
      };

      const handleDescChange = (text) => {
        const wordArray = text.trim().split(/\s+/);
        if (wordArray.length <= 70) {
          setDesc(text);
        }
      };


  return (
    <SafeAreaView className="flex-1 bg-white">
        <StatusBar barStyle="dark-content" className="bg-white"/>
        <View className='flex-row mt-[12px] mb-[16px] items-center px-4'>
            <BackIcon />
            <Text className='font-[Nunito-Medium] text-[16px] text-black ml-[20px]'>Add your thoughts</Text>
        </View>
        <ScrollView className='mb-[30px] px-4' showsVerticalScrollIndicator={false}>
        <View className='flex-row mt-[16px] gap-[15px] items-center'>
            <Image
                source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
                className="h-[40] w-[40] rounded-full"
                onError={() => console.log("Error loading image")}
            />
            <Text className='font-[Nunito-SemiBold] text-[16px] text-black'>Dr. Mathew Adams</Text>
        </View>
        <View className='mt-[24px]'>
            <Text className='absolute font-[Nunito-Medium] ml-[13px] text-[12px] text-[#2E2F2E] z-10 bg-white px-1'>Add title <Text className='text-[#D85454]'>*</Text></Text>
            <TextInput
                className='font-[Nunito-Regular] mt-[8px] text-[14px] text-[#1E1E1E] h-[52px] border-[#D6D6D6] border-[1.5px] rounded-[16px] p-[14px]'
                value={title}
                onChangeText={handleTitleChange}
            />
            {!title && <Text className='absolute font-[Nunito-Medium] text-[12px] text-[#B6B6B6] right-[12px] top-[26px]'>max 50 words</Text>}
        </View>
        <View className='mt-[24px]'>
            <Text className='absolute font-[Nunito-Medium] ml-[13px] text-[12px] text-[#2E2F2E] z-10 bg-white px-1'>Add description <Text className='text-[#D85454]'>*</Text></Text>
            <TextInput
                className=' font-[Nunito-Regular] items-start justify-start mt-[8px] text-[14px] text-[#1E1E1E] h-[170px] border-[#D6D6D6] border-[1.5px] rounded-[16px] p-[14px]'
                value={desc}
                onChangeText={handleDescChange}
                textAlignVertical="top"
                multiline={true}
            />
            {!desc && <Text className='absolute font-[Nunito-Medium] text-[12px] text-[#B6B6B6] right-[12px] bottom-[12px]'>max 70 words</Text>}
        </View>
        <Text className='font-[Nunito-Medium] text-[14px] mt-[29px] mb-[20px] text-[#101010]'>Upload attachments</Text>
        {uri && fileType === 'image' ? (
        <View className='overflow-visible'>
            <Image
                source={{ uri }}
                className='h-[319px] w-auto rounded-[11px]'
                onError={() => console.log("Error loading image")}
            />
            <TouchableOpacity className='absolute right-[-5px] top-[-12px]' onPress={() => setUri('')}>
                <CrossIcon />
            </TouchableOpacity>
        </View> 
      ) : uri && fileType === 'video' ? (
        <View className='overflow-visible'>
            <Image
                source={{ uri }}
                className='h-[319px] w-auto rounded-[11px]'
                onError={() => console.log("Error loading image")}
            />
            <TouchableOpacity className='absolute right-[-5px] top-[-12px]' onPress={() => setUri('')}>
                <CrossIcon />
            </TouchableOpacity>
            <View className='absolute left-[45%] top-[45%]'>
                <PlayIcon />
            </View>
        </View> 
      ) : uri && fileType === 'file' ? (
        <View className='overflow-visible w-[275px] rounded-[5.4px] border-[1px] border-[#E0E0E0] px-[11px] py-[10px]'>
            <View className='flex-row gap-[14px] items-center'>
                <View className='bg-[#EAF2EA] w-[43px] h-[43px] rounded-[5.4px] items-center justify-center'>
                    <PdfIcon />
                </View>
                <View className='flex-1 gap-[1px]'>
                <Text numberOfLines={1}
                    className="font-[Poppins-Medium] text-[13px] text-black"
                    >{fileName}</Text>
                    <View className='flex-row items-center'>
                        <Text className='font-[Poppins-Medium] text-[11px] text-[#8D8D8D]'>{(fileSize / 1000000).toFixed(2)} MB</Text>
                        <View className='bg-[#EDEDED] w-[1px] h-full mx-[8px]' />
                        <Text className='font-[Poppins-Medium] text-[11px] text-[#8D8D8D]'>pdf</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity className='absolute right-[-5px] top-[-12px]' onPress={() => setUri('')}>
                <CrossIcon />
            </TouchableOpacity>
        </View> 
      ) : (
        <View className='flex-row gap-[17px]'>
            <TouchableOpacity onPress={selectVideo} className='h-[96px] flex-1 bg-[#F3FAF1] rounded-[8px] items-center justify-evenly py-2' >
                <VideoIcon />
                <Text className='font-[Nunito-Regular] text-[8px] text-[#2E2F2E]'>Upload .mkv</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={selectImage} className='h-[96px] flex-1 bg-[#F3FAF1] rounded-[8px] items-center justify-evenly py-2' >
                <ImageIcon />
                <Text className='font-[Nunito-Regular] text-[8px] text-[#2E2F2E]'>Upload .jpg or jpeg</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={selectFile} className='h-[96px] flex-1 bg-[#F3FAF1] rounded-[8px] items-center justify-evenly py-2' >
                <FileIcon />
                <Text className='font-[Nunito-Regular] text-[8px] text-[#2E2F2E]'>Upload .pdf</Text>
            </TouchableOpacity>
        </View>
            )}
        
        </ScrollView>
        <TouchableOpacity className='h-[51px] w-auto mt-auto my-[32px] bg-[#3A643B] rounded-[16px] items-center justify-evenly py-2 mx-4' >
            <Text className='font-[Nunito-SemiBold] text-[14px] text-[#FFFFFF]'>Save and proceed</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default addThoughts