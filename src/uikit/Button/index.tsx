import { Button as AntdButton } from 'antd'
import { ButtonProps } from "./interface"

export const Button = ({ title, ...props }: ButtonProps) => {
    return (
        <AntdButton type='primary' shape="round" {...props}>
            {title}
        </AntdButton>
    )
}
