/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/AuthenticationModals.js":
/*!**********************************************!*\
  !*** ./resources/js/AuthenticationModals.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ authModal)
/* harmony export */ });
function authModal() {
  return "\n    \n<!-------------------------------------- LOGIN-MODAL --------------------------- -->\n<div id=\"loginModal\" class=\"modal fade\">\n\t<div class=\"modal-dialog modal-login\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\t\t\t\t\n\t\t\t\t<h4 class=\"modal-title\">LOGIN</h4>\n\t\t\t\t<button type=\"button\" class=\"btn close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<form id=\"loginForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"lemail\" name=\"email\" placeholder=\"Email\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<i class=\"fa fa-lock\"></i>\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"lpassword\" name=\"password\" autocomplete=\"on\" placeholder=\"Password\">\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-lg\" id=\"loginBtn\" value=\"Login\">\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>     \n    \n<!-------------------------------------- REGISTER-MODAL ----------------------------->\n<div id=\"registerModal\" class=\"modal fade\">\n\t<div class=\"modal-dialog modal-login\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\t\t\t\t\n\t\t\t\t<h4 class=\"modal-title\">REGISTER</h4>\n\t\t\t\t<button type=\"button\" class=\"btn close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<form id=\"registerForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" >\n                    </div>\n                    <div class=\"form-group\">\n\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<i class=\"fa fa-lock\"></i>\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" autocomplete=\"on\" placeholder=\"Password\">\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-lg\" id=\"registerBtn\" value=\"Register\">\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n</div>     \n\n\n\n    ";
}

/***/ }),

/***/ "./resources/js/account/functions/bookmarkNews.js":
/*!********************************************************!*\
  !*** ./resources/js/account/functions/bookmarkNews.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bookmarkNews)
/* harmony export */ });
function bookmarkNews(data) {
  $.ajax({
    type: "Post",
    url: "/api/News",
    data: data,
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    },
    dataType: "json",
    success: function success(data) {
      e.preventDefault();
      console.log('success');
    },
    error: function error(_error) {
      alert('Login first to bookmark news');
    }
  });
}

/***/ }),

/***/ "./resources/js/account/functions/followEonet.js":
/*!*******************************************************!*\
  !*** ./resources/js/account/functions/followEonet.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ followEonet)
/* harmony export */ });
function followEonet(data) {
  $.ajax({
    type: "Post",
    url: "/api/Eonet",
    data: data,
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    },
    dataType: "json",
    success: function success(data) {
      e.preventDefault();
      console.log('success');
    },
    error: function error(_error) {
      alert('Login first to bookmark event');
    }
  });
}

/***/ }),

/***/ "./resources/js/account/functions/followGlobal.js":
/*!********************************************************!*\
  !*** ./resources/js/account/functions/followGlobal.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ followGlobal)
/* harmony export */ });
function followGlobal(data) {
  $.ajax({
    type: "Post",
    url: "/api/GlobalGiving",
    data: data,
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    },
    dataType: "json",
    success: function success(data) {
      e.preventDefault();
      console.log('success');
    },
    error: function error(_error) {
      alert('Login first to bookmark charity');
    }
  });
}

/***/ }),

/***/ "./resources/js/account/functions/showDetails.js":
/*!*******************************************************!*\
  !*** ./resources/js/account/functions/showDetails.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showDetails)
/* harmony export */ });
function showDetails() {
  return "\n    <div class=\"modal fade\" id=\"showDetails\" tabindex=\"-1\" aria-labelledby=\"showDetails\" aria-hidden=\"true\">\n<div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n    \n        <div class=\"modal-header\">\n            \n        </div>\n        <div class=\"modal-body\">\n\n        <div class=\"modal-event\">\n        event\n        </div>\n                \n        <div class=\"row\">\n            <div class=\"col\" id=\"eonet-news\">\n            news\n            </div>\n            <div class=\"col\" id=\"eonet-charity\">\n            charity\n            </div>\n        </div>\n            \n\n        </div>\n        <div class=\"modal-footer\">\n        \n        \n        </div>\n</div>\n</div>\n";
}

/***/ }),

/***/ "./resources/js/account/functions/showModalDetails.js":
/*!************************************************************!*\
  !*** ./resources/js/account/functions/showModalDetails.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showModalDetails)
/* harmony export */ });
/* harmony import */ var _followGlobal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./followGlobal */ "./resources/js/account/functions/followGlobal.js");
/* harmony import */ var _followEonet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./followEonet */ "./resources/js/account/functions/followEonet.js");
/* harmony import */ var _bookmarkNews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookmarkNews */ "./resources/js/account/functions/bookmarkNews.js");



