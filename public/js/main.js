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

/***/ "./resources/js/eonet.js":
/*!*******************************!*\
  !*** ./resources/js/eonet.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ eonet)
/* harmony export */ });
function eonet() {
  console.log('WORKING');
  var newsContent = "\n    <div class=\"page-title\">\n        <h1> Earth Observatory Natural Event Tracker</h1>\n        <h2>(EONET)</h2>\n    </div>\n\n    <div class=\"dropdown\" id=\"category-drop\">\n    <button style=\"background-color:#3aafeb; color:#f3f7f9\" class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n        CATEGORY\n    </button>\n    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\" id=\"news-list-category\">\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"drought\">Drought</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"earthquakes\">Earthquakes</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"floods\">Floods</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"landslides\">Landslides</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"severeStorms\">Severe Storms</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"snow\">Snow</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"volcanoes\">Volcanoes</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"wildfires\">Wildfires</a></li>\n    </ul>\n    </div>\n    <div class=\"eonet-card-container\" id=\"eonet-list\">\n        \n    </div>\n    ";
  $('#contentpage').html(newsContent);
  $.ajax({
    type: 'GET',
    url: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events?limit=10&' + 'api_key=qnGioQlQwdiwOCY2qSRM3mJOtAQMElCLjegvqc3r',
    success: function success(response) {
      var data = response.events; // console.log(data);

      data.forEach(function (element) {
        $('#eonet-list').append("\n                <div class=\"card col\"  style=\"\">\n                    <div class=\"card-title\">\n                    <a href=\"".concat(element.sources[0].url, "\" target=\"_blank\">").concat(element.title, "</a>\n                    </div>\n                    <div class=\"card-body\">\n                        <p><label>Category:</label> ").concat(element.categories[0].title, "</p>\n                        <p><label>Date:</label> ").concat(element.geometry[0].date, "</p>\n                        <p><label>Coordinates:</label> ").concat(element.geometry[0].coordinates[0], " , ").concat(element.geometry[0].coordinates[1], "</p>\n                    </div>\n                    <div class=\"card-footer\">\n                    <a href=\"").concat(element.sources[0].url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">MORE INFO</button></a>\n                    <span id=\"bookmark\"><i class=\"fas fa-bookmark bookmarknews\" id=\"bookmarknews\" data-id=\"").concat(element.id, "\" tabindex=\"0\"></i></span>\n                    </div>\n                </div>\n                "));
      });
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

        if (matched_data.length > 0) {
          for (var i = 0; i < matched_data.length; i++) {
            $('#eonet-list').append("\n                    <div class=\"card col\"  style=\"\">\n                    <div class=\"card-title\">\n                    <a href=\"".concat(matched_data[i].sources[0].url, "\" target=\"_blank\">").concat(matched_data[i].title, "</a>\n                    </div>\n                    <div class=\"card-body\">\n                        <p><label>Category:</label> ").concat(matched_data[i].categories[0].title, "</p>\n                        <p><label>Date:</label> ").concat(matched_data[i].geometry[0].date, "</p>\n                        <p><label>Coordinates:</label> ").concat(matched_data[i].geometry[0].coordinates[0], " , ").concat(matched_data[i].geometry[0].coordinates[1], "</p>\n                    </div>\n                    <div class=\"card-footer\">\n                    <a href=\"").concat(matched_data[i].sources[0].url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">MORE INFO</button></a>\n                    <span id=\"bookmark\"><i class=\"fas fa-bookmark bookmarknews\" id=\"bookmarknews\" data-id=\"").concat(matched_data[i].id, "\" tabindex=\"0\"></i></span>\n                    </div>\n                </div>\n                "));
          }
        } else {
          $('#eonet-list').append("\n                <div class=\"col-sm nodata\"  style=\"width: 720px;\">\n                    \n                    <h1>NO DATA</h1>\n                \n                </div>\n            \n                ");
        }
      }
    });
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
function news() {
  console.log('working');
  var pageContent = "\n    <div class=\"page-title\">\n        <h1>NEWS</h1>\n    </div>\n    <div class=\"dropdown\" id=\"category-drop\">\n    <button style=\"background-color:#3aafeb; color:#f3f7f9\" class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton1\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n        CATEGORY\n    </button>\n    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton1\" id=\"news-list-category\">\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"drought\">Drought</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"earthquakes\">Earthquakes</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"floods\">Floods</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"landslides\">Landslides</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"storms\">Severe Storms</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"snowstorm\">Snow</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"volcanoes\">Volcanoes</a></li>\n        <li><a class=\"dropdown-item\" href=\"#\" onclick=\"return false;\" target=\"_blank\" data-id=\"wildfires\">Wildfires</a></li>\n    </ul>\n    </div>\n\n    \n    <div id=\"news-list\">\n    </div>\n    ";
  $('#contentpage').html(pageContent);
  $('.dropdown-item').on('click', function (e) {
    var id = e.currentTarget.dataset.id;
    $.ajax({
      type: 'GET',
      url: 'api/news/' + id,
      success: function success(response) {
        var data = response.articles;
        console.log(data);
        $('#news-list').html('');
        data.forEach(function (element) {
          var string = element.description;
          var length = 150;
          var bodytrimmed = string.substring(0, length);
          $('#news-list').append("\n                    <div class=\"card col\"  style=\"\">\n                    <img src=\"".concat(element.urlToImage, "\" class=\"card-img-top\" alt=\"...\"> \n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"><a href=\"#\" target=\"_blank\">").concat(element.title, "</a></h5>\n                        <p class=\"card-text\">").concat(bodytrimmed, "</p>\n                    </div>\n                    <div class=\"card-footer\">\n                    <a href=\"").concat(element.url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#3aafeb; color:#f3f7f9\">READ MORE</button></a>\n                    <span id=\"bookmark\"><i class=\"fas fa-bookmark bookmarknews\" id=\"bookmarknews\" data-id=\"").concat(element.id, "\" tabindex=\"0\"></i></span>\n                    </div>\n                </div>\n                    "));
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
        // console.log('EONET');
        (0,_eonet__WEBPACK_IMPORTED_MODULE_2__.default)();
        break;

      case "news":
        // console.log('NEWS');
        (0,_news__WEBPACK_IMPORTED_MODULE_3__.default)();
        break;

      case "globalgiving":
        console.log('GLOBAL GIVING');
        break;

      case "myacc":
        break;

      case "home":
        (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();
        break;

      case "database":
        console.log('database');
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
          // console.log(data);
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