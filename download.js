var appName = 'bql_release_v21.11.04.sp1.apk'
var winName = 'FSV-Setup-21.10.30.exe'
var linuxName = 'fsv20211030.zip'
$(function () {
	$('.js-download').on('click', function () {
		var url = ''
		var area = $(this).attr('data-area')
		var plat = $(this).attr('data-plat')
		switch (area) {
			case 'America':
				url += 'https://dsw3rxqm9wq1x.cloudfront.net/'
				break
			case 'Europe':
				url += 'https://d58qqi0wa6uyo.cloudfront.net/'
				break
			default:
				url += 'http://123.132.234.66:50321/'
				break
		}
		switch (plat) {
			case 'win':
				url += area === 'Asia' ? winName : 'pc/' + winName
				break
			case 'app':
				url += area === 'Asia' ? appName : 'app/' + appName
				break
			case 'linux':
				url += 'linux/' + linuxName
				break
		}
    window.location = url
	})
})
