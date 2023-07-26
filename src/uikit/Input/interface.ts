import { InputProps as AntdInputProps } from "antd"

export interface InputProps extends AntdInputProps {
    title?: string
    placeholder?: string
    type?: InputType
    required?: boolean
}

export enum InputType {
    DEFAULT = 'default',
    PASSWORD = 'password',
    NUMBER = 'number'
}