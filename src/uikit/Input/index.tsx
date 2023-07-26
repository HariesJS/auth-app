import { forwardRef } from 'react';
import { Input as AntdInput, InputProps } from 'antd'
import { InputType } from './interface'
import './styles.less'

export const Input = forwardRef(({ title, placeholder = '...', required, type, ...rest }: InputProps, ref: any) => {

    let TextInput;
    
    switch (type as InputType) {
        case InputType.DEFAULT: {
            TextInput = AntdInput
            break
        }
        case InputType.PASSWORD: {
            TextInput = AntdInput.Password
            break
        }
        default:
            TextInput = AntdInput
    }

    return (
        <div>
            <div className='input-title-wrapper'>
                {title && <p className='input-title'>{title}</p>}
                {title && required && <p className='input-require-title'>*</p>}
            </div>
            <TextInput ref={ref} className='input' placeholder={placeholder} {...rest} />
        </div>
    )
})