/** @format */

$(function () {
	//ページ内リンク移動
	const headerHeight = $(".headerNavPc").innerHeight();
	const headerspHeight = $(".logo").innerHeight(); //スマホヘッダーの高さ
	// 移動先調整（ヘッダーの高さに-付与）
	const headerLink = -headerHeight - 50;
	const headerspLink = -headerspHeight - 70;
	const urlHash = location.hash;
	if (window.matchMedia("(min-width: 1025px)").matches) {
		if (urlHash) {
			$("body,html").stop().scrollTop(0);
			setTimeout(function () {
				const target = $(urlHash);
				const position = target.offset().top + headerLink;
				$("body,html").stop().animate({ scrollTop: position }, 500);
			}, 100);
		}
		$('a[href^="#"]').click(function () {
			const href = $(this).attr("href");
			const target = $(href);
			const position = target.offset().top + headerLink;
			$("body,html").stop().animate({ scrollTop: position }, 500);
		});
	} else {
		if (urlHash) {
			$("body,html").stop().scrollTop(0);
			setTimeout(function () {
				const target = $(urlHash);
				const position = target.offset().top + headerspLink;
				$("body,html").stop().animate({ scrollTop: position }, 500);
			}, 100);
		}
		$('a[href^="#"]').click(function () {
			const href = $(this).attr("href");
			const target = $(href);
			const position = target.offset().top + headerspLink;
			$("body,html").stop().animate({ scrollTop: position }, 500);
		});
	}

	//PCサイズ　スクロールしたらヘッダーに背景色を追加
	$(window).on("scroll", function () {
		const sliderHeight = $(".headerNavPc").height();
		if (sliderHeight - 40 < $(this).scrollTop()) {
			$(".headerNavPc").addClass("js-addBg");
		} else {
			$(".headerNavPc").removeClass("js-addBg");
		}
	});

	//SPサイズ　TOPページ『js-point』に到達したらロゴを出現させる
	var scrollEnd = $(".js-point").offset().top; //ページ上部からの距離を取得
	var distance = 0;
	$(document).scroll(function () {
		distance = $(this).scrollTop(); //スクロールした距離を取得
		if (scrollEnd <= distance) {
			//スクロール距離が『.js-point』の位置を超えたら
			$(".logo").addClass("js-addLogo"); //class『js-addLogo』を追加
		} else {
			$(".logo").removeClass("js-addLogo"); //class『js-addLogo』を削除
		}
	});

	//SPサイズ　ハンバーガーメニューの挙動
	$(".openMenuTrigger").on("click", function () {
		$(".background").removeClass("close");
		$(".background").addClass("open");
		$(document).ready(function () {
			$(".headerNavSp").hide().fadeIn(1000);
		});

		$(".closeMenuTrigger").on("click", function () {
			$(".background").removeClass("open");
			$(".background").addClass("close");
			$(document).ready(function () {
				$(".headerNavSp").fadeOut(150);
			});
		});

		//SPサイズ　メニューのaタグをクリックすると、ハンバーガーメニューが閉じる
		$(".headerNavSp a").on("click", function () {
			$(".background").removeClass("open");
			$(".background").addClass("close");
			$(".headerNavSp").fadeOut(150);
		});
	});

	//スマホ メニューバー高さ取得
	if (window.matchMedia("(max-width: 768px)").matches) {
		// ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
		let vh = window.innerHeight * 0.01;
		// カスタム変数--vhの値をドキュメントのルートに設定
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	} else {
		// resizeイベントの取得
		window.addEventListener("resize", () => {
			// 上記と同じスクリプトを実行
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		});
	}
});
