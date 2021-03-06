// Initialize your app
var myApp = new Framework7({material: true});


// Export selectors engine
var $$ = Dom7;

myApp.loginScreen('.login-screen');
setTimeout(function() {
    myApp.closeModal('.login-screen.modal-in');
}, 5000);

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
$$('#check-polis').on('click', function (e) {
    $$.ajax({
        method: 'POST',
        url: 'http://dkbm-web.autoins.ru/dkbm-web-1.0/bsostate.htm',
        contentType: 'application/json; charset: utf-8',
        dataType: 'json',
        data: 'bsoseries=ХХХ&bsonumber=123123213&answer=ыфвмвым',
        success: function(e) {
            console.log(e);
        },
        error: function(e) {
            console.log(e);
        }
    });
})
//
// // Callbacks to run specific code for specific pages, for example for About page:
// myApp.onPageInit('about', function (page) {
//     // run createContentPage func after link was clicked
//     $$('.create-page').on('click', function () {
//         createContentPage();
//     });
// });
//
// // Generate dynamic page
// var dynamicPageIndex = 0;
// function createContentPage() {
// 	mainView.router.loadContent(
//         '<!-- Top Navbar-->' +
//         '<div class="navbar">' +
//         '  <div class="navbar-inner">' +
//         '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
//         '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
//         '  </div>' +
//         '</div>' +
//         '<div class="pages">' +
//         '  <!-- Page, data-page contains page name-->' +
//         '  <div data-page="dynamic-pages" class="page">' +
//         '    <!-- Scrollable page content-->' +
//         '    <div class="page-content">' +
//         '      <div class="content-block">' +
//         '        <div class="content-block-inner">' +
//         '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
//         '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
//         '        </div>' +
//         '      </div>' +
//         '    </div>' +
//         '  </div>' +
//         '</div>'
//     );
// 	return;
// }
