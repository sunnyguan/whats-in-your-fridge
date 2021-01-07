import React from 'react';
import { GoogleLogout } from 'react-google-login';
import Button from '@material-ui/core/Button';

const clientId = "46034619764-e614do77oducja6a2lbe7vo147v1k7m2.apps.googleusercontent.com";

function Logout(props) {
    const onSuccess = () => {
        props.onLogout();
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                render={renderProps => (
                    <Button color="inherit" onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</Button>
                )}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;
