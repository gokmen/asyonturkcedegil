var index = 0;
var badwords = { 'aplik':     ['uygulama', 'yazılım'],
                 'lok':       ['konum', 'mevki', 'yer', 'mahal'],
                 'anim':      ['canlandırma'],
                 'destin':    ['hedef', 'varış noktası', 'gidilecek yer'],
                 'kalifik':   ['beceri', 'yetenek', 'tecrübe', 'niteliklilik'],
                 'dramatiz':  ['canlandırma'],
                 'verifik':   ['doğrulama', 'kanıtlama', 'tetkik'],
                 'prezant':   ['sunum', 'tanıtım'],
                 'enform':    ['bilgi', 'malûmat'],
                 'komunik':   ['iletişim'],
                 'konfirm':   ['doğrulama', 'onaylama', 'geçerleme'],
                 'rekonfirm': ['tekrar doğrulama', 'tekrar onaylama'],
                 'implement': ['uyarlama', 'gerçekleştirme'],
                 'konfigur':  ['yapılandırma', 'ayarlama'],
                 'replik':    ['ikileme', 'çoğaltma', 'kopyalama'],
                 'jener':     ['nesil'],
                 'rejener':   ['yenilenme'],
                 'transform': ['dönüşüm'],
                 'spekul':    ['vurgun','saptırma'],
                 'sans':      ['dalgalanma'],
                 'ajit':      ['körükleme','çırpıntı'],
                 'halusin':   ['sanrı'],
                 'rot':       ['yer değiştirme', 'dönüştürme', 'çevirme'],
                 'dokumant':  ['belgelendirme', 'yazıya dökme'],
                 'migr':      ['göç'],
                 'adapt':     ['uyum', 'uyarlama'],
                 'provok':    ['kışkırtma'],
                 'valid':     ['onaylama', 'doğrulama', 'geçerleme'],
                 'oper':      ['ameliyat', 'müdahale', 'harekât'],
                 'senkroniz': ['eşzamanlama', 'eşleme'],
                 'otantik':   ['doğrulama', 'kimlik denetimi', 'belgeleme']
};

$(document).ready(function() {
  var subdomain = $(location).attr('href').match(/^(?:http:\/\/)?(?:([^.]+)\.)?/);
  if (subdomain.length > 1) {
    subdomain = subdomain[1];
    $.each(Object.keys(badwords), function(_index, value) {
      if (value == subdomain) index = _index;
    });
  }

  update();

  $(".arrow-left").click(function() {
    index--;
    $('#content').fadeOut('fast', function() {
      update();
    });
  });

  $(".arrow-right").click(function() {
    index++;
    $('#content').fadeOut('fast', function() {
      update();
    });
  });
});

function update() {
  if (index < 0) index = Object.keys(badwords).length - 1;
  if (index > Object.keys(badwords).length - 1) index = 0;
  var badword = Object.keys(badwords)[index];
  $('.bad').text(badword);
  $('#badlink').attr('href', 'http://'+badword+'.asyonturkcedegil.com');
  $('#words').text('');
  document.title = badword + 'asyon Türkçe değil.';
  jQuery.each(badwords[badword], function() {
    $('#words').append($('<span></span>').text(this));
  });
  $('#content').fadeIn('fast', function(){
    $('#warn').effect('highlight', {}, 400, function(){
      $('#badlink').effect('highlight');
    });
  });
}
