import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

const FacultyList = [
  { name: "Dr. Muhammad Mahbub Alam, Professor", key: "1" },
  { name: "Dr. Abu Rayhan Mostafa Kamal, Professor", key: "2" },
  { name: "Md. Hasanul Kabir, Professor", key: "3" },
  { name: "Sohel Ahmed, Assistant Professor", key: "4" },
  { name: "Mohayeminul Islam, Associate Professor", key: "5" },
  { name: "Ridwan Kabir, Lecturer", key: "6" },
  { name: "Njayou Youssouf, Lecturer", key: "7" },
  { name: "Redwan Karim Sony, Lecturer", key: "8" },
  { name: "Tasnim Ahmed, Lecturer", key: "9" },
  { name: "Fardin Saad, Lecturer", key: "10" },
];

const FacultyPage = () => {
  return (
    <View style={style.viewStyle}>
      <FlatList
        data={FacultyList}
        renderItem={function ({ item }) {
          return <Text style={style.textStyle} >{item.name}</Text>;
        }}
      ></FlatList>
      <Text style={style.textStyle}></Text>
      <Text style={style.textStyle}></Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginVertical: 20
  },

  textStyle2: {
    fontSize: 30,
  },

  viewStyle: {
    backgroundColor: "lightcyan",
  },
});

export default FacultyPage;
