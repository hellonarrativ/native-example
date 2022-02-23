import { saveUserToken, login } from "./lib/store";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
const staticImage = require("./logo.png");

import React from 'react'

const Login = (props: any) => {
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
            style={tw`mt-6 text-center text-3xl font-extrabold text-indigo-600`}
          >
            Login
          </Text>
        </View>
        <Text
          style={tw`mt-6 text-center text-gray-900`}
        >
          the form goes here : )
        </Text>
      </View>
      <TouchableOpacity
        style={tw`mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        onPress={() => props.navigation.navigate("Register")} >
          <Text
            style={tw`text-white text-center`}
          >
            Register
          </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
