

$("#add-form").submit(function(event) {
	consol
	event.preventDefault();
})

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
		url: "/payments", 
		contentType: "application/json",
		type: "POST",
		data: JSON.stringify(obj),
		success: function(result){
			console.log("success")
			alert("Payment added successfully !")
			window.location.reload();
		},
		error: function(result) {
			console.log("error")
			alert("Payment Failed !")
		}
	});
	
})