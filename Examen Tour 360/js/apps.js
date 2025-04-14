// Variables controladoras
var panorama, viewer, container, infospot;

// Obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#container_principal');

// Cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/360t8.png');



//Infospot Tv Xiaomi Centro Caracteristicas
var infospot1 = new PANOLENS.Infospot(50, "imagenes/infoico.png");
infospot1.position.set(32, -10, -500);
infospot1.addHoverText("",-100);
infospot1.element.innerHTML = 
    '<div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 25px; ' +
    'padding: 10px; font-size: 16px; width: 500px;">' + 'Pantalla Xiaomi 42 Pulgadas Ultra HD. Disfrute de'  +
    'una calidad de colores increibles, los mismos representa un total de aproximadamente 8.3 millones de píxeles. ' + '</div>';
panorama.add(infospot1);



// Crea y agrega el infospot 2 Video
var infospot2 = new PANOLENS.Infospot(60, "imagenes/videoico.png");
infospot2.position.set(-250, 80, -501);
infospot2.addHoverText('', -60); 
infospot2.element.innerHTML = `
    <div style="background-color: rgba(0, 0, 0, 0.8); border-radius: 25px; padding: 10px; width: 720px;">
        <iframe width="1236" height="695" src="https://www.youtube.com/embed/HO1otvfoHDk" title="TENGO la TV de XIAOMI... Y ESTA es MI OPINIÓN - Review 55 pulgadas 4K 4S" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;
panorama.add(infospot2);


// Infospot 3 PDF
var infospot3 = new PANOLENS.Infospot(60, 'imagenes/docico.png');
infospot3.position.set(85, -13, 500);
infospot3.addHoverText('Entrar al PDF.', -100);
infospot3.element.innerHTML = `
    <div style="background-color: rgba(0,0,0,0.8); color:#fff; border-radius: 25px; padding: 10px; font-size: 14px; width: 200px;">
    Ponemos a su alcance un documento con informacion relvante de nuestra Empresa. 
    <a href="pdf/pdftour360.pdf" target="_blank" style="color: #00ffff; text-decoration: underline;">Abrir PDF</a>
  </div>`;
panorama.add(infospot3);



// Infospot 4 Impresora
var infospot4 = new PANOLENS.Infospot(60, 'imagenes/impico.png');
infospot4.position.set(-500, 0, 38);
infospot4.addHoverText('', -200);
infospot4.element.innerHTML = `
    <div style="background-color: rgb(10, 78, 7); color:#fff; border-radius: 25px; padding: 10px; font-size: 14px; width: 250px;">
        ¡Optimiza tu oficina con la Ricoh Aficio MP C4503! Esta impresora multifuncional imprime, copia, escanea y envía faxes con rapidez y calidad excepcional.<br><br>
        <img src="imagenes/gif1.gif" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
        <br><br>
    </div>`;
panorama.add(infospot4);



// Infospot 5 Audio
var infospot5 = new PANOLENS.Infospot(50, "imagenes/audioico.png");
infospot5.position.set(499, -277, 108);
infospot5.addHoverText('', -60);
infospot5.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/360mp3.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot5);

 
// Crea y agrega el promospot1
var promospot1 = new PANOLENS.Infospot(50, 'imagenes/promoico.png');
promospot1.position.set(263, 65, -500);
promospot1.addHoverText('', -120);
promospot1.element.innerHTML = 
  '<div style="background-color: transparent;">' + 
  '<img src="imagenes/xiaomi499.png" style="max-width: 250px; height: auto;"></div>';
panorama.add(promospot1);


// Agrega la panorámica al visor con pantalla completa habilitada
viewer = new PANOLENS.Viewer({
    container: container,
    output: 'fullscreen', // Habilita salida en pantalla completa
    autoHideInfospot: false
});

viewer.add(panorama);