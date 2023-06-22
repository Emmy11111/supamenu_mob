import React, { useState } from "react";
import {
    Text, View, StyleSheet,ScrollView,Dimensions, Image
} from "react-native";
import TopNav from "../components/TopNav";
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from "react-native-vector-icons/Entypo"
import { TouchableOpacity } from "react-native-gesture-handler";
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from "./PaymentScreen";
import Colors from '../../util/colors';

const Checkout = ({ navigation }) => {
    
    const [activeTab, setActiveTab] = useState(0);

    const paymentOptions = [
        {
            name: "MTN Mobile Money",
            imageUrl: "https://apimstadxepjgkdsrhmslxra.blob.core.windows.net/content/MediaLibrary/images/MTNMomo-Logo.png",
        },
        {
            name: "Airtel Money",
            imageUrl: "https://flashugnews.com/wp-content/uploads/2022/07/Airtel-Money-Rates-in-Uganda-2022.jpeg"
        },
        {
            name: "Cash",
            imageUrl: "https://www.inventicons.com/uploads/iconset/413/wm/512/Payment-86.png"
        }
    ]

    const [activePaymentOption, setActivePaymentOption] = useState(0);

    return (
        <View style={styles.homeScreen}>
            <View style={[styles.mainNav,{backgroundColor: "white",zIndex: 99999,width: "100%",borderBottomRightRadius: 50,borderBottomLeftRadius: 50}]}>
            <TopNav navigation={navigation} iconColor={"#25D482"} />
            <View style={{backgroundColor: "white",padding: 20,paddingTop: 10,width: "100%",borderBottomRightRadius: 50,borderBottomLeftRadius: 50}}>
              
                <View style={{backgroundColor: "white",maxWidth: "100%",width: "100%"}}>
                <View style={{flexDirection: "row",justifyContent: "space-between",alignItems: "center",marginBottom: 0}}>
                <Text style={styles.h2}>Checkout 💳</Text>
                <View>
                <View style={{marginBottom: 5}}><Text style={{ color: "#25D482", fontSize: 24,fontWeight: "bold" }}>Frw 16,000</Text></View>
<Text style={{color: "#B1B1B1",fontSize: 17}}>Including VAT (18%)</Text>
                </View>
                </View>

                <View style={{backgroundColor: "white",maxWidth: "100%",width: "100%",flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
                     <View style={{elevation: 3,paddingRight: 92,borderRadius: 20,paddingLeft: 92,maxWidth: "100%",width: "100%",position: "relative",top: 40,flexDirection: "row",justifyContent: "center",alignItems: "center",backgroundColor: activeTab==0? "#F8F8FB": "#25D482"}}>
                    <TouchableOpacity style={{width: "100%",elevation: 2,maxWidth: "100%"}} onPress={()=>setActiveTab(0)}>
                    <View style={{padding: 22,backgroundColor: activeTab==0?"#25D482": "#F8F8FB",borderRadius: 20}}>
                        <View style={{ flexDirection: "row", justifyContent: "center",alignItems: "center"}}><Fontisto name={'credit-card'} size={23} color={activeTab==0? 'white': "#3A3C3F"} />
                        <Text style={{color: activeTab==0? "white": "#3A3C3F",fontSize: 20,marginLeft: 10,fontWeight: "bold"}}>Credit card</Text></View>
 </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width: "100%",maxWidth: "100%"}} onPress={()=>setActiveTab(1)}>
                    <View style={{padding: 22,backgroundColor: activeTab==0? "#F8F8FB": "#25D482",borderRadius: 20}}>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{color: activeTab==0? "#3A3C3F": "#ffff",fontSize: 20,marginLeft: 10,fontWeight: "bold"}}>Mobile & Cash</Text></View>
 </View>
                    </TouchableOpacity>
                </View>
               </View>
                </View>

                </View>
                </View>
      <ScrollView>

                <View style={{ padding: 20 }}>
                    
                    {
                        activeTab==0 ?
                        <View>
                        <StripeProvider
              publishableKey={"pk_test_51McYn3A3fjn0RFbUEj0QMBgB2GeVk5rXpNDj9ksEpqmNycqSHM9uWRSMWf1nO3r1KoHKwrFDiYXCfAD95etUGkrZ00VFNUBSzQ"}
              merchantIdentifier="merchant.identifier"
              urlScheme="your-url-scheme"
            >
              <PaymentScreen />
            </StripeProvider>
                            </View>
                            :
                            <View style={{paddingTop: 30,paddingBottom: 20}}>
                                {
                                    paymentOptions?.map((option,index) => {
                                        return (
                                            <TouchableOpacity style={{marginBottom: 17}} onPress={()=>{setActivePaymentOption(index)}}>
                                            <View style={{ flexDirection: "row", backgroundColor: activePaymentOption==index? "#F5F5F5": "#ffff",borderRadius: 5,justifyContent: "flex-start",alignItems: "center"}}>
                                                <View><Image style={{ width: 100, height: 80,minHeight: 80,maxHeight: 80,borderRadius: 4 }} source={{ uri: option?.imageUrl }} /></View>
                                                    <View>
                                                    <Text style={{fontSize: 20,marginLeft: 15,color: "#333333"}}>{ option?.name}</Text>
                                                </View>
                                                </View>
                                                </TouchableOpacity>
                                        )
                                    })
}
                                </View>
               }

                <View style={styles.proceedView}>
                <Text selectable style={styles.assText}>
          We will send you an order details to your email after the successfully
          payment
                </Text>

                <View style={styles.bottomTools}>
                            <TouchableOpacity
                                onPress={()=>navigation.navigate("PaymentSuccess")}
                        style={styles.payButton}
                            >
                                <Entypo name={'lock'} size={25} color={'white'} />
                        <Text style={styles.payButtonText}>Pay for the order</Text>
                    </TouchableOpacity>
                    <View style={styles.btmLine}></View>
                </View>
                    </View>
            </View>

                    </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    h2: {
        fontSize: 25,
        fontWeight: "bold"
    },
    homeScreen: {
        height: Dimensions.get("window").height,
        backgroundColor: "white"
    },
    mainNav: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 10,
    },
    payButton: {
        alignItems: 'center',
        backgroundColor: Colors.green,
        borderRadius: 15,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        marginTop: 15,
        padding: '3%',
        width: "100%",
    },
    payButtonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 7
    },
    proceedView: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    assText: {
        fontSize: 16,
        marginBottom: 10,
        marginTop: 10,
        textAlign: "center",
        color: "#B1B1B1"
    },
});

export default Checkout;