import Button from "../atoms/Button1";

function EmailSignup() {
  return (
    <div className="email-signup">
      <p className="subtext">35,000+ already joined</p>
      <h2 className="title">Stay up-to-date with what we're doing</h2>
      <div className="input-container">
        <input 
          type="email" 
          className="email-input" 
          placeholder="Enter your email" 
        />
        <Button className="red-button">Contact Us</Button>
        
      </div>
    </div>
  );
}

export default EmailSignup;