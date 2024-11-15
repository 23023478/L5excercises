// ---------------Excercise 1------------------
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import {StyleSheet, Text, View, FlatList, TouchableOpacity, StatusBar} from 'react-native';
// Datasource (flatlist)
// const datasource = [
//   {key: 'a'},
//   {key: 'b'},
//   {key: 'c'},
//   {key: 'd'},
//   {key: 'e'},
//   {key: 'f'},
//   {key: 'g'},
//   {key: 'h'},
//   {key: 'i'},
//   {key: 'j'},
//   {key: 'k'},
//   {key: 'l'},
//   {key: 'm'},
//   {key: 'n'},
//   {key: 'o'},
//   {key: 'p'},
//   {key: 'q'},
//   {key: 'r'},
//   {key: 's'},
//   {key: 't'},
//   {key: 'u'},
//   {key: 'v'},
//   {key: 'w'},
//   {key: 'x'},
//   {key: 'y'},
//   {key: 'z'},
// ];
// Styles
// const styles = StyleSheet.create({
//   opacityStyle: {
//     borderWidth: 1
//   },
//   textStyle: {
//     fontSize: 15,
//     margin: 10,
//     textAlign: 'left'
//   }
// });
//
//RenderItem (flatlist)
// const renderItem = ({item}) => {
//   return (
//       <TouchableOpacity style={styles.opacityStyle}>
//         <Text style={styles.textStyle}>{item.key}</Text>
//       </TouchableOpacity>
//   );
// };
//
//Main app
// const Alphabet = () => {
//   return (
//       <View style={{marginBottom: 20}}>
//         <FlatList data={datasource} renderItem={renderItem} />
//         <StatusBar hidden={true} />
//       </View>
//
//   );
// };
//
// export default Alphabet



// ----------------Excercise 2 -------------------
import React from 'react';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, StatusBar} from 'react-native';

//Datasource (sectionlist)
const datasource = [
  {data:[
      {key: 'a'},
      {key: 'e'},
      {key: 'i'},
      {key: 'o'},
      {key: 'u'}
    ],
    title:"Vowels",bgColor:'skyblue'},
  {data:[
      {key: 'b'},
      {key: 'c'},
      {key: 'd'},
      {key: 'f'},
      {key: 'g'},
      {key: 'h'},
      {key: 'j'},
      {key: 'k'},
      {key: 'l'},
      {key: 'm'},
      {key: 'n'},
      {key: 'p'},
      {key: 'q'},
      {key: 'r'},
      {key: 's'},
      {key: 't'},
      {key: 'v'},
      {key: 'w'},
      {key: 'x'},
      {key: 'y'},
      {key: 'z'}
    ],
    title:"Consonants",bgColor:'khaki'}
];


//Styles
const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth: 1
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left'
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

//RenderItem (sectionlist)
const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
  );
};

//Main app
const Alphabet2 = () => {
  return (
      <View style={{marginBottom: 50, margin:10}}>
        <SectionList sections={datasource} renderItem={renderItem}
                     renderSectionHeader={({section:{title, bgColor}}) =>(
                         <Text style={[styles.headerText, {backgroundColor: bgColor}]}>{title}</Text>

                     )}/>
        <StatusBar hidden={true} />
      </View>
  );
};

export default Alphabet2

