import React from 'react';
import Form from './library/form';

export default props => {
    const formData = {
        inputs: [
            {
                name: 'email-data',
                type: 'email',
                placeholder: 'name@example.com',
                label: 'Email',
                required: 'required'
            },
            {
                name: 'password-data',
                type: 'password',
                placeholder: 'password',
                label: 'Password',
                required: 'required'
            }
        ],
        submit: 'Sign in',
        url: 'mywebsite.com/webapi',
        methodType: 'post',
        formtype: props.type
    }

    return <Form {...formData} />
}