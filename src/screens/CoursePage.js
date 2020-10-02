import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const CoursePage = (props) => {

    const {semesterName,courseList} = props.route.params;
  return (
    <View
    style={style.viewStyle}
    >
      <Text style={style.textStyle2}>{semesterName}</Text>
        <FlatList
        data={courseList}
        showsVerticalScrollIndicator={false}
        renderItem={function({item}){
        return(<Text
        style={style.textStyle}
        > {item.name}</Text>);
        }}
        ></FlatList>
        <Text></Text>
        <Text></Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginVertical:30,
    borderWidth:3,
    alignItems: "center",
    borderRadius:5
  },

  textStyle2: {
    fontSize:35,
    marginVertical: 20,
    fontWeight:"bold",
  },

  viewStyle:{
    backgroundColor:"lightcyan",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default CoursePage;
