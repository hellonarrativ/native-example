// import { saveUserToken } from "../lib/store";
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import tw from 'twrnc';
const staticImage = require("./logo.png");

import React, {useEffect, useState} from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirecting, setRedirecting] = useState(false)
  // saveUserToken('the token')

  function onSubmit(e) {
    e.preventDefault();

    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // saveUserToken(data.token);

        setRedirecting(true)
    });
  }

  return (
    <View
      style={tw` flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8`}
    >
      {/* <Redirect to="/dashboard" /> */}
      <View
        style={tw`max-w-md w-full space-y-8`}
      >
        <View>
          <Image source={staticImage} style={tw`mx-auto h-36 w-auto" src="/logo.png" alt="Workflow`}/>
          <Text
            style={tw`mt-6 text-center text-3xl font-extrabold text-gray-900`}
          >
            Login
          </Text>
        </View>
          <View>
            <Text>Email </Text>
              <TextInput
                style={tw`border border-gray-400 rounded`}
                onChangeText={setEmail}
                value={email}
              />
          </View>
          <View>
            <Text>Password </Text>
              <TextInput
                style={tw`border border-gray-400 rounded`}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
              />
          </View>
          <Button
            title="Click here to login" onPress={onSubmit}
          />
      </View>
    </View>
  );
};

export default Login;
