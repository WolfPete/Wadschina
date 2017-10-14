// App logic.


window.myApp = {};

window.myApp.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('mySplitter');
  content.load(page);
};

function load(){
	document.querySelector('#myNavigator').pushPage('tabbar.html',
            {
              animation: 'lift'

            }
          );
}


document.addEventListener('init', function(event) {
  var page = event.target;

  // Each page calls its own initialization controller.
  if (myApp.controllers.hasOwnProperty(page.id)) {
    myApp.controllers[page.id](page);
  }

  // Fill the lists with initial data when the pages we need are ready.
  // This only happens once at the beginning of the app.
  if (page.id === 'menuPage' || page.id === 'pendingTasksPage') {
    if (document.querySelector('#menuPage')
      && document.querySelector('#pendingTasksPage')
      && !document.querySelector('#pendingTasksPage ons-list-item')
    ) {
      openDB();
      getItems();

    //  myApp.services.fixtures.forEach(function(data) {
      //  myApp.services.tasks.create(data);
    //  });
    }
  }
});

var db = null;

function onError (tx, e){
  alert("Ein Fehler ist aufgetreten" + e.message);
};

function onSuccess(tx,r){
//getItems();
};

function openDB(){
    db = openDatabase('list' , '1.0' , 'Test1', 2 * 1024 * 1024, defaultData);

  db.transaction(function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS list (ID INTEGER PRIMARY KEY ASC,title TEXT,kategorie TEXT,description TEXT,urgent TEXT,add_item_1 TEXT,add_item_2 TEXT,add_item_3 TEXT,add_item_4 TEXT,add_item_5 TEXT,add_item_6 TEXT,add_item_7 TEXT,add_item_8 TEXT,add_item_9 TEXT,add_item_10 TEXT,add_item_11 TEXT,add_item_12 TEXT,add_item_13 TEXT,add_item_14 TEXT,add_item_15 TEXT,chb_item_1 TEXT,chb_item_2 TEXT,chb_item_3 TEXT,chb_item_4 TEXT,chb_item_5 TEXT,chb_item_6 TEXT,chb_item_7 TEXT,chb_item_8 TEXT,chb_item_9 TEXT,chb_item_10 TEXT,chb_item_11 TEXT,chb_item_12 TEXT,chb_item_13 TEXT,chb_item_14 TEXT,chb_item_15 TEXT,status TEXT)", []);
  // tx.executeSql("CREATE TABLE IF NOT EXISTS list (ID INTEGER PRIMARY KEY ASC,title TEXT,kind TEXT,gruppen TEXT)", [] );
  });
};

