const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const lenguaje = urlParams.get('lenguaje');
//let lenguaje = 'EN';
let IDIOMA;
try{
    IDIOMA = lenguaje ? `_${lenguaje.toLowerCase()}` : '';
    if(IDIOMA === '_es'){IDIOMA = '';}
} catch(err){
    lenguaje = '';
    IDIOMA = lenguaje ? `_${lenguaje.toLowerCase()}` : '';
//    console.log('IDIOMA:',IDIOMA, 'LENGUAJE:',lenguaje);
}
//console.log('IDIOMA:',IDIOMA,"_");

let Utils = {
    isMobile: () => {
        let isMobile = false; //initiate as false
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){isMobile = true;}

        return isMobile;
    },
    randomInt:(min=100, max=500) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    hasClass:(div, clase) => {
        let bol =  div.classList.contains(clase);
        return bol;
    }
}

let Select = {
    element:undefined,
    byId: function(id){
        this.element = document.getElementById(id);
        return this;
    },
    byClass: function(className) {
        this.element = this.element.getElementsByClassName(className);
        return this;
    },
    byTag: function(tag) {
        this.element = this.element.getElementsByTagName(tag);
        return this;
    },
    getContainer: (id, clase) => {
        return document.getElementById(id).getElementsByClassName(clase)[0];
    }
};

let UX_TEXTS ={
    enterfullScreenTooltip:'Ir a Pantalla Completa',
    enterfullScreenTooltipEN:'Go to Full Screen',
    exitfullScreenTooltip:'Salir de Pantalla Completa',
    exitfullScreenTooltipEN:'Exit Full Screen',
};

let Front = {
    w:0,
    h:0,
    resizeListener : (w = 1920, h = 1080) => {
        this.w = w;
        this.h = h;
        Select.byId("cuento").element.style.height = `${this.h}px`;
       
        var a = 1920,
        b = 1080,
        c = w > h ? w : h,
        d;
        d = c*(b/a);
        
        let s =  w / a;
        let dif = (h-(b*s))/2;
        gsap.to("#escenario", {duration:0.3, scale:s,transformOrigin:"top left"});
        
        try{  
            if(!Player.senaOculta){
                gsap.to("#senas_container",{duration:0.3, scale:s,transformOrigin:"bottom right"});
            }
        } catch (err){}
        
        if(Utils.isMobile && w <= 823){
            try{
                gsap.to('.controllers_container', {duration:0.3, scale:1.4,transformOrigin:'bottom center'});
            } catch (err){}
        } else {
            try{
                gsap.to('.controllers_container', {duration:0.3, scale:1,transformOrigin:'bottom center'});
            } catch (err){}
        }
        
        Select.byId("escenario").element.style.top = `${dif}px`;

        try{
            if(h<b*s){
                ANIM.compensaEscenas(dif);
            } else {
                ANIM.compensaEscenas(0);
            }
        } catch (err){
            
        }
//        console.log('RESIZE LISTENER');
    },
    lookFullScreen:(e) => {
        let doc = window.document;
        let docEl = doc.documentElement;

        let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        let boton_fullscreen = document.getElementsByClassName('btn_fullscreen');
        if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            for (let i = 0; i < boton_fullscreen.length; i++){
                 boton_fullscreen[i].getElementsByClassName('ir_full')[0].style.display = 'block';
                 boton_fullscreen[i].getElementsByClassName('volver_full')[0].style.display = 'none';
                 boton_fullscreen[i].setAttribute('data_tooltip', UX_TEXTS[`enterfullScreenTooltip${IDIOMA}`]);
            }
        } else {
            for (let i = 0; i < boton_fullscreen.length; i++){
                boton_fullscreen[i].getElementsByClassName('ir_full')[0].style.display = 'none';
                boton_fullscreen[i].getElementsByClassName('volver_full')[0].style.display = 'block';
                boton_fullscreen[i].setAttribute('data_tooltip', UX_TEXTS[`exitfullScreenTooltip${IDIOMA}`]);
            }
        }
    },
    toogleFullScreen:() => {
        let doc = window.document;
        let docEl = doc.documentElement;

        let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;

        if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            requestFullScreen.call(docEl);

        } else {
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
              } else if (doc.mozCancelFullScreen) { /* Firefox */
                doc.mozCancelFullScreen();
              } else if (doc.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                doc.webkitExitFullscreen();
              } else if (doc.msExitFullscreen) { /* IE/Edge */
                doc.msExitFullscreen();
              }

        }

    }
};

