import { View, Text, FlatList, Image, Alert, TouchableOpacity, Touchable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'
import { images } from '../../constants'
import RecentJob from '../../components/RecentJob'
import EmptyState from '../../components/EmptyState'
import FindYourJob from '../../components/FindYourJob'
import Workshops from '../../components/Workshops'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'expo-router'


const Home = () => {
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
      <FlatList
        data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-3xl" >{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-0 px-2 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-sansBold text-sm text-grey-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-sansBold text-black">
                  Lance Gerald Feranco.
                </Text>
              </View>
              <View className="mt-1.5 flex-row items-center">
                <TouchableOpacity>
                <Image
                  source={images.homeprofile}
                  className="w-12 h-12 mr-2" // Adjust width, height, and margin as needed
                  resizeMode='contain'
                />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                  source={icons.Notification}
                  className="w-6 h-6" // Adjust width and height as needed
                  resizeMode='contain'
                />
                </TouchableOpacity>
              </View>
              </View>
              <View className="bg-gray-200 p-2 rounded">
                <View className="flex-row items-center justify-between" style={{flexShrink: 1, maxWidth: '99%'}}>
                <Text className="text-base font-sansBold text-black">
                  Recent Job List
                  </Text>
                  <Link href="/MoreJobs">
                    <Text className="text-sm font-sansRegular text-black">
                     See More
                    </Text>
                  </Link>
                  </View>
              </View>
              <View className="w-full flex-1 pt-5 pb-8">
                  <RecentJob posts={[{ id: 1}, { id: 2 }, { id: 3 }] ?? []} />
                    </View>
              <View className="bg-gray-200 p-2 rounded">
              <View className="flex-row items-center justify-between" style={{flexShrink: 1, maxWidth: '99%'}}>
              <Text className="text-base font-sansBold text-black">
                  Find Your Job
                  </Text>
                  <Link href="/MoreJobs">
                    <Text className="text-sm font-sansRegular text-black">
                     See More
                    </Text>
                  </Link>
                  </View>
              </View>
              <View className="w-full flex-1 pt-5 pb-8">
                  <FindYourJob posts={[{ id: 1}, { id: 2 }, { id: 3 }] ?? []} />
                    </View>
              <View className="bg-gray-200 p-2 rounded">
              <View className="flex-row items-center justify-between" style={{flexShrink: 1, maxWidth: '99%'}}>
              <Text className="text-base font-sansBold text-black">
                  Find Your Job
                  </Text>
                  <Link href="/Workshopsexpand">
                    <Text className="text-sm font-sansRegular text-black">
                     See More
                    </Text>
                  </Link>
                  </View>
              </View>
              <View className="w-full flex-1 pt-5 pb-8">
                  <Workshops posts={[{ id: 1}, { id: 2 }, { id: 3 }] ?? []} />
                    </View>
              </View>
              

        )}

      />
    </SafeAreaView>
  )
}

export default Home