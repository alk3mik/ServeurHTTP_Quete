require('colors');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

// On autorise plus de requêtes pour éviter les soucis
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static('public')); // On distribue le dossier public

// Set PUG as view engine 
app.set('view engine', 'pug');

// ~~~~~~~~~~~~~ ROUTING ~~~~~~~~~~~~~~~

app.get('/', function(req, res) {
	// res.json({ message: 'hooray! welcome to Home page!' })
	// console.log("page d'accueil");
    res.render('home', { title: "A little PUG", message: "Page d'accueil" });
});

app.get('/about', function(req, res) {
	// res.json({ message: 'hooray! welcome to About page!' })
	// console.log("page a propos");
    res.render('about', { title: "A little PUG", message: "Page à propos" });
});

// ~~~~~~~~~~~~ ROUTING END ~~~~~~~~~~~~~~~~~~~~

let server = app.listen(3000, '127.0.0.1', function() {
    let serverInfo = server.address();
    console.log(('\n\tServer started on http://' + serverInfo.address + ':' + serverInfo.port));
    console.log('Ready to Roll !'.america);
    // On utilise .couleur aprés un string pour un max de style quand on débug
});
