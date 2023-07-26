import { Tabs } from 'antd';
import './styles.less'
import { items } from './const';

export const Form = () => (
    <div className='tabs-wrapper'>
        <Tabs
            className='tabs'
            defaultActiveKey="2"
            items={items}
        />
    </div>
)