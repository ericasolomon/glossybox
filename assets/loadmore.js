
/* LoadMore Object                                                           
************************************************************************/
var LoadMore = LoadMore || {
	initialLoad:    true,
	page: 1
};


/* LoadMore functions                                                          
************************************************************************/
LoadMore.load = function() {
	var self = this;
	var e = 'click'; //'ontouchstart' in window ? 'touchstart' : 'click'; - issue when both are present

	$($postsContainer).imagesLoaded( function() {
        $postsContainer.find('.box-article').removeClass('hide').show();
        $postsContainer.packery({
          gutter: 0,
          itemSelector: '.box-article',
        });
        $loader.addClass('hide');
        if ( self.page < data.max_num_pages ) {
			$loadBtn.removeClass('hide');
		}
    });
    self.initialLoad = false;

	//load more button
	$loadBtn.on(e, function(e){
		self.page++;
		self.loadPosts();
	});

};

LoadMore.loadPosts = function() {
	var self = this;
    $.ajax({
        url: data.ajaxurl,
        type: 'post',
        data: {
            'action': 'jm_load_more',
            'paged': self.page,
            '_ajax_nonce': data.nonce,
            'query_vars' : data.query_vars
        },
        beforeSend: function () {
			$loadBtn.addClass('hide');
			$loader.removeClass('hide');
        },
        success: function (response) {
			$postsContainer.append(response);
			var $new_elements = $('.box-article.hide');
			$($postsContainer).imagesLoaded( function() {
				$postsContainer.find('.box-article.hide').removeClass('hide');
				$postsContainer.packery('appended', $new_elements);
				$loader.addClass('hide');
				if ( self.page < data.max_num_pages ) {
					$loadBtn.removeClass('hide');
				}
			});
		},
		complete: function () {

		},
		error: function () {
		}
	});
};

/*    
      Document ready.                                                         
************************************************************************/

$(document).ready(function () {

	/* A couple of selections. */
	$postsContainer = $('.pck-container-load');
	$loadBtn = $('.load-more-load');
	$loader = $('.loader-load');

	LoadMore.load();

});
