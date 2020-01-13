import React,{Component} from 'react';
import {View,Text} from 'react-native';
import createStore from './store/createStore';
import AppContainer from './AppContainer';


export default class Main extends Component{
    renderApp=()=>{
        const initalState=window.__INITIAL_STATE__;
        const store=createStore(initalState);

        return(
            <AppContainer store={store}/>
        );

    }
    render(){
        return this.renderApp();
    }
}