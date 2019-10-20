const topBar = document.getElementById('top');
const leftBar = document.getElementById('left');
const midBar = document.getElementById('all');

midBar.addEventListener("scroll", function(){
	leftBar.scrollTop = midBar.scrollTop;
	topBar.scrollLeft = midBar.scrollLeft;
});
document.getElementById('left_img').height = document.getElementById('all_img').height;
document.getElementById('top_img').width = document.getElementById('all_img').width;
document.getElementById('course_img').height = document.getElementById('top_img').height;
document.getElementById('course_img').width = document.getElementById('left_img').width;
document.getElementById('left').width = document.getElementById('left_img').width;
document.getElementById('course').height = document.getElementById('top').height;
document.getElementById('course').width = document.getElementById('left').width;
