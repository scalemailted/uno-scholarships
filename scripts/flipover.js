/*var card = document.querySelector('.flipcard');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});*/


var flip_over = function()
{
	card.classList.toggle('is-flipped');
}

var show_piskel = function()
{
	var back_text = 
	`<h1 class="display-4">
      Piskel
      <hr style="background-color:white"> 
  	</h1>
  	<p>Piskel is a free online editor for animated sprites & pixel art.<br>
    	Download or use at: <a href="http://piskelapp.com" target="_blank">http://piskelapp.com</a>
  	</p>
  	<img class="img-fluid img-thumbnail" src="media/piskel-demo.gif" />
  	<small class="pt-3 text-muted">Click to return back to the technology section</small>`

  	card_back.innerHTML = back_text;
  	flip_over();
}

var show_tiled = function()
{
	var back_text = 
	`<h1 class="display-4">
      Tiled
      <hr style="background-color:white"> 
  	</h1>
  	<p>Tiled is a free 2d level editor for tile-based maps (Windows, OSX, Linux)<br>
    	Download at: <a href="https://www.mapeditor.org" target="_blank">https://www.mapeditor.org</a> 
  	</p>
    <div class="row mt-0 pt-0 pb-2 mb-2 container justify-content-center">
      <a class="btn btn-outline-dark btn-sm col-5 ml-4" href="https://www.docs.mapeditor.org" target="_blank">Documentation</a>
      <a class="btn btn-outline-dark btn-sm col-5 ml-4" href="https://gamedevelopment.tutsplus.com/tutorials/introduction-to-tiled-map-editor-a-platform-agnostic-tool-for-level-maps--gamedev-2838" target="_blank">
        Tutorial
      </a>
    </div>
  	<img class="img-fluid img-thumbnail" src="media/tiled-demo.gif" />
  	<small class="pt-3 text-muted">Click to return back to the technology section</small>`

  	card_back.innerHTML = back_text;
  	flip_over();

}

var show_phaser = function()
{
	var back_text = 
	`<h1 class="display-4">
      Phaser
      <hr style="background-color:white"> 
  	</h1>
  	<p>Phaser is a free javascript game framework for 2D web/mobile games.<br>
    	Download at: <a href="http://phaser.io/" target="_blank">http://phaser.io/</a>
  	</p>
    <div class="row mt-0 pt-0 pb-2 mb-2 container justify-content-center">
      <a class="btn btn-outline-dark btn-sm col-3 ml-2" href="http://phaser.io/tutorials/making-your-first-phaser-3-game" target="_blank">
        Get Started
      </a>
      <a class="btn btn-outline-dark btn-sm col-3 ml-2" href="http://phaser.io/learn" target="_blank">
        Tutorials
      </a>
      <a class="btn btn-outline-dark btn-sm col-3 ml-2" href="https://photonstorm.github.io/phaser3-docs/index.html" target="_blank">
        Documentation
      </a>
    </div>
  	<img class="img-fluid img-thumbnail" src="media/platform-game.gif" />
  	<small class="pt-3 text-muted">Click to return back to the technology section</small>`

  	card_back.innerHTML = back_text;
  	flip_over();
}

var show_javascript = function()
{
	var back_text = 
	`<h1 class="display-4">
      Javascript
      <hr style="background-color:white"> 
  	</h1>
  	<p>JavaScript is the programming language of HTML and the Web.<br>
    	Learn more at: <a href="https://www.w3schools.com/js/default.asp" target="_blank">https://www.w3schools.com/js/default.asp</a>
  	</p>
  	<img class="img-fluid img-thumbnail" src="media/phaser-demo.gif" />
  	<small class="pt-3 text-muted">Click to return back to the technology section</small>`

  	card_back.innerHTML = back_text;
  	flip_over();
}


var card = document.querySelector('.flipcard');
//card.addEventListener( 'click', flip_over );

/*Flip to face--front from anywhere on face--back*/
var card_back = document.querySelector('.card__face--back');
card_back.addEventListener( 'click', flip_over)

var row_piskel = document.getElementById('row-piskel');
row_piskel.addEventListener('click', show_piskel)

var row_tiled = document.getElementById('row-tiled');
row_tiled.addEventListener('click', show_tiled)

var row_phaser = document.getElementById('row-phaser');
row_phaser.addEventListener('click', show_phaser)

var row_javascript = document.getElementById('row-javascript');
row_javascript.addEventListener('click', show_javascript)

