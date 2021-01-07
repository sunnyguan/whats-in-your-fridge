import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "46034619764-e614do77oducja6a2lbe7vo147v1k7m2.apps.googleusercontent.com";

function Login(props) {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        props.onSuccess(res);
    };

    const onFailure = (res) => {
        console.log('[Login Failed] res: ', res);
        props.onFailure(res);
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;
