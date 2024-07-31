import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabsRoutes() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline" } size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "search-sharp" : "search-outline"} size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          title: 'Reels',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="local-movies" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="bag"
        options={{
          title: 'Bag',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "bag-handle-sharp" : "bag-handle-outline"} size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name={focused ? "user-circle-o" : "user-circle"} size={24} color="black" />
          ),
          headerRight: () => <View style={{paddingRight: 15}}>
            <FontAwesome name="plus-square-o" size={24} color="black" />
          </View>
        }}
      />
    </Tabs>
  )
}