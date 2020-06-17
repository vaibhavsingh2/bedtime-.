import * as React from 'react';
import {Text,View,TouchableOpacity,Alert} from 'react-native';
export default class readScreen extends React.Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text> Read </Text>
            <View>
                <TouchableOpacity style={{backgroundColor: 'red'}}
                onPress={()=>{
            Alert.alert("Hi");
                }}>
                    <Text> Hi </Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
} 