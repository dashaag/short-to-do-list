import *as React from 'react';
export class ColorredText extends React.Component{
    constructor(){
        super();
        this.state={
            color:"Orange"
        };
    }
    onColorChange=(event)=>{
this.setState({
    color:event.target.value
});
    }
    render(){
return (
    <div>
       <div onChange={this.onColorChange}>
        <input type="radio" value="Red" name="color"></input> <span>Red</span>        
        <input type="radio" value="Green" name="color"></input> <span>Green</span>
        <input type="radio" value="Blue" name="color"></input> <span>Blue</span></div>
        <p style={{color:this.state.color}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
);
    }
}