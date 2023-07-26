import { Controller, useForm } from "react-hook-form"
import { Button } from "../../../../uikit/Button"
import { Input } from "../../../../uikit/Input"
import { InputType } from "../../../../uikit/Input/interface"
import '../styles.less'
import { useDispatch, useSelector } from "react-redux"
import { registerUserThunk } from "../../../../redux/actions/authReducerThunk"
import { AppDispatch, RootState } from "../../../../redux/store/store"
import { Modal } from "../../../../uikit/Modal"
import { useState } from "react"

export const SignUp = () => {
    const { control, handleSubmit, watch, formState:{ errors } } = useForm()
    const dispatch = useDispatch<AppDispatch>()
    const isLoading = useSelector((state: RootState) => state.authAPI.isLoading)
    const [openModal, handleOpenModal] = useState(false)

    const handleCloseModal = () => {
        handleOpenModal(false)
    }

    const onSubmit = (data: any) => {
        dispatch(registerUserThunk({
            email: data.email,
            password: data.password,
        }, handleOpenModal))
    }

    const isPasswordMatch = watch('password') !== watch('repeatPassword')
    const hasErrors = Object.keys(errors).length ? true : false || isPasswordMatch

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Modal
                isOpen={openModal}
                onClose={handleCloseModal}
                text={'Аккаунт был успешно зарегистрирован. На ваш E-Mail отправлено письмо с ссылкой для подтверждения'}
            />
            <Controller
                name="email"
                control={control}
                rules={{ required: 'Email is required' }}
                render={({ field }) => (
                    <Input
                        title='E-mail'
                        placeholder='Адрес эл. почты'
                        status={errors?.email?.message ? 'error' : ''}
                        {...field}
                    />
                )}
            />
            <Controller
                name="password"
                control={control}
                rules={{ required: 'Password is required' }}
                render={({ field }) => (
                    <Input
                        title='Придумайте пароль'
                        type={InputType.PASSWORD}
                        placeholder='Укажите ваш пароль'
                        status={errors?.password ? 'error' : ''}
                        {...field}
                    />
                )}
            />
            <Controller
                name="repeatPassword"
                control={control}
                rules={{ required: 'Repeat password' }}
                render={({ field }) => (
                    <Input
                        title='Повторите пароль'
                        type={InputType.PASSWORD}
                        placeholder='Повторите ваш пароль'
                        status={errors?.repeatPassword?.message ? 'error' : ''}
                        {...field}
                    />
                )}
            />
            {isPasswordMatch && <p className='password-match'>Пароли не совпадают</p>}
            <Button
                htmlType="submit"
                className='auth-button'
                title='Зарегистрироваться'
                disabled={hasErrors}
                loading={isLoading}
            />
        </form>
    )
}