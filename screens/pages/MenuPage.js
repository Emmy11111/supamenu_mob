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
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomNavbar from "../components/BottomNavbar";
import TopNav from "../components/TopNav";
import Entypo from "react-native-vector-icons/Entypo";
import colors from "../../util/colors";
import MainButton from "../components/MainButton";

export default function MenuPage({ navigation }) {
  const data = [
    { id: "1", name: "Appetizer" },
    { id: "2", name: "Starter" },
    { id: "4", name: "Main" },
    { id: "3", name: "Dessert" },
    { id: "5", name: "Drink" },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={()=>{
        navigation.navigate("CartPage")
      }} style={styles.item}>
        <Text style={{ color: colors.white, fontSize: 23 }}>{item.name}</Text>

        <Entypo
          name="chevron-thin-right"
          size={18}
          style={{ color: colors.white }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ padding: 25, paddingTop: 35, marginBottom: 30 }}>
          <Text
            style={{
              color: colors.primary,
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Choose Kigali
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 15,
          }}
        >
          <View
            style={{
              borderRightWidth: 1,
              borderRightColor: colors.primary,
              paddingRight: 26,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../../assets/bucket.png")}
                style={{ width: 85, height: 70 }}
              />
            </View>
            <Text
              style={{
                color: colors.white,
                fontSize: 25,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Enter
            </Text>
            <Text
              style={{ color: colors.white, fontSize: 23, textAlign: "center" }}
            >
              Table Number
            </Text>
          </View>

          <View style={{ paddingLeft: 26 }}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../../assets/accordion.png")}
                style={{ width: 85, height: 70 }}
              />
            </View>
            <Text
              style={{ color: colors.white, fontSize: 23, textAlign: "center" }}
            >
              call waiter
            </Text>
          </View>
        </View>

        <View style={{ padding: 25, paddingTop: 35 }}>
          <Text
            style={{
              color: colors.primary,
              fontSize: 35,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            menu
          </Text>
        </View>

        <View
          style={{
            padding: 20,
            paddingTop: 0,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
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
  item: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
});
