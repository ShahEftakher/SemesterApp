import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";

const SemesterPage = () => {
  return (
    <View style={style.viewStyle}>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <TouchableOpacity
        onPress={function () {
          console.log("go to 1st semester");
        }}
      >
        <Text style={style.textStyle}>First Semester</Text>
      </TouchableOpacity>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <TouchableOpacity
        onPress={function () {
          console.log("go to 2nd semester");
        }}
      >
        <Text style={style.textStyle}>Second Semester</Text>
      </TouchableOpacity>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <TouchableOpacity
        onPress={function () {
          console.log("go to 3rd semester");
        }}
      >
        <Text style={style.textStyle}>Third Semester</Text>
      </TouchableOpacity>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 35,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "aquamarine",
  },

  textStyle2: {
    fontSize: 30,
  },

  viewStyle: {
    backgroundColor: "lightcyan",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SemesterPage;