function showModalDetails(card_id, all_result_events) {
  var category_id; // console.log( all_result_events);

  for (var r = 0; r < all_result_events.length; r++) {
    if (all_result_events[r].id == card_id) {
      // console.log(" AAAAAAAA");
      $('.modal-header').html("<div class=\"card-title\"><a href=\"#\" target=\"_blank\">".concat(all_result_events[r].title, "</a></div>"));
      $('.modal-event').html("\n                    \n                    <div class=\"card-body\">\n                        <p><label>Category:</label> ".concat(all_result_events[r].categories[0].title, "</p>\n                        <p><label>Date:</label> ").concat(all_result_events[r].geometry[0].date, "</p>\n                        <p><label>Coordinates:</label> ").concat(all_result_events[r].geometry[0].coordinates[0], " , ").concat(all_result_events[r].geometry[0].coordinates[1], "</p>\n                    </div>\n                    <div class=\"card-footer\">\n                    <a href=\"").concat(all_result_events[r].sources[0].url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">MORE INFO</button></a>\n                    \n                    </div>\n                </div>\n                "));
      category_id = all_result_events[r].categories[0].id;
    }
  }

  console.log(category_id);
  $.ajax({
    type: 'GET',
    url: 'api/news2/' + category_id,
    success: function success(response) {
      var data = response.articles; // console.log(data);

      $('#eonet-news').html('');
      data.forEach(function (element) {
        var string = element.description;
        var length = 150;
        var bodytrimmed = string.substring(0, length);
        $('#eonet-news').append("\n                    <div class=\"card col\"  style=\"\">\n                    <img src=\"".concat(element.urlToImage, "\" class=\"card-img-top\" alt=\"...\"> \n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"><a href=\"#\" target=\"_blank\">").concat(element.title, "</a></h5>\n                        <h6 class=\"card-title2\"><a href=\"#\" target=\"_blank\">by ").concat(element.author, "</a></h6>\n                        <p class=\"card-text\">").concat(bodytrimmed, "</p>\n                    </div>\n                    <div class=\"card-footer\">\n                    <a href=\"").concat(element.url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">READ MORE</button></a>\n                    <span id=\"bookmark\"><i class=\"fas fa-bookmark bookmarknews\" id=\"bookmarknews\" data-id=\"").concat(element.url, "\" tabindex=\"0\"></i></span>\n                    </div>\n                </div>\n                    "));
      });
      $('.bookmarknews').on('click', function (e) {
        var newsid = $(e.currentTarget).attr('data-id');
        var userid = localStorage.getItem('user_id');
        var datainput = "\n                    <form action=\"\" id=\"bookmarkNews\">\n                    <input type=\"text\" id=\"newsid\" name=\"newsid\" value=\"".concat(newsid, "\">\n                    <input type=\"text\" id=\"user_id\" name=\"user_id\" value=\"").concat(userid, "\">\n                    </form>\n                    ");
        var data = $(datainput).serialize();
        console.log(newsid);
        (0,_bookmarkNews__WEBPACK_IMPORTED_MODULE_2__.default)(data);
      });
    }
  });
  $.ajax({
    type: 'GET',
    url: 'https://api.globalgiving.org/api/public/projectservice/themes/disaster/projects?api_key=0497935c-d3a3-456a-a526-7da636c07c85',
    accepts: {
      'accept': 'application/json'
    },
    dataType: 'json',
    success: function success(response) {
      var data = response.projects.project;
      $('#eonet-charity').html('');
      data.forEach(function (element) {
        var string = element.summary;
        var length = 150;
        var bodytrimmed = string.substring(0, length);
        $('#eonet-charity').append("\n                        <div class=\"card col\"  style=\"\">\n                        <img src=\"".concat(element.imageLink, "\" class=\"card-img-top\" alt=\"...\"> \n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\"><a href=\"#\" target=\"_blank\">").concat(element.title, "</a></h5>\n                            <h6 class=\"card-title2\"><a href=\"").concat(element.contactUrl, "\" target=\"_blank\">by ").concat(element.contactAddress, "</a></h6>\n                            <p class=\"card-text\">").concat(bodytrimmed, "</p>\n                        </div>\n                        <div class=\"card-footer\">\n                        <a href=\"").concat(element.projectLink, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">READ MORE</button></a>\n                        <span id=\"bookmark\"><i class=\"fas fa-bookmark follow-global\" id=\"follow-global\" data-id=\"").concat(element.id, "\" tabindex=\"0\"></i></span>\n                        </div>\n                        </div>\n                        "));
      });
      $('.follow-global').on('click', function (e) {
        var globalgivingid = $(e.currentTarget).attr('data-id');
        var userid = localStorage.getItem('user_id');
        var datainput = "\n                            <form action=\"\" id=\"bookmarkNews\">\n                            <input type=\"text\" id=\"globalgivingid\" name=\"globalgivingid\" value=\"".concat(globalgivingid, "\">\n                            <input type=\"text\" id=\"user_id\" name=\"user_id\" value=\"").concat(userid, "\">\n                            </form>\n                            ");
        var data = $(datainput).serialize();
        console.log(globalgivingid);
        (0,_followGlobal__WEBPACK_IMPORTED_MODULE_0__.default)(data);
      });
    }
  }); //     });
}

/***/ }),

/***/ "./resources/js/account/getEonet.js":
/*!******************************************!*\
  !*** ./resources/js/account/getEonet.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getEonet)
/* harmony export */ });
/* harmony import */ var _functions_showDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/showDetails */ "./resources/js/account/functions/showDetails.js");
/* harmony import */ var _functions_showModalDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/showModalDetails */ "./resources/js/account/functions/showModalDetails.js");


function getEonet(response) {
  console.log('EONET');
  var newsContent = "\n    <div class=\"page-title\">\n        <h1> Earth Observatory Natural Event Tracker</h1>\n        <h2>(EONET)</h2>\n    </div>\n    <div id=\"eonet-list\">\n        \n    </div>\n    ";
  $('#content-account').html(newsContent);
  var i = 0;
  var all_result = new Array();
  response.forEach(function (data) {
    all_result[i] = data;
    i++;
  }); // console.log(all_result[0].eonetid);

  $.ajax({
    type: 'GET',
    url: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit&' + 'api_key=qnGioQlQwdiwOCY2qSRM3mJOtAQMElCLjegvqc3r',
    success: function success(response) {
      var data = response.events; // console.log(data);  

      var x = all_result.length;
      var all_result_events = new Array();
      var v = 0;
      data.forEach(function (element) {
        all_result_events[v] = element;
        v++;
      }); // var x = 0

      showEonet();

      function showEonet() {
        console.log(all_result);

        if (x == 0) {
          $('#eonet-list').html("<h1>NO BOOKMARKED EVENTS</h1>");
        } else {
          var _loop = function _loop(r) {
            data.forEach(function (element) {
              if (all_result[r].eonetid == element.id) {
                // console.log(all_result[r].id);
                $('#eonet-list').append("\n                                <div class=\"card col\" >\n                                    <div class=\"card-title\">\n                                    <a href=\"".concat(element.sources[0].url, "\" target=\"_blank\">").concat(element.title, "</a>\n                                    </div>\n                                    <div class=\"card-body\" data-id=\"").concat(element.id, "\" data-bs-toggle=\"modal\" data-bs-target=\"#showDetails\">\n                                        <p><label>Category:</label> ").concat(element.categories[0].title, "</p>\n                                        <p><label>Date:</label> ").concat(element.geometry[0].date, "</p>\n                                        <p><label>Coordinates:</label> ").concat(element.geometry[0].coordinates[0], " , ").concat(element.geometry[0].coordinates[1], "</p>\n                                    </div>\n                                    <div class=\"card-footer\">\n                                    <a href=\"").concat(element.sources[0].url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">MORE INFO</button></a>\n                                    <span id=\"bookmark\"><i class=\"fas fa-trash delete-eonet\" id=\"delete-eonet\" style=\"color: #c05f5f;\" data-id=\"").concat(all_result[r].id, "\" tabindex=\"0\"></i></span>\n                                    </div>\n                                </div>\n                                "));
              }
            });
          };

          for (var r = 0; r < x; r++) {
            _loop(r);
          }
        }

        $('.delete-eonet').on('click', function (e) {
          var id = $(e.currentTarget).attr('data-id');
          console.log(id);
          console.log('delete');
          $.ajax({
            type: "DELETE",
            url: "/api/Eonet/" + id,
            data: data,
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            dataType: "json",
            success: function success(data) {
              e.preventDefault();
              console.log('success'); // showEonet();
            },
            error: function error(_error) {
              alert('error');
            }
          });
        });
      }

      $('#contentpage').append(_functions_showDetails__WEBPACK_IMPORTED_MODULE_0__.default);
      $('#showDetails').on('show.bs.modal', function (e) {
        var card_id = $(e.relatedTarget).attr('data-id'); // console.log(card_id); 
        // console.log(all_result_events);

        (0,_functions_showModalDetails__WEBPACK_IMPORTED_MODULE_1__.default)(card_id, all_result_events);
      });
    },
    error: function error(_error2) {
      console.log('error');
    }
  });
}

/***/ }),

