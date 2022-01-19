var appVersion = '22.01.17'
var winVersion = '22.1.6'
var linuxVersion = '22.01.19'
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
			case 'win':
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
    $(this).text('Version: ' + text)
  })
})
