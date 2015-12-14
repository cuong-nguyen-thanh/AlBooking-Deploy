"use strict";angular.module("alBookingApp",["ngCookies","ngResource","ngSanitize","ui.router","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){b.otherwise("/"),c.html5Mode(!0),a.state("main",{url:"/",views:{main:{templateUrl:"app/main/main.html",controller:"MainController"}}}).state("apply",{url:"/apply",views:{main:{templateUrl:"app/apply/apply.html",controller:"ApplyController"}}}).state("partners",{url:"/partners",views:{main:{templateUrl:"app/partners/partners.html",controller:"PartnersController"}}}).state("programs",{url:"/programs",views:{main:{templateUrl:"app/programs/programs.html",controller:"ProgramsController"}}}).state("pastPrograms",{url:"/past-programs",views:{main:{templateUrl:"app/past-programs/past-programs.html",controller:"PastProgramsController"}}})}]).controller("AppController",["$rootScope","$scope",function(a,b){a.App=App,b.isActive=function(a){return b.activeMenu==a}}]),function(){angular.module("alBookingApp").controller("ApplyController",["$scope","$http",function(a,b){a.$parent.activeMenu=App.pageMenu.item2.name;var c={items:1,smartSpeed:500,loop:!1,nav:!0,navText:['<a class="prev apply__carousel__item__link" href="javascript:void(0)"><span class="glyphicon glyphicon-triangle-left"></span></a>','<a class="next apply__carousel__item__link" href="javascript:void(0)"><span class="glyphicon glyphicon-triangle-right"></span></a>'],dots:!1};$(".owl-carousel").owlCarousel(c)}])}(),function(){function a(a,b){var c=this;this.awesomeThings=[],b.get("/api/things").then(function(a){c.awesomeThings=a.data})}a.$inject=["$scope","$http"],angular.module("alBookingApp").controller("MainController",a)}(),function(){angular.module("alBookingApp").controller("PartnersController",["$scope","$http",function(a,b){a.$parent.activeMenu=App.pageMenu.item4.name,a.enableOpacity=!1,a.menuFilters=App.partners.sideBars,a.branches=[],a.filter=function(b,c){if(a.branches=[],$(".branch-grid__item").removeClass("branch-grid__item--opacity"),void 0!==b&&null!==b){if("all"===b){for(var d=[],e=[],f=[],g=0;g<App.partners.sideBars.length;g++)Array.prototype.push.apply(d,App.partners.sideBars[g].items.golds),Array.prototype.push.apply(e,App.partners.sideBars[g].items.silvers),Array.prototype.push.apply(f,App.partners.sideBars[g].items.normals);Array.prototype.push.apply(a.branches,d),Array.prototype.push.apply(a.branches,e),Array.prototype.push.apply(a.branches,f)}else for(var h=0;h<App.partners.sideBars.length;h++)if(App.partners.sideBars[h].title.toLowerCase()===b.toLowerCase()){Array.prototype.push.apply(a.branches,App.partners.sideBars[h].items.golds),Array.prototype.push.apply(a.branches,App.partners.sideBars[h].items.silvers),Array.prototype.push.apply(a.branches,App.partners.sideBars[h].items.normals);break}if(void 0!==c&&null!==c){$(".side-bar__item__title").removeClass("side-bar__item--active");var i=angular.element(c.currentTarget.firstChild);i.addClass("side-bar__item--active"),$(".side-bar__item__branch--container").hide(),$(c.currentTarget.nextSibling).show()}}},a.filter("all",null)}])}(),function(){angular.module("alBookingApp").controller("PastProgramsController",["$scope","$http",function(a,b){a.$parent.activeMenu=App.pageMenu.item1.name,a.menuFilters=App.pastPrograms.sideBar}])}(),function(){angular.module("alBookingApp").controller("ProgramsController",["$scope","$http",function(a,b){a.$parent.activeMenu=App.pageMenu.item1.name,a.menuFilters=App.program.sideBar,a.intros=App.program.content.introduction.lines}])}(),angular.module("alBookingApp").directive("footer",function(){return{templateUrl:"components/footer/footer.html",restrict:"E",link:function(a,b){b.addClass("footer")}}}),angular.module("alBookingApp").directive("header",function(){return{templateUrl:"components/header/header.html",restrict:"E",link:function(a,b){b.addClass("header").addClass("header--fixed"),$("header").headroom({offset:100,tolerance:{down:0,up:100},classes:{initial:"animated"}})}}}),angular.module("alBookingApp").directive("mainHeader",function(){return{templateUrl:"components/header/main-header.html",restrict:"E",link:function(a,b){b.addClass("main-header").addClass("main-header--fixed")}}}),angular.module("alBookingApp").factory("Modal",["$rootScope","$modal",function(a,b){function c(c,d){var e=a.$new();return c=c||{},d=d||"modal-default",angular.extend(e,c),b.open({templateUrl:"components/modal/modal.html",windowClass:d,scope:e})}return{confirm:{"delete":function(a){return a=a||angular.noop,function(){var b,d=Array.prototype.slice.call(arguments),e=d.shift();b=c({modal:{dismissable:!0,title:"Confirm Delete",html:"<p>Are you sure you want to delete <strong>"+e+"</strong> ?</p>",buttons:[{classes:"btn-danger",text:"Delete",click:function(a){b.close(a)}},{classes:"btn-default",text:"Cancel",click:function(a){b.dismiss(a)}}]}},"modal-danger"),b.result.then(function(b){a.apply(b,d)})}}}}}]),angular.module("alBookingApp").controller("NavbarCtrl",["$scope",function(a){a.menu=[{title:"Home",state:"main"}],a.isCollapsed=!0}]),angular.module("alBookingApp").directive("navbar",function(){return{templateUrl:"components/navbar/navbar.html",restrict:"E",controller:"NavbarCtrl"}}),angular.module("alBookingApp").run(["$templateCache",function(a){a.put("app/apply/apply.html",'<header></header><div class=container><div class=apply><div class=apply__banner><div class=apply__banner__bg></div><div class=apply__banner__content><h1 class="apply__banner__title col-xs-12">{{App.apply.title}}</h1><div class="apply__banner__content__left col-xs-6"><div class=apply__banner__content__left--factor><div class=apply__banner__content__left__hozirontal-line></div><h3 class=apply__banner__content__left__title>{{App.apply.left.fact1.title}}</h3><div class=apply__banner__content__left__description>{{App.apply.left.fact1.description}}</div></div><div class=apply__banner__content__left--factor><div class=apply__banner__content__left__hozirontal-line></div><h3 class=apply__banner__content__left__title>{{App.apply.left.fact2.title}}</h3><div class=apply__banner__content__left__description>{{App.apply.left.fact2.description}}</div><div class=apply__banner__content__left__link><a href=#>&#8594;&nbsp&nbsp{{App.button.learnMore}}</a></div></div></div><div class="apply__banner__content__right col-xs-6"><h3 class=apply__banner__content__right__title>{{App.apply.right.title}}</h3><div ng-repeat="event in App.apply.right.events" class=apply__banner__content__right__event><p>{{event.date}}:&nbsp{{event.name}}</p><p>{{event.location}}</p></div><div class=apply__banner__content__right__deadline><p>{{App.apply.right.deadline.date}}:&nbsp{{App.apply.right.deadline.description}}</p></div><div class="btn apply__banner__content__right__button"><a href=http://apply.seo-vietnam.org/Account/Login><span>{{App.button.startMyApplication}}</span></a></div></div></div></div><div class=apply__process><div class=row><div class=col-xs-4><div class="apply__process__table__title apply__process__table__title--right"><h3>{{App.apply.process.title}}</h3></div></div><div class="apply__process__table col-xs-7"><table class="table table-bordered"><tr ng-repeat="round in App.apply.process.rounds"><td class=apply__process__table__cell--name>{{round.name}}</td><td class=apply__process__table__cell--time>{{round.time}}</td></tr></table></div></div><div class=row><div class="col-xs-12 apply__process__paragraph"><h2>{{App.apply.process.paragraph.title}}</h2><p>{{App.apply.process.paragraph.firstLine}}</p><p>{{App.apply.process.paragraph.content}}</p><div class=apply__process__paragraph__horizontal-line></div></div></div></div><div class=apply__carousel><div class=row><div class="owl-carousel apply__carousel--container"><div class=apply__carousel__item><div class="apply__carousel__item__left col-xs-4"><img src=/assets/images/apply/Nam.e2462526.jpg class="apply__carousel__item__left__bg"></div><div class="apply__carousel__item__right col-xs-8"><div class=apply__carousel__item__right__text><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sodales ipsum. Aenean pellentesque arcu a rhoncus eleifend.</p></div><div class=apply__carousel__item__right__footer><p>Past Applicant Name</p><p>School Year</p></div></div></div><div class=apply__carousel__item><div class="apply__carousel__item__left col-xs-4"><img src=/assets/images/apply/Daniel-Su.a28f5fbf.jpg class="apply__carousel__item__left__bg"></div><div class="apply__carousel__item__right col-xs-8"><div class=apply__carousel__item__right__text><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sodales ipsum. Aenean pellentesque arcu a rhoncus eleifend.</p></div><div class=apply__carousel__item__right__footer><p>Past Applicant Name</p><p>School Year</p></div></div></div><div class=apply__carousel__item><div class="apply__carousel__item__left col-xs-4"><img src=/assets/images/apply/DSC_9680.1aaeddac.jpg class="apply__carousel__item__left__bg"></div><div class="apply__carousel__item__right col-xs-8"><div class=apply__carousel__item__right__text><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sodales ipsum. Aenean pellentesque arcu a rhoncus eleifend.</p></div><div class=apply__carousel__item__right__footer><p>Past Applicant Name</p><p>School Year</p></div></div></div><div class=apply__carousel__item><div class="apply__carousel__item__left col-xs-4"><img src=/assets/images/apply/Van-Bui.418fe4f2.jpg class="apply__carousel__item__left__bg"></div><div class="apply__carousel__item__right col-xs-8"><div class=apply__carousel__item__right__text><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac sodales ipsum. Aenean pellentesque arcu a rhoncus eleifend.</p></div><div class=apply__carousel__item__right__footer><p>Past Applicant Name</p><p>School Year</p></div></div></div></div></div></div></div></div><footer></footer>'),a.put("app/main/main.html",'<main-header></main-header><section class=spotlight><div class=spotlight__bg></div><!--.spotlight__bg(src="/images/bg/top.jpg" alt="spotlight image")--><div class=container><div class=spotlight__content><h1 class=spotlight__content__tag-line__title>{{App.home.spotlight.title}}</h1><div class=spotlight__content__tag-line__description>{{App.home.spotlight.description}}</div><div class=spotlight__content__tag-line__link><a href=/apply>{{App.home.spotlight.link}}</a></div></div></div></section><section class=main-body><div class=home-page><div class=container><div class="row home-page__content"><div class=home-page__content__company-mission><div class=home-page__content__company-mission__content><h3 class=home-page__content__company-mission__content__title>{{App.home.company.title}}</h3><div class=home-page__content__company-mission__content__description>{{App.home.company.description}}</div><div class="btn home-page__content__company-mission__content__link">{{App.button.learnMore}}</div></div></div><div class=home-page__content__partners><h3 class=home-page__content__partners__title><div class=home-page__content__partners__title--bracket>{</div><div class=home-page__content__partners__title--text>{{App.home.partner.title}}</div><div class=home-page__content__partners__title--bracket>}</div></h3><div class="row home-page__content__partners--first"><div class="home-page__content__partners__details col-xs-8"><div class=home-page__content__partners__details__text>{{App.home.partner.description}}<div class=home-page__content__partners__details__text--link><a href=/partners>&#8592; {{App.button.detail}}</a></div></div></div><div class="home-page__content__partners__details__branch col-xs-4"><img src="http://placehold.it/300x300?text=Logo" alt=""></div></div><div class="row row home-page__content__partners--second"><div class="home-page__content__partners__details__branch col-xs-4"><img src="http://placehold.it/300x300?text=Logo" alt=""></div><div class="home-page__content__partners__details__branch col-xs-4"><img src="http://placehold.it/300x300?text=Logo" alt=""></div><div class="home-page__content__partners__details__branch col-xs-4"><img src="http://placehold.it/300x300?text=Logo" alt=""></div></div></div><div class=home-page__content__img><img src=/assets/images/home/com-mission.577df7ac.png alt=""></div></div></div></div></section><footer></footer>'),a.put("app/main/spotlight.html",'<section class=spotlight><div class=spotlight__bg></div><!--.spotlight__bg(src="/images/bg/top.jpg" alt="spotlight image")--><div class=container><div class=spotlight__content><h1 class=spotlight__content__tag-line__title>{{App.home.spotlight.title}}</h1><div class=spotlight__content__tag-line__description>{{App.home.spotlight.description}}</div><div class=spotlight__content__tag-line__link><a href=/apply>{{App.home.spotlight.link}}</a></div></div></div></section>'),a.put("app/partners/partners.html",'<header></header><div class=partners><div class=container><div class=row><h1 class=partners__title>{{App.partners.title}}</h1></div><div class=row><aside class=col-xs-3><div class="row side-bar"><a href=# ng-click="filter(\'all\', $event)"><h4 class="side-bar__item__title side-bar__item--active">{{App.partners.sideBarTitle}}</h4></a><div ng-repeat="item in menuFilters" class=side-bar__item><a href=# ng-click="filter(item.title, $event)"><h4 class=side-bar__item__title>{{item.title}}</h4></a><div class=side-bar__item__branch--container><div ng-repeat="gold in item.items.golds" class=side-bar__item__branch>{{gold.name}}</div><div ng-repeat="silver in item.items.silvers" class=side-bar__item__branch>{{silver.name}}</div><div ng-repeat="normal in item.items.normals" class=side-bar__item__branch>{{normal.name}}</div></div></div></div></aside><main class=col-xs-9><div class="row partners__main"><div class=branch-grid><div class=row><div ng-repeat="item in branches" class="branch-grid__item col-sm-4"><div class=branch-grid__item__logo--container><div class=branch-grid__item__logo><img src=/assets/images/logo/{{item.logo}} alt="" class="branch-grid__item__logo__img"><div class=branch-grid__item__logo__content><h3 class=branch-grid__item__logo__header>{{item.name}}</h3><p class=branch-grid__item__logo__body>{{item.description}}</p></div></div></div></div></div></div></div></main></div></div></div><footer></footer>'),a.put("app/past-programs/past-programs.html",'<header></header><div class=past-programs><div class=container><div class=row><h1 class=past-programs__title>{{App.pastPrograms.title}}</h1></div><div class="row past-programs__content"><aside class=col-xs-3><div class="row side-bar"><div ng-repeat="item in menuFilters" class=side-bar__item><a href={{item.link}}><h4 ng-class="{\'side-bar__item--active\': item.active}" class=side-bar__item__title>{{item.title}}</h4></a><div class=side-bar__item__branch--container-display><div ng-repeat="subItem in item.items" class=side-bar__item__branch><a href={{subItem.link}}><p ng-class="{\'side-bar__item--active\': subItem.active}">{{subItem.title}}</p></a></div></div></div></div></aside><main class=col-xs-9><div class="row past-programs__content__main"><div class=past-programs__content__main__line>{{App.pastPrograms.description.title}}</div><div class=past-programs__content__main__line>{{App.pastPrograms.description.text}}</div></div></main><h2 class="col-xs-offset-3 col-xs-9 past-programs__timeline__title">{{App.pastPrograms.timeline.title}}</h2></div><div class=row><div class="col-xs-12 past-programs__timeline"><div class=past-programs__timeline__chart><ul><li ng-repeat="item in App.pastPrograms.timeline.chart" class=past-programs__timeline__chart__item><div class=past-programs__timeline__chart__item__info><div class=past-programs__timeline__chart__item__info--container><div class=past-programs__timeline__chart__item__info__line><div class=past-programs__timeline__chart__item__info__line--number>{{item.interns.count}}</div>&nbsp<div class=past-programs__timeline__chart__item__info__line--subfix>{{item.interns.subfix}}</div></div><div class=past-programs__timeline__chart__item__info__line><div class=past-programs__timeline__chart__item__info__line--number>{{item.companies.count}}</div>&nbsp<div class=past-programs__timeline__chart__item__info__line--subfix>{{item.companies.subfix}}</div></div></div></div><div class=past-programs__timeline__chart__vertical-line></div></li></ul></div><div class=past-programs__timeline__chart><ul><li ng-repeat="item in App.pastPrograms.timeline.chart" class=past-programs__timeline__chart__item><div class=past-programs__timeline__chart__item__year><a href=#{{item.year}}>{{item.year}}</a></div></li></ul></div></div></div><div class=row><div class=col-xs-12><div class=past-programs__instruction><h3 class=past-programs__instruction__title>{{App.pastPrograms.instruction}}</h3></div></div></div><div ng-repeat="history in App.pastPrograms.histories" class="row past-programs__history"><div class=col-xs-12><div id={{history.year}} class=grid-container><div class=container-fluid><div ng-repeat="event in history.events" class=grid-container__item><div ng-switch=event.type><div ng-switch-when=2><div class="row two-grid__row"><div class="two-grid__cell two-grid__cell--text col-xs-12 col-sm-6 col-md-6 col-lg-6 no-gutter"><h3 ng-if=event.isFirst class=two-grid__cell-header>{{history.year}}</h3><p class=two-grid__cell-body><div class=two-grid__cell-body__text>{{event.description}}</div></p></div><div class="two-grid__cell two-grid__cell--image two-grid__cell--image-right col-xs-12 col-sm-6 col-md-6 col-lg-6 no-gutter"><img alt="" src="{{event.image}}"></div></div></div><div ng-switch-when=3><div class="row three-grid__row"><div ng-repeat="item in event.items" class="three-grid__item col-xs-4 no-gutter"><div class=three-grid__item__img><img src={{item.image}} alt=""></div><div class=three-grid__item__description>{{item.description}}</div></div></div></div><div ng-switch-when=1><div class="row one-grid__row"><div class="one-grid__item col-xs-12 no-gutter"><h3 ng-if=event.isFirst class=one-grid__item__header>{{history.year}}</h3><div class=one-grid__item__description>{{event.description}}</div></div></div></div></div></div></div></div></div></div></div></div><footer></footer>'),a.put("app/programs/programs.html",'<header></header><div class=programs><div class=container><div class=row><h1 class=programs__title>{{App.program.title}}</h1></div><div class=row><aside class=col-xs-3><div class="row side-bar"><div ng-repeat="item in menuFilters" class=side-bar__item><a href={{item.link}}><h4 ng-class="{\'side-bar__item--active\': item.active}" class=side-bar__item__title>{{item.title}}</h4></a><div class=side-bar__item__branch--container-display><div ng-repeat="subItem in item.items" class=side-bar__item__branch><a href={{subItem.link}}><p ng-class="{\'side-bar__item--active\': subItem.active}">{{subItem.title}}</p></a></div></div></div></div></aside><main class=col-xs-9><div class="row programs__main"><div class=programs__main__intro><div class=programs__main__intro__line><div class=programs__main__intro__line--text>{{App.program.content.introduction.title}}</div></div><div ng-repeat="line in intros" class=programs__main__intro__line><div class=programs__main__intro__line--key>{{line.keyword}}</div>&nbsp<div class=programs__main__intro__line--text>{{line.text}}</div></div></div><div class=programs__main__block><h2 class="programs__main__block__title programs__main__block__title--bold">{{App.program.content.globalPresence.title}}</h2><img src={{App.program.content.globalPresence.image}} alt="" class="programs__main__block__img"><div ng-repeat="line in App.program.content.globalPresence.description" class=programs__main__block__line>{{line}}</div></div><div class=programs__main__block><h2 class=programs__main__block__title>{{App.program.content.statistic.title}}</h2><img src={{App.program.content.statistic.image}} alt="" class="programs__main__block__img"><div ng-repeat="line in App.program.content.statistic.description" class=programs__main__block__line>{{line}}</div></div><div class=programs__main__speech><div class=programs__main__speech__text>"{{App.program.content.speech.text}}"</div><div class=programs__main__speech__owner>{{App.program.content.speech.owner}}</div></div></div></main></div></div></div><footer></footer>'),a.put("components/footer/footer.html",'<div class=container><div class=row><div class="footer__menu col-xs-12"><ul><li><a href={{App.footer.item1.link}}>{{App.footer.item1.name}}</a></li><li><a href={{App.footer.item2.link}}>{{App.footer.item2.name}}</a></li><li><a href={{App.footer.item3.link}}>{{App.footer.item3.name}}</a></li><li><a href={{App.footer.item4.link}}>{{App.footer.item4.name}}</a></li><li><a href={{App.footer.item5.link}}>{{App.footer.item5.name}}</a></li></ul></div><div class=col-xs-6><p>Email:</p><p class=footer__email><a href=mailto:{{App.footer.email}}><span>{{App.footer.email}}</span></a></p></div><div class="footer__shares col-xs-6"><a href=http://facebook.com/seovie><i class="fa fa-facebook-square"></i></a><a href=http://www.youtube.com/user/seovietnam2012><i class="fa fa-youtube-square"></i></a><a href=#><i class="fa fa-instagram"></i></a></div></div></div>'),a.put("components/header/header.html",'<div class=container><div class=row><div class=header__content><div class="header__content__logo col-xs-2"><a href="http://seo-vietnam.org/"><img src="/assets/images/logo/SEO_Vietnam.jpg"></a></div><div class="header__content__menu col-xs-10"><div class=header__content__menu__line-1><a href=http://apply.seo-vietnam.org/Account/Login><p>{{App.pageMenu.login}}</p></a></div><div class=header__content__menu__line-2><div class=row><div class="header__content__menu__line-2__item col-xs-2 col-xs-offset-2"><a href={{App.pageMenu.item1.link}}><p ng-class="{\'header__content__menu--active\': isActive(App.pageMenu.item1.name)}">{{App.pageMenu.item1.name}}</p></a></div><div class="header__content__menu__line-2__item col-xs-2"><a href={{App.pageMenu.item2.link}} ng-class="{\'header__content__menu--active\': isActive(App.pageMenu.item2.name)}"><p ng-class="{\'header__content__menu--active\': isActive(App.pageMenu.item2.name)}">{{App.pageMenu.item2.name}}</p></a></div><div class="header__content__menu__line-2__item col-xs-2"><a href={{App.pageMenu.item3.link}} ng-class="{\'header__content__menu--active\': isActive(App.pageMenu.item3.name)}"><p ng-class="{\'header__content__menu--active\': isActive(App.pageMenu.item3.name)}">{{App.pageMenu.item3.name}}</p></a></div><div class="header__content__menu__line-2__item col-xs-2"><a href={{App.pageMenu.item4.link}} ng-class="{\'header__content__menu--active\': isActive(App.pageMenu.item4.name)}"><p ng-class="{\'header__content__menu--active\': isActive(App.pageMenu.item4.name)}">{{App.pageMenu.item4.name}}</p></a></div><div class="header__content__menu__line-2__item col-xs-2"><a href={{App.pageMenu.item5.link}} ng-class="{\'header__content__menu--active\': isActive(App.pageMenu.item5.name)}"><p ng-class="{\'header__content__menu--active\': isActive(App.pageMenu.item5.name)}">{{App.pageMenu.item5.name}}</p></a></div></div></div></div></div></div></div>'),a.put("components/header/main-header.html",'<div class=container><div class=main-header__nav><div class=main-header__nav--right><ul><li><a href={{App.homeMenu.item1.link}}>{{App.homeMenu.item1.name}}</a></li><li><a href={{App.homeMenu.item2.link}}>{{App.homeMenu.item2.name}}</a></li><li><a href={{App.homeMenu.item3.link}}>{{App.homeMenu.item3.name}}</a></li><li><a href={{App.homeMenu.item4.link}}>{{App.homeMenu.item4.name}}</a></li><li><a href="http://seo-vietnam.org/"><img src="/assets/images/logo/SEO_Vietnam.2ac140df.jpg"></a></li></ul></div></div></div>'),a.put("components/mixins/common-grid/_common-grid.html",""),a.put("components/modal/modal.html",'<div class=modal-header><button ng-if=modal.dismissable type=button ng-click=$dismiss() class=close>&times;</button><h4 ng-if=modal.title ng-bind=modal.title class=modal-title></h4></div><div class=modal-body><p ng-if=modal.text ng-bind=modal.text></p><div ng-if=modal.html ng-bind-html=modal.html></div></div><div class=modal-footer><button ng-repeat="button in modal.buttons" ng-class=button.classes ng-click=button.click($event) ng-bind=button.text class=btn></button></div>'),a.put("components/navbar/navbar.html",'<div ng-controller=NavbarCtrl class="navbar navbar-default navbar-static-top"><div class=container><div class=navbar-header><button type=button ng-click="isCollapsed = !isCollapsed" class=navbar-toggle><span class=sr-only>Toggle navigation</span><span class=icon-bar></span><span class=icon-bar></span><span class=icon-bar></span></button><a href="/" class=navbar-brand>al-booking</a></div><div id=navbar-main collapse=isCollapsed class="navbar-collapse collapse"><ul class="nav navbar-nav"><li ng-repeat="item in menu" ui-sref-active=active><a ui-sref={{item.state}}>{{item.title}}</a></li></ul></div></div></div>')}]);