// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Apps', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});


// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  if(!username)
  {
    app.dialog.alert('username tidak boleh kosong');
    return;
  }
  if(!password){
    app.dialog.alert('password tidak boleh kosong');
  }
if(username=="something"&&password=="something"){
  app.dialog.alert('selamat datang '+username);
  
  app.router.navigate("/homepage/");
}
});
$$('#my-popup .regis-button').on('click', function () {
  var username = $$('#my-popup [name="username"]').val();
  var password = $$('#my-popup [name="password"]').val();
  var email = $$('#my-popup [name="email"]').val();
  var date = $$('#my-popup [name="tanggal"]').val();
 
    app.dialog.alert(date);
   
    return;
  

});