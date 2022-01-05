// import {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPath } from './screens/login/login.types';
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme';
import { GlobalStyle } from './themes/main/global-style';
import { Provider } from 'react-redux'
import UserGuard from "./components/routers/user-guard/user-guard.component"
import Home from "./screens/home/home.screen"
import {HomePath} from "./screens/home/home.types"
import Login from './screens/login/login.screen';
import store from './store/store/store'

function App() {
  // const navigate = useNavigate()

  // useEffect(
  //  () => {
  //    navigate(HomePath)
  //  },
  //  // eslint-disable-next-line react-hooks/exhaustive-deps
  //  []
  // )

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path={LoginPath} element={<Login />} />
          <Route path={HomePath} element={<UserGuard children={<Home />} />} />
        </Routes>
      </ThemeProvider>
    </Provider>

  );
}

export default App;
