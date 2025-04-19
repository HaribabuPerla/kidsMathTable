import { Pressable,Text,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Card({data,pressHandler}){
    const navigation=useNavigation()
    console.log("hari---->",data)
    return(
        <Pressable style={styles.container} onPress={()=>pressHandler(data)}>
             <Text style={styles.title}>{data?.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
       backgroundColor:"red",
       margin:20,
       padding:20,
       borderRadius:15,
       
    },
    title:{
        color:"white",
        textAlign:"center",
        fontSize:20

    }
  });

