    (function($) {
        "use strict";
            // PORTFOLIO
             $('#gallery').finalTilesGallery({
            gridCellSize: 2,
            minTileWidth: 200,
            autoLoadURL: "loadmore.php",
            autoLoadOffset: 100,
            hoverEffect: 'fade',
            hoverDuration: 500,
            margin: 0,
            imageSizeFactor: 1
        });
    })(jQuery);