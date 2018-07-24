(function($, undefined){ 	
	

	$( "#color" ).change(function() {

		let color = $('#color').val();
		let size = $( "#sizeBlock" );

		size.hide();

  	if (color === "") {

			console.log("empty")

		}else{

			size.show();
			console.log(color);

		}

	});

	


})(jQuery); 