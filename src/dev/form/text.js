import React, {Component} from 'react';
import Input from './input';

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
            <Input label={this.props.label} error={this.state.error}>
                <input type={this.props.type} name={this.props.name} className="form-control" placeholder={this.props.placeholder} onChange={this.update} />
            </Input>
        )
    }
}

export default Text;