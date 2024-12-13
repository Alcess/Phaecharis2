import { View, Text, Image} from 'react-native'
import React from 'react'

import { images } from '../constants'

const EmptyState = ({title, subtitle}) => {
  return (
    <View className="justify-center items-center px-4">
      <Image source={images.empty} className="w-48 h-48" resizeMode="contain" />

        <Text className="font-sansMedium text-sm text-grey-100">
         {subtitle}
        </Text>
        <Text className="text-xl text-center font-sanssemiBold text-black mt-2">
        {title}
        </Text>
    </View>
  )
}

export default EmptyState