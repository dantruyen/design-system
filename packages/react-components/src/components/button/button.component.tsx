import * as React from 'react'
import { classnames } from 'root/utils/classnames'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => (
    <button ref={ref} className={classnames('p-2', 'border', className)} {...props}>
        {children}
    </button>
))
