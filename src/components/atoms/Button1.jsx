const Button = ({ children, onClick, className = "" }) => (
  <button className={`Button ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
