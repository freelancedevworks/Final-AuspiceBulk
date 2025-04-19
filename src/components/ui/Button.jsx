import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  to, 
  href, 
  onClick, 
  className = '',
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${icon ? 'btn-with-icon' : ''} ${className}`;

  // Wrap content in a span for better styling control
  const buttonContent = (
    <span className="btn-content">
      {icon && iconPosition === 'left' && <span className="btn-icon btn-icon-left">{icon}</span>}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon btn-icon-right">{icon}</span>}
    </span>
  );

  // Render as Link if "to" prop exists
  if (to) {
    return (
      <Link to={to} className={buttonClass} {...props}>
        {buttonContent}
      </Link>
    );
  }

  // Render as anchor if "href" prop exists
  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {buttonContent}
      </a>
    );
  }

  // Render as button by default
  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {buttonContent}
    </button>
  );
};

export default Button; 