var appVersion = '21.11.24'
var winVersion = '21.12.3'
var linuxVersion = '20211203'
var appName = 'bql_release_v' + appVersion + '.apk'
var winName = 'FSV-Setup-' + winVersion + '.exe'
var linuxName = 'fsv' + linuxVersion + '.zip'
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
				// url += 'http://123.132.234.66:10321/'
				url += 'https://dsw3rxqm9wq1x.cloudfront.net/'
				break
		}
		switch (plat) {
			case 'win':zxsa
				// url += area === 'Asia' ? winName : 'pc/' + winName
				url += 'pc/' + winName
				break
			case 'app':
				// url += area === 'Asia' ? appName : 'app/' + appName
				url += 'app/' + appName
				break
			case 'linux':
				url += 'linux/' + linuxName
				break
		}
    window.location = url
	})
  $('.js-version').each(function() {
    var plat = $(this).attr('data-plat')
    var text = ''
    switch (plat) {
			case 'win':
				text = winVersion
				break
			case 'app':
				text = appVersion
				break
			case 'linux':
				text = linuxVersion
				break
    }
    $(this).text('版本号: ' + text)
  })
})
