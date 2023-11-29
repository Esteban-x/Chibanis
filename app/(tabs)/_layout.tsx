import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme, View } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Acceuil',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* Premier bouton */}
              <Link href="/contact" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="phone"
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>

              {/* Deuxième bouton */}
              <Link href="/chat" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="comment-o"
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      calendar style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="missions"
        options={{
          title: 'Nos missions',
          tabBarIcon: ({ color }) => <TabBarIcon name="user-md" color={color} />,
        }}
      />
      <Tabs.Screen
        name="planning"
        options={{
          title: 'Planning',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Mon compte',
          tabBarIcon: ({ color }) => <TabBarIcon name="user-circle-o" color={color} />,
        }}
      />
    </Tabs>
  );
}
