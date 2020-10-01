import React from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import ProfilePage from "./ProfilePage"

const HomePage = (props) => {
  return (
    <View style={style.viewStyle}>
      <Image
        source={require("./../../assets/IUT.png")}
        style={style.Image}
      ></Image>
      <Text style={style.textStyle}>Department Of CSE</Text>
      <Text style={style.textStyle2}>Program: SWE</Text>
      <Text></Text>
      <TouchableOpacity
        onPress={function () {
          props.navigation.navigate("Profile");
        }}
      >
        <Text style={style.touchableText}>My Profile</Text>
      </TouchableOpacity>
      <Text></Text>
      <Button
        title="Semesters"
        onPress={function () {
          props.navigation.navigate("Semesters");
        }}
      ></Button>
      <Text></Text>
      <Button
        title="Faculty members"
        onPress={function () {
          props.navigation.navigate("Faculty Members");
        }}
      ></Button>
      <Text></Text>
      <Text></Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },

  textStyle2: {
    fontSize: 25,
  },

  touchableText: {
    fontWeight: "800",
    fontSize: 30,
    borderColor: "aquamarine",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "aquamarine",
  },

  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightcyan",
  },
});

export default HomePage;
