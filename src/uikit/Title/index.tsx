import { TitleProps } from "./interface"
import './styles.less'

export const Title = ({ title }: TitleProps) => {
    return (
        <p className='title'>{title}</p>
    )
}