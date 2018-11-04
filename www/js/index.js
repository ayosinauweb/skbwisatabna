$(document).ready(function(){
	/* memberi tahu saat button di klik */
	$("button").click( function(){
		/* ambil data dari http://localhost/server/wisatabna/daftarEvent.php 
		 * dengan mekanisme getJSON()*/
		 
		 $.getJSON(
			'http://localhost/server/wisatabna/daftarEvent.php',
			function(dftEvent){
				/*div id='dftEvent' dikosongkan*/
				$("#dftEvent").html('');
				/*Baca satu persatu dftEvent*/
				$.each(dftEvent, function(i,data){
					/*pecah data.tanggal berdasar -*/
					var tgl=data.tanggal;
					var tg = tgl.split('-');
					/* tata ulang format tanggal */
					/* tg[0] = tahun, tg[1] = bulan, tg[2] = hari */
					var tge = tg[2]+'/'+tg[1]+'/'+tg[0];
				  	/*tampilkan/tambahkan data ke dalam div id='dftEvent'*/
				  	$("#dftEvent").append(
				  	"<table class='tblEvent'>"+
				  	"<tr><td colspan='2' class='nmEvent' >"+data.nama+"</td></tr>"+
				  	"<tr><td colspan='2' class='dsEvent'>"+data.deskripsi+"</td></tr>"+
				  	"<tr>"+
				  	"<td class='tgEvent'>Tgl: "+tge+"</td>"+
				  	"<td class='tkEvent'>Htm: "+parseInt(data.htm).toLocaleString('id-ID')+"</td>"+
				  	"</tr>"+
				  	"<tr><td colspan='2' class='lkEvent'>"+data.lokasi+"</td></tr>"+
				  	"</table>"
				  	);
				});
			}
		 );
	});
	
	$("#cariEvent").keyup( function(){
		// tangkap nama event dari input box
		var ne = $(this).val();
		$.getJSON(
			'http://localhost/server/wisatabna/cariEvent.php?ne='+ne,
			function(dftEvent){
				/*div id='dftEvent' dikosongkan*/
				$("#dftEvent").html('');
				/*Baca satu persatu dftEvent*/
				$.each(dftEvent, function(i,data){
					/*pecah data.tanggal berdasar -*/
					var tgl=data.tanggal;
					var tg = tgl.split('-');
					/* tata ulang format tanggal */
					/* tg[0] = tahun, tg[1] = bulan, tg[2] = hari */
					var tge = tg[2]+'/'+tg[1]+'/'+tg[0];
				  	/*tampilkan/tambahkan data ke dalam div id='dftEvent'*/
				  	$("#dftEvent").append(
				  	"<table class='tblEvent'>"+
				  	"<tr><td colspan='2' class='nmEvent' >"+data.nama+"</td></tr>"+
				  	"<tr><td colspan='2' class='dsEvent'>"+data.deskripsi+"</td></tr>"+
				  	"<tr>"+
				  	"<td class='tgEvent'>Tgl: "+tge+"</td>"+
				  	"<td class='tkEvent'>Htm: "+parseInt(data.htm).toLocaleString('id-ID')+"</td>"+
				  	"</tr>"+
				  	"<tr><td colspan='2' class='lkEvent'>"+data.lokasi+"</td></tr>"+
				  	"</table>"
				  	);
				});
			}
		 );
	});
});

