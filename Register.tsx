import { useState } from "react";
import { saveUserToken, register } from "./lib/store";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import tw from 'twrnc';
const staticImage = require("./logo.png");

const Message = ({
  text,
  type = "error",
}: {
  text: string;
  type?: "error" | "info";
}) => {
  return (
    <View
    style={tw`${
        `border px-4 py-3 rounded relative
            ${type === "error" ? "text-red-700 border-red-400 bg-red-100" : ''}
            ${type === "info" ? "text-blue-700 border-blue-400 bg-blue-100" : ''}
        `
    }`}
    >
      <span style={tw`block sm:inline`}>{text}</span>
      <span style={tw`absolute top-0 bottom-0 right-0 px-4 py-3`} />
    </View>
  );
};

const Register = (props: any) => {
  const navigate = props.navigation.navigate;

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        saveUserToken(data.token);
        navigate('Dashboard')
      });
  };

  return (
    <View style={tw`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8`}>
      <View style={tw`max-w-md w-full space-y-8`}>
        <View>
          <Image style={tw`mx-auto h-12 w-auto`} source={staticImage} />
          <Text style={tw`text-center text-3xl font-extrabold text-gray-900`}>
            Create a new account
          </Text>
          <Text style={tw`mt-2 text-center text-sm text-gray-600`}>
            or{" "}
            <TouchableOpacity
              style={tw`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              onPress={() => navigate("Login")} >
                <Text
                  style={tw`text-white`}
                >
                  login to an existing one
                </Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View style={tw`mt-8 space-y-6`}>
          {/* <Message text={"something went wrong..."} /> */}
          <View style={tw`rounded-md shadow-sm -space-y-px`}>
            <View>
              <label htmlFor="name" style={tw`sr-only`}>
                Name
              </label>
              <TextInput
                value={name}
                onChangeText={setName}
                style={tw`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Name"
              />
            </View>
            <View>
              <label htmlFor="email-address" style={tw`sr-only`}>
                Email address
              </label>
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={tw`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
              />
            </View>
            <View>
              <label htmlFor="password" style={tw`sr-only`}>
                Password
              </label>
              <TextInput
                value={password}
                onChangeText={setPassword}
                style={tw`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
              />
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={tw`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              onPress={handleSubmit}
            >
              <Text
                style={tw`text-white text-center`}
              >
                Create account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;
