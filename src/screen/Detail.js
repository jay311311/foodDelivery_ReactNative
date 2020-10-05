import React from "react";
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler" 
import {View,Text,Image} from "react-native";
import Icon from "@expo/vector-icons/Entypo"

export default class Detail extends React.Component{
    state={quantity:1}

    addQuantity=(quantity)=>{
        this.setState({quantity:this.state.quantity+1})
    }
    deleteQuantity=(quantity)=>{
        if(this.state.quantity>0)
        {this.setState({quantity:this.state.quantity+1})}
    }

    render(){
        return(
            <View style={{backgroundColor:"#fff"}}>
                <ScrollView>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        marginTop:40,
                        marginHorizontal:20
                    }}>
                        <View style={{width:"10%"}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                <Image source={require("../images/back.png")}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:"80%", alignItems:'center'}}>
                            <View style={{flexDirection:"row", alignItems:"center", alignSelf:"center"}}>
                                <Image source={require("../images/fire.png")}
                                    style={{height:25, width:20}}/>
                                <Text style={{paddingHorizontal:10,fontWeight:"bold",fontSize:16}}>290 calories</Text>    
                            </View>
                        </View>
                        <View style={{width:"10%"}}>
                            <Icon name="heart" color="#e74c3c" size={25}>

                            </Icon>
                        </View>
                    </View>
                    <Image
                        source={require("../images/sandwitch-big.png")} 
                        style={{height:300, width:300,alignSelf:"center"}}/>
                        <View 
                            style={{
                                flexDirection:"row",
                                alignItems:"center",
                                alignSelf:"center",
                                backgroundColor:"#f6f3fb",
                                paddingHorizontal:20,
                                paddingVertical:8,
                                borderRadius:20
                            }}>
                                <TouchableOpacity
                                    onPress={this.addQuantity}>
                                    <Text style={{fontWeight:"bold", fontSize:18}}>+</Text>
                                </TouchableOpacity>

                                <Text style={{
                                        fontSize:18,
                                        fontWeight:"bold", 
                                        paddingHorizontal:20}}>
                                        {this.state.quantity}
                                </Text>

                                <TouchableOpacity
                                    onPress={this.deleteQuantity}>
                                    <Text style={{fontWeight:"bold", fontSize:18}}>-</Text>
                                </TouchableOpacity>
                        </View>
                        <View style={{
                                flexDirection:"row", 
                                alignItems:"center",
                                marginHorizontal:20, 
                                marginTop:30}}>
                            <View>
                                <Text style={{fontSize:25, fontWeight:"bold"}}>
                                    Smoked burger
                                </Text>
                                <Text style={{fontSize:15, fontWeight:"bold",color:"#a4a4a9"}}>
                                    beef burger
                                </Text>
                            </View>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:28,
                                marginLeft:70
                            }}>$ 12.99</Text>
                        </View>
                        <Text 
                            style={{
                                fontSize:20, 
                                fontWeight:"bold",
                                marginTop:30,
                                marginHorizontal:20}}>
                                    Ingredients
                        </Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{marginTop:20, marginHorizontal:20}}
                        >
                            <View style={{
                                borderRadius:15,
                                borderWidth:.1,
                                paddingHorizontal:12,
                                paddingVertical:8,
                                marginRight:10
                            }}>
                                <Image source={require("../images/sandwitch.png")} style={{height:30, width:30}}/>
                                
                            </View>
                            <View style={{
                                borderRadius:15,
                                borderWidth:.1,
                                paddingHorizontal:12,
                                paddingVertical:8,
                                marginRight:10
                            }}>
                                <Image source={require("../images/sandwitch.png")} style={{height:30, width:30}}/>
                                
                            </View>
                            <View style={{
                                borderRadius:15,
                                borderWidth:.1,
                                paddingHorizontal:12,
                                paddingVertical:8,
                                marginRight:10
                            }}>
                                <Image source={require("../images/sandwitch.png")} style={{height:30, width:30}}/>
                                
                            </View>
                            <View style={{
                                borderRadius:15,
                                borderWidth:.1,
                                paddingHorizontal:12,
                                paddingVertical:8,
                                marginRight:10
                            }}>
                                <Image source={require("../images/sandwitch.png")} style={{height:30, width:30}}/>
                                
                            </View>
                            <View style={{
                                borderRadius:15,
                                borderWidth:.1,
                                paddingHorizontal:12,
                                paddingVertical:8,
                                marginRight:10
                            }}>
                                <Image source={require("../images/sandwitch.png")} style={{height:30, width:30}}/>
                            </View>
                        </ScrollView>
                        <Text 
                            style={{
                                fontWeight:"bold",
                                fontSize:20,
                                marginTop:30,
                                marginHorizontal:20
                                }}>Detail</Text>
                        <Text
                            style={{
                                color:"#a4a4a9",
                                fontWeight:"bold",
                                fontSize:15,
                                marginTop:10,
                                marginHorizontal:20,
                                textAlign:"justify"
                            }}>
                                the most uniqu fire grilled pretty,
                                fire grilled, charred, seared, well done.
                                All natural beef, grass-feed beef,
                                Fiery, juicy, greecy, delicious moist 
                            </Text>
                </ScrollView>
                <View style={{
                    position:"absolute",
                    backgroundColor:"#000",
                    height:50,
                    width:50,
                    bottom:30,
                    alignItems:"center",
                    alignSelf:"center",
                    justifyContent:"center",
                    borderRadius:25
                }}>
                    <Icon name="shopping-cart" size={24} color="#fff"></Icon>
                    
                </View>       
            </View>
        )
    }
}