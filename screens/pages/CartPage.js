import React, { useState } from "react";
import { Text, StyleSheet, View, Button,ScrollView,Dimensions,Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomNavbar from "../components/BottomNavbar";
import TopNav from "../components/TopNav";
import AntiDesignIcon from 'react-native-vector-icons/AntDesign';

const CartPage = ({ navigation }) => {

  const products = [
    {
      name: "Tom Yummy - 12.5",
      price: 5000,
      description: "Kaffir Lime Vodka, Lemongrass, Ginger, Citrus",
      imageUrl: "https://io.dropinblog.com/uploaded/blogs/34240221/files/featured/non-alcoholic-drinks-to-order-at-a-bar.jpg"
    },
    {
      name: "Singapore Sling - 12.5",
      price: 5000,
      description: "Gin, Grenadine, Citrus, Cucumber",
      imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2021/11/diabolo-mockail-440-x400-c795884.jpg?quality=90&webp=true&resize=375,341"
    },
    {
      name: "White Russian- 12.5",
      price: 6000,
      description: "Vanilla, Coffee and Chocolate with hints of Orange",
      imageUrl: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR61F36y-FxJ1SuhuKrBUmJeQtWyklBOtf_QcqLNnziuboOyVCBPXjSiJsNqIQ_AIvd"
    },
  ]

  return (
    <View style={styles.homeScreen}>
        <TopNav navigation={navigation} />
      <ScrollView>
        <View style={styles.body}>
          
          <View style={{marginBottom: 15}}>
            <View>
            <View style={{marginBottom: 10}}>
            <Text selectable={true} style={[styles.h2, styles.textColor,{textAlign: "right"}]}>Choose Kigali</Text>
          </View>
          <Text style={{fontSize: 24,color: "#F7941D",textAlign: "right"}}>Drinks</Text>
            </View>
          </View>
          
          <View style={{marginBottom: 30}}>
            {
              products?.map((product) => {
                return (
                  <Product product={product} />
                )
              })
           }
          </View>
          
          <View style={{flexDirection : "row",justifyContent: "center",alignItems: "center",marginBottom: 35}}>
            <TouchableOpacity style={{flexDirection : "row",justifyContent: "center",alignItems: "center"}}>
              <Text style={{color: "#F08F5F",fontWeight: "bold",marginRight: 20,fontSize: 20}}>more drinks</Text>
            <View style={{marginTop: 5}}><AntiDesignIcon name={'arrowright'} color={"#F08F5F"} size={30} /></View>
           </TouchableOpacity>
            
          </View>
          

          <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center",marginBottom:30 }}>
            <Text selectable style={[styles.textLightest,{ fontSize: 22, fontWeight: "bold" }]}>Total</Text>
            <Text selectable style={{ fontSize: 22, fontWeight: "bold",color: "#F08F5F" }}>Frw {products?.reduce((accumulator, item) => accumulator + item.price, 0) }</Text>
          </View>

          <View style={{marginBottom: 15,width: "100%"}}>
            <TouchableOpacity onPress={() => {
              navigation.navigate("Checkout")
            }} style={styles.mainBtn}>
            <Text style={{color: "white",fontSize: 18,fontWeight: "bold",textAlign: "center"}}>Proceed to checkout</Text>
            </TouchableOpacity>
          </View>
          
       </View>
      </ScrollView>
      <BottomNavbar page={"cart"} navigation={navigation} />
    </View>
  )
};

const Product = ({ product }) => {
  const [num, setNum] = useState(1);

  return (
    <View style={styles.productCont}>
      <View style={{marginRight: 15}}>
        <Image
          style={styles.imgStyle}
          source={{uri: product?.imageUrl}}
        ></Image>
      </View>
      <View style={{width: Dimensions.get("window").width-157,marginTop: -5}}>
      <View style={{marginBottom: 3}}><Text selectable={true} styles={[styles.textLightest]}>{product?.description}</Text></View>
                    <View style={{marginBottom: 5}}><Text selectable={true} style={[{fontWeight: "bold"},styles.textStyle]}>{product?.name }</Text></View>
                    <View style={{flexDirection: "row",justifyContent: "space-between",alignItems: "center"}}>
                      <Text selectable={true} style={styles.textFrw}>FRW {product?.price?.toLocaleString()}</Text>

                      <View style={{flexDirection: "row",justifyContent: "space-between",alignItems: "center",backgroundColor: "white",borderRadius: 10,padding: 10,paddingTop: 8,paddingBottom: 8}}>
          <TouchableOpacity onPress={() => {
            if (num > 1) {
              setNum(num - 1)
            }
          }} style={{marginRight: 5}}>
            <AntiDesignIcon name={'minus'} color={"#F08F5F"} size={22} />
          </TouchableOpacity>
          <View style={{marginRight: 5}}>
            <Text selectable style={{ fontSize: 16 }}>{num}</Text>
          </View>
          <TouchableOpacity onPress={() => {
            setNum(num+1)
          }}>
            <AntiDesignIcon name={'plus'} color={"#F08F5F"} size={22} />
          </TouchableOpacity>
                      </View>
                      
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
    padding: 20,
    paddingTop: 12,
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

export default CartPage;
