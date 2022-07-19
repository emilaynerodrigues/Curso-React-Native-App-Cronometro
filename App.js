import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      number: 0,
      btn: 'VAI',
      ultimo: null, 
    };
    this.timer = null; //variavel do timer
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }
  vai(){
    if(this.timer != null){
      //aqui vai pausar o timer
      clearInterval(this.timer); //responsável por parar o timer
      this.timer = null; //volta o valor da variavel timer para null/nula
      this.setState({btn:'VAI'}) //se o timer está parado mostra o texto VAI
    }else{
      //coloca o timer para girar
      this.timer = setInterval(()=> { // responsavel pelo timer
        this.setState({number: this.state.number + 0.1}) //soma 0.1 a variavel number
      }, 100) //diz a velocidade que é somado o valor na variavel, ou seja, a velocidade do timer
    
    this.setState({btn:'PARAR'}) //se o timer está rodando mostra o texto PARAR

    }
  }
  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }

    this.setState({
      ultimo: this.state.number,
      number: 0,
      btn: 'VAI' // quando o valor do timer for zerado, o texto voltara a ser VAI
    })

  }

  render(){
    return(
      <View style={styles.container}>
        <Image
          source={require('./scr/cronometro.png')}
          style={styles.img}
        />
        <Text style={styles.textTimer}> {this.state.number.toFixed(1)} {/*toFixed(numero) -> aumenta o numero de casas apos o ponto/virgula */}</Text>
        <View style={styles.btnArea}>
          
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnText}>{this.state.btn}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnText}>LIMPAR</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.timerArea}>
          <Text style={styles.textTime}> 
          {this.state.ultimo > 0 ? 'Último tempo: ' + this.state.ultimo.toFixed(2) + 's': ''} 
          {/* if ternario --> se this.state.ultimo for maior que 0 mostrará o texto, senão não mostrará nada */}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#00aeef',
  },
  img:{

  },
  textTimer:{
    marginTop:-160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
  },
  btnArea:{
    flexDirection:'row',
    marginTop: 100,
    height: 40,
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    width: 70,
    margin: 15,
    borderRadius: 9,
  },
  btnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  timerArea:{
    marginTop: 40,
  },
  textTime:{
    fontSize: 20,
    fontStyle:  'italic',
    color: '#fff',
  },
})
export default App;