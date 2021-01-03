
// var edit_url = "http://127.0.0.1:6060/";
var edit_url = "http://192.168.43.140:6060/";


var seconds = 1000;
var loader_seconds = 3000;

/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           RECIEVED ORDERS
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

    // ==================
function Fetch_All_Avenue_Edits (endpoit,avenuetbody,avenuetbodydiv)
    {
        let req = new XMLHttpRequest();
        req.open('post', edit_url+endpoit,true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length){alert("No results found")}
                else
                    {
                        let tbody = document.getElementById(avenuetbody);
                        tbody.innerHTML = ' ';
    
                        // draw table
                        let td,tr;
                        // add table headings
                        let th_names = new Array ();
                        th_names.push(["Key","Name","Price"]);
                        let columns_to_count = th_names[0].length;
                        row = tbody.insertRow(-1); 
                        for (let looper =0; looper<columns_to_count; ++looper)
                            {
                                let headerNames = document.createElement("th");
                                headerNames.className='js_table_headers'
                                headerNames.innerHTML = th_names[0][looper];
                                row.appendChild(headerNames)
                            }
    
                        for (let table_row = 0; table_row < results.length; ++table_row)
                            {
                                tr = document.createElement('tr');
                                tr.className='js_table_row';
                                for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                    {
                                        td = document.createElement('td');
                                        td.setAttribute("align", "center"); 
                                        td.innerHTML = results[table_row][table_data];
                                        tr.appendChild(td)
                                    }
                                    tbody.appendChild(tr)
                            }
                    }
            }
            let div_tag = document.getElementById(avenuetbodydiv);
            req.send(div_tag);  
    }

function Fetch_All_Staffs (endpoit,avenuetbody,avenuetbodydiv)
{
    let req = new XMLHttpRequest();
    req.open('post', edit_url+endpoit,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    let tbody = document.getElementById(avenuetbody);
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Key","Name","Number"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let div_tag = document.getElementById(avenuetbodydiv);
        req.send(div_tag);  
}

function Hide_all_Admin_Divs ()
{
    // MAINS
    document.getElementById("add-menu-panel-div").style.display="none";
    document.getElementById("edit-menu-panel-div").style.display="none";
    document.getElementById("delete-menu-panel-div").style.display="none";
    // document.getElementById("staffs-panel-div").style.display="none";

    // MENU ADD SUB MAIN..
    document.getElementById("add-boxes-div-id").style.display = "none";
    document.getElementById("add-baskets-div-id").style.display = "none";
    document.getElementById("add-funeral-div-id").style.display = "none";
    
    // MENU EDIT SUB MAIN..
    document.getElementById("edit-boxes-div-id").style.display = "none";
    document.getElementById("edit-baskets-div-id").style.display = "none";
    document.getElementById("edit-funeral-div-id").style.display = "none";

    // MENU DELETE SUB MAIN..
    document.getElementById("delete-boxes-div-id").style.display = "none";
    document.getElementById("delete-baskets-div-id").style.display = "none";
    document.getElementById("delete-funeral-div-id").style.display = "none";
}
// STAFFS 
function Show_staffs_add_div_id ()
{
    document.getElementById("staffs-delete-div-id").style.display = "none";
    document.getElementById("staffs-add-div-id").style.display = "block";
}

function Show_staffs_delete_div_id ()
{
    document.getElementById("staffs-add-div-id").style.display = "none";
    document.getElementById("staffs-delete-div-id").style.display = "block";
}


// MENU ...........
function Show_add_menu_panel_div ()
{
    document.getElementById("edit-menu-panel-div").style.display = "none";
    document.getElementById("delete-menu-panel-div").style.display = "none";    
    document.getElementById("add-menu-panel-div").style.display = "block";
}
function Show_edit_menu_panel_div ()
{
    document.getElementById("add-menu-panel-div").style.display = "none";
    document.getElementById("delete-menu-panel-div").style.display = "none";    
    document.getElementById("edit-menu-panel-div").style.display = "block";
}
function Show_delete_menu_panel_div ()
{
    document.getElementById("edit-menu-panel-div").style.display = "none";
    document.getElementById("add-menu-panel-div").style.display = "none";    
    document.getElementById("delete-menu-panel-div").style.display = "block";
}




// ====================================================================
// MENU ADD

function Show_add_boxes_div_id ()
{
    document.getElementById("add-baskets-div-id").style.display = "none";
    document.getElementById("add-funeral-div-id").style.display = "none";
    document.getElementById("add-boxes-div-id").style.display = "block";
}
function Show_add_baskets_div_id ()
{
    document.getElementById("add-boxes-div-id").style.display = "none";
    document.getElementById("add-funeral-div-id").style.display = "none";
    document.getElementById("add-baskets-div-id").style.display = "block";
}

function Show_add_funeral_div_id ()
{
    document.getElementById("add-boxes-div-id").style.display = "none";
    document.getElementById("add-baskets-div-id").style.display = "none";
    document.getElementById("add-funeral-div-id").style.display = "block";
}



// ====================================================================
// MENU EDIT

function Show_edit_boxes_div_id ()
{

    document.getElementById("edit-baskets-div-id").style.display = "none";
    document.getElementById("edit-funeral-div-id").style.display = "none";
    document.getElementById("edit-boxes-div-id").style.display = "block";
}
function Show_edit_baskets_div_id ()
{

    document.getElementById("edit-boxes-div-id").style.display = "none";
    document.getElementById("edit-funeral-div-id").style.display = "none";
    document.getElementById("edit-baskets-div-id").style.display = "block";
}

function Show_edit_funeral_div_id ()
{

    document.getElementById("edit-boxes-div-id").style.display = "none";
    document.getElementById("edit-baskets-div-id").style.display = "none";
    document.getElementById("edit-funeral-div-id").style.display = "block";
}



// ====================================================================
// MENU DELETE

function Show_delete_boxes_div_id ()
{

    document.getElementById("delete-baskets-div-id").style.display = "none";
    document.getElementById("delete-funeral-div-id").style.display = "none";
    document.getElementById("delete-boxes-div-id").style.display = "block";
}

function Show_delete_baskets_div_id ()
{
    document.getElementById("delete-boxes-div-id").style.display = "none";
    document.getElementById("delete-funeral-div-id").style.display = "none";
    document.getElementById("delete-baskets-div-id").style.display = "block";
}

function Show_delete_funeral_div_id ()
{
    document.getElementById("delete-boxes-div-id").style.display = "none";
    document.getElementById("delete-baskets-div-id").style.display = "none";
    document.getElementById("delete-funeral-div-id").style.display = "block";
}
