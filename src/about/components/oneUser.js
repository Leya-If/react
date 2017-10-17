/**
 * Created by le on 2017-09-29.
 */
import React, {Component} from 'react';


const users = [
    {name:'lela', surname: 'ioffe'},
    {name:'username', surname: 'usersurname'}
];

class OneUser extends Component {
    constructor() {
        super();
    }

    showMeUser(user){
        this.setState({currentUser: user});
        console.log(user);
    };

    render() {
        const listItems = users.map((user, index) =>
            <li key={index}
                /*onClick={this.showMeUser.bind(this, user)}*/
            >
                {user.name}, {user.surname}
            </li>
        );

        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default OneUser;