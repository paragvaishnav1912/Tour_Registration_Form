// var test = /^([a-zA-z0-9\.-]+)@([a-zA-z0-9-]+).([a-z]{2,20})$/;
var a = document.getElementById( "fname" );
var b = document.getElementById( "mname" );
var c = document.getElementById( "lname" );
var d = document.getElementById( "enroll" );
var e = document.getElementById( "email" );
var f = document.getElementById( "mobi" );
var btn = document.getElementById( "btn" );
let x = document.getElementById( "male" );
let y = document.getElementById( "female" );
let err_s = document.getElementsByClassName( "sps_2" );
var addr = document.getElementById( "addr" );
var em_validate = /^([0-9a-zA-Z\.-]+)@([0-9a-zA-Z-]+).([a-z]{2,20})$/;
var mobi_validate = /^[6-9][0-9]{9}$/;
let te = document.getElementsByClassName( "labels " );
let obj = document.getElementsByTagName( "input" );
let flag = true,flag1=true,flag2=true;
function validator ()
{
  document.getElementById( "frm" ).style.marginTop = "8px";
  btn.style.marginTop = "3px";
  if ( a.value == "" && b.value == "" && c.value == "" && d.value == "" && e.value == "" && f.value == "" && addr.value == ""
    && ( x.checked == false && y.checked == false ) )
  {
    flag = false;
    alerts();
  }
  if ( a.value.trim() == "" || b.value.trim() == "" || c.value.trim() == "" )
  {
    console.log( "hai" );
    name_checker();
  }
  else
  {
    console.log( "hai hai" );
    name_checker();
  }
  if ( d.value.length != 12 )
  {
    alert_2( "Enrollment Number should be of length 12", 3, d, "#d70f0f", false );
  }
  else { alert_2( "looks good", 3, d, "green", true ); }
  if ( !em_validate.test( e.value ) )
  {
    alert_2( "Invalid Email Id Please Enter proper one", 4, e, "#d70f0f", false );
  }
  else
{
   alert_2( "looks good", 4, e, "green", true );
  }
  if ( !mobi_validate.test( parseInt( f.value ) ) || typeof ( parseInt( f ).value ) == "string" )
  {
    alert_2( "Invalid Mobile Number", 5, f, "#d70f0f",false );
  }
  else { alert_2( "looks good", 5, f, "green", true ); }
  if ( x.checked == false && y.checked == false )
  {
    err_s[ 6 ].innerHTML = `<i style=" margin-top: 10px;
        margin-left: 101px;
        display: inline-block;" class="fas fa-exclamation-circle"></i>`;
        te[ 6 ].style.display = "inline-block";
    te[ 6 ].innerHTML = "Please choose your gender";
  }
  else
  {
    err_s[ 6 ].innerHTML = `<i style=" margin-top: 10px;
    margin-left: 101px;
    display: inline-block;color:green;" class="fas fa-check-circle"></i>`;
    te[ 6 ].style.display = "inline-block";
    te[ 6 ].innerHTML = "looks good";
    te[ 6 ].style.color = "green";
  }
  if ( addr.value == "" )
  {
    err_s[ 7 ].innerHTML = `<i  class="fas fa-exclamation-circle"></i>`;
    te[7 ].style.display = "inline-block";
    te[ 7 ].innerHTML = "Please Provide your Postal Address";
  }
  else
  {
    err_s[ 7 ].innerHTML = `<i style="margin-left: 10px;color:green;"  class="fas fa-check-circle"></i>`;
    te[ 7 ].style.display = "inline-block";
    te[ 7 ].innerHTML = "looks good";
    te[ 7 ].style.color = "green";
    addr.style.border = "2px solid green";

  }
  for ( var i = 0; i < obj.length-3; i++ )
  {
    if ( obj[ i ].value == "" )
    {
      flag = false;
      break;
    }
  }
    if ( obj[ 6 ].checked == false && obj[ 7 ].value == false)
    {
      flag1 = false;
  }
  if (addr.value=="")
    {
      flag2 = false;
  }
  if ( flag && flag1 && flag2 )
  {
    return true;
  }
  else
  { 
    return false;
  }
}

alert_2 = ( msg, index, ele, color, valid ) =>
{
  if ( ele.value == "" )
  {
    err_s[ index ].innerHTML = `<i class="fas fa-exclamation-circle"></i>`;
    te[ index ].style.display = "inline-block";
    obj[ index ].style.border = "1px solid red";
    te[ index ].style.color = "#d70f0f";
    te[ index ].innerText = `Please Fill this filed`;
  }
  else
  {
    te[ index ].style.display = "inline-block";
      err_s[ index ].innerHTML = `<i color="green" class="fas fa-check-circle"></i>`;
      ele.style.border = `2px solid ${ color }`;
      te[ index ].innerText = `${ msg }`;
    if ( valid )
    {
      if ( color == "green" )
      {
        te[ index ].style.color = "green";
        err_s[ index ].innerHTML = `<i style="color:green;" class="fas fa-check-circle"></i>`;
      }
    }
    else
    {
      te[ index ].style.color = "#d70f0f;";
      err_s[ index ].innerHTML = `<i class="fas fa-exclamation-circle"></i>`;
    }
  }
};


alerts = () =>
{
  for ( var i = 0; i < err_s.length; i++ )
  {
    err_s[ i ].innerHTML = `<i class="fas fa-exclamation-circle"></i>`;
    te[i].style.display = "inline-block";
    obj[ i ].style.border = "1px solid red";
    if ( i == 6 )
    {
      err_s[ i ].innerHTML = `<i style=" margin-top: 10px;
      margin-left: 103px;
      display: inline-block;" class="fas fa-exclamation-circle"></i>`;
    }
    if ( i == 7 )
    {
      err_s[ i ].innerHTML = `<i style="margin-left: 10px;" class="fas fa-exclamation-circle"></i>`;
    }
  }
  addr.style.border = "1px solid #d70f0f";
};

name_checker = () =>
{
  for ( var i = 0; i < 3; i++ )
  {
    if ( obj[ i ].value.trim() == "" )
    {
      err_s[ i ].innerHTML = `<i class="fas fa-exclamation-circle"></i>`;
      te[ i ].style.display = "inline-block";
      obj[ i ].style.border = "1px solid red";
    }
    else
    {
      err_s[ i ].innerHTML = `<i style="color:green;" class="fas fa-check-circle"></i>`;
      te[ i ].style.display = "inline-block";
      te[ i ].innerHTML = `<p  style="margin: 2px 43px;">Looks Good</p>`;
      obj[ i ].style.border = "2px solid green";
      te[ i ].style.color = "green";
    }
  }
};