const topBar = document.getElementById('top');
const leftBar = document.getElementById('left');
const midBar = document.getElementById('all');

midBar.addEventListener("scroll", function(){
	leftBar.scrollTop = midBar.scrollTop;
	topBar.scrollLeft = midBar.scrollLeft;
});
getElementById('left').style.height = getElementById('all_img').style.height;