/***/ "./resources/js/account/getGlobalGiving.js":
/*!*************************************************!*\
  !*** ./resources/js/account/getGlobalGiving.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getGlobalGiving)
/* harmony export */ });
function getGlobalGiving(response) {
  var newsContent = "\n    <div class=\"page-title\">\n        <h1>GLOBAL GIVING</h1>\n    </div>\n    <div id=\"globalgiving-list\" >\n        <h1>No bookmarked projects</h1>\n    </div>\n    ";
  $('#content-account').html(newsContent);
  var i = 0;
  var all_result = new Array();
  response.forEach(function (data) {
    all_result[i] = data;
    i++;
  }); // console.log(all_result[0].globalgivingid);

  $.ajax({
    type: 'GET',
    url: 'https://api.globalgiving.org/api/public/projectservice/themes/disaster/projects?api_key=0497935c-d3a3-456a-a526-7da636c07c85',
    accepts: {
      'accept': 'application/json'
    },
    dataType: 'json',
    success: function success(response) {
      var data = response.projects.project;
      $('#globalgiving-list').html(' ');

      var _loop = function _loop(r) {
        data.forEach(function (element) {
          if (all_result[r].globalgivingid == element.id) {
            var string = element.summary;
            var length = 150;
            var bodytrimmed = string.substring(0, length);
            $('#globalgiving-list').append("\n                        <div class=\"card col\"  style=\"\">\n                        <img src=\"".concat(element.imageLink, "\" class=\"card-img-top\" alt=\"...\"> \n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\"><a href=\"#\" target=\"_blank\">").concat(element.title, "</a></h5>\n                            <h6 class=\"card-title2\"><a href=\"").concat(element.contactUrl, "\" target=\"_blank\">by ").concat(element.contactAddress, "</a></h6>\n                            <p class=\"card-text\">").concat(bodytrimmed, "</p>\n                        </div>\n                        <div class=\"card-footer\">\n                        <a href=\"").concat(element.projectLink, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">READ MORE</button></a>\n                        <span id=\"bookmark\"><i class=\"fas fa-trash delete-global\" id=\"delete-global\" style=\"color: #c05f5f;\" data-id=\"").concat(all_result[r].id, "\" tabindex=\"0\"></i></span>\n                        </div>\n                        </div>\n                        "));
          }
        });
      };

      for (var r = 0; r < all_result.length; r++) {
        _loop(r);
      }

      $('.delete-global').on('click', function (e) {
        var id = $(e.currentTarget).attr('data-id');
        console.log(id);
        console.log('delete');
        $.ajax({
          type: "DELETE",
          url: "/api/GlobalGiving/" + id,
          data: data,
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
          },
          dataType: "json",
          success: function success(data) {
            e.preventDefault();
            console.log('success'); // showEonet();
          },
          error: function error(_error) {
            alert('error');
          }
        });
      });
    },
    error: function error(_error2) {
      console.log('error');
    }
  });
}

/***/ }),

/***/ "./resources/js/account/getNews.js":
/*!*****************************************!*\
  !*** ./resources/js/account/getNews.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getEonet)
/* harmony export */ });
function getEonet(response) {
  var newsContent = "\n    <div class=\"page-title\">\n        <h1>NEWS</h1>\n    </div>\n    <div class=\"dropdown\" id=\"category-drop\">\n    <button style=\"background-color:#3aafeb; color:#f3f7f9\" class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n        CATEGORY\n    </button>\n    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\" id=\"news-list-category\">\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"drought\">Drought</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"earthquakes\">Earthquakes</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"floods\">Floods</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"landslides\">Landslides</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"storms\">Severe Storms</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"snowstorm\">Snow</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"volcanoes\">Volcanoes</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"wildfires\">Wildfires</a></li>\n    </ul>\n    </div>\n    <div id=\"news-list\">\n    <h1>CHOOSE CATEGORY</h1>\n    </div>\n    ";
  $('#content-account').html(newsContent);
  var i = 0;
  var all_result = new Array();
  response.forEach(function (data) {
    all_result[i] = data;
    i++;
  });
  console.log(all_result);
  $('.dropdown-item').on('click', function (e) {
    var id = e.currentTarget.dataset.id;
    $.ajax({
      type: 'GET',
      url: 'api/news/' + id,
      success: function success(response) {
        var data = response.articles; // console.log(data);

        $('#news-list').html('NO DATA');

        var _loop = function _loop(r) {
          data.forEach(function (element) {
            if (all_result[r].newsid == element.url) {
              var string = element.description;
              var length = 150;
              var bodytrimmed = string.substring(0, length);
              $('#news-list').html('');
              $('#news-list').append("\n                    <div class=\"card col\"  style=\"\">\n                    <img src=\"".concat(element.urlToImage, "\" class=\"card-img-top\" alt=\"...\"> \n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"><a href=\"#\" target=\"_blank\">").concat(element.title, "</a></h5>\n                        <h6 class=\"card-title2\"><a href=\"#\" target=\"_blank\">by ").concat(element.author, "</a></h6>\n                        <p class=\"card-text\">").concat(bodytrimmed, "</p>\n                    </div>\n                    <div class=\"card-footer\">\n                    <a href=\"").concat(element.url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">READ MORE</button></a>\n                    <span id=\"bookmark\"><i class=\"fas fa-trash delete-news\" id=\"delete-news\" style=\"color: #c05f5f;\" data-id=\"").concat(all_result[r].id, "\" tabindex=\"0\"></i></span>\n                    </div>\n                </div>\n                    "));
            }
          });
        };

        for (var r = 0; r < all_result.length; r++) {
          _loop(r);
        }

        $('.delete-news').on('click', function (e) {
          var id = $(e.currentTarget).attr('data-id');
          console.log(id);
          console.log('delete');
          $.ajax({
            type: "DELETE",
            url: "/api/News/" + id,
            data: data,
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            dataType: "json",
            success: function success(data) {
              e.preventDefault();
              console.log('success'); // showEonet();
            },
            error: function error(_error) {
              alert('error');
            }
          });
        });
      }
    });
  });
}

/***/ }),

/***/ "./resources/js/account/myAccount.js":
/*!*******************************************!*\
  !*** ./resources/js/account/myAccount.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ myAccount)
/* harmony export */ });
/* harmony import */ var _getEonet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEonet */ "./resources/js/account/getEonet.js");
/* harmony import */ var _getNews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNews */ "./resources/js/account/getNews.js");
/* harmony import */ var _getGlobalGiving__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getGlobalGiving */ "./resources/js/account/getGlobalGiving.js");



