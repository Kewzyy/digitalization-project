import { LandingPage } from 'src/components/pages/landing-page'
import { TestComp } from 'src/components/core/test-component'
import { SignInPage } from 'src/components/pages/sign-in-page'
import { MAIN_PAGE_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE, FORGOT_PASSWORD_ROUTE } from 'src/constants'
import { RestaurantPage } from 'src/components/pages/restaurant-page'
//TODO: uhmm fix this, add route params for app and modal
export const appRoutes = [
  {
    title: 'Dine. | Book. Dine. Enjoy. ',
    key: 'LandingPage',
    path: '/',
    component: LandingPage,
    exact: true,
    renderOnly: true,
  },
  {
    title: 'Restaurants | Dine. ',
    key: 'Restauraunts',
    path: '/restaurants',
    component: RestaurantPage,
    renderOnly: true,
  },
  {
    title: 'Book | Dine.',
    key: 'Booking',
    path: '/booking',
    component: TestComp,
    renderOnly: true,
  },
  {
    title: 'Order | Dine. ',
    key: 'Order',
    path: '/order',
    component: TestComp,
    renderOnly: true,
  },
  {
    title: 'Your order | Dine. ',
    key: 'cart',
    path: '/cart',
    component: TestComp,
    renderOnly: true,
  },
  {
    title: 'Pay | Dine. ',
    key: 'Pay',
    path: '/pay',
    component: TestComp,
    renderOnly: true,
  },
]

export const modalAppRoutes = [
  {
    title: 'Login | Dine. ',
    key: 'Login',
    path: SIGN_IN_ROUTE,
    component: SignInPage,
  },
  {
    title: 'Register | Dine. ',
    key: 'LandingPage',
    path: SIGN_UP_ROUTE,
    component: TestComp,
  },
  {
    title: 'Forgot password | Dine. ',
    key: 'LandingPage',
    path: FORGOT_PASSWORD_ROUTE,
    component: TestComp,
  },
]
