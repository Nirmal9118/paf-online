
	var id = window.location.search.split("=").pop();

	$.ajax({
		url: "/payments/" + id,
		type: "GET",
		dataType: 'json',
		success: function(result){
			
			console.log(result);
			
			$("#fullName").val(result.fullName);
			$("#amount").val(result.amount);
			$("#cardNo").val(result.cardNo);
			$("#cvc").val(result.cvc);
		},
		error: function(result) {
			console.log("error")
		}
	});
	
	$("#btnSubmit").click(function() {
		
		
		var fullName = $("#fullName").val();
		var amount = parseFloat($("#amount").val());
		var cardNo = $("#cardNo").val();
		var cvc = $("#cvc").val();
		
		var obj = {
				fullName,
				amount,
				cardNo,
				cvc
		}
		

		$.ajax({
			url: "/payments/" + id, 
			contentType: "application/json",
			type: "PUT",
			data: JSON.stringify(obj),
			success: function(result){
				console.log("success")
				alert("Payment updated successfully !")
				window.location.reload();
			},
			error: function(result) {
				console.log("error")
				alert("Payment Failed !")
			}
		});
		
	})