(function( global, Popcorn ) {
})( this, Popcorn );




$(function() {


  var 
		useOgv = document.createElement("video").canPlayType("video/ogg") === "maybe" && 
									!document.createElement("video").canPlayType("video/mp4"), 

		useType = useOgv && ".ogv" || "_512kb.mp4", 
  	clips = [
      {
        src: "http://ia600102.us.archive.org/23/items/HotNumber/HotNumber" + useType,  
        in: 0, 
        out: 5
      },
      {
        src: "http://ia700208.us.archive.org/5/items/Brunette_2/Brunette_2" + useType,  
        in: 7,
        out: 10
      },
      {
        src: "assets/snowdriving.ogv",
        in: 3,
        out: 6
      },
      {
        src: "http://ia700208.us.archive.org/0/items/Blonde_2/Blonde_2" + useType, 
        in: 20,
        out: 22
      },
      {
        src: "http://ia600400.us.archive.org/8/items/TripDownMarketStreetrBeforeTheFire/TripDownMktStreet_clean" + useType, 
        in: 2,
        out: 6
      }
    ],
    $seq;

  $seq = Popcorn.sequence( "seq-fixture", clips );
  
  $seq
  .footnote({
    start: 1, 
    end: $seq.duration(),
    text: "this footnote starts at 1s and persists for entire sequence<br>",
    target: "footnote-container"
  })
  .footnote({
    start: 1, 
    end: $seq.duration() - 2,
    text: "this footnote appears at :01 and dissappears 2 seconds before the end of the sequence<br>",
    target: "footnote-container"
  })
  .footnote({
    start: 5, 
    end: 7,
    text: "this footnote appears at 5s and dissappears at 7s; spanning 1 clip<br>",
    target: "footnote-container"
  })
  .footnote({
    start: 3, 
    end: 6,
    text: "this footnote appears at 3s and dissappears at 6s; Spanning 2 clips<br>",
    target: "footnote-container"
  })
  .footnote({
    start: 3, 
    end: 9,
    text: "this footnote appears at 3s and dissappears at 9s; Spanning 3 clips<br>",
    target: "footnote-container"
  });

  $seq.play();

	// expose for inspection
  window.$seq = $seq;

});
