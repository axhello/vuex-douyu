const index = r => require.ensure([], () => r(require('./views/home/index')), 'index')
const games = r => require.ensure([], () => r(require('./views/games/games-view')), 'games')
const rooms = r => require.ensure([], () => r(require('./views/roomlists/rooms-view')), 'rooms')
const detail = r => require.ensure([], () => r(require('./components/room-detail')), 'detail')

export default [{
  path: '/',
  name: 'index',
  component: index
}, {
  path: '/category/:type',
  name: 'category',
  component: games
}, {
  path: '/roomlists/:id',
  name: 'roomlists',
  component: rooms
}, {
  path: '/detail/:id',
  name: 'detail',
  component: detail
}, {
  path: '*',
  component: index
}]

