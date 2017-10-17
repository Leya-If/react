/**
 * Created by le on 2017-09-29.
 */
import React, {Component} from 'react';

class TheInput extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <input onChange={this.props.onChangeHandler}/>
                <div>{this.props.data}</div>
            </div>
        )
    }
}

export default TheInput;