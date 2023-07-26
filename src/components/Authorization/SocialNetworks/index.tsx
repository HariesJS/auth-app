import { socialNetworksData } from './const'
import './styles.less'

export const SocialNetworks = () => {
    return (
        <div className='sn-wrapper'>
            <p className='sn-title'>Или войдите с помощью</p>
            <div>
                {socialNetworksData.map(({ id, name, Component }) => (
                    <img
                        key={id}
                        src={Component}
                        alt={name}
                        className='sn-icon'
                    />
                ))}
            </div>
        </div>
    )
}