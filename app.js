
const express = require( 'express' );
const path = require( 'path' );
const app = express();
const mongoose = require( 'mongoose' );
const body = require( 'body-parser');
mongoose.connect('mongodb://localhost/tour_reg', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 3000;

app.use( '/static', express.static( 'static' ) );
app.use( express.urlencoded() )

app.set( 'view engine', 'pug' )
app.set( 'views', path.join( __dirname, 'views' ))

app.get( '/', ( req, res ) =>
{
    res.sendFile('D:/Lab-WP/Node.js Tut/Tourreg/index.html')
} )
app.post( '/welcome', ( req, res ) =>
{
    var data = new tour( req.body );
    data.save().then( () =>
    {
        params = {};
        res.status( 200 ).render( 'welcome' ,params);
         
    } )
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
    console.log( "ok" );
})


const tourSchema = new mongoose.Schema( {
    fname: String,
    mname: String,
    lname: String,
    en_no: String,
    email: String,
    phone:String,
    gender: String,
    addr:String,
})

var tour = mongoose.model('tour',tourSchema)

app.listen(port, () => {
  console.log(`Server running at`);
});