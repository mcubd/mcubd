 function me() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", 'https://mcubd.vercel.app/', true);
  xhttp.setRequestHeader('reqs', 'fb')
  

  window.open('https://mcubd.vercel.app/about.html', '_self') 
  // window.open('https://www.facebook.com/zafar.niloy', '_self')


}


function ph(url){
  document.body.insertAdjacentHTML("beforeend", '<div id="loading" class="loader"></div>');


  let xhttp = new XMLHttpRequest();
  xhttp.open("POST", 'https://nodebd.vercel.app/uri', true);

  xhttp.onreadystatechange = function () {
      if (xhttp.readyState === XMLHttpRequest.DONE) {
          if (xhttp.status === 200) {
              const responseData =  xhttp.responseText ;
              if(responseData[0]=='h'){
                
                
                document.getElementById('loading').style.display ="none" 
                window.open(responseData,'_self')
              } else{window.location.reload();}

          } else {
              console.error('Error sending POST request:', xhttp.statusText);
              window.location.reload();
          }
      }
  };

  xhttp.send(JSON.stringify({ "a":url}));


}

var info
if (navigator.deviceMemory) {
  info = navigator.deviceMemory + 'gb-h' + screen.height + 'x' + screen.width
} else {
  info = screen.height + 'x' + screen.width
}

function mcus() {


}

function mcu() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", 'https://nodebd.vercel.app/', true);
  xhttp.setRequestHeader('reqs', 'Mcu-but-' + info)
  

 // window.open("https://mcubd2.web.app/", '_self')
}

function home() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", 'https://nodebd.vercel.app/', true);
  xhttp.setRequestHeader('reqs', 'mcu-logo-' + info)
  


  window.open("https://mcubd2.web.app/", '_self')
}

function mar() {


}

function other() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", 'https://nodebd.vercel.app/', true);
  xhttp.setRequestHeader('reqs', 'other-' + info)
  


  window.open("https://mcubd2.web.app/", '_self')
}





