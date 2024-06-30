import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            value: ""
        }
    }

    onChange = (event) => {
        //console.log(event.target.value);
        this.setState({
            value: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();//sayfa yenilenmesini önlüyor.
        let newValue = this.state.value.trim();
        if (newValue === "") {
            this.props.displayAlert("Lütfen bir değer giriniz.", "danger")
        }
        else {
            this.props.search(this.state.value)
            this.setState({value: ""})
        }

    }

    // deleteUsers = () => {
    //     this.props.delete();
    // }

    render() {
        return (
            <div className={"container my-3"}>
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input value={this.state.value} onChange={this.onChange} type="text" className="form-control" placeholder="Ara..."/>
                        <button className={"btn btn-primary"} type={"submit"} >Ara</button>
                    </div>
                </form>

                {
                    this.props.showClearButton &&
                    <button className={"btn btn-outline-danger mt-2 btn-block"} onClick={this.props.delete}>Sonuçları
                        Temizle</button>
                }

            </div>
        );
    }
}

export default Search;