import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/Button.css'

function Button({ icon, label, type = "secondary", redirect, action }) {
  // Actions & Other Logics
  const handleClick = () => {
    // Cancel all if disabled
    if (type.includes('disabled')) {
      return
    }

    // Redirect with two parameters
    if (redirect) {
      const { url, blank } = redirect
      if (blank) {
        window.open(url, '_blank')
      } else {
        window.location.href = url
      }
    }

    if (action) {
      const { type: actionType, target, condition } = action
      if (!condition || condition()) {
        // Action list cases
        switch (actionType) {
          case 'disable': // Disable something
            document.querySelector(target).disabled = true
            break
          case 'enable': // Enable something
            document.querySelector(target).disabled = false
            break
          case 'send': // Send something
            fetch(target, { method: 'POST' });
            break
          case 'pull': // Pull something
            fetch(target).then(response => response.json())
            break
          case 'refresh': // Refresh something
            window.location.reload()
            break
          case 'change': // Change something
            document.querySelector(target).textContent = action.content
            break
          default: // Error no parameters provided
            console.warn('Unknown action type')
        }
      }
    }
  };

  // Icon & Label
  if (!icon && !label) {
    throw new Error('Either <icon> or <label> must be provided')
  }

  return (
    <button className={`button button-${type}`} onClick={handleClick}>
      {icon && <div className="buttonIcon">{icon}</div>}
      {label && <div className="buttonLabel">{label}</div>}
    </button>
  )
}

// Button list of props
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
    content: PropTypes.string,
  }),
}

export default Button