function seris(bname, bimg, videolink, size, type,server) {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var g = w * .3939


  var chidiv = document.createElement("div");
  var iiidiv = document.createElement("div");
  var links = document.createElement("div");
  links.innerText = JSON.stringify(videolink)
  links.classList.add('link')
  links.style.cssText = 'display:none'
  var p = document.createElement("p");
  p.innerText = bname
  var image = document.createElement("img");

  chidiv.classList.add('chi');
  iiidiv.classList.add('iii');
  image.src = 'https://mcubd.github.io/mcubd/logoimg/' + bimg + '.jpg'

  iiidiv.append(image)
  chidiv.append(iiidiv, p, links)
  var con = document.getElementById('cont')
  con.appendChild(chidiv)

  if (h - w < 0) {
      chidiv.style.backgroundColor = '#000000';
      chidiv.style.padding = '0px'
      chidiv.style.marginTop = '14px'
      chidiv.style.float = 'left'
      chidiv.style.height = h * .9 + 'px'
      chidiv.style.width = g * .6 + 'px'

      image.style.width = g * .6 + 'px'

      iiidiv.style.height = h * .7 + 'px'
      iiidiv.style.overflow = 'hidden'

  }
  else {
      chidiv.style.backgroundColor = '#000000';
      chidiv.style.padding = '0px'
      chidiv.style.marginTop = '14px'
      chidiv.style.float = 'left'
      chidiv.style.height = h * .55 + 'px'
      chidiv.style.width = g + 'px'

      image.style.width = g + 'px'

      iiidiv.style.height = h * .4 + 'px'
      iiidiv.style.overflow = 'hidden'

  }

  chidiv.onclick = () => {
      var con = document.getElementById('cont')
      con.style.display = 'none';




      var xhttp = new XMLHttpRequest();
      xhttp.open("POST", 'https://nodebd.vercel.app/', true);
      xhttp.setRequestHeader('reqs', bimg)
      

      // ------------------------------------------




      if ('kk' == 'kk') {


          var e1 = document.createElement("button");
          var e2 = document.createElement("button");
          var e3 = document.createElement("button");
          var e4 = document.createElement("button");
          var e5 = document.createElement("button");
          var e6 = document.createElement("button");
          var e7 = document.createElement("button");
          var e8 = document.createElement("button");
          var e9 = document.createElement("button");
          var e10 = document.createElement("button");
          var e11 = document.createElement("button");
          var e12 = document.createElement("button");
          var e13 = document.createElement("button");
          var e14 = document.createElement("button");
          var e15 = document.createElement("button");
          var e16 = document.createElement("button");
          var e17 = document.createElement("button");
          var e18 = document.createElement("button");
          var e19 = document.createElement("button");
          var e20 = document.createElement("button");




          
          if (type == 'mv') { e1.innerText = size;e1.style.padding = '32px';
          e1.style.marginTop = '50%'
           } else { e1.innerText = 'Episode 1';
           e1.style.padding = '12px'}
          e2.innerText = 'Episode 2'
          e3.innerText = 'Episode 3'
          e4.innerText = 'Episode 4'
          e5.innerText = 'Episode 5'
          e6.innerText = 'Episode 6'
          e7.innerText = 'Episode 7'
          e8.innerText = 'Episode 8'
          e9.innerText = 'Episode 9'
          e10.innerText = 'Episode 10'
          e11.innerText = 'Episode 11'
          e12.innerText = 'Episode 12'
          e13.innerText = 'Episode 13'
          e14.innerText = 'Episode 14'
          e15.innerText = 'Episode 15'
          e16.innerText = 'Episode 16'
          e17.innerText = 'Episode 17'
          e18.innerText = 'Episode 18'
          e19.innerText = 'Episode 19'
          e20.innerText = 'Episode 20'






          e1.style.display = 'block'
          e2.style.display = 'block'
          e3.style.display = 'block'
          e4.style.display = 'block'
          e5.style.display = 'block'
          e6.style.display = 'block'
          e7.style.display = 'block'
          e8.style.display = 'block'
          e9.style.display = 'block'
          e10.style.display = 'block'
          e11.style.display = 'block'
          e12.style.display = 'block'
          e13.style.display = 'block'
          e14.style.display = 'block'
          e15.style.display = 'block'
          e16.style.display = 'block'
          e17.style.display = 'block'
          e18.style.display = 'block'
          e19.style.display = 'block'
          e20.style.display = 'block'



          e1.style.width = '100%'
          e2.style.width = '100%'
          e3.style.width = '100%'
          e4.style.width = '100%'
          e5.style.width = '100%'
          e6.style.width = '100%'
          e7.style.width = '100%'
          e8.style.width = '100%'
          e9.style.width = '100%'
          e10.style.width = '100%'
          e11.style.width = '100%'
          e12.style.width = '100%'
          e13.style.width = '100%'
          e14.style.width = '100%'
          e15.style.width = '100%'
          e16.style.width = '100%'
          e17.style.width = '100%'
          e18.style.width = '100%'
          e19.style.width = '100%'
          e20.style.width = '100%'



          e2.style.padding = '12px'
          e3.style.padding = '12px'
          e4.style.padding = '12px'
          e5.style.padding = '12px'
          e6.style.padding = '12px'
          e7.style.padding = '12px'
          e8.style.padding = '12px'
          e9.style.padding = '12px'
          e10.style.padding = '12px'
          e11.style.padding = '12px'
          e12.style.padding = '12px'
          e13.style.padding = '12px'
          e14.style.padding = '12px'
          e15.style.padding = '12px'
          e16.style.padding = '12px'
          e17.style.padding = '12px'
          e18.style.padding = '12px'
          e19.style.padding = '12px'
          e20.style.padding = '12px'





          e1.style.marginBottom = '10px'
          e2.style.marginBottom = '10px'
          e3.style.marginBottom = '10px'
          e4.style.marginBottom = '10px'
          e5.style.marginBottom = '10px'
          e6.style.marginBottom = '10px'
          e7.style.marginBottom = '10px'
          e8.style.marginBottom = '10px'
          e9.style.marginBottom = '10px'
          e10.style.marginBottom = '10px'
          e11.style.marginBottom = '10px'
          e12.style.marginBottom = '10px'
          e13.style.marginBottom = '10px'
          e14.style.marginBottom = '10px'
          e15.style.marginBottom = '10px'
          e16.style.marginBottom = '10px'
          e17.style.marginBottom = '10px'
          e18.style.marginBottom = '10px'
          e19.style.marginBottom = '10px'
          e20.style.marginBottom = '10px'




          var count = videolink.length


          if (count == 0) {
          } else if (count == 1) {
              document.body.append(e1)
          } else if (count == 2) {
              document.body.append(e1, e2)
          } else if (count == 3) {
              document.body.append(e1, e2, e3)
          } else if (count == 4) {
              document.body.append(e1, e2, e3, e4)
          } else if (count == 5) {
              document.body.append(e1, e2, e3, e4, e5)
          } else if (count == 6) {
              document.body.append(e1, e2, e3, e4, e5, e6)
          } else if (count == 7) {
              document.body.append(e1, e2, e3, e4, e5, e6, e7)
          } else if (count == 8) {
              document.body.append(e1, e2, e3, e4, e5, e6, e7, e8)
          } else if (count == 9) {
              document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9)
          } else if (count == 10) {
              document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10)

          } else if (count == 11) {
              document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11)

          } else if (count == 12) {
              document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12)

          } else if (count == 13) {
              document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13)

          } else if (count == 14) {
              document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14)

          } else if (count == 15) {
              document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15)

          } else if (count == 16) {
              document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16)

          } else if (count == 17) {
              document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17)

          } else if (count == 18) {
              document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18)

          } else if (count == 19) {
              document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19)

          } else if (count == 20) {
              document.body.append(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20)

          } else {

          }
      }



      e1.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()



          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          if (type == 'mv') { 
              onli.style.marginTop = '30%'

           } else {

           }

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)

          


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[0]

              video.append(source)
              document.body.append(video)



              sig(bimg + '-ep-1', '9000', '9s')
              sig(bimg + '-ep-1', '20000', '20s')
              sig(bimg + '-ep-1', '40000', '40s')
              sig(bimg + '-ep-1', '120000', '2m')
              sig(bimg + '-ep-1', '300000', '5m')
              sig(bimg + '-ep-1', '900000', '15m')
              sig(bimg + '-ep-1', '1200000', '20m')
              sig(bimg + '-ep-1', '1800000', '30m')
              sig(bimg + '-ep-1', '2400000', '40m')
              sig(bimg + '-ep-1', '3000000', '50m')
              sig(bimg + '-ep-1', '3600000', '1h')
              sig(bimg + '-ep-1', '4200000', '1h-10m')
              sig(bimg + '-ep-1', '4800000', '1h-20m')
              sig(bimg + '-ep-1', '5400000', '1h-30m')
              sig(bimg + '-ep-1', '6000000', '1h-40m')
              sig(bimg + '-ep-1', '6600000', '1h-50m')
              sig(bimg + '-ep-1', '7200000', '2h')
              sig(bimg + '-ep-1', '7500000', '2h-5m')
              sig(bimg + '-ep-1', '7800000', '2h-10m')
              sig(bimg + '-ep-1', '8100000', '2h-15m')
              sig(bimg + '-ep-1', '8400000', '2h-20m')
              sig(bimg + '-ep-1', '8700000', '2h-25m')
              sig(bimg + '-ep-1', '9000000', '2h-30m')
              sig(bimg + '-ep-1', '9300000', '2h-35m')
              sig(bimg + '-ep-1', '9600000', '2h-40m')



          }

          console.log(66)

          down.onclick = function () {
            console.log(server)
            if(server=='ph'){
              console.log(99)
              ph(videolink[0])
            }else{
              window.open(videolink[0], '_self')
            }

          }



      }
      e2.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[1]

              video.append(source)
              document.body.append(video)


              sig(bimg + '-ep-2', '9000', '9s')
              sig(bimg + '-ep-2', '20000', '20s')
              sig(bimg + '-ep-2', '40000', '40s')
              sig(bimg + '-ep-2', '120000', '2m')
              sig(bimg + '-ep-2', '300000', '5m')
              sig(bimg + '-ep-2', '900000', '15m')
              sig(bimg + '-ep-2', '1200000', '20m')
              sig(bimg + '-ep-2', '1800000', '30m')
              sig(bimg + '-ep-2', '2400000', '40m')
              sig(bimg + '-ep-2', '3000000', '50m')
              sig(bimg + '-ep-2', '3600000', '1h')
              sig(bimg + '-ep-2', '4200000', '1h-10m')
              sig(bimg + '-ep-2', '4800000', '1h-20m')
              sig(bimg + '-ep-2', '5400000', '1h-30m')
              sig(bimg + '-ep-2', '6000000', '1h-40m')
              sig(bimg + '-ep-2', '6600000', '1h-50m')
              sig(bimg + '-ep-2', '7200000', '2h')
              sig(bimg + '-ep-2', '7500000', '2h-5m')
              sig(bimg + '-ep-2', '7800000', '2h-10m')
              sig(bimg + '-ep-2', '8100000', '2h-15m')
              sig(bimg + '-ep-2', '8400000', '2h-20m')
              sig(bimg + '-ep-2', '8700000', '2h-25m')
              sig(bimg + '-ep-2', '9000000', '2h-30m')
              sig(bimg + '-ep-2', '9300000', '2h-35m')
              sig(bimg + '-ep-2', '9600000', '2h-40m')

          }


          console.log(66)

          down.onclick = function () {
            console.log(88)
            console.log(server)
            if(server=='ph'){
              console.log(99)
              ph(videolink[1])
            }else{
              window.open(videolink[1], '_self')
            }

          }



      }
      e3.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[2]

              video.append(source)
              document.body.append(video)


              sig(bimg + '-ep-3', '9000', '9s')
              sig(bimg + '-ep-3', '20000', '20s')
              sig(bimg + '-ep-3', '40000', '40s')
              sig(bimg + '-ep-3', '120000', '2m')
              sig(bimg + '-ep-3', '300000', '5m')
              sig(bimg + '-ep-3', '900000', '15m')
              sig(bimg + '-ep-3', '1200000', '20m')
              sig(bimg + '-ep-3', '1800000', '30m')
              sig(bimg + '-ep-3', '2400000', '40m')
              sig(bimg + '-ep-3', '3000000', '50m')
              sig(bimg + '-ep-3', '3600000', '1h')
              sig(bimg + '-ep-3', '4200000', '1h-10m')
              sig(bimg + '-ep-3', '4800000', '1h-20m')
              sig(bimg + '-ep-3', '5400000', '1h-30m')
              sig(bimg + '-ep-3', '6000000', '1h-40m')
              sig(bimg + '-ep-3', '6600000', '1h-50m')
              sig(bimg + '-ep-3', '7200000', '2h')
              sig(bimg + '-ep-3', '7500000', '2h-5m')
              sig(bimg + '-ep-3', '7800000', '2h-10m')
              sig(bimg + '-ep-3', '8100000', '2h-15m')
              sig(bimg + '-ep-3', '8400000', '2h-20m')
              sig(bimg + '-ep-3', '8700000', '2h-25m')
              sig(bimg + '-ep-3', '9000000', '2h-30m')
              sig(bimg + '-ep-3', '9300000', '2h-35m')
              sig(bimg + '-ep-3', '9600000', '2h-40m')



          }

          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[2])
            }else{
              window.open(videolink[2], '_self')
            }

          }



      }
      e4.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[3]

              video.append(source)
              document.body.append(video)


              sig(bimg + '-ep-4', '9000', '9s')
              sig(bimg + '-ep-4', '20000', '20s')
              sig(bimg + '-ep-4', '40000', '40s')
              sig(bimg + '-ep-4', '120000', '2m')
              sig(bimg + '-ep-4', '300000', '5m')
              sig(bimg + '-ep-4', '900000', '15m')
              sig(bimg + '-ep-4', '1200000', '20m')
              sig(bimg + '-ep-4', '1800000', '30m')
              sig(bimg + '-ep-4', '2400000', '40m')
              sig(bimg + '-ep-4', '3000000', '50m')
              sig(bimg + '-ep-4', '3600000', '1h')
              sig(bimg + '-ep-4', '4200000', '1h-10m')
              sig(bimg + '-ep-4', '4800000', '1h-20m')
              sig(bimg + '-ep-4', '5400000', '1h-30m')
              sig(bimg + '-ep-4', '6000000', '1h-40m')
              sig(bimg + '-ep-4', '6600000', '1h-50m')
              sig(bimg + '-ep-4', '7200000', '2h')
              sig(bimg + '-ep-4', '7500000', '2h-5m')
              sig(bimg + '-ep-4', '7800000', '2h-10m')
              sig(bimg + '-ep-4', '8100000', '2h-15m')
              sig(bimg + '-ep-4', '8400000', '2h-20m')
              sig(bimg + '-ep-4', '8700000', '2h-25m')
              sig(bimg + '-ep-4', '9000000', '2h-30m')
              sig(bimg + '-ep-4', '9300000', '2h-35m')
              sig(bimg + '-ep-4', '9600000', '2h-40m')



          }

          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[3])
            }else{
              window.open(videolink[3], '_self')
            }

          }



      }
      e5.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[4]

              video.append(source)
              document.body.append(video)


              sig(bimg + '-ep-5', '9000', '9s')
              sig(bimg + '-ep-5', '20000', '20s')
              sig(bimg + '-ep-5', '40000', '40s')
              sig(bimg + '-ep-5', '120000', '2m')
              sig(bimg + '-ep-5', '300000', '5m')
              sig(bimg + '-ep-5', '900000', '15m')
              sig(bimg + '-ep-5', '1200000', '20m')
              sig(bimg + '-ep-5', '1800000', '30m')
              sig(bimg + '-ep-5', '2400000', '40m')
              sig(bimg + '-ep-5', '3000000', '50m')
              sig(bimg + '-ep-5', '3600000', '1h')
              sig(bimg + '-ep-5', '4200000', '1h-10m')
              sig(bimg + '-ep-5', '4800000', '1h-20m')
              sig(bimg + '-ep-5', '5400000', '1h-30m')
              sig(bimg + '-ep-5', '6000000', '1h-40m')
              sig(bimg + '-ep-5', '6600000', '1h-50m')
              sig(bimg + '-ep-5', '7200000', '2h')
              sig(bimg + '-ep-5', '7500000', '2h-5m')
              sig(bimg + '-ep-5', '7800000', '2h-10m')
              sig(bimg + '-ep-5', '8100000', '2h-15m')
              sig(bimg + '-ep-5', '8400000', '2h-20m')
              sig(bimg + '-ep-5', '8700000', '2h-25m')
              sig(bimg + '-ep-5', '9000000', '2h-30m')
              sig(bimg + '-ep-5', '9300000', '2h-35m')
              sig(bimg + '-ep-5', '9600000', '2h-40m')

          }

          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[4])
            }else{
              window.open(videolink[4], '_self')
            }

          }



      }
      e6.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[5]

              video.append(source)
              document.body.append(video)

              sig(bimg + '-ep-6', '9000', '9s')
              sig(bimg + '-ep-6', '20000', '20s')
              sig(bimg + '-ep-6', '40000', '40s')
              sig(bimg + '-ep-6', '120000', '2m')
              sig(bimg + '-ep-6', '300000', '5m')
              sig(bimg + '-ep-6', '900000', '15m')
              sig(bimg + '-ep-6', '1200000', '20m')
              sig(bimg + '-ep-6', '1800000', '30m')
              sig(bimg + '-ep-6', '2400000', '40m')
              sig(bimg + '-ep-6', '3000000', '50m')
              sig(bimg + '-ep-6', '3600000', '1h')
              sig(bimg + '-ep-6', '4200000', '1h-10m')
              sig(bimg + '-ep-6', '4800000', '1h-20m')
              sig(bimg + '-ep-6', '5400000', '1h-30m')
              sig(bimg + '-ep-6', '6000000', '1h-40m')
              sig(bimg + '-ep-6', '6600000', '1h-50m')
              sig(bimg + '-ep-6', '7200000', '2h')
              sig(bimg + '-ep-6', '7500000', '2h-5m')
              sig(bimg + '-ep-6', '7800000', '2h-10m')
              sig(bimg + '-ep-6', '8100000', '2h-15m')
              sig(bimg + '-ep-6', '8400000', '2h-20m')
              sig(bimg + '-ep-6', '8700000', '2h-25m')
              sig(bimg + '-ep-6', '9000000', '2h-30m')
              sig(bimg + '-ep-6', '9300000', '2h-35m')
              sig(bimg + '-ep-6', '9600000', '2h-40m')



          }

          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[5])
            }else{
              window.open(videolink[5], '_self')
            }

          }



      }

      e7.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[6]

              video.append(source)
              document.body.append(video)


              sig(bimg + '-ep-7', '9000', '9s')
              sig(bimg + '-ep-7', '20000', '20s')
              sig(bimg + '-ep-7', '40000', '40s')
              sig(bimg + '-ep-7', '120000', '2m')
              sig(bimg + '-ep-7', '300000', '5m')
              sig(bimg + '-ep-7', '900000', '15m')
              sig(bimg + '-ep-7', '1200000', '20m')
              sig(bimg + '-ep-7', '1800000', '30m')
              sig(bimg + '-ep-7', '2400000', '40m')
              sig(bimg + '-ep-7', '3000000', '50m')
              sig(bimg + '-ep-7', '3600000', '1h')
              sig(bimg + '-ep-7', '4200000', '1h-10m')
              sig(bimg + '-ep-7', '4800000', '1h-20m')
              sig(bimg + '-ep-7', '5400000', '1h-30m')
              sig(bimg + '-ep-7', '6000000', '1h-40m')
              sig(bimg + '-ep-7', '6600000', '1h-50m')
              sig(bimg + '-ep-7', '7200000', '2h')
              sig(bimg + '-ep-7', '7500000', '2h-5m')
              sig(bimg + '-ep-7', '7800000', '2h-10m')
              sig(bimg + '-ep-7', '8100000', '2h-15m')
              sig(bimg + '-ep-7', '8400000', '2h-20m')
              sig(bimg + '-ep-7', '8700000', '2h-25m')
              sig(bimg + '-ep-7', '9000000', '2h-30m')
              sig(bimg + '-ep-7', '9300000', '2h-35m')
              sig(bimg + '-ep-7', '9600000', '2h-40m')



          }

          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[6])
            }else{
              window.open(videolink[6], '_self')
            }

          }



      }
      e8.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[7]

              video.append(source)
              document.body.append(video)



              sig(bimg + '-ep-8', '9000', '9s')
              sig(bimg + '-ep-8', '20000', '20s')
              sig(bimg + '-ep-8', '40000', '40s')
              sig(bimg + '-ep-8', '120000', '2m')
              sig(bimg + '-ep-8', '300000', '5m')
              sig(bimg + '-ep-8', '900000', '15m')
              sig(bimg + '-ep-8', '1200000', '20m')
              sig(bimg + '-ep-8', '1800000', '30m')
              sig(bimg + '-ep-8', '2400000', '40m')
              sig(bimg + '-ep-8', '3000000', '50m')
              sig(bimg + '-ep-8', '3600000', '1h')
              sig(bimg + '-ep-8', '4200000', '1h-10m')
              sig(bimg + '-ep-8', '4800000', '1h-20m')
              sig(bimg + '-ep-8', '5400000', '1h-30m')
              sig(bimg + '-ep-8', '6000000', '1h-40m')
              sig(bimg + '-ep-8', '6600000', '1h-50m')
              sig(bimg + '-ep-8', '7200000', '2h')
              sig(bimg + '-ep-8', '7500000', '2h-5m')
              sig(bimg + '-ep-8', '7800000', '2h-10m')
              sig(bimg + '-ep-8', '8100000', '2h-15m')
              sig(bimg + '-ep-8', '8400000', '2h-20m')
              sig(bimg + '-ep-8', '8700000', '2h-25m')
              sig(bimg + '-ep-8', '9000000', '2h-30m')
              sig(bimg + '-ep-8', '9300000', '2h-35m')
              sig(bimg + '-ep-8', '9600000', '2h-40m')

          }

          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[7])
            }else{
              window.open(videolink[7], '_self')
            }

          }



      }
      e9.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[8]

              video.append(source)
              document.body.append(video)


              sig(bimg + '-ep-9', '9000', '9s')
              sig(bimg + '-ep-9', '20000', '20s')
              sig(bimg + '-ep-9', '40000', '40s')
              sig(bimg + '-ep-9', '120000', '2m')
              sig(bimg + '-ep-9', '300000', '5m')
              sig(bimg + '-ep-9', '900000', '15m')
              sig(bimg + '-ep-9', '1200000', '20m')
              sig(bimg + '-ep-9', '1800000', '30m')
              sig(bimg + '-ep-9', '2400000', '40m')
              sig(bimg + '-ep-9', '3000000', '50m')
              sig(bimg + '-ep-9', '3600000', '1h')
              sig(bimg + '-ep-9', '4200000', '1h-10m')
              sig(bimg + '-ep-9', '4800000', '1h-20m')
              sig(bimg + '-ep-9', '5400000', '1h-30m')
              sig(bimg + '-ep-9', '6000000', '1h-40m')
              sig(bimg + '-ep-9', '6600000', '1h-50m')
              sig(bimg + '-ep-9', '7200000', '2h')
              sig(bimg + '-ep-9', '7500000', '2h-5m')
              sig(bimg + '-ep-9', '7800000', '2h-10m')
              sig(bimg + '-ep-9', '8100000', '2h-15m')
              sig(bimg + '-ep-9', '8400000', '2h-20m')
              sig(bimg + '-ep-9', '8700000', '2h-25m')
              sig(bimg + '-ep-9', '9000000', '2h-30m')
              sig(bimg + '-ep-9', '9300000', '2h-35m')
              sig(bimg + '-ep-9', '9600000', '2h-40m')



          }


          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[8])
            }else{
              window.open(videolink[8], '_self')
            }

          }



      }
      e10.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[9]

              video.append(source)
              document.body.append(video)



              sig(bimg + '-ep-10', '9000', '9s')
              sig(bimg + '-ep-10', '20000', '20s')
              sig(bimg + '-ep-10', '40000', '40s')
              sig(bimg + '-ep-10', '120000', '2m')
              sig(bimg + '-ep-10', '300000', '5m')
              sig(bimg + '-ep-10', '900000', '15m')
              sig(bimg + '-ep-10', '1200000', '20m')
              sig(bimg + '-ep-10', '1800000', '30m')
              sig(bimg + '-ep-10', '2400000', '40m')
              sig(bimg + '-ep-10', '3000000', '50m')
              sig(bimg + '-ep-10', '3600000', '1h')
              sig(bimg + '-ep-10', '4200000', '1h-10m')
              sig(bimg + '-ep-10', '4800000', '1h-20m')
              sig(bimg + '-ep-10', '5400000', '1h-30m')
              sig(bimg + '-ep-10', '6000000', '1h-40m')
              sig(bimg + '-ep-10', '6600000', '1h-50m')
              sig(bimg + '-ep-10', '7200000', '2h')
              sig(bimg + '-ep-10', '7500000', '2h-5m')
              sig(bimg + '-ep-10', '7800000', '2h-10m')
              sig(bimg + '-ep-10', '8100000', '2h-15m')
              sig(bimg + '-ep-10', '8400000', '2h-20m')
              sig(bimg + '-ep-10', '8700000', '2h-25m')
              sig(bimg + '-ep-10', '9000000', '2h-30m')
              sig(bimg + '-ep-10', '9300000', '2h-35m')
              sig(bimg + '-ep-10', '9600000', '2h-40m')

          }


          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[9])
            }else{
              window.open(videolink[9], '_self')
            }

          }



      }
      e11.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[10]

              video.append(source)
              document.body.append(video)



              sig(bimg + '-ep-10', '9000', '9s')
              sig(bimg + '-ep-10', '20000', '20s')
              sig(bimg + '-ep-10', '40000', '40s')
              sig(bimg + '-ep-10', '120000', '2m')
              sig(bimg + '-ep-10', '300000', '5m')
              sig(bimg + '-ep-10', '900000', '15m')
              sig(bimg + '-ep-10', '1200000', '20m')
              sig(bimg + '-ep-10', '1800000', '30m')
              sig(bimg + '-ep-10', '2400000', '40m')
              sig(bimg + '-ep-10', '3000000', '50m')
              sig(bimg + '-ep-10', '3600000', '1h')
              sig(bimg + '-ep-10', '4200000', '1h-10m')
              sig(bimg + '-ep-10', '4800000', '1h-20m')
              sig(bimg + '-ep-10', '5400000', '1h-30m')
              sig(bimg + '-ep-10', '6000000', '1h-40m')
              sig(bimg + '-ep-10', '6600000', '1h-50m')
              sig(bimg + '-ep-10', '7200000', '2h')
              sig(bimg + '-ep-10', '7500000', '2h-5m')
              sig(bimg + '-ep-10', '7800000', '2h-10m')
              sig(bimg + '-ep-10', '8100000', '2h-15m')
              sig(bimg + '-ep-10', '8400000', '2h-20m')
              sig(bimg + '-ep-10', '8700000', '2h-25m')
              sig(bimg + '-ep-10', '9000000', '2h-30m')
              sig(bimg + '-ep-10', '9300000', '2h-35m')
              sig(bimg + '-ep-10', '9600000', '2h-40m')

          }


          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[10])
            }else{
              window.open(videolink[10], '_self')
            }

          }



      }
      e12.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[11]

              video.append(source)
              document.body.append(video)



              sig(bimg + '-ep-10', '9000', '9s')
              sig(bimg + '-ep-10', '20000', '20s')
              sig(bimg + '-ep-10', '40000', '40s')
              sig(bimg + '-ep-10', '120000', '2m')
              sig(bimg + '-ep-10', '300000', '5m')
              sig(bimg + '-ep-10', '900000', '15m')
              sig(bimg + '-ep-10', '1200000', '20m')
              sig(bimg + '-ep-10', '1800000', '30m')
              sig(bimg + '-ep-10', '2400000', '40m')
              sig(bimg + '-ep-10', '3000000', '50m')
              sig(bimg + '-ep-10', '3600000', '1h')
              sig(bimg + '-ep-10', '4200000', '1h-10m')
              sig(bimg + '-ep-10', '4800000', '1h-20m')
              sig(bimg + '-ep-10', '5400000', '1h-30m')
              sig(bimg + '-ep-10', '6000000', '1h-40m')
              sig(bimg + '-ep-10', '6600000', '1h-50m')
              sig(bimg + '-ep-10', '7200000', '2h')
              sig(bimg + '-ep-10', '7500000', '2h-5m')
              sig(bimg + '-ep-10', '7800000', '2h-10m')
              sig(bimg + '-ep-10', '8100000', '2h-15m')
              sig(bimg + '-ep-10', '8400000', '2h-20m')
              sig(bimg + '-ep-10', '8700000', '2h-25m')
              sig(bimg + '-ep-10', '9000000', '2h-30m')
              sig(bimg + '-ep-10', '9300000', '2h-35m')
              sig(bimg + '-ep-10', '9600000', '2h-40m')

          }


          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[11])
            }else{
              window.open(videolink[11], '_self')
            }

          }



      }
      e13.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[12]

              video.append(source)
              document.body.append(video)



              sig(bimg + '-ep-10', '9000', '9s')
              sig(bimg + '-ep-10', '20000', '20s')
              sig(bimg + '-ep-10', '40000', '40s')
              sig(bimg + '-ep-10', '120000', '2m')
              sig(bimg + '-ep-10', '300000', '5m')
              sig(bimg + '-ep-10', '900000', '15m')
              sig(bimg + '-ep-10', '1200000', '20m')
              sig(bimg + '-ep-10', '1800000', '30m')
              sig(bimg + '-ep-10', '2400000', '40m')
              sig(bimg + '-ep-10', '3000000', '50m')
              sig(bimg + '-ep-10', '3600000', '1h')
              sig(bimg + '-ep-10', '4200000', '1h-10m')
              sig(bimg + '-ep-10', '4800000', '1h-20m')
              sig(bimg + '-ep-10', '5400000', '1h-30m')
              sig(bimg + '-ep-10', '6000000', '1h-40m')
              sig(bimg + '-ep-10', '6600000', '1h-50m')
              sig(bimg + '-ep-10', '7200000', '2h')
              sig(bimg + '-ep-10', '7500000', '2h-5m')
              sig(bimg + '-ep-10', '7800000', '2h-10m')
              sig(bimg + '-ep-10', '8100000', '2h-15m')
              sig(bimg + '-ep-10', '8400000', '2h-20m')
              sig(bimg + '-ep-10', '8700000', '2h-25m')
              sig(bimg + '-ep-10', '9000000', '2h-30m')
              sig(bimg + '-ep-10', '9300000', '2h-35m')
              sig(bimg + '-ep-10', '9600000', '2h-40m')

          }


          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[12])
            }else{
              window.open(videolink[12], '_self')
            }

          }



      }
      e14.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[13]

              video.append(source)
              document.body.append(video)



              sig(bimg + '-ep-10', '9000', '9s')
              sig(bimg + '-ep-10', '20000', '20s')
              sig(bimg + '-ep-10', '40000', '40s')
              sig(bimg + '-ep-10', '120000', '2m')
              sig(bimg + '-ep-10', '300000', '5m')
              sig(bimg + '-ep-10', '900000', '15m')
              sig(bimg + '-ep-10', '1200000', '20m')
              sig(bimg + '-ep-10', '1800000', '30m')
              sig(bimg + '-ep-10', '2400000', '40m')
              sig(bimg + '-ep-10', '3000000', '50m')
              sig(bimg + '-ep-10', '3600000', '1h')
              sig(bimg + '-ep-10', '4200000', '1h-10m')
              sig(bimg + '-ep-10', '4800000', '1h-20m')
              sig(bimg + '-ep-10', '5400000', '1h-30m')
              sig(bimg + '-ep-10', '6000000', '1h-40m')
              sig(bimg + '-ep-10', '6600000', '1h-50m')
              sig(bimg + '-ep-10', '7200000', '2h')
              sig(bimg + '-ep-10', '7500000', '2h-5m')
              sig(bimg + '-ep-10', '7800000', '2h-10m')
              sig(bimg + '-ep-10', '8100000', '2h-15m')
              sig(bimg + '-ep-10', '8400000', '2h-20m')
              sig(bimg + '-ep-10', '8700000', '2h-25m')
              sig(bimg + '-ep-10', '9000000', '2h-30m')
              sig(bimg + '-ep-10', '9300000', '2h-35m')
              sig(bimg + '-ep-10', '9600000', '2h-40m')

          }


          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[13])
            }else{
              window.open(videolink[13], '_self')
            }

          }



      }
      e15.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[14]

              video.append(source)
              document.body.append(video)



              sig(bimg + '-ep-10', '9000', '9s')
              sig(bimg + '-ep-10', '20000', '20s')
              sig(bimg + '-ep-10', '40000', '40s')
              sig(bimg + '-ep-10', '120000', '2m')
              sig(bimg + '-ep-10', '300000', '5m')
              sig(bimg + '-ep-10', '900000', '15m')
              sig(bimg + '-ep-10', '1200000', '20m')
              sig(bimg + '-ep-10', '1800000', '30m')
              sig(bimg + '-ep-10', '2400000', '40m')
              sig(bimg + '-ep-10', '3000000', '50m')
              sig(bimg + '-ep-10', '3600000', '1h')
              sig(bimg + '-ep-10', '4200000', '1h-10m')
              sig(bimg + '-ep-10', '4800000', '1h-20m')
              sig(bimg + '-ep-10', '5400000', '1h-30m')
              sig(bimg + '-ep-10', '6000000', '1h-40m')
              sig(bimg + '-ep-10', '6600000', '1h-50m')
              sig(bimg + '-ep-10', '7200000', '2h')
              sig(bimg + '-ep-10', '7500000', '2h-5m')
              sig(bimg + '-ep-10', '7800000', '2h-10m')
              sig(bimg + '-ep-10', '8100000', '2h-15m')
              sig(bimg + '-ep-10', '8400000', '2h-20m')
              sig(bimg + '-ep-10', '8700000', '2h-25m')
              sig(bimg + '-ep-10', '9000000', '2h-30m')
              sig(bimg + '-ep-10', '9300000', '2h-35m')
              sig(bimg + '-ep-10', '9600000', '2h-40m')

          }


          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[14])
            }else{
              window.open(videolink[14], '_self')
            }

          }



      }
      e16.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[15]

              video.append(source)
              document.body.append(video)



              sig(bimg + '-ep-10', '9000', '9s')
              sig(bimg + '-ep-10', '20000', '20s')
              sig(bimg + '-ep-10', '40000', '40s')
              sig(bimg + '-ep-10', '120000', '2m')
              sig(bimg + '-ep-10', '300000', '5m')
              sig(bimg + '-ep-10', '900000', '15m')
              sig(bimg + '-ep-10', '1200000', '20m')
              sig(bimg + '-ep-10', '1800000', '30m')
              sig(bimg + '-ep-10', '2400000', '40m')
              sig(bimg + '-ep-10', '3000000', '50m')
              sig(bimg + '-ep-10', '3600000', '1h')
              sig(bimg + '-ep-10', '4200000', '1h-10m')
              sig(bimg + '-ep-10', '4800000', '1h-20m')
              sig(bimg + '-ep-10', '5400000', '1h-30m')
              sig(bimg + '-ep-10', '6000000', '1h-40m')
              sig(bimg + '-ep-10', '6600000', '1h-50m')
              sig(bimg + '-ep-10', '7200000', '2h')
              sig(bimg + '-ep-10', '7500000', '2h-5m')
              sig(bimg + '-ep-10', '7800000', '2h-10m')
              sig(bimg + '-ep-10', '8100000', '2h-15m')
              sig(bimg + '-ep-10', '8400000', '2h-20m')
              sig(bimg + '-ep-10', '8700000', '2h-25m')
              sig(bimg + '-ep-10', '9000000', '2h-30m')
              sig(bimg + '-ep-10', '9300000', '2h-35m')
              sig(bimg + '-ep-10', '9600000', '2h-40m')

          }


          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[15])
            }else{
              window.open(videolink[15], '_self')
            }

          }



      }
      e17.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[16]

              video.append(source)
              document.body.append(video)



              sig(bimg + '-ep-10', '9000', '9s')
              sig(bimg + '-ep-10', '20000', '20s')
              sig(bimg + '-ep-10', '40000', '40s')
              sig(bimg + '-ep-10', '120000', '2m')
              sig(bimg + '-ep-10', '300000', '5m')
              sig(bimg + '-ep-10', '900000', '15m')
              sig(bimg + '-ep-10', '1200000', '20m')
              sig(bimg + '-ep-10', '1800000', '30m')
              sig(bimg + '-ep-10', '2400000', '40m')
              sig(bimg + '-ep-10', '3000000', '50m')
              sig(bimg + '-ep-10', '3600000', '1h')
              sig(bimg + '-ep-10', '4200000', '1h-10m')
              sig(bimg + '-ep-10', '4800000', '1h-20m')
              sig(bimg + '-ep-10', '5400000', '1h-30m')
              sig(bimg + '-ep-10', '6000000', '1h-40m')
              sig(bimg + '-ep-10', '6600000', '1h-50m')
              sig(bimg + '-ep-10', '7200000', '2h')
              sig(bimg + '-ep-10', '7500000', '2h-5m')
              sig(bimg + '-ep-10', '7800000', '2h-10m')
              sig(bimg + '-ep-10', '8100000', '2h-15m')
              sig(bimg + '-ep-10', '8400000', '2h-20m')
              sig(bimg + '-ep-10', '8700000', '2h-25m')
              sig(bimg + '-ep-10', '9000000', '2h-30m')
              sig(bimg + '-ep-10', '9300000', '2h-35m')
              sig(bimg + '-ep-10', '9600000', '2h-40m')

          }


          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[16])
            }else{
              window.open(videolink[16], '_self')
            }

          }



      }
      e18.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[17]

              video.append(source)
              document.body.append(video)



              sig(bimg + '-ep-10', '9000', '9s')
              sig(bimg + '-ep-10', '20000', '20s')
              sig(bimg + '-ep-10', '40000', '40s')
              sig(bimg + '-ep-10', '120000', '2m')
              sig(bimg + '-ep-10', '300000', '5m')
              sig(bimg + '-ep-10', '900000', '15m')
              sig(bimg + '-ep-10', '1200000', '20m')
              sig(bimg + '-ep-10', '1800000', '30m')
              sig(bimg + '-ep-10', '2400000', '40m')
              sig(bimg + '-ep-10', '3000000', '50m')
              sig(bimg + '-ep-10', '3600000', '1h')
              sig(bimg + '-ep-10', '4200000', '1h-10m')
              sig(bimg + '-ep-10', '4800000', '1h-20m')
              sig(bimg + '-ep-10', '5400000', '1h-30m')
              sig(bimg + '-ep-10', '6000000', '1h-40m')
              sig(bimg + '-ep-10', '6600000', '1h-50m')
              sig(bimg + '-ep-10', '7200000', '2h')
              sig(bimg + '-ep-10', '7500000', '2h-5m')
              sig(bimg + '-ep-10', '7800000', '2h-10m')
              sig(bimg + '-ep-10', '8100000', '2h-15m')
              sig(bimg + '-ep-10', '8400000', '2h-20m')
              sig(bimg + '-ep-10', '8700000', '2h-25m')
              sig(bimg + '-ep-10', '9000000', '2h-30m')
              sig(bimg + '-ep-10', '9300000', '2h-35m')
              sig(bimg + '-ep-10', '9600000', '2h-40m')

          }


          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[17])
            }else{
              window.open(videolink[17], '_self')
            }

          }



      }
      e19.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[18]

              video.append(source)
              document.body.append(video)



              sig(bimg + '-ep-10', '9000', '9s')
              sig(bimg + '-ep-10', '20000', '20s')
              sig(bimg + '-ep-10', '40000', '40s')
              sig(bimg + '-ep-10', '120000', '2m')
              sig(bimg + '-ep-10', '300000', '5m')
              sig(bimg + '-ep-10', '900000', '15m')
              sig(bimg + '-ep-10', '1200000', '20m')
              sig(bimg + '-ep-10', '1800000', '30m')
              sig(bimg + '-ep-10', '2400000', '40m')
              sig(bimg + '-ep-10', '3000000', '50m')
              sig(bimg + '-ep-10', '3600000', '1h')
              sig(bimg + '-ep-10', '4200000', '1h-10m')
              sig(bimg + '-ep-10', '4800000', '1h-20m')
              sig(bimg + '-ep-10', '5400000', '1h-30m')
              sig(bimg + '-ep-10', '6000000', '1h-40m')
              sig(bimg + '-ep-10', '6600000', '1h-50m')
              sig(bimg + '-ep-10', '7200000', '2h')
              sig(bimg + '-ep-10', '7500000', '2h-5m')
              sig(bimg + '-ep-10', '7800000', '2h-10m')
              sig(bimg + '-ep-10', '8100000', '2h-15m')
              sig(bimg + '-ep-10', '8400000', '2h-20m')
              sig(bimg + '-ep-10', '8700000', '2h-25m')
              sig(bimg + '-ep-10', '9000000', '2h-30m')
              sig(bimg + '-ep-10', '9300000', '2h-35m')
              sig(bimg + '-ep-10', '9600000', '2h-40m')

          }


          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[18])
            }else{
              window.open(videolink[18], '_self')
            }

          }



      }
      e20.onclick = function () {
          e1.remove()
          e2.remove()
          e3.remove()
          e4.remove()
          e5.remove()
          e6.remove()
          e7.remove()
          e8.remove()
          e9.remove()
          e10.remove()
          e11.remove()
          e12.remove()
          e13.remove()
          e14.remove()
          e15.remove()
          e16.remove()
          e17.remove()
          e18.remove()
          e19.remove()
          e20.remove()


          var onli = document.createElement("button");
          var down = document.createElement("button");


          onli.innerText = 'Watch Online'
          down.innerText = 'Download(' + size + ')'

          onli.style.display = 'block'
          onli.style.width = '100%'
          onli.style.padding = '50px'
          onli.style.marginBottom = '10px'

          down.style.display = 'block'
          down.style.width = '100%'
          down.style.padding = '15px'
          down.style.marginBottom = '10px'


          document.body.append(onli, down)


          onli.onclick = function () {
              down.remove()
              onli.remove()

              var video = document.createElement("video");
              var source = document.createElement("source");


              video.setAttribute('controls', 'true')
              video.setAttribute('autoplay', 'true')
              video.setAttribute('id', 'viddd')
              video.setAttribute('controlsList', 'noplaybackrate nodownload ')
              video.setAttribute('oncontextmenu', 'return false;')






              source.setAttribute('id', 'srcc')

              video.width = w * .94
              video.style.marginTop = '20px'

              source.src = videolink[19]

              video.append(source)
              document.body.append(video)



              sig(bimg + '-ep-10', '9000', '9s')
              sig(bimg + '-ep-10', '20000', '20s')
              sig(bimg + '-ep-10', '40000', '40s')
              sig(bimg + '-ep-10', '120000', '2m')
              sig(bimg + '-ep-10', '300000', '5m')
              sig(bimg + '-ep-10', '900000', '15m')
              sig(bimg + '-ep-10', '1200000', '20m')
              sig(bimg + '-ep-10', '1800000', '30m')
              sig(bimg + '-ep-10', '2400000', '40m')
              sig(bimg + '-ep-10', '3000000', '50m')
              sig(bimg + '-ep-10', '3600000', '1h')
              sig(bimg + '-ep-10', '4200000', '1h-10m')
              sig(bimg + '-ep-10', '4800000', '1h-20m')
              sig(bimg + '-ep-10', '5400000', '1h-30m')
              sig(bimg + '-ep-10', '6000000', '1h-40m')
              sig(bimg + '-ep-10', '6600000', '1h-50m')
              sig(bimg + '-ep-10', '7200000', '2h')
              sig(bimg + '-ep-10', '7500000', '2h-5m')
              sig(bimg + '-ep-10', '7800000', '2h-10m')
              sig(bimg + '-ep-10', '8100000', '2h-15m')
              sig(bimg + '-ep-10', '8400000', '2h-20m')
              sig(bimg + '-ep-10', '8700000', '2h-25m')
              sig(bimg + '-ep-10', '9000000', '2h-30m')
              sig(bimg + '-ep-10', '9300000', '2h-35m')
              sig(bimg + '-ep-10', '9600000', '2h-40m')

          }


          down.onclick = function () {
            if(server=='ph'){
              ph(videolink[19])
            }else{
              window.open(videolink[19], '_self')
            }

          }



      }








  }





}


