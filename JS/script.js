$(document).ready(function() {
  $('form').submit(function(e) {
  e.preventDefault();
  var email = $('#exampleInputEmail1').val();
  var password = $('#exampleInputPassword1').val();

  if (email === '' || password === '') {
  Swal.fire({
  icon: 'info',
  title: 'Error',
  text: 'Lütfen tüm zorunlu alanları doldurunuz.'
  });
  } else if (email === 'a@gmail.com' && password === 'b') {
  Swal.fire({
  icon: 'success',
  title: 'Success',
  text: 'Giriş Başarılı!',
  timer: 3000,
  showConfirmButton: false
  }).then(function() {
  window.location.href = 'index.html';
  });

  } else {
  Swal.fire({
  icon: 'error',
  title: 'Error',
  text: 'Hatalı giriş yaptınız. Lütfen tekrar deneyiniz.'
  });
  }
  });
  });
  //  menü kısmı
  // function toggleSidebar() {
  //    const sidebar = document.getElementById('sidebar');
  //    const content = document.getElementById('content');
  //    sidebar.classList.toggle('collapsed');
  //    content.classList.toggle('collapsed');
  //  }
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('.content');
  menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  content.classList.toggle('open');
  });
  // slider
  $(document).ready(function() {
  $('.carousel').carousel({
  interval: 2000 // Her 2 saniyede bir geçiş yapması için
  });
  });

  function initMap() {
    // Lokasyon koordinatlarını belirleyin
    var myLatLng = { lat: 40.7128, lng: -74.0060 };

    // Harita oluşturun ve görüntüleyin
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: myLatLng
    });

    // İşaretleyiciyi oluşturun ve haritaya ekleyin
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Şirket Adı'
    });
  }