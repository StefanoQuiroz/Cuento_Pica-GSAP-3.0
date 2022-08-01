let JSON_CUENTO = {
    nombre:"La máquina de mirar estrellas",
    tipo:"Cuentos sobre niños y niñas",
    descripcion:"La máquina de mirar las estrellas es un invento fantástico. La pones frente a la ventana, esperas que llegue la noche y miras por el agujero a la luna, los planetas e incluso eclipses. Esta máquina fue una idea del abuelo Jorge, que no es astrónomo ni astronauta, tampoco inventor, pero sí el mejor de los abuelos. En esta tierna historia, la premiada autora chilena María José Ferrada, nos cuenta sobre una pequeña niña que disfruta observando y aprendiendo los secretos del universo junto a su abuelo; secretos que se mezclan con la historia de su familia.",
    creditos:[
                ["Adaptación:","María José Ferrada Lefenda"],
                ["Ilustraciones:","Carmen Cardemil Herrera"],
                ["Narración:","Constanza Ried Silva"],
                ["Arreglos musicales:","Jorge Mercado Pino"],
                ["Edición a cargo de:","Constanza Ried Silva<br>Verónica Vives Cofré<br>Fundación Entrelíneas"],
                ["Montaje y desarrollo web:","Agencia Match"],
                ["Créditos de sonidos:","Revise detalles <a href='#' target='_blank'>aquí</a>"] 
    ],
    ID:0, 
    imagenes:[
        "img/estrellas/esc_0_fondo.jpg",
        "img/estrellas/esc_1_fondo.jpg",
        "img/estrellas/esc_2_fondo.jpg",
        "img/estrellas/esc_3_fondo.jpg",
        "img/estrellas/esc_3_fondo_estrellas.jpg",
        "img/estrellas/esc_4_fondo.jpg",
        "img/estrellas/esc_5_fondo.jpg",
        "img/estrellas/esc_6_fondo.jpg",
        "img/estrellas/esc_6_fondo_oscuro.jpg",
        "img/estrellas/esc_7_fondo.jpg",
        "img/estrellas/esc_8_fondo.jpg",
        "img/estrellas/esc_8_fondo_estrellas.jpg",
        "img/estrellas/brillo_dimming.png",
        "img/estrellas/spriteA.png",
        "img/estrellas/spriteB.png",
        "img/estrellas/spriteC.png",
        "img/estrellas/spriteD.png",
        "img/estrellas/spriteE.png",
        "img/estrellas/contraportada.jpg",
        "img/estrellas/final_fondo.jpg",
        "img/estrellas/sol.png",
        "img/estrellas/sol_estatico.png",
    ], 
    fx_sonido:[
        {nombre:"musica_inicio",url:"audio/estrellas/fx/musica_inicio.mp3"},
        {nombre:"viento_espacial",url:"audio/estrellas/fx/viento_espacial.mp3"},
        {nombre:"musica_espacial",url:"audio/estrellas/fx/musica_espacio.mp3"},
        {nombre:"tictac_reloj",url:"audio/estrellas/fx/tictac_reloj_loop.mp3"},
        {nombre:"cuerdaA",url:"audio/estrellas/fx/cuerdaA.mp3"},
        {nombre:"cuerdaB",url:"audio/estrellas/fx/cuerdaB.mp3"},
        {nombre:"pelotita",url:"audio/estrellas/fx/pelotita.mp3"},
        {nombre:"musica_abuelo",url:"audio/estrellas/fx/musica_abuelo.mp3"},
        {nombre:"pelota",url:"audio/estrellas/fx/pelota.mp3"},
        {nombre:"ladrido",url:"audio/estrellas/fx/ladrido.mp3"},
        {nombre:"caja_musical",url:"audio/estrellas/fx/caja_musical.mp3"},
        
        {nombre:"notas_iniciales4",url:"audio/estrellas/fx/notas_iniciales4.mp3"},
        {nombre:"notas_iniciales5",url:"audio/estrellas/fx/notas_iniciales5.mp3"},
        {nombre:"notas_iniciales6",url:"audio/estrellas/fx/notas_iniciales6.mp3"},
        
        {nombre:"musica_estrellas",url:"audio/estrellas/fx/musica_estrellas.mp3"},
        {nombre:"musica_conejos",url:"audio/estrellas/fx/musica_conejos.mp3"},
        {nombre:"grillos",url:"audio/estrellas/fx/grillos.mp3"},
        {nombre:"hombre_tarareando",url:"audio/estrellas/fx/hombre_tarareando.mp3"},
        {nombre:"murmullos",url:"audio/estrellas/fx/murmullos.mp3"},
        {nombre:"versos",url:"audio/estrellas/fx/versos.mp3"},
        
        {nombre:"musica_recuerdos",url:"audio/estrellas/fx/musica_recuerdos.mp3"},
        {nombre:"risas",url:"audio/estrellas/fx/risas.mp3"},
        {nombre:"mar",url:"audio/estrellas/fx/mar.mp3"},
        {nombre:"pajaros",url:"audio/estrellas/fx/pajaros.mp3"},
        {nombre:"voz_abuelo_ruido",url:"audio/estrellas/fx/voz_abuelo_ruido.mp3"},
        
        {nombre:"musica_final",url:"audio/estrellas/fx/musica_final.mp3"},
        
         
    ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/estrellas/mini_0.jpg",
            audio:"audio/estrellas/escena_01_new.mp3",
            parrafos:
            [
                {
                    texto: "La máquina de mirar las estrellas es un invento fantástico.",
                    tiempo:[0,6.5,8.7] 
                },
                {
                    texto: "La pones frente a la ventana, esperas que llegue la noche,",
                    tiempo:[7,13.5,0.5]
                },
                {
                    texto: "te metes y miras por el agujero.",
                    tiempo:[14,18,0.5] 
                },
                {
                    texto: "La luna, los planetas, las constelaciones e incluso meteoritos.",
                    tiempo:[18.5,27,0.5] 
                },
                {
                    texto: "Todo se puede ver a través de ella.",
                    tiempo:[27.5,32,0.5] 
                },
                
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/estrellas/mini_1.jpg",
            audio:"audio/estrellas/escena_02_new.mp3",
            parrafos:
            [
                {
                    texto: "La máquina de mirar las estrellas fue una idea de mi abuelo Jorge,",
                    tiempo:[0,7,2] 
                },
                {
                    texto: "que no es astrónomo ni astronauta,",
                    tiempo:[7.5,11,0.5] 
                },
                {
                    texto: "tampoco inventor, pero sí el mejor de los abuelos.",
                    tiempo:[11.5,21.5,0.5] // el valor original del fin del audio es 17.5
                },
                
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/estrellas/mini_2.jpg",
            audio:"audio/estrellas/escena_03_new.mp3",
            parrafos:
            [
                {
                    texto: "Cada noche, después de cenar, nos vamos al observatorio.",
                    tiempo:[0,5.5,2] 
                },
                {
                    texto: "“No mucho rato. Recuerda que mañana te levantas temprano”, dice mi papá.",
                    tiempo:[6,13.5,1] 
                },
                {
                    texto: "“Ya están otra vez con la historia de la caja”, regaña mi hermana mayor.",
                    tiempo:[14,20.5,1] 
                },
                {
                    texto: "“Avísennos si encuentran vida en Marte”, agrega mi mamá.",
                    tiempo:[21,26.5,1] 
                },
                {
                    texto: "El abuelo me mira y cierra un ojo.",
                    tiempo:[27,31,5] 
                },
                
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/estrellas/mini_3.jpg",
            audio:"audio/estrellas/escena_04_new3.mp3",
            parrafos:
            [ 
                {
                    texto: "–¿Sabías, Manuelita, que una estrella del tamaño del Sol puede llegar a vivir 10 mil millones de años?",
                    tiempo:[0,11.8,6.5] 
                },
                {
                    texto: "¿Sabías que Júpiter tiene 53 lunas? ",
                    tiempo:[12.3,19,1.5] 
                },
                {
                    texto: "¿Sabías que la constelación favorita de tu abuela era la Cruz del Sur?",
                    tiempo:[19.5,26.6,1.5] 
                },
                {
                    texto: "¿Y que a tu papá le decíamos Plutón, porque era el más pequeño de los hermanos?",
                    tiempo:[27.1,33.9,1]
                },
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/estrellas/mini_4.jpg",
            audio:"audio/estrellas/escena_05_new.mp3",
            parrafos:
            [
                {
                    texto: "La historia de las estrellas se mezcla con la historia de mi familia.",
                    tiempo:[0,6,6.5] 
                },
                {
                    texto: "Tal vez por eso, estrellas, constelaciones y parientes, se mezclan en mis sueños.",
                    tiempo:[6.5,14.5,1.5] 
                },
                {
                    texto: "Anoche, por ejemplo, soñé que la abuela nos saludaba desde la luna",
                    tiempo:[15,21.2,1] 
                },
                {
                    texto: "y nos contaba que en los cráteres vivían conejos blancos.",
                    tiempo:[21.7,27.3,0.5]
                },
                
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/estrellas/mini_5.jpg",
            audio:"audio/estrellas/escena_06_new.mp3",
            parrafos:
            [
                {
                    texto: "La máquina de mirar estrellas funciona gracias a los hilos que cada tarde, mientras hago mis tareas, amarra mi abuelo.",
                    tiempo:[0,11.3,6.5] 
                },
                {
                    texto: "Hilos que sujetan estrellas.",
                    tiempo:[11.8,14.7,2] 
                },
                {
                    texto: "Hilos que sujetan planetas.",
                    tiempo:[15.2,18.5,1] 
                },
                {
                    texto: "Hilos que sujetan recuerdos.",
                    tiempo:[19,22,1] 
                },
                {
                    texto: "(Hace unos meses noté el truco…<br>Pero no dije nada).",
                    tiempo:[22.5,27.6,1] 
                },
                
            ]
        },
        {
            nombre:"Escena 7",
            miniatura:"img/estrellas/mini_6.jpg",
            audio:"audio/estrellas/escena_07_new.mp3",
            parrafos:
            [
                {
                    texto: "Así como el abuelo tiene sus secretos, yo tengo los míos:",
                    tiempo:[0,6,6.5] 
                },
                {
                    texto: "Días en que subo, cuando todos duermen y miro a través de la máquina:",
                    tiempo:[6.5,13,1]
                },
                {
                    texto: "Cometas.",
                    tiempo:[13.5,14.5,1] 
                },
                {
                    texto: "Lluvia de meteoritos.",
                    tiempo:[15,17,1] 
                },
                {
                    texto: "Eclipses que esconden el brillo del sol.",
                    tiempo:[17.5,22,1]
                },
                
            ]
        },
        {
            nombre:"Escena 8",
            miniatura:"img/estrellas/mini_7.jpg",
            audio:"audio/estrellas/escena_08_new.mp3",
            parrafos:
            [
                {
                    texto: "Y es que la máquina de mirar estrellas,",
                    tiempo:[0,3,6.5] 
                },
                {
                    texto: "además de ser una máquina fantástica y ser un invento de mi abuelo,",
                    tiempo:[3.5,8.7,0.5] 
                },
                {
                    texto: "es una máquina que de verdad funciona.",
                    tiempo:[9.2,13,1] 
                },
                {
                    texto: "Tal vez se deba a que el abuelo la hizo tan bien que, aunque él ya no esté, sigue funcionando.",
                    tiempo:[13.5,21.5,2] 
                },
                {
                    texto: "La verdad, no lo sé.",
                    tiempo:[22,24.5,1.5]
                },
            ]
        },
        {
            nombre:"Escena 9",
            miniatura:"img/estrellas/mini_8.jpg",
            audio:"audio/estrellas/escena_09_new.mp3",
            parrafos:
            [
                {
                    texto: "Lo que sí sé es que cada noche la máquina nos espera.",
                    tiempo:[0,5.5,6.5] 
                },
                {
                    texto: "–¿Sabías que Neptuno tiene seis anillos?, pregunta el abuelo.",
                    tiempo:[6,12.5,1.5] 
                },
                {
                    texto: "–¿Sabías que te quiero hasta Júpiter?, pregunto yo.",
                    tiempo:[13,18,1.5] 
                },
                {
                    texto: "Las estrellas conocen el secreto<br>que compartimos el abuelo y yo:",
                    tiempo:[18.5,24.5,2] 
                },
                {
                    texto: "el cielo,<br>aunque está lejos,<br>queda cerca.",
                    tiempo:[25,29.8,1.5]
                },                
            ]
        },
        
    ]    
};

let ANIM = {
     /* ↓↓↓↓↓ HOLA CATA - COPIA DESDE LA LÍNEA SIGUIENTE ↓↓↓↓↓ */
    main_tl:undefined,
    creapartes:() => {
        // PONER ACÁ LO QUE SE VAYA A CREAR "ON THE FLY"
        let cont = $('#escena_00 .estrellas');
        let arrEstrellas = Array(25).fill(25);
        let arrLetras = ['A','B','C','D','E','F','G','H','I','J'];
        cont.append(ANIM.creaEstrellas(arrEstrellas, arrLetras));
        cont.find('.estrella').each(function(i){
            ANIM.ponEstrellaEnDisco($(this));
        });
        
        let cont2 = $('#escena_02 .estrellas');
        let arrEstrellas2 = Array(10).fill(10);
        cont2.append(ANIM.creaEstrellas(arrEstrellas2, arrLetras));
        cont2.find('.estrella').each(function(i){
            ANIM.escalaEstrella($(this),30,90);
            
        });
        
        let cont3 = $('#escena_03 .estrellas_fuera');
        let arrEstrellas3 = Array(35).fill(35);
        cont3.append(ANIM.creaEstrellas(arrEstrellas3, arrLetras));
        cont3.find('.estrella').each(function(i){
            ANIM.escalaEstrella($(this),60,110);
            ANIM.ponEstrellaEnRect($(this));
        });
        let cont3B = $('#escena_03 .estrellas_dentro');
        let arrEstrellas3B = Array(10).fill(10);
        cont3B.append(ANIM.creaEstrellas(arrEstrellas3B, arrLetras));
        cont3B.find('.estrella').each(function(i){
            ANIM.escalaEstrella($(this),30,90);
            ANIM.ponEstrellaEnRect($(this),0,409,0,466);
        });
        
        let cont4 = $('#escena_04 .estrellas');
        let arrEstrellas4 = Array(35).fill(35);
        cont4.append(ANIM.creaEstrellas(arrEstrellas4, arrLetras));
        cont4.find('.estrella').each(function(i){
            ANIM.escalaEstrella($(this),60,110);
            ANIM.ponEstrellaEnRect($(this));
        });
        let cont5 = $('#escena_05 .estrellas');
        let arrEstrellas5 = Array(25).fill(25);
        cont5.append(ANIM.creaEstrellas(arrEstrellas5, arrLetras));
        cont5.find('.estrella').each(function(i){
            ANIM.escalaEstrella($(this),60,110);
            ANIM.ponEstrellaEnRect($(this),1100,1920,0,1080);
        });
        
        let cont_recuerdos5 = $('#escena_05 .recuerdos');
        let arrRecuerdos5 = Array(12).fill(12);
        cont_recuerdos5.append(ANIM.creaRecuerdos(arrRecuerdos5));
        
        let cont_recuerdos7 = $('#escena_07 .recuerdos');
        let arrRecuerdos7 = Array(16).fill(16);
        cont_recuerdos7.append(ANIM.creaRecuerdosRio(arrRecuerdos7));
        let arrRioW = [];
        let arrRioH = [];
        cont_recuerdos7.find('.rio_item').each(function(i){
            arrRioW.push($(this).width());
            arrRioH.push($(this).height());
        });
        
        let maxH = Math.max(...arrRioH);
        let maxW = Math.max(...arrRioW);
        
        cont_recuerdos7.find('.rio_item').each(function(i){
            let top = `${(maxH - $(this).height())*0.5}px`;
            let left = `${(maxW - $(this).width())*0.5}px`;
            $(this).css({'top':top, 'left':left});
        });
        
        let hoy = new Date();
        let diaEcpliseMasUno = new Date('2020-11-15'); //   el eclipse es el catorce pero le puse el quince
        
        console.log(hoy.getTime(),'<---->',diaEcpliseMasUno.getDate());
        if(hoy.getTime() < diaEcpliseMasUno.getTime()){
            ANIM.finalBeforeFinal();
        }
        
        ANIM.putSVGHoyo();
        
        
        /*IMPORTANTE NO TOCAR*/
        ANIM.sobreescribeAudioFX(); // <--- Soluciona una nueva feature que le agregué al audio PLAYER (Player.cambiaVolume)
        ANIM.sobreescribeCreditosFinal(); // <--- Soluciona una pifia que tenía el Plyer original (no detenía las interacciones al llegar al final del cuento)
        ANIM.sobreescribePrevParrafo(); // <--- Soluciona una pifia que tenía el Player original (mostraba los botones de interacción al hacer atrás)
    },
    sobreescribeAudioFX:() => {
        if(!Player.arr_SOUNDS_FX){
            Player.arr_SOUNDS_FX = [];   
        }
        Player.playSoundFX = (cual, loop = false) => {
            let sound;
            if(loop){
                sound = createjs.Sound.play(cual, {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
            } else {
                sound = createjs.Sound.play(cual); 
            }
            Player.arr_SOUNDS_FX.push({sound:sound, id : cual});
        } 
        
        Player.cambiaVolume = (cual = 'musica_', vol = 0.1) => {
            let todasLasVeces = Player.arr_SOUNDS_FX.filter(id => id.id === cual);
            try{   
                let miAudio = todasLasVeces[todasLasVeces.length-1].sound;
                miAudio.volume = vol;
            } catch(err){
                console.log(err.message);
            }
        }
    },
    sobreescribeCreditosFinal:()=>{
        Creditos.final = () => {
            TweenMax.set('body',{backgroundColor:'#E9EDF5'});
            $('#final_cuento').css({'display':'block'});
            $('#cuento').css({'display':'none'});
            $('#escenario').css({'display':'none'});
            $('#btn_adelante').css({'display':'none'});
            $('body').css({'overflow':'auto'});
            Player.stopAudioParrafo();
            ANIM.pausaInteractividad(); //<--- esto es lo que agregué
        }  
    },
    sobreescribePrevParrafo:() => {
        Player.prevParrafo = () => {
            let arrEscenas = JSON_CUENTO.escenas;
            let arrParrafos = arrEscenas[Player.escena_actual].parrafos;
            Player.desActivaBtnSiguiente();
            Player.resetBotonesInteraccion();
            if(Player.parrafo_actual > 0){
    //            console.log("PREV actual es", Player.parrafo_actual);
                let i = Player.parrafo_actual - 1;
                Player.setParrafo( i );
                Player.putSubtitulos(Player.escena_actual, Player.parrafo_actual);
                 let label = `${Player.escena_actual}_${Player.parrafo_actual}`;
                ANIM.main_tl.pause();
                ANIM.main_tl.resume(label, true);
            }
            ANIM.pausaInteractividad();
            Player.tooglePlayPauseIco();
        }
    },
    fadeVolume:(cual, desde = 1, hasta=0.2 , t = 1) => {
        let o = {vol:desde};
        let fade = new TimelineMax({onUpdate:function(){
            Player.cambiaVolume(cual, o.vol);
        }});
        
        fade.to(o, t,{vol:hasta});
        fade.play();
    },
    arrWaitSounds:[],
    waitForSound:(cual, waitFor=4, cuantoDura=14, cuantasVeces = 1, cuantoDejoAlFinal = 0, volume=1, fade = false, fadeFrom = 12, volFadeTo = 0) => {
        
        if(!ANIM[`wait_sound_${cual}`]){
            ANIM[`wait_sound_${cual}`] = new TimelineMax({repeat:cuantasVeces-1});
            
            let o = {val:0};
            let waitTL = `+=${waitFor}`;
            ANIM[`wait_sound_${cual}`]

            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX(cual);
                Player.cambiaVolume(cual,volume);
            },waitTL)
            .to(o, cuantoDura+cuantoDejoAlFinal,{val:100})
            .addLabel('final')
            ;
            
//            ANIM[`wait_sound_${cual}`].add(TweenMax.to(o, cuantoDura+cuantoDejoAlFinal,{val:100}),waitFor);   
            
            if(fade){
                ANIM[`wait_sound_${cual}`].addCallback(function(){
                    ANIM.fadeVolume(cual,volume,volFadeTo, cuantoDura-fadeFrom);
                },waitFor+fadeFrom);
            }
            
            ANIM.arrWaitSounds.push(ANIM[`wait_sound_${cual}`]);
        }
        ANIM[`wait_sound_${cual}`].play(0);
    },
    pauseWaitSound:() => {
         ANIM.arrWaitSounds.map((item, i) => {
            item.pause();
        });
    },
    putSVGHoyo:() => {
        let svg = `<svg width="1920px" height="1080px" viewBox="0 0 1920 1080">
                          <defs>
                            <mask id="mascara">
                                <rect x="0" y="0" width="1920" height="1080" class="oscuridad" fill="#000" />
                              <circle id="circulo_movil_" fill="#fff" cx="660" cy="510" r="180" />
                            </mask>
                          </defs>
                        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/estrellas/esc_3_fondo.jpg" width="1920" height="1080" mask="url(#mascara)"/>
                        </svg>`;
        $('#superSVG').append(svg);
    },
    creaRecuerdos:(arr1) => {
        let newArr = arr1.map((item, i) => {
            return `<div class="recuerdo recuerdo${(i+1)}">
                        <div class="spriteC sin_borde"></div>
                        <div class="spriteC con_borde"></div>
                    </div>`;
        });
        return newArr.join("");
    },
    creaRecuerdosRio:(arr1) => {
        let newArr = arr1.map((item, i) => {
            return `<div class="spriteD rio_item rio_item${i+1}"></div>`;
        });
        return newArr.join("");
    },
    creaEstrellas:(arr1, arr2) => {
        let count = -1;
        let newArr = arr1.map((item, i) => {
            if(i % arr2.length == 0 ){
                count+=1;
            }
            let j = i-count*arr2.length;
            let letra = arr2[j];
            return `<div class="estrella estrella${letra} estrella${(i+1)}"></div>`;
        });
        return newArr.join("");
    },
    escalaEstrella:(div, min = 40, max = 100)=>{
        let s = Utils.randomInt(min,max)/100;
        TweenMax.set(div,{scale:s});
    },
    ponEstrellaEnRect:(div,minX=0,maxX=1920,minY=0,maxY=1080) => {
         TweenMax.fromTo(div,1,{alpha:1},{alpha:0, onComplete:function(d,maX,miX,miY,maY){
            let left = `${Utils.randomInt(miX,maX)}px`;
            let top = `${Utils.randomInt(miY,maY)}px`;
            d.css({'left':left,'top':top});
            TweenMax.to(d,1,{alpha:1});
         },onCompleteParams:[div, minX, maxX, minY, maxY]});
        
    },
    ponEstrellaEnDisco:(div, maxRadio=550) => {
        TweenMax.fromTo(div,1,{alpha:1},{alpha:0, onComplete:function(d,mr){
            let radius = Utils.randomInt(mr*0.5,mr);
            let angle = Math.random()*Math.PI*2;
            let r = Math.sqrt(Math.random());
            let top = `${r * Math.sin(angle) * radius}px`;
            let left = `${r * Math.cos(angle) * radius}px`;
            
            d.css({'top':top,'left':left});
            ANIM.escalaEstrella(d,60,120);
            TweenMax.to(d,1,{alpha:1});
        },onCompleteParams:[div, maxRadio]});
    },
    cambiaEstrellaDeLugarDisco:() => {  
        let i = Utils.randomInt(1, $('#escena_00 .estrellas .estrella').length);
        ANIM.ponEstrellaEnDisco($('#escena_00 .estrellas .estrella'+i));
    },
    cambiaEstrellaDeLugarRect:(str_cont = '#escena_00 .estrellas', minX=0, maxX=1920, minY=0, maxY=1080) => { 
        let cont = $(str_cont);
        let i = Utils.randomInt(1, cont.find('.estrella').length);
        let estrella = `.estrella${i}`;
        let div = cont.find(estrella);
//        console.log(cont,i,estrella,div);
        ANIM.ponEstrellaEnRect(div, minX,maxX,minY, maxY);
    },
    setHoraInicial:() => {
        let date = new Date();
//        date.setTime(result_from_Date_getTime);

        var s = date.getSeconds();
        var m = date.getMinutes()/60;
        var h = date.getHours()/12;
        
        console.log('HORA',h,m,s);
        
        TweenMax.set('#escena_01 .reloj .minutero',{rotation:360*m, transformOrigin:'5px 30px'});
        TweenMax.set('#escena_01 .reloj .horario',{rotation:360*h, transformOrigin:'5px 21px'});
    },
    arrEstrellaRect:[],
    animaCambiaDeLugarEstrellaRect:(escena = 'escena_03', cont = 'estrellas_fuera', minX=0, maxX=1920, minY=0, maxY=1080) => {
//        ANIM[`luna_jupiter_${cual}`]
        if(!ANIM[`anim_cambioDeLugarEstrellaRect${escena}_${cont}`]){
            ANIM[`anim_cambioDeLugarEstrellaRect${escena}_${cont}`] = new TimelineMax({repeat:-1});
            ANIM[`anim_cambioDeLugarEstrellaRect${escena}_${cont}`]
            .addCallback(function(){
               ANIM.cambiaEstrellaDeLugarRect(`#${escena} .${cont}`, minX, maxX, minY, maxY);
            },'+=3');
            ANIM.arrEstrellaRect.push(ANIM[`anim_cambioDeLugarEstrellaRect${escena}_${cont}`]);
        }
        ANIM[`anim_cambioDeLugarEstrellaRect${escena}_${cont}`].play();
    },
    pauseCambiaDeLugarEstrellaRect:() => {
         ANIM.arrEstrellaRect.map((item, i) => {
            item.pause();
        });
    },
    animaReloj:() => {
        if(!ANIM.anim_minutero){
            ANIM.anim_minutero = new TimelineMax({repeat:-1});
            ANIM.anim_minutero
            .to('#escena_01 .reloj .minutero',20,{rotation:'+=360', transformOrigin:'5px 30px',ease: SteppedEase.config(60)})
        }
        ANIM.anim_minutero.play();
    },
    pauseReloj:() => {
        try{
            ANIM.anim_minutero.pause();
        } catch(err){}
    },
    animaColaPerro:() => {
        if(!ANIM.anim_cola_perro){
            ANIM.anim_cola_perro = new TimelineMax({repeat:-1});
            ANIM.anim_cola_perro
            .addCallback(function(){
               
            },'+=2')
            .to('#escena_01 .perro .cola',0.2,{rotation:-15, repeat:7, yoyo:true, transformOrigin:'5px 30px'})
            ;
        }
        ANIM.anim_cola_perro.play(0);
    },
    pauseColaPerro:() => {
        try{
            ANIM.anim_cola_perro.pause();
        } catch(err){}
    },
    animaOjosNena:() => {
        if(!ANIM.anim_ojos_nena){
            ANIM.anim_ojos_nena = new TimelineMax({repeat:-1});
            ANIM.anim_ojos_nena
            .set('#escena_01 .ojos .ojo1',{alpha:0})
            .set('#escena_01 .ojos .ojo2',{alpha:0})
            .addCallback(function(){
               
            },'+=2')
            .to('#escena_01 .ojos .ojo1',0.1,{alpha:1})
            .to('#escena_01 .ojos .ojo2',0.1,{alpha:1},'-=0.1')
            .to('#escena_01 .ojos .ojo1',0.1,{alpha:0},'+=0.2')
            .to('#escena_01 .ojos .ojo2',0.1,{alpha:0},'-=0.1')
            .to('#escena_01 .ojos .ojo1',0.1,{alpha:1},'+=3')
            .to('#escena_01 .ojos .ojo2',0.1,{alpha:1},'-=0.1')
            .to('#escena_01 .ojos .ojo1',0.1,{alpha:0},'+=0.2')
            .to('#escena_01 .ojos .ojo2',0.1,{alpha:0},'-=0.1')
            .to('#escena_01 .ojos .ojo1',0.1,{alpha:1},'+=0.2')
            .to('#escena_01 .ojos .ojo2',0.1,{alpha:1},'-=0.1')
            .to('#escena_01 .ojos .ojo1',0.1,{alpha:0},'+=0.2')
            .to('#escena_01 .ojos .ojo2',0.1,{alpha:0},'-=0.1')
            ;
        }
        ANIM.anim_ojos_nena.play(0);
    },
    animaOjosNena2:() => {
        if(!ANIM.anim_ojos_nena2){
            ANIM.anim_ojos_nena2 = new TimelineMax({repeat:-1});
            ANIM.anim_ojos_nena2
            .set('#escena_03 .ojos .ojo1',{alpha:0})
            .set('#escena_03 .ojos .ojo2',{alpha:0})
            .addCallback(function(){
               
            },'+=3')
            .to('#escena_03 .ojos .ojo1',0.1,{alpha:1})
            .to('#escena_03 .ojos .ojo2',0.1,{alpha:1},'-=0.1')
            .to('#escena_03 .ojos .ojo1',0.1,{alpha:0},'+=0.2')
            .to('#escena_03 .ojos .ojo2',0.1,{alpha:0},'-=0.1')
            .to('#escena_03 .ojos .ojo1',0.1,{alpha:1},'+=3')
            .to('#escena_03 .ojos .ojo2',0.1,{alpha:1},'-=0.1')
            .to('#escena_03 .ojos .ojo1',0.1,{alpha:0},'+=0.2')
            .to('#escena_03 .ojos .ojo2',0.1,{alpha:0},'-=0.1')
            .to('#escena_03 .ojos .ojo1',0.1,{alpha:1},'+=0.2')
            .to('#escena_03 .ojos .ojo2',0.1,{alpha:1},'-=0.1')
            .to('#escena_03 .ojos .ojo1',0.1,{alpha:0},'+=0.2')
            .to('#escena_03 .ojos .ojo2',0.1,{alpha:0},'-=0.1')
            ;
        }
        ANIM.anim_ojos_nena2.play(0);
    },
    pauseOjosNena:() => {
        try{ ANIM.anim_ojos_nena.pause(); } catch(err){}
        try{ ANIM.anim_ojos_nena2.pause(); } catch(err){}
    },
    arrLunasJupiter:[],
    animaLunasJupiter:() => {
        $('#escena_03 .jupiter_luna').each(function(i){
            let t = Utils.randomInt(300,650)/100;
            let radius = Utils.randomInt(80, 160);
            ANIM.animaLunaJupiter((i+1),t, radius);
        });
    },
    animaLunaJupiter:(cual, t, radius) => {
        if(!ANIM[`luna_jupiter_${cual}`]){
            ANIM[`luna_jupiter_${cual}`] = new TimelineMax({repeat:-1});

            ANIM[`luna_jupiter_${cual}`]

            .addLabel('inicio')
            .set(`.jupiter_luna${cual}`,{scale:0.5})
            .to(`.jupiter_luna${cual}`, t,{bezier:{curviness:1.25, 
                    values:[
                        {x:0, y:0},
                        {x:radius, y:radius*0.5},
                        {x:0, y:radius},
                        {x:radius*-1, y:radius*0.5},
                        {x:0, y:0}
                    ]}, ease:Power0.easeNone})
            .to(`.jupiter_luna${cual}`,t*0.5,{scale:1},`-=${t}`)
            .to(`.jupiter_luna${cual}`,t*0.5,{scale:0.5},`-=${t*0.5}`)
            .addLabel('final')
            ;
            
            ANIM.arrLunasJupiter.push(ANIM[`luna_jupiter_${cual}`]);
        }
        ANIM[`luna_jupiter_${cual}`].play();
    },
    pauseLunasJupiter:() => {
         ANIM.arrLunasJupiter.map((item, i) => {
            item.pause();
        });
    },
    animaConejos:() => {
        if(!ANIM.animConejo1){
            ANIM.animConejo1 = new TimelineMax({repeat:-1});
            ANIM.animConejo1
               .to('#escena_04 .conejo1',1,{rotation:-15, repeat:3, yoyo:true, transformOrigin:'140px 250px', ease:Power0.easeNone});
        }
        if(!ANIM.animConejo2){
            ANIM.animConejo2 = new TimelineMax({repeat:-1});
            ANIM.animConejo2
               .to('#escena_04 .conejo2',1,{alpha:1})
               .to('#escena_04 .conejo2',7,{x:-200,y:-60,ease:Power0.easeNone},'-=1')
               .to('#escena_04 .conejo2',1,{alpha:0},'-=1')
            ;
        }
        if(!ANIM.animConejo3){
            ANIM.animConejo3 = new TimelineMax({repeat:-1});
            ANIM.animConejo3
                .to('#escena_04 .conejo3',1,{alpha:1})
                .fromTo('#escena_04 .conejo3',6,{rotation:-90},{rotation:0, transformOrigin:'60px 180px',ease:Power0.easeNone},'-=1')
                .to('#escena_04 .conejo3',1,{alpha:0},'-=1')
            ;
        }
        if(!ANIM.animConejo4){
            ANIM.animConejo4 = new TimelineMax({repeat:-1});
            ANIM.animConejo4
                .to('#escena_04 .conejo4',3.65,{scale:0.8, ease:Elastic.easeOut.config(1,0.3)},'+=1.23')
                .to('#escena_04 .conejo4',3.65,{scale:1, ease:Elastic.easeOut.config(1,0.3)},'+=1.23')
            ;
        }
        if(!ANIM.animConejo5){
            ANIM.animConejo5 = new TimelineMax({repeat:-1});
            ANIM.animConejo5
               .fromTo('#escena_04 .conejo5',4.7,{x:-200,y:-60},{x:200, y:200},'+=2')
            ;
        }
        if(!ANIM.animConejo6){
            ANIM.animConejo6 = new TimelineMax({repeat:-1});
            ANIM.animConejo6
                .to('#escena_04 .conejo6',1,{alpha:1})
                .fromTo('#escena_04 .conejo6',5.1,{y:-100},{y:0, ease:Bounce.easeOut},'-=1')
                .fromTo('#escena_04 .conejo6',5.1,{x:-200},{x:0},'-=5')
                .to('#escena_04 .conejo6',1,{alpha:0},'+=1')
            ;
        }
        
        ANIM.animConejo1.play();
        ANIM.animConejo2.play();
        ANIM.animConejo3.play();
        ANIM.animConejo4.play();
        ANIM.animConejo5.play();
        ANIM.animConejo6.play();
    },
    pauseConejos:() => {
        try{ ANIM.animConejo1.pause(); } catch(err){}
        try{ ANIM.animConejo2.pause(); } catch(err){}
        try{ ANIM.animConejo3.pause(); } catch(err){}
        try{ ANIM.animConejo4.pause(); } catch(err){}
        try{ ANIM.animConejo5.pause(); } catch(err){}
        try{ ANIM.animConejo6.pause(); } catch(err){}
    },
    parpadeoSol:() => {
        TweenMax.killTweensOf("#escena_06 .sol");
//        let left = Utils.randomInt(0,1) == 0 ? 406 : 1900;
        let t = Utils.randomInt(700,2000)/1000;
        let sIni = Utils.randomInt(80,100)/100;
        let sFin = Utils.randomInt(100,105)/100;
        let rIni = Utils.randomInt(0,360);
        let rFin = Utils.randomInt(0,1) == 0 ? rIni + Utils.randomInt(10,30) : rIni - Utils.randomInt(10,30);
        TweenMax.fromTo("#escena_06 .sol",t*0.5,{alpha:0},{alpha:0.5});
        TweenMax.to("#escena_06 .sol",t*0.5,{alpha:0, delay:t*0.5});
        TweenMax.fromTo("#escena_06 .sol",t,
                        {scale:sIni,rotation:rIni},
                        {scale:sFin,rotation:rFin, onComplete:function(){ANIM.parpadeoSol();}});
    },
    killParpadeoSol:() => {
        TweenMax.killTweensOf("#escena_06 .sol");
        TweenMax.set("#escena_06 .sol",{alpha:0});
    },
    nenaFlota:() =>{
        TweenMax.killTweensOf("#escena_07 .nenita2");
        let m1 = Utils.randomInt(0,1) == 1 ? 1 : -1;
        let m2 = Utils.randomInt(0,1) == 1 ? 1 : -1;
        let m3 = Utils.randomInt(0,1) == 1 ? 1 : -1;
        let t = Utils.randomInt(2000,5000)/1000;
        let x = Utils.randomInt(10,30) * m1;
        let y = Utils.randomInt(10,30) * m2;
        let r = Utils.randomInt(0,10) * m3;
        TweenMax.set('#escena_07 .nenita2',{alpha:1}); 
        TweenMax.to('#escena_07 .nenita2',t,{x:x,y:y, rotation:r, onComplete:function(){
            ANIM.nenaFlota();
        }, ease:Power0.easeNone}); 
    },
    pauseNenaFlota:() =>{
        TweenMax.killTweensOf("#escena_07 .nenita2");
    },
    flotacionFinal:() => {
        if(!ANIM.flotacionFinalEspacio){
            ANIM.flotacionFinalEspacio = new TimelineMax({repeat:-1});
            ANIM.flotacionFinalEspacio
                .fromTo('#escena_08 .fondo',30,{backgroundPosition:'0px 0px'},{backgroundPosition:'0px 1080px', ease:Power0.easeNone})
            ;
        }
        ANIM.flotacionFinalEspacio.play(0);
        
        TweenMax.set('#escena_08 .abuelo',{y:-860});
        TweenMax.set('#escena_08 .abuela',{y:-860});
        TweenMax.set('#escena_08 .nenita_frente',{y:-860});
        TweenMax.set('#escena_08 .abuelo2',{alpha:1,x:0,y:0,rotation:0});
        TweenMax.set('#escena_08 .abuela2',{alpha:1,x:0,y:0,rotation:0});
        TweenMax.set('#escena_08 .nenita_frente2',{alpha:1,x:0,y:0,rotation:0});
        
        ANIM.flotacionFinalPersonajes('abuelo2');
        ANIM.flotacionFinalPersonajes('abuela2');
        ANIM.flotacionFinalPersonajes('nenita_frente2');
    },
    flotacionFinalPersonajes:(cual) => {
        let personaje = `#escena_08 .${cual}`;
        TweenMax.killTweensOf(personaje);
        let m1 = Utils.randomInt(0,1) == 1 ? 1 : -1;
        let m2 = Utils.randomInt(0,1) == 1 ? 1 : -1;
        let m3 = Utils.randomInt(0,1) == 1 ? 1 : -1;
        let t = Utils.randomInt(2000,5000)/1000;
        let x = Utils.randomInt(10,30) * m1;
        let y = Utils.randomInt(10,30) * m2;
        let r = Utils.randomInt(0,10) * m3;
        TweenMax.to(personaje,t,{x:x,y:y, rotation:r, onComplete:function(c){
            ANIM.flotacionFinalPersonajes(c);
        }, onCompleteParams:[cual], ease:Power0.easeNone}); 
    },
    pauseFlotacionFinal:() => {
        try { ANIM.flotacionFinalEspacio.pause(); } catch (err) {}
        TweenMax.killTweensOf('#escena_08 .abuelo2');
        TweenMax.killTweensOf('#escena_08 .abuela2');
        TweenMax.killTweensOf('#escena_08 .nenita_frente2');
    },
    arrFlotadores:[],
    animaFlotadores:(i = 1) => {
        let max = $('#escena_07 .recuerdos .rio_item').length;
        if(!ANIM[`anim_flotador${i}`] && i <= max){

            let t = max-3;
            let tIni = 1; 
            let desfase = 1.37;
            let stdesfase = `+=${desfase}`;
            let stt = `+=${t-desfase+tIni}`;
            
//            console.log(t, stdesfase, stt)
            
            ANIM[`anim_flotador${i}`] = new TimelineMax({repeat:-1});
            ANIM[`anim_flotador${i}`]
            .addCallback(function(){
               ANIM.cambiaFlotadorDeLugar(i, t, tIni);
            })
//            .set(item,{x:0,alpha:1,y:0})
//            .fromTo(item,2,{scale:0,rotation:r},{scale:1,rotation:0})
            .addCallback(function(){
               ANIM.animaFlotadores(i + 1);
            },stdesfase)
            .addCallback(function(){
                //nada
            },stt)
            ;
            ANIM.arrFlotadores.push(ANIM[`anim_flotador${i}`]);
        }
        if(i <= max){
            ANIM[`anim_flotador${i}`].play(0);
        }
    },
    cambiaFlotadorDeLugar:(i, t, tIni) => {
//        console.log('cambiando ',i);
       
        let m3 = Utils.randomInt(0,1) == 1 ? 1 : -1;
        let item = `#escena_07 .recuerdos .rio_item${i}`;
        
        let r1 = Utils.randomInt(0,360) * m3;
        let r2 = Utils.randomInt(0,360) * m3;
//        let x1 = Utils.randomInt(0,60) - 30;
//        let y1 = Utils.randomInt(0,60) - 30;
        let y2 = Utils.randomInt(0,(490+200)) - 200;
        let s = Utils.randomInt(40,70)/100;
        
        TweenMax.set(item,{alpha:1,y:0});
        
        TweenMax.fromTo(item,tIni,{x:0,y:0,scale:0,rotation:r1},{x:0,y:0,scale:s,rotation:0, ease:Back.easeOut.config(1.7)});
        
        TweenMax.to(item, t,{x:-1800, rotation:r2, y:y2, scale:1.1, delay:tIni, ease:Power0.easeNone});
    },
    pauseFlotadores:() => {
        TweenMax.killTweensOf("#escena_07 .recuerdos .rio_item");
        ANIM.arrFlotadores.map((item, i) => {
            item.pause();
        });
    },
    finalBeforeFinal:() => {
          $('body').prepend('<div id="finalBeforeFinal"><div class="cont_sol"><div class="solestatico"></div><div class="sol solA"></div><div class="sol solB"></div><div class="sol solC"></div></div><div class="arriba"><h1>¿Qué es un eclipse de sol?</h1><p>En ocasiones la luna se interpone entre la tierra y el sol, bloqueando la luz de este último en algunos lugares de nuestro planeta. Si eso ocurre durante el día, podremos ver que el cielo se oscurece, casi como si se hiciera de noche.</p></div><div class="abajo"><h1>ECLIPSE EN CHILE</h1><p>El 14 de diciembre de 2020 tendremos la suerte de observar por algunos minutos un eclipse total de sol en el sur de Chile, con una visibilidad total en las regiones de La Araucanía y Los Ríos, y parcial en el resto del país.</p></div></div>');
        //<div id="botonFinal">BOTON FINAL</div>
        let btfinal = `<div id="botonFinal" class="btn_adelante">
                <div class="interior">
                    <span>Siguiente</span>
                    <div class="ico">
                            <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-744.000000, -848.000000)">
                                        <g transform="translate(751.000000, 855.000000) scale(-1, 1) translate(-751.000000, -855.000000) translate(744.000000, 848.000000)">
                                            <path d="M8.53147997,2.54542928 L13.61131,12.0277786 C13.8721106,12.5146065 13.6888793,13.1206793 13.2020514,13.38148 C13.0568121,13.4592867 12.8945975,13.5 12.72983,13.5 L2.57017001,13.5 C2.01788526,13.5 1.57017001,13.0522847 1.57017001,12.5 C1.57017001,12.3352325 1.6108833,12.1730178 1.68869004,12.0277786 L6.76852003,2.54542928 C7.02932071,2.05860133 7.63539347,1.87537004 8.12222141,2.13617072 C8.29599998,2.22926638 8.43838431,2.37165071 8.53147997,2.54542928 Z" transform="translate(7.650000, 7.200000) scale(-1, 1) rotate(90.000000) translate(-7.650000, -7.200000) " fill="#5B667A"></path>
                                            <rect id="Rectangle" transform="translate(0.900000, 6.750000) scale(-1, 1) translate(-0.900000, -6.750000) " x="0" y="0" width="1.8" height="13.5" rx="0.9" fill="#5B667A"></rect>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                </div>
            </div>`;
        $('#finalBeforeFinal').append(btfinal);
        
        $('#finalBeforeFinal').css({'display':'none'});
        
        $('#btn_adelante .interior').off('click').click(function(){
            console.log('nuevo click');
            let arrEscenas = JSON_CUENTO.escenas;
            if(Player.escena_actual < arrEscenas.length-1){
                Player.nextScene();
            } else {
                Player.onPlayer = false;
                $('#finalBeforeFinal').css({'display':'block'});
//                Creditos.final();
                TweenMax.set('body',{backgroundColor:'#E9EDF5'});
//                $('#final_cuento').css({'display':'block'});
                $('#cuento').css({'display':'none'});
                $('#escenario').css({'display':'none'});
                $('#btn_adelante').css({'display':'none'});
                $('body').css({'overflow':'auto'});
                Player.stopAudioParrafo();
                window.onresize = function(e){
                    ANIM.showSol();
                };
                ANIM.showSol();
                ANIM.killParpadeoSolFinal();
                ANIM.parpadeoSolFinal('A');
                ANIM.parpadeoSolFinal('B');
                ANIM.parpadeoSolFinal('C');
            }
        });
        
        $('#botonFinal').click(function(){
            console.log('FINAL REAL');
            window.onresize = function(e){
                let w, h;
                w = window.innerWidth;
                h = window.innerHeight;
                Front.resizeListener(w, h);
            };
            ANIM.killParpadeoSolFinal();
            Player.onPlayer = false;
            $('#finalBeforeFinal').css({'display':'none'});
            Creditos.final();
        });
    },
    showSol:() => {
        let w = window.innerWidth;
        let h = window.innerHeight;
        let wcss = `${w}px`;
        let hcss = `${h}px`;
        let cont =  $('#finalBeforeFinal .cont_sol');
        let sol = cont.find('.sol');
        let solestatico = cont.find('.solestatico');
        cont.css({'width':wcss,'height':hcss})
        let solH = sol.height();
        let solestaticoH = solestatico.height();
        let s = h / solH;
        
        sol.attr('data-scale',s);
//            let bt = w > 822 ? 100 : 60;
        let dif = `${( (h - solH) / 2)}px`;
        let difestatico = `${( (h - solestaticoH) / 2)}px`;
        let tOri = `0px ${Math.round(solestaticoH/2)}px`;
        
        sol.css({'top':dif});
        solestatico.css({'top':difestatico});
        console.log(solH, h, s, dif, '--', solestaticoH, difestatico);
        TweenMax.set(sol,{scale:s, y:-5});
        TweenMax.set(solestatico,{scale:s, y:-1, transformOrigin:tOri});
        
    },
     parpadeoSolFinal:(cual = 'A') => {
         let sol = `#finalBeforeFinal .sol${cual}`;
        TweenMax.killTweensOf(sol);
//        let left = Utils.randomInt(0,1) == 0 ? 406 : 1900;
        let t = Utils.randomInt(1400,4000)/1000;
//        let sIni = Utils.randomInt(90,95)/100;
        let sIni = parseFloat($(sol).attr('data-scale'));
        let sFin = sIni+Utils.randomInt(5,15)/100;
        let alphaFin = Utils.randomInt(25,50)/100;
        let rIni = Utils.randomInt(0,360);
        let rFin = Utils.randomInt(0,1) == 0 ? rIni + Utils.randomInt(10,30) : rIni - Utils.randomInt(10,30);
        TweenMax.fromTo(sol,t*0.5,{alpha:0},{alpha:alphaFin});
        TweenMax.to(sol,t*0.5,{alpha:0, delay:t*0.5});
        TweenMax.fromTo(sol,t,
                        {scale:sIni,rotation:rIni},
                        {scale:sFin,rotation:rFin, onComplete:function(letra){ANIM.parpadeoSolFinal(letra);},onCompleteParams:[cual]});
    },
    killParpadeoSolFinal:() => {
        TweenMax.killTweensOf("#finalBeforeFinal .sol");
        TweenMax.set("#finalBeforeFinal .sol",{alpha:0});
    },
    init:() => {
        ANIM.creapartes();

        ANIM.main_tl = new TimelineMax({});
        
        ANIM.main_tl
        .set('.escena',{left:"-1920px"}) // <-- al comenzar envío a todas las escenas a left -1920
        ;
        
        let _arr = JSON_CUENTO.escenas;
        let tiempo = 0.01;
        let posicion = 0;
        let delayAcumulado = 0;
        let espacioEntreEscenas = 2; // segundos para que no se solapen las escenas una sobre la otra
        
        _arr.map((item, i) => {
            
            let i_st = i > 9 ? i.toString() : `0${i.toString()}`;
            ANIM.main_tl.add( TweenMax.set(`#escena_${i_st}`, {left:0}) , tiempo); //<-- pongo la escena actual en 0 left
            
            if(i > 0){
                let i_stanterior = i > 9 ? (i-1).toString() : `0${(i-1).toString()}`;
                ANIM.main_tl.add( TweenMax.set(`#escena_${i_stanterior}`, {left:-1920}) , tiempo-0.01); // <-- pongo la escena anterior en -1920 left
            }
            
            ANIM.main_tl.addLabel(`escena_${i}`, tiempo); // le digo que la escena comienza en este tiempo
            
             item.parrafos.map((parrafo, j) => {
                let delay = parrafo.tiempo[2] ? parrafo.tiempo[2] : 0; // veo si hay que retrasar el tiempo de aparicicón del párrafo o no
                delayAcumulado += delay; // asigno la cantidad de tiempo de retraso de párrafo acumulado
                let duracion = parrafo.tiempo[1]-parrafo.tiempo[0]; // cuanto dura el párrafo en particular
                let desfase = (posicion+delayAcumulado); // momento exacto en que el párrafo debe aparecer
//                console.log(posicion, delay, `${i}_${j}`, desfase, delayAcumulado, tiempo);
                 
                ANIM.main_tl.addLabel(`${i}_${j}`, desfase); // acá le pongo el label correspondiente al párrafo
                posicion += duracion; // reasigno posicion del siguiente con la duración del actual
            });
            tiempo = posicion+delayAcumulado; // le digo al tiempo que se sume todo lo anterior
            ANIM.main_tl.addLabel(`fin_escena_${i}`, tiempo); // así le asigno el final de la escena
            tiempo += espacioEntreEscenas; // dejo un par de seundo para que las escenas no se monten una arriba de otra
            delayAcumulado += espacioEntreEscenas; // y obviamnete se lo tengo que sumar al delay acumulado
            
        });
        
        ANIM.main_tl.addLabel('0_0_audio','escena_0+=1'); 
        ANIM.main_tl.addLabel('audio_abue','fin_escena_1-=4'); 
        ANIM.main_tl.addLabel('3_0_audio','escena_3+=0.1'); 
        ANIM.main_tl.addLabel('4_0_audio','escena_4+=0.1'); 
        ANIM.main_tl.addLabel('5_0_audio','escena_5+=0.1'); 
        ANIM.main_tl.addLabel('6_0_audio','escena_6+=0.1'); 
        ANIM.main_tl.addLabel('7_0_audio','escena_7+=0.1'); 
        ANIM.main_tl.addLabel('8_0_audio','escena_8+=0.1'); 
        
//        ANIM.main_tl.addLabel('mueve_al_lado','2_4-=4'); // <-- otro ejemplo de lo mismo
//        ANIM.main_tl.add( TweenMax.to('#escena_00', 20, {scale:2}),'escena_0+=13'); // <-- le pongo una animación al timeline con la misma técnica, es decir uso una label existente y le sumo o resto el tiempo en que quiero que se active a partir de ésta.
        
        
        let tl_perro_paneo = new TimelineMax();
        
        tl_perro_paneo
            .addCallback(function(){
//                Player.playSoundFX('ladrido');
                //waitForSound:(cual, waitFor=4, cuantoDura=14, cuantasVeces = 1, cuantoDejoAlFinal = 0, volume=1, fade = false, fadeFrom = 12, volFadeTo = 0)
                ANIM.waitForSound('pelota', 0.8,2.1,1,0);
                ANIM.waitForSound('ladrido',3,0.75,1,0);
                Player.resetSubtitulos();
            })
            .fromTo('#escena_02 .pelota', 2, {y:-325},{y:0, ease:Bounce.easeOut })
            .fromTo('#escena_02 .pelota', 7, {rotation:0},{rotation:1080, ease:Power4.easeOut },'-=1')
            .fromTo('#escena_02 .pelota', 8, {x:-2340},{x:0, ease:Power4.easeOut },'-=8')
            .to('#escena_02 .fondo', 7, {left:-1764, ease: Power1.easeInOut},'-=7')
            .to('#escena_02 .interact', 7, {left:-1764, ease: Power1.easeInOut},'-=7')
        
            .fromTo('#escena_02 .perro_movil', 4, {x:-2340},{x:-70, ease:Power2.easeOut },'-=6')
        
            .fromTo('#escena_02 .perro_movil .pataC',0.5,{rotation:-80},{rotation:50, transformOrigin:'8px 4px'},'-=6.1')
            .to('#escena_02 .perro_movil .pataC',1,{rotation:-80, transformOrigin:'8px 4px'},'-=5.6')
            .to('#escena_02 .perro_movil .pataC',1,{rotation:0, transformOrigin:'8px 4px'},'-=4.6')
            .fromTo('#escena_02 .perro_movil .pataD',0.5,{rotation:-80},{rotation:50, transformOrigin:'8px 4px'},'-=5.9')
            .to('#escena_02 .perro_movil .pataD',1,{rotation:-80, transformOrigin:'8px 4px'},'-=5.4')
            .to('#escena_02 .perro_movil .pataD',1,{rotation:0, transformOrigin:'8px 4px'},'-=4.4')
            .fromTo('#escena_02 .perro_movil .pataA',0.5,{rotation:-50},{rotation:50, transformOrigin:'8px 4px'},'-=6')
            .to('#escena_02 .perro_movil .pataA',1,{rotation:-50, transformOrigin:'8px 4px'},'-=5.5')
            .to('#escena_02 .perro_movil .pataA',1,{rotation:0, transformOrigin:'8px 4px'},'-=4.5')
            .fromTo('#escena_02 .perro_movil .pataB',0.5,{rotation:-50},{rotation:50, transformOrigin:'8px 4px'},'-=5.8')
            .to('#escena_02 .perro_movil .pataB',1,{rotation:-50, transformOrigin:'8px 4px'},'-=5.3')
            .to('#escena_02 .perro_movil .pataB',1,{rotation:0, transformOrigin:'8px 4px'},'-=4.3')
            .fromTo('#escena_02 .perro_movil',2,{rotation:8},{rotation:-8},'-=6')
            
            .to('#escena_02 .perro_movil', 4, {x:0, ease:Power0.easeNone },'-=2')
        
            .to('#escena_02 .perro_movil .pataC',1,{rotation:-20, transformOrigin:'8px 4px'},'-=4')
            .to('#escena_02 .perro_movil .pataC',1,{rotation:20, transformOrigin:'8px 4px'},'-=3')
            .to('#escena_02 .perro_movil .pataC',1,{rotation:0, transformOrigin:'8px 4px'},'-=2')
            
            .to('#escena_02 .perro_movil .pataD',1,{rotation:20, transformOrigin:'8px 4px'},'-=3.5')
            .to('#escena_02 .perro_movil .pataD',1,{rotation:-20, transformOrigin:'8px 4px'},'-=2.5')
            .to('#escena_02 .perro_movil .pataD',1,{rotation:0, transformOrigin:'8px 4px'},'-=1.5')
        
            .to('#escena_02 .perro_movil .pataA',1,{rotation:-20, transformOrigin:'8px 4px'},'-=3.7')
            .to('#escena_02 .perro_movil .pataA',1,{rotation:20, transformOrigin:'8px 4px'},'-=2.7')
            .to('#escena_02 .perro_movil .pataA',1,{rotation:0, transformOrigin:'8px 4px'},'-=1.7')
        
            .to('#escena_02 .perro_movil .pataB',1,{rotation:20, transformOrigin:'8px 4px'},'-=3.3')
            .to('#escena_02 .perro_movil .pataB',1,{rotation:-20, transformOrigin:'8px 4px'},'-=2.3')
            .to('#escena_02 .perro_movil .pataB',1,{rotation:0, transformOrigin:'8px 4px'},'-=1.3')
        
            .to('#escena_02 .perro_movil',1,{ rotation:-20, y:40},'-=1')
            .to('#escena_02 .perro_movil .pataC',1,{ rotation:-20, transformOrigin:'8px 4px'},'-=1')
            .to('#escena_02 .perro_movil .pataD',1,{ rotation:-20, transformOrigin:'8px 4px'},'-=1')
            .to('#escena_02 .perro_movil .pataA',1,{ rotation:-50, transformOrigin:'8px 4px'},'-=1')
            .to('#escena_02 .perro_movil .pataB',1,{ rotation:-50, transformOrigin:'8px 4px'},'-=1')
//        
        ;
        ANIM.main_tl.add( tl_perro_paneo,'2_3+=4.9'); 
        
        ANIM.main_tl.add( TweenMax.from('#escena_05',16,{scale:1.6, transformOrigin:'1900px 400px'}),'5_2-=2.3'); 
//        ANIM.main_tl.add( TweenMax.staggerFromTo('#escena_05 .recuerdos .recuerdo .sin_borde',6,{alpha:0},{alpha:1, ease:Expo.easeInOut},-1.5),'5_0+=1');
        
        let tl_nena_cae_al_agua = new TimelineMax({onComplete: function(){ANIM.nenaFlota();}});
        tl_nena_cae_al_agua
            .set('#escena_07 .nenita',{alpha:1})
            .fromTo('#escena_07 .nenita',3,{scale:0.5,x:655,y:15, rotation:0},{scale:0.5,x:655,y:-70, rotation:5})
            .to('#escena_07 .nenita',9,{scale:1,x:0,y:0, rotation:0, ease:Power0.easeNone})
            .set('#escena_07 .nenita',{alpha:0})
        ;
         ANIM.main_tl.add( tl_nena_cae_al_agua ,'7_0+=1');
        
        ANIM.main_tl.addLabel('7_3_rio','7_3-=1.5'); 
        ANIM.main_tl.addLabel('7_3_nena','7_3+=0.1'); 
        ANIM.main_tl.addLabel('7_4_nena','7_4+=0.1'); 
        ANIM.main_tl.addLabel('7_4_nena2','7_4+=1'); 
        ANIM.main_tl.addLabel('7_4_nena3','7_4+=2'); 
        ANIM.main_tl.addLabel('finsecena7_nena','fin_escena_7-=0.1'); 
        
        /*CREADOR DE callbacks para visualización de subtítulos */
        _arr.map((item, i) => {
             item.parrafos.map((parrafo, j) => {
                 ANIM.main_tl.addCallback(function(){
                    Player.playSoundParrafo(i, j);
                    Player.putSubtitulos(i, j);
                },`${i}_${j}`);
            });    
        });
        /***/
        
        
        
        
        ANIM.main_tl.addCallback(function(){    ANIM.animaFlotadores();   },"7_3_rio");
        ANIM.main_tl.addCallback(function(){    ANIM.nenaFlota();   },"7_3_nena");
        ANIM.main_tl.addCallback(function(){    ANIM.nenaFlota();   },"7_4_nena");
        ANIM.main_tl.addCallback(function(){    ANIM.nenaFlota();   },"7_4_nena2");
        ANIM.main_tl.addCallback(function(){    ANIM.nenaFlota();   },"7_4_nena3");
        ANIM.main_tl.addCallback(function(){    ANIM.nenaFlota();   },"finsecena7_nena");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('musica_inicio');
        },"0_0_audio");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('notas_iniciales4');
        },"3_0_audio");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('notas_iniciales5');
        },"4_0_audio");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('notas_iniciales6');
        },"5_0_audio");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('notas_iniciales5');
        },"6_0_audio");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('notas_iniciales4');
        },"7_0_audio");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('notas_iniciales4');
        },"8_0_audio");
        
        
        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_00');
        },"escena_0");
        
        ANIM.main_tl.addCallback(function(){
            Player.activaBtnSiguiente();
            ANIM.main_tl.pause();
            ANIM.interactividad(0);
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('musica_espacial',true);
        },"fin_escena_0");
        
       
        /*LLAMADAS Y FUNCIONES ESCENA 1*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_01');
            ANIM.animaOjosNena();
        },"escena_1");

        ANIM.main_tl.addCallback(function(){    
            Player.playSoundFX('cuerdaA'); 
            Player.resetSubtitulos();
        },"audio_abue");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            ANIM.interactividad(1);
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
           
            ANIM.animaOjosNena();
            Player.playSoundFX('tictac_reloj',true);
            Player.playSoundFX('musica_abuelo',true);
        },"fin_escena_1");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_02');
        },"escena_2");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
//            ANIM.interactividad(2);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            ANIM.anim_interact_2_perro.play(0);
        },"fin_escena_2");
        
       
         /*LLAMADAS Y FUNCIONES ESCENA 3*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_03');
            ANIM.animaLunasJupiter();
            TweenMax.staggerFromTo('#escena_03 .jupiter_luna',1,{alpha:0},{alpha:1},0.2);
            ANIM.animaOjosNena2();
            ANIM.animaCambiaDeLugarEstrellaRect();
        },"escena_3");
      
        
     
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(3);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            ANIM.animaLunasJupiter();
            ANIM.animaOjosNena2();
            ANIM.animaCambiaDeLugarEstrellaRect();
            Player.playSoundFX('musica_estrellas',true);
            
        },"fin_escena_3");
        
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 4*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_04');
            ANIM.animaCambiaDeLugarEstrellaRect('escena_04','estrellas');
        },"escena_4");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(4);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('musica_conejos',true);
            Player.playSoundFX('grillos',true);
            ANIM.fadeVolume('grillos',0,0.4,3);
            ANIM.animaCambiaDeLugarEstrellaRect('escena_04','estrellas');
        },"fin_escena_4");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 5*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_05');
            ANIM.animaCambiaDeLugarEstrellaRect('escena_05','estrellas',1100,1920,0,1080);
        },"escena_5");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(5);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            ANIM.animaCambiaDeLugarEstrellaRect('escena_05','estrellas',1100,1920,0,1080);
            Player.playSoundFX('musica_recuerdos',true);
            console.log("fin_escena 5");
        },"fin_escena_5");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 6*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_06');
        },"escena_6");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(66, Player.activaBtnSiguiente);
//            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
             Player.playSoundFX('musica_espacial',true);
        },"fin_escena_6");
        
        /*LLAMADAS Y FUNCIONES ESCENA 7*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_07');
        },"escena_7");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();

            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            ANIM.animaFlotadores();
            Player.playSoundFX('musica_conejos',true);
            //waitForSound:(cual, waitFor=4, cuantoDura=14, cuantasVeces = 1, cuantoDejoAlFinal = 0, volume=1, fade = false, fadeFrom = 12, volFadeTo = 0)
            ANIM.waitForSound('voz_abuelo_ruido', 3,25.5,0,4);
        },"fin_escena_7");
        
        /*LLAMADAS Y FUNCIONES ESCENA 8*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_08');
        },"escena_8");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(8);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('musica_final',true);
            console.log('FINAL');
        },"fin_escena_8");
        
       
        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
        
        ANIM.setHoraInicial();
    },
    creaAnimInteractividad:() => {
        
        //
        ANIM.anim_interact_0 = new TimelineMax();
        ANIM.anim_interact_0
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('viento_espacial');
            })
            .to('#escena_00 .interact',5,{scale:2.2, transformOrigin:'1280px 395px'})
//            .to('#escena_00 .nenita',4,{scale:0.13},'-=4')
            .to('#escena_00 .nenita',5,{scale:0.13, x:360, y:-255, rotation:-45},'-=5')
            .addCallback(function(){
                ANIM.anim_interact_0_rebotes.play(0);
            })
            .addLabel('final')
            
             ;
        ANIM.anim_interact_0.pause();
        
        ANIM.anim_interact_0_rebotes = new TimelineMax({repeat:-1});
        ANIM.anim_interact_0_rebotes
         
            .addLabel('inicio')
            .addCallback(function(){
                $('#escena_00 .btn_interact.primario').css({'display':'none'});
                ANIM.cambiaEstrellaDeLugarDisco();
            })
            .to('#escena_00 .nenita',4,{scale:0.13, x:183, y:70, rotation:-460, ease: Power1.easeInOut})
            .addCallback(function(){
                ANIM.cambiaEstrellaDeLugarDisco();
            })
            .to('#escena_00 .nenita',4,{scale:0.13, x:430, y:75, rotation:-660, ease: Power1.easeInOut})
            .addCallback(function(){
                ANIM.cambiaEstrellaDeLugarDisco();
            })
            .to('#escena_00 .nenita',4,{scale:0.13, x:480, y:-175, rotation:-760, ease: Power1.easeInOut})
            .addCallback(function(){
                ANIM.cambiaEstrellaDeLugarDisco();
            })
            .to('#escena_00 .nenita',4,{scale:0.13, x:220, y:-230, rotation:-820, ease: Power1.easeInOut})
            .addCallback(function(){
                ANIM.cambiaEstrellaDeLugarDisco();
            })
            .to('#escena_00 .nenita',7,{scale:0.13, x:320, y:120, rotation:-1440, ease: Power1.easeInOut})
            .addCallback(function(){
                ANIM.cambiaEstrellaDeLugarDisco();
            })
            .to('#escena_00 .nenita',4,{scale:0.13, x:130, y:-75, rotation:-1660, ease: Power1.easeInOut})
            .addCallback(function(){
                ANIM.cambiaEstrellaDeLugarDisco();
            })
            .to('#escena_00 .nenita',4,{scale:0.13, x:513, y:-150, rotation:-1697, ease: Power1.easeInOut})
            .addCallback(function(){
                ANIM.cambiaEstrellaDeLugarDisco();
            })
            .to('#escena_00 .nenita',5,{scale:0.13, x:360, y:-255, rotation:-1845, ease: Power1.easeInOut})
            .addLabel('final')
            
             ;
        ANIM.anim_interact_0_rebotes.pause();
       
        
        ANIM.anim_interact_1 = new TimelineMax();
        ANIM.anim_interact_1
         
            .addLabel('inicio')
            .addCallback(function(){
                ANIM.animaReloj();
                ANIM.animaColaPerro();
            })
            .fromTo('#escena_01 .maquina .rueda1',30,{rotation:0},{rotation:360*19, ease:Power0.easeNone, transformOrigin:'28px 28px'})
            .fromTo('#escena_01 .maquina .rueda2',30,{rotation:0},{rotation:-360*19, ease:Power0.easeNone, transformOrigin:'34px 34px'},'-=30')
            .fromTo('#escena_01 .maquina .rueda3',30,{rotation:0},{rotation:360*19, ease:Power0.easeNone, transformOrigin:'33px 28px'},'-=30')
        
            .to('#escena_01 .paloma .ala',0.3,{rotation:15, repeat:71, yoyo:true, transformOrigin:'10px 62px'},'-=27')
            .to('#escena_01 .paloma',0.3,{y:-15, repeat:79, yoyo:true},'-=27')
            .to('#escena_01 .auto',6,{x:-1880, y:8,},'-=25')
            .to('#escena_01 .auto .rueda',6,{ rotation:-360, transformOrigin:'22px 21px'},'-=25')
            .to('#escena_01 .auto',2,{ rotation:12, transformOrigin:'60px 65px'},'-=25')
            .addCallback(function(){
               Player.playSoundFX('cuerdaB'); 
            },'-=25')
            .addCallback(function(){
                ANIM.anim_interact_1_doll.play(0);
            },'-=23')
            .addCallback(function(){
               Player.playSoundFX('cuerdaB'); 
            },'-=16')
            .to('#escena_01 .auto',0.1, {scaleX:-1, rotation:-12},'-=16')
            .to('#escena_01 .auto',6, {x:350},'-=16')
            .to('#escena_01 .auto .rueda',6,{ rotation:'-=360', transformOrigin:'22px 21px'},'-=16')
            .addCallback(function(){
               Player.playSoundFX('cuerdaB'); 
            },'-=9')
            .to('#escena_01 .auto',0.1, {scaleX:1, rotation:12},'-=9')
            .to('#escena_01 .auto',7, {x:0, y:0, rotation:0},'-=9')
            .to('#escena_01 .auto .rueda',7,{ rotation:'-=360', transformOrigin:'22px 21px'},'-=9')
            .addCallback(function(){
                ANIM.pauseReloj();
                ANIM.pauseColaPerro();
            },'+=3')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_1.pause();
        
        /***/
        ANIM.anim_interact_1.add( TweenMax.to('#escena_01 .pelota', 0.7, {x:-500}),7.8); 
        ANIM.anim_interact_1.addCallback(function(){
            Player.playSoundFX('pelotita');
        },7.8); 
        /***/
        ANIM.anim_interact_1_doll = new TimelineMax({repeat:5});
        ANIM.anim_interact_1_doll
         
            .addLabel('inicio')
            .to('#escena_01 .doll .cuerpo',1,{rotation:20, transformOrigin:'95px 166px'})
            .to('#escena_01 .doll .pierna1',1,{rotation:30, transformOrigin:'40px 10px'},'-=1')
