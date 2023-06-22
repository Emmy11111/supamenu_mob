import { View, Text, StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';
import AntiDesignIcon from 'react-native-vector-icons/AntDesign';

const BottomNavbar = ({navigation,page}) => {
    return (
        <>
            <View style={styles.bottomNavContainer}>
            <View style={styles.bottomNav} >
                <TouchableOpacity style={styles.itemStyle}>
                <IconFeather name="home" size={25} color={styles.iconColor} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.itemStyle}>
                        <Icon name="bell-o" size={25} color={styles.iconColor} />
                        <View style={styles.activeDot}></View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[styles.itemStyle,page=='nearby' && styles.activeItem]}>
                        <IconFeather onPress={() => {
                            navigation.navigate("NearByRestaurant")
                }} name="briefcase" size={25} color={page=='nearby'?styles.activeIconColor:styles.iconColor} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemStyle}>
                <IconFeather name="clock" size={25} color={styles.iconColor} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => {
                            navigation.navigate("CartPage")
                }} style={[styles.itemStyle,page=='cart' && styles.activeItem]}>
                <IconFeather name="shopping-cart" size={25} color={page=='cart'?styles.activeIconColor:styles.iconColor} />
                </TouchableOpacity>
        </View>
           </View>
        </>
    )
}

const styles = StyleSheet.create({
    bottomNav: {
        backgroundColor: "white",
        width: "100%",
        paddingRight: 30,
        paddingLeft: 30,
        position: "absolute",
        bottom: 0,
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 40,
        shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 10,
    },
    bottomNavContainer: {
        width:  Dimensions.get("window").width,
        backgroundColor: "transparent",
        height: 85,
        zIndex: 100,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 3,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    itemStyle: {
        color: "#F7941D",
        padding: 10,
        borderRadius: 12,
        position: 'relative'
    },
    iconColor: "#121111a1",
    activeIconColor: "#F7941D",
    activeItem: {
        backgroundColor: "#F6E3DB"
    },
    activeDot: {
        backgroundColor: "#F7941D",
        height: 7,
        width: 7,
        borderRadius: 50,
        position: "absolute",
        top: 10,
        right: "50%"
    }
  });

export default BottomNavbar;