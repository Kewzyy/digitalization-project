export const composeAppRoute = (routes: string[]): string => {
  const route = routes.join('|')
  return `${route}`
}