//            .to('#escena_01 .doll',1,{x:'-=10'})
            .to('#escena_01 .doll .cuerpo',1,{rotation:5, transformOrigin:'95px 166px'})
            .to('#escena_01 .doll .pierna1',1,{rotation:0, transformOrigin:'40px 10px'},'-=1')
        
            .to('#escena_01 .doll .cuerpo',1,{rotation:20, transformOrigin:'95px 166px'})
            .to('#escena_01 .doll .pierna2',1,{rotation:40, transformOrigin:'40px 10px'},'-=1')
//            .to('#escena_01 .doll',1,{x:'-=10'})
            .to('#escena_01 .doll .cuerpo',1,{rotation:0, transformOrigin:'95px 166px'})
            .to('#escena_01 .doll .pierna2',1,{rotation:0, transformOrigin:'40px 10px'},'-=1')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_1_doll.pause();
        
        
        ANIM.anim_interact_2_perro = new TimelineMax();
        ANIM.anim_interact_2_perro
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('caja_musical', true);
            })
            .to('#escena_02 .luna .lunaB',1,{alpha:1})
            .addCallback(function(){
                 ANIM.anim_luna_esc2.play(0);
            })
            .staggerTo('#escena_02 .estrellas .estrella',1,{alpha:1},0.5)
            .to('#escena_02 .perro_movil',1,{ rotation:0, y:0})
            .to('#escena_02 .perro_movil .pataC',1,{ rotation:0, transformOrigin:'8px 4px'},'-=1')
            .to('#escena_02 .perro_movil .pataD',1,{ rotation:0, transformOrigin:'8px 4px'},'-=1')
            .to('#escena_02 .perro_movil .pataA',1,{ rotation:0, transformOrigin:'8px 4px'},'-=1')
            .to('#escena_02 .perro_movil .pataB',1,{ rotation:0, transformOrigin:'8px 4px'},'-=1')
            .addLabel('final')
            
            ;
        ANIM.anim_interact_2_perro.pause();
        
        ANIM.anim_luna_esc2 = new TimelineMax({repeat:-1});
        ANIM.anim_luna_esc2
         
            .addLabel('inicio')
            .to('#escena_02 .luna .lunaC',1,{alpha:1})
            .to('#escena_02 .luna .lunaC',1,{alpha:0})
            .addLabel('final')
            ;
        ANIM.anim_luna_esc2.pause();
        
        //HOYO
        ANIM.anim_interact_3_hoyo = new TimelineMax();
        ANIM.anim_interact_3_hoyo
         
            .addLabel('inicio')
