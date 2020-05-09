import { LandingPage } from 'src/components/pages/landing-page'
import { TestComp } from 'src/components/core/test-component'
import { SignInPage } from 'src/components/pages/sign-in-page'
import {
  LOG_IN_ROUTE,
  SIGN_UP_ROUTE,
  KITCHEN_ORDERS_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  RESTAURANT_PAGE_ROUTE,
  RESERVATION_PAGE_ROUTE,
  FOODMENU_PAGE_ROUTE,
} from 'src/constants'
import { RestaurantPage } from 'src/components/pages/restaurant-page'
import { FoodMenu } from 'src/components/core/food-menu-component'
import { ReservationPage } from 'src/components/pages/reservation-page'
import { KitchenPage } from 'src/components/pages/kitchen-page'

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
  //Restaurants page
  {
    title: 'Restaurants | Dine. ',
    key: 'Restauraunts',
    path: RESTAURANT_PAGE_ROUTE,
    component: RestaurantPage,
    renderOnly: true,
  },
  //Book table at a selected restaurant
  {
    title: 'RestaurantName | Food Menu. ',
    key: 'FoodMenu',
    path: FOODMENU_PAGE_ROUTE,
    component: FoodMenu,
    renderOnly: true,
  },
  {
    title: 'Book | Dine.',
    key: 'Booking',
    path: RESERVATION_PAGE_ROUTE,
    component: ReservationPage,
    renderOnly: true,
  },
  //Order at selected restaurant
  {
    title: 'Order | Dine. ',
    key: 'Order',
    path: '/order',
    component: TestComp,
    renderOnly: true,
  },
  //Order confirmation
  {
    title: 'Your order | Dine. ',
    key: 'cart',
    path: '/cart',
    component: TestComp,
    renderOnly: true,
  },
  // Pay for your order
  {
    title: 'Pay | Dine. ',
    key: 'Pay',
    path: '/pay',
    component: TestComp,
    renderOnly: true,
  },
  //TODO: Fix the fucking router
  {
    title: 'Login | Dine. ',
    key: 'Login',
    path: LOG_IN_ROUTE,
    component: SignInPage,
  },
  {
    title: 'Register | Dine. ',
    key: 'LandingPage',
    path: SIGN_UP_ROUTE,
    component: TestComp,
  },
  {
    title: 'Kitchen | Dine. ',
    key: 'KitchenPage',
    path: KITCHEN_ORDERS_ROUTE,
    component: KitchenPage,
  },
]

export const modalAppRoutes = [
  // {
  //   title: 'Login | Dine. ',
  //   key: 'Login',
  //   path: LOG_IN_ROUTE,
  //   component: SignInPage,
  // },
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
