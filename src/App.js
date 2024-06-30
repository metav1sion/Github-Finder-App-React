import React, {Component} from 'react';
import Navbar from './components/Navbar'
import UserList from "./components/UserList";
import Search from "./components/Search";
import Alert from "./components/Alert";


// HTTP Request componentdidmount

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users:  [],
            showClearButton: false,
            alert: null
        }
    }

    searchUsers = (value) => {
        let newValue = value.trim()

        this.setState({loading: true});
        setTimeout(()=>{
            fetch("https://api.github.com/search/users?q=" + newValue)
                .then(response => response.json())
                .then(data => this.setState({users: data.items, loading: false}))
        },1000)
        this.setState({showClearButton: true})


    }

    // componentDidMount() {
    //     this.setState({loading: true});
    //
    //     setTimeout(()=>{
    //         fetch("https://api.github.com/users")
    //             .then(response => response.json())
    //             .then(data => this.setState({users: data, loading: false}))
    //     },2000)
    //}

    deleteUsers = () => {
        this.setState({users: [], showClearButton: false });
    }

    displayAlert = (msg,type) => {
        this.setState({
            alert: {msg: msg, type: type}
        });
        setTimeout(() => {
            this.setState({
                alert: null
            });
        },3000)
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Search displayAlert={this.displayAlert} showClearButton={this.state.showClearButton} search={this.searchUsers} delete={this.deleteUsers}/>
                <Alert error={this.state.alert}/>
                <div className={"container mt-3"}>
                    <UserList users = {this.state.users} loading={this.state.loading}/>
                </div>
            </div>
        );
    }
}

export default App;

