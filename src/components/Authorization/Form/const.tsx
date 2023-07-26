import type { TabsProps } from 'antd';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';

export const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Вход`,
      children: <SignIn />,
    },
    {
      key: '2',
      label: `Регистрация`,
      children: <SignUp />,
    },
]