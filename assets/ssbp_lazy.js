jQuery(document).ready(function(){

	// loop through each container so they're unique
	jQuery('.ssbp-container').each(function(i, obj) {

		// collect and compile posted data to an array
		var data = {
			    action: 'ssbp_lazy',
			    security : ssbpLazy.security,
			    ssbpid: jQuery(this).data("ssbp-id"),
			    ssbptitle: jQuery(this).data("ssbp-title"),
			    ssbpurl: jQuery(this).data("ssbp-url"),
			    ssbpshorturl: jQuery(this).data("ssbp-short-url"),
			    ssbpsharetext: jQuery(this).data("ssbp-share-text"),
			};
	
		// load the share buttons via ajax
		jQuery.post(ssbpLazy.ajax_url, data, function(response) {

			// display buttons
			jQuery(obj).hide().append(response).fadeIn(500);

	        // upon clicking a simple share buttons plus button
			jQuery(obj).find('.ssbp-btn').click(function(event){

				// don't go the the href yet
				event.preventDefault();
				
				// collect and compile posted data to an array
				var data = {
					    action: 'ssbp_tracking',
					    security : ssbpAjax.security,
					    title: jQuery(this).data("ssbp-title"),
					    url: jQuery(this).data("ssbp-url"),
					    site: jQuery(this).data("ssbp-site"),
					    href: jQuery(this).attr("href"),
					};
			
				// these share options don't need to have a popup
				if (data['site'] == 'Email' || data['site'] == 'Pinterest' || data['site'] == 'Print') {
						
					// just redirect
					window.location.href = data['href'];
					 
				} else {
				
					// prepare popup window
					var width  = 575,
					    height = 520,
					    left   = (jQuery(window).width()  - width)  / 2,
					    top    = (jQuery(window).height() - height) / 2,
					    opts   = 'status=1' +
					             ',width='  + width  +
					             ',height=' + height +
					             ',top='    + top    +
					             ',left='   + left;
				
					// open the share url in a smaller window	
				    window.open(data['href'], 'SSBP', opts);
				}
				
				// log the share via ajax
				jQuery.post(ssbpAjax.ajax_url, data, function(response) {});	
			}); // end of click event for buttons
	    }); // end of ajax post and response to get buttons
	}); // close loop of ssbp-containers

	// loop through each container so they're unique
	jQuery('.ssbp-container-2').each(function(i, obj) {

		// collect and compile posted data to an array
		var data = {
			    action: 'ssbp_lazy',
			    security : ssbpLazy.security,
			    ssbpid: jQuery(this).data("ssbp-id"),
			    ssbptitle: jQuery(this).data("ssbp-title"),
			    ssbpurl: jQuery(this).data("ssbp-url"),
			    ssbpshorturl: jQuery(this).data("ssbp-short-url"),
			    ssbpsharetext: jQuery(this).data("ssbp-share-text"),
			    ssbpclassextra: '-2',
			};
	
		// load the share buttons via ajax
		jQuery.post(ssbpLazy.ajax_url, data, function(response) {

			// display buttons
			jQuery(obj).hide().append(response).fadeIn(500);

	        // upon clicking a simple share buttons plus button
			jQuery(obj).find('.ssbp-btn-2').click(function(event){

				// don't go the the href yet
				event.preventDefault();
				
				// collect and compile posted data to an array
				var data = {
					    action: 'ssbp_tracking',
					    security : ssbpAjax.security,
					    title: jQuery(this).data("ssbp-title"),
					    url: jQuery(this).data("ssbp-url"),
					    site: jQuery(this).data("ssbp-site"),
					    href: jQuery(this).attr("href"),
					};
			
				// these share options don't need to have a popup
				if (data['site'] == 'Email' || data['site'] == 'Pinterest' || data['site'] == 'Print') {
						
					// just redirect
					window.location.href = data['href'];
					 
				} else {
				
					// prepare popup window
					var width  = 575,
					    height = 520,
					    left   = (jQuery(window).width()  - width)  / 2,
					    top    = (jQuery(window).height() - height) / 2,
					    opts   = 'status=1' +
					             ',width='  + width  +
					             ',height=' + height +
					             ',top='    + top    +
					             ',left='   + left;
				
					// open the share url in a smaller window	
				    window.open(data['href'], 'SSBP', opts);
				}
				
				// log the share via ajax
				jQuery.post(ssbpAjax.ajax_url, data, function(response) {});	
			}); // end of click event for buttons
	    }); // end of ajax post and response to get buttons
	}); // close loop of ssbp-containers
}); 