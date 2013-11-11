"use strict";angular.module("CurriculoApp",["ngRoute","ngAnimate","ngTouch"]).config(["$routeProvider","$httpProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/portfolio",{templateUrl:"views/portfolio.html",controller:"PortCtrl"}).when("/complemento",{templateUrl:"views/complemento.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"}),b.defaults.xsrfHeaderName="X-CSRFToken",b.defaults.xsrfCookieName="csrftoken"}]),angular.module("CurriculoApp").controller("MainCtrl",["$scope","Nav",function(){}]),angular.module("CurriculoApp").controller("navCtrl",["$scope","$location","Nav",function(a,b,c){a.navClass=function(a){var d=b.path().substring(1)||"";return c.currentRoute=d,a===d?"active":""},a.select=function(b){var c=$(".nav > li");a.larg=c.eq(b).width(),a.left=c.eq(b).offset().left},a.selectActive=function(){setTimeout(function(){var b=$(".active");a.larg=b.width(),a.left=b.offset().left},3e3)}}]),angular.module("CurriculoApp").controller("PortCtrl",["$scope",function(a){a.sites=[{titulo:"Sue Cabral",src:"images/sue.jpg",footer:"Desenvolvimento Parcial: Construção da estrutura HTML/CSS de 3 telas do site (VIP/Marcas/Sobre).",url:"http://www.suecabral.com.br"},{titulo:"Plastex",src:"images/plastex.jpg",footer:"Desenvolvimento Completo (Site em testes): Fábrica de materiais feitos em plástico.",url:"http://plastex.sodateste.com.br"},{titulo:"São João CG",src:"images/sjcg.jpg",footer:"Desenvolvimento Parcial: São João de Campina Grande, o maior são joão do mundo.",url:"http://www.sjcg.com.br"},{titulo:"Carrossel Prisma",src:"images/carrossel.jpg",footer:"Desenvolvimento do front-end do site principal e das áreas de Blog Aluno/Blog Professor",url:"http://carrosselprisma.com.br/"}]}]),angular.module("CurriculoApp").factory("Nav",function(){return{local:"",currentRoute:""}}),angular.module("CurriculoApp").controller("MobileCtrl",["$scope","Nav",function(a){a.mostraMenu=function(){$(".header").toggleClass("active")}}]);