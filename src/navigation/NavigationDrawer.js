import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Products from "../screens/Products";
import Details from "../screens/Details";

const Drawer = createDrawerNavigator();

 export default function NavigationDrawer() {
    return(
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="Products" component={Products} />
          <Drawer.Screen name="Details" component={Details} />
        </Drawer.Navigator>
    );
}

