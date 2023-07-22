import React from "react";
import { Text } from "react-native-web";

const getFullName = (firstName, secondName, lastName) => {
    return firstName + " " + secondName + " " + lastName;
};

const CatDetail = () => {
    return<Text>Hello, We are {getFullName("Tomas", "Tom", "Tim")}!</Text>;
};

export default CatDetail;