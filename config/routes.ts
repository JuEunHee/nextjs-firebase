export const BASE_ROUTE_KEY = 'BASE';
export const HOME_ROUTE_KEY = 'HOME';
export const LOGIN_ROUTE_KEY = 'LOGIN';
export const SIGNUP_ROUTE_KEY = 'SIGNUP';
export const FIND_ID_ROUTE_KEY = 'FIND_ID';
export const FIND_PASSWORD_ROUTE_KEY = 'FIND_PASSWORD';
export const PROFILE_ROUTE_KEY = 'PROFILE';

export const routes = {
  [BASE_ROUTE_KEY]: '/',
  [HOME_ROUTE_KEY]: '/home',
  [LOGIN_ROUTE_KEY]: '/login',
  [SIGNUP_ROUTE_KEY]: '/signup',
  [FIND_ID_ROUTE_KEY]: '/find-id',
  [FIND_PASSWORD_ROUTE_KEY]: '/find-password',
  [PROFILE_ROUTE_KEY]: '/profile',
};

export const AFTER_LOGIN_ROUTE = routes.HOME;

export const authRoutes = [
  routes.BASE,
  routes.LOGIN,
  routes.SIGNUP,
  routes.FIND_ID,
  routes.FIND_PASSWORD,
];

export const publicRoutes = [...authRoutes, routes.HOME];

export const menus = [
  {
    name: '',
    subs: [
      {
        key: HOME_ROUTE_KEY,
        name: '홈',
        path: routes.HOME,
        view: false,
      },
    ],
    view: false,
  },
  {
    name: '인증관리',
    subs: [
      {
        key: LOGIN_ROUTE_KEY,
        name: '로그인',
        path: routes.LOGIN,
        view: false,
      },
      {
        key: SIGNUP_ROUTE_KEY,
        name: '회원가입',
        path: routes.SIGNUP,
        view: false,
      },
      {
        key: FIND_ID_ROUTE_KEY,
        name: '아이디 찾기',
        path: routes.FIND_ID,
        view: false,
      },
      {
        key: FIND_PASSWORD_ROUTE_KEY,
        name: '비밀번호 찾기',
        path: routes.FIND_PASSWORD,
        view: false,
      },
    ],
    view: false,
  },
  {
    name: '회원관리',
    subs: [
      {
        key: PROFILE_ROUTE_KEY,
        name: '회원정보',
        path: routes.PROFILE,
        view: false,
      },
    ],
    view: false,
  },
];
