import React, {Component} from 'react';
import Form from '../form/form';

class Login extends Component {
    getInputs() {
        return [
            {
                name: 'email-data',
                type: 'email',
                placeholder: 'name@example.com',
                label: 'Email'
            },
            {
                name: 'password-data',
                type: 'password',
                placeholder: 'password',
                label: 'Password'
            }
        ];
    }

    render() {
        const formData = {
            inputs: this.getInputs(),
            submit: 'Sign in',
            url: 'mywebsite.com/webapi',
            methodType: 'post'
        }

        return (
            <div>
                <Form formtype="form-inline" {...formData} /><br /><br />
                <Form formtype="form-horizontal" {...formData} />
            </div>
        )
    }
}

export default Login;