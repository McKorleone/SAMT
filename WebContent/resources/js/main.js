$(function() {

	$(".note").draggable();

	$('.delete').click(function(){
	    return confirm("Are you sure you want to delete this note?");
	})
	
	$(".tagselect").chosen({width: "100%"})
	
})