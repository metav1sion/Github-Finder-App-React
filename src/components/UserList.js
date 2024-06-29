import React, {Component} from 'react';
import User from "./User";
import Loading from "./Loading";

class UserList extends Component {
    render() {
        if(this.props.loading){
            return <Loading/>;
        }
        return (
            <div>
                {this.props.users.map( (user,index) =>(
                    <User users ={user} key={index} />
                ))}
            </div>
        );
    }
}

export default UserList;