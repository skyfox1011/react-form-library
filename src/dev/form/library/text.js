import React, {Component} from 'react';

class Text extends Component {
    constructor(props) {
        super(props);

        this.state = { error: false };
        this.update = this.update.bind(this);
    }

    update(e) {
        const valid = typeof this.props.customValidate === 'function' ? this.props.customValidate(e) : e.target.validity.valid;
        this.props.updateForm(valid, e.target.name, e.target.value);
        this.setState({ error: !valid });
    }

    render() {
        return (
            <div className={this.state.error ? 'form-group has-error' : 'form-group'}>
                <label className={this.props.attributes.label === '' ? 'sr-only' : ''}>{this.props.attributes.label}</label>
                <input className="form-control" {...this.props.attributes} onChange={this.update} />
            </div>
        )
    }
}

export default Text;