

function deletePayement(id) {
	$.ajax({
		url: "/payments/" + id,
		type: "DELETE",
		success: function(result){
			console.log("success")
			alert("Payment deleted successfully !")
			window.location.reload();
		},
		error: function(result) {
			console.log("error")
			alert("Payment Failed !")
		}
	});
}

$.get("/payments", function(data, status){
    
	
	for(var i in data) {
		$("#view").append(
			
				"<tr><td>" + data[i].id +
				"</td><td>" + data[i].fullName + 
				"</td><td>" + data[i].cardNo + 
				"</td><td>" + data[i].cvc + 
				"</td><td>" + data[i].amount + 
				"</td><td><a href=\"update.html?id=" + data[i].id + "\">Update</a>"	+	
				"</td><td><a href=\"#\" onclick=\"deletePayement("+data[i].id+");\">Delete</a>"	+	
				"</td></tr>"
		)
		
		

	}
	
 });