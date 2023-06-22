import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import MainButton from "../components/MainButton";
import { ScrollView, StyleSheet } from "react-native";
import colors from "../../util/colors";
import {
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import FeatherIcons from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import axiosInstance from "../../util/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/native';

function Signup({ navigation }) {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);

  const isFocused = useIsFocused();

  const checkAuth = async () => {
    try {
      const token = await AsyncStorage.getItem("access_token");
      if (token) {
        navigation.navigate("Welcome")
      }
    }
    catch(error){
      alert(error.message)
    }
  }

  useEffect(() => {
    checkAuth();
  },[isFocused])

  const register = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.post("/users", data);
      setLoading(false);

      if (res.data.status != true) {
        alert(res.data.message);
        return;
      }

      if (res.data.access_token) {
        await AsyncStorage.setItem("access_token", res.data.access_token);

        navigation.navigate("Welcome");
      }
    } catch (error) {
      setLoading(false);
      alert(error.message);
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.mainContainer} enabled>
        <View style={styles.container}>
          <View style={styles.whiteBanner}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginBottom: 30,
              }}
            >
              <Text
                style={{
                  color: colors.black,
                  fontSize: 50,
                  fontWeight: "bold",
                }}
              >
                Supa
              </Text>
              <Text
                style={{
                  color: colors.primary,
                  fontSize: 50,
                  fontWeight: "bold",
                }}
              >
                Menu{" "}
              </Text>
            </View>

            <View style={{ width: "100%", marginBottom: 40 }}>
              <Text
                selectable
                style={{
                  fontSize: 23,
                  color: colors.navy,
                  marginBottom: 7,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Welcome ...
              </Text>
              <Text
                selectable
                style={{
                  fontSize: 18,
                  color: colors.light,
                  textAlign: "center",
                }}
              >
                Please fill in the information
              </Text>
            </View>

            <View style={{ marginBottom: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  marginBottom: 12,
                }}
              >
                <FeatherIcons name={"user"} size={30} style={styles.icon} />
                <TextInput
                  placeholder="Full Name"
                  style={styles.inputStyle}
                  keyboardType="text"
                  onChangeText={(val) => {
                    setData({ ...data, fullName: val });
                  }}
                ></TextInput>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  marginBottom: 12,
                }}
              >
                <FeatherIcons name={"phone"} size={30} style={styles.icon} />
                <TextInput
                  placeholder="Phone Number"
                  style={styles.inputStyle}
                  keyboardType="numeric"
                  onChangeText={(val) => {
                    setData({ ...data, phoneNumber: val });
                  }}
                ></TextInput>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  marginBottom: 12,
                }}
              >
                <MaterialCommunityIcons
                  name={"email-outline"}
                  size={33}
                  style={[styles.icon, { top: 15 }]}
                />
                <TextInput
                  placeholder="Your Email"
                  style={styles.inputStyle}
                  onChangeText={(val) => {
                    setData({ ...data, email: val });
                  }}
                  keyboardType="text"
                ></TextInput>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  marginBottom: 12,
                }}
              >
                <FeatherIcons name={"lock"} size={30} style={styles.icon} />
                <TextInput
                  secureTextEntry={true}
                  placeholder="Password"
                  style={styles.inputStyle}
                  onChangeText={(val) => {
                    setData({ ...data, password: val });
                  }}
                  keyboardType="text"
                ></TextInput>
              </View>
            </View>

            <View style={{ marginBottom: 10 }}>
              <MainButton
                onPress={() => {
                  register();
                }}
                loading={loading}
                title={"Proceed"}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginBottom: 15,
              }}
            >
              <View style={styles.line}></View>
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: colors.light,
                    fontSize: 21,
                    zIndex: 99999,
                    padding: 10,
                  }}
                >
                  OR
                </Text>
              </View>
              <View style={styles.line}></View>
            </View>

            <View style={{ marginBottom: 25 }}>
              <Text
                style={{
                  fontSize: 18,
                  color: colors.light,
                  textAlign: "center",
                }}
              >
                If you have a PMG account
              </Text>
            </View>

            <MainButton
              onPress={() => {
                navigation.navigate("Login");
              }}
              title={"Sign In"}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 30,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.light,
                  textAlign: "center",
                }}
              >
                Already have a account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: colors.primary,
                    fontWeight: "bold",
                    marginLeft: 9,
                    textAlign: "center",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.primary,
    height: "100%",
    width: "100%",
    position: "relative",
  },
  whiteBanner: {
    backgroundColor: colors.white,
    padding: 20,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    paddingTop: 60,
    // position: "absolute",
    bottom: 0,
    width: "100%",
    marginTop: 80,
  },
  inputStyle: {
    borderColor: colors.lightest,
    borderWidth: 1,
    width: "100%",
    position: "relative",
    fontSize: 20,
    padding: 17,
    paddingLeft: 50,
    paddingRight: 20,
    borderRadius: 5,
    color: colors.light,
  },
  icon: {
    position: "absolute",
    color: colors.light,
    top: 12,
    left: 15,
  },
  line: {
    height: 1,
    borderBottomColor: "#EBF0FF",
    borderBottomWidth: 1,
    flex: 1,
  },
});

export default Signup;
