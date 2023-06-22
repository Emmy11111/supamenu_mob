import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  ScrollView,
  Dimensions,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomNavbar from "../components/BottomNavbar";
import TopNav from "../components/TopNav";
import AntiDesignIcon from "react-native-vector-icons/AntDesign";
import colors from "../../util/colors";
import MainButton from "../components/MainButton";

export default function EnterPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ width: "100%" }}>
          <ImageBackground
            source={require("../../assets/meal.png")}
            style={styles.backgroundImage}
                  >
                      <View style={{position: "relative",width: "100%"}}>
                      <TouchableOpacity style={{padding: 5,position: "absolute",paddingLeft: 15,marginTop: 15, paddingRight: 15,width: 100,top: 0,zIndex: 999999,right: -15,backgroundColor: colors.primary,transform: [{ rotate: '270deg' }]}}><Text style={{color: colors.white,fontSize: 20}}>Share</Text></TouchableOpacity>
                      </View>
          </ImageBackground>
        </View>

        <View style={{ padding: 25 }}>
          <View style={{ marginBottom: 15 }}>
            <View
              style={{ paddingLeft: 25, paddingRight: 25, marginBottom: 15 }}
            >
              <Text
                style={{
                  color: colors.white,
                  fontSize: 32,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                {" "}
                Choose Kigali
              </Text>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 44,justifyContent: "space-between"}}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: colors.white,
                    height: 35,
                    width: 2.5,
                    marginRight: 8,
                  }}
                ></View>
                <View
                  style={{
                    backgroundColor: colors.white,
                    height: 35,
                    width: 2.5,
                    marginRight: 8,
                  }}
                ></View>
                <View
                  style={{
                    backgroundColor: colors.white,
                    height: 35,
                    width: 2.5,
                  }}
                ></View>
              </View>

              <View style={{
                    backgroundColor: colors.white,
                    height: 2.5,
                    width: 55,
                    marginRight: 8,
                  }}></View>
            </View>

            <View style={{ paddingLeft: 25, paddingRight: 25 }}>
              <MainButton
                fontSize={30}
                loading={false}
                onPress={() => {navigation.navigate("MenuPage")}}
                title={"Enter"}
              />
            </View>
          </View>

          <Text
            style={{
              color: colors.white,
              fontSize: 24,
              textAlign: "center",
              paddingLeft: 25,
              paddingRight: 25,
            }}
          >
            and check out our menu{" "}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    height: Dimensions.get("window").height,
    width: "100%",
  },
  backgroundImage: {
    resizeMode: "cover",
    height: Dimensions.get("window").height / 2,
      width: "100%",
    position: "relative"
  },
});
