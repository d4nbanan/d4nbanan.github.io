let row1 = ['НАДЕЖНЫЕ ПОСТАВКИ', 'МОЩНЫЕ ИМПУЛЬСЫ', 'СОЗДАВАЯ АКЦИОНЕРНУЮ СТОИМОСТЬ', 'ДОСТОВЕРНЫЕ СООБЩЕНИЯ', 'ДОВЕРИЕ КЛИЕНТОВ', 'СОЦИАЛЬНАЯ ОТВЕТСТВЕННОСТЬ']
let row2 = ['Всегда в движении навстречу новым задачам.', 'Всегда в движении, объединяя усилия.', 'Всегда в движении к новым высотам.', 'Всегда в движении, делясь глобальными инициативами.', 'Всегда в движении, развивая партнерские отношения.', 'Всегда в движении с заботой о людях.']
let images = document.querySelectorAll('.slider img');
let points = document.querySelectorAll('.slider li');
let current = 0;
function slider() {
	for (let i = 0; i < images.length; i++) {
		images[i].classList.add('opacity0');
		points[i].classList.add('background-none');
	}
	document.querySelector('#text_row1').innerHTML = row1[current];
	document.querySelector('#text_row2').innerHTML = row2[current];
	images[current].classList.remove('opacity0');
	points[current].classList.remove('background-none');
	points[current].classList.add('background-red');
};
slider();

function slidernext() {
	if (current + 1 == images.length) {
		current = 0;
	}
	else {
		current++;
	}
	slider();
};
var t;
function TimeOut(){
	t = setInterval( function(){
		slidernext();}, 4000);
}
window.onload = TimeOut();
let SliderCont = document.querySelector('.slider');
SliderCont.addEventListener("mouseenter", Stop);
SliderCont.addEventListener("mouseleave", TimeOut);
function Stop(){
	clearInterval(t);
}


document.querySelector('#first').onclick = function(){
	current = 0;
	slider();
};
document.querySelector('#second').onclick = function(){
	current = 1;
	slider();
};
document.querySelector('#third').onclick = function(){
	current = 2;
	slider();
};
document.querySelector('#fourth').onclick = function(){
	current = 3;
	slider();
};
document.querySelector('#fifth').onclick = function(){
	current = 4;
	slider();
};
document.querySelector('#sixth').onclick = function(){
	current = 5;
	slider();
};

let titles = document.querySelectorAll('.title');
let img_circles = document.querySelectorAll('.img-subcircle');
let deskrs = document.querySelectorAll('.deskr');
titles[0].addEventListener("mouseenter", function(){
	img_circles[0].classList.add('increase_image');
});
titles[0].addEventListener("mouseleave", function(){
	img_circles[0].classList.remove('increase_image');
});
titles[1].addEventListener("mouseenter", function(){
	img_circles[1].classList.add('increase_image');
});
titles[1].addEventListener("mouseleave", function(){
	img_circles[1].classList.remove('increase_image');
});
titles[2].addEventListener("mouseenter", function(){
	img_circles[2].classList.add('increase_image');
});
titles[2].addEventListener("mouseleave", function(){
	img_circles[2].classList.remove('increase_image');
});
titles[3].addEventListener("mouseenter", function(){
	img_circles[3].classList.add('increase_image');
});
titles[3].addEventListener("mouseleave", function(){
	img_circles[3].classList.remove('increase_image');
});

img_circles[0].addEventListener("mouseenter", function(){
	img_circles[0].classList.add('increase_image');
});
img_circles[0].addEventListener("mouseleave", function(){
	img_circles[0].classList.remove('increase_image');
});
img_circles[1].addEventListener("mouseenter", function(){
	img_circles[1].classList.add('increase_image');
});
img_circles[1].addEventListener("mouseleave", function(){
	img_circles[1].classList.remove('increase_image');
});
img_circles[2].addEventListener("mouseenter", function(){
	img_circles[2].classList.add('increase_image');
});
img_circles[2].addEventListener("mouseleave", function(){
	img_circles[2].classList.remove('increase_image');
});
img_circles[3].addEventListener("mouseenter", function(){
	img_circles[3].classList.add('increase_image');
});
img_circles[3].addEventListener("mouseleave", function(){
	img_circles[3].classList.remove('increase_image');
});

deskrs[0].addEventListener("mouseenter", function(){
	img_circles[1].classList.add('increase_image');
});
deskrs[0].addEventListener("mouseleave", function(){
	img_circles[1].classList.remove('increase_image');
});
deskrs[1].addEventListener("mouseenter", function(){
	img_circles[2].classList.add('increase_image');
});
deskrs[1].addEventListener("mouseleave", function(){
	img_circles[2].classList.remove('increase_image');
});
deskrs[2].addEventListener("mouseenter", function(){
	img_circles[3].classList.add('increase_image');
});
deskrs[2].addEventListener("mouseleave", function(){
	img_circles[3].classList.remove('increase_image');
});


