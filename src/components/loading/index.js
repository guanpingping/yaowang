import React from "react";

export default class Loading extends React.Component{
    render(){
        return(
            <div>
                <img src={require('./loading.gif')}/>
            </div>
        )
    }
}