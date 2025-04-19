import { Text,StyleSheet,View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { useRoute } from "@react-navigation/native"

export default function Table(){
   const route = useRoute();
  const number=route?.params?.value

    return(
       <View style={styles.bgCard}>
        <View style={styles.innerCard}>
        <FlatList
        data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
           keyExtractor={(item)=>item}
           renderItem={(item)=><Text style={{fontSize:18}}>{`${number}    x    ${item?.item}    =    ${number * item?.item}` }</Text>}
           ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        
        />
        </View>

       </View>
    )
}
const styles = StyleSheet.create({
    bgCard:{
        flexDirection:"column",
        // alignItems:"center",
    },
    innerCard:{
        backgroundColor:"#ffffff",
        margin:30,
        paddingVertical:20,
         alignItems:"center",
         borderRadius:20


    }
})