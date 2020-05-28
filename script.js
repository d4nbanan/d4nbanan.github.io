

let ls = localStorage.getItem('size');
if (ls == null || ls == 1){
    ls = 1;
    document.querySelector('#size1').classList.add('colorDA2A35');
    let texts = document.querySelectorAll('.text');
    for(let i=0;i<texts.length;i++){
    	texts[i].classList.add('text12');
    }
} else if(ls == 2){
	document.querySelector('#size2').classList.add('colorDA2A35');
	let texts = document.querySelectorAll('.text')
    for(let i=0;i<texts.length;i++){
    	texts[i].classList.add('text14');
    }
} else if(ls == 3){
	document.querySelector('#size3').classList.add('colorDA2A35');
	let texts = document.querySelectorAll('.text')
    for(let i=0;i<texts.length;i++){
    	texts[i].classList.add('text16');
    }
}
document.querySelector('#size1').onclick = function(){
	document.querySelector('#size1').classList.add('colorDA2A35');
	document.querySelector('#size2').classList.remove('colorDA2A35');
	document.querySelector('#size3').classList.remove('colorDA2A35');
	let texts = document.querySelectorAll('.text')
    for(let i=0;i<texts.length;i++){
    	texts[i].classList.add('text12');
    	texts[i].classList.remove('text14');
    	texts[i].classList.remove('text16');
    }
	localStorage.setItem("size", 1);
}
document.querySelector('#size2').onclick = function(){
	document.querySelector('#size1').classList.remove('colorDA2A35');
	document.querySelector('#size2').classList.add('colorDA2A35');
	document.querySelector('#size3').classList.remove('colorDA2A35');
	let texts = document.querySelectorAll('.text')
    for(let i=0;i<texts.length;i++){
    	texts[i].classList.remove('text12');
    	texts[i].classList.add('text14');
    	texts[i].classList.remove('text16');
    }
	localStorage.setItem("size", 2);
}
document.querySelector('#size3').onclick = function(){
	document.querySelector('#size1').classList.remove('colorDA2A35');
	document.querySelector('#size2').classList.remove('colorDA2A35');
	document.querySelector('#size3').classList.add('colorDA2A35');
	let texts = document.querySelectorAll('.text')
    for(let i=0;i<texts.length;i++){
    	texts[i].classList.remove('text12');
    	texts[i].classList.remove('text14');
    	texts[i].classList.add('text16');
    }
	localStorage.setItem("size", 3);
}

document.addEventListener('click', function(event) {
  var e = document.getElementById('input_hide1');
  if (!e.contains(event.target) && !document.querySelector('.hide_vis').contains(event.target)){
  	document.querySelector("#input_hide1 .input_visible").classList.add('input_hide');
	document.querySelector("#input_hide1 .input_hide").classList.remove('input_visible');
  }
});
document.addEventListener('click', function(event) {
  var e = document.getElementById('input_hide2');
  if (!e.contains(event.target) && !document.querySelector('.hide_vis').contains(event.target)){
  	document.querySelector("#input_hide2 .input_visible").classList.add('input_hide');
	document.querySelector("#input_hide2 .input_hide").classList.remove('input_visible');
  }
});

document.querySelector('#batto_n1').onclick = function() {
  'input_hide input_visible'.split(' ').forEach(function(s) {
      document.querySelector('#input_hide1 .hide_vis').classList.toggle(s);
  });
}
document.querySelector('#batto_n2').onclick = function() {
  'input_hide input_visible'.split(' ').forEach(function(s) {
      document.querySelector('#input_hide2 .hide_vis').classList.toggle(s);
  });
}

let input_links1 = document.querySelectorAll('#input_hide1 a');
let input_links2 = document.querySelectorAll('#input_hide2 a')
let find_in_inp = document.querySelectorAll('.find_in_input input');

find_in_inp[0].addEventListener('input', function(){
	for(let i=0;i<input_links1.length;i++){
		if(input_links1[i].innerHTML.toLowerCase().indexOf(find_in_inp[0].value.toLowerCase()) == -1){
			input_links1[i].style.display = 'none';
		} else {
			input_links1[i].style.display = 'block';
		}
	}
});
find_in_inp[1].addEventListener('input', function(){
	for(let i=0;i<input_links2.length;i++){
		if(input_links2[i].innerHTML.toLowerCase().indexOf(find_in_inp[1].value.toLowerCase()) == -1){
			input_links2[i].style.display = 'none';
		} else {
			input_links2[i].style.display = 'block';
		}
	}
});
document.querySelector('.burger').onclick = function() {
  'links_hide links_active'.split(' ').forEach(function(s) {
      document.querySelector('.links').classList.toggle(s);
  });
}
document.addEventListener('click', function(event) {
  var e = document.querySelector('.links');
  if (!e.contains(event.target) && !document.querySelector('.burger').contains(event.target)){
  	document.querySelector(".links").classList.add('links_hide');
	document.querySelector(".links").classList.remove('links_active');
  }
});
