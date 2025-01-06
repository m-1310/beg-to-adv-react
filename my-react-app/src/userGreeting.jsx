import PropTypes from 'prop-types'

function UserGreeting(props){
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;
    const loginPromt =  <h2 className="login-promt">Please login in to Continue</h2>;

    if(props.isLoggedIn){ 
      return(
        welcomeMessage
      );
    }else{
      return(
        loginPromt
      );
    }
}

UserGreeting.propTypes={
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
}
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
}

export default UserGreeting;