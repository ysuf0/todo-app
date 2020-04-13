function addel(name, day, month, year){
	const date = day + "." + month + "." + year
	const i1 = "<ons-list-item expandable><p>"
	const i2 = "</p><div class='expandable-content'>"
	const i3 = "</div></ons-list-item expandable>"
	const any = i1 + name + i2 + date + i3 
	$("#ui_co").append(any)
}
function gettodo(){
	todos = $.get("https://todo-dfgr.herokuapp.com/api/view/")
	$( "ons-list-item" ).remove();
	
	setTimeout(function afterTwoSeconds() {
	  t = todos.responseJSON
	  t.forEach(function(tod){
	  		const name = tod.name
	  		const day = tod.day
	  		const month = tod.month
	  		const year = tod.year
	  		addel(name, day, month, year)
	  	})
	}, 1250)
	setTimeout(function afterTwoSeconds() {
		$("#btn-d").remove()
		var btn = "<p id='btn-d'><a href='#one' data-direction='reverse' class='ui-btn ui-shadow ui-corner-all ui-btn-b'>Menüye Geri Dön</a></p>"	
		$("#ui_co").append(btn)
	}, 1250)
}
function add(){
		const name = $("#name").val()
		const day = $("#day").val()
		const month = $("#month").val()
		const year = $("#year").val()
		const schme = {name:name,day:day,month:month,year:year}
		$.post( "https://todo-dfgr.herokuapp.com/todo/add/", schme);
		$.mobile.changePage('#')
		$("#back").click()
		$("#name").val("")
		$("#day").val("")
		$("#month").val("")
		$("#year").val("")
			 	
}