function myAccount() {
  var pageContent = "\n    <div id= myaccNav>\n        <ul class=\"nav justify-content-center myaccNav\">\n        <li class=\"nav-item\">\n        <a class=\"nav-link acclink\" data-id=\"getEonet\" href=\"#\">EONET</a>\n        </li>\n        <li class=\"nav-item\">\n        <a class=\"nav-link acclink\" data-id=\"getNews\" href=\"#\">NEWS</a>\n        </li>\n        <li class=\"nav-item\">\n        <a class=\"nav-link acclink\" data-id=\"getGlobalGiving\" href=\"#\">GLOBAL GIVING</a>\n        </li>\n        </ul>\n    </div>\n    \n\n    \n    <div id=\"content-account\">\n    </div>\n    ";
  $('#contentpage').html(pageContent);
  $('.acclink').on('click', function (e) {
    var id = localStorage.getItem('user_id');
    var link = e.currentTarget.dataset.id; // console.log(link);

    $.ajax({
      type: "GET",
      url: "/api/" + link + "/" + id,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      },
      dataType: 'json',
      success: function success(response) {
        switch (link) {
          case "getEonet":
            (0,_getEonet__WEBPACK_IMPORTED_MODULE_0__.default)(response);
            break;

          case "getNews":
            (0,_getNews__WEBPACK_IMPORTED_MODULE_1__.default)(response);
            break;

          case "getGlobalGiving":
            (0,_getGlobalGiving__WEBPACK_IMPORTED_MODULE_2__.default)(response);
            break;

          default:
            break;
        }
      },
      error: function error(_error) {
        console.log('error');
      }
    });
  });
}

/***/ }),

/***/ "./resources/js/database.js":
/*!**********************************!*\
  !*** ./resources/js/database.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ database)
/* harmony export */ });
function database() {
  var page = "\n    <div class=\"page-title\">\n        <h1> Database</h1>\n    </div>\n    <div class=\"d-flex justify-content-center database-image\">\n    <img src=\"../img/database.png\" class=\"card-img-top\" alt=\"...\" style=\"width: 900px; height:550px;\"> \n    </div>\n    \n    ";
  $('#contentpage').html(page);
}

/***/ }),

/***/ "./resources/js/eonet.js":
/*!*******************************!*\
  !*** ./resources/js/eonet.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ eonet)
/* harmony export */ });
/* harmony import */ var _functions_showDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/showDetails */ "./resources/js/functions/showDetails.js");
/* harmony import */ var _functions_followEonet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/followEonet */ "./resources/js/functions/followEonet.js");
/* harmony import */ var _functions_showModalDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/showModalDetails */ "./resources/js/functions/showModalDetails.js");



