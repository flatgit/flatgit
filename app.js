// Initialize Server
var server = require('diet')    // Require Diet
var app = server() // Create App
app.listen(8000)   // Configure Domain

// Require ECT
var ect = require('diet-ect')({ path: app.path+'/static' })
var static = require('diet-static')({ path: app.path+'/static' })
// Load ECT as a global header
app.header(ect)
app.footer(static)

// Listen on GET /
// ECT is a global header so you can access it 
// from every route with the `$.html()` method
app.get('/new', function($){
   // Set a template variable
   $.data.myVar = 'ect'
   
   // Now serve the html file 
   // by default: /your_app/static/index.html 
   // use the `root` config to change this
   $.html() 
})
