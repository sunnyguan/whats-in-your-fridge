import Login from './auth/Login';

function Intro(props) {
  return (
    <Login onSuccess={props.onLogin} />
  );
}

export default Intro;