//            .to('#circulo_movil_',3,{scale:7,y:0,x:300, ease:Back.easeInOut.config(1.7)})
            .to('#circulo_movil_',3,{scale:7,y:0,x:300, ease:Bounce.easeIn})
            .staggerTo('#escena_03 .estrellas_dentro .estrella',1,{alpha:1},0.2,'-=1')
            .addCallback(function(){
                ANIM.pauseCambiaDeLugarEstrellaRect();
                ANIM.pauseLunasJupiter();
                ANIM.anim_luna_esc3.play(0);
            })
            .addLabel('final')
            ;
        ANIM.anim_interact_3_hoyo.pause();
        
        ANIM.anim_luna_esc3 = new TimelineMax({repeat:-1});
        ANIM.anim_luna_esc3
         
            .addLabel('inicio')
            .to('#escena_03 .luna .lunaB',1,{alpha:1})
            .to('#escena_03 .luna .lunaB',1,{alpha:0})
            .staggerTo('#escena_03 .cruz_del_sur .vertice',1,{alpha:1},0.5,'-=1')
            .staggerTo('#escena_03 .cruz_del_sur .vertice',1,{alpha:0},0.5,'-=1')
        
            .addCallback(function(){
                ANIM.animaCambiaDeLugarEstrellaRect('escena_03','estrellas_dentro',0,409,0,466);
            })
            .addLabel('final')
            ;
        ANIM.anim_luna_esc3.pause();
        
        //CONEJOS
        ANIM.anim_interact_4_conejo = new TimelineMax();
        ANIM.anim_interact_4_conejo
         
            .addLabel('inicio')
            .set('#escena_04 .conejo',{alpha:0})
            .set('#escena_04 .conejo7',{alpha:1})
            .set('#escena_04 .conejo8',{alpha:1})
            .set('#escena_04 .conejo9',{alpha:1})
            
            .addCallback(function(){
                ANIM.pauseConejos();
                ANIM.animConejo_oreja.play();
            })
            .addCallback(function(){
                Player.playSoundFX('versos');
                ANIM.fadeVolume('musica_conejos',1,0.2,3);
                ANIM.fadeVolume('grillos',0.4,0.1,3);
            },'+=5')
            
            .addCallback(function(){
                ANIM.animaConejos();
            })
            .staggerTo([
                        '#escena_04 .conejo1',
                        '#escena_04 .conejo6',
                        '#escena_04 .conejo4',
                        '#escena_04 .conejo5',
//                        '#escena_04 .conejo3',
                        '#escena_04 .conejo2',
                        ],1,{alpha:1},0.7)
            .addCallback(function(){
                ANIM.fadeVolume('musica_conejos',0.2,1,3);
                ANIM.fadeVolume('grillos',0.1,0.4,3);
            },'+=29')
            .addLabel('final')
            ;
        ANIM.anim_interact_4_conejo.pause();
        
        ANIM.animConejo_oreja = new TimelineMax({repeat:-1});
        ANIM.animConejo_oreja
            .to('#escena_04 .conejo7',1,{y:0, repeat:7, yoyo:true})
            .to('#escena_04 .conejo8',1,{x:0, y:0, repeat:7, yoyo:true},'-=7.5')
            .to('#escena_04 .conejo9',1,{x:0, y:0, repeat:7, yoyo:true},'-=7')
        ;
        ANIM.animConejo_oreja.pause();
        
        //RECUERDOS
        ANIM.anim_interact_5_recuerdos = new TimelineMax();
        ANIM.anim_interact_5_recuerdos
         
            .addLabel('inicio')
            .addCallback(function(){
//                Player.playSoundFX('caja_musical');
//                ANIM.fadeVolume('caja_musical',0,1,2);
//                ANIM.fadeVolume('musica_recuerdos',1,0.1,2);
           
                Player.playSoundFX('grillos');
                Player.playSoundFX('hombre_tarareando');
                Player.playSoundFX('murmullos');
                ANIM.fadeVolume('grillos',0,1,6);
                ANIM.fadeVolume('hombre_tarareando',0,0.6,2);
                ANIM.fadeVolume('murmullos',0,1,5);
                ANIM.waitForSound('risas', 3,6,2,1,1);
                ANIM.waitForSound('mar', 2,20,1,0, 1, true, 18);
                ANIM.waitForSound('pajaros', 5,8,1,0, 1, true, 7);
                ANIM.waitForSound('ladrido',3,0.75,1,0);
            
            
            })
            .staggerTo('#escena_05 .recuerdos .recuerdo .sin_borde',1,{alpha:1},0.3)
            .staggerTo('#escena_05 .recuerdos .recuerdo .con_borde',1,{alpha:1, repeat:15, yoyo:true},0.3,'-=3')
            .addCallback(function(){
                ANIM.fadeVolume('murmullos',1,0,3);
                ANIM.fadeVolume('grillos',1,0,4);
//                ANIM.fadeVolume('musica_recuerdos',0.1,1,3);
            },'+=1')
            .addCallback(function(){
            
            },'+=2')
            .addLabel('final')
            ;
        ANIM.anim_interact_5_recuerdos.pause(); 
        
        //ECLIPSE
        ANIM.anim_interact_6_eclipse = new TimelineMax();
        ANIM.anim_interact_6_eclipse
         
            .addLabel('inicio')
            .addCallback(function(){
//                Player.playSoundFX('musica_espacial');
                ANIM.killParpadeoSol();
            })
            
            .to('#escena_06 .luna',8,{x:400,y:10,ease:Power0.easeNone})
            .to('#escena_06 .nenita .lentes',2,{rotation:0, transformOrigin:'5px 220px'},'-=2')
            .to('#escena_06 .luna',12,{x:0,y:0,ease:Power0.easeNone})
            .to('#escena_06 .fondo_oscuro',12,{alpha:1,ease:Power0.easeNone},'-=12')
            .to('#escena_06 .luna_oscura',12,{alpha:1,ease:Power0.easeNone},'-=12')
            .to('#escena_06 .nenita .lentes',1,{rotation:-50, transformOrigin:'5px 220px'},'-=11')
            .addCallback(function(){
                ANIM.parpadeoSol();
            },'-=1')
            .addCallback(function(){
//                 ANIM.fadeVolume('musica_espacial',1,0,5);
            })
            .addCallback(function(){
                ANIM.interactividad(6);
            },'+=5')
            
            .addLabel('final')
            ;
        ANIM.anim_interact_6_eclipse.pause();
        
        //FINAL
        ANIM.anim_interact_8_final = new TimelineMax();
        ANIM.anim_interact_8_final
         
            .addLabel('inicio')
           
            .to('#escena_08 .fondo',2,{scale:1})
            .to('#escena_08 .con_hoyo',5,{scale:5, transformOrigin:'1330px 390px'},'-=2')
            .to('#escena_08 .fondo',25,{backgroundPosition:'0px 5400px'},'-=5')
            .to('#escena_08 .nenita_espalda',17,{bezier:{curviness:1.25, 
                    values:[
                        {x:-350, y:-100, rotation:-45, scale:1},
                        {x:100, y:-300, rotation:0, scale:1},
                        {x:0, y:-150, rotation:-35, scale:0.9},
                        {x:-250, y:-450, rotation:-30, scale:0.7},
                        {x:-350, y:-950, rotation:-25, scale:0.6}
                    ]},transformOrigin:'184px 61px', ease:Power0.easeNone},'-=25')
            .to('#escena_08 .abuelo',4,{y:0, ease:Back.easeOut.config(1.7)},'-=6.4')
            .to('#escena_08 .abuela',4,{y:0, ease:Back.easeOut.config(1.7)},'-=5.8')
            .to('#escena_08 .nenita_frente',4,{y:0, ease:Back.easeOut.config(1.7)},'-=5.6')
            .addCallback(function(){
                ANIM.flotacionFinal();
            })
            .addLabel('final')
            ;
        ANIM.anim_interact_8_final.pause();
        
        ANIM.arr_interacts = [
            ANIM.anim_interact_0,
            ANIM.anim_interact_0_rebotes,
            ANIM.anim_interact_1,
            ANIM.anim_interact_1_doll,
            ANIM.anim_interact_2_perro,
            ANIM.anim_luna_esc2,
            ANIM.anim_interact_3_hoyo,
            ANIM.anim_luna_esc3,
            ANIM.anim_interact_4_conejo,
            ANIM.animConejo_oreja,
            ANIM.anim_interact_5_recuerdos,
            ANIM.anim_interact_6_eclipse,
            ANIM.anim_interact_8_final,
        ];
        
        ANIM.setIniciales();
    },
    pausaInteractividad:() =>{
        ANIM.arr_interacts.map((anim) => {
            anim.pause();
            anim.eventCallback("onComplete", null);  //<--- para matar los eventos de onComplete para evitar que muestren los botones en otra escenas
        });
       
        ANIM.setIniciales();
    },
    setIniciales:() => {
        //estado inicial
        TweenMax.set('#escena_00 .interact',{scale:1, transformOrigin:'1280px 395px'});
        TweenMax.set('#escena_00 .estrellas',{scale:0.42, y:0, rotation:0});
        TweenMax.set('#escena_00 .nenita',{scale:1, x:0, y:0, rotation:0});
        TweenMax.set('#escena_00 .planeta',{scale:0.42, x:0, y:0});

        TweenMax.set('#escena_01 .ojos .ojo1',{alpha:0})
        TweenMax.set('#escena_01 .ojos .ojo2',{alpha:0})
        TweenMax.set('#escena_01 .perro .cola',{rotation:0, transformOrigin:'5px 30px'})
        
        TweenMax.set('#escena_01 .maquina .rueda1',{rotation:0, transformOrigin:'28px 28px'});
        TweenMax.set('#escena_01 .maquina .rueda2',{rotation:0, transformOrigin:'34px 34px'});
        TweenMax.set('#escena_01 .maquina .rueda3',{rotation:0, transformOrigin:'33px 28px'});
        TweenMax.set('#escena_01 .paloma .ala',{rotation:0, transformOrigin:'10px 62px'});
        TweenMax.set('#escena_01 .auto',{x:0, y:0, scaleX:1, rotation:0, transformOrigin:'60px 65px'});
        TweenMax.set('#escena_01 .auto .rueda',{rotation:0, transformOrigin:'22px 21px'});
        
        TweenMax.set('#escena_02 .luna .lunaB',{alpha:0});
        TweenMax.set('#escena_02 .luna .lunaC',{alpha:0});
        TweenMax.set('#escena_02 .estrellas .estrella',{alpha:0});
        
        
        TweenMax.set('.sistema_planetario',{rotation:35, scale:1.3});
        TweenMax.set('.sistema_planetario .jupiter',{rotation:-35});
        TweenMax.set('.sistema_planetario .jupiter_cabeza',{rotation:-35});
        
        TweenMax.set('#circulo_movil_',{scale:1,y:0,x:0});
        TweenMax.set('#escena_03 .luna .lunaA',{alpha:0});
        TweenMax.set('#escena_03 .luna .lunaB',{alpha:0});
        TweenMax.set('#escena_03 .cruz_del_sur .vertice',{alpha:0});
        TweenMax.set('#escena_03 .estrellas_dentro .estrella',{alpha:0});
//        TweenMax.set('#circulo_movil_',1,{scale:7,y:-950,x:-710})
        
        TweenMax.set('#escena_04 .conejo',{alpha:0});
        TweenMax.set('#escena_04 .conejo7',{y:-90});
        TweenMax.set('#escena_04 .conejo8',{x:-80,y:70});
        TweenMax.set('#escena_04 .conejo9',{x:80,y:-10});
        
        TweenMax.set('#escena_05 .recuerdos .recuerdo .con_borde',{alpha:0});
        TweenMax.set('#escena_05 .recuerdos',{scale:0.5});
        TweenMax.set('#escena_05 .recuerdos .recuerdo .sin_borde',{alpha:0});
        
        TweenMax.set('#escena_06 .luna',{x:850,y:30});
        TweenMax.set('#escena_06 .fondo_oscuro',{alpha:0});
        TweenMax.set('#escena_06 .luna_oscura',{alpha:0});
        TweenMax.set('#escena_06 .nenita .lentes',{rotation:150, transformOrigin:'5px 220px'});
        
        
        TweenMax.set('#escena_07 .nenita2',{alpha:0});
        TweenMax.set('#escena_07 .recuerdos .rio_item',{alpha:0});
        
        TweenMax.set('#escena_08 .con_hoyo .hoyo',{scale:0.5, transformOrigin:'top left'});
        TweenMax.set('#escena_08 .con_hoyo',{scale:1, transformOrigin:'1330px 390px'});
        TweenMax.set('#escena_08 .nenita_espalda',{x:0, y:0, rotation:0, scale:1});
        TweenMax.set('#escena_08 .abuelo',{y:-860});
        TweenMax.set('#escena_08 .abuela',{y:-860});
        TweenMax.set('#escena_08 .nenita_frente',{y:-860});
        TweenMax.set('#escena_08 .abuelo2',{alpha:0});
        TweenMax.set('#escena_08 .abuela2',{alpha:0});
        TweenMax.set('#escena_08 .nenita_frente2',{alpha:0});
        TweenMax.set('#escena_08 .fondo',{scale:0.8});
        TweenMax.set('#escena_08 .fondo',{backgroundPosition:'0px 0px'});
        
        ANIM.pauseColaPerro();
        ANIM.pauseOjosNena();
        ANIM.pauseReloj();
        ANIM.pauseLunasJupiter();
        ANIM.pauseCambiaDeLugarEstrellaRect();
        ANIM.pauseConejos();
        ANIM.killParpadeoSol();
        ANIM.pauseNenaFlota();
        ANIM.pauseFlotadores();
        ANIM.pauseFlotacionFinal();
        
//        ANIM.desactivaDragAndDrops();
        
        $('.indicador_interactividad').css({'display':'none'});
        
        ANIM.pauseWaitSound();
        
    },
    displayInteract:(cualEscena) => {
        $(cualEscena+' .interact').css({'display':'block'});
    },
    interactividad:(nEscena, callback = undefined, btn_especifico = "primario") => {
        let i_st = nEscena > 9 ? (nEscena) : `0${(nEscena)}`;
        
//        console.log(i_st);
        
        var btn = $('#escena_'+i_st +' .btn_interact.'+btn_especifico);
        var cb = callback;
        btn.css({"display":"block"});
        TweenMax.fromTo(btn,1,{alpha:0},{alpha:1});
        let muestralo = (div, cbb) => {
            if(cbb !== undefined){
                cbb();
            }
            div.css({"display":"block"});             
        }
         switch (nEscena){
            case 0:
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0.play(0);
                    });
                 }
                break;
             case 1:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        if(ANIM.anim_interact_1.currentLabel() === 'final'){
                            ANIM.anim_interact_1.play(0);
                        } else {
                            ANIM.anim_interact_1.play();
                        }
                    });
                 }
                break;
            case 2:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
