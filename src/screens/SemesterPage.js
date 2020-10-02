import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";

import CoursePage from "./CoursePage";

const semester1 = [
  { name: "HUM 4145", key: "1" },
  { name: "HUM 4147", key: "2" },
  { name: "MATH 4141", key: "3" },
  { name: "Phy 4143", key: "4" },
  { name: "CSE 4107", key: "5" },
  { name: "SWE 4101", key: "6" },
];

const semester2 = [
  { name: "HUM 4247", key: "1" },
  { name: "HUM 4249", key: "2" },
  { name: "MATH 4241", key: "3" },
  { name: "CSE 4203", key: "4" },
  { name: "CSE 4205", key: "5" },
  { name: "SWE 4201", key: "6" },
];

const semester3 = [
  { name: "MATH 4341", key: "1" },
  { name: "CSE 4303", key: "2" },
  { name: "CSE 4305", key: "3" },
  { name: "CSE 4307", key: "4" },
  { name: "CSE 4309", key: "5" },
  { name: "SWE 4301", key: "6" },
];

const SemesterPage = (props) => {
  return (
    <View style={style.viewStyle}>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <TouchableOpacity
        onPress={function () {
          props.navigation.navigate("Courses", { courseList: semester1 });
        }}
      >
        <Text style={style.textStyle}>First Semester</Text>
      </TouchableOpacity>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <TouchableOpacity
        onPress={function () {
          props.navigation.navigate("Courses", { courseList: semester2 });
        }}
      >
        <Text style={style.textStyle}>Second Semester</Text>
      </TouchableOpacity>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <Text style={style.textStyle2}></Text>
      <TouchableOpacity
        onPress={function () {
          props.navigation.navigate("Courses", { courseList: semester3 });
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
