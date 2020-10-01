import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const ProfilePage = () => {
  return (
    <View style={style.viewStyle}>
      <Text style={style.textSyle1}></Text>
      <Image
        source={require("./../../assets/profilePic.jpg")}
        style={style.imageStyle}
      ></Image>
      <Text style={style.textSyle1}></Text>
      <Text style={style.textSyle1}></Text>
        <Text>
            <Text style={style.textSyle1}>Name: </Text>
            <Text style={style.textSyle2}>Shah Eftakher Sazid</Text>
        </Text>
        <Text style={style.textSyle1}></Text>
        <Text>
            <Text style={style.textSyle1}>Student ID: </Text>
            <Text style={style.textSyle2}>170042008</Text>
        </Text>
        <Text style={style.textSyle1}></Text>
        <Text>
            <Text style={style.textSyle1}>Room no: </Text>
            <Text style={style.textSyle2}>404, South Hall</Text>
        </Text>
        <Text style={style.textSyle1}></Text>
        <Text>
            <Text style={style.textSyle1}>Email: </Text>
            <Text style={style.textSyle2}>shaheftakher@iut-dhaka.edu</Text>
        </Text>
        <Text style={style.textSyle1}></Text>
        <Text style={style.textSyle1}></Text>
        <Text style={style.textSyle1}></Text>
        <Text style={style.textSyle1}></Text>
        <Text style={style.textSyle1}></Text>
        <Text style={style.textSyle1}></Text>
    </View>
  );
};

const style = StyleSheet.create({
  textSyle1: {
    fontSize: 25,
    fontWeight: "bold",
  },

  textSyle2: {
    fontSize: 20
  },

  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightcyan",
  },

  imageStyle: {
    height: 200,
    width: 200,
  },
});

export default ProfilePage;
