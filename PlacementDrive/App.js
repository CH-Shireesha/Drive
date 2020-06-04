import React from 'react';
import { StyleSheet, TextInput,Text, View,Button } from 'react-native';
import StarRating from 'react-native-star-rating';

export default class Feedback  extends React.Component{
  constructor(){
    super();
    this.state= {value: '',rating:"",option:"",solution:""};
    this.OptionYes = this.OptionYes.bind(this);
    this.OptionNo = this.OptionNo.bind(this);
    this.Submit = this.Submit.bind(this);
  }

Change = (text) =>{
  this.setState({ value: text })
}
onStarRatingPress =(rating) =>{
   this.setState({rating:rating})
   console.log(rating)
}
OptionYes(event){
  event.preventDefault();
  this.setState({option:"yes"});
  console.log("yes")
}
OptionNo(event){
  event.preventDefault();
  this.setState({option:"no"});
}
Submit(event){
event.preventDefault();
this.setState({solution:this.state.value+" "+this.state.rating+" "+this.state.option});
this.clearText();
}
clearText(){
  this.setState({value:""})
  this.setState({rating:""})
  this.setState({option:""})
}
render(){
  return (
    <View style={styles.Viewstyle}>
    <Text>Comment</Text>
    <TextInput style={styles.container}
    type="text"
    value={this.state.value}
    multiline = {true}
    onChangeText={this.Change}
    underlineColorAndroid = "transparent"
    autoCapitalize = "none"/>
    <Text style={styles.textstyle}>How do you rate this drive?</Text>
    <StarRating disabled={false}
        maxStars={5}
        fullStarColor="yellow"
        rating={this.state.rating}
        selectedStar={(rating) => this.onStarRatingPress(rating)}/>
   <Text style={styles.textstyle}>Do you want to meet with counselor?</Text>
   <View style={styles.buttonstyle}>
   <Button  color="green" value = "" title="YES" onPress={this.OptionYes}/>
   <Button  color="red" value = "" title="NO" onPress={this.OptionNo}/>
   
   </View>
   <View style={styles.submitstyle} >
   <Button color="#595959" value = "" title="Submit" onPress={this.Submit}/>
   </View>
   <Display text={this.state.solution}/>
   </View>
   
  );
 
}

}
class Display  extends React.Component{
  render(){
    return(
       <Text>{this.props.text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin:10,
    borderColor: '#660066',
    borderWidth: 1,
    width:300,
    paddingTop:50,
    backgroundColor: '#fff',
   
  },
  Viewstyle:{
    marginTop:50,
    borderWidth: 1,
    marginRight:20,
    marginLeft:20,
  },
  buttonstyle:{
    flexDirection: 'row',
    backgroundColor: 'white',
    marginStart:80,
    marginEnd:100,
    justifyContent: 'space-between',
    paddingBottom:50,
  },
  textstyle:{
      paddingTop:20,
      paddingBottom:10,
  },
  submitstyle:{
    flexDirection: 'row',
      marginStart:10,
      marginEnd:1400,
  }
});