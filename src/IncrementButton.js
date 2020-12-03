import React from 'react'

export default class IncrementButton extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <button type="button" onClick={ ()=> {this.props.onClick(this.props.amountToIncrement)} }>{this.props.amountToIncrement}</button>
        )
    }
}//onClick