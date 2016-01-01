'use strict';

/**
 * @ngdoc overview
 * @name sjpShopApp
 * @description
 * # sjpShopApp
 *
 * Main module of the application.
 */
angular
  .module('sjpShopApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    //'sjpUiGrid',
    '01BCO',
    '01CCO',
    '04ASER',
    'sjpQModule',
    'sjpuiselect'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/01A', {
        templateUrl: 'ModAngular/01ACO/01AV.tpl.html',
        controller: '01ACtrl'
      })
      .when('/01B', {
        templateUrl: 'ModAngular/01BCO/01BV.tpl.html',
        controller: '01BCtrl'
      })
      .when('/01C', {
        templateUrl: 'ModAngular/01CCO/01CV.tpl.html',
        controller: '01CCtrl'
      })
      .when('/02', {
        templateUrl: 'ModAngular/02DB/02V.tpl.html',
        controller: '02Ctrl'
      })
      .when('/03A', {
        templateUrl: 'ModAngular/03ACON/03AV.tpl.html',
        controller: '03ACtrl'
      })
      .when('/03B', {
        templateUrl: 'ModAngular/03BCON/03BV.tpl.html',
        controller: '03BCtrl'
      })
      .when('/04A', {
        templateUrl: 'ModAngular/04ASER/04AV.tpl.html',
          controller: '04ACtrl'
      })
      .when('/04B', {
        templateUrl: 'ModAngular/04BSER/04BV.tpl.html',
        controller: '04BCtrl'
      })
      .when('/07A',{
        templateUrl: 'ModAngular/07AFORM/07AV.tpl.html',
        controller: '07ACtrl'
      })
      .when('/07B',{
        templateUrl: 'ModAngular/07BFORM/07BV.tpl.html',
        controller: '07BCtrl'
      })
      .when('/07C',{
        templateUrl: 'ModAngular/07CFORM/07CV.tpl.html',
        controller: '07CCtrl'
      })
      .when('/07D',{
        templateUrl: 'ModAngular/07DFORM/07DV.tpl.html',
        controller: '07DCtrl'
      })
      .when('/07E',{
        templateUrl: 'ModAngular/07EFORM/07EV.tpl.html',
        controller: '07ECtrl'
      })
      .when('/08A',{
        templateUrl: 'ModAngular/08ADIR/08AV.tpl.html',
        controller: '08ACtrl'
      })
      .when('/08B',{
        templateUrl: 'ModAngular/08BDIR/08BV.tpl.html',
        controller: '08BCtrl'
      })
      .when('/08C',{
        templateUrl: 'ModAngular/08CDIR/08CV.tpl.html',
        controller: '08CCtrl'
      })
      .when('/08D',{
        templateUrl: 'ModAngular/08DDIR/08DV.tpl.html',
        controller: '08DCtrl'
      })



      .when('/501A', {
        templateUrl: 'ModGeneral/501AUiGrid/501AV.tpl.html',
        controller: '501ACtrl'
      })
      .when('/502A', {
        templateUrl: 'ModGeneral/502Aq/502AV.tpl.html',
        controller: '502ACtrl'
      })
      .when('/503A', {
        templateUrl: 'ModGeneral/503Ajquery/503AV.tpl.html',
        controller: '503ACtrl'
      })
      .when('/504A', {
        templateUrl: 'ModGeneral/504ASassBoots/504AV.tpl.html',
        controller: '504ACtrl'
      })
      .when('/504B', {
        templateUrl: 'ModGeneral/504BSassBoots/504BV.tpl.html',
        controller: '504BCtrl'
      })
      .when('/504C', {
        templateUrl: 'ModGeneral/504CSassBoots/504CV.tpl.html',
        controller: '504CCtrl'
      })
      .when('/505A', {
        templateUrl: 'ModGeneral/505AUIBOOTS/505AV.tpl.html',
        controller: '505ACtrl'
      })
      .when('/505B', {
        templateUrl: 'ModGeneral/505BUIBOOTS/505BV.tpl.html',
        controller: '505BCtrl'
      })
      .when('/505C', {
        templateUrl: 'ModGeneral/505CUIBOOTS/505CV.tpl.html',
        controller: '505CCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
