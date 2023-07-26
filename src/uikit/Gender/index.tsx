import { useState } from 'react'
import { Select } from 'antd';
import { genders } from './const'
import './styles.less'
import { GenderProps } from './interface'

export const Gender = ({ title, required }: GenderProps) => {
  const [items, setItems] = useState(genders)

  return (
    <div>
        <div className='gender-wrapper'>
            {title && <p className='gender-title'>{title}</p>}
            {title && required && <p className='gender-require'>*</p>}
        </div>
        <Select
            placeholder='Выберите пол'
            className='gender'
            options={items.map((item) => ({ label: item, value: item }))}
        />
    </div>
  )
}