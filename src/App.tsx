import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux'
import { Authorization } from './components/Authorization';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from './app/ErrorPage';
import { Registration } from './components/Registration';
import { Confirmation } from './components/Confirmation';
import store from './redux/store/store';
import { appRoutes } from './const';

function App() {
  return (
    <BrowserRouter>
        <ConfigProvider theme={{ token: { colorPrimary: 'rgba(78, 90, 242, 1)' } }}>
          <Provider store={store}>
              <Routes>
                  <Route path={appRoutes.MAIN} element={<Authorization />} />
                  <Route path={appRoutes.REGISTER} element={<Registration />} />
                  <Route path={appRoutes.CONFIRM} element={<Confirmation />} />
                  <Route path={appRoutes.NOT_FOUND} element={<ErrorPage />} />
              </Routes>
            </Provider>
        </ConfigProvider>
    </BrowserRouter>
  )
}

export default App