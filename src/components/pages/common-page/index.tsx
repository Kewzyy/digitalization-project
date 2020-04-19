import * as React from 'react'
import { CommonPageOwnProps } from './types'
import { Switch, Route } from 'react-router-dom'
import { NotFoundPage } from '../not-found-page'
import { LandingPage } from '../landing-page'
import { TestComp } from 'src/components/core/test-component'
import { FoodMenu } from 'src/components/core/food-menu-component'

export const CommonPage: React.FC<CommonPageOwnProps> = (): JSX.Element => {
    return (
        <Switch>
            <Route component={TestComp} path='/pay' />
            <Route component={TestComp} path='/cart' />
            <Route component={TestComp} path='/order-food' />
            <Route component={TestComp} path='/booking' />
            <Route component={TestComp} path='/restaurants' />
            <Route component={FoodMenu} path='/foodmenu' />
            <Route component={LandingPage} path='/' />
            <Route component={NotFoundPage} path='*' />
        </Switch>
    )
}