//                        ANIM.anim_interact_2_perro.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_perro.play(0);
                    });
                 }
                 break;
             case 3:
                 if(btn.hasClass('primario')){
                     btn.click(function(){
                        $(this).css({"display":"none"});
//                            ANIM.anim_interact_3_hoyo.eventCallback("onComplete", muestralo, [$(this), cb]);   
                            ANIM.anim_interact_3_hoyo.play(0);
                        });
                    }
                 break;
            case 4:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_4_conejo.eventCallback("onComplete", muestralo, [$(this), undefined]); 
                        ANIM.anim_interact_4_conejo.play(0);
                    });
                 }
                
                 break;
             case 5:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_5_recuerdos.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_5_recuerdos.play(0);
                    });
                 }
                 break;
            case 6:
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_6_eclipse.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_6_eclipse.play(0);
                    });
                 }
                 break;
             case 66:
                    ANIM.anim_interact_6_eclipse.eventCallback("onComplete", muestralo, [btn, cb]);   
                    ANIM.anim_interact_6_eclipse.play(0);
                 break;
             case 7:
                
                 break;
             case 8:
                    btn.click(function(){
                        $(this).css({"display":"none"});  
//                        ANIM.anim_interact_8_final.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_8_final.play(0);
                    });
                 break;
             
        }
    },
    compensaEscenas:(d) => {
       let dif = Math.abs(d); 
    }
      /*↑↑↑↑ HASTA LA ANTERIOR ↑↑↑↑↑*/
};