document.addEventListener("DOMContentLoaded", function() {
    const cvButton = document.querySelector('.cv-btn');  // .cv-btn sınıfını bul

    if (cvButton) {
        cvButton.addEventListener('click', function(event) {
            event.preventDefault();  // Sayfa yenilenmesini engelle

            const cvLink = cvButton.getAttribute('href'); // CV dosyasının yolunu al
            const link = document.createElement('a');    // Yeni bir <a> etiketi oluştur
            link.href = cvLink;                          // <a> etiketine CV dosyasının yolunu ver
            link.download = cvLink.split('/').pop();      // Dosya ismini al ve indir
            document.body.appendChild(link);              // Linki sayfaya ekle
            link.click();                                 // Linki tıkla (indirme işlemini başlat)
            document.body.removeChild(link);              // Linki sayfadan kaldır
        });
    }
});
