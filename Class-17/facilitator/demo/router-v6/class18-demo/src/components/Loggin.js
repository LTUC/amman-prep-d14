// one way of conditional rendering
function LoginButton(props) {
    // console.log(props);
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <button onClick={props.handleLoggin}>Logout</button>;
    }
    return <button onClick={props.handleLoggin}>Login</button>;
}

export default LoginButton;
