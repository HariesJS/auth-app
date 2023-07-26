import { useNavigate } from "react-router-dom"
import { Button } from "../../../uikit/Button"
import { Input } from "../../../uikit/Input"
import { Title } from "../../../uikit/Title"
import './styles.less'

export const Form = () => {
    const navigate = useNavigate()

    const handleToBackStep = () => {
        navigate(-1)
    }

    return (
        <div className='confirm-wrapper'>
            <div className='confirm-form'>
                <Title title="Подтверждение телефона" />
                <p className='confirm-description'>Мы отправили SMS с 6-значным кодом подтверждения на номер +38 (050) 725 60 09</p>
                <div>
                    <Input title='SMS-код' placeholder="Укажите код" />
                    {true ? <p className='resend-confirm-code'>Отправить код повторно</p> : <p className='confirm-timer'>2 мин. 55 сек</p>}
                </div>
                <Button title='Подтвердить' className='confirm-button' />
            </div>
            <div className='confirm-back-button'>
                <Button type='default' title='Назад' onClick={handleToBackStep} />
            </div>
        </div>
    )
}