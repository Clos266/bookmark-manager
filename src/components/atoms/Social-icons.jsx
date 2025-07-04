function SocialIcon({ iconSrc, altText, className = "" }) {
  return <img src={iconSrc} alt={altText} className={`social-icon ${className}`} />;
}

export default SocialIcon;