function defaultData(){

	db.transaction(function(tx) {
 tx.executeSql("CREATE TABLE IF NOT EXISTS list (ID INTEGER PRIMARY KEY ASC,title TEXT,kategorie TEXT,description TEXT,urgent TEXT,add_item_1 TEXT,add_item_2 TEXT,add_item_3 TEXT,add_item_4 TEXT,add_item_5 TEXT,add_item_6 TEXT,add_item_7 TEXT,add_item_8 TEXT,add_item_9 TEXT,add_item_10 TEXT,add_item_11 TEXT,add_item_12 TEXT,add_item_13 TEXT,add_item_14 TEXT,add_item_15 TEXT,chb_item_1 TEXT,chb_item_2 TEXT,chb_item_3 TEXT,chb_item_4 TEXT,chb_item_5 TEXT,chb_item_6 TEXT,chb_item_7 TEXT,chb_item_8 TEXT,chb_item_9 TEXT,chb_item_10 TEXT,chb_item_11 TEXT,chb_item_12 TEXT,chb_item_13 TEXT,chb_item_14 TEXT,chb_item_15 TEXT,status TEXT)", [] );
 });

	db.transaction(function(tx) {
	//Initial Data
 tx.executeSql('INSERT into list (title, kategorie, description, urgent, add_item_1, add_item_2, add_item_3, add_item_4, add_item_5, add_item_6, add_item_7, add_item_8, add_item_9, add_item_10, add_item_11, add_item_12, add_item_13, add_item_14, add_item_15, chb_item_1, chb_item_2, chb_item_3, chb_item_4, chb_item_5, chb_item_6, chb_item_7, chb_item_8, chb_item_9, chb_item_10, chb_item_11, chb_item_12, chb_item_13, chb_item_14, chb_item_15) VALUES ("Reginas Motoröl" , "Getränk" , "Für Badi Wettkampf", "false", "9 Äpfel", "2 Pfirsich", "1/16 l Milch", "21g TK Früchtemix", "34,5g TK Erdis", "29g TK Himbis", "2l Likör 48", "1/5ml Wasser", "4 Dreckbollen von  der letzten Radtour", "2 halbe Trauben", "1/49 ml Kaffee", "0,75l Schnaps", "2mg Gummi vom Reifen", "7 große Wassermelonen", "4 viertel von der Tonkabohne","false", "false","false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" );', []);
 tx.executeSql('INSERT into list (title, kategorie, description, urgent, add_item_1, add_item_2, add_item_3, add_item_4, add_item_5, add_item_6, add_item_7, add_item_8, add_item_9, add_item_10, add_item_11, add_item_12, add_item_13, add_item_14, add_item_15, chb_item_1, chb_item_2, chb_item_3, chb_item_4, chb_item_5, chb_item_6, chb_item_7, chb_item_8, chb_item_9, chb_item_10, chb_item_11, chb_item_12, chb_item_13, chb_item_14, chb_item_15) VALUES ("Fahrradtasche packen", "Olympia", "Ohne Wolli geht nix","false", "Wolli", "Olli", "22 Äpfel", "Rad", "Flippis", "Wasserflasche","Wolle CD 1-479", "Schokorosinen", "Tschweinis", "Matsch", "9 Freunde", "Schnaps", "Börnsens Strampler", "Frischkäse", "Wadschi","false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" ,"false" );', [] );
 });
};

function getItems()
{
  db.transaction(function(tx) {
    tx.executeSql("SELECT * FROM list where status IS NULL ", [], loadData, onError );
  });
  var audio = new Audio('lib/onsen/mp3/wolle_g.mp3');
  audio.play();


};


function playww0()
{
  var audio1 = new Audio('lib/onsen/mp3/wolle_w1.mp3');
  audio1.play();
};

function playww1()
{
  var audio1 = new Audio('lib/onsen/mp3/wolle_w3.mp3');
  audio1.play();
};

function playww2()
{
  var audio1 = new Audio('lib/onsen/mp3/wolle_w2.mp3');
  audio1.play();
};

function playww4()
{
  var audio1 = new Audio('lib/onsen/mp3/wolle_w4.mp3');
  audio1.play();
};

function getErledigt()
{
db.transaction(function(tx) {
    tx.executeSql("SELECT * FROM list where status = 'E' ", [], loadErledigt, onError );
  });
};

function loadErledigt(tx ,rs) {
	//id="completed-list"
  var output = "";
  var list = document.getElementById("completed-list");

  for(i = 0; i < rs.rows.length; i++)
  {
    var row = rs.rows.item(i);
    output +=   "<ons-list-item style=\"border-bottom: 1px solid #D8D8D8\" category= + myApp.services.categories.parseId(row.kategorie)+ >"  +
    '<label class=\"left\" style=\"padding-left: 5px\">' +
     '<ons-checkbox checked=\"true\" disabled=\"disabled\"></ons-checkbox>' +
         '</label>' +
		   '<div class=\"left\"> <img class=\"list-item__thumbnail\" src=\"lib/onsen/img/regina.jpg\" > </div>' +
        '<div class=\"center\">' +
          row.title +
        "</div>" +
        //"<div class=\"right\"><ons-button onclick='deleteItem(" + row.title + ");'> <ons-icon icon=\"trash\"></ons-icon> </ons-button> </div>"  +
         //"<ons-icon icon=\"trash\" onclick='deleteItem(" + row.title + ");'></ons-icon>" +

        "</ons-list-item>";

        //



};
list.innerHTML = output;
var audio = new Audio('lib/onsen/mp3/Regina_2.mp3');
audio.play();
};

