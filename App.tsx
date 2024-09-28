import React, { useEffect ,useState} from "react";
import { View , Text, Button ,  } from "react-native";




function App(){
  const [increaseNumber , setIncrease] = useState(0)
  const [decreasenumber , setDecrease] = useState(0)
  const [helloFlag , setHelloflag] = useState(true)

  useEffect(() => {console.log("number decreased")}, [decreasenumber])
  useEffect(() => {console.log("number increased")}, [increaseNumber])

  useEffect(() => {console.log("Mounting...")} , [])  //render olsa bile sadece bir kere calisir Mount olayı

  function updateFlag(){
    setHelloflag(!helloFlag);
  }
return(

  <View>
    <Text>number {increaseNumber}</Text>
    <Text>number {decreasenumber}</Text>
    <Button title = "up !" onPress={() => setIncrease(increaseNumber +1)}/>
    <Button title = "down !" onPress={() => setDecrease(decreasenumber -1)}/>
    <Button title = "Update" onPress={updateFlag} />
      {helloFlag && <Hello />}  
  </View>
)
}
export default App;

function Hello() {
  useEffect(() => {
    console.log("Hello World");

    // Cleanup function
    return () => {
      console.log("Bye Bye World");
    };
  }, []); 

  return (
    <Text style={{ backgroundColor: "aqua", padding: 10 }}>
      I Am Hello Component
    </Text>
  );
}

