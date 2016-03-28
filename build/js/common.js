$(document).ready(function() {

	$(".top-menu-toggle").click(function() {
		$(this).toggleClass("on");
		$(".top-menu-main").slideToggle();
		return false;
	});
});
// portfolio filter
var itemsToFilter = document.querySelectorAll('.portfolio-slider img');
var checkBoxes = document.querySelectorAll('.filters input');
for (var i = 0; i<checkBoxes.length; i++) {
	checkBoxes[i].addEventListener('click', filterItems, false);
	checkBoxes[i].checked = true;
}

function filterItems(e) {
	var clickedItem = e.target;

	if(clickedItem.checked == true) {
		hideOrShowItems(clickedItem.value, 'hideItem', 'showItem');
	} else if (clickedItem.checked == false) {
		hideOrShowItems(clickedItem.value, 'showItem', 'hideItem');
	}
}

function hideOrShowItems(itemType, classToRemove, classToAdd) {
	for (var i = 0; i < itemsToFilter.length; i++) {
		var currentItem = itemsToFilter[i];
		if (currentItem.getAttribute('data-type') == itemType) {
			removeClass(currentItem, classToRemove);
			addClass(currentItem, classToAdd);
		}
	}
}
function addClass(element, classToAdd) {
	var currentClassValue = element.className;
	if (currentClassValue.indexOf(classToAdd) == -1) {
		if ((currentClassValue == null) || (currentClassValue === '')) {
			element.className = classToAdd;
	} else {
		element.className += '' + classToAdd;
	}
}
}
function removeClass(element, classToRemove) {
	var currentClassValue = element.className;
	if (currentClassValue == classToRemove) {
		element.className = '';
		return;
	}
	var classValues = currentClassValue.split('');
	var filteredList = [];
	for (var i = 0; i < classValues.length; i++) {
		if (classToRemove != classValues[i]) {
			filteredList.push(classValues[i]);
		}
	}
	element.className = filteredList.join(' ');
}
