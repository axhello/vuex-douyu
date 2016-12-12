export default [{
  path: '/',
  name: 'index',
  component: require('./views/home/index')
}, {
  path: '/games',
  name: 'games',
  component: require('./views/games/games-view')
}, {
  path: '/roomlists/:id',
  name: 'roomlists',
  component: require('./views/roomlists/rooms-view')
}, {
  path: '/detail/:id',
  name: 'detail',
  component: require('./components/room-detail')
}, {
  path: '*',
  component: require('./views/home/index')
}]

