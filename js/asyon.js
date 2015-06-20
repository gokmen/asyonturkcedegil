var index = 0;
var badwords = { 'adapt':     ['uyum', 'uyarlama'],
                 'ajit':      ['körükleme','çırpıntı'],
                 'anim':      ['canlandırma'],
                 'aplik':     ['uygulama', 'yazılım'],
                 'destin':    ['hedef', 'varış noktası', 'gidilecek yer'],
                 'dokumant':  ['belgelendirme', 'yazıya dökme'],
                 'dramatiz':  ['canlandırma'],
                 'enform':    ['bilgi', 'malûmat'],
                 'halusin':   ['sanrı'],
                 'implement': ['uyarlama', 'gerçekleştirme'],
                 'jener':     ['nesil'],
                 'kalifik':   ['beceri', 'yetenek', 'tecrübe', 'niteliklilik'],
                 'komunik':   ['iletişim'],
                 'konfigur':  ['yapılandırma', 'ayarlama'],
                 'konfirm':   ['doğrulama', 'onaylama', 'geçerleme'],
                 'lok':       ['konum', 'mevki', 'yer', 'mahal'],
                 'migr':      ['göç'],
                 'oblig':     ['yükümlülük', 'zorunluluk', 'şart', 'borç'],
                 'oksid':     ['yükseltgenme'],
                 'oper':      ['ameliyat', 'müdahale', 'harekât'],
                 'oryant':    ['yönlendirme', 'uyumlanma', 'eğitme'],
                 'otantik':   ['doğrulama', 'kimlik denetimi', 'belgeleme'],
                 'prezant':   ['sunum', 'tanıtım'],
                 'provok':    ['kışkırtma'],
                 'rejener':   ['yenilenme'],
                 'rekonfirm': ['tekrar doğrulama', 'tekrar onaylama'],
                 'replik':    ['ikileme', 'çoğaltma', 'kopyalama'],
                 'rot':       ['yer değiştirme', 'dönüştürme', 'çevirme'],
                 'sans':      ['dalgalanma'],
                 'senkroniz': ['eşzamanlama', 'eşleme'],
                 'spekul':    ['vurgun','saptırma'],
                 'transform': ['dönüşüm'],
                 'valid':     ['onaylama', 'doğrulama', 'geçerleme'],
                 'verifik':   ['doğrulama', 'kanıtlama', 'tetkik']
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
