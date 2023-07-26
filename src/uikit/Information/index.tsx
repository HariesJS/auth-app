import Auth from '../../assets/auth.svg'
import { Responsibilities } from './Responsibilities'
import { InformationProps } from './interface'
import './styles.less'

export const Information = ({ title, description, showResponsibilities }: InformationProps) => {
    return (
        <div className='info-wrapper'>
            <div className='content-wrapper'>
                <p className='main-title'>{title}</p>
                <p className='description'>{description}</p>
                {showResponsibilities && <Responsibilities />}
            </div>
            <img src={Auth} width="100%" />
        </div>
    )
}