let Player = {
    escena_actual:0,
    parrafo_actual:0,
    audios_parrafo:[],
    audios_fx:[],
    conAudio:true,
    conVideo:false,
    senasVisible:false,
    onPlayer:true,
    senaOculta:false,
    DEFAULT_SCALE_VIDEO_SENAS:0.8,
    MIN_SCALE_VIDEO_SENAS:0.6,
    MAX_SCALE_VIDEO_SENAS:1.2,
    DEFAULT_ALPHA_VIDEO_SENAS:55,
    MIN_ALPHA_VIDEO_SENAS:20,
    MAX_ALPHA_VIDEO_SENAS:100,
    TIEMPO_CIERRE_ALPHA_VIDEO:2,
    TIEMPO_FORZAR_CIERRE_PLAYER:1,
    POS_VIDEO_SENAS:{x:0,y:0},
    setTooltip:(text, div, cual = 'bajo') => {
        if(!Utils.isMobile()){
            Front.resizeListener(window.innerWidth, window.innerHeight);
            let pos = div.getBoundingClientRect();
            let tt = Select.byId(`tooltip_${cual}`).element;
            tt.getElementsByTagName('p')[0].innerHTML = text;
            tt.style.display = 'block';
            let w = tt.offsetWidth - div.offsetWidth;
            let x = pos.left - (w *0.5);
            let y = pos.top - 40;
            let triangulito = tt.getElementsByClassName('triangulito')[0];
            let xTriangulito = 0;

            if(x+tt.offsetWidth > window.innerWidth){
                let xant = x;
                x = window.innerWidth - tt.offsetWidth;
                xTriangulito = (xant-x);
            }

            if(cual === 'alto'){
                let img = div.getAttribute('data_miniatura');
                Select.byId('image_tooltip').element.src = img;
            }
            gsap.fromTo(tt, {alpha:0, left:x, top:y+5},{duration:0.5, alpha:1, left:x, top:y});
            gsap.to(triangulito, {duration:0.5, x:xTriangulito});
            Select.byId('player_container').element.style.zIndex = 5;
            Select.byId('subtitulos').element.style.zIndex = 4;
        }
    },
    hideToolTip:() => {
        let tt = document.getElementsByClassName('tooltip');
        for(let i = 0; i < tt.length;i++){
            tt[i].style.display = 'none';
        }
        Select.byId('subtitulos').element.style.zIndex = 5;
    },
    forceClosePlayer:() => {
        Player.temp = {n:0};
        gsap.killTweensOf(Player.temp);
        gsap.to(Player.temp, {duration:Player.TIEMPO_FORZAR_CIERRE_PLAYER, n:1, onComplete:function(){
            Player.tooglePlayer('close');
        }});
    },
    tooglePlayer:(accion = 'open') => {
        gsap.killTweensOf("#btn_abrir_player");
        gsap.killTweensOf("#player");
        gsap.killTweensOf("#subtitulos");
        gsap.killTweensOf("#marcador_escena");
        if(accion == "open"){
            let w = window.innerWidth;
            let bt = w > 825 ? 100 : 60;
            gsap.to("#subtitulos", {duration:0.3, bottom:bt});
            gsap.to("#btn_abrir_player", {duration:0.1, bottom:-52});
            gsap.to("#player",{duration:0.3, marginTop:0});
            gsap.to("#marcador_escena",{duration:0.3, alpha:0});
            if(Utils.isMobile()){
                Player.forceClosePlayer();
            }
        } else {
            gsap.to("#subtitulos",{duration:1.3, bottom:40, delay:1});
            gsap.to("#btn_abrir_player",{duration:0.3, bottom:0, delay:1.4});
            gsap.to("#player",{duration:1.7, marginTop: 183, delay:1, onStart:function(){
                Player.toogleListadoEscena('close');
                Player.toogleConfigurador('close');
                gsap.to("#marcador_escena",{duration:0.3, alpha:1});
            }});
        }
    },
    toogleListadoEscena:(accion = 'open') => {
        gsap.killTweensOf("#container_desplegable");
        gsap.killTweensOf(Player.temp);
        switch (accion){
            case 'open':
                if(Select.byId("desplegable_escenas_container").element.classList.contains('close')){
                    Select.byId("desplegable_escenas_container").element.classList.replace('close', 'open');
                }
                 if(!Select.byId("title_container").element.classList.contains('open')){
                     Select.byId("title_container").element.classList.add('open');
                }
                break;
            case 'close':
                Select.byId('container_desplegable').element.style.zIndex = 4;
                Select.byId('subtitulos').element.style.zIndex = 5;
                if(Select.byId("desplegable_escenas_container").element.classList.contains('open')){
                    Select.byId("desplegable_escenas_container").element.classList.replace('open', 'close');
                }
                
                if(Select.byId("title_container").element.classList.contains('open')){
                     Select.byId("title_container").element.classList.remove('open');
                }
                
                gsap.to("#container_desplegable", {duration:0.1, height:0,delay:0.6, transformOrigin:"center bottom"});
                if(Utils.isMobile()){
                    Player.forceClosePlayer();
                }
                break;
            case 'toogle':
                
                if(Select.byId("desplegable_escenas_container").element.classList.contains('close')){
                    Select.byId('container_desplegable').element.style.zIndex = 5;
                    Select.byId('subtitulos').element.style.zIndex = 4;
                    Select.byId("desplegable_escenas_container").element.classList.replace('close', 'open');
                    
                    if(!Select.byId("title_container").element.classList.contains('open')){
                        Select.byId("title_container").element.classList.add('open');
                    }
                    gsap.to("#container_desplegable", {duration:0.1, height:515, transformOrigin:"center bottom"});
                    if(Utils.isMobile()){
                        Player.forceClosePlayer();
                    }
                 } else if(Select.byId("desplegable_escenas_container").element.classList.contains('open')){
                    Select.byId('container_desplegable').element.style.zIndex = 4;
                    Select.byId('subtitulos').element.style.zIndex = 5;
                    Select.byId("desplegable_escenas_container").element.classList.replace('open', 'close');
                    if(Select.byId("title_container").element.classList.contains('open')){
                         Select.byId("title_container").element.classList.remove('open');
                    }
                    gsap.to("#container_desplegable", {duration:0.1, height:0,delay:0.6, transformOrigin:"center bottom"});
                }
                break;
        }
    },
    toogleConfigurador:(accion = 'open') => {
        console.log(accion);
        switch (accion){
            case 'open':
                if(Select.byId("configurador").element.classList.contains('close')){
                     Select.byId("configurador").element.classList.replace('close', 'open');
                }
                if(Select.byId("container_configurador").element.classList.contains('close')){
                     Select.byId("container_configurador").element.classList.replace('close', 'open');
                }
                break;
            case 'close':
                if(Select.byId("configurador").element.classList.contains('open')){
                     Select.byId("configurador").element.classList.replace('open', 'close');
                }
                if(Select.byId("container_configurador").element.classList.contains('open')){
                     Select.byId("container_configurador").element.classList.replace('open', 'close'); 
                }
                break;
            case 'toogle':
                if(Select.byId("configurador").element.classList.contains('close')){
                     Select.byId("configurador").element.classList.replace('close', 'open');
                } else if(Select.byId("configurador").element.classList.contains('open')){
                     Select.byId("configurador").element.classList.replace('open', 'close');
                }
                
                if(Select.byId("container_configurador").element.classList.contains('close')){
                     Select.byId("container_configurador").element.classList.replace('close', 'open');
                } else if(Select.byId("container_configurador").element.classList.contains('open')){
                     Select.byId("container_configurador").element.classList.replace('open', 'close'); 
                }
                break;
        }
    },
    checkCheck:(nombre, chequeado) => {
        if(!chequeado){
            if(nombre === 'check_subtitulos'){
                Select.byId('check_relato').element.checked = true;
            } else {
                Select.byId('check_subtitulos').element.checked = true;
            }
        }

        let con_audio = Select.byId('check_relato').element.checked;
        let con_subtitulos = Select.byId('check_subtitulos').element.checked;

//        console.log(con_subtitulos,con_audio);
        Player.toogleSubtitulos(con_subtitulos);
        Player.toogleAudio(con_audio);
    },
    toogleSubtitulos:(ver) => {
        if(ver){
            Select.byId('subtitulos').element.style.display = 'block';
        }  else {
            Select.byId('subtitulos').element.style.display = 'none';
        }
    },
    toogleAudio:(ver) => {
        Player.conAudio = ver;
        Player.stopAudioParrafo();
    },
    creaListadoEscenas:(arr) => {
        let newArr = arr.map((item, i) => {
            let i_st = i > 8 ? (i+1) : `0${(i+1)}`;
            return `<div class="item_listado_escena" data_escena="${i}" data_nombre="${item[`nombre${IDIOMA}`]}">
                        <div class="img_cont">
                            <img src="${item.miniatura}" alt="miniatura">
                        </div>
                        <div class="play"></div>
                        <span class="n_escena">${i_st}.</span>
                        <p class="titulo_escena">${item[`nombre${IDIOMA}`]}</p>
                    </div>`;
        });
        return newArr.join("");
    },
    creaPuntosEscenas: (arr) => {
        let newArr = arr.map((item, i) => {
            let i_st = i > 8 ? (i+1) : `0${(i+1)}`;
            return `<div class="punto" data_escena="${i}" data_nombre="${item[`nombre${IDIOMA}`]}" data_miniatura="${item.miniatura}" data_tooltip="${i_st} ${item[`nombre${IDIOMA}`]}">
                        <div class="borde"></div>
                        <div class="centro"></div>
                    </div>`;
        });

        return newArr.join("");
    },
    setCurrent: (nEscena, nombreEscena) => {
        let itemListadoEscena = document.querySelectorAll('.item_listado_escena');
        itemListadoEscena.forEach(item =>{
            if(item.classList.contains('current')){
                item.classList.remove('current');
            }
            if(item.getAttribute('data_escena') == nEscena){
                item.classList.add('current');
            }
        });
        
        let punto = Select.byId('punto_escena_container').element.querySelectorAll('.punto');
        punto.forEach(item =>{
            if(item.classList.contains('current')){
                item.classList.remove('current');
            }
            if(item.getAttribute('data_escena') == nEscena){
                item.classList.add('current');
            }
        });
        Select.byId('title_container').byClass('nombre_escena').element[0].innerHTML = nombreEscena;

        let i_st = nEscena > 8 ? (nEscena+1) : `0${(nEscena+1)}`;
        Select.byId('marcador_escena').byClass('actual').element[0].getElementsByTagName('p')[0].innerHTML = i_st;
        
    },
    nextScene:() => {
        let arrEscenas = JSON_CUENTO.escenas;
        if(Player.escena_actual < arrEscenas.length-1){
            let i = Player.escena_actual + 1;
            Player.setScene( i, arrEscenas[i][`nombre${IDIOMA}`]);
            Player.playSoundParrafo(i,0,true);
        } else {
            //console.log("FIN");
        }
        ANIM.pausaInteractividad();
        Player.tooglePlayPauseIco();
    },
    prevScene:() => {
        let arrEscenas = JSON_CUENTO.escenas;
        if(Player.escena_actual > 0){
            let i = Player.escena_actual - 1;
            Player.setScene( i, arrEscenas[i][`nombre${IDIOMA}`]);
            Player.playSoundParrafo(i,0,true);
        }
        ANIM.pausaInteractividad();
        Player.tooglePlayPauseIco();
    },
    nextParrafo:() => {
        let arrEscenas = JSON_CUENTO.escenas;
        let arrParrafos = arrEscenas[Player.escena_actual][`parrafos${IDIOMA}`];
        Player.desActivaBtnSiguiente();
        if(Player.parrafo_actual < arrParrafos.length-1){
//            console.log("NEXT actual es", Player.parrafo_actual);
            let i = Player.parrafo_actual + 1;
            Player.setParrafo( i );
            Player.putSubtitulos(Player.escena_actual, Player.parrafo_actual);
            let label = `${Player.escena_actual}_${Player.parrafo_actual}`;
            
            Player.playVideo(Player.getTimeVideoFromLabel(label));
           
            ANIM.main_tl.pause();
//            ANIM.main_tl.resume(label, false);
            ANIM.main_tl.play(label, false);
        }
        ANIM.pausaInteractividad();
        Player.resetBotonesInteraccion();
        Player.tooglePlayPauseIco();
    },
    prevParrafo:() => {
        let arrEscenas = JSON_CUENTO.escenas;
        
        Player.desActivaBtnSiguiente();
        if(Player.parrafo_actual > 0){
//            console.log("PREV actual es", Player.parrafo_actual);
            let i = Player.parrafo_actual - 1;
            Player.setParrafo( i );
            Player.putSubtitulos(Player.escena_actual, Player.parrafo_actual);
             let label = `${Player.escena_actual}_${Player.parrafo_actual}`;
            
            Player.playVideo(Player.getTimeVideoFromLabel(label));
            
            ANIM.main_tl.pause();
//            ANIM.main_tl.resume(label, true);
            ANIM.main_tl.play(label, false);
        }
        ANIM.pausaInteractividad();
        Player.resetBotonesInteraccion();
        Player.tooglePlayPauseIco();
    },
    setScene:(nEscena, nombreEscena, seteando=false) => {
//        console.log("SETEANDO ESCENA",Player.conVideo);
        Player.stopAudioParrafo();
        Player.resetSubtitulos();
        Player.resetBotonesInteraccion();
        Player.escena_actual = nEscena;
        Player.setCurrent(nEscena, nombreEscena);
        Player.setParrafo(0);
        Player.desActivaBtnSiguiente();
        if(Player.conVideo){
            Player.ponVideo(nEscena);
//            Player.playVideo();
            Player.hideSenasOnEnd();
        }
        if(!seteando){
            let label = 'escena_'+nEscena.toString();
            ANIM.main_tl.play(label);
        }
        Player.onPlayer = true;
        try{
            dataLayer.push({ nombreCuento: JSON_CUENTO[`nombre${IDIOMA}`] }, { nombreEscena: nombreEscena }, { event: "cambio de escena" });
        } catch (err){
            console.log('DATALAYER',err.message);
        }
    },
    setParrafo:(nParrafo = 0) => {
        Player.parrafo_actual = nParrafo;
    },
    playSoundParrafo: (i, j, muted = false) => {
        Player.escena_actual = i;
        Player.setParrafo(j);
        Player.stopAudioParrafo();
        if(Player.conAudio){
            try{
               let sound = createjs.Sound.play(`audio_${i}_${j}`);
                if(muted){
                    sound.volume = 0;
                } else {
                    sound.volume = 1;
                }
            }  catch (err){
                console.log(err);
            }
        }
    },
    stopAudioParrafo:() => {
      createjs.Sound.stop();
        ///// CREAR UN "DISCRIMINADOR" DE AUDIOS DE TEXTO Y DE FX
    },
    arr_SOUNDS_FX:[],
    playSoundFX: (cual, loop = false, from = 0) => {
        let sound;
        if(loop){
            sound = createjs.Sound.play(cual, {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
        } else {
            sound = createjs.Sound.play(cual);
            sound.position = from*1000;
        }
        Player.arr_SOUNDS_FX.push({sound:sound, id : cual});
    },
    cambiaVolume:(cual = 'musica_', vol = 0.1) => {
        let todasLasVeces = Player.arr_SOUNDS_FX.filter(id => id.id === cual);
        try{   
            let miAudio = todasLasVeces[todasLasVeces.length-1].sound;
            miAudio.volume = vol;
        } catch(err){
//            console.log(err.message);
        }    
    },
    fadeVolume:(cual, desde = 1, hasta=0.2 , t = 1) => {
        let o = {vol:desde};
        let fade = gsap.timeline({onUpdate:function(){
            Player.cambiaVolume(cual, o.vol);
        }});
        
        fade.to(o, t,{vol:hasta});
        fade.play();
    },
    arrWaitSounds:[],
    waitForSound:(cual, waitFor=4, cuantoDura=14, cuantasVeces = 1, cuantoDejoAlFinal = 0, volume=1, fade = false, fadeFrom = 12, volFadeTo = 0) => {
        
        if(!Player[`wait_sound_${cual}`]){
            Player[`wait_sound_${cual}`] = gsap.timeline({repeat:cuantasVeces-1});
            
            let o = {val:0};
            let waitTL = `+=${waitFor}`;
            Player[`wait_sound_${cual}`]

            .addLabel('inicio')
            .call(function(){
                Player.playSoundFX(cual);
                Player.cambiaVolume(cual,volume);
            }, null, waitTL)
            .to(o, cuantoDura+cuantoDejoAlFinal,{val:100})
            .addLabel('final')
            ;
            
            if(fade){
                Player[`wait_sound_${cual}`].call(function(){
                    Player.fadeVolume(cual,volume,volFadeTo, cuantoDura-fadeFrom);
                }, null, waitFor+fadeFrom);
            }
            
            Player.arrWaitSounds.push(Player[`wait_sound_${cual}`]);
        }
        Player[`wait_sound_${cual}`].play(0);
    },
    pauseWaitSound:() => {
         Player.arrWaitSounds.map((item, i) => {
            item.pause();
        });
    },
    putSubtitulos: (nEscena, nParrafo) => {
        let st = JSON_CUENTO.escenas[nEscena][`parrafos${IDIOMA}`][nParrafo].texto;
        console.log("SUBS", nEscena, nParrafo, st);
        Select.byId('subtitulos').byTag('p').element[0].innerHTML = st;
    },
    resetSubtitulos:() => {
        Select.byId('subtitulos').byTag('p').element[0].innerHTML = '';
    },
    resetBotonesInteraccion:() => {
        let btn_interact = document.querySelectorAll('.btn_interact');
        btn_interact.forEach(item => {item.style.display = 'none';});
    },
    tooglePlayPauseIco:() => {
         if(ANIM.main_tl.paused()){
             Select.byId('player_btn_play_pause').element.getElementsByClassName('play')[0].style.display = 'block';
             Select.byId('player_btn_play_pause').element.getElementsByClassName('pause')[0].style.display = 'none';
        } else {
             Select.byId('player_btn_play_pause').element.getElementsByClassName('play')[0].style.display = 'none';
             Select.byId('player_btn_play_pause').element.getElementsByClassName('pause')[0].style.display = 'block';
         }
    },
    tooglePlayPause:() => {
        if(ANIM.main_tl.paused()){
            let label = ANIM.main_tl.previousLabel();
            let esFin = label.indexOf('fin');
            if(esFin === -1){
                Player.playVideo(Player.getTimeVideoFromLabel(label));
                ANIM.main_tl.play(label);
            } else {
                Player.nextScene();
            }
        } else {
            Player.pauseVideo();
            ANIM.main_tl.pause();
            Player.stopAudioParrafo();
            Player.resetSubtitulos();
        }
        Player.tooglePlayPauseIco();
    },
    loadAudioImages:(arr, arrfx, arrImg, arrVideosAdicionales = undefined) => {
        let tmp = arr.map((item, i) => {
             return  {
                        src:item[`audio${IDIOMA}`], data: {
                            audioSprite: item[`parrafos${IDIOMA}`].map((obj,j) => {
                                let duration = (obj.tiempo[1] - obj.tiempo[0])*1000;
                                return {id:`audio_${i}_${j}`, startTime:(obj.tiempo[0]*1000), duration:duration}
                            })
                    }
            };
        });
        
        let tmp2 = arr.filter((item, i) => {
             if(item[`video${IDIOMA}`] !== undefined){
                return item;
             }
        });
        
        let arrVideos = tmp2.map((item,i) => {
             return  {src:item.video, id:`video_${i}`,type : createjs.AbstractLoader.BINARY};
        });
        
        if(arrVideos.length > 0){
            Player.conVideo = true;
            Player.openSenas();
            let valores = {
                value:Player.DEFAULT_ALPHA_VIDEO_SENAS-Player.MIN_ALPHA_VIDEO_SENAS,
                maxValue:Player.MAX_ALPHA_VIDEO_SENAS-Player.MIN_ALPHA_VIDEO_SENAS,
                w:110,
                h:12,
                decimales:0,
                hknob:30,
                wknob:30,
                rknob:15,
                colorknob:'#ffffff',
                colorfondo:'#ffffff',
                colorbarra:'#4C6172'
            };
            Slider.init("alpha_slider", valores, Player.alphaVideoListener);
            Player.setAlphaVideo(Player.DEFAULT_ALPHA_VIDEO_SENAS, `${Player.DEFAULT_ALPHA_VIDEO_SENAS}%`);
            App.setSenasControllers();
            Player.escalaVideoSenas('',true);
        } else {
            Player.closeSenas();
        }
        let arrVidAdic;
        if(arrVideosAdicionales !== undefined){
            arrVidAdic = arrVideosAdicionales.map((item, i) => {
                return {src:item.url, id:`video_interaccion_${item.interaccion}`, type : createjs.AbstractLoader.BINARY};
            });
        } else {
            arrVidAdic = [];
        }

        Player.audios_parrafo = tmp.map((item, i) => {
             return createjs.Sound.registerSound(item);
        });

        Player.audios_fx = arrfx.map((item) => {
            return createjs.Sound.registerSound(item.url, item.nombre);
        });

        let arrCompleto = Player.audios_parrafo.concat(Player.audios_fx,arrImg, arrVideos,arrVidAdic);
        
        let noload = false;
        let queue = new createjs.LoadQueue(true, null, true);
        Player.queue = queue;

        queue.loadManifest(arrCompleto);

        queue.on("fileload", event => {});

        queue.on("progress", event => {
            document.getElementById('barra_preload').getElementsByClassName('barra')[0].style.width = `${Math.trunc(event.progress*100)}%`;
            document.getElementById('cargador').getElementsByClassName('indicador_porcentaje')[0].getElementsByTagName('p')[0].innerHTML = `${Math.trunc(event.progress*100)}%`;
        });

        queue.on("fileprogress", event => {});

        queue.on("error", event => {
            if(!noload){
                queue.loadManifest(arrCompleto);
            }
            noload = true;
        });

        queue.on("complete", event => {
            document.getElementById('cargador').style.display = 'none';
            document.getElementById('btn_init').style.display = 'flex';
        });

        queue.load();

    },
    desActivaBtnSiguiente:() => {
        document.getElementById('btn_adelante').style.display = 'none';
    },
    activaBtnSiguiente:() => {
        document.getElementById('btn_adelante').style.display = 'flex';
        gsap.fromTo('#btn_adelante',{alpha:0}, {alpha:1, duration:1});
    },
    onBlur:() => {
        if(Player.onPlayer){
            ANIM.main_tl.pause();
            Player.stopAudioParrafo();
            Player.resetSubtitulos();
            Player.tooglePlayPauseIco();
            Player.pauseVideo();
            try{Player.pauseWaitSound();} catch (err){}
        }
    },
    hideOthersBut:(id) => {
        let escenas = document.querySelectorAll('.escena');
        escenas.forEach(item =>{
           item.style.display = 'none';
        });
        Select.byId(id).element.style.display = 'block';
    },
    ponVideo:(i) =>{
        let videoTarget = Player.queue.getResult(`video_${i}`);
        
        var src = videoTarget;
        var blob = new Blob( [ src ], { type: "video/mp4" } );
        var urlCreator = window.URL || window.webkitURL;
        var objUrl = urlCreator.createObjectURL( blob );
        
        
        let divVideo = `<video no-controls muted playsinline id="video_${i}" width="450px" height="560px">
                            <source type="video/mp4" src="${objUrl}"></source>
                        </video>
                        `;
        
        document.getElementsByClassName('video_container')[0].innerHTML = divVideo;
        
        gsap.set('#senas_container',{autoAlpha:0});
        
//        $(`video_${i}`).attr('playsinline',''); 
        
        let vid = document.getElementById(`video_${i}`);
        try{
            vid.removeEventListener("ended", Player.hideSenasOnEnd);
        } catch (err){ console.log('Señas On END NO',err.message);}
        vid.addEventListener("ended", Player.hideSenasOnEnd, false);
        
        if(JSON_CUENTO.videos_adicionales){
            JSON_CUENTO.videos_adicionales.map((item, j ) => {
                if(item.interaccion === i) {
                    Player.ponVideoInteraccion(item.interaccion);
                }
            });
        }
    },
    ponVideoInteraccion:(i) =>{
        let videoTarget = Player.queue.getResult(`video_interaccion_${i}`);
        var src = videoTarget;
        var blob = new Blob( [ src ], { type: "video/mp4" } );
        var urlCreator = window.URL || window.webkitURL;
        var objUrl = urlCreator.createObjectURL( blob );
        
        
         let divVideo = `<video no-controls muted playsinline id="video_interaccion_${i}" width="450px" height="560px">
                            <source type="video/mp4" src="${objUrl}"></source>
                        </video>
                        `;
        
        document.getElementsByClassName('video_container')[0].insertAdjacentHTML('beforeend',divVideo);// <---- append en vez de sobreescribir el div
//        $(`video_interaccion_${i}`).attr('playsinline','');

        let vid = document.getElementById(`video_interaccion_${i}`);
        try{
            vid.removeEventListener("ended", Player.hideSenasOnEnd);
        } catch (err){ console.log('Señas On END NO interaccion',err.message);}
        
        try{vid.addEventListener("ended", Player.hideSenasOnEnd, false);} catch (err) {console.log('no se puede agregar listener', err.message);}
    },
//    removeVideoInteraccion:(i) => {
//        let vid = document.getElementById(`video_interaccion_${i}`);
//        try{
//            vid.removeEventListener("ended", Player.hideSenasOnEnd);
//        } catch (err){ console.log('Señas On END NO interaccion',err.message);}
//        try{$(`#video_interaccion_${i}`).remove();}catch(err){console.log('no hay video que remover', err.message);}
//    },
    hideSenasOnEnd:(e) => {
        Player.senaOculta = true;
        gsap.to("#senas_container",{duration:0.7, scale:0, y:80, x:0, transformOrigin:'bottom right', ease:"back.in(1.7)"});
    },
    showSenas:() => {
        Player.senaOculta = false;
        gsap.to("#senas_container",{
            duration:0.5,
            scale:Player.getEscalaEscenario(),
            y:Player.POS_VIDEO_SENAS.y,
            x:Player.POS_VIDEO_SENAS.x
        });
    },
    forcePlayVideoCurrentTime:() => {
        let cual = Player.escena_actual;
        let vid = document.getElementById(`video_${cual}`);
        if(vid.paused){
            Player.playVideo(Player.getTimeVideoFromCurrentPosition());
        }  
    },
    playVideo:(tiempo = 0)=>{
        let cual = Player.escena_actual;
        if(Player.conVideo){
            try{ 
                if(Player.senasVisible){
                    let delay =  Player.getDelayVideo(cual);
                    let vid = document.getElementById(`video_${cual}`);
                    let vidInteraccion = document.getElementById(`video_interaccion_${cual}`);
                    let t = tiempo - delay;
                    if(t<0){t=0;}
//                    vid.setAttribute('webkit-playsinline', 'webkit-playsinline'); 
                    vid.currentTime = t;
                    vid.play();
                    
                    vid.style.display = 'block';
                    gsap.to('#senas_container',{autoAlpha:1, duration:0.2});
                    if(Player.senaOculta){
                        Player.showSenas();
                    }
                    
                    try{
                        Player.pauseVideoInteraccion();
                        vidInteraccion.style.display = 'none';
                    } catch (err){}
                }
            } catch (err){}
        }
    },
    pauseVideo:()=>{
        let cual = Player.escena_actual;
        if(Player.conVideo){
            try{
                let vid = document.getElementById(`video_${cual}`);
                vid.pause();
            } catch (err){}
        }
    },
    playVideoInteraccion:()=>{
        let cual = Player.escena_actual;
        if(Player.conVideo){
            try{ 
                if(Player.senasVisible){
                    let vid = document.getElementById(`video_${cual}`);
                    let vidInteraccion = document.getElementById(`video_interaccion_${cual}`);
//                    vidInteraccion.setAttribute('webkit-playsinline', 'webkit-playsinline'); 
                    Player.pauseVideo();
                    vidInteraccion.currentTime = 0;
                    vidInteraccion.play();
                    vid.style.display = 'none';
                    vidInteraccion.style.display = 'block';
                    gsap.to('#senas_container',{autoAlpha:1, duration:0.2});
                    if(Player.senaOculta){
                        Player.showSenas();
                    }
                }
            } catch (err){}
        }
    },
    pauseVideoInteraccion:()=>{
        let cual = Player.escena_actual;
        if(Player.conVideo){
            try{
                let vid = document.getElementById(`video_interaccion_${cual}`);
                vid.pause();
            } catch (err){}
        }
    },
    alphaVideoListener:(e)=>{
        if(e.type === 'ON_DRAG' || e.type === 'START_DRAG'){
            Draggable.get("#senas_container").disable();
            Player.killForceCloseBarraAlphaVideo();
        } else {
            Draggable.get("#senas_container").enable();
            Player.forceCloseBarraAlphaVideo();
        }
        let val = parseInt(e.detail.valor)+Player.MIN_ALPHA_VIDEO_SENAS;
        let st = `${val}%`;
        Player.setAlphaVideo(val,st);
        Player.forceZindexSenas();
    },
    setAlphaVideo:(val,st) => {
        document.getElementById('senas_container').getElementsByClassName('controllers_container')[0].getElementsByClassName('alpha_controller')[0].getElementsByClassName('porcentaje')[0].innerHTML = st;
        gsap.to("#senas_container .bg",{duration:0.2,borderColor:`rgba(237,241,252,${val/100})`});
        gsap.to("#senas_container .bg",{duration:0.2,backgroundColor:`rgba(237,241,252,${val/100})`});
        gsap.to(".video_container",{duration:0.2,alpha:val/100});
    },
    getDelayVideo:(cualEscena = 0) => {
        return JSON_CUENTO.escenas[cualEscena][`video_start_at${IDIOMA}`] || 0.1;
    },
    getTimeOfScene:(nEscena) => {
//        return ANIM.main_tl.getLabelTime(`escena_${nEscena}`)
        return ANIM.main_tl.labels[`escena_${nEscena}`];
    },
    getTimeVideoFromLabel:(label) => {
        let t1 = Player.getTimeOfScene(Player.escena_actual);
        let t2 = ANIM.main_tl.labels[label];
        return t2-t1;
    },
    getTimeVideoFromCurrentPosition:() => {
        let t1 = Player.getTimeOfScene(Player.escena_actual);
        let t2 = ANIM.main_tl.time();
        return t2-t1;
    },
    killForceCloseBarraAlphaVideo:() => {
        gsap.killTweensOf(Player.tempAVB);
        Player.tempAVB = {n:0};
    },
    forceCloseBarraAlphaVideo:() => {
        Player.killForceCloseBarraAlphaVideo();
        gsap.to(Player.tempAVB, {duration:Player.TIEMPO_CIERRE_ALPHA_VIDEO, n:1, onComplete:function(){
            Player.toogleBarraAlphaVideo('close');
        }});
    },
    toogleBarraAlphaVideo:(accion = 'toogle') => {
        Player.killForceCloseBarraAlphaVideo();
        switch (accion){
            case 'open':
                    if(Select.byId("alpha_slider").element.classList.contains('close')){
                        Select.byId("alpha_slider").element.classList.replace('close', 'open');
                        gsap.to("#senas_container .controllers_container .alpha_controller .flecha",{duration:0.5, rotation:180});
                        Player.forceCloseBarraAlphaVideo();
                    }
                break;
            case 'close':
                if(Select.byId("alpha_slider").element.classList.contains('open')){
                        Select.byId("alpha_slider").element.classList.replace('open', 'close');
                        gsap.to("#senas_container .controllers_container .alpha_controller .flecha",{duration:0.5,rotation:0});
                    }
                break;
            case 'toogle':
                    if(Select.byId("alpha_slider").element.classList.contains('open')){
                        Select.byId("alpha_slider").element.classList.replace('open', 'close');
                        gsap.to("#senas_container .controllers_container .alpha_controller .flecha",{duration:0.5,rotation:0});
                    } else if(Select.byId("alpha_slider").element.classList.contains('close')){
                        Select.byId("alpha_slider").element.classList.replace('close', 'open');
                        gsap.to("#senas_container .controllers_container .alpha_controller .flecha",{duration:0.5,rotation:180});
                        Player.forceCloseBarraAlphaVideo();
                    }
                break;
        }
        gsap.set('#senas_container .controllers_container',{z:10});
        
    },
    getEscalaEscenario:() => {  
        return window.innerWidth == 1920 ? 1 : gsap.getProperty(document.getElementById('escenario'), 'scaleX');  
    },
    escalaVideoSenas:(que = '+', setDefault = false, time = 0.2) => {
        let bg = document.getElementById('senas_container').getElementsByClassName('bg')[0];
        onUpdate = () => {
            let scala = gsap.getProperty(bg, 'scaleX');
            let dif = scala - 1;
            let val = parseInt(scala*100);
            let st = `${val}%`;
            gsap.set('#senas_container .cerrar',{x:dif*230,y:dif*580*-1,z:10});
            document.getElementById('senas_container').getElementsByClassName('controllers_container')[0].getElementsByClassName('scale_controller')[0].getElementsByClassName('porcentaje')[0].innerHTML = st;
        }
        onComplete = (updateMe, me) => {
            let scala = gsap.getProperty(bg, 'scaleX');
            let dif = scala - 1;
            let val = parseInt(scala*100);
            let st = `${val}%`;
            if(scala > Player.MAX_SCALE_VIDEO_SENAS){
                gsap.to(bg,{duration:time,scale:Player.MAX_SCALE_VIDEO_SENAS, transformOrigin:'bottom center', onUpdate:updateMe, onComplete:me});
            } else if(scala < Player.MIN_SCALE_VIDEO_SENAS){
                gsap.to(bg,{duration:time,scale:Player.MIN_SCALE_VIDEO_SENAS, transformOrigin:'bottom center', onUpdate:updateMe, onComplete:me});
            }
            
            let w = 448+40; //tamaño real del contenedor
            let h = 560+40; //tamaño real del contenedor
            let escalaEscenario =  Player.getEscalaEscenario();
            let t = (0-h*dif*-1)*escalaEscenario;//no lo multiplico *0.5 porque se escala desde un borde en y
            let l = (0-((w*dif)*0.5)*-1)*escalaEscenario; // lo multiplico *0.5 porque se escala desde el centro en x;
            
            Draggable.get("#senas_container").vars.bounds = {
                top:t,
                left: l,
                width:window.innerWidth-(l*2), //*2 por que se escala desde el centro en x
                height:window.innerHeight-t // no es *2 por que se escala desde un borde en y
            };
        }
        if(setDefault){
            gsap.to(bg,{duration:time, scale:Player.DEFAULT_SCALE_VIDEO_SENAS, transformOrigin:'bottom center', onUpdate:onUpdate, onComplete:onComplete, onCompleteParams:[onUpdate, onComplete]});
        } else {
            gsap.to(bg,{duration:time, scale:`${que}=.05`, transformOrigin:'bottom center', onUpdate:onUpdate, onComplete:onComplete, onCompleteParams:[onUpdate, onComplete]});
        }
        Player.forceZindexSenas();
    },
    forceZindexSenas:() => {
        Select.byId('senas_container').element.style.zIndex = 1;
    },
    toogleSenas:() => {
        if(Player.senaOculta){
            Player.showSenas();
        } else {
          if(Select.byId('senas_container').element.style.display == 'block'){
              Player.closeSenas();
          } else {
              Player.openSenas();
          }  
        }
          
    },
    openSenas:() => {
        Player.senasVisible = true;
        Select.byId('senas_container').element.style.display = 'block';
        gsap.fromTo("#senas_container",{autoAlpha:0},{duration:0.2,autoAlpha:1});
        try{
            if(!ANIM.main_tl.paused()){
                Player.forcePlayVideoCurrentTime();
            }
        } catch (err){ console.log(err.message);}
    },
    closeSenas:() => {
        Player.senasVisible = false;
        Select.byId('senas_container').element.style.display = 'none';
    },
    creaMainTL:() => {
        ANIM.main_tl = gsap.timeline({});
        
        ANIM.main_tl
        .set('.escena',{left:"-1920px"}) // <-- al comenzar envío a todas las escenas a left -1920
        ;
        
        let _arr = JSON_CUENTO.escenas; // defino las escenas con el archivo de configuración
        let tiempo = 0.01; // tiempo inicial muy bajito, para que no se solape nada con el evento "onStart"
        let posicion = 0; // posición inicial de tiempo del timeline, sirve para definir cuando van los labels y callbacks
        let delayAcumulado = 0; // valor de retraso inicial del tiempo
        let espacioEntreEscenas = 2; // segundos para que no se solapen las escenas una sobre la otra
        
        _arr.map((item, i) => { // el método map de array hace un recorrido por cada item del array
            
            let i_st = i > 9 ? i.toString() : `0${i.toString()}`;
            ANIM.main_tl.add( gsap.set(`#escena_${i_st}`, {left:0}) , tiempo); // <-- pongo la escena en 0 left en el tiempo que le corresponde
            
            if(i > 0){
                let i_stanterior = i > 9 ? (i-1).toString() : `0${(i-1).toString()}`;
                ANIM.main_tl.add( gsap.set(`#escena_${i_stanterior}`, {left:-1920}) , tiempo-0.01); // <-- pongo la escena anterior en -1920 left 
            }
            
            ANIM.main_tl.addLabel(`escena_${i}`, tiempo); // le digo que la escena comienza en este tiempo 
            
            item[`parrafos${IDIOMA}`].map((parrafo, j) => {
                let delay = parrafo.tiempo[2] ? parrafo.tiempo[2] : 0; // veo si hay que retrasar el tiempo de aparición del párrafo o no
                delayAcumulado += delay; // asigno la cantidad de tiempo de retraso de párrafo acumulado
                let duracion = parrafo.tiempo[1]-parrafo.tiempo[0]; // cuanto dura el párrafo en particular
                let desfase = (posicion+delayAcumulado); // momento exacto en que el párrafo debe aparecer
//                console.log(posicion, delay, `${i}_${j}`, desfase, delayAcumulado, tiempo);
                 
                ANIM.main_tl.addLabel(`${i}_${j}`, desfase); // acá le pongo el label correspondiente al párrafo el formato es "numeroEscena_numeroParrafo" quedan así: 0_0, 0_1, 0_2, 0_3, 1_0, 1_1, 1_2, etc
                posicion += duracion; // reasigno posicion del siguiente con la duración del actual
            });
            tiempo = posicion+delayAcumulado; // le digo al tiempo que se sume todo lo anterior
            ANIM.main_tl.addLabel(`fin_escena_${i}`, tiempo); // así le asigno el final de la escena || quedan así: "fin_escena_0", "fin_escena_1", etc
            tiempo += espacioEntreEscenas; // dejo un par de segundos para que las escenas no se monten una arriba de otra
            delayAcumulado += espacioEntreEscenas; // y obviamnete se lo tengo que sumar al delay acumulado
            
        });
        
        /*CREADOR DE callbacks para visualización de subtítulos */
        _arr.map((item, i) => {
             item.parrafos.map((parrafo, j) => {
                 ANIM.main_tl.call(function(){
                    Player.playSoundParrafo(i, j);
                    Player.putSubtitulos(i, j);
                }, null,`${i}_${j}`);
            });    
        });
        
         /*CREADOR DE callbacks para el play de video inicial por escena*/
        _arr.map((item, i) => {
            ANIM.main_tl.call(function(){
                 Player.playVideo(Player.getTimeVideoFromCurrentPosition());
//            }, null,`escena_${i}+=${Player.getDelayVideo(i)}`);
            }, null,`${i}_0-=${1}`); // hace que aparezca un segundo antes de cada audio hablado.
        });
    }
};

let App = {
    init:function(){
        let w, h;
            w = window.innerWidth;
            h = window.innerHeight;
        gsap.set('body',{backgroundColor:'#000000'});
        Front.resizeListener(w, h);
        this.start();
        Player.hideToolTip();
        ANIM.init();
        if(!Player.conVideo){
            let btns = document.getElementsByClassName('player_btn btn_lengua');
            for(let i = 0; i<btns.length; i++){
                btns[i].style.display = 'none'
            }
        }
        if (
              document.fullscreenEnabled || /* Standard syntax */
              document.webkitFullscreenEnabled || /* Chrome, Safari and Opera syntax */
              document.mozFullScreenEnabled ||/* Firefox syntax */
              document.msFullscreenEnabled/* IE/Edge syntax */
        ) {
            if(Utils.isMobile()){
                if(!Player.conVideo){
                    Select.byId('marcador_escena').element.style.top = '-50px';
                    Select.byId('marcador_escena').element.style.height = '95px';
                }
            }
        } else {
//            $('.player_btn.btn_fullscreen').hide();
            let btns = document.getElementsByClassName('player_btn btn_fullscreen');
            for(let i = 0; i<btns.length; i++){
                btns[i].style.display = 'none'
            }
            
            if(Utils.isMobile()){
                if(Player.conVideo){
//                    $('#marcador_escena').css({'top':'-50px', 'height':'95px'});
                    Select.byId('marcador_escena').element.style.top = '-50px';
                    Select.byId('marcador_escena').element.style.height = '95px';
                } else {
//                    $('#marcador_escena').css({'top':'-10px'});
//                    $('#player_btn_config').css({'margin-left':'auto'}); 
                    Select.byId('marcador_escena').element.style.top = '-10px';
                    Select.byId('player_btn_config').element.style.marginLeft = 'auto';
                }
            }
        }
    },
    start:function(){
        this.createPlayerParts();
        this.setButtons();
    },
    createPlayerParts:function(){
        let nombreCuento = JSON_CUENTO[`nombre${IDIOMA}`];
        let arrEscenas = JSON_CUENTO.escenas;
        let nCurrentEscena = JSON_CUENTO.n_escena;
        let arrFxSonido = JSON_CUENTO.fx_sonido;
        let arrImagenes = JSON_CUENTO.imagenes;
        let arrVideosAdicionales = JSON_CUENTO.videos_adicionales;

        document.getElementById('desplegable_escenas_container').getElementsByTagName('h2')[0].textContent = nombreCuento;
        document.getElementById('desplegable_escenas_container').getElementsByTagName('h3')[0].textContent = `${arrEscenas.length} escenas`;

        let stListado = Player.creaListadoEscenas(arrEscenas);
        document.getElementById('listado_escenas').getElementsByClassName('masked')[0].innerHTML = stListado;

        let ptListado = Player.creaPuntosEscenas(arrEscenas);
        document.getElementById('punto_escena_container').innerHTML = ptListado;

        let i_st = arrEscenas.length > 9 ? (arrEscenas.length) : `0${(arrEscenas.length)}`;
        document.getElementById('marcador_escena').getElementsByClassName('total')[0].getElementsByTagName('p')[0].textContent = i_st;

        document.getElementById('title_container').getElementsByClassName('nombre_cuento')[0].textContent = nombreCuento;

        Player.setScene(nCurrentEscena, arrEscenas[nCurrentEscena][`nombre${IDIOMA}`], true); //<--- true porque no quiero que suene el audio altiro

        Player.loadAudioImages(arrEscenas,arrFxSonido,arrImagenes,arrVideosAdicionales);
        window.addEventListener("blur", Player.onBlur, false);

    },
    setButtons:function(){
        /*Relativos al player*/
        const btn_open_player = Select.byId('btn_abrir_player').element;
        btn_open_player.addEventListener('click', () => { Player.tooglePlayer("open"); }, false);

        const elPlayer = Select.byId('player').element;
        elPlayer.addEventListener('mouseover', () => { Player.tooglePlayer("open"); }, false);
        elPlayer.addEventListener('mouseout', () => { Player.tooglePlayer("close"); }, false);
        elPlayer.addEventListener('touchstart', () => { Player.tooglePlayer("open"); }, false);
        elPlayer.addEventListener('touchend', () => { Player.tooglePlayer("close"); }, false);

        ///***///

        const btn_player = document.querySelectorAll('.player_btn');
        btn_player.forEach(item =>{
            item.addEventListener('mouseover', event => {
                Player.setTooltip(item.getAttribute('data_tooltip'), item, 'bajo');
            })
            item.addEventListener('mouseout', event => {
                Player.hideToolTip();
            })
        });
        
        Select.byId('player_btn_play_pause').element.addEventListener('click', () => { Player.tooglePlayPause(); }, false);
        Select.byId('player_btn_escena_ant').element.addEventListener('click', () => { Player.prevScene(); }, false);
        Select.byId('player_btn_escena_sig').element.addEventListener('click', () => { Player.nextScene(); }, false);
        Select.byId('player_btn_parrafo_ant').element.addEventListener('click', () => { Player.prevParrafo(); }, false);
        Select.byId('player_btn_parrafo_sig').element.addEventListener('click', () => { Player.nextParrafo(); }, false);
        const btn_fullscreen = document.querySelectorAll('.btn_fullscreen')
        btn_fullscreen.forEach(item => {
            item.addEventListener('click', () => { Front.toogleFullScreen(); }, false);
        });
        Select.byId('player_btn_config').element.addEventListener('click', () => { Player.toogleConfigurador('toogle'); }, false);
        const btn_ocultar = document.querySelectorAll('.btn_ocultar')
        btn_ocultar.forEach(item => {
            item.addEventListener('click', () => { Player.toogleListadoEscena('close'); }, false);
        });
        Select.byId('title_container').element.addEventListener('click', () => { Player.toogleListadoEscena('toogle'); }, false);

        //cheks del configurador
        const checks = document.querySelectorAll('.checks');
        checks.forEach(item =>{
            item.addEventListener('click', event => {
                Player.checkCheck(item.id, item.checked);
            }, false)
        });

        //para setear current al listado
        const item_listado_escena = document.querySelectorAll('.item_listado_escena');
        item_listado_escena.forEach(item =>{
            item.addEventListener('click', event => {
                let i = item.getAttribute('data_escena');
                let nombre = item.getAttribute('data_nombre');
                Player.setScene(parseInt(i), nombre);
            }, false)
        });

        const punto_escena_container_punto = document.getElementById('punto_escena_container').querySelectorAll('.punto');
        punto_escena_container_punto.forEach(item =>{
            item.addEventListener('mouseover', event => {
                Player.setTooltip(item.getAttribute('data_tooltip'), item, 'alto');
            }, false);
            item.addEventListener('mouseout', event => {
                Player.hideToolTip();
            }, false);
            item.addEventListener('click', event => {
                let i = item.getAttribute('data_escena');
                let nombre = item.getAttribute('data_nombre');
                Player.setScene(parseInt(i), nombre);
            }, false);
        });

        // el botón que sale al terminar la escena
        const btn_adelante = document.getElementById('btn_adelante').getElementsByClassName('interior')[0];
        btn_adelante.addEventListener('click', () => { 
            let arrEscenas = JSON_CUENTO.escenas;
            if(Player.escena_actual < arrEscenas.length-1){
                Player.nextScene();
            } else {
                Player.onPlayer = false;
                Creditos.final();
            }
        }, false);

    },
    setSenasControllers:() => {
        const btn_cerrar_senas_container = document.getElementById('senas_container').getElementsByClassName('cerrar')[0];
        btn_cerrar_senas_container.addEventListener('mouseover', () => { Player.forceZindexSenas(); }, false);
        btn_cerrar_senas_container.addEventListener('click', () => { Player.closeSenas(); }, false);
        
        Select.byId('btn_lengua').element.addEventListener('click', () => { Player.toogleSenas(); }, false);

        Select.byId('player_btn_lengua').element.addEventListener('click', () => { Player.toogleSenas(); }, false);
        
        const btn_scale_senas = document.getElementById('senas_container').querySelectorAll('.btn_scale');
        btn_scale_senas.forEach(item =>{
            item.addEventListener('click', event => {
                Player.escalaVideoSenas(item.getAttribute('data-accion'));
            }, false)
        });
       
        const btnFlecha = document.getElementById('senas_container').getElementsByClassName('controllers_container')[0].getElementsByClassName('alpha_controller')[0];
        
        if(Utils.isMobile()){
            btnFlecha.addEventListener('touchstart', event => {
                Player.toogleBarraAlphaVideo('open');
            }, false);
            
            btnFlecha.addEventListener('touchend', event => {
                Player.forceCloseBarraAlphaVideo();
            }, false);
            
        } else {
            btnFlecha.addEventListener('click', event => {
                Player.toogleBarraAlphaVideo();
            }, false);
        }
        
        Draggable.create("#senas_container",{
                                dragClickables:false,
                                onDragEnd:function(){
                                    Player.forceZindexSenas();
                                    Player.POS_VIDEO_SENAS.x =  Draggable.get("#senas_container").x;
                                    Player.POS_VIDEO_SENAS.y =  Draggable.get("#senas_container").y;
                                },
                                bounds: document.getElementById("cuento")
                                            }
                        );
    }
};

let Creditos = {
    init:() => {
        const btn_principal = document.querySelectorAll('.btn_principal');
        btn_principal.forEach(item =>{
            item.addEventListener('click', event => {
                event.preventDefault();
                event.stopPropagation();
            }, false)
        });

        Creditos.creaPortadayContra();
    },
    creaPortadayContra:() => {
        let arrCreditos = JSON_CUENTO[`creditos${IDIOMA}`];
        const creditos = document.querySelectorAll('.creditos');
        creditos.forEach(item => {
            try{item.getElementsByClassName('titulo')[0].getElementsByTagName('h1')[0].innerHTML = JSON_CUENTO[`nombre${IDIOMA}`];}
            catch(err){console.log(err.message);}
            try{item.getElementsByClassName('titulo')[0].getElementsByTagName('h2')[0].innerHTML = JSON_CUENTO[`tipo${IDIOMA}`];}
            catch(err){console.log(err.message);}
            try{item.getElementsByClassName('descripcion')[0].innerHTML = JSON_CUENTO[`descripcion${IDIOMA}`];}
            catch(err){console.log(err.message);}
            try{let tabla = item.getElementsByClassName('creditos_portada')[0].getElementsByTagName('table')[0].getElementsByTagName('tbody')[0];
            tabla.innerHTML = Creditos.getTable(arrCreditos);}
            catch(err){console.log(err.message);}
        });
     
        document.getElementById('preload_tutorial_modal').getElementsByClassName('title')[0].getElementsByClassName('img_cont')[0].getElementsByTagName('img')[0].setAttribute('src',JSON_CUENTO.escenas[0].miniatura);
        document.getElementById('preload_tutorial_modal').getElementsByClassName('title')[0].getElementsByTagName('h2')[0].innerHTML = JSON_CUENTO[`nombre${IDIOMA}`];
        document.getElementById('preload_tutorial_modal').getElementsByClassName('title')[0].getElementsByTagName('p')[0].innerHTML = JSON_CUENTO[`tipo${IDIOMA}`];
    },
    getTable:(arr) => {
        let newArr = arr.map((item, i) => {
            return `<tr><td>${item[0]}</td><td>${item[1]}</td></tr>`;
        });
        return newArr.join("");
    },
    leerEscuchar:() => {
        Select.byId('portada_cuento').element.style.display = 'none';
        Tutorial.init();
    },
    leer:() => {
        Select.byId('check_relato').element.checked = false;
        Player.toogleAudio(false);
        Select.byId('portada_cuento').element.style.display = 'none';
        Tutorial.init();
    },
    final:() => {
        gsap.set('body',{backgroundColor:'#E9EDF5'});        
        Select.byId('final_cuento').element.style.display = 'block';
        Select.byId('cuento').element.style.display = 'none';
        Select.byId('escenario').element.style.display = 'none';
        Select.byId('btn_adelante').element.style.display = 'none';
        document.body.style.overflow = 'auto';
        Player.stopAudioParrafo();
        ANIM.pausaInteractividad();
        try{
            var cuento = JSON_CUENTO.ID
            var fd = new FormData();
            fd.append('cuento', cuento )
            fd.append('action', 'delete_guardar_cuento');
            /*$.ajax({
                type: 'POST',
                action: 'delete_guardar_cuento',
                url: ajaxurl,
                data: fd,
                processData: false,
                contentType: false
            }).done(function(data) {
                //console.log('borrar avances continuar')
            });*/
            let ajax = new XMLHttpRequest();
            ajax.open('POST', ajaxurl, true);
           // ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            ajax.onreadystatechange = function() {//Call a function when the state changes.
                if(ajax.readyState == 4 && ajax.status == 200) {
                    console.log('borrar avances continuar');
                } else {
                    console.log('Error');
                }
            }
            ajax.send(fd);
        } catch (err) {
            console.log('FORMDATA',err.message);
        }

    }
};

let Tutorial = {
    slideActual:0,
    init:() => {
        App.init();

        Select.byId('preload_tutorial_modal').element.style.display = 'flex';
        document.getElementsByClassName('btn_flecha_tutorial izq')[0].addEventListener('click', (event) => {Tutorial.moveSlider('l');});
        document.getElementsByClassName('btn_flecha_tutorial der')[0].addEventListener('click', (event) => {Tutorial.moveSlider('r');});

        const punto_tutorial = document.getElementById('punto_tuto_container').querySelectorAll('.punto');
        punto_tutorial.forEach(item =>{
            item.addEventListener('click', event => { Tutorial.gotoSlider(item.getAttribute('data_escena')); }, false)
        });

        Select.byId('btn_init').element.addEventListener('click', (event) => {
            
            Select.byId('preload_tutorial_modal').element.style.display = 'none';
            Select.byId('cuento').element.style.display = 'block';
            Select.byId('escenario').element.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            let continuar_escena = Select.byId('btn_init').element.dataset.escena;
            let arrEscenas = JSON_CUENTO.escenas;

            if(continuar_escena){
                Player.setScene(parseInt(continuar_escena), arrEscenas[continuar_escena][`nombre${IDIOMA}`]);
                ANIM.main_tl.play();
            } else {
                Player.playSoundParrafo(0,0,true);
                Player.setScene(0, arrEscenas[0][`nombre${IDIOMA}`]);
                ANIM.main_tl.play();
            }
            
        }, false);
        
        Select.byId('btn_volver_leer').element.addEventListener('click', (event) => {
            gsap.set('body',{backgroundColor:'#000000'});
            Select.byId('final_cuento').element.style.display = 'none';
            Select.byId('cuento').element.style.display = 'block';
            Select.byId('escenario').element.style.display = 'block';
            document.body.style.overflow = 'hidden';
            //
            let arrEscenas = JSON_CUENTO.escenas;
            Player.setCurrent(0, arrEscenas[0][`nombre${IDIOMA}`]);
            Player.setScene(0);
            ANIM.main_tl.play(0);
             
         }, false);
        
        Select.byId('tut01').element.style.marginLeft = '0px';
        gsap.set("#tut04 .icono .player_btn",{scale:1.5});
        
        let touchstartX = 0;
        let touchstartY = 0;
        let touchendX = 0;
        let touchendY = 0;
        let umbralX = 75;
        let umbralY = 75;
        const gestureZone = Select.byId('tutorial').element;

        gestureZone.addEventListener('touchstart', (event) => {
            touchstartX = event.changedTouches[0].screenX;
            touchstartY = event.changedTouches[0].screenY;
        }, false);

        gestureZone.addEventListener('touchend', (event) => {
            touchendX = event.changedTouches[0].screenX;
            touchendY = event.changedTouches[0].screenY;
            handleGesture();
        }, false);

        let handleGesture = () => {

            if(Math.abs(touchendX - touchstartX) > umbralX){
                if (touchendX < touchstartX) {
                    Tutorial.moveSlider('l');
                }
                if (touchendX > touchstartX) {
                    Tutorial.moveSlider('r');
                }
            }

            if(Math.abs(touchendY - touchstartY) > umbralY){
                if (touchendY < touchstartY) {
        //            console.log('Swiped up');
                }
                if (touchendY > touchstartY) {
        //           console.log('Swiped down');
                }
            }

            if (touchendY === touchstartY) {
        //       console.log('Tap');
            }
        }

    },
    gotoSlider:(i) => {
        if(parseInt(i) != Tutorial.slideActual){
            let old = Tutorial.slideActual;
            let nuevo = parseInt(i);
            let w = 800;

            let slideactual = `#tut0${(old+1)}`;
            let slidenueva  = `#tut0${(nuevo+1)}`;

            gsap.set(slideactual,{marginLeft:0});
            gsap.set(slidenueva,{marginLeft:w*-1});
            gsap.to(slideactual,{duration:1,marginLeft:w});
            gsap.to(slidenueva,{duration:1,marginLeft:0, ease:"back.out(1)"});

            Tutorial.slideActual = nuevo;
            Tutorial.setCurrent(Tutorial.slideActual);
        }
    },
    moveSlider:(dir = "l") => {
        let cant = document.getElementById('tutorial').querySelectorAll('.tut').length;
        let w = 800;

        let actual = `#tut0${(Tutorial.slideActual+1)}`;
        if( dir === "r"){
            if(Tutorial.slideActual < cant-1){
                Tutorial.slideActual++;
            } else {
                Tutorial.slideActual = 0;
            }
        } else {
            if(Tutorial.slideActual === 0){
                Tutorial.slideActual = cant-1;
            } else {
                Tutorial.slideActual--;
            }
        }

        let nuevo = `#tut0${(Tutorial.slideActual+1)}`;
        if(dir == "l"){
            gsap.set(actual,{marginLeft:0});
            gsap.set(nuevo,{marginLeft:w});
            gsap.to(actual,{duration:1,marginLeft:(w*-1)});
        } else {
            gsap.set(actual,{marginLeft:0});
            gsap.set(nuevo,{marginLeft:(w*-1)});
            gsap.to(actual,{duration:1,marginLeft:w});
        }
        gsap.to(nuevo,{duration:1, marginLeft:0, ease:"back.out(1)"});
        Tutorial.setCurrent(Tutorial.slideActual);
    },
    setCurrent: (i) => {
        let punto = Select.byId('punto_tuto_container').element.querySelectorAll('.punto');
        punto.forEach((item) =>{
            if(item.classList.contains('current')){
                item.classList.remove('current');
            }
            if(item.getAttribute('data_escena') == i){
                item.classList.add('current');
            }
        });
    }
};

let Slider = {
    count:0,
    init:function(div, o, callback){
        Slider.creaSlider(div, o, Slider.count, callback);
        Slider.count++;
    },
    creaSlider:function(div, o, id, callback){
        //definir valores
        o = (o !== undefined) ? o : {};
        o.w = (o.w !== undefined) ? o.w : 100;
        o.h = (o.h !== undefined) ? o.h : 16;
        o.wknob = (o.wknob !== undefined) ? o.wknob : 14;
        o.hknob = (o.hknob !== undefined) ? o.hknob : 14;
        o.rknob = (o.rknob !== undefined) ? o.rknob : 7;
        o.colorknob = (o.colorknob !== undefined) ? o.colorknob : "#f00";
        o.colorfondo = (o.colorfondo !== undefined) ? o.colorfondo : "#dfdfdf";
        o.colorbarra = (o.colorbarra !== undefined) ? o.colorbarra : "#848484";
        o.rfondo = (o.rfondo !== undefined) ? o.rfondo : 7;
        o.value = (o.value !== undefined) ? o.value : 0;
        o.decimales = (o.decimales !== undefined) ? o.decimales : 2;
        o.maxValue = (o.maxValue !== undefined) ? o.maxValue : 100;
        o.marginBottom = (o.marginBottom !== undefined) ? o.marginBottom : 10;
        
        if(callback == undefined || typeof(callback) != "function"){
            callback = Slider.onStopDrag;
        } 
        //crear divs
        let st = '<div id="slide'+id+'" class="slider">\
                            <div class="fondo">\
                        <div class="barra"></div>\
                        <p class="value">'+o.value+'</p>\
                        <a class="knob btn"></a>\
                    </div>\
                </div>';

        if(o.h < o.hknob){
            st = '<div id="slide'+id+'" class="slider">\
                    <div class="fondo">\
                        <div class="barra"></div>\
                        <p class="value">'+o.value+'</p>\
                    </div>\
                    <div class="knob"></div>\
                </div>';
        }
        
        let contain_slider = document.getElementById(div);
        contain_slider.insertAdjacentHTML('beforeend',st);

        //csssear
        let slider = contain_slider.getElementsByClassName('slider')[id];
        let value = slider.getElementsByClassName('value')[0];
        let knob = slider.getElementsByClassName('knob')[0];
        let fondo = slider.getElementsByClassName('fondo')[0];
        let barra = slider.getElementsByClassName('barra')[0];

        let vcenter = o.h*0.5-o.hknob*0.5;

        let min = 0;
        let max = o.w-o.wknob;
        let porcentaje;
        let fp = (o.value*max)/o.maxValue + o.wknob*0.5;

        slider.style.width = `${o.w}px`;
        slider.style.height = `${o.h}px`;
        slider.style.marginBottom = `${o.marginBottom}px`;
        
        value.style.fontSize = `${o.h}px`;
        value.style.position = 'absolute';
        value.style.margin = '0px';
        value.style.padding = '0px';
        value.style.width = 'auto';
        
        knob.style.width = `${o.wknob}px`;
        knob.style.height = `${o.hknob}px`;
        knob.style.borderRadius = `${o.rknob}px`;
        knob.style.position = 'absolute';
        knob.style.backgroundColor = o.colorknob;
        knob.style.marginTop = `${vcenter}px`;
        knob.style.transform = `translate3d(${(fp - o.wknob*0.5)}px, 0px, 0px)`;
        
        
        fondo.style.width = `${o.w}px`;
        fondo.style.height = `${o.h}px`;
        fondo.style.position = 'absolute';
        fondo.style.backgroundColor = o.colorfondo;
        fondo.style.borderRadius = `${o.rfondo}px`;
        fondo.style.overflow = 'hidden';
        fondo.style.transform = 'translate3d(0px, 0px, 0px)"})';

        barra.style.width = `${o.w}px`;
        barra.style.height = `${o.h}px`;
        barra.style.position = 'absolute';
        barra.style.backgroundColor = o.colorbarra;
        barra.style.width = `${fp}px`; //reseteo la barra.
        
        if(o.value == o.maxValue){
            gsap.to(barra,{duration:0.1,width:o.w});
        } else if(o.value === 0){
            gsap.to(barra,{duration:0.1,width:0});
        }
        let wSlider = fondo.clientWidth-knob.clientWidth;
        Slider.setValue(value, o.value, o);
        
        //funcionalidades
         fondo.addEventListener('click', (e) =>{
            var minx = false;
            var maxx = false;
            var x = e.offsetX;
            if (e.target.className == "value") {
                x = e.offsetX + e.target.offsetLeft;
            }
            porcentaje = ((o.maxValue*(x-o.wknob*0.5))/max).toFixed(o.decimales);
            if(x < o.wknob*0.5){
                x = o.wknob*0.5;
                minx = true;
            } else if(x>o.w-o.wknob*0.5){
                x = o.w-o.wknob*0.5;
                maxx = true;
            }
            if(minx){porcentaje = 0;}
            if(maxx){porcentaje = o.maxValue;}

            var despachaClick = new CustomEvent("STOP_DRAG",{
                "detail":{
                    valor: porcentaje,
                    id:id
                }
            });
            Slider.setValue(value, porcentaje,o);
            gsap.to(barra,{duration:0.1, width:x, onComplete:function(bar, por){
                if(por === 0){
                    gsap.to(bar,{duration:0.1, width:min});
                }
                if(por === o.maxValue){
                    gsap.to(bar,{duration:0.1, width:o.w});
                }
                document.getElementById(div).addEventListener("STOP_DRAG", callback, false);
                document.getElementById(div).dispatchEvent(despachaClick);
            }, onCompleteParams:[barra,porcentaje]});
            gsap.to(knob,{duration:0.1, x:x-o.wknob*0.5});
        });
        
        Draggable.create(knob,
            {
                type:"x",
                bounds:{minX:min, maxX:max},
                edgeResistance:1,
                onDragStart:function(){
                    barra.style.width = `${this.x+o.wknob*0.5}px`; //tamaño barra indicadora 
                    porcentaje = ((o.maxValue*(this.x))/max).toFixed(o.decimales);
                    
                    Slider.setValue(value, porcentaje,o);
                    var despacha = new CustomEvent("START_DRAG",{
                        "detail":{
                            valor: porcentaje,
                            id:id
                        }
                    });
                    Slider.setValue(value, porcentaje,o);
                    document.getElementById(div).addEventListener("START_DRAG", callback, false);
                    document.getElementById(div).dispatchEvent(despacha);
                },
            onDrag:function(){
                    barra.style.width = `${this.x+o.wknob*0.5}px`; //tamaño barra indicadora
                    porcentaje = ((o.maxValue*(this.x))/max).toFixed(o.decimales);
                    
                    Slider.setValue(value, porcentaje,o);
                    var despacha = new CustomEvent("ON_DRAG",{
                        "detail":{
                            valor: porcentaje,
                            id:id
                        }
                    });
                    Slider.setValue(value, porcentaje,o);
                    document.getElementById(div).addEventListener("ON_DRAG", callback, false);
                    document.getElementById(div).dispatchEvent(despacha);
                },
            onDragEnd:function(){
                    porcentaje = ((o.maxValue*(this.x))/max).toFixed(o.decimales);
                    if(porcentaje == o.maxValue){
                        gsap.to(barra,{duration:0.1, width:o.w});
                    } else if(porcentaje === 0){
                        gsap.to(barra,{duration:0.1, width:0});
                    }
                    var despacha = new CustomEvent("STOP_DRAG",{
                        "detail":{
                            valor: porcentaje,
                            id:id
                        }
                    });
                    Slider.setValue(value, porcentaje,o);
                    document.getElementById(div).addEventListener("STOP_DRAG", callback, false);
                    document.getElementById(div).dispatchEvent(despacha);
                }
            }
        );
    },
    setValue:function(value, valor, o){
        value.innerHTML = valor;
        let wvalue = value.clientWidth;
        if(valor > o.maxValue*0.5){
            value.style.textAlign = 'left';
            gsap.to(value, {duration:0.2, marginLeft:0, color:o.colorfondo});
        }else{
            value.style.textAlign = 'right';
            gsap.to(value, {duration:0.2, marginLeft:o.w-wvalue, color:o.colorbarra});
        }
    },
    onStopDrag:function(e){
    }
};

(function () {
    window.onresize = function(){
        let w, h;
            w = window.innerWidth;
            h = window.innerHeight;
        Front.resizeListener(w, h);
    };
    let w, h;
    w = window.innerWidth;
    h = window.innerHeight;

    Front.resizeListener(w, h);


    /* Standard syntax */
    document.addEventListener("fullscreenchange", (e) => {Front.lookFullScreen(e);}, false);

    /* Firefox */
    document.addEventListener("mozfullscreenchange", (e) => {Front.lookFullScreen(e);}, false);

    /* Chrome, Safari and Opera */
    document.addEventListener("webkitfullscreenchange", (e) => {Front.lookFullScreen(e);}, false);

    /* IE / Edge */
    document.addEventListener("msfullscreenchange", (e) => {Front.lookFullScreen(e);}, false);

    if (typeof JSON_CUENTO === 'undefined' || JSON_CUENTO === null) {
        setTimeout(function(){Creditos.init();}, 3000);
    } else {
        Creditos.init();
    }
})();