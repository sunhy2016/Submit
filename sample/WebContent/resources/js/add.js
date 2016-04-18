$().ready(function(){
	//var index=$(this).parent().parent().children("td:eq(0)").attr("id");
	
	var index=window.opener.document.getElementById("tbody").childNodes.length;
	
	
$("#addsave").click(function(){
	/*
	 * 1获取名称等值
	 * 2创建
	 *           <tr>
					<td><input type="checkbox" id="allCheckbox" /></td>
					<td>1</td>
					<td>花</td>
					<td><input type="radio" name="state" /></td>
					<td>禁用</td>
					<td>01/04/2012</td>
					<td>01/04/2012	</td>
					<td>VIP	</td>
					<td><a>删除</a><a>修改</a> <a>封存</a> <a>启封</a></td>
				</tr>
	 *   3把tr追加到tbody上  
	 */
	
	
	
	
	var name=$("#inputName").val();
	
	
	
	
	var t=window.opener.document.getElementById("tbody");
	var tbody=$(t);
	
	var name=$("#inputName").val();
	var others=$("#inputOthers").val();
	
	
	var type=$("#addImportance option:selected").text();
	
	var id=index;
	
	var $checkbox=$("<input/>").attr("type","checkbox");
	var $checkboxTD=$("<td/>").append($checkbox);
	$checkboxTD.attr("id",index);
	index++;
	
	var $idTd=$("<td/>").text(id);
	
	var $nameTD=$("<td/>").text(name);
	
	var $state=$("<input/>").attr("type","radio").attr("checked","true");
	var $stateTD=$("<td/>").append($state);
	
	var $othersTD=$("<td/>").text(others);
	
	var mydate=new Date();
	var time=mydate.toLocaleDateString();
	var $timeTD=$("<td/>").text(time);
	
	var $timelastTD=$("<td/>").text(time);
	
	var $typeTD=$("<td/>").text(type);
	
	
	
	var $tr=$("<tr/>").append($checkboxTD).
	append($idTd).append($nameTD).append($stateTD)
	.append($othersTD).append($timeTD).append($timelastTD).append($typeTD);
	
	var css=id%4;
	if(css==0){
		$tr.attr("class","warning");
	}else
		if(css==1){
			$tr.attr("class","info");
		}
		else if(css==2){
			$tr.attr("class","success");
		}else if(css==3)
			$tr.attr("class","error");
	
			
	
	tbody.append($tr);
	
	
	window.close();
	
});
$("#cancel").click(function(){
	window.close();
});






});