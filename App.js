

import React, { Component } from 'react';
import { Button } from 'react-native';
import {
  Platform,
  StyleSheet,
  Text,
  View, TextInput, FlatList, ListView, ScrollView
} from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: [],
      value: '',
      BtnText: 'Add',
      editedIndex: undefined
    }
  }
  incre = (text) => {
    (this.state.value != '') ? (
      this.setState({ counter: [...this.state.counter, this.state.value], value: '' })
      // this.setState({
      //   value:''
      // })
    ) : (
        alert('Please enter something to set')
      )
  }


  editFunc = () => {
    if(this.state.value!=''){

      let Eindex = this.state.editedIndex;
      let DefaultValue = this.state.value;
      let duparray = this.state.counter;
  
      duparray.splice(Eindex,1,DefaultValue)
      this.setState({
        counter:duparray,
        BtnText:'Add',
        value:''
      })
    }
    else{
      alert('Please enter something to set')
      
    }
  }




  Delete = (index) => {
    let duparray = this.state.counter;
    duparray.splice(index, 1);
    this.setState({
      counter: duparray
    })
  }


  render() {
    return (
      <View>

        <TextInput
          onChangeText={(text) => this.setState({ value: text })}
          editable={true}
          maxLength={100}
          placeholder='Enter Todo'
          style={{ width: '100%' }}
          value={this.state.value}
        />


        {
          (this.state.BtnText === 'Save') ? (

            <Button
              onPress={() => this.editFunc()}
              title={this.state.BtnText}
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          ) : (
              <Button
                onPress={() => this.incre()}
                title={this.state.BtnText}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            )
        }

        <ScrollView>
          {
            this.state.counter.map((value, index) => {
              return (
                <View style={{ backgroundColor: 'red', marginHorizontal: 10, marginVertical: 8 }} key={index}>
                  <Text style={{ fontSize: 20, width: '100%', color: 'white' }}>{value}</Text>
                  <View>
                    <Button

                      onPress={() => this.setState({ BtnText: 'Save', value: value, editedIndex: index })}
                      title="Edit"
                      color="black"
                      style={{ width: '100%' }}
                    />
                  </View>
                  <View style={{ marginTop: 2 }}>

                    <Button
                      onPress={() => this.Delete(index)}
                      title="Delete"
                      color="black"
                      style={{ width: '100%' }}
                    />
                  </View>

                </View>
              )
            })
          }
        </ScrollView>
      </View>




    );
  }
}




