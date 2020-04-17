export const getData = () => {
  fetch('http://85.254.219.209:5000/kitchen/orders')
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log('data', data)
    })
}
