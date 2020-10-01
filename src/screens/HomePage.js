import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, Image } from "react-native";

const HomePage = () => {
  return (
    <View
    style={style.viewStyle}
    >
        <Image
        source = {require("./../../assets/IUT.png")}
        style={style.Image}
        ></Image>
      <Text>HomePage</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "black",
  },

  viewStyle: {
    justifyContent: "center",
    alignItems: "center"
  },

  imageStyle: {

  }
});

export default HomePage;