function eonet() {
  // console.log('WORKING');
  var newsContent = "\n    <div class=\"page-title\">\n        <h1> Earth Observatory Natural Event Tracker</h1>\n        <h2>(EONET)</h2>\n    </div>\n\n    \n    <div class=\"row\" id=\"searchBar\">\n        <div class=\"col-sm\">\n                <div class=\"dropdown\" >\n                <button style=\"background-color:#3aafeb; color:#f3f7f9\" class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                    CATEGORY\n                </button>\n                <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\" id=\"news-list-category\">\n                    <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"drought\">Drought</a></li>\n                    <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"earthquakes\">Earthquakes</a></li>\n                    <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"floods\">Floods</a></li>\n                    <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"landslides\">Landslides</a></li>\n                    <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"severeStorms\">Severe Storms</a></li>\n                    <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"snow\">Snow</a></li>\n                    <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"volcanoes\">Volcanoes</a></li>\n                    <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"wildfires\">Wildfires</a></li>\n                </ul>\n                </div>\n        </div>\n\n        <div class=\"col-sm d-flex flex-row-reverse\" id=\"category-drop\">\n            <div class=\"input-group rounded\">\n                <input type=\"search\" class=\"form-control rounded\" placeholder=\"Search\" aria-label=\"Search\"\n                    aria-describedby=\"search-addon\" id=\"eonet-search\" />\n                    <button type=\"button\" class=\"btn btn-primary searchEonet\" style=\"background-color:#3aafeb; color:#f3f7f9\" >\n                    <i class=\"fas fa-search\"></i>\n                    </button>\n            </div>\n        </div>\n    </div>\n    \n\n    <div class=\"eonet-card-container\" id=\"eonet-list\">\n        <h1>NO DATA</h1>\n    </div>\n    ";
  $('#contentpage').html(newsContent);
  $('#contentpage').append(_functions_showDetails__WEBPACK_IMPORTED_MODULE_0__.default);
  var all_result = new Array();
  $.ajax({
    type: 'GET',
    url: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events?&' + 'api_key=qnGioQlQwdiwOCY2qSRM3mJOtAQMElCLjegvqc3r',
    success: function success(response) {
      $('#eonet-list').html('');
      var data = response.events;
      data.forEach(function (element) {
        $('#eonet-list').append("\n                <div class=\"card col\"  >\n                    <div class=\"card-title\">\n                    <a href=\"#\" target=\"_blank\">".concat(element.title, "</a>\n                    </div>\n                    <div class=\"card-body\" data-id=\"").concat(element.id, "\" data-bs-toggle=\"modal\" data-bs-target=\"#showDetails\">\n                        <p><label>Category:</label> ").concat(element.categories[0].title, "</p>\n                        <p><label>Date:</label> ").concat(element.geometry[0].date, "</p>\n                        <p><label>Coordinates:</label> ").concat(element.geometry[0].coordinates[0], " , ").concat(element.geometry[0].coordinates[1], "</p>\n                    </div>\n                    <div class=\"card-footer\">\n                    <a href=\"").concat(element.sources[0].url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">MORE INFO</button></a>\n                    <span id=\"bookmark\"><i class=\"fas fa-bookmark follow-eonet\" id=\"follow-eonet\" data-id=\"").concat(element.id, "\" tabindex=\"0\"></i></span>\n                    </div>\n                </div>\n                "));
        var i = 0;
        data.forEach(function (data) {
          all_result[i] = data;
          i++;
        });
      });
      $('.follow-eonet').on('click', function (e) {
        var eonetid = $(e.currentTarget).attr('data-id');
        var userid = localStorage.getItem('user_id');
        var datainput = "\n                    <form action=\"\" id=\"addEonet\">\n                    <input type=\"text\" id=\"eonetid\" name=\"eonetid\" value=\"".concat(eonetid, "\">\n                    <input type=\"text\" id=\"user_id\" name=\"user_id\" value=\"").concat(userid, "\">\n                    </form>\n                    ");
        var data = $(datainput).serialize();
        console.log(data);
        (0,_functions_followEonet__WEBPACK_IMPORTED_MODULE_1__.default)(data);
      });
      $('#showDetails').on('show.bs.modal', function (e) {
        var card_id = $(e.relatedTarget).attr('data-id');
        (0,_functions_showModalDetails__WEBPACK_IMPORTED_MODULE_2__.default)(card_id, all_result);
      });
    }
  });
  $('.searchEonet').on('click', function (e) {
    var temp = document.getElementById("eonet-search").value;
    console.log(temp);
    var allEvents = new Array();
    var i;

    for (i = 0; i < all_result.length; i++) {
      allEvents[i] = [all_result[i].id, all_result[i].title, all_result[i].categories[0], all_result[i].geometry[0].date, all_result[i].geometry[0].coordinates, all_result[i].sources[0].url];
    }

    var regex = new RegExp(temp + "*", "gim");
    var matches = allEvents.filter(function (value) {
      return regex.test(value);
    });
    console.log(matches);
    $('#eonet-list').html('');

    for (var _i = 0; _i < matches.length; _i++) {
      $('#eonet-list').append("\n            <div class=\"card col\"  >\n            <div class=\"card-title\">\n            <a href=\"".concat(matches[_i][5], "\" target=\"_blank\">").concat(matches[_i][1], "</a>\n            </div>\n            <div class=\"card-body\" data-id=\"").concat(matches[_i][0], "\" data-bs-toggle=\"modal\" data-bs-target=\"#showDetails\">\n                <p><label>Category:</label> ").concat(matches[_i][2].title, "</p>\n                <p><label>Date:</label> ").concat(matches[_i][3], "</p>\n                <p><label>Coordinates:</label> ").concat(matches[_i][4][0], " , ").concat(matches[_i][4][1], "</p>\n            </div>\n            <div class=\"card-footer\">\n            <a href=\"").concat(matches[_i][5], "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">MORE INFO</button></a>\n            <span id=\"bookmark\"><i class=\"fas fa-bookmark follow-eonet2\" id=\"follow-eonet2\" data-id=\"").concat(matches[_i][0], "\" tabindex=\"0\"></i></span>\n            </div>\n        </div>\n        "));
    }
  });
  $('.dropdown-item').on('click', function (e) {
    var category = e.currentTarget.dataset.id;
    $.ajax({
      type: 'GET',
      url: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit&' + 'api_key=qnGioQlQwdiwOCY2qSRM3mJOtAQMElCLjegvqc3r',
      success: function success(response) {
        var data = response.events;
        var x = 0;
        var matched_data = new Array();
        $('#eonet-list').html('');
        data.forEach(function (element) {
          if (category == element.categories[0].id) {
            matched_data[x] = element;
            x++;
          }
        });
        console.log(matched_data);

        if (matched_data.length > 0) {
          for (var i = 0; i < matched_data.length; i++) {
            $('#eonet-list').append("\n                        <div class=\"card col\"  data-id=\"".concat(matched_data[i].id, "\" data-bs-toggle=\"modal\" data-bs-target=\"#showDetails\">\n                        <div class=\"card-title\">\n                        <a href=\"").concat(matched_data[i].sources[0].url, "\" target=\"_blank\">").concat(matched_data[i].title, "</a>\n                        </div>\n                        <div class=\"card-body\">\n                            <p><label>Category:</label> ").concat(matched_data[i].categories[0].title, "</p>\n                            <p><label>Date:</label> ").concat(matched_data[i].geometry[0].date, "</p>\n                            <p><label>Coordinates:</label> ").concat(matched_data[i].geometry[0].coordinates[0], " , ").concat(matched_data[i].geometry[0].coordinates[1], "</p>\n                        </div>\n                        <div class=\"card-footer\">\n                        <a href=\"").concat(matched_data[i].sources[0].url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">MORE INFO</button></a>\n                        <span id=\"bookmark\"><i class=\"fas fa-bookmark follow-eonet2\" id=\"follow-eonet2\" data-id=\"").concat(matched_data[i].id, "\" tabindex=\"0\"></i></span>\n                        </div>\n                    </div>\n                    "));
          }
        } else {
          $('#eonet-list').append("\n                    <div class=\"col-sm nodata\"  style=\"width: 720px;\">\n                        \n                        <h1>NO DATA</h1>\n                    \n                    </div>\n                \n                    ");
        }
      }
    });
    $('.follow-eonet2').on('click', function (e) {
      if (localStorage.getItem('acces_token') === !null) {
        var eonetid = $(e.currentTarget).attr('data-id');
        var userid = localStorage.getItem('user_id');
        var datainput = "\n                <form action=\"\" id=\"addEonet\">\n                <input type=\"text\" id=\"eonetid\" name=\"eonetid\" value=\"".concat(eonetid, "\">\n                <input type=\"text\" id=\"user_id\" name=\"user_id\" value=\"").concat(userid, "\">\n                </form>\n                ");
        var data = $(datainput).serialize(); // console.log(data);

        (0,_functions_followEonet__WEBPACK_IMPORTED_MODULE_1__.default)(data);
      } else {
        alert("LOGIN FIRST");
      }
    });
    $('#showDetails').on('show.bs.modal', function (e) {
      var card_id = $(e.relatedTarget).attr('data-id');
      (0,_functions_showModalDetails__WEBPACK_IMPORTED_MODULE_2__.default)(card_id, all_result);
    });
  });
}

/***/ }),

/***/ "./resources/js/functions/bookmarkNews.js":
/*!************************************************!*\
  !*** ./resources/js/functions/bookmarkNews.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bookmarkNews)
/* harmony export */ });
function bookmarkNews(data) {
  $.ajax({
    type: "Post",
    url: "/api/News",
    data: data,
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    },
    dataType: "json",
    success: function success(data) {
      // e.preventDefault();
      console.log('success');
    },
    error: function error(_error) {
      alert('Login first to bookmark news');
    }
  });
}

/***/ }),

/***/ "./resources/js/functions/followEonet.js":
/*!***********************************************!*\
  !*** ./resources/js/functions/followEonet.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ followEonet)
/* harmony export */ });
function followEonet(data) {
  $.ajax({
    type: "Post",
    url: "/api/Eonet",
    data: data,
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    },
    dataType: "json",
    success: function success(data) {
      // e.preventDefault();
      console.log('success');
    },
    error: function error(_error) {
      alert('error');
    }
  });
}

/***/ }),

/***/ "./resources/js/functions/followGlobal.js":
/*!************************************************!*\
  !*** ./resources/js/functions/followGlobal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ followGlobal)
/* harmony export */ });
function followGlobal(data) {
  $.ajax({
    type: "Post",
    url: "/api/GlobalGiving",
    data: data,
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    },
    dataType: "json",
    success: function success(data) {
      // e.preventDefault();
      console.log('success');
    },
    error: function error(_error) {
      alert('Login first to bookmark charity');
    }
  });
}

/***/ }),

/***/ "./resources/js/functions/showDetails.js":
/*!***********************************************!*\
  !*** ./resources/js/functions/showDetails.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showDetails)
/* harmony export */ });
function showDetails() {
  return "\n    <div class=\"modal fade\" id=\"showDetails\" tabindex=\"-1\" aria-labelledby=\"showDetails\" aria-hidden=\"true\">\n<div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n    \n        <div class=\"modal-header\">\n            \n        </div>\n        <div class=\"modal-body\">\n\n        <div class=\"modal-event\">\n        event\n        </div>\n                \n        <div class=\"row\">\n            <div class=\"col\" id=\"eonet-news\">\n            news\n            </div>\n            <div class=\"col\" id=\"eonet-charity\">\n            charity\n            </div>\n        </div>\n            \n\n        </div>\n        <div class=\"modal-footer\">\n        \n        \n        </div>\n</div>\n</div>\n";
}

