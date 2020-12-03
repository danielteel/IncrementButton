import React from 'react';
import GenericButton from './GenericButton';
import './App.css';



export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {count: 0, buttons:[]};
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let newAmount=Number(event.target.addThis.value);
        if (this.state.buttons.includes(newAmount)) return;

        this.setState({ buttons: [...this.state.buttons, newAmount]});
    }

    incrementCounter = (amount) => {
        this.setState( { count: this.state.count + amount} );
    }

    resetButtons = () => {
        this.setState( {buttons: [] } );
    }
    resetCounter = () => {
        this.setState({count: 0})
    }
 
    render (){
        return (
                <div className="app">
                    <header>
                        <h1>Custom Counter</h1>
                        <p>{this.state.count}</p>
                    </header> 
                    <form onSubmit={ this.handleSubmit }>
                        <div>
                            <input type="number" name="addThis"/>
                            <button type="submit">Generate Button</button>
                        </div>
                            <div className="new-buttons">
                                {this.state.buttons.map( val => <GenericButton onClick={this.incrementCounter} valueToPass={val}>{"Increment by "+val}</GenericButton> ) }
                            </div>
                    </form>
                    <GenericButton onClick={this.resetButtons}> Reset all the buttons! </GenericButton>
                    <GenericButton onClick={this.resetCounter}> Reset counter </GenericButton>
                </div>
            );
    }
}
