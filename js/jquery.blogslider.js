$(function(){
	
	
	
	
	
	//下から上へ	
	var $loop = setInterval(function() {
		
		var $slideThumbnail = $(".slide_thumbnail");
		//サムネイルの高さを取得
		var $thumbnailHeight = $slideThumbnail.find("li:first").height();
		
		//li先頭要素のクローンを作成
		var $clone = $slideThumbnail.find("li:first").clone(true);
		
		//li先頭要素のマージントップにマイナスを指定しアニメーションさせる
		$slideThumbnail.find("li:first").animate({
			marginTop : "-" + $thumbnailHeight + "px"
		}, 800, function() {
			//処理完了時に先頭要素を削除
			$slideThumbnail.find("li:first").remove();
			//クローンをliの最後に追加
			$clone.clone(true).insertAfter($slideThumbnail.find("li:last"));
		});
	}, 2000);
	
	
	
	
	
	//上から下へ
	var reloop = setInterval(function() {
		
		var $slideThumbnailReverse = $(".slide_thumbnail_reverse");
		//サムネイルの高さを取得
		var $thumbnailReverseHeight = $slideThumbnailReverse.find("li:first").height();
		
		//li先頭要素のクローンを作成
		var $clone = $slideThumbnailReverse.find("li:last").clone(true);
		//クローンをliの最初に追加しネガティブマージンで画面外に出す
		$clone.clone(true).insertBefore($slideThumbnailReverse.find("li:first")).css("margin-top","-"+$thumbnailReverseHeight+"px");
		//ネガティブマージンで画面外に出た要素をのマージンを0にすることで降りてくるアニメーションを実行
		$slideThumbnailReverse.find("li:first").animate({
			marginTop : 0
		},800, function() {
			//処理完了時に最後の要素を削除
			$slideThumbnailReverse.find("li:last").remove();
		});
	}, 2000);
	
	
	
	
	
})