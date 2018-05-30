import * as konstanta from './const-var.js';
konstanta.storage.clear
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
window.onload= function(){
  if(konstanta.storage.getItem('session_id')){
    app.router.navigate('/dashboard/');  
    console.log(konstanta.storage.getItem('session_id'))  ;
  }
  else{
    app.router.navigate('/');
    
  }
  
}
var sesuatu=app.request;
// Init/Create views
var mainView = app.views.create('.view-main');







$$('#my-login-screen .login-button').on('click', function () {
  var username= $$('#my-login-screen [name="username"]').val();
  var password= $$('#my-login-screen [name="password"]').val();
  var myObj={user_email:null,user_password:null,ContentType:"application/javascript",charset:'UTF-8',};
  
  
  myObj.user_email=username;
  myObj.user_password=password;
  

    app.request.post(konstanta.api+'/Login' ,myObj, function (data) {
      //jika berhasil post
      
      var dokumen = JSON.parse(data);
      
      //cek apakah login berhasil ataau tidak, jika berhasil maka akan mengembalikan nilai true
      if(!dokumen.status){
        app.dialog.alert(dokumen.message);
      }
      /////////menampilkan pesan dari api dan menyimpan session kedalam local storage
      else{
        
        app.dialog.alert(dokumen.message);
        dokumen.data.forEach(data => {
          konstanta.storage.setItem('session_id',data.session_id); 
          
          
        });
        app.router.navigate('/dashboard/');
      }
    },function(data){
      //jika gagal post
      var message=JSON.parse(data.responseText);
      app.dialog.alert(message.message);
    });
 
  });
  
  