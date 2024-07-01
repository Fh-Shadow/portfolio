import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/Button.css';

function Button({ icon, label, type = "secondary", redirect, action }) {
  const handleClick = () => {
    // Verificar se o botão está desabilitado
    if (type.includes('disabled')) {
      return;
    }

    if (redirect) {
      const { url, blank } = redirect;
      if (blank) {
        window.open(url, '_blank');
      } else {
        window.location.href = url;
      }
    }

    if (action) {
      const { type: actionType, target, condition } = action;
      if (!condition || condition()) {
        switch (actionType) {
          case 'disable':
            document.querySelector(target).disabled = true;
            break;
          case 'enable':
            document.querySelector(target).disabled = false;
            break;
          case 'send':
            fetch(target, { method: 'POST' });
            break;
          case 'pull':
            fetch(target).then(response => response.json());
            break;
          case 'refresh':
            window.location.reload();
            break;
          case 'change':
            document.querySelector(target).textContent = action.content;
            break;
          default:
            console.warn('Unknown action type');
        }
      }
    }
  };

  if (!icon && !label) {
    throw new Error('Either <icon> or <label> must be provided');
  }

  return (
    <button className={`button button-${type}`} onClick={handleClick}>
      {icon && <div className="buttonIcon">{icon}</div>}
      {label && <div className="buttonLabel">{label}</div>}
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
    "primary-disabled",
    "secondary-disabled",
    "success-disabled",
    "error-disabled",
    "warning-disabled",
  ]),
  redirect: PropTypes.shape({
    url: PropTypes.string.isRequired,
    blank: PropTypes.bool,
  }),
  action: PropTypes.shape({
    type: PropTypes.oneOf(['disable', 'enable', 'send', 'pull', 'refresh', 'change']).isRequired,
    target: PropTypes.string.isRequired,
    condition: PropTypes.func,
    content: PropTypes.string, // Specific for 'change' action
  }),
};

export default Button;