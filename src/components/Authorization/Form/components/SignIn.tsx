import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../../../../uikit/Button"
import { Input } from "../../../../uikit/Input"
import { InputType } from "../../../../uikit/Input/interface"
import '../styles.less'
import { useDispatch, useSelector } from "react-redux"
import { loginUserThunk } from "../../../../redux/actions/authReducerThunk"
import { AppDispatch, RootState } from "../../../../redux/store/store"

export const SignIn = () => {
    const { control, handleSubmit, formState:{ errors } } = useForm()
    const dispatch = useDispatch<AppDispatch>()
    const isLoading = useSelector((state: RootState) => state.authAPI.isLoading)

    const onSubmit = (data: any) => {
        dispatch(loginUserThunk({
            email: data.email,
            password: data.password,
        }))
    }

    const hasErrors = Object.keys(errors).length ? true : false

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <Button
                htmlType="submit"
                className='auth-button'
                title='Войти'
                disabled={hasErrors}
                loading={isLoading}
            />
        </form>
    )
}