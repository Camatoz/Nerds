let range = document.querySelector('input[type="range"]'),
	rightInput = document.querySelector('label.head-form-plas input'),
	btn = document.querySelector('button.head-form-btn'),
	pics =  document.querySelectorAll('div.catalog-pik-all'),
	firstPic = pics[0],
	firstCatalogChoise = document.querySelectorAll('a.catalog-choice')[0],
	secondCatalogChoise = document.querySelectorAll('a.catalog-choice')[1];

range.addEventListener('change', function(){
	rightInput.value = range.value;
});

rightInput.addEventListener('keyup', function() {

	let rightInputVal = parseInt(rightInput.value),
		rangeMax = parseInt(range.max);

	if (rightInputVal > rangeMax) {
		rightInput.value = rangeMax;
	}

	range.value = rightInput.value;

});

btn.addEventListener('click', function(){	
 	rightInput.style.background = 'red';
});


firstPic.addEventListener('mouseover', function(){

	firstPic.innerHTML = '<strong>вларлывралывдралывралывоар</strong>';

});

firstCatalogChoise.addEventListener('mouseover', function(){
	secondCatalogChoise.style.background = "red";
});

firstCatalogChoise.addEventListener('mouseout', function(){
	secondCatalogChoise.style.background = "";
});