/***/ }),

/***/ "./resources/js/functions/showModalDetails.js":
/*!****************************************************!*\
  !*** ./resources/js/functions/showModalDetails.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showModalDetails)
/* harmony export */ });
/* harmony import */ var _followGlobal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./followGlobal */ "./resources/js/functions/followGlobal.js");
/* harmony import */ var _followEonet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./followEonet */ "./resources/js/functions/followEonet.js");
/* harmony import */ var _bookmarkNews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookmarkNews */ "./resources/js/functions/bookmarkNews.js");



function showModalDetails(card_id, all_result) {
  // console.log(card_id);
  var category_id; // console.log( all_result);

  for (var r = 0; r < all_result.length; r++) {
    if (all_result[r].id == card_id) {
      $('.modal-header').html("<div class=\"card-title\"><a href=\"#\" target=\"_blank\">".concat(all_result[r].title, "</a></div>"));
      $('.modal-event').html("\n                    \n                    <div class=\"card-body\">\n                        <p><label>Category:</label> ".concat(all_result[r].categories[0].title, "</p>\n                        <p><label>Date:</label> ").concat(all_result[r].geometry[0].date, "</p>\n                        <p><label>Coordinates:</label> ").concat(all_result[r].geometry[0].coordinates[0], " , ").concat(all_result[r].geometry[0].coordinates[1], "</p>\n                    </div>\n                    <div class=\"card-footer\">\n                    <a href=\"").concat(all_result[r].sources[0].url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">MORE INFO</button></a>\n                    \n                    </div>\n                </div>\n                "));
      category_id = all_result[r].categories[0].id;
    }
  }

  console.log(category_id);
  $.ajax({
    type: 'GET',
    url: 'api/news2/' + category_id,
    success: function success(response) {
      var data = response.articles; // console.log(data);

      $('#eonet-news').html('');
      data.forEach(function (element) {
        var string = element.description;
        var length = 150;
        var bodytrimmed = string.substring(0, length);
        $('#eonet-news').append("\n                    <div class=\"card col\"  style=\"\">\n                    <img src=\"".concat(element.urlToImage, "\" class=\"card-img-top\" alt=\"...\"> \n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"><a href=\"#\" target=\"_blank\">").concat(element.title, "</a></h5>\n                        <h6 class=\"card-title2\"><a href=\"#\" target=\"_blank\">by ").concat(element.author, "</a></h6>\n                        <p class=\"card-text\">").concat(bodytrimmed, "</p>\n                    </div>\n                    <div class=\"card-footer\">\n                    <a href=\"").concat(element.url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">READ MORE</button></a>\n                    <span id=\"bookmark\"><i class=\"fas fa-bookmark bookmarknews\" id=\"bookmarknews\" data-id=\"").concat(element.url, "\" tabindex=\"0\"></i></span>\n                    </div>\n                </div>\n                    "));
      });
      $('.bookmarknews').on('click', function (e) {
        var newsid = $(e.currentTarget).attr('data-id');
        var userid = localStorage.getItem('user_id');
        var datainput = "\n                    <form action=\"\" id=\"bookmarkNews\">\n                    <input type=\"text\" id=\"newsid\" name=\"newsid\" value=\"".concat(newsid, "\">\n                    <input type=\"text\" id=\"user_id\" name=\"user_id\" value=\"").concat(userid, "\">\n                    </form>\n                    ");
        var data = $(datainput).serialize();
        console.log(newsid);
        (0,_bookmarkNews__WEBPACK_IMPORTED_MODULE_2__.default)(data);
      });
    }
  });
  $.ajax({
    type: 'GET',
    url: 'https://api.globalgiving.org/api/public/projectservice/themes/disaster/projects?api_key=0497935c-d3a3-456a-a526-7da636c07c85',
    accepts: {
      'accept': 'application/json'
    },
    dataType: 'json',
    success: function success(response) {
      var data = response.projects.project;
      $('#eonet-charity').html('');
      data.forEach(function (element) {
        var string = element.summary;
        var length = 150;
        var bodytrimmed = string.substring(0, length);
        $('#eonet-charity').append("\n                        <div class=\"card col\"  style=\"\">\n                        <img src=\"".concat(element.imageLink, "\" class=\"card-img-top\" alt=\"...\"> \n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\"><a href=\"#\" target=\"_blank\">").concat(element.title, "</a></h5>\n                            <h6 class=\"card-title2\"><a href=\"").concat(element.contactUrl, "\" target=\"_blank\">by ").concat(element.contactAddress, "</a></h6>\n                            <p class=\"card-text\">").concat(bodytrimmed, "</p>\n                        </div>\n                        <div class=\"card-footer\">\n                        <a href=\"").concat(element.projectLink, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">READ MORE</button></a>\n                        <span id=\"bookmark\"><i class=\"fas fa-bookmark follow-global\" id=\"follow-global\" data-id=\"").concat(element.id, "\" tabindex=\"0\"></i></span>\n                        </div>\n                        </div>\n                        "));
      });
      $('.follow-global').on('click', function (e) {
        var globalgivingid = $(e.currentTarget).attr('data-id');
        var userid = localStorage.getItem('user_id');
        var datainput = "\n                            <form action=\"\" id=\"bookmarkNews\">\n                            <input type=\"text\" id=\"globalgivingid\" name=\"globalgivingid\" value=\"".concat(globalgivingid, "\">\n                            <input type=\"text\" id=\"user_id\" name=\"user_id\" value=\"").concat(userid, "\">\n                            </form>\n                            ");
        var data = $(datainput).serialize();
        console.log(globalgivingid);
        (0,_followGlobal__WEBPACK_IMPORTED_MODULE_0__.default)(data);
      });
    }
  }); //     });
}

/***/ }),

/***/ "./resources/js/globalgiving.js":
/*!**************************************!*\
  !*** ./resources/js/globalgiving.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ globalgiving)
/* harmony export */ });
/* harmony import */ var _functions_followGlobal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/followGlobal */ "./resources/js/functions/followGlobal.js");

