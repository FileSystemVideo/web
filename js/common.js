  // 切换语言按钮
  $(document.body).on('click', '.js-translate-hover', function () {
    $('.js-translate-hover .translate-btns').toggleClass('active')
  })
  // 头部固定
  $(document).on('scroll', function () {
    var scrollTop = $(this).scrollTop()
    if (scrollTop >= 60) {
      $('.ui-header').addClass('fixed')
    } else {
      $('.ui-header').removeClass('fixed')
    }
  })

  var lang = 'en'
  var arrLang = {
    zh: {},
    en: {},
  }
  getJson()
  function getJson() {
    $.getJSON('./zh.json', (data) => {
      arrLang.zh = data
    })
    $.getJSON('./en.json', (data) => {
      arrLang.en = data
      showLang()
      langChange()
    })
  }

  function langChange() {
    $(document).ready(function () {
      $('.lang').each(function (index, element) {
        var text = arrLang[lang][$(element).attr('key')]
        $(element).text(text)
      })
    })
  }
  function showLang() {
    if ('localStorage' in window) {
      lang = localStorage.getItem('lang')
      if (!Object.keys(arrLang).includes(lang)) {
        lang = 'en'
      }
    }
    $('.ui-wrapper').removeClass('zh')
    $('.ui-wrapper').removeClass('en')
    $('.ui-wrapper').addClass(lang)
    if (lang === 'zh') {
      $('.js-translate-text').text('简体中文')
    } else {
      $('.js-translate-text').text('English')
    }
  }

  $('.translate').click(function () {
    var lang = $(this).attr('id')
    $('.ui-wrapper').removeClass('zh')
    $('.ui-wrapper').removeClass('en')
    $('.ui-wrapper').addClass(lang)
    if ('localStorage' in window) {
      localStorage.setItem('lang', lang)
    }
    if (lang === 'zh') {
      $('.js-translate-text').text('简体中文')
    } else {
      $('.js-translate-text').text('English')
    }
    $('.lang').each(function (index, element) {
      var text = arrLang[lang][$(element).attr('key')]
      $(element).text(text)
    })
  })
  // footer菜单
  $(document.body).on('click', '.footer-box .right-box .title', function () {
    var that = event.target || event.srcElement
    $(that).toggleClass('active')
  })
  $(function () {
    $('.js-btn').on('click', function (e) {
      e.stopPropagation()
      $(this).toggleClass('active')
      $(this)
        .parent()
        .find('.link-box')
        .toggleClass('active')
    })
    $(document).on('click', function () {
      $('.js-links').removeClass('active')
    })
  })
  // header菜单
  $(document.body).on('click', '.nav-toggle-box', function () {
    var that = event.target || event.srcElement
    $('.nav-toggle-box').toggleClass('active')
  })