function loadData(tx, rs)
{
  for(i = 0; i < rs.rows.length; i++)
  {
  var data = rs.rows.item(i);
  title = data.title;
  category = data.kategorie;
  data.category = data.kategorie;
  description = data.description;

  if (data.urgent.search("true") != -1) {
        urgent = true;
        data.urgent = true;
		 } else {
	    data.urgent = false;
        urgent = false;
		 };

  add_item_1 = data.add_item_1;
  add_item_2 = data.add_item_2;
  add_item_3 = data.add_item_3;
  add_item_4 = data.add_item_4;
  add_item_5 = data.add_item_5;
  add_item_6 = data.add_item_6;
  add_item_7 = data.add_item_7;
  add_item_8 = data.add_item_8;
  add_item_9= data.add_item_9;
  add_item_10 = data.add_item_10;
  add_item_11 = data.add_item_11;
  add_item_12 = data.add_item_12;
  add_item_13 = data.add_item_13;
  add_item_14 = data.add_item_14;
  add_item_15 = data.add_item_15;

    if (data.chb_item_1.search("true") != -1) {
        add_value_1 = true;
        data.chb_item_1 = true;
		 } else {
	    add_value_1 = false;
        data.chb_item_1 = false;
		 };

	if (data.chb_item_2.search("true") != -1) {
        add_value_2 = true;
        data.chb_item_2 = true;
		 } else {
	    add_value_2 = false;
        data.chb_item_2 = false;
		 };

	if (data.chb_item_3.search("true") != -1) {
        add_value_3 = true;
        data.chb_item_3 = true;
		 } else {
	    add_value_3 = false;
        data.chb_item_3 = false;
		 };

	if (data.chb_item_4.search("true") != -1) {
        add_value_4 = true;
        data.chb_item_4 = true;
		 } else {
	    add_value_4 = false;
        data.chb_item_4 = false;
		 };

	if (data.chb_item_5.search("true") != -1) {
        add_value_5 = true;
        data.chb_item_5 = true;
		 } else {
	    add_value_5 = false;
        data.chb_item_5 = false;
		 };

	if (data.chb_item_6.search("true") != -1) {
        add_value_6 = true;
        data.chb_item_6 = true;
		 } else {
	    add_value_6 = false;
        data.chb_item_6 = false;
		 };

	if (data.chb_item_7.search("true") != -1) {
        add_value_7 = true;
        data.chb_item_7 = true;
		 } else {
	    add_value_7 = false;
        data.chb_item_7 = false;
		 };

	if (data.chb_item_8.search("true") != -1) {
        add_value_8 = true;
        data.chb_item_8 = true;
		 } else {
	    add_value_8 = false;
        data.chb_item_8 = false;
		 };

	if (data.chb_item_9.search("true") != -1) {
        add_value_9 = true;
        data.chb_item_9 = true;
		 } else {
	    add_value_9 = false;
        data.chb_item_9 = false;
		 };

	if (data.chb_item_10.search("true") != -1) {
        add_value_10 = true;
        data.chb_item_10 = true;
		 } else {
	    add_value_10 = false;
        data.chb_item_10 = false;
		 };

	if (data.chb_item_11.search("true") != -1) {
        add_value_11 = true;
        data.chb_item_11 = true;
		 } else {
	    add_value_11 = false;
        data.chb_item_11 = false;
		 };

	if (data.chb_item_12.search("true") != -1) {
        add_value_12 = true;
        data.chb_item_12 = true;
		 } else {
	    add_value_12 = false;
        data.chb_item_12 = false;
		 };

	if (data.chb_item_13.search("true") != -1) {
        add_value_13 = true;
        data.chb_item_13 = true;
		 } else {
	    add_value_13 = false;
        data.chb_item_13 = false;
		 };

	if (data.chb_item_14.search("true") != -1) {
        add_value_14 = true;
        data.chb_item_14 = true;
		 } else {
	    add_value_14 = false;
        data.chb_item_14 = false;
		 };

	if (data.chb_item_15.search("true") != -1) {
        add_value_15 = true;
        data.chb_item_15 = true;
		 } else {
	    add_value_15 = false;
        data.chb_item_15 = false;
		 };




  myApp.services.tasks.create(data);
  myApp.services.categories.updateAdd(data.kategorie);

};

};



