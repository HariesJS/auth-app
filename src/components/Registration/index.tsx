import { useNavigate } from "react-router-dom"
import { Information } from "../../uikit/Information"
import { Form } from "./Form"
import { RootState } from "../../redux/store/store"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { appRoutes } from "../../const"

export const Registration = () => {
    const isAuth = useSelector((state: RootState) => state.authAPI.isAuth)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth){
           return navigate(appRoutes.MAIN)
        }
     }, [isAuth])

    return (
        <div className='auth-page'>
            <Information
                title="Регистрация пользователя"
                description="Заполните информацию о себе, чтобы начать использовать все преимущества платформы"
            />
            <Form />
        </div>
    )
}