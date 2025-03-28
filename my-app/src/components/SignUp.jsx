import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUpPage.css";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = (provider) => {
    console.log(`${provider} sign-up clicked`); // Debugging

    // Simulate authentication success, then navigate to input information page
    setTimeout(() => {
      navigate("/input-info");
    }, 500); // Simulate a delay for authentication
  };

  return (
    <div className="signup-container">
      <h2>Hello There, Welcome!</h2>

      {/* Google Sign Up */}
      <button className="signup-btn google" onClick={() => handleSignUp("Google")}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
          alt="Google Logo" 
          className="logo-icon"
        />
        Sign up with Google
      </button>

      {/* Facebook Sign Up */}
      <button className="signup-btn facebook" onClick={() => handleSignUp("Facebook")}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
          alt="Facebook Logo" 
          className="logo-icon-facebook"
        />
        Sign up with Facebook
      </button>

      {/* Apple Sign Up */}
      <button className="signup-btn apple" onClick={() => handleSignUp("Apple")}>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQesa2rF2WhrA7Sl3iIoznL-gFpA0y0GB-tQ&s" 
          alt="Apple Logo" 
          className="logo-icon-apple"
        />
        Sign up with Apple
      </button>

      <p className="login-text">
        Already have an account? <span className="login-link" onClick={() => navigate("/")}>Log in</span>
      </p>
    </div>
  );
};

export default SignUp;