function addItem()
{

  var title_textbox = document.getElementById("title-input");
  var title_value = title_textbox.value;

  var group_textbox = document.getElementById("category-input");
  var group_value = group_textbox.value;

  var desc_textbox = document.getElementById("description-input");
  var desc_value = desc_textbox.value;

  var urgent_textbox = document.getElementById("urgent-input");
  var urgent_value = urgent_textbox.checked;

  var item_1_textbox = document.getElementById("list-item-1");
  var item_1_value = item_1_textbox.value;

  var item_2_textbox = document.getElementById("list-item-2");
  var item_2_value = item_2_textbox.value;

  var item_3_textbox = document.getElementById("list-item-3");
  var item_3_value = item_3_textbox.value;

  var item_4_textbox = document.getElementById("list-item-4");
  var item_4_value = item_4_textbox.value;

   var item_5_textbox = document.getElementById("list-item-5");
  var item_5_value = item_5_textbox.value;

  var item_6_textbox = document.getElementById("list-item-6");
  var item_6_value = item_6_textbox.value;

  var item_7_textbox = document.getElementById("list-item-7");
  var item_7_value = item_7_textbox.value;

  var item_8_textbox = document.getElementById("list-item-8");
  var item_8_value = item_8_textbox.value;

  var item_9_textbox = document.getElementById("list-item-9");
  var item_9_value = item_9_textbox.value;

   var item_10_textbox = document.getElementById("list-item-10");
  var item_10_value = item_10_textbox.value;

   var item_11_textbox = document.getElementById("list-item-11");
  var item_11_value = item_11_textbox.value;

   var item_12_textbox = document.getElementById("list-item-12");
  var item_12_value = item_12_textbox.value;

  var item_13_textbox = document.getElementById("list-item-13");
  var item_13_value = item_13_textbox.value;

  var item_14_textbox = document.getElementById("list-item-14");
  var item_14_value = item_14_textbox.value;

  var item_15_textbox = document.getElementById("list-item-15");
  var item_15_value = item_15_textbox.value;

  var item_1_textbox_chb = document.getElementById("list-value-1");
  var item_1_value_chb = item_1_textbox_chb.checked;

  var item_2_textbox_chb = document.getElementById("list-value-2");
  var item_2_value_chb = item_2_textbox_chb.checked;

  var item_3_textbox_chb = document.getElementById("list-value-3");
  var item_3_value_chb = item_3_textbox_chb.checked;

  var item_4_textbox_chb = document.getElementById("list-value-4");
  var item_4_value_chb = item_4_textbox_chb.checked;

  var item_5_textbox_chb = document.getElementById("list-value-5");
  var item_5_value_chb = item_5_textbox_chb.checked;

  var item_6_textbox_chb = document.getElementById("list-value-6");
  var item_6_value_chb = item_6_textbox_chb.checked;

  var item_7_textbox_chb = document.getElementById("list-value-7");
  var item_7_value_chb = item_7_textbox_chb.checked;

  var item_8_textbox_chb = document.getElementById("list-value-8");
  var item_8_value_chb = item_8_textbox_chb.checked;

  var item_9_textbox_chb = document.getElementById("list-value-9");
  var item_9_value_chb = item_9_textbox_chb.checked;

  var item_10_textbox_chb = document.getElementById("list-value-10");
  var item_10_value_chb = item_10_textbox_chb.checked;

  var item_11_textbox_chb = document.getElementById("list-value-11");
  var item_11_value_chb = item_11_textbox_chb.checked;

  var item_12_textbox_chb = document.getElementById("list-value-12");
  var item_12_value_chb = item_12_textbox_chb.checked;

  var item_13_textbox_chb = document.getElementById("list-value-13");
  var item_13_value_chb = item_13_textbox_chb.checked;

  var item_14_textbox_chb = document.getElementById("list-value-14");
  var item_14_value_chb = item_14_textbox_chb.checked;

  var item_15_textbox_chb = document.getElementById("list-value-15");
  var item_15_value_chb = item_15_textbox_chb.checked;


  db.transaction(function(tx)  {
  tx.executeSql("INSERT INTO list (title, kategorie, description, urgent, add_item_1, add_item_2, add_item_3, add_item_4, add_item_5, add_item_6, add_item_7, add_item_8, add_item_9, add_item_10, add_item_11, add_item_12, add_item_13, add_item_14, add_item_15, chb_item_1, chb_item_2, chb_item_3, chb_item_4, chb_item_5, chb_item_6, chb_item_7, chb_item_8, chb_item_9, chb_item_10, chb_item_11, chb_item_12, chb_item_13, chb_item_14, chb_item_15 )  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [title_value, group_value, desc_value, urgent_value, item_1_value, item_2_value, item_3_value, item_4_value, item_5_value, item_6_value, item_7_value, item_8_value, item_9_value, item_10_value, item_11_value, item_12_value, item_13_value, item_14_value, item_15_value, item_1_value_chb, item_2_value_chb, item_3_value_chb, item_4_value_chb, item_5_value_chb, item_6_value_chb, item_7_value_chb, item_8_value_chb, item_9_value_chb, item_10_value_chb, item_11_value_chb, item_12_value_chb, item_13_value_chb, item_14_value_chb, item_15_value_chb], onSuccess, onError);
});
title_textbox.value = "";
group_textbox.value = "";
item_1_textbox.value = "";
item_2_textbox.value = "";
item_3_textbox.value = "";
item_4_textbox.value = "";
item_5_textbox.value = "";
item_6_textbox.value = "";
item_7_textbox.value = "";
item_8_textbox.value = "";
item_9_textbox.value = "";
item_10_textbox.value = "";
item_11_textbox.value = "";
item_12_textbox.value = "";
item_13_textbox.value = "";
item_14_textbox.value = "";
item_15_textbox.value = "";
item_1_textbox_chb.checked = "";
item_2_textbox_chb.checked = "";
item_3_textbox_chb.checked = "";
item_4_textbox_chb.checked = "";
item_5_textbox_chb.checked = "";
item_6_textbox_chb.checked = "";
item_7_textbox_chb.checked = "";
item_8_textbox_chb.checked = "";
item_9_textbox_chb.checked = "";
item_10_textbox_chb.checked = "";
item_12_textbox_chb.checked = "";
item_13_textbox_chb.checked = "";
item_14_textbox_chb.checked = "";
item_15_textbox_chb.checked = "";
urgent_value.checked = "";

};

function saveChange(title)
{
	deleteItem(title);
	addItem();
}

function setStatus(title)
{
	db.transaction(function(tx)
{

  tx.executeSql("UPDATE list SET status = 'E' where TITLE=?", [title], onSuccess, onError);
});
}

function deleteItem(title)
{
  db.transaction(function(tx)
{
  tx.executeSql("DELETE FROM list where TITLE=?", [title], onSuccess, onError);
});
}
