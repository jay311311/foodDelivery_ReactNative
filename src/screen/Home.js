import React from "react";
import {Picker} from '@react-native-community/picker';
import { View, Image,Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Entypo"

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
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:40}}>
                        <View style={{
                            alignItems:"center",
                            flexDirection:"row",
                            backgroundColor:"#f9dd7a",
                            marginHorizontal:15,
                            borderRadius:25,
                            paddingVertical:5
                            }}></View>
                </ScrollView>
            </ScrollView>
        )
    }
}