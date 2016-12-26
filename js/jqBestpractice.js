// $(element).foo(params)





	/**
	 *   *** to avoid GLOBAL NAMESPACE POLLUTION,
	 *   we encapsulate all content of our scripts
	 *   into IIFE (read iffy)
	 *   Immediately Invoked Function Expression
	 *   (function(){ all code here })();
	 */
(function(){
	var
		$h3 = $("h3")
	;





	/**
	 * ready jQuery documentation at https://api.jquery.com/
	 *
	 *  we want to invoke functions only AFTER their declaration
	 */



	/**
	 *  @name   manipulateH3
	 *  @desc   manipulate markup
	 *
	 *  .html()     no params   => read mode
	 *              1 param     => write mode
	 *  .append()
	 *  .prepend()
	 */
	function manipulateH3(){
		// console.log( $("h3").html() );
		/*
		===================================
		ALL jQuery functions are chainable!
		===================================
		$("h3").html("we all like jQuery");
		$("h3").append(" ===");
		$("h3").prepend("=== ");*/


		//chaining functions to keep the code DRY
		$h3
			.html("we all like jQuery")
			.append(" ===")
			.prepend("=== ")
		;

	}// manipulateH3


	/**
	 *  @name   manipulateCss
	 *  @desc   manipulating style
	 *
	 *  .css()      1 param     => read mode
	 *              2 param     => write mode
	 *  .css(...).css(...).css(...)
	 *  .css({...})
	 *
	 *  for some heavier style manipulation better using
	 *  .addClass(className)
	 *  .removeClass(className)
	 *	.toggleClass(className)
	 *
	 */
	function manipulateCss(){
		// console.log( $("h3").css("color") );

		// chaining .css() functions
		/*$h3
			.css("color", "white")
			.css("background-color", "green")
			.css("font-size", "20px")
		;*/
		$h3
			.css("padding", "20px");

		// invoking one single .css()
		// and parsing a single JS object
		/*$h3.css({
			"color": "white",
			"background-color":  "green",
			"font-size": "20px"
		});*/


		// $h3.addClass("redBar");
	}// manipulateCss


	function foo(){
		alert("foo");
	}// test function


	/**
	 *  @name   bindBtns
	 *  @desc   subscribing handlers to events
	 *
	 *  $element.event(handler) // deprecated, old style
	 *
	 * $element.on(event:string, handler:function)
	 *
	 */
	function bindBtns(){
		//$("#btn").click(foo);

		// $("#btn").on("click", foo);
		$("#btn").on("click", function () {
			$h3.addClass("redBar");
		});

		$("#btn2").on("click", function () {
			$h3.removeClass("redBar");
		});

		$("#btn2a").on("click", function () {
			$h3.toggleClass("redBar");
		});
	}// bindBtns


	/**
	 *  @name   manipulateAttributes
	 *  @desc   reading or manipulating attribute values
	 *
	 *  .attr()     1 param     =>  read mode
	 *              2 params    =>  write mode
	 */
	function manipulateAttributes(){
		// console.log( $("#smiley").attr("src") );
		// assets/imgs/Smiley_SAD.png
		$("#picBtn").on("click", function(){
			$("#smiley").attr("src", "assets/imgs/Smiley_HAPPY.png");
		});

	}// manipulateAttributes



	/**
	 *  @name   bindHover
	 *  @desc   using hover() for mouse enter / leave events
	 *
	 *  .hover()  1 or 2 params
	 *          1st param     :function    =>  mouse enter callback
	 *          2nd param     :function    =>  mouse leave callback
	 */
	function bindHover(){
		$("#smiley2").hover(

			// you can capture the event object from inside all your handlers
			// mouse enter callback
			function(e) {
				//console.log(e.target);

				//$("#smiley2").attr("src", "assets/imgs/IMG_02.png");
				$( e.target ).attr("src", "assets/imgs/IMG_02.png");
			},
			//mouse leave callback
			function(){
				// from inside a handler the THIS keyword will
				// point to the element the handler is subscribed to

				//$("#smiley2").attr("src", "assets/imgs/IMG_01.png");
				$(this).attr("src", "assets/imgs/IMG_01.png");
			}
		);
	}// bindHover


	function bindEffectBtns(){
		$resDiv = $("#resDiv");

		$("#showBtn").on("click", function () {
			$resDiv.show();
		});// show

		$("#hideBtn").on("click", function () {
			$resDiv.hide();
		});// hide

		$("#toggleBtn").on("click", function () {
			$resDiv.toggle();
		});// toggle

		$("#slidetoggleBtn").on("click", function () {
			$resDiv.slideToggle();
		});// slideToggle

		$("#fadeinBtn").on("click", function () {
			$resDiv.fadeIn("fast"); // duration as keyword
		});// fadeIn

		$("#fadeoutBtn").on("click", function () {
			$resDiv.fadeOut(1000); // duration as value in ms
		});// fadeOut


	}// bindEffectBtns


	/**
	 *  @name   bindAnimation
	 *  @desc   using animate()
	 *
	 *  .animate(
	 *      {
	 *          cssProp  :   endingVal,
	 *          cssProp2 :   endingVal2
	 *      },
	 *      duration:ms,
	 *      [end callback:function]
	 *  )
	 *
	 */
	function bindAnimation(){
		$("#animBtn").on("click", function () {
			$("#animPic").animate(
 				// object with css ending points
				{
					"opacity" : 1,
					"margin-left" : "400px"
				},
				// duration in milliseconds
				1000,
				// end callback
				function () {
					$(this)
						.attr("src", "assets/imgs/Car_left.png")
						.animate(
							{
								"margin-left" : 0
							},1000, function(){
								$(this)
									.attr("src", "assets/imgs/Car_right.png");
							}
						)
				}// end
			);
		});
	}// bindAnimation


	/**
	 *	@name:	init
	 *	@desc:	initialising function
	 */
	function init(){
		manipulateH3();
		manipulateCss();
		bindBtns();
		manipulateAttributes();
		bindHover();
		bindEffectBtns();
		bindAnimation();
	} // init



	//window.onload = init;
	// $(element).event(handler)
	$(document).ready(init);

})(); // end of the iffy