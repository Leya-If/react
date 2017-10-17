import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as counterActions from './actions/CounterActions';
import * as userActions from './actions/UsersActions';
import newUniqid from 'uniqid';


import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: null,
            value: null
        };

        this.ToDo = this.ToDo.bind(this);
        this.ToDo1 = this.ToDo1.bind(this);
        console.log(this.props.users.users);
    }
    ToDo (){
        this.props.Increment(50)
    }
    ToDo1 (){
        this.props.Decrement(20)
    }

    createUser = () => {
        const user = {
            id: newUniqid(),
            name: this.state.value
        };
       this.props.createUser(user);
    };

    onChangeHandler = (event) => {
        const {value} = event.target;
        this.setState({ value: value });
        console.log(this.state.value);
    };

    deleteUser(userID){
        this.setState({currentUser: userID});
        console.log(userID);
        this.props.deleteUser(userID);
    };

    test = (user) => {
        console.log(user);
    };
    render() {
        console.info('[App component][render]');
        const listUsers = this.props.users.users.map((user, index) =>
            <li onClick={() => this.test(user)} key={index}>
                {user.name}, {user.id}
                <button onClick={this.deleteUser.bind(this, user.id)}>del</button>
            </li>
        );
        return (
            <div className="root">
              <h1>Redux Tutorial</h1>
                <h1>{this.props.mainState}</h1>
                <button onClick={this.ToDo}>+</button>
                <button onClick={this.ToDo1}>-</button>

                <input onChange={this.onChangeHandler}/>
                <button onClick={this.createUser}>Create User</button>


                <ul>
                    {listUsers}
                </ul>

            </div>
        );
    }
}


const mapStateToProps = state => ({
    mainState: state.counter,
    users: state.users
});

const mapDispatchToProps = (dispatch) => ({
    Increment(value) {
        dispatch(counterActions.Increment(value))
    },
    Decrement(value) {
        dispatch(counterActions.Decrement(value))
    },
    createUser(newUser) {
        dispatch(userActions.createUser(newUser));
    },
    renameUser(currentUser) {
        dispatch(userActions.createUser(currentUser));
    },
    deleteUser(currentUser){
        dispatch(userActions.deleteUser(currentUser));
    }

})


export default connect(mapStateToProps, mapDispatchToProps)(App);
