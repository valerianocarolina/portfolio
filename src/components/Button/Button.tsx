import './Button.css'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  icon?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = 'primary',
  icon,
  ...props
}: ButtonProps) {
  return (
    <button className={`button button-${variant}`} {...props}>
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  )
}
