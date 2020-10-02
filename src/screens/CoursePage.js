import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const CoursePage = (props) => {

    const {courseList} = props.route.params;
    {console.log(props);}
  return (
    <View
    style={style.viewStyle}
    >
      <Text></Text>
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
        <Text></Text>
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
    marginVertical: 20,
  },

  viewStyle:{
    backgroundColor:"lightcyan",
    justifyContent: "center",
    alignItems: "center",
  }
});

export default CoursePage;
