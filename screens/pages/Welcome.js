import { ScrollView ,View,Text,TextInput,StyleSheet,Dimensions, Button, TouchableOpacity} from "react-native";
import colors from "../../util/colors";
import Fontisto from "react-native-vector-icons/Fontisto"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useState, useEffect } from 'react';

export default function Welcome({navigation}) {

    // const [hasPermission, setHasPermission] = useState(null);
    // const [scanned, setScanned] = useState(false);
  
    // useEffect(() => {
    //   const getBarCodeScannerPermissions = async () => {
    //     const { status } = await BarCodeScanner.requestPermissionsAsync();
    //     setHasPermission(status === 'granted');
    //   };
  
    // //   getBarCodeScannerPermissions();
    // }, []);
  
    // const handleBarCodeScanned = ({ type, data }) => {
    //   setScanned(true);
    //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // };
  
    // if (hasPermission === null) {
    //   return <Text>Requesting for camera permission</Text>;
    // }
    // if (hasPermission === false) {
    //   return <Text>No access to camera</Text>;
    // }

    return(
        <View style={styles.container}>
                <ScrollView>
                <View style={{padding: 20}}>
                <View style={styles.searchInput}>
                    <View style={{position: "relative",width: "100%"}}>
                    <View style={{position: "absolute",top: 12}}>
                    <Fontisto name={"search"} size={23} style={{color: colors.primary}} />
                    </View>
                            <TextInput onFocus={() => {
                                navigation.navigate("NearByRestaurant")
                        }} placeholder="Search for your preferred restaurant" style={{padding: 10,paddingTop: 11,fontSize: 18,width: "100%",paddingLeft: 30}}></TextInput>
                    </View>
                    </View>

                    <View style={{marginTop: 40,marginBottom: 40}}>
                        <Text style={{color: "#363636",fontSize: 26,textAlign:"center",fontWeight: "bold"}}>or</Text>
                    </View>

                    <View style={{flexDirection: "row",justifyContent: "center",alignItems: "center",marginBottom: 40}}>
                        <TouchableOpacity>
                        <FontAwesome5 name={"qrcode"} size={100} />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{marginTop: 20}}>
                        <Text style={{color: "#363636",fontSize: 26,textAlign:"center",fontWeight: "bold"}}>Scan, Pay & Enjoy!</Text>
                    </View>
                    
                    {/* <View>
                        <Button onPress={() => {
                            navigation.navigate("EnterPage")
                        }} title={"Cart"}/>
                    </View> */}
                    
               </View>
       </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height,
        backgroundColor: colors.primary,
        width: "100%"
    },
    searchInput: {
        backgroundColor: colors.white,
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100
    }
})