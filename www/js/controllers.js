angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    var link = 'https://fcm.googleapis.com/fcm/send';
    xhr = new XMLHttpRequest();
    xhr.open("POST", link, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("Authorization", 
                        "key=AAAAYcotsXc:APA91bEMKXX0Yd-kyohNf9yiAeIvrp7fP7m-BN2kTIdkVe4H6DJRQ-MCradcbkVEhLCgEMN4K1TgbOS8AMv5ZmrXzMNhmofQg3MxxDffrlSznsdjm5zi10RkTi8301GHIqpz3UGzZXIyv6Tpb3mQ44b-c7Ya94Rlpg");
    xhr.onreadystatechange = function () { 
      console.log("Response");
        var json = JSON.parse(xhr.responseText);
        console.log(json);
        console.log(xhr.status);

}
  // $.ajax({
  //               url: "https://iid.googleapis.com/iid/v1/" + currentToken +"/rel/topics/notifs",
  //               type: "POST",
  //               beforeSend: function(request) {
  //                 request.setRequestHeader("Authorization", 
  //                   "AAAAYcotsXc:APA91bEMKXX0Yd-kyohNf9yiAeIvrp7fP7m-BN2kTIdkVe4H6DJRQ-MCradcbkVEhLCgEMN4K1TgbOS8AMv5ZmrXzMNhmofQg3MxxDffrlSznsdjm5zi10RkTi8301GHIqpz3UGzZXIyv6Tpb3mQ44b-c7Ya94Rlpg");
  //               },
  //               dataType: "json",
  //               success: function (result) {
  //                       console.log(result);
  //               },
  //               error: function (xhr, ajaxOptions, thrownError) {
  //               console.log(xhr.status);
  //               console.log(thrownError);
  //               }
  //           });

    var data = JSON.stringify({
      "to": "/topics/all",
       "notification": {
         "title": "Welcome Message",
         "body": "This is a Firebase Cloud Messaging Topic Message!"
       }
    });
    console.log(data);

    xhr.send(data);
    //$http.post(link, )
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
