// ==UserScript==
// @name         Boystown
// @namespace    HOAKHUYA
// @include     *://*.onion/*
// @include     *://*.bayfiles.com/*
// @include     *://*.anonfile.com/*
// @include     *://*.megaupload.com/*
// @include     *://*.solidfiles.com/*
// @include     *://*.megaupload.is/*
// @icon        https://raw.githubusercontent.com/684102/PornDownloader.user.js/master/ico.png
// @downloadURL https://raw.githubusercontent.com/TheWolds/btwaterwall/master/newboytown.user.js
// @updateURL    https://raw.githubusercontent.com/TheWolds/btwaterwall/master/newboytown.user.js
// @version     2019121200
// @copyright   HOAKHUYA
// @homepage    https://hoakhuya.com
// @author       HOAKHUYA.COM
// @description  NOPE.
// @grant         GM_xmlhttpRequest
// ==/UserScript==
//UDT#!<li>Khả năng tự động tải về link dl.free, datafilehost, myfile.is, anonfile.com,solidfiles.com... chỉ cần click là sẽ down liền, không bị giới hạn số lượt down</li><li>Nhận dạng mật khẩu tốt hơn</li>



if (location.href.match(/boystownbezgvykp|boystownbezgvykp|2tgix56pui5j63y7bq4bgeekjy4mw57zrnbvuvic2ncbt5gyxei7dcqd|boytownhkn6uciye/i)){
 function appupdate() {
    var curent = parseInt(Math.floor(Date.now() / 1000));
    var expiredcc = curent+84600;
    var urlupdate = 'https://raw.githubusercontent.com/TheWolds/btwaterwall/master/newboytown.user.js';



GM_xmlhttpRequest({
  method: "GET",
  url: urlupdate,
  onload: function (response) {
       var newversion = parseInt(response.responseText.match(/version(.+)\n/im)[1].replace(/\s/g,""));
       var nowversion = parseInt(GM_info.script.version);
      if (newversion>nowversion && localStorage.getItem('update_remind')<curent){
      try{var newupdatetxt = response.responseText.match(/\/\/UDT\#\!(.+)$/im)[0].replace("//UDT#!","");} catch(e){var newupdatetxt='<li>Improved script</li>';}
        
    var htmccs='<style>code>li{padding-top: 5px;}.hkoverlay { z-index:3210;position: fixed; top: 0; bottom: 0; left: 0; right: 0; background: rgba(0, 0, 0, 0.7); transition: opacity 500ms; visibility: visible; opacity: 1; }'+
    '.hkoverlay:target { visibility: hidden; opacity: 0; } .hkpopup { margin: 70px auto !important; padding: 20px !important; padding-top: 10px; background: #fff; border-radius: 5px; width: 60%; max-width: 45em !important; position: relative; transition: all 1s ease-in-out; }'+
    '.hkpopup h2 { margin-top: 0; color: #333; font-family: Tahoma, Arial, sans-serif; }.hkbutton { display: inline-block; border-radius: 4px; background-color: #C60689; border: none; color: #FFFFFF; text-align: center; font-size: 16px; padding: 10px; width: fit-content; transition: all 0.5s; cursor: pointer; margin: 3px; } .hkbutton span { cursor: pointer; display: inline-block; position: relative; transition: 0.5s; } .hkbutton span:after { content: \'\\00bb\'; position: absolute; opacity: 0; top: 0; right: -20px; transition: 0.5s; } .hkbutton:hover span { padding-right: 10px; } .hkbutton:hover span:after { opacity: 1; right: 0; }'+
    '.hkpopup .hkclose { position: absolute; top: 4px; right: 13px; transition: all 200ms; font-size: 30px; font-weight: bold; text-decoration: none; color: #333; }'+
    '.hkpopup .hkclose:hover { color: #06D85F; } .hkpopup .hkcontent { max-height: 30%; overflow: auto; } @media screen and (max-width: 700px){ .hkpopup{ width: 80%;max-width:45em; } }</style>'+
      '<div id="hoakhuyapop" class="hkoverlay">'+
      '<div class="hkpopup">'+
      '<h2 style="font-size: 22px !important;margin: 8px 0;font-weight: 700;line-height: 1.1;"><img  src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAANGklEQVRYhW2Ye2xdRX7Hv795nOvrZ+LYcZyEhISN8yBPTJKFQICFIB7V/lFtEbDQakFaUKtWDVpKpU27VQuF0u12W6SmQdUKqOiyrfoQ29AQkkDe2Akb14mz2bwftuO3fX2fvufM/PrHmbk5dvdIP83MOXNnPuf7+82cOz8aGhqqFUKQiC8iIkHxJYiIAEyru/bMOugKBee/+9U3AaDt3faPeQmXAYCZGQC76rQ6M9tk3ZfGGMvMbK1lGhkZqUvCuYqYAZa8V4FLGM6tPrTT5suPAICsVQeWn37wJcQXJ81DOjg7A9Raa60r2VprlYcTQkgHJGaCeTgAFXA3uQAAGiKNfO5hQY4oV35IXIuq+XZddv2sU9MSEQOwRCQ8JBGRAychBDEzATAAhAcUM+BkAkw40Apgoh1bC0jXhmds0awBAJGWPVgSgACdVI6IrGtb3yYi60GRuIQQAGBpcnJyjocRQkg3uXRw8tdB9j5/fFt4PbOuur3xUMuPNp0CgPL+m7MH3zz522BDLa9t/iB4tHUMAEZe7dyQPzlyv15c/7/z37tvn4dzQB7OuBg0AKy11rctZbPZ5oR7JRFVIB3YNMje5w8/Wey8+bogA2Jjml5e/TsNr2y4hF9zjf/1yeVj/3TmJ4AUDIn0ptbvz//gwU9mwrl6pXRmrbVmplvl1RfOb7nyTM/jUUexjogUESkACoAiImVvZu5SMoSSU5A6lOXT/evccw0gcKYBqLC7b4NWZSFV3N/0ZTbNHI+IVNQxWXft2e7Hrr147j7PkfCqkAnl5KxN9X2FU5m/Pf+djsMXHzq0o/DpcHMStKZ91pdSlyF0BB2E5fonbu8mosCZdhYQUVD32JIuEZRDpcoQKuLqu2cfTYKV9w01Xdn2+fcvvtBxKH9q/McNd83qcx6TRCSFEJIKhcJCIYTyDwCoC/cd/3s7mXtYiAgkosm6+5vfbn3n3s8BSABi8kfH1oU9Qytrtn3tq/Qza667xYJEyb4s/rRrUX7/hXa9qvVs/fYt3c69ZvAPDj+QPXzzj60J6hkaorZ67x1HHtgOIHLuNtbaiIrF4qKEQpKI1I3vdj1ZPDHwpqAypAghUOb0+sZd837y+L/5WEysaL+6IYdzKUjJpjGd3F78HuhXqh1+8ePfzHdN/C5DkuUAxmrUbF74auvOuz5l5sgtmoiZo+Ri8HXZ8EjzWakthLYQOoIILEVn+1+e2PHZIz5+ZsSdAhBkXvvnFzJ/9N6LyXs+Hr1N/Mmeh8Oz/b+ndEiV8bXFrG/OO5PwYoXHr9KKe4lINWydNy6UgVIRpLKQKoLUEcpHzm+3p/qa3aQ6Mbkuv7unna9df4KvXH+i/O7/tCefebOnrjeHR869InUIqaN4XGWhZGjrH12Q8XGe3E38Zix9fAEQhYGJGhlYUAAIbeHVJGmqsrsOPO0nd6Gh5UimNtp97CWpDaQ2iHYffUmOZGrdgqmonX/3s2ekjKqE5unjpkhMDearEqEjvXBeSpGQV4Wdo0tEAMiUhQwsRIohU3EbA8P3SgfmQUs//OgpgdIcWQXIKkBSeU7phx8+5cGISFNotR0Y3RKPZSFTiMcNLGTKIv/ZtaVePST23gqxfwBAlnpGNsfxAYgAiN84NkI0K+o8P78SVyd+OZ8vXt4mK6oYCG2Bi5e34URPpV90/MxtEmF9ciyh2Y0PlM8MbU4q5z067XsLQCpSMuqffIQ0QSiANFzpgDWDxzKzKhP/yyffEpqlCP7fxDL66JNvVTbliexsofzLuvES40c3stuSYN6zSTgBQIz+Y89GwC4QASOe1KtIEAFAAQHSxezJswt4eLhduJcRmkCa4Ns0ONTOHacXApCQJPzvk+PF4zNgw9sz759dP5MnGYOCiGTh5MBzQhMoECAt4jIARBBPTlpAtjblAUiz5/A2EQiigIBAgAL3O99OCbJ7D20DIGVrc64ypqZ4vADT5ike638u8V+gAljZbDM/vbqaS9FaUgRSTg2FeAAVwwktjFi2MCMm8mnuvbkx7isgXB+hEJdagJQA9Q9sFGPZarF6yThpssK9ZGU8hfjFFYHz5fbsR+dXJT8C0/6I5o8PPh+/jZsgEICWgFZAIAEtIOrTwzalOdp7dAOkCBD4ZxLk+saljO9Loc1nRzbYlLbUUDNMBKBUjo0R/y5wLxgQ8h1Dzye/VMqTFj8fXmyL0SapCSQkCMaVEkJEIFIgsuCmuj4Awl7qXUtawZ1aQDAAJAgMBoEAMCSIBXDl+loAHRjN3IhOXG4xnILhKhibgk3PBha2QLQ2gUjC5sOvFw4M3Fb9jXmXAdw6DGWPjj4eqydBWlRUQSDBWleUlPObegVAPJlbBq3dMw3WAaCVayvX1mASMEdPfQ1RJDC7rheJiyFg81MIzw2h1NELLkWgQCJ3fOhJuPOPP1vAZKa2kI8bJQFnlDAoBVowt58v9DURoxpKAVIBUgNKg9X0EqEBd3aDbwxW85dnmuXyJX0V7zHdAmWCyYUoHOlHNFwCT4Rb/DMFAOWLhVpmWiy0BMgCxCBnvs7EIALEknmDUe/gfNYBiCIAEkwGgOvnJy2WYTu7wbkQzArcfbFFbrzzhmUJZgI7SHbbHkOALaFwYghVSC0ylwp18o7qUQEA2YPjcyDo1oLwQe6MtVNEaVa3zRuz2VI9qwCsgtiVKgVWAay/Rwq28zQ4F8KyArNEODBej9VLJxiCGRLMEgzlYMnBEtgK5DpGkDsz2lxR0ESGC10Z1N3TAIIFkQSIE6de/52RJZsSFoYDaB2rABP3rRzKGPar0+DxYqwcS1hoUDFMIZ2ykEHJhjptIWErkAoWCmC3qbBANMgGAAQzc8P6ptHiuTzKvSUXe6oSc1AqDnapAaUEACYdRCydWioFlgFYOhX7RmEuD8JaDcsBDAewrEGqKgTAFpqZJZg1vJIWsuJuy7Gl76wbZ2YWADi1uToLqSYmvxiGyRpASRfoEpCqEvSWVIDQsk1X5Vk5KBnAOhejaBAe/1UFzMMZGwD19XlMFoUJKW1ZITYdq8jyVh0SEDJTvWX2BJymDMDKxnSXDQUmdt+EKbFT0G0jDpJlQFHvWKNsbRyIVdNOwRQYClMHTsNMCRgbwHIKxqZgOAXLGmLFooGo89IcawPy9ywrWGhYp6aPV9WY7nIxw8JVbHptw35miSgLTPxnL0yBnYsT24bSiPomWvXS5j7WqZCdckwKU/t6EA2XEG/Ct8AsBzBIR3rrqr7SwQuL4vtePQfHDs5Bptc37vdcAi5ps+TtO7+gQA8yJMIJxthH11DunwJLGSvlzA4Vl9uUnhKz6i+wDGBDQml3N8Irmfjr4M36r0UVML/lAubUlopdQ8stO3U5gIf1oWBZgwI9sOitdZ/7hFJFQTSjXHPf3J3xylOIcsDoz64id2AAXEZFRZMJ1wkIQwubToRXMsh9+AuUr+YQcRUim4axKUQ2jSgBqdrbOkXJcPlSdr2pxKdXMoCPSWaFmvvm7kQzyp5LuYyTZWaz9P1Vn/bcPbnVDGa/AVhIZuROZlDsGkZqaRrB/DRkwM2oPd1WtXXRsezLF36LIq4mqgbFu8K0iyHBUhYbXtl2bPStL9ZHU7LGx5yHMzYAI27LubX7bn9v/d5EGsS6jQw+R2JW/Gzj66IufcafVxkaJgpQujCF/KEhZPcPYPydrsd0S10xtXnZHu/GyKanuThWswrB19v2oKW6mNtz7VHf19oAxlZV4IzVoPqa7rZ/v/cNz+GZhE/WID4sG3mHzK/8r41/qOakj3vI2A3eLQGmrpfXT+zsWtL4xrb/tkHteFSJu4RxFUyqdrzx9Ud/PvZmx+ryYNRmbNW0cfz4sqnuyIqP79kuF8tCMonkF4lPfxnEaYdItqWya7se/F66vekfLAdRcl+LbBzgozvPfUc31hTqv92+y0NFfMuMrUL9s3ftktWpqYkPLz4XK3vr9/HCCMKqu+e+s/IXW1+TS1M5l1WIEtkFI3fs2NEA/9/mVlISTIw5T7f2qFTVseKv8i2mYG5j9yliCJgSzyp0DoQt72zZl9s7UB8Oh8vYbRnMAYIVzXvm7Xro59ef3v/01PXiJsMaFhrsth7VUnO0dfvKHyx4e+UhJPIx3ryCyeSRP4j7k1UlXwNADv3lpTWj/9H/bDSU30wwmshCkLFzX27b0fT7K3554YHdfxGNlFYDgGxK9bQd/I0dA2+dXj/2waU/BQmKvxKirFtqvmx8avGHzd9bcjYBE7l65ELOK2moUCjMn5H68GfTZMarchwsfpWtH/i7iw9O9UxsNWNTq0CWF7yx5pWadY0Tl546/FcAcMe/3v9avnNkTv+fn/kbBlnVmO5Jr5l1cMGryw/KVdW55KJMxH+E6aFmmNlQLpdrmZEjVO6PrC+TJ/3KmRWAUFA0+v71xaWr+cZ5f9bWXTyemQUA6XsaJgZ+cH5d1bK64YZvz7uBGdktB5KEtA7KJuGsteb/ACKFi6/qDW1mAAAAAElFTkSuQmCC" style=" vertical-align: middle; margin-right: 5px;" />BoysTown <span style="color:red;">new version</span> available</h2>'+
      '<a onclick="localStorage.setItem(\'update_remind\', parseInt(Math.floor(Date.now() / 1000))+42300);" class="hkclose" href="#hoakhuyapop">×</a>'+
      '<div class="hkcontent" style="color:#000;font-size: 12px !important;line-height: 1.5;">'+
      'Thank you for installing BoysTown User scripts, If you have an issue when using, just take the following steps to upgrade to a newer version'+
      '<h3 style="background-color: #1e1e1e;color: #ccc;font-size: 1.1em;font-weight: 700;line-height: 1;margin: 0;padding: 10px;text-transform: uppercase;position: relative;margin-top: 10px;">Change logs #'+newversion+'</h3>'+
      '<div style="background-color: #1e1e1e;font-size: 1.05em !important;font-weight: 600;color: goldenrod;line-height: 1.2;padding: 10px;text-transform: uppercase;position: relative;margin-top: 1px;font-family: monospace;">'+
      ''+newupdatetxt+
      '<div>'+
      '<div style="margin-top: 20px; text-align: right;margin-right: 20px;"> <button onclick="try{if(document.getElementsByClassName(\'hkbutton1\')[0].innerHTML.match(/refresh/gim).length==1){location.reload();}} catch(e){console.log()}; document.getElementsByClassName(\'loadingimg\')[0].style.display=\'inline\';document.getElementsByClassName(\'hkbutton1\')[0].innerHTML=\'Downloading\';setTimeout(function(){window.location.href=\'https://raw.githubusercontent.com/TheWolds/btwaterwall/master/newboytown.user.js\';document.getElementsByClassName(\'hkbutton1\')[0].innerHTML=\'Click install on Opened page\';document.getElementsByClassName(\'loadingimg\')[0].style.display=\'none\';}, 1500);setTimeout(function(){document.getElementsByClassName(\'hkbutton1\')[0].innerHTML=\'Cool, refresh to apply\';}, 6000);" class="hkbutton" style="vertical-align:middle"><span class="hkbutton1">Upgrade</span><img class="loadingimg" style="vertical-align: middle; display: none;" src="data:image/gif;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=" /></button></div>'+
      '</div>'+
      '</div>'+
      '</div>';

 
        
        
        document.body.innerHTML+=htmccs;
      
      }
    
    
  }
});
    

  } 
  appupdate();
}


if (location.href.match(/boystownbezgvykp|boystownbezgvykp|2tgix56pui5j63y7bq4bgeekjy4mw57zrnbvuvic2ncbt5gyxei7dcqd|boytownhkn6uciye/i) && location.href.match(/viewforum/)){


String.prototype.ismatch = function (regex) {
    return typeof this.match === 'function' && this.match(regex) !== null;
};
function insertAfter(referenceNode, newNode) {referenceNode.parentNode.insertBefore(newNode);}

  

Array.prototype.longest=function() {
    return this.sort(
      function(a,b) {  
        if (a.length > b.length) return -1;
        if (a.length < b.length) return 1;
          return 0
      }
    )[0];
}



  
var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};
loadAndExecute("https://code.jquery.com/jquery-3.4.1.min.js", function() {

  $(".row.bg1.global-announce,.topiclist.forums,li.sticky").remove();
  var fixl =0;
  var isbusy=false;$(".copyright").hide();
  $(".copyright").attr("id","wrapcs");
  var regc = /(Password\sfor\smy\sfiles\:.*IKIKX|password\sfor\s|password\sis.*IKIKX|password.*IKIKX|pass\:\s?.*IKIKX|passwd.*IKIKX|pass.*IKIKX|pw.*IKIKX)/gim;
  var loader ='<center id="clodxx" bgcolor="#fff" style="width: 100%;pointer-events: none;user-select: none;height: 15%;position: fixed;top: 30%;"><span class="spinner"></span></center>';
  $('head').append('<style>h2{padding: 0 !important;margin: 0 !important;} .postlink{font-size:24px !important;} @keyframes spinner { to {transform: rotate(360deg);} } .spinner:before { content: ""; box-sizing: border-box; position: absolute; top: 50%; left: 50%; width: 60px; height: 60px; margin-top: -10px; margin-left: -10px; border-radius: 50%; border: 2px solid #ccc; border-top-color: #000; animation: spinner .6s linear infinite; } </style>');
  $("a.row-item-link,a.topictitle").each(function() {
    var $this=$(this); 
     $(".copyright").html('');
  $(".forumbg").not('.announcement').attr('style','');
  $(".forumbg").not('.announcement').attr('class','forumbgcs')
    var timer = window.setInterval(function(){
      if (isbusy==false){
        isbusy=true;
        window.clearInterval(timer);
    if($this.attr("href").match(/11450/) == null){
     $(".forumbgcs").not('.announcement').append(loader);
      
       
      
      var urlc = $this.attr("href");
		
		
      if (fixl==0){$(".forumbgcs").not('.announcement').html(loader);fixl++;}
      $(".forumbgcs").not('.announcement').css("background-color","#fff");

		$.ajax({type: "GET",url: urlc,
		success: function(data){
          var mdcx ='';
         $("#wrapcs").html($("#wrapcs").html(data).find("#page-body"));

          var matkhau='';          var ormk='';

        var title =$("#wrapcs").find("h2.topic-title").text();
          mdcx+='<center><strong><h1 style="color:#000;font-size: 311%;margin: 22px;">'+title+'</h1></strong></center>';
		var img = data.match(/<img [^>]*src="http[^"]*"[^>]*>/gm);
        var passwoc = new DOMParser().parseFromString($("#wrapcs").find("div.content").html() , 'text/html').body.textContent.replace(/(\r\n|\n|\r|\s{2,})/gmi, " ")+"IKIKX";
        var passprofole = new DOMParser().parseFromString($("#wrapcs").find("div.profile-dl_pass").html() , 'text/html').body.textContent.replace(/(\r\n|\n|\r|\s{2,})/gmi, " ")+"IKIKX";
        try{var passccsig = new DOMParser().parseFromString($("#wrapcs").find("div.signature").html().replace("post=","post:"), 'text/html').body.textContent.replace(/(\r\n|\n|\r|\s{2,})/gmi, " ")+"IKIKX";} catch (e) {var passccsig ='';}
        
        //realpas
        // regpass
        try{var regpass = passwoc.match(regc)[0]; console.log('USING METHOD 1: '+regpass); } catch (e){ var regpass ='';console.log("RESULT METHOD 1: nodata , switch to 2...");}
          try{if (regpass.length==0) { regpass = passprofole.match(regc)[0];console.log('USING METHOD 2 PROFILE: '+regpass);}} catch (e){ var regpass ='';console.log("Data error");}
          try{if (regpass.length==0) { regpass = passccsig.match(regc)[0];console.log('USING METHOD 2: '+regpass);}} catch (e){ var regpass ='';console.log("Data error");}
    
          if (regpass!=""){
        
       var chia = regpass.split(":");
           var oldchia = chia.longest();
            if  (chia.length==1) {chia = regpass.split(" ");} 
            if (chia.longest().length>70){chia = regpass.split(" "); 
                chia = chia.filter(function(_item) {return _item.length>=4 && !_item.match(/(PLEASURE|\s?thanked|viewtopic\.php|\.rarfile|\.mp4|[a-z0-9]{75,}|http|openload\.cc|dl\.free\.fr|\.jpg|megaupload\.nz|\.avi|FILE[0-9]{3,}|\.mov|\.wmv|\.3gp|\.mkv|[0-9]{2}h[0-9]{2}m[0-9]{2}s|DSCF[0-9]{4,}|[0-9]{2}\.[0-9]{2}\.[0-9]{4}|Updated|日本帥|Pc\_[0-9]{4,})/gim);});
              console.log(chia);            
            } 
        var hoakhuya = chia[0];
     
       var mk2 = chia.longest();
                
            var noslit=false;
         var mk3 = chia[2];
         if (mk2.match(/Boylovers|prevail/gi)){mk2 = oldchia.replace("password is",""); noslit = true;}
         if (mk3 !=mk2 && mk3 && mk3 !=hoakhuya && !mk3.match(/\s\-\s/)) { var txt2 ='<span style="color:#000"> or </span>'+mk3;} else {var txt2='';}
        try{var matkhau = mk2.replace("IKIKX","");} catch (e){ var matkhau ='';}

          if (noslit==false){var endmk = matkhau.split(" ");
          if (endmk[0].length<3 && endmk[1]) {ormk = endmk[1];}
        try{if(endmk[0]!= 'undefined' && endmk[0] != "" && endmk[0].length>2){var ormk = endmk[0];} else if(endmk[1].length>2) {var ormk = endmk[1];} else {var ormk = endmk[2];}} catch(e){ }
          try{ormk = endmk.longest();console.log("RESULT METHOD 1: "+ormk); if (ormk=='signature'){ormk='';}console.log("RESULT METHOD 1: nodata");} catch(e){var ormk="";}
           } else {var ormk = matkhau;}
        }
          
          
          chia =null;
          if (ormk==""){console.log("RESULT METHOD 1: nodata");
          try{var regpass= passccsig.match(regc)[0];} catch (e) {}
        var chia = regpass.split(':');
            var oldchia = chia.longest();
            if  (chia.length==1) {chia = regpass.split(" ");} 
            if (chia.longest().length>60){chia = regpass.split(" "); 
                chia = chia.filter(function(_item) {return _item.length>=4 && !_item.match(/(PLEASURE|\s?thanked|viewtopic\.php|\.rarfile|\.mp4|[a-z0-9]{75,}|http|openload\.cc|dl\.free\.fr|\.jpg|megaupload\.nz|\.avi|\.mov|\.wmv|\.3gp|\.mkv|[0-9]{2}h[0-9]{2}m[0-9]{2}s|DSCF[0-9]{4,}|[0-9]{2}\.[0-9]{2}\.[0-9]{4}|Updated|日本帥|Pc\_[0-9]{4,})/gim);});
              console.log(chia);            
            } 
            
        var hoakhuya = chia[0];
        var mk2 = chia.longest();
         var mk3 = chia[2];
         var noslit=false;

          if (mk2.match(/Boylovers|prevail/gi)){mk2 = oldchia.replace("password is",""); noslit = true;} 
         if (mk3 !=mk2 && mk3 && mk3 !=hoakhuya) { var txt2 ='<span style="color:#000"> or </span>'+mk3;} else {var txt2='';}
        try{var matkhau = mk2.replace("IKIKX","");} catch (e){ var matkhau ='';}

          if (noslit==false){ var endmk = matkhau.split(" ");console.log("TRYING TO METHOD 2.. "+chia.longest());
          ormk = endmk.longest();
    

            console.log("RESULT METHOD 2: "+endmk.longest());
                            } else { ormk =mk2;}
          }
          
         if (ormk != matkhau && ormk !=""  ) { if (matkhau.length>50){var txt=txt2+'';} else if(matkhau.length<3 || matkhau=="is"){var txt= txt2+'<span style="color:#000"> or </span>'+matkhau+'</h2>';} } else if(ormk.length<3) {var txt=txt2+'';var ormk =matkhau;} else {var txt=txt2+'';try{var ormk =endmk.longest();} catch(e){ console.log('d');}}
          if (ormk=='password') { ormk='';}
          if(ormk.length){
          ormk=ormk.replace("o;4bv4.]Index","o;4bv4.]");
            if (ormk.match(/QueenBV4/)){ormk=ormk.replace('copy)',''); }
            if (ormk.match(/Claus7\/octRCnV/)){ormk='oYE9YFlDfCount-rfi '+ormk; }
            if (ormk.match(/Neverland\/\%6/)){ormk+=':124©657&&__"?##+~§"'; }
        mdcx +='<center><h2 style="color:red;"><span style="color:#000;">Password: </span>'+ormk+txt+'</center>';
        
          }

        
		try{if (img.length){
            
			for (r = 0; img.length> r; r++) {
				var biwurl = img[r];
				if (biwurl.match(/s19\.directupload\.net/) ==null)  {
				var biwurl = biwurl.replace('class="postimage"','style="max-width:49%"');
				mdcx +=biwurl;
			}
	}}} catch (e) {mdcx='';}
        
        var xdatax =$("#wrapcs").find("div.content");
		xdatax.find("a.postlink").each(function() {
			var url =$(this).html();
			if(url.match(/dl\.free\.fr|minfil\.com|datafilehost\.com|anonfile\.com|rupan\.net|megaupload\.is|myfile\.is|karinto\.in/) && url.match(/\.jpg|\.png|img\ssrc|pixs\.ru|sup\.co\.il|jpg\.htm|png\.htm|picshare\.ru|imgur\.com|imx\.to/) ==null){mdcx += '<h2 style="border:unset;"><a href="'+url+'" class="postlink">'+url+'</a></h2>';}
          
       
		})
if (ormk.length>3){
if(mdcx.length<3){
         $("#wrapcs").not('.announcement').find(".first").remove();
          $("#wrapcs").not('.announcement').find(".author").remove();
          $("#wrapcs").not('.announcement').find("br").remove();
          $("#wrapcs").not('.announcement').find("hr").remove();
          $("#wrapcs").not('.announcement').find(".notice").remove();
          $("#wrapcs").not('.announcement').find(".post-buttons").remove();
          $("#wrapcs").find('a.postlink[href*=".jpg"]').remove();
          $("#wrapcs").find('div').each(function(){
            var cir = $(this).text().replace(/(\r\n|\n|\r|\s{2,})/gmi, "");
          
            if (cir.length<4 ) {$(this).remove();}
          
          })
          $("#wrapcs").find('a.postlink[href*=".png"]').remove();
          $('#wrapcs').find('a.postlink').each(function() {
           var htmlx= $(this).html();
            if (htmlx.match(/img\ssrc/) ==null){
            $(this).empty();
              $(this).html('<br><h2 style="border:unset;"><a href="'+htmlx+'" class="postlink">'+htmlx+'</a></h2><br>');
             
            }
            
          })
         	
              var lcisc = $("#wrapcs").find("div.postbody").html();
           
              if(ormk == null || ormk=="") { $(".forumbgcs").not('.announcement').append('<center><strong><h1 style="color:#000;font-size: 311%;margin: 22px;">'+title+'</h1></strong></center>'+lcisc+'<hr>');}
              else{$(".forumbgcs").not('.announcement').append(mdcx+'<hr>'); $(".forumbgcs").not('.announcement').html($(".forumbgcs").not('.announcement').html().replace("undefined",""));}
            } else { $(".forumbgcs").not('.announcement').append(mdcx+'<hr>');$(".forumbgcs").not('.announcement').html($(".forumbgcs").not('.announcement').html().replace("undefined",""));}
} else {
       
       

         $("#wrapcs").not('.announcement').find(".first").remove();
          $("#wrapcs").not('.announcement').find(".author").remove();
          $("#wrapcs").not('.announcement').find("br").remove();
          $("#wrapcs").not('.announcement').find("hr").remove();
          $("#wrapcs").not('.announcement').find("h3").remove();
          $("#wrapcs").not('.announcement').find(".notice").remove();
          $("#wrapcs").not('.announcement').find(".post-buttons").remove();
          $("#wrapcs").find('a.postlink[href*=".jpg"]').remove();
          $("#wrapcs").find('a.postlink[href*=".png"]').remove();
          $('#wrapcs').find('a.postlink').each(function() {
           var htmlx= $(this).html();
            if (htmlx.match(/img\ssrc/) ==null){
            $(this).empty();
              $(this).html('<h2 style="border:unset;"><a href="'+htmlx+'" class="postlink">'+htmlx+'</a></h2>');
      
            }
            
          })

   var lcisc ='';document.querySelector("#wrapcs").querySelectorAll('div.postbody').forEach(function(el) { if (el.innerHTML.match(/(viewtopic\.php)/gmi)==null){lcisc+=el.innerHTML.replace('class="content"','class="content" style="font-size: 26px;"');} })
 
$(".forumbgcs").not('.announcement').append('<center><strong><h1 style="color:#000;font-size: 311%;margin: 22px;">'+title+'</h1></strong></center>'+lcisc+'<hr>');

           $(".forumbgcs").not('.announcement').find('a.postlink').each(function() {if ($(this).text()=="") { $(this).remove();}})
          $(".forumbgcs").not('.announcement').find('div').each(function(){var cir = $(this).text().replace(/(\r\n|\n|\r|\s{2,})/gmi, "");console.log(cir.length); if (cir.length<4 ) {$(this).remove();console.log("remove");}})
  
}
         

		
		}}).done(function() {$("#clodxx").remove();$(".forumbgcs").not('.announcement').css("background-color","#fff");isbusy=false; })

    }
    }
      },5); 
  })
  
  //ccd


});}

// the guts of this userscript
