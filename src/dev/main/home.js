import React, {Component} from 'react';
import Menu from './menu';
import Login from '../form/login';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="row">
                    <Menu />
                </nav>
                <div className="row top-gutter">
                    <aside className="col-sm-4">

                    </aside>
                    <section className="col-sm-4">
                        <Login type="form-horizontal" />
                    </section>
                    <aside className="col-sm-4">

                    </aside>
                </div>
            </div>
        )
    }
}

export default Home;