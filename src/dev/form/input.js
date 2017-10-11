import React, {Component} from 'react';

class Input extends Component {
    render() {
        return (
            <div className={this.props.error ? 'form-group has-error' : 'form-group'}>
                <label className={this.props.label === '' && 'sr-only'}>{this.props.label}</label>
                {this.props.children}
            </div>
        )
    }
}

export default Input;