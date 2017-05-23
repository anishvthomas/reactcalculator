import React ,{Component} from 'react';
import './Button.css'
class Button extends Component {
    constructor(props){
        super(props);
    }

    render (){
        var classname='Button';
        if(this.props.orange) {
            classname=classname+' orange';
        }
        if(this.props.wide) {
            classname=classname+' wide';
        }
        return (<div className={classname} >
        <button onClick={this.handleClick}>{this.props.symbol}</button></div>);
    }
    handleClick=()=> {
        console.log(this.props.symbol);
        this.props.clickHandler(this.props.symbol);
    }
}
export default Button;
