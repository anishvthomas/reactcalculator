import React ,{Component} from 'react';
import Button from './Button';
import './ButtonPanel.css'

class ButtonPanel extends Component  {
    handleClick = (buttonSymbol) => {
        this.props.clickHandler(buttonSymbol)
    }

    render (){
        return (<div className="ButtonPanel">
            <div>
                <Button symbol={'AC'} clickHandler={this.handleClick}/>
                <Button symbol={'+/-'} clickHandler={this.handleClick}/>
                <Button symbol={'%'} clickHandler={this.handleClick}/>
                <Button symbol={'/'} clickHandler={this.handleClick}orange/>
            </div>
            <div>
                <Button symbol={'7'} clickHandler={this.handleClick}/>
                <Button symbol={'8'} clickHandler={this.handleClick}/>
                <Button symbol={'9'} clickHandler={this.handleClick}/>
                <Button symbol={'X'} clickHandler={this.handleClick}orange/>
            </div>
            <div>
                <Button symbol={'6'} clickHandler={this.handleClick}/>
                <Button symbol={'5'} clickHandler={this.handleClick}/>
                <Button symbol={'4'} clickHandler={this.handleClick}/>
                <Button symbol={'-'} clickHandler={this.handleClick}orange/>
            </div>
            <div>
                <Button symbol={'3'} clickHandler={this.handleClick}/>
                <Button symbol={'2'} clickHandler={this.handleClick}/>
                <Button symbol={'1'} clickHandler={this.handleClick}/>
                <Button symbol={'+'} clickHandler={this.handleClick}orange/>
            </div>
            <div>
                <Button symbol={'0'} clickHandler={this.handleClick}wide/>
                <Button symbol={'.'} clickHandler={this.handleClick}/>
                <Button symbol={'='} clickHandler={this.handleClick}orange/>
            </div>
        </div>);
    }
}
export default ButtonPanel;