function globalgiving() {
  // console.log('globalgiving');
  var pageContent = "\n    <div class=\"page-title\">\n        <h1>GLOBAL GIVING</h1>\n    </div>\n\n    <div class=\"w-25 p-3\" id=\"category-drop\">\n            <div class=\"input-group rounded\">\n                <input type=\"search\" class=\"form-control rounded\" placeholder=\"Search\" aria-label=\"Search\"\n                    aria-describedby=\"search-addon\" id=\"global-search\" />\n                    <button type=\"button\" class=\"btn btn-primary searchGiving\" style=\"background-color:#3aafeb; color:#f3f7f9\" >\n                    <i class=\"fas fa-search\"></i>\n                    </button>\n            </div>\n        </div>\n    \n    <div id=\"globalgiving-list\">\n    </div>\n    ";
  $('#contentpage').html(pageContent);
  var all_giving = new Array();
  $.ajax({
    type: 'GET',
    url: 'https://api.globalgiving.org/api/public/projectservice/themes/disaster/projects?api_key=0497935c-d3a3-456a-a526-7da636c07c85',
    accepts: {
      'accept': 'application/json'
    },
    dataType: 'json',
    success: function success(response) {
      var data = response.projects.project; // console.log(data);
      // console.log('data');
      // $('#globalgiving-list').html('');

      data.forEach(function (element) {
        // if(element.active == true){
        var string = element.summary;
        var length = 150;
        var bodytrimmed = string.substring(0, length);
        $('#globalgiving-list').append("\n                    <div class=\"card col\"  style=\"\">\n                    <img src=\"".concat(element.imageLink, "\" class=\"card-img-top\" alt=\"...\"> \n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"><a href=\"#\" target=\"_blank\">").concat(element.title, "</a></h5>\n                        <h6 class=\"card-title2\"><a href=\"").concat(element.contactUrl, "\" target=\"_blank\">by ").concat(element.contactAddress, "</a></h6>\n                        <p class=\"card-text\">").concat(bodytrimmed, "</p>\n                    </div>\n                    <div class=\"card-footer\">\n                    <a href=\"").concat(element.projectLink, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">READ MORE</button></a>\n                    <span id=\"bookmark\"><i class=\"fas fa-bookmark follow-global\" id=\"follow-global\" data-id=\"").concat(element.id, "\" tabindex=\"0\"></i></span>\n                    </div>\n                    </div>\n                    ")); // }

        var i = 0;
        data.forEach(function (data) {
          all_giving[i] = data;
          i++;
        });
      });
      $('.follow-global').on('click', function (e) {
        var globalgivingid = $(e.currentTarget).attr('data-id');
        var userid = localStorage.getItem('user_id');
        var datainput = "\n                        <form action=\"\" id=\"bookmarkNews\">\n                        <input type=\"text\" id=\"globalgivingid\" name=\"globalgivingid\" value=\"".concat(globalgivingid, "\">\n                        <input type=\"text\" id=\"user_id\" name=\"user_id\" value=\"").concat(userid, "\">\n                        </form>\n                        ");
        var data = $(datainput).serialize();
        console.log(globalgivingid);
        (0,_functions_followGlobal__WEBPACK_IMPORTED_MODULE_0__.default)(data);
      });
      $('.searchGiving').on('click', function (e) {
        var temp = document.getElementById("global-search").value;
        console.log(temp);
        var allEvents = new Array();
        var i;

        for (i = 0; i < all_giving.length; i++) {
          allEvents[i] = [all_giving[i].id, all_giving[i].imageLink, all_giving[i].title, all_giving[i].contactUrl, all_giving[i].contactAddress, all_giving[i].projectLink, all_giving[i].summary];
        }

        var regex = new RegExp(temp + "*", "gim");
        var matches = allEvents.filter(function (value) {
          return regex.test(value);
        });
        console.log(matches);
        $('#globalgiving-list').html('');

        for (var _i = 0; _i < matches.length; _i++) {
          var string = matches[_i][6];
          var length = 150;
          var bodytrimmed = string.substring(0, length);
          $('#globalgiving-list').append("\n                        <div class=\"card col\"  style=\"\">\n                        <img src=\"".concat(matches[_i][1], "\" class=\"card-img-top\" alt=\"...\"> \n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\"><a href=\"#\" target=\"_blank\">").concat(matches[_i][2], "</a></h5>\n                            <h6 class=\"card-title2\"><a href=\"").concat(matches[_i][3], "\" target=\"_blank\">by ").concat(matches[_i][4], "</a></h6>\n                            <p class=\"card-text\">").concat(bodytrimmed, "</p>\n                        </div>\n                        <div class=\"card-footer\">\n                        <a href=\"").concat(matches[_i][5], "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">READ MORE</button></a>\n                        <span id=\"bookmark\"><i class=\"fas fa-bookmark follow-global\" id=\"follow-global\" data-id=\"").concat(matches[_i][0], "\" tabindex=\"0\"></i></span>\n                        </div>\n                        </div>\n                "));
        }
      });
    }
  });
}

/***/ }),

/***/ "./resources/js/home.js":
/*!******************************!*\
  !*** ./resources/js/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {
  var page = "\n    <div class=\"container-name\">\n    <div class=\"row\">\n    \n    <div class=\"col-sm\"  style=\"width: 720px;\">\n        <img src=\"../img/logolight.png\" class=\"card-img-top\" alt=\"...\" style=\"width: 110px; height:110px;\"> \n        <h1>N.E.T</h1>\n        <h2>NATURAL EVENT TRACKER</h2>\n        <p>AYACOCHO, LESLIE JAYNE | DOLLENTE, MICHAEL JOHN<br>\xA92021</p>\n    </div>\n    \n    </div>\n    </div>";
  $('#contentpage').html(page);
}

/***/ }),

/***/ "./resources/js/news.js":
/*!******************************!*\
  !*** ./resources/js/news.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ news)
/* harmony export */ });
/* harmony import */ var _functions_bookmarkNews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/bookmarkNews */ "./resources/js/functions/bookmarkNews.js");

