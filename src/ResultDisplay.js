import React ,{Component} from 'react';
import './ResultDisplay.css'
class ResultDisplay extends Component {

    render (){

        return (<div className='ResultDisplay' >
        <div>{this.props.value} </div>
        </div>);
    }

}
export default ResultDisplay;
