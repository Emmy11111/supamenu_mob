import { View, Text, StyleSheet,Dimensions,TouchableOpacity,SafeAreaView, TextInput } from 'react-native'
import EntypoIcons from 'react-native-vector-icons/Entypo';
import colors from '../../util/colors';
import Ionicons from "react-native-vector-icons/Ionicons"
import { useState } from 'react';

const TopNav = (props) => {

    const [searchKey,setSearchKey] = useState('')

    return (
        <>
            <SafeAreaView style={[styles.topBar,{borderBottomColor: props?.searchAppear==true ? "#F8F8FB": "white"}]}>
            <TouchableOpacity onPress={()=>props?.navigation.goBack()} style={styles.itemStyle}>
                <EntypoIcons name="chevron-small-left" size={40} color={props?.iconColor? props?.iconColor : styles.iconColor} />
                </TouchableOpacity>
                
                {
                    props?.searchAppear==true ?
                    <View style={{paddingLeft: 20,paddingRight: 20,flexDirection: "row",width: Dimensions.get("window").width-100,justifyContent: "center",alignItems: "center"}}>
                    <TextInput value={searchKey} onChangeText={(val) => {
                        setSearchKey(val)
                    }} keyboardType='default' style={{ fontSize: 19, padding: 5, color: "#494949", width: "100%" }} placeholder='Search...' />
                    {
                        searchKey ?
                        <TouchableOpacity onPress={()=>setSearchKey('')}>
                                <Ionicons name="close-outline" size={33} style={{ color: "#494949" }} />
                                </TouchableOpacity>
                            :
                            <></>
                    }
                </View>
                        :
                        <></>
                }
                
           </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: "white",
        width: "100%",
        paddingRight: 20,
        paddingLeft: 20,
        bottom: 0,
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        height: 80,
        paddingTop: 20,
        paddingBottom: 15,
        borderBottomWidth: 1
    },
    itemStyle: {
        color: "#FF7518",
        padding: 2,
        paddingRight: 7,
        paddingLeft: 7,
        borderRadius: 12,
        position: 'relative',
        backgroundColor: "#F8F8FB"
    },
    iconColor: "#F7941D",
  });

export default TopNav;