function news() {
  // console.log('working');
  var pageContent = "\n    <div class=\"page-title\">\n        <h1>NEWS</h1>\n    </div>\n    \n\n    <div class=\"row\" id=\"searchBar\">\n        <div class=\"col-sm\">\n        <div class=\"dropdown\" id=\"category-drop\">\n        <button style=\"background-color:#3aafeb; color:#f3f7f9\" class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n            CATEGORY\n        </button>\n        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\" id=\"news-list-category\">\n            <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"drought\">Drought</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"earthquakes\">Earthquakes</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"floods\">Floods</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"landslides\">Landslides</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"storms\">Severe Storms</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"snowstorm\">Snow</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"volcanoes\">Volcanoes</a></li>\n            <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"wildfires\">Wildfires</a></li>\n        </ul>\n        </div>\n        </div>\n\n        <div class=\"col-sm d-flex flex-row-reverse\" id=\"category-drop\">\n            <div class=\"input-group rounded\">\n                <input type=\"search\" class=\"form-control rounded\" placeholder=\"Search\" aria-label=\"Search\"\n                    aria-describedby=\"search-addon\" id=\"news-search\" />\n                    <button type=\"button\" class=\"btn btn-primary searchNews\" style=\"background-color:#3aafeb; color:#f3f7f9\" >\n                    <i class=\"fas fa-search\"></i>\n                    </button>\n            </div>\n        </div>\n    </div>\n    \n    <div id=\"news-list\">\n    </div>\n    ";
  $('#contentpage').html(pageContent);
  $('.dropdown-item').on('click', function (e) {
    var id = e.currentTarget.dataset.id;
    $.ajax({
      type: 'GET',
      url: 'api/news/' + id,
      success: function success(response) {
        var data = response.articles; // console.log(data);

        $('#news-list').html('');
        data.forEach(function (element) {
          var string = element.description;
          var length = 150;
          var bodytrimmed = string.substring(0, length);
          $('#news-list').append("\n                    <div class=\"card col\"  style=\"\">\n                    <img src=\"".concat(element.urlToImage, "\" class=\"card-img-top\" alt=\"...\"> \n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"><a href=\"#\" target=\"_blank\">").concat(element.title, "</a></h5>\n                        <h6 class=\"card-title2\"><a href=\"#\" target=\"_blank\">by ").concat(element.author, "</a></h6>\n                        <p class=\"card-text\">").concat(bodytrimmed, "</p>\n                    </div>\n                    <div class=\"card-footer\">\n                    <a href=\"").concat(element.url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">READ MORE</button></a>\n                    <span id=\"bookmark\"><i class=\"fas fa-bookmark bookmarknews\" id=\"bookmarknews\" data-id=\"").concat(element.url, "\" tabindex=\"0\"></i></span>\n                    </div>\n                </div>\n                    "));
        });
        $('.bookmarknews').on('click', function (e) {
          var newsid = $(e.currentTarget).attr('data-id');
          var userid = localStorage.getItem('user_id');
          var datainput = "\n                    <form action=\"\" id=\"bookmarkNews\">\n                    <input type=\"text\" id=\"newsid\" name=\"newsid\" value=\"".concat(newsid, "\">\n                    <input type=\"text\" id=\"user_id\" name=\"user_id\" value=\"").concat(userid, "\">\n                    </form>\n                    ");
          var data = $(datainput).serialize();
          console.log(newsid);
          (0,_functions_bookmarkNews__WEBPACK_IMPORTED_MODULE_0__.default)(data);
        });
      }
    });
  });
  $('.searchNews').on('click', function (e) {
    var id = document.getElementById("news-search").value; // console.log(id);

    $.ajax({
      type: 'GET',
      url: 'api/news/' + id,
      success: function success(response) {
        var data = response.articles; // console.log(data);

        $('#news-list').html('');
        data.forEach(function (element) {
          var string = element.description;
          var length = 150;
          var bodytrimmed = string.substring(0, length);
          $('#news-list').append("\n                <div class=\"card col\"  style=\"\">\n                <img src=\"".concat(element.urlToImage, "\" class=\"card-img-top\" alt=\"...\"> \n                <div class=\"card-body\">\n                    <h5 class=\"card-title\"><a href=\"#\" target=\"_blank\">").concat(element.title, "</a></h5>\n                    <h6 class=\"card-title2\"><a href=\"#\" target=\"_blank\">by ").concat(element.author, "</a></h6>\n                    <p class=\"card-text\">").concat(bodytrimmed, "</p>\n                </div>\n                <div class=\"card-footer\">\n                <a href=\"").concat(element.url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">READ MORE</button></a>\n                <span id=\"bookmark\"><i class=\"fas fa-bookmark bookmarknews\" id=\"bookmarknews\" data-id=\"").concat(element.url, "\" tabindex=\"0\"></i></span>\n                </div>\n            </div>\n                "));
        });
      }
    });
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./resources/js/home.js");
/* harmony import */ var _AuthenticationModals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthenticationModals */ "./resources/js/AuthenticationModals.js");
/* harmony import */ var _eonet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eonet */ "./resources/js/eonet.js");
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news */ "./resources/js/news.js");
/* harmony import */ var _globalgiving__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globalgiving */ "./resources/js/globalgiving.js");
/* harmony import */ var _account_myAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/myAccount */ "./resources/js/account/myAccount.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./database */ "./resources/js/database.js");







$(document).ready(function () {
  var x = document.getElementById("login-btn-nav");
  var y = document.getElementById("register-btn-nav");
  var z = document.getElementById("myaccount-nav");
  var a = document.getElementById("logout-nav");

  if (localStorage.getItem('access_token')) {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    a.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "none";
    a.style.display = "none";
  }

  $('.link').on('click', function (e) {
    var link = e.currentTarget.dataset.id; // console.log(link)

    switch (link) {
      case "eonet":
        (0,_eonet__WEBPACK_IMPORTED_MODULE_2__.default)();
        break;

      case "news":
        (0,_news__WEBPACK_IMPORTED_MODULE_3__.default)();
        break;

      case "globalgiving":
        (0,_globalgiving__WEBPACK_IMPORTED_MODULE_4__.default)();
        break;

      case "myacc":
        (0,_account_myAccount__WEBPACK_IMPORTED_MODULE_5__.default)();
        break;

      case "home":
        (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();
        break;

      case "database":
        (0,_database__WEBPACK_IMPORTED_MODULE_6__.default)();
        break;

      case "logout":
        localStorage.removeItem("access_token");
        localStorage.removeItem("user_id");
        location.reload();
        break;

      default:
        break;
    }
  });
  $('#contentpage').append(_AuthenticationModals__WEBPACK_IMPORTED_MODULE_1__.default); // REGISTRATION

  $('#registerForm').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    messages: {
      name: {
        required: 'required'
      },
      email: {
        required: 'required'
      },
      password: {
        required: 'required'
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      error.insertAfter(element);
    },
    submitHandler: function submitHandler(form, e) {
      // $('#registerBtn').on('click', (e) => {
      var data = $('#registerForm').serialize();
      e.preventDefault();
      $.ajax({
        type: "post",
        url: "/api/auth/register",
        data: data,
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: "json",
        success: function success(data) {
          $('#registerModal').each(function () {
            $(this).modal('hide');
          });
        },
        error: function error(_error) {
          console.log('error');
        }
      });
    }
  }); //LOGIN

  $('#loginForm').validate({
    rules: {
      lemail: {
        required: true,
        email: true
      },
      lpassword: {
        required: true
      }
    },
    messages: {
      lemail: {
        required: 'required',
        email: 'Enter Valid Email'
      },
      lpassword: {
        required: 'required'
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      error.insertAfter(element);
    },
    submitHandler: function submitHandler(form, e) {
      // $('#loginBtn').on('click', (e) => {
      var data = $('#loginForm').serialize(); // console.log(data);

      e.preventDefault();
      $.ajax({
        type: "post",
        url: "/api/auth/login",
        data: data,
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: "json",
        success: function success(data) {
          console.log(data);
          window.localStorage.setItem('access_token', data.access_token);
          window.localStorage.setItem('user_id', data.user_id[0].id);
          $('#loginModal').modal('hide');
          location.reload();
        },
        error: function error(_error2) {
          console.log(_error2);
          alert('Failed to login. Please Try again');
        }
      });
    }
  });
});
})();

/******/ })()
;