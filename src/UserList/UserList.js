/**
 * Created by le on 2017-09-30.
 */
import React, {Component} from 'react';
import './userList.css';
import _ from 'lodash';

class UserList extends Component {
    constructor() {
        super();

        this.state = {
            users: null,
            search: ''
        }
    }

    componentWillMount() {
        this.setState({
            users: this.props.userList
        });
    };

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    searchByName = (e) => this.setState({ search: e.target.value });


    test = () => {
        console.log(this.refs.myImage);
        const img = this.refs.myImage;
        img.src = "https://media.giphy.com/media/DeJ2ifS2V2zlu/giphy.gif";

    }
    render() {
        console.log(this.props);
        console.log(this.state);

        const listUsers = this.props.userList
            .filter(user => user.name.toLowerCase().indexOf(this.state.search) > -1 ||
            user.surname.toLowerCase().indexOf(this.state.search) > -1)
            .map((user, index) =>
            <li
                key={index}

            >
                <img src={user.img} alt=""/>
                Name:{user.name}, Surname:{user.surname}
            </li>

        );
        console.log(listUsers);
        return (
            <div className="userList">
                <div className="search">
                    <input placeholder="Search by:" onChange={this.searchByName} type="text" />
                </div>
                <ul>
                    {listUsers.length > 0 ? listUsers : <div>not found</div>}
                </ul>
                <div>
                    <img
                        src=""
                        alt=""
                        ref="myImage"
                    />
                    <button onClick={this.test}>do</button>
                </div>
            </div>
        )
    };
}

export default UserList;