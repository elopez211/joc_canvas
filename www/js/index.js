$(document).on('deviceready', function() {

     // determinem amplada alçada DISPOSITIU ------------------
     var amplada_pantalla = screen.width ;		// 720px  --> SG_Note2
     var alcada_pantalla = screen.height ; 		// 1280px
     var amplada_pantalla_CSS = window.innerWidth ; 	// 360px
     var alcada_pantalla_CSS = window.innerHeight ;	// 616px 
     /////////////////////////////////////////////////////////
     
     // REDIMENSIONEM EL CANVAS
	 var canvas = document.getElementById('canvas');
     var ctx = canvas.getContext('2d');
     ctx.canvas.width  = window.innerWidth;
     ctx.canvas.height = window.innerHeight;
     
	// centre pantalla ?
	var centre_x = amplada_pantalla_CSS / 2 ;
	var centre_y = alcada_pantalla_CSS / 2 ;
		
	// Quina posició la bola ? Temin present que la bola ocupa un espai 	// quina mida la bola ?
	var mida_x_bola = amplada_pantalla_CSS * ( 10 / 100 ) ; 
	var mida_y_bola = mida_x_bola ;  // 36 ;
	var posicio_x_bola = centre_x - ( mida_x_bola / 2 ) ;
	var posicio_y_bola = centre_y - ( mida_y_bola / 2 ) ;

	draw(ctx,amplada_pantalla_CSS,alcada_pantalla_CSS,posicio_x_bola,posicio_y_bola);
 

      
});


function draw(ctx,amplada_pantalla_CSS,alcada_pantalla_CSS,posicio_x_bola,posicio_y_bola,mida_x_bola,mida_y_bola) {
	
		// dibuixo el fons --> laberint_fons_1.png
		var img_fons = new Image();   
		img_fons.onload = function(){
			ctx.drawImage(img_fons,0,0,amplada_pantalla_CSS,alcada_pantalla_CSS);
		};
		img_fons.src = 'img/laberint_fons_1.png'; // Determinar origen
		

		// dibuixo la bola
		var img = new Image();   // Crear nova imatge
		img.onload = function(){
			ctx.drawImage(img,posicio_x_bola,posicio_y_bola,mida_x_bola,mida_y_bola);
		};
		img.src = 'img/myImage.png'; // Determinar origen
		
		window.darrera_posicio_x = posicio_x_bola ;
		window.darrera_posicio_y = posicio_y_bola ;

}
      
function pausecomp(ms) {
   ms += new Date().getTime();
   while (new Date() < ms){}
} 


