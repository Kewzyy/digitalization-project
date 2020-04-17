export interface AppRoute {
    path: string
    component: React.FC | JSX.Element
    exact?: boolean | undefined
}
