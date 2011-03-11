/**
 * pwMagic v0.1 - ian@ianmassey.com - 20091124-1
 * - usage example: pwMagic('#input1', '#input2');
 *   where #input1 is the input of type "text" to store a value,
 *   and #input2 is the input of type "password" to interact with.
 *
 * - requires jQuery (tested with 1.3.2)
 *
 * - allows for fb-style password field with default inline value,
 *   that switches to masked pw field on interaction.
 */

( function($){

	pwMagic = function(inp1,inp2){
		
		// show text field by default
		$(inp1).show();
		$(inp2).hide();
		
		// on focus, hide text field, show pw field and give focus
		$(inp1).focus(function(){
			$(this).hide();
			$(inp2).show()
				.focus();
		});
		
		// on pw blur, restore text default val and hide pw field
		$(inp2).blur(function(){
			if(this.value == ''){
				$(inp1).show();
				$(this).hide();
			}
		});
		
	}

})(jQuery);