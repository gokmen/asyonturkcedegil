var index = 0;
var badwords = { 'adapt':        ['uyum', 'uyarlama'],
                 'ajit':         ['körükleme','çırpıntı'],
                 'anim':         ['canlandırma'],
                 'aplik':        ['uygulama', 'yazılım'],
                 'dejener':      ['yozlaşma', 'soysuzlaşma', 'bozunum'],
                 'destin':       ['hedef', 'varış noktası', 'gidilecek yer'],
                 'dokumant':     ['belgelendirme', 'yazıya dökme'],
                 'dramatiz':     ['canlandırma'],
                 'enform':       ['bilgi', 'malûmat'],
                 'entegr':       ['bütünleşme', 'uyum'],
                 'form':         ['biçimlenme', 'yetişim'],
                 'fermant':      ['mayalanma'],
                 'halusin':      ['sanrı'],
                 'idealiz':      ['ülküleştirme'],
                 'implement':    ['uyarlama', 'gerçekleştirme'],
                 'izol':         ['yalıtım'],
                 'jener':        ['nesil'],
                 'kalifik':      ['beceri', 'yetenek', 'tecrübe', 'niteliklilik'],
                 'kalibr':       ['ayarlama', 'ölçümleme'],
                 'komunik':      ['iletişim'],
                 'konfigur':     ['yapılandırma', 'ayarlama'],
                 'konfirm':      ['doğrulama', 'onaylama', 'geçerleme'],
                 'konsantr':     ['derişim', 'dikkat toplaşımı', 'yoğunlaşma'],
                 'koordin':      ['eş güdüm'],
                 'lok':          ['konum', 'mevki', 'yer', 'mahal'],
                 'lokaliz':      ['yerelleştirme', 'kuruluş yeri seçimi'],
                 'migr':         ['göç'],
                 'modifik':      ['değişke', 'değişim'],
                 'oblig':        ['yükümlülük', 'zorunluluk', 'şart', 'borç'],
                 'oksid':        ['yükseltgenme'],
                 'oper':         ['ameliyat', 'müdahale', 'harekât'],
                 'oryant':       ['yönlendirme', 'uyumlanma', 'eğitme'],
                 'otantik':      ['doğrulama', 'kimlik denetimi', 'belgeleme'],
                 'polariz':      ['kutuplanma', 'polarma', 'ucaylanma'],
                 'popul':        ['nüfus', 'ana kitle', 'varlık'],
                 'prezant':      ['sunum', 'tanıtım'],
                 'provok':       ['kışkırtma'],
                 'rasyonaliz':   ['ussallaştırma', 'akla dayattırma', 'gerçeklendirme'],
                 'rejener':      ['yenilenme'],
                 'rekonfirm':    ['tekrar doğrulama', 'tekrar onaylama'],
                 'replik':       ['ikileme', 'çoğaltma', 'kopyalama'],
                 'restor':       ['yenileme', 'onarım'],
                 'rot':          ['yer değiştirme', 'dönüştürme', 'çevirme'],
                 'sans':         ['dalgalanma'],
                 'senkroniz':    ['eşzamanlama', 'eşleme'],
                 'seriliz':      ['serileştirme'],
                 'sirkul':       ['dolanım', 'dolaşım'],
                 'spekul':       ['vurgun', 'saptırma'],
                 'telekomunik':  ['uziletişim', 'uzakiletişim'],
                 'transform':    ['dönüşüm'],
                 'transport':    ['ulaşım', 'taşıma'],
                 'valid':        ['onaylama', 'doğrulama', 'geçerleme'],
                 'valu':         ['değerleme'],
                 'verifik':      ['doğrulama', 'kanıtlama', 'tetkik'],
                 'vibr':         ['titreşim']
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
