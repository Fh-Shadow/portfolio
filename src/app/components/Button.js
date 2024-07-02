import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/Button.css'

// Função para instanciar botões simples
const SimpleButton = ({ icon, label, type, className, disabled, handleClick }) => (
  <button className={`button button-${type} ${className} ${disabled ? 'disabled' : ''}`} disabled={disabled} onClick={handleClick}>
    {icon && <div className="buttonIcon">{icon}</div>}
    {label && <div className="buttonLabel">{label}</div>}
  </button>
)

// Função para redirecionar
const handleRedirect = (redirect) => {
  const { url, blank } = redirect
  if (blank) {
    window.open(url, '_blank')
  } else {
    window.location.href = url
  }
}

// Função para lidar com ações
const handleAction = async (action, targetElement) => {
  const { type: actionType, target, condition } = action
  if (!condition || condition()) {
    try {
      switch (actionType) {
        case 'disable':
          targetElement.classList.add('disabled')
          break
        case 'enable':
          targetElement.classList.remove('disabled')
          break
        case 'send':
          fetch(target, { method: 'POST' })
          break
        case 'pull':
          fetch(target).then(response => response.json())
          break
        case 'refresh':
          window.location.reload()
          break
        case 'change':
          targetElement.textContent = action.content
          break
        default:
          console.warn('Unknown action type')
      }
    } catch (error) {
      console.warn(error.message)
    }
  }
}

// Função para lidar com o clique do botão
const handleClick = async (type, redirect, action) => {
  if (type.includes('disabled')) return

  if (redirect) {
    handleRedirect(redirect)
  }

  if (action) {
    const { target } = action
    const targetElement = document.querySelector(target)
    if (targetElement) {
      handleAction(action, targetElement)
    } else {
      console.warn(`Element not found for target: ${target}`)
    }
  }
}

// Componente principal Button
const Button = ({ icon, label, type = "secondary", redirect, action, className = '', disabled = false }) => {
  // Verificação de icon & label
  if (!icon && !label) {
    throw new Error('Either <icon> or <label> must be provided')
  }

  // Renderização de Botão Simples se não houver redirect ou action
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

  // Renderização de Botão de Redirecionamento se apenas redirect for fornecido
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

  // Renderização de Botão de Ação se action for fornecido (com ou sem redirect)
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
  className: PropTypes.string,
  disabled: PropTypes.bool,
}

export default Button