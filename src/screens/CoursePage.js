import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const CoursePage = (props) => {

    const {courseList} = props.courseList;
  return (
    <View>
        <FlatList
        data={courseList}
        renderItem={function({item}){
        return(<Text>{item.name}</Text>);
        }}
        ></FlatList>
      <Text>Course page</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    marginVertical: 10,
  },

  textStyle2: {
    marginVertical: 20,
  },
});

export default CoursePage;
