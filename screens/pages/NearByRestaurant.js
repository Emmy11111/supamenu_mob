import React, { useState } from "react";
import { Text, StyleSheet, View, Button,ScrollView,Dimensions,Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomNavbar from "../components/BottomNavbar";
import TopNav from "../components/TopNav";
import AntiDesignIcon from 'react-native-vector-icons/AntDesign';
import colors from "../../util/colors";

export default function NearByRestaurant({ navigation }) {
    
    const restaurants = [
        {
          name: "Choose Kigali",
          description: "Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
          imageUrl: "https://io.dropinblog.com/uploaded/blogs/34240221/files/featured/non-alcoholic-drinks-to-order-at-a-bar.jpg"
        },
        {
          name: "Choose Kigali",
          description: "Gin, Grenadine, Citrus, Cucumber",
          imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2021/11/diabolo-mockail-440-x400-c795884.jpg?quality=90&webp=true&resize=375,341"
        },
        {
          name: "Choose Kigali",
          description: "Vanilla, Coffee and Chocolate with hints of Orange",
          imageUrl: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR61F36y-FxJ1SuhuKrBUmJeQtWyklBOtf_QcqLNnziuboOyVCBPXjSiJsNqIQ_AIvd"
        },
        {
            name: "Choose Kigali",
            description: "Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
            imageUrl: "https://io.dropinblog.com/uploaded/blogs/34240221/files/featured/non-alcoholic-drinks-to-order-at-a-bar.jpg"
          },
          {
            name: "Choose Kigali",
            description: "Gin, Grenadine, Citrus, Cucumber",
            imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2021/11/diabolo-mockail-440-x400-c795884.jpg?quality=90&webp=true&resize=375,341"
          },
          {
            name: "Choose Kigali",
            description: "Vanilla, Coffee and Chocolate with hints of Orange",
            imageUrl: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR61F36y-FxJ1SuhuKrBUmJeQtWyklBOtf_QcqLNnziuboOyVCBPXjSiJsNqIQ_AIvd"
          },
    ]
    
    return(
        <View style={styles.homeScreen}>
        <TopNav searchAppear={true} navigation={navigation} />
      <ScrollView>
                <View style={styles.body}>
                    <Text style={{ color: colors.primary, fontSize: 20,marginBottom: 25 }}>Nearby Restaurant</Text>
                    
                    <View style={{marginBottom: 30}}>
            {
              restaurants?.map((restaurant) => {
                return (
                  <Resturant restaurant={restaurant} />
                )
              })
           }
          </View>
                </View>
            </ScrollView>
            <BottomNavbar page={"nearby"} navigation={navigation} />
            </View>
    )
}

const Resturant = ({ restaurant }) => {
    return (
      <View style={styles.productCont}>
        <View style={{marginRight: 10}}>
          <Image
            style={styles.imgStyle}
            source={{uri: restaurant?.imageUrl}}
          ></Image>
        </View>
        <View style={{width: Dimensions.get("window").width-170,marginTop: -5}}>
                      <View style={{marginBottom: 5}}><Text selectable={true} style={[{fontWeight: "bold"},styles.textStyle]}>{restaurant?.name }</Text></View>
        <View style={{marginBottom: 3}}><Text selectable={true} styles={[styles.textLightest]}>{restaurant?.description}</Text></View>
                      <View style={{flexDirection: "row",justifyContent: "space-between",alignItems: "center"}}>
                      </View>
                   </View>
                      </View>
    )
  }

const styles = StyleSheet.create({
    text: {
      fontSize: 30,
    },
    homeScreen: {
      height: Dimensions.get("window").height,
      backgroundColor: "white"
    },
    body: {
      padding: 32,
      paddingTop: 20,
    },
    h2: {
      fontSize: 24,
      fontWeight: "bold"
    },
    textColor: {
      color: "#494949"
    },
    productCont: {
      backgroundColor: "#F8F8FB",
      borderRadius: 16,
      padding: 20,
      marginBottom: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      columnGap: 10,
      maxWidth: "100%",
      minWidth: "100%",
      width: "100%"
    },
    textFrw: {
      color: "#F08F5F",
      fontSize: 19,
      fontWeight: "bold"
    },
    textStyle: {
      fontSize: 17,
      color: "#494949",
    },
    textLightest: {
      color: "#363636",
      fontSize: 16
    },
    mainBtn: {
      backgroundColor: "#F7941D",
      borderRadius: 15,
      padding: 10,
      paddingTop: 17,
      paddingBottom: 17,
      width: "100%",
    },
    imgStyle: {
      width: 67,
      height: 70,
  borderRadius: 10
    }
  });