const app = angular.module('musHist10', ['ngRoute'])

$( document ).ready(function(){
  $(".button-collapse").sideNav();
})



app.config(($routeProvider) => {

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDZ268yBuiZmo5SMAVoLQVCdvLYGS8SpzM",
    authDomain: "music-history-10.firebaseapp.com",
    databaseURL: "https://music-history-10.firebaseio.com",
    storageBucket: "music-history-10.appspot.com",
    messagingSenderId: "403166165501"
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
    // resolve: {
    //   // weather: (detailFactory, $route) => {songFactory.getDetail($route.current.params.song)},
    //   // user (authFactory, $location) {
    //   //   authFactory.getUser().catch(() => $location.url('/'))
    //   },
    }
  })
})
