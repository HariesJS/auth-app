import { CheckSquareOutlined } from "@ant-design/icons"
import './styles.less'
import { responsibility } from "./const"

export const Responsibilities = () => (
    <div className='about-us'>
        {responsibility.map(e => (
            <div key={e.id} className='responsibility'>
                <CheckSquareOutlined className='check-icon' />
                <p>{e.text}</p>
            </div>
        ))}
    </div>
)