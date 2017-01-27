const app = angular.module('musHist10', ['ngRoute'])

app.config(($routeProvider) => {

    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyA83A4Nz9ZO32NiPeNF8zdcYPTTPb3PYCQ",
      authDomain: "c17-firebase-auth-jufe.firebaseapp.com",
      databaseURL: "https://c17-firebase-auth-jufe.firebaseio.com",
      storageBucket: "c17-firebase-auth-jufe.appspot.com",
      messagingSenderId: "653707776406"
    };
    firebase.initializeApp(config);

    $routeProvider
      .when('/', {
        controller: 'SongCtrl',
        templateUrl: 'partials/song-list.html'
      })
      .when('/detail, {
        controller: 'DetailCtrl',
        templateUrl: '/partials/song-detail.html',
        resolve: {
          weather: (detailFactory, $route) => {songFactory.getDetail($route.current.params.song)},
          user (authFactory, $location) {
            authFactory.getUser().catch(() => $location.url('/'))
          },
        }
      })
  })
