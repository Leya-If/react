/**
 * Created by le on 2017-09-29.
 */
import React, {Component} from 'react';
import OneUser from './components/oneUser';
import TheInput from './components/input';

class About extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
            value: null
        }
    }
    onChangeHandler = (event) => {
        const {value} = event.target;
        this.setState({ value: value });

    };

    render() {

        return (
            <div>
                <TheInput
                    data={this.state.value}
                    onChangeHandler={this.onChangeHandler}
                />
                <h1>{this.state.value}</h1>
                <OneUser/>
            </div>
        );
    }
}

export default About;