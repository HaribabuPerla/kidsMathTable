import { Text,View,StyleSheet } from "react-native";
import { FlatList } from "react-native";
import {HomeData} from "../constants/HomeData"
import Card from "../components/card";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
   const navigation = useNavigation()
    const pressHandler=(data)=>{
        navigation.navigate(data?.title,{value:data?.title})
    }
    return(
        <View>
           <FlatList
              data={HomeData}
              keyExtractor={(item)=>item?.id}
              renderItem={(data)=><Card data={data?.item} pressHandler={pressHandler}/>}
              ItemSeparatorComponent={() => <View style={{ height: 16 }} />}

           
           />
        </View>
    )
}

