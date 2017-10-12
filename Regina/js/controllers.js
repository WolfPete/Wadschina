/***********************************************************************
 * App Controllers. These controllers will be called on page initialization. *
 ***********************************************************************/

myApp.controllers = {
  //////////////////////////
  // Tabbar Page Controller //
  //////////////////////////
  tabbarPage: function(page) {
    // Set button functionality to open/close the menu.
    page.querySelector('[component="button/menu"]').onclick = function() {
      document.querySelector('#mySplitter').left.toggle();
    };

    // Set button functionality to push 'new_task.html' page.
    Array.prototype.forEach.call(page.querySelectorAll('[component="button/new-task"]'), function(element) {
      element.onclick = function() {
        document.querySelector('#myNavigator').pushPage('new_task.html');
      };

      element.show && element.show(); // Fix ons-fab in Safari.
    });

    // Change tabbar animation depending on platform.
    page.querySelector('#myTabbar').setAttribute('animation', ons.platform.isAndroid() ? 'slide' : 'none');
  },

  ////////////////////////
  // Menu Page Controller //
  ////////////////////////
  menuPage: function(page) {
    // Set functionality for 'No Category' and 'All' default categories respectively.
    myApp.services.categories.bindOnCheckboxChange(page.querySelector('#default-category-list ons-list-item[category-id=""]'));
    myApp.services.categories.bindOnCheckboxChange(page.querySelector('#default-category-list ons-list-item:not([category-id])'));

    // Change splitter animation depending on platform.
    document.querySelector('#mySplitter').left.setAttribute('animation', ons.platform.isAndroid() ? 'overlay' : 'reveal');
  },

  ////////////////////////////
  // New Task Page Controller //
  ////////////////////////////
  newTaskPage: function(page) {
    // Set button functionality to save a new task.
    Array.prototype.forEach.call(page.querySelectorAll('[component="button/save-task"]'), function(element) {
      element.onclick = function() {
        var newTitle = page.querySelector('#title-input').value;

        if (newTitle) {
          // If input title is not empty, create a new task.
          myApp.services.tasks.create(
            {
              title: newTitle,
              category: page.querySelector('#category-input').value,
              description: page.querySelector('#description-input').value,
			  urgent: page.querySelector('#urgent-input').checked,
              add_item_1: page.querySelector('#list-item-1').value,
              add_item_2: page.querySelector('#list-item-2').value,
              add_item_3: page.querySelector('#list-item-3').value,
              add_item_4: page.querySelector('#list-item-4').value,
              add_item_5: page.querySelector('#list-item-5').value,
              add_item_6: page.querySelector('#list-item-6').value,
              add_item_7: page.querySelector('#list-item-7').value,
              add_item_8: page.querySelector('#list-item-8').value,
              add_item_9: page.querySelector('#list-item-9').value,
              add_item_10: page.querySelector('#list-item-10').value,
              add_item_11: page.querySelector('#list-item-11').value,
              add_item_12: page.querySelector('#list-item-12').value,
			  add_item_13: page.querySelector('#list-item-13').value,
			  add_item_14: page.querySelector('#list-item-14').value,
			  add_item_15: page.querySelector('#list-item-15').value,
        chb_item_1: page.querySelector('#list-value-1').checked,
        chb_item_2: page.querySelector('#list-value-2').checked,
        chb_item_3: page.querySelector('#list-value-3').checked,
        chb_item_4: page.querySelector('#list-value-4').checked,
        chb_item_5: page.querySelector('#list-value-5').checked,
        chb_item_6: page.querySelector('#list-value-6').checked,
        chb_item_7: page.querySelector('#list-value-7').checked,
        chb_item_8: page.querySelector('#list-value-8').checked,
        chb_item_9: page.querySelector('#list-value-9').checked,
        chb_item_10: page.querySelector('#list-value-10').checked,
        chb_item_11: page.querySelector('#list-value-11').checked,
        chb_item_12: page.querySelector('#list-value-12').checked,
        chb_item_13: page.querySelector('#list-value-13').checked,
        chb_item_14: page.querySelector('#list-value-14').checked,
        chb_item_15: page.querySelector('#list-value-15').checked,


            }
          );

		 // addItem();

          // Set selected category to 'All', refresh and pop page.
          document.querySelector('#default-category-list ons-list-item ons-radio').checked = true;
          document.querySelector('#default-category-list ons-list-item').updateCategoryView();
          document.querySelector('#myNavigator').popPage();
          addItem();

        } else {
          // Show alert if the input title is empty.
          ons.notification.alert('Bitte gebe ein Titel ein');
        }
      };
    });
  },



  ////////////////////////////////
  // Details Bearbeiten Task Page Controller //
  ///////////////////////////////
  detailsTaskPage: function(page) {
    // Get the element passed as argument to pushPage.
    var element = page.data.element;

    // Fill the view with the stored data.
    page.querySelector('#title-input').value = element.data.title;
    page.querySelector('#category-input').value = element.data.category;
    page.querySelector('#description-input').value = element.data.description;
	page.querySelector('#urgent-input').checked = element.data.urgent;
    page.querySelector('#list-item-1').value = element.data.add_item_1;
    page.querySelector('#list-item-2').value = element.data.add_item_2;
    page.querySelector('#list-item-3').value = element.data.add_item_3;
    page.querySelector('#list-item-4').value = element.data.add_item_4;
    page.querySelector('#list-item-5').value = element.data.add_item_5;
    page.querySelector('#list-item-6').value = element.data.add_item_6;
    page.querySelector('#list-item-7').value = element.data.add_item_7;
    page.querySelector('#list-item-8').value = element.data.add_item_8;
    page.querySelector('#list-item-9').value = element.data.add_item_9;
    page.querySelector('#list-item-10').value = element.data.add_item_10;
    page.querySelector('#list-item-11').value = element.data.add_item_11;
    page.querySelector('#list-item-12').value = element.data.add_item_12;
	 page.querySelector('#list-item-13').value = element.data.add_item_13;
	  page.querySelector('#list-item-14').value = element.data.add_item_14;
	   page.querySelector('#list-item-15').value = element.data.add_item_15; 
    page.querySelector('#list-value-1').checked = element.data.chb_item_1;
    page.querySelector('#list-value-2').checked = element.data.chb_item_2;
    page.querySelector('#list-value-3').checked = element.data.chb_item_3;
    page.querySelector('#list-value-4').checked = element.data.chb_item_4;
    page.querySelector('#list-value-5').checked = element.data.chb_item_5;
    page.querySelector('#list-value-6').checked = element.data.chb_item_6;
    page.querySelector('#list-value-7').checked = element.data.chb_item_7;
    page.querySelector('#list-value-8').checked = element.data.chb_item_8;
    page.querySelector('#list-value-9').checked = element.data.chb_item_9;
    page.querySelector('#list-value-10').checked = element.data.chb_item_10;
    page.querySelector('#list-value-11').checked = element.data.chb_item_11;
    page.querySelector('#list-value-12').checked = element.data.chb_item_12;
	page.querySelector('#list-value-13').checked = element.data.chb_item_13;
	page.querySelector('#list-value-14').checked = element.data.chb_item_14;
	page.querySelector('#list-value-15').checked = element.data.chb_item_15;

    // Set button functionality to save an existing task.
    page.querySelector('[component="button/save-task"]').onclick = function() {
      var newTitle = page.querySelector('#title-input').value;

      if (newTitle) {

        // If input title is not empty, ask for confirmation before saving.
		/*
        ons.notification.confirm(
          {
            title: 'Änderungen speichern?',
            message: 'Möchtest du die Änderungen speichern',
            buttonLabels: ['Abbrechen', 'Speichern']
          }
        ).then(function(buttonIndex) {
          if (buttonIndex === 1) {
            // If 'Save' button was pressed, overwrite the task.
			*/

            myApp.services.tasks.update(element,
              {
              title: newTitle,
              category: page.querySelector('#category-input').value,
              description: page.querySelector('#description-input').value,
			  urgent: page.querySelector('#urgent-input').checked,
              add_item_1: page.querySelector('#list-item-1').value,
              add_item_2: page.querySelector('#list-item-2').value,
              add_item_3: page.querySelector('#list-item-3').value,
              add_item_4: page.querySelector('#list-item-4').value,
              add_item_5: page.querySelector('#list-item-5').value,
              add_item_6: page.querySelector('#list-item-6').value,
              add_item_7: page.querySelector('#list-item-7').value,
              add_item_8: page.querySelector('#list-item-8').value,
              add_item_9: page.querySelector('#list-item-9').value,
              add_item_10: page.querySelector('#list-item-10').value,
              add_item_11: page.querySelector('#list-item-11').value,
              add_item_12: page.querySelector('#list-item-12').value,
			  add_item_13: page.querySelector('#list-item-13').value,
			  add_item_14: page.querySelector('#list-item-14').value,
			  add_item_15: page.querySelector('#list-item-15').value,
			   chb_item_1: page.querySelector('#list-value-1').checked,
			   chb_item_2: page.querySelector('#list-value-2').checked,
			   chb_item_3: page.querySelector('#list-value-3').checked,
			   chb_item_4: page.querySelector('#list-value-4').checked,
			   chb_item_5: page.querySelector('#list-value-5').checked,
			   chb_item_6: page.querySelector('#list-value-6').checked,
			   chb_item_7: page.querySelector('#list-value-7').checked,
			   chb_item_8: page.querySelector('#list-value-8').checked,
			   chb_item_9: page.querySelector('#list-value-9').checked,
			   chb_item_10: page.querySelector('#list-value-10').checked,
			   chb_item_11: page.querySelector('#list-value-11').checked,
			   chb_item_12: page.querySelector('#list-value-12').checked,
			   chb_item_13: page.querySelector('#list-value-13').checked,
			   chb_item_14: page.querySelector('#list-value-14').checked,
			   chb_item_15: page.querySelector('#list-value-15').checked,

              }
			  );


            // Set selected category to 'All', refresh and pop page.
            document.querySelector('#default-category-list ons-list-item ons-radio').checked = true;
            document.querySelector('#default-category-list ons-list-item').updateCategoryView();
			document.querySelector('#myNavigator').popPage();
      saveChange(title);
        ;

      } else {
        // Show alert if the input title is empty.
        ons.notification.alert('Bitte ein Titel eingeben');
      }
    };
  }
};
