$(document).ready( function(){
  // pada saat id=simpanEvent di-klik
  $("#simpanEvent").click(function(){

    // cek apakah ada form yang kosong
    var error = cekform();

    // jika error = 0 (semua form telah diisi)
    if( error == 0 ){

    /// kirim data dengan $.post()
      $.post(
        // beri tahu url penyimpanan data
        "http://localhost/server/wisatabna/tambahEvent.php",
        {
          /// tambahkan data-data yg akan disimpan
          nama      : $("#e_nama").val(),
          tanggal   : $("#e_tgl").val(),
          lokasi    : $("#e_lks").val(),
          deskripsi : $("#e_desk").val(),
          htm       : $("#e_htm").val()
        },function(respon){
          // informasikan respon balik dari server
          alert(respon);
        }
      );
    }else {
		alert("Masih ada yang kosong bro !!!");
		
	}
	
  });


});

function pindahke(esi,e,eb){
  //cek elemen saat ini (esi) tidak kosong
  var elsi = $("#"+esi).val();
    // identifikasi tombol enter
    // ( enter = 13 ansi )
    if( e.which == 13 ){
      // cegah aksi default enter
      e.preventDefault();
      // arahkan ke elemen berikut (eb)
      $("#"+eb).focus();
      // cek isi dan tidaknya
      if(elsi.length == 0){
        alert('harus isi');
        $("#"+esi).focus();
      }
    }
}

function cekform(){
  var elemenId=['#e_nama','#e_tgl','#e_lks','#e_desk','#e_htm'];
  var error = 0;
  for( var i = 0 ; i < 5 ; i++ ){
    if( $(elemenId[i]).val() == '' ){
      //alert("masih kosong");
      error +=1;
      $(elemenId[i]).focus();
      break;
    }
  }
  return error;
}
