import { useNavigate } from "react-router-dom";
import { Information } from "../../uikit/Information"
import { Form } from "./Form";
import { Language } from "./Language";
import { SocialNetworks } from "./SocialNetworks";
import './styles.less'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { setAuthThunk } from "../../redux/actions/authReducerThunk";
import { appRoutes } from "../../const";

export const Authorization = () => {
    const dispatch = useDispatch<AppDispatch>()
    const isAuth = useSelector((state: RootState) => state.authAPI.isAuth)
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('user_token')) {
            dispatch(setAuthThunk(true))
        }
    }, [dispatch, setAuthThunk])

    useEffect(() => {
        if (isAuth){
           return navigate(appRoutes.REGISTER)
        }
     }, [isAuth])

    return (
        <div className='auth-page'>
            <Information
                title="Войти в аккаунт"
                description="Введите ваш E-mail и пароль, чтобы начать использовать все преимущества платформы:"
                showResponsibilities
            />
            <div>
                <Language />
                <Form />
                <SocialNetworks />
            </div>
        </div>
    )
}