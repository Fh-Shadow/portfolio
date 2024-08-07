import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/Button.css'

// create button with basic parameters
const SimpleButton = ({ icon, label, type, className, disabled, handleClick }) => (
    <button className={`button button-${type} ${className} ${disabled ? 'disabled' : ''}`} disabled={disabled} onClick={handleClick}>
        {icon && <div className="buttonIcon">{icon}</div>}
        {label && <div className="buttonLabel">{label}</div>}
  </button>
)

// redirect with two parameters
const handleRedirect = (redirect) => {
    const { url, blank } = redirect
    if (blank) {
        window.open(url, '_blank')
    } else {
        window.location.href = url
    }
}

// async function for actions
const handleAction = async (action, targetElement) => {
    const { type: actionType, target, condition, content, data, method } = action
    if (!condition || condition()) {
        try {
            switch (actionType) {
                case 'disable': // disable something
                    targetElement.classList.add('disabled')
                    break
                case 'enable': // enable something
                    targetElement.classList.remove('disabled')
                    break
                case 'send': // send something
                    fetch(target, {
                        method: method || 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data || content),
                    })
                    break
                case 'refresh': // refresh something
                    if (!target || target === 'window') {
                        window.location.reload()
                    } else {
                        const refreshElement = document.querySelector(target)
                        if (refreshElement) {
                            const children = [...refreshElement.childNodes];
                            refreshElement.replaceChildren(...children); // trigger re-render
                        }
                    }
                    break
                case 'change': // change something
                    if (typeof targetElement.value === 'boolean') {
                        targetElement.value = !targetElement.value
                    } else {
                        targetElement.textContent = content
                    }
                    break
                default: // no parameters error
                    console.warn('Unknown action type')
            }
        } catch (error) {
            console.warn(error.message) // if something gets wrong
        }
    }
}

// onclick
const handleClick = async (type, redirect, action) => {
    if (type.includes('disabled')) return // buttons with disabled dont change

    if (redirect) {
        handleRedirect(redirect)
    }

    if (action) {
        const { target } = action
        const targetElement = target ? document.querySelector(target) : null
        if (targetElement || action.type === 'refresh') {
            handleAction(action, targetElement)
        } else {
            console.warn(`Element not found for target: ${target}`)
        }
    }
}

// main button
const Button = ({ icon, label, type = 'secondary', redirect, action, className = '', disabled = false }) => {
    // icon & label verification
    if (!icon && !label) {
        throw new Error('Either <icon> or <label> must be provided')
    }

    // render button with basic parameters
    if (!redirect && !action) {
        return (
            <SimpleButton 
                icon={icon} 
                label={label} 
                type={type} 
                className={className}
                disabled={disabled}
                handleClick={() => handleClick(type, redirect, action)} 
            />
        )
    }

    // render button with basic parameters & redirect
    if (redirect && !action) {
        return (
            <SimpleButton 
                icon={icon} 
                label={label} 
                type={type} 
                className={className}
                disabled={disabled}
                handleClick={() => handleClick(type, redirect, null)} 
            />
        )
    }

    // full render
    return (
        <SimpleButton 
            icon={icon} 
            label={label} 
            type={type} 
            className={className}
            disabled={disabled}
            handleClick={() => handleClick(type, redirect, action)} 
        />
    )
}

// button list of props
Button.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
    type: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'error',
        'warning',
    ]),
    redirect: PropTypes.shape({
        url: PropTypes.string.isRequired,
        blank: PropTypes.bool,
    }),
    action: PropTypes.shape({
        type: PropTypes.oneOf(['disable', 'enable', 'send', 'refresh', 'change']).isRequired,
        target: PropTypes.string,
        condition: PropTypes.func,
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        data: PropTypes.object,
        method: PropTypes.string,
    }),
    className: PropTypes.string,
    disabled: PropTypes.bool,
}

export default Button