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
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
}

export default EmailSignup;