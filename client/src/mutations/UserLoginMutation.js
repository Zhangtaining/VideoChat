import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro';

function commitUserLoginMutation(
    environment,
    email,
    password,
    onSuccessCallback
) {
    return commitMutation (environment, {
        mutation: graphql`
          mutation UserLoginMutation($email: String!, $password: String!) {
            login(email: $email, password: $password) {
                token
                user {
                    id
                }
            }
          }
        `,
        variables: {
            email,
            password
        },
        onCompleted: response => {
            console.log(response);
            onSuccessCallback(response.login.token, response.login.user.id);
        } /* Mutation completed */,
        onError: error => {} /* Mutation errored */,
    });
}

export {
    commitUserLoginMutation
}