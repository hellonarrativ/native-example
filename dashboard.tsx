import { saveUserToken, login } from "./lib/store";
import { StyleSheet, Text, View, Image } from 'react-native';
import tw from 'twrnc';
const staticImage = require("./logo.png");

import React from 'react'

const Dashboard = () => {
  // saveUserToken('the token')
  // login('the username', 'the password')

  return (
    <View
      style={tw`flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8`}
    >
      <View
        style={tw`max-w-md w-full`}
      >
        <View>
          <Image source={staticImage} style={tw`mx-auto h-36 w-auto`}/>
          <Text
            style={tw`mt-6 text-center text-3xl font-extrabold text-purple-500`}
          >
            Super secret members only content is: ABC, 123
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
