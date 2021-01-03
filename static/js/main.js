
// var src_url = "http://127.0.0.1:6060/";
var src_url = "http://192.168.43.140:5500/";


var seconds = 1000;
var loader_seconds = 3000;

function Load_developer () {window.location="developer.html"}
function CreateCustomAlertBox()
{
    this.render = function(dialog){
        let winW = window.innerWidth;
        let winH = window.innerHeight;
        let AlertBoxDisplayArea = document.getElementById('alert-box-display-area');
        let HtmlAlertBox = document.getElementById('alert-box');
        AlertBoxDisplayArea.style.display = "block";
        AlertBoxDisplayArea.style.height = winH+"px";
        HtmlAlertBox.style.left = (winW/2) - (550 * .5)+"px";
        HtmlAlertBox.style.top = "100px";
        HtmlAlertBox.style.display = "block";
        document.getElementById('alert-box-header').innerHTML = "Network Error ";
        document.getElementById('alert-box-body').innerHTML = dialog;
        document.getElementById('alert-box-footer').innerHTML = '<button class="ok-alert-btn" onclick="Alert.ok()">OK</button>';
    }
    this.ok = function()
        {
            document.getElementById('alert-box').style.display = "none";
            document.getElementById('alert-box-display-area').style.display = "none";
        }
}
var Alert = new CreateCustomAlertBox();

function ShowAlertBox (){Alert.render('<center>Please turn on <br> your network <br>and <br> Try Again</center>')}


function Load_Developer_View () {window.location="developer.html"}
function Load_Index_view () 
{
    window.location="index.html"
    if(!navigator.onLine) {ShowAlertBox ()}
    else if (navigator.onLine) {window.location="index.html"}

}
function Load_Boxes_view () 
{
    window.location="boxes.html";
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="boxes.html";}

}
function Load_Baskets_View () 
{
    window.location="baskets.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="boxes.html";}
}
function Load_Funeral_View () 
{
    window.location="funeral.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="funeral.html";}
}

function Load_Bouquets_Hand_View () 
{
    window.location="bouquets_hand.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="bouquets_hand.html";}
}
function Load_Bouquets_Standing_View () 
{
    window.location="bouquets_standing.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="bouquets_standing.html";}
}
function Load_Functional_Trollies_View () 
{
    window.location="functional_trollies.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="functional_trollies.html";}
}
function Load_Functional_Introduction_View () 
{
    window.location="functional_introduction.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="functional_introduction.html";}
}
function Load_Decoratives_Interior_Conrer_View () 
{
    window.location="decoratives_interior_conrer.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_interior_conrer.html";}
}
function Load_Decoratives_Interior_Entrana_View () 
{
    window.location="decoratives_interior_entrana.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_interior_entrana.html";}
}
function Load_Decoratives_Interior_Plonters_View () 
{
    window.location="decoratives_interior_plonters.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_interior_plonters.html";}
}
function Load_Decoratives_Interior_Walkway_View () 
{
    window.location="decoratives_interior_walkway.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_interior_walkway.html";}
}
function Load_Decoratives_Interior_Wallunit_View () 
{
    window.location="decoratives_interior_wallunit.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_interior_wallunit.html";}
}
function Load_Decoratives_Functional_Birthday_View () 
{
    window.location="decoratives_functional_birthday.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_functional_birthday.html";}
}
function Load_Decoratives_Functional_Weddings_View () 
{
    window.location="decoratives_functional_weddings.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_functional_weddings.html";}
}
function Load_Decoratives_Functional_babyshower_View () 
{
    window.location="decoratives_functional_babyshower.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_functional_babyshower.html";}
}
function Load_Decoratives_Functional_Introduction_View () 
{
    window.location="decoratives_functional_introduction.html"
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if(navigator.onLine) {window.location="decoratives_functional_introduction.html";}
}

function Hide_all_Divs ()
{
    // mains
    document.getElementById("orders-panel-div").style.display="none";

    // new orders tab
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    // document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    
}

function Show_orders_panel_div (){document.getElementById("orders-panel-div").style.display = "block";}

































// New orders div
function Show_chips_new_orders_div ()
{
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    // document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("chips-new-orders-div").style.display="block";
}

function Show_piloa_new_orders_div ()
{
    // clearInterval(stopchips);
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    // document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display="block";
}

function Show_soft_drinks_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    // document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display="block";
}
function Show_fresh_drinks_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("fresh-drinks-new-orders-div").style.display="block";
}
function Show_salads_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    // document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display="block";
}

function Show_chicken_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    // document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display="block";
}


function Show_luwombo_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    // document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display="block";
}

function Show_localdishe_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    // document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display="block";
}
function Show_breakfast_other_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    // document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display="block";
}
function Show_breakfast_egg_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    // document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display="block";
}
function Show_breakfast_teas_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    // document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    document.getElementById("breakfast-teas-new-orders-div").style.display="block";
}
function Show_beverages_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    // document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display="block";
}
function Show_goatmeat_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    // document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display="block";
}

function Show_beefliver_new_orders_div ()
{
    document.getElementById("chips-new-orders-div").style.display = "none";
    document.getElementById("piloa-new-orders-div").style.display = "none";
    document.getElementById("soft-drinks-new-orders-div").style.display = "none";
    // document.getElementById("fresh-drinks-new-orders-div").style.display = "none";
    document.getElementById("salads-new-orders-div").style.display = "none";
    document.getElementById("chicken-new-orders-div").style.display = "none";
    document.getElementById("luwombo-new-orders-div").style.display = "none";
    document.getElementById("localdishe-new-orders-div").style.display = "none";
    document.getElementById("breakfast-other-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-egg-new-orders-div").style.display = "none";
    // document.getElementById("breakfast-teas-new-orders-div").style.display = "none";
    document.getElementById("beverages-new-orders-div").style.display = "none";
    document.getElementById("goatmeat-new-orders-div").style.display = "none";
    document.getElementById("beefliver-new-orders-div").style.display="block";
}





























