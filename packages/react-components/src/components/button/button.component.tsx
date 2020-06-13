import * as React from 'react'
import { classnames } from 'root/utils/classnames'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'neutral' | 'primary' | 'danger'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant, className, children, ...props }, ref) => (
        <button
            ref={ref}
            className={classnames(
                'p-2',
                'border',
                variant === 'neutral' && 'bg-neutral',
                variant === 'primary' && 'bg-primary',
                variant === 'danger' && 'bg-danger',
                variant !== 'neutral' && 'text-white',
                className,
            )}
            {...props}
        >
            {children}
        </button>
    ),
)
