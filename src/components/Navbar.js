import React, {Component} from 'react';
import PropTypes from "prop-types";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <a href={"/"} className={"navbar-brand"}>
                        <i className={this.props.iconType}></i> {this.props.projectName}
                    </a>
                </div>
            </nav>
        );
    }
}

Navbar.defaultProps = {
    iconType: "bi bi-github",
    projectName: "GitHub Finder"
}

Navbar.propTypes = {
    iconType: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
}

export default Navbar;