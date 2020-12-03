import React from 'react';
import IncrementButton from './IncrementButton';
import './App.css';

export default class App extends React.Component {
 constructor(props){
    super()
    this.state = {count: 0, buttons:[]};
 }
 handleSubmit = (event) => {
     event.preventDefault()
    //generate button
    let newButtons=this.state.buttons;
    let newAmount=Number(event.target.increment.value);
    if (this.state.buttons.includes(newAmount)){
        return;
    }
    newButtons.push(newAmount);
    this.setState({ buttons: newButtons});
 }

 incrementCounter = (amount) => {
    this.setState({ count: this.state.count + amount});
 }
 
 render (){
     return (
         <div className="app">
             <title> test </title>
             <header>
                 <h1>Custom Counter</h1>
                 <p>{this.state.count}</p>
            </header> 
            <form onSubmit={ this.handleSubmit }>
                <div>
                    <input type="number" name="increment"/>
                    <button type="submit">generate button</button>
                </div>
                <div className="new-buttons">
                {
                 this.state.buttons.map( (buttonVal) => {
                    return <IncrementButton onClick={this.incrementCounter} amountToIncrement={buttonVal}/>
                 })
                }
                </div>
            </form>

         </div>

     )
 }
}

//           <div>{ this.state.count }</div>
//           <form onSubmit={this.handleSubmit}>
//             <input type="number" name="increment" />
//             <button type="submit">generate button</button>
//           </form>
//           <button>add 4</button>
//           <button>add 8</button>
//         </div>
//       );
//     }
//   }