let links = ["https://lukoil.ru/InvestorAndShareholderCenter/ShareholdersMeeting", "https://lukoil.ru/Business/Upstream/KeyProjects", "https://lukoil.ru/Products/brands/lukoilgenesis", "https://lukoil.ru/Responsibility/Sustainability"];
titles[0].onclick = function(){
	document.location.href = links[0];
}
img_circles[0].onclick = function(){
	document.location.href = links[0];
}
titles[1].onclick = function(){
	document.location.href = links[1];
}
deskrs[0].onclick = function(){
	document.location.href = links[1];
}
img_circles[1].onclick = function(){
	document.location.href = links[1];
}
titles[2].onclick = function(){
	document.location.href = links[2];
}
deskrs[1].onclick = function(){
	document.location.href = links[2];
}
img_circles[2].onclick = function(){
	document.location.href = links[2];
}
titles[3].onclick = function(){
	document.location.href = links[3];
}
deskrs[2].onclick = function(){
	document.location.href = links[3];
}
img_circles[3].onclick = function(){
	document.location.href = links[3];
}

document.querySelector('#free1').onclick = function() {
  'share_disp display_share'.split(' ').forEach(function(s) {
      document.querySelector('#share_disp1').classList.toggle(s);
  });
}
document.querySelector('#free2').onclick = function() {
  'share_disp display_share'.split(' ').forEach(function(s) {
      document.querySelector('#share_disp2').classList.toggle(s);
  });
}
document.querySelector('#free3').onclick = function() {
  'share_disp display_share'.split(' ').forEach(function(s) {
      document.querySelector('#share_disp3').classList.toggle(s);
  });
}
document.querySelector('#free4').onclick = function() {
  'share_disp display_share'.split(' ').forEach(function(s) {
      document.querySelector('#share_disp4').classList.toggle(s);
  });
}
document.querySelector('#free5').onclick = function() {
  'share_disp display_share'.split(' ').forEach(function(s) {
      document.querySelector('#share_disp5').classList.toggle(s);
  });
}
document.querySelector('#free6').onclick = function() {
  'share_disp display_share'.split(' ').forEach(function(s) {
      document.querySelector('#share_disp6').classList.toggle(s);
  });
}
document.querySelector('#free7').onclick = function() {
  'share_disp display_share'.split(' ').forEach(function(s) {
      document.querySelector('#share_disp7').classList.toggle(s);
  });
}
document.querySelector('#free8').onclick = function() {
  'share_disp display_share'.split(' ').forEach(function(s) {
      document.querySelector('#share_disp8').classList.toggle(s);
  });
}
document.addEventListener('click', function(event) {
  var e = document.getElementById('free8');
  if (!e.contains(event.target)){
  	document.querySelector("#infoblock_grey8 .display_share").classList.add('share_disp');
	document.querySelector("#infoblock_grey8 .share_disp").classList.remove('display_share');
  }
});
document.addEventListener('click', function(event) {
  var e = document.getElementById('free7');
  if (!e.contains(event.target)){
  	document.querySelector("#infoblock_grey7 .display_share").classList.add('share_disp');
	document.querySelector("#infoblock_grey7 .share_disp").classList.remove('display_share');
  }
});
document.addEventListener('click', function(event) {
  var e = document.getElementById('free6');
  if (!e.contains(event.target)){
  	document.querySelector("#infoblock_grey6 .display_share").classList.add('share_disp');
	document.querySelector("#infoblock_grey6 .share_disp").classList.remove('display_share');
  }
});
document.addEventListener('click', function(event) {
  var e = document.getElementById('free5');
  if (!e.contains(event.target)){
  	document.querySelector("#infoblock_grey5 .display_share").classList.add('share_disp');
	document.querySelector("#infoblock_grey5 .share_disp").classList.remove('display_share');
  }
});
document.addEventListener('click', function(event) {
  var e = document.getElementById('free4');
  if (!e.contains(event.target)){
  	document.querySelector("#infoblock_grey4 .display_share").classList.add('share_disp');
	document.querySelector("#infoblock_grey4 .share_disp").classList.remove('display_share');
  }
});
document.addEventListener('click', function(event) {
  var e = document.getElementById('free3');
  if (!e.contains(event.target)){
  	document.querySelector("#infoblock_grey3 .display_share").classList.add('share_disp');
	document.querySelector("#infoblock_grey3 .share_disp").classList.remove('display_share');
  }
});
document.addEventListener('click', function(event) {
  var e = document.getElementById('free2');
  if (!e.contains(event.target)){
  	document.querySelector("#infoblock_grey2 .display_share").classList.add('share_disp');
	document.querySelector("#infoblock_grey2 .share_disp").classList.remove('display_share');
  }
});
document.addEventListener('click', function(event) {
  var e = document.getElementById('free1');
  if (!e.contains(event.target)){
  	document.querySelector("#infoblock_grey1 .display_share").classList.add('share_disp');
	document.querySelector("#infoblock_grey1 .share_disp").classList.remove('display_share');
  }
});