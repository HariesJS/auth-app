import { CaretDownOutlined } from "@ant-design/icons"
import type { MenuProps } from 'antd'
import { Button, Dropdown, message, Space } from "antd"
import { items } from './const'
import './styles.less'

export const Language = () => {
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        message.info('Click on menu item.' + e.keyPath);
    }

    const menuProps = {
        items,
        onClick: handleMenuClick,
    }

    return (
        <div className='lang-wrapper'>
            <Dropdown menu={menuProps}>
                <Button className='button'>
                    <Space>
                        Ру
                        <CaretDownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </div>
    )
}