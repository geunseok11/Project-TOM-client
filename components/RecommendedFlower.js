import React from "react";
import {StyleSheet, Text, View, Input, TouchableOpacity, Image} from "react-native";
import styled from "styled-components";

// css part
export const RecommendedFlowerContainer = styled.TouchableOpacity`
  flex: 1;
  border: 3px solid grey
  flex-direction:row;
`;

export const RecommendedFlowerContents = styled.View`
  flex: 1;
  border: 3px solid grey;
`;

export const RecommendedFlowerImageView = styled.Image`
  flex:1
  height: 160px;
  border: 2px solid yellow;
`;

export const RecommendedFlowerTextView = styled.Text`
  color : red;
`;
//
// // function part
// const RecommendedFlower = ({data}) => {
//   // const data = data;
//   const {title, img, contents} = data;
//   // const {onPress} = this.props
//
//   return (
//     <Container >
//       <Contents>
//         <ImageView source={img}/>
//         <TextView>{contents}</TextView>
//         {/*<View>*/}
//         {/*</View>*/}
//         <TextView>{title}</TextView>
//       </Contents>
//       {/*<Contents>{data.title}</Contents>*/}
//     </Container>
//   );
// };
//
// export default RecommendedFlower;


/*
* {
  recommendation: [
    {
      id: "Int",
      title: "String",
      img: "String",
      contents: "String",
    },
    {
      id: "Int",
      title: "String",
      img: "String",
      contents: "String",
    },
  ], // max = 4 ~ 5

}
* */