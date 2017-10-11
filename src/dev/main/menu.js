import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid text-warning">
                    <div className="navbar-header">
                        <a href="" className="navbar-brand">My React Form Library</a>
                    </div>
                    <div id="navbar-main" className="navbar-collapse collapse" aria-expanded="true">
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;