import React, {Component} from 'react';
import Text from './text';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = this.initializeState();
        this.eachInput = this.eachInput.bind(this);
        this.update = this.update.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    initializeState() {
        var obj = {};

        for (let item of this.props.inputs) {
            obj[item.name] = '';    
        }

        obj.error = false;

        return obj;
    }

    update(valid, key, value) {
        this.setState({ error: !valid, [key]: value });
    }

    submitForm(e) {
        var obj = JSON.parse(JSON.stringify(this.state));
        delete obj.error;

        var message = `
            Submitting to server: ${this.props.url}
            As the method of: ${this.props.methodType}
            With the data: ${JSON.stringify(obj)}
        `

        alert(message);
        e.preventDefault();
    }

    eachInput(item, i) {
        return <Text {...item} updateForm={this.update} />;
    }

    render() {
        return (
            <form className={this.props.formtype}>
                {
                    this.props.inputs.map(this.eachInput)
                }
                <button type="submit" className="btn btn-primary" disabled={this.state.error && 'disabled'} onClick={this.submitForm}>{this.props.submit}</button>
            </form>
        )
    }
}

export default Form;