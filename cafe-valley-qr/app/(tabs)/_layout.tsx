import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6b4423',
        tabBarInactiveTintColor: '#8a7f72',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Website',
          tabBarIcon: ({ color, size }) => <Ionicons name="globe-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="github"
        options={{
          title: 'GitHub',
          tabBarIcon: ({ color, size }) => <Ionicons name="logo-github" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="linkedin"
        options={{
          title: 'LinkedIn',
          tabBarIcon: ({ color, size }) => <Ionicons name="logo-linkedin" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="x"
        options={{
          title: 'X',
          tabBarIcon: ({ color, size }) => <Ionicons name="logo-twitter" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
