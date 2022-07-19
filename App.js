import React, {Component} from "react";
import reactDom from "react-dom";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Image
          source={require('./scr/cronometro.png')}
          style={styles.img}
        />
        <Text style={styles.text}>0.0</Text>
        <View style={styles.btnArea}>
          
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}></Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  img:{

  },
  text:{

  },
  btnArea:{

  },
  btn:{

  },
  btnText:{

  },
})
export default App;