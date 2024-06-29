import React, {Component} from 'react';

class User extends Component {

    render() {
        const {avatar_url, login, html_url} = this.props.users;
        return (
            <div className={"card mb-3"}>
                <div className={"row g-0"}>
                    <div className={"col-md-3"}>
                        <img className={"img-fluid rounded-start avatar"} src={avatar_url} alt={login}/>
                    </div>
                    <div className={"col-md-9"}>
                        <div className={"card-body mx-2"}>
                            <h3 className={"card-title"}>{login}</h3>
                            <hr></hr>
                            <a target={"_blank"} rel="noreferrer"  href={html_url} className={"btn btn-primary"}>GitHub Profili</a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;