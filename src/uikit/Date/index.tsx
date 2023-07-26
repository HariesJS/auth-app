import { DatePicker } from "antd"
import { DateProps } from "./interface"
import './styles.less'

export const Date = ({ title, required }: DateProps) => {
    return (
        <div>
            <div className='date-picker-wrapper'>
                {title && <p className='date-picker-title'>{title}</p>}
                {title && required && <p className='date-picker-require'>*</p>}
            </div>
            <DatePicker placeholder="10/08/1983" className='date-picker' />
        </div>
    )
}