import React, {Component} from 'react';
import Text from './text';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = this.initializeState();
        this.update = this.update.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    initializeState() {
        let obj = {};

        for (let item of this.props.inputs) {
            obj[item.name] = '';    
        }

        obj.error = this.isStillRequired(obj);

        return obj;
    }

    isStillRequired(obj) {
        return this.props.inputs.some(input => input.required && input.required === 'required' && obj[input.name].length === 0);
    }

    update(valid, key, value) {
        this.setState({ [key]: value });
        this.setState({ error: !valid || this.isStillRequired(this.state) });
    }

    submitForm(e) {
        let obj = JSON.parse(JSON.stringify(this.state));
        delete obj.error;

        let message = `
            Submitting to server: ${this.props.url}
            As the method of: ${this.props.methodType}
            With the data: ${JSON.stringify(obj)}
        `

        alert(message);
        e.preventDefault();
    }

    render() {
        return (
            <form className={this.props.formtype}>
                {
                    this.props.inputs.map((item, i) => <Text key={i} attributes={item} updateForm={this.update} />)
                }
                <button type="submit" className="btn btn-primary" disabled={this.state.error ? 'disabled' : ''} onClick={this.submitForm}>{this.props.submit}</button>
            </form>
        )
    }
}

export default Form;