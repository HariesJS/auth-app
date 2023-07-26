import { Input } from "../../../uikit/Input"
import { Title } from "../../../uikit/Title"
import { Date } from "../../../uikit/Date"
import { Gender } from "../../../uikit/Gender"
import './styles.less'
import { Button } from "../../../uikit/Button"
import { Modal } from "antd"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../redux/store/store"
import { logoutUserThunk } from "../../../redux/actions/authReducerThunk"
import { getUserInfoThunk } from "../../../redux/actions/userReducerThunk"
import { useNavigate } from "react-router-dom"
import { appRoutes } from "../../../const"

export const Form = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        dispatch(getUserInfoThunk())
    }, [dispatch, getUserInfoThunk])

    const showModal = () => {
        setIsModalOpen(true);
    }
  
    const handleExit = () => {
        const userToken = localStorage.getItem('user_token')
        if (userToken) {
            dispatch(logoutUserThunk(userToken))
            setIsModalOpen(false)
        }
    }
  
    const handleCancel = () => {
      setIsModalOpen(false)
    }

    const handleOpenNextStep = () => {
        navigate(appRoutes.CONFIRM)
    }

    return (
        <div className='form-wrapper'>
            <div>
                <Title title='Профиль пользователя' />
                <div className='main-user-inputs'>
                    <Input title='Фамилия' placeholder="Михайлов" className='small-user-input' required />
                    <Input title='Имя' placeholder="Михаил" className='small-user-input' required />
                    <Input title='Отчество' placeholder="Махаилович" className='small-user-input' required />
                </div>
                <Date title='Дата рождения' required />
                <Gender title='Пол' required />
                <Input
                    title="Телефон"
                    placeholder="+38 (050) 725 60 09"
                    className='user-phone-input'
                    required
                />
                <Input
                    title="E-Mail"
                    placeholder="user@gmail.com"
                    className='user-phone-input'
                    disabled
                />
            </div>
            <div className='bottom-buttons-wrapper'>
                <Button type='default' title="Выход" onClick={showModal} />
                <Button title="Далее" onClick={handleOpenNextStep} />
            </div>
            <Modal
                title="Выход"
                open={isModalOpen}
                onOk={handleExit}
                onCancel={handleCancel}
            >
                <p>Подтверждение выхода из аккаунта</p>
                <p>Вы действительно хотите выйти из своей учетной записи?</p>
            </Modal>
        </div>
    )
}