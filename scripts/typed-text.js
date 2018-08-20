// Can also be included with a regular script tag
//import Typed from 'typed.js';

var about_typed;
var tech_typed;

function typed_learning()
{
  var options = {
    //strings: ["Art.", "Design.", "Code.", "Games.", "Art + Design + Code = Games"],
    //strings: ["Art + Design + Code","???","Art?","Design?", "Code?", "Art + Design + Code "],
    strings: [  " ",
                "Games = <span class='text-danger'>Art?</span>",
                "Games = <span class='text-success'>Design?</span>", 
                "Games = <span class='text-primary'>Code?</span>",  
                "Games = <span class='text-danger'>Art</span> + <span class='text-success'>Design</span> + <span class='text-primary'>Code</span>"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 500,
    startDelay: 1500,
    contentType: 'html'
  }

  if (!about_typed) 
    about_typed = new Typed(".typed-learning", options);
}

function typed_technology()
{
    //var text = document.getElementById('typed-tech'); 
    //text.innerHTML = 'Art + Design + Code';
    //document.getElementById('typed-tech-default').innerHTML = 'Art + Design + Code';
    //setTimeout(function() { document.getElementById('typed-tech-default').innerHTML='' }, 2000);

    var options = {
    //strings: ["Art.", "Design.", "Code.", "Games.", "Art + Design + Code = Games"],
    strings: ["Art + Design + Code","Piskel + Tiled + Phaser"],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 2000,
    startDelay: 1000,
    loop: true
  }

  if (!tech_typed)
     tech_typed = new Typed(".typed-tech", options);
}

/*
console.log("typed-text.js loaded")

$(function(){
  $(".typed").typed({
    strings: ["Developers.", "Designers.", "People."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
  });
});*/