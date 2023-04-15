import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Header from "./src/components/Header/Header";
import Tasks from "./src/components/Tasks/Tasks";
import Form from "./src/components/Form/Form";
import styles from "./src/styles/main";
import uuid from "react-uuid";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import AppLoader from "./src/components/AppLoader/AppLoader";
import { Provider, useDispatch } from 'react-redux'
import { store } from './src/redux/store';

// Creates the tab navigator object.
const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  // State for the list of tasks.
  // const [tasks, setTasks] = useState([
  //   {
  //     id: uuid(),
  //     name: "Sagar Gurung",
  //     phone: "519600900",
  //     email: "sagar@gmail.com",
  //     note: "Friend",
  //     favorite: false,
  //   },
  //   {
  //     id: uuid(),
  //     name: "Anita Magar",
  //     phone: "519700200",
  //     email: "anita@gmail.com",
  //     note: "Friend",
  //     favorite: false,
  //   },
  // ]);



  // Include a new task to the list.
 

  return (
    <Provider store={store}>
      <AppLoader/>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Header />

          <Tab.Navigator>
            <Tab.Screen
              name="List"
              component={Tasks}
              options={{
                headerShown: false,
                title: "Contact List",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="phone" size={size} color="#008080" />
                ),
              }}
            >
              {/* {(props) => (
                <Tasks
                  {...props}
                  tasks={tasks}
                  onStatusChange={handleStatusChange}
                  onTaskRemoval={handleTaskRemoval} // Update this line
                />
              )} */}
            </Tab.Screen>

            <Tab.Screen
              name="Add"
              component={Form}
              options={{
                title: "Add Contact",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#008080",
                },
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="add-user" size={size} color="#008080" />
                ),
              }}
            >
              
            </Tab.Screen>
            <Tab.Screen
              name="Setting"
              component={Form}
              options={{
                title: "Notification",
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#008080",
                },
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="notification" size={size} color="#008080" />
                ),
              }}
            >
              
            </Tab.Screen>
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}
