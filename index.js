const express=require('express');
const path=require('path');
const app=express();
const expressLayouts=require('express-ejs-layouts');

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use('/', require('./routes/app'));

const PORT= process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`);
})