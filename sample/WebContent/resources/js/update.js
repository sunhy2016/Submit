$().ready(function(){
	//获取opener id值
	var id=window.opener.document.getElementById("inputId2").value;
	//获取tbody的子节点，tr
	var tr=window.opener.document.getElementById("tbody").childNodes;
	//遍历子节点
	$(tr).each(function(){
		if($(this).children("td:eq(0)").attr("id")==id){
			//获取名称、备注，并传到该页面的input框显示
			var name=$(this).children("td:eq(2)").text();
			var others=$(this).children("td:eq(4)").text();
			
			$("#inputName2").val(name);
			$("#inputOthers2").val(others);
			$("#inputId2").val(id);
		}
	});
	
	$("#update2").click(function(){
		
		var idVal=$("#inputId2").val();
		var name=$("#inputName2").val();
		var others=$("#inputOthers2").val();
		var type=$("#Importance2 option:selected").text();
		$(tr).each(function(){
			if($(this).children("td:eq(0)").attr("id")==id){
				$(this).children("td:eq(2)").text(name);
				$(this).children("td:eq(4)").text(others);
				$(this).children("td:eq(7)").text(type);
			}
		});
	
		window.close();
	});
	$("#cancel").click(function(){
		window.close();
	});
});