setTimeout(() => {

  // imgdiv(name,img,q7,size,midcredit,pc)

  // imgdiv('Chhichhore (2019) [1.4GB] & 720','chi',{q720p:'',q1080p:''},{size720:'',size1080:''})

  



//  seris('School 2017 {season 1} [650MB]','school',['https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E01.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E02.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School-2017-S01-E03.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01.E04.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E05.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E06.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E07.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E08.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E09.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E10.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E11.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E12.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E13.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E14.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E15.mp4','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/school/School.2017.S01E16.mp4'],'650MB')

  //seris("It's Okay to Not Be Okay {season 1} [650MB]",'okay',['https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E01.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E02.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E03.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E04.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E05.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E06.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E07.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E08.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E09.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E10.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E11.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E12.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E13.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E14.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E15.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/okay/Its.Okay.to.Not.Be.Okay.S01E16.mp4'],'650MB')


  

 // seris("Vincenzo {season 1} [650MB]",'vin',['https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e01.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e02.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e03.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e04.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e05.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e06.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e07.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e08.mp4','https://flame2.bdff.workers.dev/0:/mcubd2/Others/vin/Vincenzo.A.K.A.Binsenjo.S01e09.mp4'],'650MB')























  //     seris('Rick and Morty {Season 1} {English Only} 1080p [185MB]','rickk',['https://gdriv.bdff.workers.dev/0:/OTHERS/Rick/S1/Rick.and.Morty-save-summer-e1-2-6.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Rick/S1/Rick.and.Morty-pickle-e2-3-3.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Rick/S1/Rick.and.Morty-love-spray-e3-1-6.mp4','https://gdriv.bdff.workers.dev/0:/OTHERS/Rick/S1/Rick.and.Morty-sleppy-garry-e4-2-4.mp4'],'185MB')























 

 
// seris('Weak [500MB]','weakk',[],'500MB')
 seris('Pawn [500MB]','pawn',['https://www.googleapis.com/drive/v3/files/1-1pjiV2PAeQyKiIKI1W1h19ZKz9WpqcU?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc'],'500MB','mv')
 
 
 seris('Ms. Hammurabi [500MB]','hambi', ["https://www.googleapis.com/drive/v3/files/1-8uuSHULWLuNOOi1XYTpKmaqmi7bwVRe?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-AJiRicva7Jz2cV-6FRh9hCWaveV6M50?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-DzfLNxcCx1ve_5aUB_zDFlOk4LNy1Hk?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-Ec8G90OS4nfjZFr6N0Bjx23CXcmRMyj?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-LWbxhltIG9icOfscNW28VZNxjBRtQJM?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-MN_kUYIHphtbO2GUlKjIKRNFz0y76xS?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-P7YOs-i_suICzL3wNdao5m9T84cOw4Y?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-QjsNTuPZ8GJKb4setKFHtntQTUE8zW3?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-X3fc0Ydt1Txuh3rJwGTB5h-Aw5xhTX1?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-coc5AizQu40csgoZ3NKBRXDFMaCcwDx?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-gg3QCqlI4T1JdM5xF6qnTsVYP3p5t6k?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-mOtHPycvXEfz3dOSzQ9nJJhpSL8nebR?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-qH2n_uKx1WwOPq2cWJCu-ZSoYuCnAGA?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-rjdIC1xBXhRagB0UuniT-jaynd9vOXa?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-sQ9gt91K5XgNIfOAGmeB4GEX7wENrAX?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-v6hQ4Ii4L_ldZRaQqAwWvdGkZiKucNR?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc"],'500MB')
 
 seris('Extraordinary You [500MB]','extx', ["https://www.googleapis.com/drive/v3/files/102lYvSBKtoKV1Xd0yWHdZ5JQc0DDV8XJ?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1043hMoLu7q-OpHF77jaLD88EdGGN0neJ?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/105neEdKA5cBwP4ytaA48WnIPPSE5KH7K?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10HmCALNrDXqIwSXR00iOGZDUF6EyCxqj?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10HsUgkT9zI5W0O7yl9CIPg21fiLejORf?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10Ka8BlT_x87GWQUppcilmqI9qNAz3vDN?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10Pli8WbJ0Ed1wACATykN-E7Z-QXicoZa?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10WrmptTPnzRzzg79px0k4D2nwEFmPTLi?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10YiMb6fmuz4lyMZM9dn7d1uThmrCKR3v?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10eRxNkG2fnfx639vO_LT59tP_vmVAuML?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10psWVkarF7_uqZ_E9FEv5TsPvk0wy1CF?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10tJqhgfpNJEA_vBDR0kRVmdPJ0YTc5EB?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1116a4CmBCPdnNBLO8c2n5wikWdAYtvp5?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/114nQaadTgUdbtQ08cCRb2U8ybLHgWCti?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/115WVQUHpwl2knUkO8OXxUjPyxeGga8GV?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/119yYomSjNAt5w0YoLjhgcVdRBcJIBeRO?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc"],'500MB')
 
 seris('Manjummel Boys [1GB]','manj',['https://www.googleapis.com/drive/v3/files/1-4096XhvajbwrNT-2wybq5BnDVAn0EvW?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc'],'1GB','mv')
 
 seris('Weak Hero Class 1 [500MB]','weakk', ["https://www.googleapis.com/drive/v3/files/1-FXvNWZDTBtZyJl-RzmOFbqXl5feWwmW?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-GSwb3DNL1w3C5dW_lPPCmWCw3qvXPB8?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-GyqhR4tOlZMqkt_P9tQu-2EHbfdg-PD?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-LvREwRSZRKQy2lFzJpnyHDP4MuoOBOj?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-Svn9mJg6WqEJ5QzPtOJt4jay15q0--U?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-_2kRRgsWdY9tgdPt8p82qf-hHEtU22R?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-eEBuV9UQOLheic_CCzWFIJGo0GjcLbG?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-iMtEJghdKvkvRHoFG8lw_8ZsSLkzeVb?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc"],'500MB')
 seris('Cheer Up [500MB]','cheerup', ["https://www.googleapis.com/drive/v3/files/1-wDKb_FXbNcAiAku2s3QsVzLySVkH60-?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/105_tr1HA_J1RHtK_N063rckf9kv16PT-?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10A_Qo_lJkZ0040Ren3M5DExakaxtornP?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10FF8L-vXmk2mTTmBwzGdZcmPY4x-VjAj?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10GeJ3UUXP5YqiNiTUa2wayONfvhrXF-o?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10LMETiT_iN4HeEcnRYCXrUYtX8uWCxvh?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10MhUXLsnqFBjnCqpxqd-Ug75NafIEDFl?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10RvSxhpK5dg-S6epjcdMXmb2wPFd-NZt?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10WXqGCyG1Q1xfd4LNSnAe3KhnrGKC5Wu?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10c829pis1-9DCunqmB0fEqYd2fcx5qxZ?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10cxUomuPdWX8R10l3qnkkxvv_OhHwxIS?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10i4biOrxZldESjPycxtmh3eMcJTGzYXf?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10mP2xIKJR0v_ypfxtrElE6snHmPXIbaC?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10nnZnObu3fepczxe-tN6u9vFtrX3dREN?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10qhO5XpQrmh55HFWKR_BoDEO1XWZCCmK?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10xCu7fPP1CetCIE6ihOriFYJ_mypIBub?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc"],'500MB')
 seris('Adhura [500MB]','adhura',["https://www.googleapis.com/drive/v3/files/1IEA6MG3EqL9ORjwc0Qw4Dl1GDK2mqXfT?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-27buZadJrDtHfw0oavzKsVW2ZdYQZvO?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-9YiYXz2jPcAO2acrt7Ia-CSz9tZGRcS?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-Az7T-BbADoZg4voHt92cXhZ1HUCkTR8?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-B7rab_6a34tCCp0WaxajvoCW18vXKO9?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-EBo8ObTAOBnGnJ9svFSGIeX5ieXDmxg?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/1-JKE7Wvk84_Kv-KE80f8Bc9O-c4rCdPt?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc"],'500MB')
 seris('Twinkling Watermelon [500MB]','watar',['https://www.googleapis.com/drive/v3/files/1kcqFbY5rTw3WJP5xBwQJseK9Bd9wPl8j?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1jqVebsXim9Gk5drfhOLkvbrA0808DyAf?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1fHWz1UWY-dGwwSZOAoI5weseL5mZ9oVO?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1hQj5ZySpObJH9hJvJRde0eWfrygBx7TJ?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1tQNW-pAb3kxjCaXU7KWUPZPRjpOJ9_7Q?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/15ZLNP7GfwbG987p_T6E3dpo0lLzx0RMS?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/17fz4FYRMcvj4oM0YhnXEZeDqqdI652F8?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1g0HZhvklgcrJ1FSnIqK_9zQRDpjvJHV0?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1bbRhCShnikXmcZ_qjEtNB8WWa0AUf8tZ?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/17BSM-fHUK-s4CjvyLHbsBdj06OOc4Wmj?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/10d0tx8n5ARc76nXrtpUg4Q32oTNxO2oS?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1iDm4fHw7B_YrBYnV2piqshqffwj5iJ6I?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1Typvg-EY-3ct3bwnWCef6cZI6rtwJ-9v?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1pFfKElp8CNlmGqcPO-hSLmJRRp0XEcBK?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/16v7TM8v0f0NQAasKUKWn-CS27J3ZA4vJ?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1F5JaU69pRC-dTRzDC56X-4N__LpgxRBM?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc'],'500MB')
 seris('বুকিং [500MB]','boki',['https://www.googleapis.com/drive/v3/files/1-hVHjMBB1zwjffbU4oV2TCSun5LTwOH2?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc'],'500MB','mv')
 seris('Migration [500MB]','mi',['https://www.googleapis.com/drive/v3/files/1-3tuzgt4YGhavvPYCIikzMP5Z6-uTSag?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc'],'500MB','mv')
 seris('G-Force [500MB]','gfo',['https://www.googleapis.com/drive/v3/files/1-9_5L9DojoIQo8GXs9jU7rG9UjP1e_Vj?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc'],'500MB','mv')
 seris('Fatafati [500MB]','fa',['https://www.googleapis.com/drive/v3/files/1j-vxpf0V0PbGZBydJYz0q2lTVSB2ges0?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc'],'500MB','mv')
 seris('Better Days [500MB]','betd',['https://www.googleapis.com/drive/v3/files/1ZtszTqkDh97r_gxVdldKVv2EddJyJ8IW?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc'],'500MB','mv')
 
 
 seris('18 Again [400MB]','againn',['https://www.googleapis.com/drive/v3/files/12yfncS-ZyPTDf3ApUQNU9axy25LoZrsO?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/12z3_T_4DX7jLNvXODuBO2MCfHnqAyVBF?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/133rwOJsKzxWYZeZl1iJ_CXXe_AaJFFBb?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/135ztSEmWWme03zagq5jcqvbzkbjMxVuO?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/13EnR9mZlOViY-tBjgDX6qo20L4065Edz?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/13GZSre7sIKSQ3hejejKZNUTz_a-T4fym?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/13MZKkUPv6Tdnvm5JwrIjUr5Mdpq_NKrs?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/13PtXhnJYsEc7u3gZo3Kp-kc7huxMYKhq?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/13RvSLH8xm4Mffc6jhSpfTrJwkKbjHhnJ?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/13UL3e8dQMz0BzMxsIf1GQtLyRzkeKIX4?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/13XmDY8_jQ29CtEGPhj9Hzo5Pl2nFNxbr?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/13_SCXRFjFHqc1ZbcoZmNqBwnw3GSGsfF?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/13cLpWjxDOXtMHZc0MJwEGp45CoOIP3Fc?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/13mPV9txXdB51zATPoZqgbHZ2rWYswtad?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/140-Fcr6vhGzCMVHJNCdTC2-1eYc2rav7?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1Pj8alVDFINorUoDO9KbnWuM3A1wD6YqY?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc'],'400MB')
 
 seris('Laapataa Ladies [1.5GB]','lapa',['https://www.googleapis.com/drive/v3/files/1-1P-t4UVm2RpITWPIu3k2d-f7eB3bAYH?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc'],'1.5GB','mv')
 
 seris('Raksha Bandhan [900MB]','raksa',['https://www.googleapis.com/drive/v3/files/1-3iiQIl8-_4glYxTpTyGe9QS-5WeaJLy?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc'],'900MB','mv')
 
 seris('A Werewolf Boy [300MB]','ware',['https://www.googleapis.com/drive/v3/files/1-Jf8oS8KfstRbPhsHi17DyfcDp2eDG0j?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc'],'300MB','mv')

 seris('Weightlifting Fairy Kim Bok-joo [300 MB]','wei',["https://www.googleapis.com/drive/v3/files/10S2JouIFd_fHB7YswQUlKibMHQAm_ghS?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10YGsrpEkwhKseggFqfsdWesDU0PS-5sk?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10aD_f5d9sbBrXJtAMwHzpeylyXwjah-y?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10jwpiCqI3BWReM-h38W4Rp441vZSuFtD?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10l5bGhOa5Mff90Lig1ifpXQU1r4smEe9?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10n3mljl9tPbPKDHr6Lgk2xYS2g8VLpcV?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10tgKtUMC9TFy_6WF15pTzwS3-QxqCYYx?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10vbmYReZ-3s8v2ac6FceJI0ItiXc4KZI?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/10wqNHpRAwm5tTxlAV5lgRZuyp06bDf0S?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/11EUfGbeQrrZFdOXAzpi4iR4wEzl5rw2P?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/11Gpct-WUo9zDYt1wnNfhe0ArspHifBUl?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/11gZ8VR9XsFjhXEG_9L_DpGPfHt6mLlSG?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/11gt5ctmITB00_g5H8Dladjx6Yl-xmXVS?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/11h0K7X-rXs06o_VaSmny6W-j6kn6QcHS?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/11iKR5rID-2IsDUD_mvUSsgEmJKCb6qgU?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc","https://www.googleapis.com/drive/v3/files/11lAb_aa_Kqdmb-79Mo_NdH7pwdQL36MD?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc"],'300 MB')

 seris('Flipped [800 MB]','fli',['https://www.googleapis.com/drive/v3/files/1-4ByUdwxpzvDGlXQ_TMgvfuC4Ts8CO2R?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc'],'800 MB','mv')

 seris('Premalu [1.5GB]','pre',['https://www.googleapis.com/drive/v3/files/1-0OwErpU-V9kmgI9cF9CSc6GpS2Nu1hB?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc'],'1.5GB','mv')
 // seris('Vincenzo [300MB]','vin',['https://photos.app.goo.gl/g2HxHbeoRm7g2Udb9','https://photos.app.goo.gl/1wKwFQhujDXcfJo7A','https://photos.app.goo.gl/1dw33C1c4cyq3q3S8','https://photos.app.goo.gl/NVrwCU1jYNMMwFNk6','https://photos.app.goo.gl/YURvgnBxEW85jNWW7','https://photos.app.goo.gl/gbQsm6tZowKZ4QR28','https://photos.app.goo.gl/L21MicuPnYRkWx917','https://photos.app.goo.gl/fJe5N7tY5J8YZAcV6','https://photos.app.goo.gl/pMEcshXa24evAfz57','https://photos.app.goo.gl/vHsNEmWvifyfKUhM9','https://photos.app.goo.gl/srp6Ea3oQZLmHmy3A','https://photos.app.goo.gl/nYgotbpBmWPfAosP8','https://photos.app.goo.gl/94tZWpVxx6Wx1knv8','https://photos.app.goo.gl/XMQX64zJGTASEFz4A','https://photos.app.goo.gl/xzzeoktWEWUTVTVU8','https://photos.app.goo.gl/fgoiSiDeG1RHqwGF9','https://photos.app.goo.gl/FgP5SWFiqx6nos2P6','https://photos.app.goo.gl/9AGnGCWwYTXDegvR7','https://photos.app.goo.gl/aQ3413dE8SXG7uJVA','https://photos.app.goo.gl/aHb57ywmcUwDkB26A',],'300MB','seris','ph')


seris("bng  {SEASON 2}",'bng',['https://www.googleapis.com/drive/v2/files/1-DjZUYT3StFHiGL8xaK6L5zKrGjyhRTG?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-LWqPsJT5wWFwUEGE3JV6qZ7UBUuGUEN?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-OD-H0_hhSswyZyQvQBHXOVSTCuUT72R?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-VAm4s7j6A_gA8M_sfHLHmXM7Hv5pXQX?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-YaEanhE7h3O4gPKz-2001e0wTlz9QJy?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-YpkkBzIiCZVr6IXk0d_LWr983u_43Mh?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-eAcIowDo-OioB1QaDPI3no_AYv1hclN?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-eBq6jdPTwrCI057AoJ_4ifuTf7xlHSc?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-gUCL2Vc9n95otM7pvYm5aHDixMYEe0x?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-ibEaC4q_KjQUN8yNRw1MvX_wr7zrf6A?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-jRwXcba_in8maD05nsKL2CpwFQC_Qmy?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-lag_CMli8NUVthTHMrojvv-U_hm4eca?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-qEr7IAJsL9hmVKayjMYPDTyGTU-PTEL?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl'],'150MB')

 seris("Our beloved summer {season 1}",'our',['https://www.googleapis.com/drive/v2/files/109gMjf1wgU2cwE0l4IJm730Z_UyeEp-d?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/10A0c0wRAcc3HtB0rcZ-UzNd2u7YsVXAL?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1DFB44a_x_Rq9PsWfXf97wF00xWBsGzbf?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-4_22Fd4PVeDWvQRNHjft90WB-lqfHMM?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-8BoHxZT4anaVgSInTD7zwY9Aylyi02b?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-J_aDvWTiSK5-m5z3LwrSt8X8LSiuKk8?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-O4ctTJiiSFdlHquRswJGQY4J-v3WvRD?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-WJEoRr_7GKm3Q3cn6nZk8OVSmPJ_qpv?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/1-cpNAI_Z0V_z_46fwRMvGQ5PyGNyG5-7?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/101IcHOZw7f_OOIs3YnfuiFyfNvl9NW3-?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/10Kd0y0k6mEtog2_u4L0I77K1l3P7hdjf?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/10RyfDRp2vFRjqaBsPemkZvyr0YuB6k76?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/10_CiF-LqDMMUu_UHT-Fq5Q4DPhpWvHCr?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/10p9q5IzxaZCDISFeyrk2s12t1U4xUGLF?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/10rnTViNbunQ4afn8mpDcpC5WMkyQZ0Ws?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl', 'https://www.googleapis.com/drive/v2/files/10s0zzm4HcJFKgOGMLXLSaUCiuuudfE0e?key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc&alt=media&source=downloadUrl'],'280MB')
 
seris('Kota Factory {Season 2}[350MB]','kota',['https://www.googleapis.com/drive/v3/files/1zG1sl68v-_FyoLee3hwVaoXwaA3eN3ca?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1-0q9riW7iJt3nLiF6DyK1mIGsbYF5Lfz?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1-GIpAuxvUtNGO4Xg29v0romUC0lkNZWX?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1-Nqj3qWBlgS4sP0z8u1PdEkNdZV_URbx?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1-P1ctfIYTEWkU_CMNcS2ZdLGCacCdivZ?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc'],'350MB')
//seris('Crash couse [ 400MB]','crash', ['https://www.googleapis.com/drive/v3/files/1-1LlRrOLSdWgXr4FjpgPP_s3PXlo1_pB?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1-7v8VZJs0O8kaPbl5MK2PPdYkG2jE7yN?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1-Aq7C5WCt58arAVSrVruW1G-1lxh03Rm?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1-Ghd5mHPVS1UowNIvNpFr4kgOS2D8IM3?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1-J67TG1Xx50PHQXOARFgbS8fcSw2lrHs?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1-JRul07O1_Cp81B6fEpxGSTc49pwPjGr?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1-Lo9jWFw_IcsIhCm8rRoEMi8cszjtzqY?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1-NvMKLZOe6ZPLqCE38NOazz7jGyp4B1x?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1-UvherUxFdfn6f0aQgikxjc6jC0Mtzl6?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc','https://www.googleapis.com/drive/v3/files/1-buloa-UIeTcpRuozgUSbSfJfcXGpOWm?alt=media&key=AIzaSyCZ8IJ6yrMTPetNZyYVH4vyX4rc0L46AGc' ] ,'400MB')
  //   seris('The.Age.of.Adaline [500MB]','age',['https://abu.flameriser78.workers.dev/0:/mcubd/The.Age.of.Adaline.2015.480p.Moviesmod.org.mkv'],'500MB','mv')
 // seris('A Business Proposal {Season 1} [500MB]','prop',['https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E01.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E02.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E03.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E04.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E05.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E06.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E07.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E08.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E09.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E10.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E11.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Business%20Proposal%20/A.Business.Proposal.S01E12.mkv'],'500MB');
//  seris('Mr. Queen {Episode 1-20} [500MB]','mr',['https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E01.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E02.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E03.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E04.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E05.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E06.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E07.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E08.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E09.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E10.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E11.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E12.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E13.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E14.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E15.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E16.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E17.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E18.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E19.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Mr/Mr%20Queen%20S01%20E20.mkv'],'500MB');
 seris('Mr. Queen {Episode 21-40} [500MB]','mr',['https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e021.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e022.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e023.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e024.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e025.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e026.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e027.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e028.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e029.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E30.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E31.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E32.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E33.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E34.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E35.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E36.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E37.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E38.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E39.mkv','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Mr/Mr%20Queen%20S01%20E40.mkv',],'500MB');
 seris('Mr. Bad {Episode 1-20} [100MB]','bad',['https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-1.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-2.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-3.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-4.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-5.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-6.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-7.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-8.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-9.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-10.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-11.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-12.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-13.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-14.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-15.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-16.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-17.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-18.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-19.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-20.mp4'],'100MB')
// seris('Mr. Bad {Episode 21-24} [100MB]','bad',['https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-21.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-22.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-23.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/mr%20bad/Mr.%20Bad%20EP-24.mp4'],'100MB')
 seris('Mr. Queen {Episode 21-40} [500MB]','mr',['https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e021.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e022.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e023.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e024.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e025.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e026.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e027.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e028.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Mr/Mr.Queen.S01e029.mkv','https://flame782.flameriser78.workers.dev/0:/mcubd/Others/queen/mr.%20queen%20ep%2030.mkv','https://flame782.flameriser78.workers.dev/0:/mcubd/Others/queen/mr.%20queen%20ep%2031.mkv','https://flame782.flameriser78.workers.dev/0:/mcubd/Others/queen/mr.%20queen%20ep%2032.mkv','https://flame782.flameriser78.workers.dev/0:/mcubd/Others/queen/mr.%20queen%20ep%2033.mkv','https://flame782.flameriser78.workers.dev/0:/mcubd/Others/queen/mr.%20queen%20ep%2034.mkv','https://flame782.flameriser78.workers.dev/0:/mcubd/Others/queen/mr.%20queen%20ep%2035.mkv','https://flame782.flameriser78.workers.dev/0:/mcubd/Others/queen/mr.%20queen%20ep%2036.mkv','https://flame782.flameriser78.workers.dev/0:/mcubd/Others/queen/mr.%20queen%20ep%2037.mkv','https://flame782.flameriser78.workers.dev/0:/mcubd/Others/queen/mr.%20queen%20ep%2038.mkv','https://flame782.flameriser78.workers.dev/0:/mcubd/Others/queen/mr.%20queen%20ep%2039.mkv','https://flame782.flameriser78.workers.dev/0:/mcubd/Others/queen/mr.%20queen%20ep%2040.mkv',],'500MB');
  seris("Hidden Love {Episode 1-20} {100MB}",'hidden',['https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-1.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-2.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-3.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-4.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-5.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-6.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-7.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-8.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-9.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-10.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-11.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-12.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-13.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-14.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-15.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-16.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-17.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-18.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-19.mp4', 'https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-20.mp4'],'100MB')
      seris("Hidden Love {Episode 21-25} {100MB}",'hidden',['https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-21.mp4','https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-22.mp4','https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-23.mp4','https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-24.mp4','https://flame7878.flameriser78.workers.dev/0:/Mcubd/hidden/Hidden%20Love%20EP-25.mp4'],'100MB')
  // seris('Gangubai Kathiawadi [1.38GB]','gangu',['https://root.bdff.workers.dev/0:/mcubd/others/Gangubai-Kathiawadi.mp4'],'1.38GB','mv')
  //seris('The Legend of the Blue Sea [200MB]','legend',['https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E01.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E02.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E03.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E04.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E05.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E06.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E07.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E08.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E09.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/Legend.Of.The.Blue.Sea.S01E10.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E11.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E12.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E13.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E14.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E15.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E16.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E17.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E18.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E19.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E20.mkv'],'200MB');
  //seris('The Legend of the Blue Sea [season 2]','legend',['https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E21.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E22.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E23.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E24.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E25.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E26.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E27.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E28.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E29.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E30.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E31.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E32.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E33.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E34.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E35.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E36.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E37.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E38.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E39.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Legend/The.Legend.Of.Blue.Sea.S01E40.mkv'],'200MB');
  // seris("Goblin [600MB]","goblin",["https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E01.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E02.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E03.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E04.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E05.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E06.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E07.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E08.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E09.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E10.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E11.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E12.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E13.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E14.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E15.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Goblin/Goblin.S01E16.mkv"],"600MB")     
  // seris("Reply 1988 [Korean][500MB]","reply",["https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E01.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E02.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E03.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E04.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E05.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E06.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E07.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E08.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E09.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E10.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E11.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E12.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E13.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E14.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E15.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E16.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E17.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E18.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E19.mkv","https://flame2.bdff.workers.dev/0:/mcubd2/Others/Reply/Reply.1988.S01E20.mkv"],"500MB")
  // seris('Welcome to Waikiki [season 1] ','wikiki',['https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e01.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e02.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e03.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e04.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e05.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e06.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e07.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e08.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e09.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e10.mkv','https://root.bdff.workers.dev/0:/mcubd/others/Wikiki/Welcome.To.Waikiki.S01e11.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e12.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e13.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e14.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e15.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e16.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e17.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e18.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e19.mkv','https://flame2.bdff.workers.dev/0:/mcubd2/Others/Wikiki/Welcome.To.Waikiki.S01e20.mkv'],'1.3GB')
   // seris('Teddy [480MB] ','teddy',['https://flame2.bdff.workers.dev/0:/mcubd2/Others/Teddy.mp4'],'480MB','mv')
    seris('The glory [season 1] {500MB}','gloryy',['https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E01.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E02.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E03.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E04.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E05.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E06.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E07.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E08.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E09.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E10.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E11.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E12.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E13.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E14.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E15.mp4','https://flame.bdff.workers.dev/0:/mcubd/OTHERS/Glory/The.Glory.S01E16.mp4'],'500MB')
    seris('Naruto [season 1]{episode 1-20}{250MB}','narutoo',['https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e1.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e2.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e3.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e4.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e5.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e6.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e7.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e8.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e9.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e10.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e11.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e12.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e13.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e14.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e15.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e16.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e17.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e18.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e19.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e20.mkv'],'250MB');
    seris('Naruto [ep 21-40]','narutoo',['https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e21.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e22.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e23.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e24.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e25.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e26.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e27.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e28.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e29.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e30.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e31.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e32.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e33.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e34.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e35.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e36.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e37.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e38.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e39.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e40.mkv'],'250MB')
    seris('Naruto [ep 41-60]','narutoo',['https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e41.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e42.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e43.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e44.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e45.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e46.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e47.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e48.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e49.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e50.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e51.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e52.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e53.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e54.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e55.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e56.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e57.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e58.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e59.mkv','https://zaynr2h.bdff.workers.dev/0:/mcubd/Others/Naruto/Naruto.s1e60.mkv'],'250MB')
    //seris('Naruto [ep 61-80]','narutoo',[],'250MB')
   // seris("Reply 1988 [Korean][500MB]","reply",["https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E01.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E02.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E03.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E04.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E05.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E06.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E07.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E08.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E09.mkv","https://root.bdff.workers.dev/0:/mcubd/others/Reply/Reply.1988.S01E10.mkv"],"500MB")



















}, 1);



function sig(bimg, sett, tim) {

  var video = document.getElementById('viddd')
  return setTimeout(() => {


      var xhttp = new XMLHttpRequest();
      xhttp.open("POST", 'https://nodebd.vercel.app/', true);
      xhttp.setRequestHeader('reqs', bimg + '--' + tim + '--state(' + video.readyState + ')--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '-')
      

  }, sett);

}






// -------------------------------------------------------------
