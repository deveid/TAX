import React, {Component} from "react";
import {Router} from "react-native-router-flux";
import {Provider} from "react-redux";
import scenes from '../routes/home/scenes'
import PropTypes from 'prop-types';
import HomeContainer from '../home/containers/HomeContainers';
import { View, Text } from 'react-native'
import { NativeRouter } from 'react-router-native'
import { StackSwitch } from 'react-router-native-navigation'
import { createStackNavigator } from 'react-native-navigation-stack'
import { createAppContainer } from 'react-native-navigation';

// export default class AppContainer extends Component{
// static propTypes={
//     // store:PropTypes.checkPropTypes()
    
// }
// render(){
//     return(
//            <Provider store={this.props.store}>
//                <Router scenes={scenes}/>
//            </Provider>      
//         );
// }
// }


let RootStack = createStackNavigator({
  Counter: CounterContainer,
  StaticCounter: StaticCounterContainer,
});

let Navigation = createAppContainer(RootStack);

// Render the app container component with the provider around it
export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Navigation scenes={scenes} />
      </Provider>
    );
  }
}
