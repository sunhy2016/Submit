$().ready(function(){
	var index=1;
	$("#add").click(function(){
		
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
		var others=$("#inputOthers").val();
		
		
		var type=$("#Importance option:selected").text();
		
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
		
		var $deleteA=$("<a/>").text("删除");
		$deleteA.click(function(){
			//完成删除本行功能
			if(window.confirm("您确认要删除吗？")){
				$(this).parent().parent().remove();
			}	
		});
		
		var $updateA=$("<a/>").text("修改");
		//完成修改功能
		$updateA.click(function(){
			var id=$(this).parent().siblings("td:eq(1)").text();
			var name=$(this).parent().siblings("td:eq(2)").text();
			var others=$(this).parent().siblings("td:eq(4)").text();
			
			$("#inputName2").val(name);
			$("#inputOthers2").val(others);
			$("#inputId2").val(id);
			
		});
		
		
		var $onA=$("<a/>").text("封存");
	   $onA.click(function(){
		  
		   $(this).parent().parent().children("td:eq(3)").children().attr("disabled",true);
		  		   
	   });
		
		var $offA=$("<a/>").text("启封");
		$offA.click(function(){
			  
			   $(this).parent().parent().children("td:eq(3)").children().attr("disabled",false);
			  		   
		   });
		
		
		var $operationTD=$("<td/>").append($deleteA).
		append($updateA).append($onA).append($offA);
		
		var $tr=$("<tr/>").append($checkboxTD).
		append($idTd).append($nameTD).append($stateTD)
		.append($othersTD).append($timeTD).append($timelastTD).append($typeTD).append( $operationTD);
		
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
		
				
		
		$("#usertable tbody").append($tr);
	});
	//完成删除几行功能
	$("#deleteAll").click(function(){
		//只有表头的有id=allcheck
		var flag;
		if($(":checkbox").length==1){
			alert("请先添加用户哦！");
			flag=false;				
		}
		else{
			$(":checkbox:not(#allCheckbox)").each(function(){
				if(this.checked){
					flag=true;
				}else{
					flag=false;
				}
			});
			
			if(flag){
				if(window.confirm("你确定要删除吗？")){
					$(":checkbox:not(#allCheckbox):checked").parent().parent().remove();
				}
				
			}else{
				alert("请选择要删除的账户哦！");
			}
		}
		
		
	});
	//全选功能
	$("#allCheckbox").click(function(){
		if($(this).is(':checked')){
			$(":checkbox:not(#allCheckbox)").attr("checked",true);
			
			
		}else{
			$(":checkbox:not(#allCheckbox)").attr("checked",false);
		}
	});
	//批量封存
	$("#offAll").click(function(){
		var flag;
		if($(":checkbox").length==1){
			alert("请先添加用户哦！");
			flag=false;				
		}
		else{
			$(":checkbox:not(#allCheckbox)").each(function(){
				if(this.checked){
					flag=true;
				}else{
					flag=false;
				}
			});
			
			if(flag){
				$(":checkbox:not(#allCheckbox):checked").each(function(){
					$(this).parent().parent().children("td:eq(3)").children().attr("disabled",true);
				});
				
			}else{
				alert("请选择要封存的账户！");
			}
		}
		
		
	
			
		
		
		
			
	});
	//批量启封
	$("#onAll").click(function(){
		var flag;
		if($(":checkbox").length==1){
			alert("请先添加用户哦！");
			flag=false;				
		}
		else{
			$(":checkbox:not(#allCheckbox)").each(function(){
				if(this.checked){
					flag=true;
				}else{
					flag=false;
				}
			});
			
			if(flag){
				$(":checkbox:not(#allCheckbox):checked").each(function(){
					$(this).parent().parent().children("td:eq(3)").children().attr("disabled",false);
				});
				
			}else{
				alert("请选择要启封的账户！");
			}
		}
		

		
		
		
			
	});
	
	//完成修改操作
	$("#update2").click(function(){
		//获取隐藏域里的id值，也就是编码值
		var idVal=$("#inputId2").val();
		var name=$("#inputName2").val();
		var others=$("#inputOthers2").val();
		var type=$("#Importance2 option:selected").text();
		
		$("td[id="+idVal+"]").siblings("td:eq(1)").text(name);
		$("td[id="+idVal+"]").siblings("td:eq(3)").text(others);
		$("td[id="+idVal+"]").siblings("td:eq(6)").text(type);
		
	});
	$("#saveUser").click(function(){
		
		window.open("addUser.html");
	});
	
	$("#updateUser").click(function(){
		
		window.open("updateUser.html");
	});
	
	$("#update").click(function(){
		var flag;
		if($(":checkbox").length==1){
			alert("请先添加用户哦！");
			flag=false;				
		}
		else{
			$(":checkbox:not(#allCheckbox)").each(function(){
				if(this.checked){
					flag=true;
				}else{
					flag=false;
				}
			});
			
			if(flag){
				$(":checkbox:not(#allCheckbox):checked").each(function(){
					var id=$(this).parent().parent().children("td:eq(0)").attr("id");
					
					//.children("td:eq(3)")//.children().attr("disabled",true);
					$("#inputId2").val(id);
					window.open("updateUser.html");
				});
			}else{
				alert("请选择要修改的信息！");
			}
		}
		
		
	
			
		
		
			
	});
	
	
	
});