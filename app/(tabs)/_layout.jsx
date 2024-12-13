import { View, Text, Image } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'
import { useColorScheme } from 'nativewind'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gaps-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-sanssemibold' : 'font-sansRegular'} text-xs`} 
                style={{color: '#FFFFFF', textAlign: 'center', flexGrow: 1, marginHorizontal: -8, padding: 0}}
                >
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'orange',
                tabBarStyle:{
                    backgroundColor: 'black',
                    borderTopWidth: 1,
                    borderTopColor: '#232533',
                    height: 90,
                }
            }}
        >
            <Tabs.Screen
            name="home"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                        icon={icons.home}
                        color={color.orange}
                        name="Home"
                        focused={focused}
                    />
                )
            }}
            />
            <Tabs.Screen
            name="search"
            options={{
                title: 'Search',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                        icon={icons.search}
                        color={color.orange}
                        name="Search"
                        focused={focused}
                    />
                )
            }}
            />
            <Tabs.Screen
            name="saved"
            options={{
                title: 'Saved',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                        icon={icons.bookmark}
                        color={color.orange}
                        name="Saved"
                        focused={focused}
                    />
                )
            }}
            />
            <Tabs.Screen
            name="inbox"
            options={{
                title: 'Inbox',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                        icon={icons.message}
                        color={color.orange}
                        name="Inbox"
                        focused={focused}
                    />
                )
            }}
            /><Tabs.Screen
            name="connection"
            options={{
                title: 'Connection',
                headerShown: false,
                tabBarIcon: ({ color, focused, size}) => (
                    <TabIcon
                        icon={icons.connection}
                        color={color.orange}
                        name="Connect"
                        size={size.xs}
                        focused={focused}
                    />
                )
            }}
            />
        </Tabs>

    </>
  )
}

export default TabsLayout