$(document).ready( function(){
//Saat elemen id=e_id di-enter:
  $("#e_id").keypress( function(e){
    if( e.which == 13 ){
      // 1 - cari data event
      var e_id = $("#e_id").val();
      $.getJSON(
        "http://localhost/server/wisatabna/eventById.php?id="+e_id,
        function(kegiatan){
          console.log(kegiatan);
          $.each(kegiatan, function(i,data){
            // 2 - masukkan ke kolom nama, tanggal, lokasi, deskripsi, dan htm
            $("#e_nama").val(data.nama);
            $("#e_lks").val(data.lokasi);
            $("#e_tgl").val(data.tanggal);
            $("#e_desk").val(data.deskripsi);
            $("#e_htm").val(data.htm);
          });

        }
      );
    }
  });

  // saat id=updateEvent di klik
  $("#updateEvent").click(function(){
    // cek apakah ada form yang kosong
    var error = cekform();
    // jika error = 0 (semua form telah diisi)
    if( error == 0 ){
    /// kirim data dengan $.post()
      $.post(
        // beri tahu url penyimpanan data
        "http://localhost/server/wisatabna/updateEvent.php",
        {
          /// tambahkan data-data yg akan disimpan
          id      	: $("#e_id").val(),
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
	  //bersihkan form
	  $('input').val('');
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
      error +=1;
      alert("masih kosong");
      $(elemenId[i]).focus();
      break;
    }
  }
  return error;
}
