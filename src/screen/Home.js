import React from "react";
import {Picker} from '@react-native-community/picker';
import { View, Image,Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Entypo"
import Product from "../components/Product"

export default class Home extends React.Component{

    state={
        city :"Los Angeles"
    }

    render(){
        return(
            <ScrollView style={{backgroundColor:"#fff"}}>
                <View style={{ flexDirection:"row", justifyContent:"space-around",
                    alignItems:"center",
                    marginTop:40,
                    marginHorizontal:20
                    }}>
                    <View style={{width:"5%" }}>
                        <Image source={ require("../images/menu.png")}/>
                    </View>
                    <View style={{width:"80%", alignItems:"center"}}>
                        <Picker 
                            selectedValue={this.state.city}
                            style={{height:50, width:160}}
                            onValueChange={(itemValue,itemIndex)=>this.setState({city:itemValue})}
                            >
                            <Picker.Item
                                label="Los Angeles"
                                value="Los Angeles"
                                style={{fontWeigth:"bold"}}
                            >
                            </Picker.Item>
                            <Picker.Item
                                label="Mumbai"
                                value="Mumbai"
                                style={{fontWeigth:"bold"}}
                                >
                            </Picker.Item>
                            <Picker.Item
                                label="Mumbai"
                                value="Mumbai"
                                style={{fontWeigth:"bold"}}
                                >
                            </Picker.Item>
                        </Picker>
                    </View>
                    <View style={{width:"10%"}}>
                            <Icon name="magnifying-glass" size={30}></Icon>
                    </View>
                </View>
                <View style={{paddingHorizontal:20, marginTop:50}}>
                    <Text style={{fontSize:30, fontWeight:"bold"}}>food that</Text>
                    <Text style={{fontSize:30, fontWeight:"bold"}}>meet your meet</Text>
                </View>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false} 
                    style={{marginTop:40}}>
                        <View style={{
                            alignItems:"center",
                            flexDirection:"row",
                            backgroundColor:"#f1c40f",
                            marginHorizontal:5,
                            borderRadius:25,
                            paddingVertical:2.5
                            }}>
                               <Image 
                                    source={require("../images/sandwitch-big.png")}
                                    style={{height:40, width:40}}/>
                                <Text style={{fontWeight:"bold",fontSize:16,padding:10}}>
                                    buggers
                                </Text>
                            </View>
                            <View style={{
                            alignItems:"center",
                            flexDirection:"row",
                            backgroundColor:"#2ecc71",
                            marginHorizontal:5,
                            borderRadius:25,
                            paddingVertical:2.5
                            }}>
                               <Image 
                                    source={require("../images/sandwitch-big.png")}
                                    style={{height:40, width:40}}/>
                                <Text style={{fontWeight:"bold",fontSize:16,padding:10}}>
                                    burrito
                                </Text>
                            </View>
                            <View style={{
                            alignItems:"center",
                            flexDirection:"row",
                            backgroundColor:"#e67e22",
                            marginHorizontal:5,
                            borderRadius:25,
                            paddingVertical:2.5,
                            }}>
                               <Image 
                                    source={require("../images/sandwitch-big.png")}
                                    style={{height:40, width:40}}/>
                                <Text style={{fontWeight:"bold",fontSize:16,padding:10}}>
                                    pizza
                                </Text>
                            </View>
                        </ScrollView>
                            <View style={{
                                alignItems:"center", 
                                marginHorizontal:20,
                                flexDirection:"row",
                                marginTop:50}}>
                                <View style={{width:"50%"}}>
                                    <Text style={{fontSize:22, fontWeight:"bold"}}>
                                        New Product
                                    </Text>
                                </View>
                                <View style={{width:"50%",alignItems:"flex-end"}}>
                                    <Icon 
                                        name="dots-three-horizontal"
                                        size={25}
                                        color="#848385"
                                        ></Icon>
                                </View>
                            </View>

                            <View style={{flexDirection:"row",marginHorizontal:15,marginTop:30}}>
                               <Product 
                                    image={require("../images/sandwitch-big.png")}
                                    title="SmokeHouse"
                                    price="12.99"
                                    onPress={()=>{this.props.navigation.navigate("Detail")}}
                                    />
                               <Product
                                    image={require("../images/sandwitch-big.png")}
                                    title="SmokeHouse"
                                    price="12.99"
                                    marginTop={25}
                               />
                            </View>
                            <View style={{flexDirection:"row",marginHorizontal:15,marginTop:30}}>
                               <Product 
                                    image={require("../images/sandwitch-big.png")}
                                    title="SmokeHouse"
                                    price="12.99"
                                    
                                    />
                               <Product
                                    image={require("../images/sandwitch-big.png")}
                                    title="SmokeHouse"
                                    price="12.99"
                                    marginTop={25}
                               />
                            </View>
               
            </ScrollView>
        )
    }
}