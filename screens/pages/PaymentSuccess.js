import React from "react";
import { Text, View, StyleSheet, Dimensions,Image,TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';

const PaymentSuccess = ({navigation}) => {
    return(
            <View style={styles.container}>
        <ScrollView>
                <View>
                <View style={[{flexDirection: "row",justifyContent: 'center',alignItems: "center"}]}>
                <Image source={require('../../assets/transaction-success.png')} style={styles.icon} />
            </View>

                    <View style={{padding: 20}}>
                    <View style={[{ marginTop: 15,marginBottom: 36 }]}>
                <Text selectable style={[styles.centered,{color: "#F7941D",fontSize: 20}]}>
          Payment success Yayy!
                </Text>
                <Text selectable style={[styles.centered, { marginTop: 13, fontWeight: 'normal', color: "white",fontSize: 17 }]}>
          we will send you order details and invoice in {'\n'}
          your contact no. and registered email
                </Text>
                    </View>
                    

                        <View>
                        <TouchableOpacity style={[{ display: 'flex', flexDirection: 'row', justifyContent: 'center',alignItems: "center",marginBottom: 36 }]}>
                <Text style={{ color: '#C3744D', marginRight: 12,fontSize: 17,fontWeight: "bold" }}>
          Check Details
                </Text>
                            <View style={{marginTop: 5}}>
                            <Icon name="arrowright" size={25} color="#C3744D" />
                </View>
                        </TouchableOpacity>
                   </View>
                        
            <View style={{marginBottom: 26}}>
                <TouchableOpacity style={styles.downloadButton}>
                    <Text style={styles.downloadButtonText}>Download Invoice</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={{marginBottom: 25,flexDirection: "row",justifyContent: "center",alignItems: "center"}} >
                <Image source={require('../../assets/blacklogo.png')} style={styles.image} />
            </View>

</View>
   </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        width: "100%",
        height: Dimensions.get("window").height
    },
    icon: {
        height: 250,
        resizeMode: 'contain',
        width: "90%"
    },
    mb: {
        marginBottom: '30%',
    },
    centered: {
        color: '#F7941D',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    downloadButton:{
        alignItems: 'center',
        backgroundColor: '#F7941D',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 'auto',
        width: "100%",
        padding: 20
    },
    downloadButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    },
    image: {
        height: 67,
        width: "75%",
        margin: "auto",
    },
})

export default PaymentSuccess;