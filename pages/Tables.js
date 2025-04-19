import { Text,View,FlatList,StyleSheet} from "react-native";
import { useRoute } from "@react-navigation/native";
import {numbersData} from "../constants/HomeData";
import Card from "../components/card";
import { useNavigation } from "@react-navigation/native";

export default function Tables(){
    const route=useRoute();
    const navigation = useNavigation()
   

    const pressHandler=(data)=>{
  
   navigation.navigate("Table",{value:data?.title})

    }
    return(
      <View style={styles.flexContainer}>
                <FlatList
                   data={numbersData}
                   keyExtractor={(item)=>item?.id}
                   renderItem={(data)=><Card data={data?.item} pressHandler={pressHandler}/>}
                   numColumns={4}
                   ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
     
                
                />
             </View>
    )
}

const styles = StyleSheet.create({
   flexContainer:{
      flexDirection:"column",
      alignItems:"center",
      textAlign:"center"
   }

})