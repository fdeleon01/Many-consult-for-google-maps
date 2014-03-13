/**call many times api of google maps*/
//you can recived client adress and city and zip code of other ajax when call in data base

setInterval(function(){
   $.ajax({
					 url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + clientAdress + 'city=' + clientCity + 'zipcode=' + clientZipcode + '&sensor=false',
					 type: "POST",
					 data: {
						 'x': 'x' 
					 },
					 dataType: "html",
					 success: function(msg) {
						try{
						 msg=JSON.parse(msg);											
						var adress = msg.results[0].formatted_address;	
						adress = adress.split(",")[0];
						adress = adress.replace(/ /g,"");
						var myLatitud = msg.results[0].geometry.location.lat;
						var myLongitud = msg.results[0].geometry.location.lng; 
						//var myCity = msg.results[0].address_components[1].long_name;
						}catch(e){} 
					}
		  });
),2000};
