let JSON_CUENTO = {
    nombre:"En mi calle",
    tipo:"Cuentos sobre niños y niñas",
    descripcion:"En <i>Calle</i> Los Olivos la vida no se detiene. Hay cosas que siguen un orden perfecto y otras que suceden en desorden desde el balcón de nuestra pequeña protagonista. ¿Habrá un director de orquesta o un reloj escondido en algún lugar? <br> La galardonada autora chilena María José Ferrada nos regala en este relato una reflexión poética sobre la mirada de los niños, la observación de lo cotidiano y la experiencia de vivir en comunidad.",
    creditos:[
                ["Texto:","María José Ferrada Lefenda"],
                ["Ilustraciones:","Daniel Blanco Pantoja"],
                ["Narración:","Constanza Ried Silva"],
                ["Arreglos musicales:","Jorge Mercado Pino"],
                ["Edición a cargo de:","Constanza Ried Silva<br>Verónica Vives Cofré<br>Fundación Entrelíneas"],
                ["Montaje y desarrollo web:","Agencia Match"],
                ["Créditos de sonidos:","Revise detalles <a href='#' target='_blank'>aquí</a>"] 
    ],
    ID:0, 
    imagenes:[
        "img/mi_calle/esc_0_fondo.jpg",
        "img/mi_calle/esc_3_fondo.jpg",
        "img/mi_calle/esc_4_fondo.jpg",
        "img/mi_calle/esc_5_fondo.jpg",
        "img/mi_calle/esc_7_fondo.jpg",
        "img/mi_calle/esc_8_fondo_dia.jpg",
        "img/mi_calle/esc_8_fondo_noche.jpg",
        "img/mi_calle/hormigas.png",
        "img/mi_calle/spriteA.png",
        "img/mi_calle/spriteB.png",
        "img/mi_calle/spriteC.png",
        "img/mi_calle/spriteD.png",
        "img/mi_calle/spriteE.png",
        "img/mi_calle/spriteF.png",
        "img/mi_calle/nubes-min.png",
        "img/mi_calle/brillo.png",
        "img/mi_calle/brillo_dimming.png",
    ], 
    fx_sonido:[
        {nombre:"tarareo_ciudad",url:"audio/mi_calle/fx/tarareo_ciudad3.mp3"},
        {nombre:"ciudad_loop",url:"audio/mi_calle/fx/ciudad_loop_paloma.mp3"},
        {nombre:"mujer_riego_mezcla",url:"audio/mi_calle/fx/mujer_riego_mezcla4.mp3"},
        {nombre:"mujer_desayuno_mezcla",url:"audio/mi_calle/fx/mujer_desayuno_mezcla.mp3"},
        {nombre:"hombre_lee_diario_mezcla",url:"audio/mi_calle/fx/hombre_lee_diario_mezcla2.mp3"},
        {nombre:"paloma",url:"audio/mi_calle/fx/paloma.mp3"},
        {nombre:"paloma2",url:"audio/mi_calle/fx/paloma2.mp3"},
        {nombre:"risa_frase_mezcla",url:"audio/mi_calle/fx/risa_frase_mezcla5.mp3"},
        {nombre:"campanilla",url:"audio/mi_calle/fx/campanilla.mp3"},
        {nombre:"escena02_mezcla",url:"audio/mi_calle/fx/escena02_mezcla2.mp3"},
        {nombre:"relojes_mezcla",url:"audio/mi_calle/fx/relojes_mezcla_corto.mp3"},
        {nombre:"pista_0",url:"audio/mi_calle/fx/pista_0.mp3"},
        {nombre:"pista_1",url:"audio/mi_calle/fx/pista_1.mp3"},
        {nombre:"pista_2",url:"audio/mi_calle/fx/pista_2.mp3"},
        {nombre:"pista_3",url:"audio/mi_calle/fx/pista_3.mp3"},
        {nombre:"pista_4",url:"audio/mi_calle/fx/pista_4.mp3"},
        {nombre:"bus_mezcla",url:"audio/mi_calle/fx/bus_mezcla3.mp3"},
        {nombre:"tarareo_elefante",url:"audio/mi_calle/fx/tarareo_elefante.mp3"},
        {nombre:"tarareo_cancion",url:"audio/mi_calle/fx/tarareo_cancion.mp3"},
        {nombre:"escena05_mezcla",url:"audio/mi_calle/fx/escena05_mezcla5.mp3"},
        {nombre:"inicio_escena_teatro",url:"audio/mi_calle/fx/inicio_escena_teatro.mp3"},
        {nombre:"gracias",url:"audio/mi_calle/fx/gracias.mp3"},
        {nombre:"aplausos_fin",url:"audio/mi_calle/fx/aplausos_fin.mp3"},
        {nombre:"pajaros",url:"audio/mi_calle/fx/pajaros.mp3"},
        {nombre:"silbido",url:"audio/mi_calle/fx/silbido.mp3"},
        {nombre:"elefante",url:"audio/mi_calle/fx/elefante.mp3"},
        {nombre:"musica_final",url:"audio/mi_calle/fx/musica_final_real.mp3"},
    ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/mi_calle/mini_0.jpg",
            audio:"audio/mi_calle/escena_01_new.mp3",
            parrafos:
            [
                {
                    texto: "En <i>Calle Los Olivos</i> la vida no se detiene.",
                    tiempo:[0,4.5,24.7] 
                },
                {
                    texto: "Lo sé porque desde mi edificio,<br>segunda ventana, 5º piso, la observo.",
                    tiempo:[5,12,1.5] 
                },
                {
                    texto: "Hay cosas que siguen un orden perfecto.",
                    tiempo:[12.5,16,1.7] 
                },
                {
                    texto: "En el edificio del frente: <br>La señora del 4º prepara el desayuno.",
                    tiempo:[16.5,22.5,1] 
                },
                {
                    texto: "El señor del 3º lee el diario.",
                    tiempo:[23,27,0.7] 
                },
                {
                    texto: "La chica del 5º riega las plantas de su balcón.",
                    tiempo:[27.5,33,1] 
                },
                
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/mi_calle/mini_1.jpg",
            audio:"audio/mi_calle/escena_02_new.mp3",
            parrafos:
            [
                {
                    texto: "En <i>Calle Los Olivos</i> hay cosas que siguen un orden perfecto.<br>Y cosas que suceden en desorden.",
                    tiempo:[0,9,2]
                },
                {
                    texto: "Afuera: El gato atigrado cruzó corriendo como una flecha.",
                    tiempo:[9.5,15.5,1]
                },
                {
                    texto: "El cartero, por mirarlo, pasó de largo, así que retrocedió, pero antes de hacerlo, miró al cielo.",
                    tiempo:[16,25,1]
                },
                
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/mi_calle/mini_2.jpg",
            audio:"audio/mi_calle/escena_03_new.mp3",
            parrafos:
            [
                {
                    texto: "En <i>Calle Los Olivos</i> la vida no se detiene.",
                    tiempo:[0,4.5,8.9] 
                },
                {
                    texto: "Me pregunto si habrá un director de orquesta escondido ahí, entre los árboles <br>(la calle es un pentagrama, y cada uno de nosotros, un músico que toca su instrumento).",
                    tiempo:[5,19,1.5] 
                },
                {
                    texto: "O tal vez hay un reloj invisible, guardado en el bolsillo del día,<br>que se encarga de decir: “Es la hora”.",
                    tiempo:[19.5,28.5,1.5] 
                },
                {
                    texto: "–¿Tienen bolsillos los días?<br>– Claro.",
                    tiempo:[29,32.5,1.5] 
                },
                {
                    texto: "–¿Y qué guardan ahí?<br>–Mañanas, mediodías, tardes.",
                    tiempo:[33,41,1.5] 
                },
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/mi_calle/mini_3.jpg",
            audio:"audio/mi_calle/escena_04_new2.mp3",
            parrafos:
            [
                {
                    texto: "Mi turno llega a las cuatro.<br>Me preparo desde las tres.",
                    tiempo:[0,5.5,2] 
                },
                {
                    texto: "<i>“Prepararse”</i> quiere decir <i>elegir con cuidado.</i>",
                    tiempo:[6,10,1.5] 
                },
                {
                    texto: "Los actores<br>(hoy: el oso y la muñeca)",
                    tiempo:[10.5,15.5,1] 
                },
                {
                    texto: "El vestuario<br>(sombrero para él, sombrilla para ella)",
                    tiempo:[16,21.5,1] 
                },
                {
                    texto: "Y la escenografía<br>(un macetero y una naranja).",
                    tiempo:[22,28.5,0.5] 
                },
                
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/mi_calle/mini_4.jpg",
            audio:"audio/mi_calle/escena_05_new.mp3",
            parrafos:
            [
                {
                    texto: "Mis vecinos del frente también se preparan:<br>La señora del 4º deja a un lado su tejido.",
                    tiempo:[0,10,2] 
                },
                {
                    texto: "El señor del 3º apaga la televisión.",
                    tiempo:[10.5,14.5,1] 
                },
                {
                    texto: "La chica del 5º deja en la mesita una taza que humea<br>(huele a la menta que sacó de su balcón).",
                    tiempo:[15,26.5,1.5]
                },                
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/mi_calle/mini_5.jpg",
            audio:"audio/mi_calle/escena_06_new2.mp3",
            parrafos:
            [
                {
                    texto: 'La obra de hoy se titula: <i>"DÍA DE CAMPO"</i>.',
                    tiempo:[0,4.5,2] 
                },
                {
                    texto: "Los actores aparecen en escena.",
                    tiempo:[5,8,1] 
                },
                {
                    texto: "– ¿Vamos a ver las flores?, pregunta la muñeca.<br>– Vamos, responde el oso.",
                    tiempo:[8.5,17,1.5]
                },
                {
                    texto: "Caminan.",
                    tiempo:[17.5,18.5,1] 
                },
                {
                    texto: "Los rayos de sol entibian la hierba<br>(y las alfombras).",
                    tiempo:[19,25,1] 
                },
                {
                    texto: "Escuchan.",
                    tiempo:[25,27,2] 
                },
                {
                    texto: "El canto de los insectos cubre la pradera<br>(y atraviesa las paredes).",
                    tiempo:[27.5,34.5,1.5] 
                },
                {
                    texto: "–Ha sido un paseo maravilloso, dice la muñeca.<br>–Un paseo estupendo, añade el oso.",
                    tiempo:[35,45.2,0.5] 
                },
            ]
        },
        {
            nombre:"Escena 7",
            miniatura:"img/mi_calle/mini_6.jpg",
            audio:"audio/mi_calle/escena_07_new.mp3",
            parrafos:
            [
                {
                    texto: "El público aplaude.",
                    tiempo:[0,2,12] 
                },
                {
                    texto: "Y en un idioma sin palabras –el mismo que yo uso– dicen que mañana, a la misma hora, estarán ahí.",
                    tiempo:[2.5,12.5,1] 
                },
                {
                    texto: "Cada uno vuelve a lo suyo:",
                    tiempo:[13,15,1.5] 
                },
                {
                    texto: "La señora del 4º hace una llamada telefónica.",
                    tiempo:[15.5,18.7,1] 
                },
                {
                    texto: "El señor del 3º sigue con la lectura de una novela.",
                    tiempo:[19.2,23.5,1] 
                },
                {
                    texto: "La chica del 5º se sienta frente al computador.",
                    tiempo:[24,28.6,1] 
                },
                
            ]
        },
        {
            nombre:"Escena 8",
            miniatura:"img/mi_calle/mini_7.jpg",
            audio:"audio/mi_calle/escena_08_new.mp3",
            parrafos:
            [
                {
                    texto: "Afuera: <br>El cartero entrega la última carta del día.",
                    tiempo:[0,6,9] 
                },
                {
                    texto: "Los pájaros cantan desde una rama de la morera.",
                    tiempo:[6.5,11,1] 
                },
                {
                    texto: "Y una nube, con forma de elefante, atraviesa el cielo.",
                    tiempo:[11.5,17.4,1] 
                },
                
            ]
        },
        {
            nombre:"Escena 9",
            miniatura:"img/mi_calle/mini_8.jpg",
            audio:"audio/mi_calle/escena_09_new.mp3",
            parrafos:
            [
                {
                    texto: "En voz baja, digo: “En <i>Calle Los Olivos</i> la vida no se detiene”.",
                    tiempo:[0,9.5,2] 
                },
                {
                    texto: "Me escucha el gato atigrado que a esta hora cruza de vuelta.",
                    tiempo:[10,15.5,1] 
                },
                {
                    texto: "Trae con él la primera estrella de la noche.",
                    tiempo:[16,20,1] 
                },
                {
                    texto: "Seguida por otra,",
                    tiempo:[20.5,22.5,1] 
                },
                {
                    texto: "otra",
                    tiempo:[23,24,0.5] 
                },
                {
                    texto: "y otra.",
                    tiempo:[24.5,30,0.5] 
                },
                
            ]
        },
        
    ]    
};

let ANIM = {
    main_tl:undefined,
    creapartes:() => {
        // PONER ACÁ LO QUE SE VAYA A CREAR "ON THE FLY"
        
        let cont = $('#escena_08 .estrellas');
        let arrEstrellas = Array(34).fill(34);
        let arrLetras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P'];
        cont.append(ANIM.creaEstrellas(arrEstrellas, arrLetras)); 
        
        let cont_mini = $('#escena_08 .mini_estrellas');
        let arrMiniEstrellas = Array(44).fill(44);
        let arrLetras2 = ['A','B','C','D','E'];
        cont_mini.append(ANIM.creaMiniEstrellas(arrMiniEstrellas, arrLetras2));
        
        cont_mini.find('.mini_estrella').each(function(i){
            ANIM.posScaleMiniEstrellas($(this));
        });
        
        /*IMPORTANTE NO TOCAR*/
        ANIM.sobreescribeAudioFX(); // <--- Soluciona una nueva feature que le agregué al audio PLAYER (Player.cambiaVolume)
        ANIM.sobreescribeCreditosFinal(); // <--- Soluciona una pifia que tenía el Player original (no detenía las interacciones al llegar al final del cuento)
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
    creaEstrellas:(arr1, arr2) => {
        let count = -1;
        
        let newArr = arr1.map((item, i) => {
            if(i % arr2.length == 0 ){
                count+=1;
            }
            let j = i-count*arr2.length;
            let letra = arr2[j];
////            <div class="spriteF estrella estrellaA estrella1"></div>
            return `<div class="spriteF estrella estrella${letra} estrella${(i+1)}"><div class="destello"></div></div>`;
        });
        return newArr.join("");
    },
    creaMiniEstrellas:(arr1, arr2) => {
        let count = -1;
        
        let newArr = arr1.map((item, i) => {
            if(i % arr2.length == 0 ){
                count+=1;
            }
            let j = i-count*arr2.length;
            let letra = arr2[j];
////            <div class="spriteF estrella estrellaA estrella1"></div>
            return `<div class="mini_estrella mini_estrella${letra} mini_estrella${(i+1)}"></div>`;
        });
        return newArr.join("");
    },
    posScaleMiniEstrellas:(div) =>{
        let top = `${Utils.randomInt(0,980)}px`;
        let left = `${Utils.randomInt(0,1100)}px`;
        div.css({'top':top, 'left':left});
        TweenMax.set(div,{scale:Utils.randomInt(40,100)/100});  
    },
    cambiaPosScaleMiniEstrellas:() => {
        if(!ANIM.anim_posMiniEstrellas){

            ANIM.anim_posMiniEstrellas = new TimelineMax({repeat:-1});
            
            let o = {val:0};
            
            ANIM.anim_posMiniEstrellas

            .addLabel('inicio')
            .to(o, 2,{val:100})
            .addCallback(function(){
                let i = Utils.randomInt(1,$('.mini_estrella').length+1);
              
                let div = $(`.mini_estrella${i}`);
                TweenMax.to(div,1,{alpha:0, onComplete:function(d){
                    ANIM.posScaleMiniEstrellas(d);
                    TweenMax.to(d,1,{alpha:1});
                }, onCompleteParams:[div]});
            })
            .addLabel('final')

                 ;
        }
        ANIM.anim_posMiniEstrellas.play(0);
    },
    pauseCambiaPosScaleMiniEstrellas:() => {
        try{
            ANIM.anim_posMiniEstrellas.pause();
        } catch(err){
            
        }
    },
    plazaHERO:(i) => {
        if(ANIM.oneTimeOnly){
            ANIM.oneTimeOnly = false;
            let arr = Array(5).fill(5);
            ANIM.arrPlazaHERO = arr.map((item, i) => {
                Player.playSoundFX(`pista_${i}`,true);
                Player.cambiaVolume(`pista_${i}`,0);
                return [`pista_${i}`, 0];
            });
            Player.cambiaVolume(`pista_${i}`,1);
            ANIM.arrPlazaHERO[parseInt(i)][1] = 1;
            ANIM.playPista(i);
        } else {
            let vol = ANIM.arrPlazaHERO[parseInt(i)][1] == 0 ? 1 : 0;
            ANIM.arrPlazaHERO[parseInt(i)][1] = vol;
            Player.cambiaVolume(`pista_${i}`,vol);
            vol === 1 ? ANIM.playPista(i) : ANIM.pausePista(i);
        }
        let activo = ANIM.arrPlazaHERO.some((item) => {
            return item[1] === 1;
        });
        
        if(activo){
             Player.cambiaVolume('ciudad_loop',0);
        } else {
             Player.cambiaVolume('ciudad_loop',0.5);
        }
    },
    playPista:(i) => {
        let tl = ANIM[`anim_interact_2_pista_${i}`];
        if(tl.currentLabel() === 'final'){
            tl.play(0);
        } else {
            tl.play();
        }
    },
    pausePista:(i) => {
        let tl = ANIM[`anim_interact_2_pista_${i}`];
        tl.pause();
    },
    animaGentes:() => {
        let arr = Array(9).fill(9);
        arr.map((item, i) => {
            ANIM.animaGente(i+1);
        });
    },
    animaGente:(cual = 1) => {
//        let tweensActives = TweenMax.getTweensOf(`#escena_04 .gente${cual}`);
        TweenMax.killTweensOf(`#escena_04 .gente${cual}`);
//        if(tweensActives.length === 0){
            let j = -1;
            let left = Utils.randomInt(0,1) == 0 ? 406 : 1900;
            let delay = Utils.randomInt(2000,20000)/1000
            TweenMax.set(`#escena_04 .gente${cual}`,{alpha:0});
            TweenMax.to(`#escena_04 .gente${cual}`,0.5,{alpha:1, delay:delay*0.5});
            TweenMax.to(`#escena_04 .gente${cual}`,
                    0.5,
                    {
                        alpha:0,
                        delay:delay,
                        onComplete:function(a){
                            ANIM.animaGente(a);
                        }, 
                        onCompleteParams:[cual]
                    });
//        }
    },
    playRelojesFin:() =>{
        if(!ANIM.anim_relojes){

            ANIM.anim_relojes = new TimelineMax({onComplete:function(){

                Player.activaBtnSiguiente();  
            }});
            
            let o = {val:0};
            
            ANIM.anim_relojes

            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('relojes_mezcla');
            })
            .addCallback(function(){
                ANIM.interactividad(2,undefined,'btn_pista_0');
            },'+=2.6')
            .addCallback(function(){
                ANIM.interactividad(2,undefined,'btn_pista_1');
            },'+=0.5')
            .addCallback(function(){
                ANIM.interactividad(2,undefined,'btn_pista_2');
            },'+=0.6')
            .addCallback(function(){
                ANIM.interactividad(2,undefined,'btn_pista_3');
            },'+=0.6')
            .addCallback(function(){
                ANIM.interactividad(2,undefined,'btn_pista_4');
            },'+=1.2')
            .to(o, 2,{val:100})
            .addCallback(function(){
                Player.playSoundFX('ciudad_loop',true);
                ANIM.fadeVolume('ciudad_loop',0,1,3);
            })
            .addLabel('final')

                 ;
        }
        ANIM.anim_relojes.play(0);
    },
    randomXposSpider:() => {
        let left = Utils.randomInt(420,640);
        $('#escena_03 .spider_complex').css({'left':left});
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
//         try{
//            ANIM.wait_sound.pause();
//        } catch(err){
//            
//        }
         ANIM.arrWaitSounds.map((item, i) => {
            item.pause();
        });
    },
    animaNubes:() => {
        let t1 = Utils.randomInt(350,400);
        let t2 = t1 - Utils.randomInt(70,90);
        let t3 = t2 - Utils.randomInt(75,95);
        let t4 = t3 - Utils.randomInt(80,100);
        
        
        if(!ANIM.anim_nube1){
            ANIM.anim_nube1 = new TimelineMax({repeat:-1});
            ANIM.anim_nube1
            .to('#escena_07 .nubes .nube1',t1,{backgroundPosition:'5206px 0px', ease:Power0.easeNone})
            ;
            let seek = t1/(Utils.randomInt(10,30)/10);
          
            ANIM.anim_nube1.seek(seek);
        }
        if(!ANIM.anim_nube2){
            ANIM.anim_nube2 = new TimelineMax({repeat:-1});
            ANIM.anim_nube2
            .to('#escena_07 .nubes .nube2',t2,{backgroundPosition:'5206px -853px', ease:Power0.easeNone})
            ;
            let seek = t2/(Utils.randomInt(30,60)/10);
           
            ANIM.anim_nube2.seek(seek);
        }
        if(!ANIM.anim_nube3){
            ANIM.anim_nube3 = new TimelineMax({repeat:-1});
            ANIM.anim_nube3
            .to('#escena_07 .nubes .nube3',t3,{backgroundPosition:'5206px -1162px', ease:Power0.easeNone})
            ;
            let seek = t3/(Utils.randomInt(60,80)/10);
          
            ANIM.anim_nube3.seek(seek);
        }
        if(!ANIM.anim_nube4){
            ANIM.anim_nube4 = new TimelineMax({repeat:-1});
            ANIM.anim_nube4
            .to('#escena_07 .nubes .nube4',t4,{backgroundPosition:'5206px -1800px', ease:Power0.easeNone})
            ;
            let seek = t4/(Utils.randomInt(10,90)/10);
            
            ANIM.anim_nube4.seek(seek);
        }
         
        ANIM.anim_nube1.timeScale(1).play();
        ANIM.anim_nube2.timeScale(1).play();
        ANIM.anim_nube3.timeScale(1).play();
        ANIM.anim_nube4.timeScale(1).play();
    },
    pauseNubes:() => {
        try{
            ANIM.anim_nube1.pause();
            ANIM.anim_nube2.pause();
            ANIM.anim_nube3.pause();
            ANIM.anim_nube4.pause();
        } catch(err){
            
        }
    },
   
    titilancia:(cual) => {
     let t = Utils.randomInt(1000,3000)/1000;
     let r = Utils.randomInt(0,60)-30;
     let s = Utils.randomInt(70,90)*0.01;
     let sA = Utils.randomInt(50,90)*0.01;
     let sB = Utils.randomInt(110,140)*0.01;
       if(!ANIM[`anim_estrella${cual}`]){
            ANIM[`anim_estrella${cual}`] = new TimelineMax({repeat:-1});
            ANIM[`anim_estrella${cual}`]
            .to(`#escena_08 .estrella${cual}`,t,{scale:s, repeat:3 ,yoyo:true})
            .fromTo(`#escena_08 .estrella${cual} .destello`,t,{scale:sA},{scale:sB, repeat:3 ,yoyo:true},`-=${t*3}`)
            ;
        }
        ANIM[`anim_estrella${cual}`].play();
    },
    pauseTitilancia:() => {
        $('#escena_08 .estrellas .estrella').each(function(i){
            if(ANIM[`anim_estrella${i+1}`]){
                ANIM[`anim_estrella${i+1}`].pause();
            }    
        });
    },
    activaTodasTitilancia:() => {
        $('#escena_08 .estrellas .estrella').each(function(i){
            ANIM.titilancia((`${i+1}`).toString());
        });
    },
    muestraBotonesEscena0:() => {
        $('#escena_00 .btn_interact').css({'display':'block'});
    },
    hideBotonesEscena0:() => {
        $('#escena_00 .btn_interact').css({'display':'none'});
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
        
        
        
//        ANIM.main_tl.addLabel('0_0_audio','escena_0+=0.01'); // <-- Agregar labels adicionales, tomando como referencia otra label y sumándole o restándole la cantidad de tiempo en que quiero que se active
//        ANIM.main_tl.addLabel('princesas_ventana','1_4+=0.3'); // <-- otro ejemplo de lo mismo
//        ANIM.main_tl.add( TweenMax.to('#escena_00', 20, {scale:2}),'escena_0+=13'); // <-- le pongo una animación al timeline con la misma técnica, es decir uso una label existente y le sumo o resto el tiempo en que quiero que se active a partir de ésta.

        
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
        
        ANIM.main_tl.addLabel('0_0_audio','escena_0+=0.01'); 
        ANIM.main_tl.addLabel('2_0_audio','escena_2+=0.01'); 
        ANIM.main_tl.addLabel('6_0_audio','escena_6+=0.01'); 
        ANIM.main_tl.addLabel('7_0_audio','escena_7+=0.01'); 
        ANIM.main_tl.addLabel('7_0_kill_audio','escena_7+=6.5'); 
        ANIM.main_tl.addLabel('8_titilancia','fin_escena_8-=4'); 
        ANIM.main_tl.addLabel('8_titilancia_minima','8_1+=0.5'); 
        ANIM.main_tl.addLabel('8_titilancia_minima2','8_2+=0.5'); 
        ANIM.main_tl.addLabel('8_titilancia_minima3','8_3+=0.5'); 
        ANIM.main_tl.addLabel('8_titilancia_minima4','8_4+=0.5'); 
        ANIM.main_tl.addLabel('8_titilancia_minima5','8_5+=0.5'); 
        
        let tl_ojo = new TimelineMax();
        
        tl_ojo
            .fromTo('#escena_00 .parpado',0.1,{alpha:0},{alpha:1})
            .to('#escena_00 .parpado',0.1,{alpha:0},'+=0.1')
            .to('#escena_00 .parpado',0.1,{alpha:1},'+=3')
            .to('#escena_00 .parpado',0.1,{alpha:0},'+=0.1')
            .to('#escena_00 .parpado',0.1,{alpha:1},'+=0.1')
            .to('#escena_00 .parpado',0.1,{alpha:0},'+=0.1')
            .to('#escena_00 .parpado',0.1,{alpha:1},'+=0.1')
            .to('#escena_00 .parpado',0.1,{alpha:0},'+=0.1')
            .to('#escena_00 .parpado',0.1,{alpha:1},'+=5')
            .to('#escena_00 .parpado',0.1,{alpha:0},'+=0.1')
            .to('#escena_00 .parpado',0.1,{alpha:1},'+=7')
            .to('#escena_00 .parpado',0.1,{alpha:0},'+=0.1')
            .to('#escena_00 .parpado',0.1,{alpha:1},'+=0.1')
            .to('#escena_00 .parpado',0.1,{alpha:0},'+=0.1')
        
        ANIM.main_tl.add( tl_ojo,'escena_0+=5'); 
        
        ANIM.main_tl.add( TweenMax.fromTo('#escena_04',10.4,{scale:1.7},{scale:1, transformOrigin:'1730px 800px'}),'4_2-=0.1'); 
        ANIM.main_tl.add( TweenMax.fromTo('#escena_06 .fondo',34,{alpha:0.3},{alpha:0.6, ease: Power2.easeIn}),'6_0-=0.1'); 
        ANIM.main_tl.add( TweenMax.fromTo('#escena_07 .nubes .nube1',26,{alpha:0.3},{alpha:0.7, ease: Power2.easeIn}),'escena_7+=1'); 
        ANIM.main_tl.add( TweenMax.fromTo('#escena_07 .nubes .nube2',26,{alpha:0.3},{alpha:0.7, ease: Power2.easeIn}),'escena_7+=1'); 
        ANIM.main_tl.add( TweenMax.fromTo('#escena_07 .nubes .nube3',26,{alpha:0.3},{alpha:0.7, ease: Power2.easeIn}),'escena_7+=1'); 
        ANIM.main_tl.add( TweenMax.fromTo('#escena_07 .nubes .nube4',26,{alpha:0.3},{alpha:0.7, ease: Power2.easeIn}),'escena_7+=1'); 
        ANIM.main_tl.add( TweenMax.fromTo('#escena_08',13.5,{scale:2},{scale:1, transformOrigin:'1920px 40px', ease: Power1.easeInOut}),'8_2-=1.5'); 
        ANIM.main_tl.add( TweenMax.to('#escena_08 .ojos_dia',0.1,{alpha:1}),'8_2+=0.2'); 
        ANIM.main_tl.add( TweenMax.to('#escena_08 .ojos_dia',0.1,{alpha:0}),'8_2+=0.4'); 
        ANIM.main_tl.add( TweenMax.to('#escena_08 .ojos_dia',0.1,{alpha:1}),'8_2+=0.6'); 
//        ANIM.main_tl.add( TweenMax.to('#escena_08 .ojos_dia',0.1,{alpha:0}),'8_2+=0.8'); 
        ANIM.main_tl.add( TweenMax.fromTo('#escena_08 .fondo.noche',8,{alpha:0},{alpha:1}),'8_2+=1.5'); 
        ANIM.main_tl.add( TweenMax.to('#escena_08 .ojos_dia',8,{alpha:0}),'8_2+=1.5'); 
//        ANIM.main_tl.add( TweenMax.to('#escena_08 .boca_dia',8,{alpha:0}),'8_2+=1.5'); 
        ANIM.main_tl.add( TweenMax.fromTo('#escena_08 .ojos_noche',8,{alpha:0},{alpha:1, ease:Power1.easeOut}),'8_2+=1.5'); 
//        ANIM.main_tl.add( TweenMax.fromTo('#escena_08 .boca_noche',8,{alpha:0},{alpha:1, ease:Power1.easeOut}),'8_2+=1.5'); 
        ANIM.main_tl.add( TweenMax.fromTo('#escena_08 .estrella20',3,{alpha:0},{alpha:1},0.8),'fin_escena_8-=7'); 
        ANIM.main_tl.add( TweenMax.staggerFromTo(['#escena_08 .estrella2','#escena_08 .estrella22'],2,{alpha:0},{alpha:1},1),'fin_escena_8-=5');
        ANIM.main_tl.add( TweenMax.to('#escena_08 .ojos_noche',0.1,{alpha:0}),'fin_escena_8-=0.6'); 
        ANIM.main_tl.add( TweenMax.to('#escena_08 .ojos_noche',0.1,{alpha:1}),'fin_escena_8-=0.4'); 
        
        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_00');
        },"escena_0");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('tarareo_ciudad');
        },"0_0_audio");
        
        ANIM.main_tl.addCallback(function(){
            Player.activaBtnSiguiente();
            ANIM.main_tl.pause();
            ANIM.interactividad(0, ANIM.muestraBotonesEscena0, 'btn_3');
            ANIM.interactividad(0, ANIM.muestraBotonesEscena0, 'btn_4');
            ANIM.interactividad(0, ANIM.muestraBotonesEscena0, 'btn_5');
            ANIM.interactividad(0, ANIM.muestraBotonesEscena0, 'btn_nena');
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('ciudad_loop',true);
            ANIM.fadeVolume('ciudad_loop',0,1,2);
        },"fin_escena_0");
        
       
        /*LLAMADAS Y FUNCIONES ESCENA 1*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_01');
            Player.playSoundFX('campanilla');
        },"escena_1");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            ANIM.interactividad(1);
//            ANIM.interactividad(1,undefined,'secundario');
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            ANIM.displayInteract('#escena_01');
            Player.playSoundFX('ciudad_loop',true);
            ANIM.fadeVolume('ciudad_loop',0,1,2);
        },"fin_escena_1");
         
        
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_02');
        },"escena_2");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('relojes_mezcla');
        },"2_0_audio");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.playRelojesFin();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_2");
        
       
         /*LLAMADAS Y FUNCIONES ESCENA 3*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_03');
        },"escena_3");
      
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(3);
//            ANIM.interactividad(3,undefined,'btn_balcon');
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('ciudad_loop',true);
            ANIM.fadeVolume('ciudad_loop',0,1,2);
            ANIM.waitForSound('tarareo_elefante', 4,14,3);
            ANIM.waitForSound('paloma', 2,2,15,35);
        },"fin_escena_3");
        
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 4*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_04');
            ANIM.animaGentes();
        },"escena_4");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
//            ANIM.interactividad(4);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            ANIM.animaGentes();
            Player.playSoundFX('ciudad_loop',true);
            ANIM.fadeVolume('ciudad_loop',0,1,2);
            ANIM.waitForSound('paloma2', 2,2,150,13);
            //cual, waitFor=4, cuantoDura=14, cuantasVeces = 1, cuantoDejoAlFinal = 0
            ANIM.waitForSound('tarareo_cancion',1,15,0,4, 0.7, true, 12);
        },"fin_escena_4");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 5*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_05');
        },"escena_5");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(5);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_5");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 6*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_06');
        },"escena_6");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('inicio_escena_teatro');
        },"6_0_audio");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(6);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('ciudad_loop',true);
            ANIM.fadeVolume('ciudad_loop',0,1,2);
        },"fin_escena_6");
        
        /*LLAMADAS Y FUNCIONES ESCENA 7*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_07');
            ANIM.animaNubes();
        },"escena_7");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('ciudad_loop');
            Player.playSoundFX('pajaros');
            Player.playSoundFX('tarareo_elefante');
        },"7_0_audio");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.fadeVolume('ciudad_loop', 1,0,2);
            ANIM.fadeVolume('pajaros', 1,0,2);
            ANIM.fadeVolume('tarareo_elefante', 1,0,1);
        },"7_0_kill_audio");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(7);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            ANIM.animaNubes();
            Player.playSoundFX('ciudad_loop',true);
            Player.playSoundFX('pajaros',true);
            ANIM.fadeVolume('ciudad_loop',0,1,2);
        },"fin_escena_7");
        
        /*LLAMADAS Y FUNCIONES ESCENA 8*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_08');
        },"escena_8");
        
        ANIM.main_tl.addCallback(function(){
//            ANIM.titilancia('19');
            ANIM.titilancia('2');
            ANIM.titilancia('20');
            ANIM.titilancia('22');
            Player.resetSubtitulos();
            Player.playSoundFX('ciudad_loop',true);
            ANIM.fadeVolume('ciudad_loop',0,1,2);
        },"8_titilancia");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.cambiaPosScaleMiniEstrellas();
        },"8_titilancia_minima");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.cambiaPosScaleMiniEstrellas();
        },"8_titilancia_minima2");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.cambiaPosScaleMiniEstrellas();
        },"8_titilancia_minima3");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.cambiaPosScaleMiniEstrellas();
        },"8_titilancia_minima4");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.cambiaPosScaleMiniEstrellas();
        },"8_titilancia_minima5");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(8);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            ANIM.cambiaPosScaleMiniEstrellas();
        },"fin_escena_8");
        
       
        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
    },
    creaAnimInteractividad:() => {
        
        // vecino 3 piso
        ANIM.anim_interact_0_3 = new TimelineMax();
        ANIM.anim_interact_0_3
         
            .addLabel('inicio')
            .to('#escena_00',2,{scale:2, transformOrigin:'750px 1080px'})
            .addCallback(function(){
                Player.playSoundFX('hombre_lee_diario_mezcla');
                ANIM.fadeVolume('ciudad_loop',1,0.1,2);
            },'-=1')
            .to('#escena_00',2,{scale:1, transformOrigin:'750px 1080px'} ,'+=6')
            .addCallback(function(){
                ANIM.fadeVolume('ciudad_loop',0.1,1,2);
            },'-=1')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_0_3.pause();
        
        // vecina 4 piso
        ANIM.anim_interact_0_4 = new TimelineMax();
        ANIM.anim_interact_0_4
         
            .addLabel('inicio')
            .to('#escena_00',2,{scale:2, transformOrigin:'750px 480px'})
            .addCallback(function(){
                Player.playSoundFX('mujer_desayuno_mezcla');
                ANIM.fadeVolume('ciudad_loop',1,0.1,2);
            },'-=1')
            .addCallback(function(){
                let boolean = Utils.randomInt(0,1);
                if(boolean === 1){
                    Player.playSoundFX('paloma');
                } else {
                    Player.playSoundFX('paloma2');
                }
            },'+=3')
            .to('#escena_00 .paloma .paloma1',0.1,{alpha:0},'+=0.4')
            .to('#escena_00 .paloma .paloma2',0.1,{alpha:1},'-=0.1')
            .to('#escena_00 .paloma .paloma2',0.1,{alpha:0},'+=0.4')
            .to('#escena_00 .paloma .paloma3',0.1,{alpha:1},'-=0.1')
            .to('#escena_00 .paloma .paloma3',0.1,{alpha:0},'+=0.8')
            .to('#escena_00 .paloma .paloma2',0.1,{alpha:1},'-=0.1')
            .to('#escena_00 .paloma .paloma2',0.1,{alpha:0},'+=0.2')
            .to('#escena_00 .paloma .paloma1',0.1,{alpha:1},'-=0.1')
            .to('#escena_00',2,{scale:1, transformOrigin:'750px 480px'} ,'+=6.6')
            .addCallback(function(){
                ANIM.fadeVolume('ciudad_loop',0.1,1,2);
            })
            .addLabel('final')
            
             ;
        ANIM.anim_interact_0_4.pause();
       
        
        // vecina 5 piso
        ANIM.anim_interact_0_5 = new TimelineMax();
        ANIM.anim_interact_0_5
         
            .addLabel('inicio')
            .addCallback(function(){
                 Player.playSoundFX('mujer_riego_mezcla');
                 ANIM.fadeVolume('ciudad_loop',1,0.1,2);
            })
            .to('#escena_00',2,{scale:2, transformOrigin:'750px 0px'})
            .addCallback(function(){
                 ANIM.fadeVolume('mujer_riego_mezcla',1,0,3);
                 ANIM.fadeVolume('ciudad_loop',0.1,1,3);
            },'+=14.5')
            .to('#escena_00',5,{scale:1, transformOrigin:'750px 0px'})
            
            .addLabel('final')
            
             ;
        ANIM.anim_interact_0_5.pause();
        
        // niña canta y parpadea
        ANIM.anim_interact_0_nena = new TimelineMax();
        ANIM.anim_interact_0_nena
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('risa_frase_mezcla');
                ANIM.fadeVolume('ciudad_loop',1,0.7,1);
            })
            .to('#escena_00 .parpado',0.1,{alpha:1},'+=3')
            .to('#escena_00 .parpado',0.1,{alpha:0},'+=0.1')
            .to('#escena_00 .parpado',0.1,{alpha:1},'+=0.1')
            .to('#escena_00 .parpado',0.1,{alpha:0},'+=0.1')
            .to('#escena_00 .parpado',0.1,{alpha:1},'+=1.8')
            .to('#escena_00 .parpado',0.1,{alpha:0},'+=0.1')
            .addCallback(function(){
                ANIM.fadeVolume('ciudad_loop',0.7,1,2);
            })
            
            .addLabel('final')
            
             ;
        ANIM.anim_interact_0_nena.pause();
       
        // cartero
        ANIM.anim_interact_1 = new TimelineMax();
        ANIM.anim_interact_1
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('escena02_mezcla');
                ANIM.fadeVolume('escena02_mezcla',0,1,2);
                ANIM.fadeVolume('ciudad_loop',1,0,2);
            })
            .to('#escena_01 .ciclista',8,{x:600,y:340, ease:Back.easeOut.config(2)},'+=1')
            .to('#escena_01 .gato1',0.5,{x:0,y:0},'-=4')
            .to('#escena_01 .gato1',0.1,{alpha:0},'-=3.5')
            .to('#escena_01 .gato2',0.1,{alpha:1},'-=3.5')
            .to('#escena_01 .ciclista .cabeza1',0.1,{alpha:0},'-=3.5')
            .to('#escena_01 .ciclista .cabeza2',0.1,{alpha:1},'-=3.5')
            .to('#escena_01 .gato2',0.5,{rotation:0, x:0,y:0, transformOrigin:'1200px 900px'},'-=3.5')
            .addCallback(function(){
                ANIM.fadeVolume('ciudad_loop',0,1,1);
            })
            .addLabel('final')
            ;
        ANIM.anim_interact_1.pause();
        
        // PISTAS
        ANIM.anim_interact_2_pista_0 = new TimelineMax({repeat:-1});
        ANIM.anim_interact_2_pista_0
            .addLabel('inicio')
            .to('#escena_02 .pista0',12,{backgroundPosition:'0px 2160px', ease:Power0.easeNone})
            .addLabel('final')
            ;
        ANIM.anim_interact_2_pista_0.pause();
        
        ANIM.anim_interact_2_pista_1 = new TimelineMax({repeat:-1});
        ANIM.anim_interact_2_pista_1
            .addLabel('inicio')
            .to('#escena_02 .pista1',12,{backgroundPosition:'-289px -2160px', ease:Power0.easeNone})
            .addLabel('final')
            ;
        ANIM.anim_interact_2_pista_1.pause();
       
        
        ANIM.anim_interact_2_pista_2 = new TimelineMax({repeat:-1});
        ANIM.anim_interact_2_pista_2
            .addLabel('inicio')
            .to('#escena_02 .pista2',12,{backgroundPosition:'-578px 2160px', ease:Power0.easeNone})
            .addLabel('final')
            ;
        ANIM.anim_interact_2_pista_2.pause();
       
        
        ANIM.anim_interact_2_pista_3 = new TimelineMax({repeat:-1});
        ANIM.anim_interact_2_pista_3
            .addLabel('inicio')
            .to('#escena_02 .pista3',12,{backgroundPosition:'-878px -2160px', ease:Power0.easeNone})
            .addLabel('final')
            ;
        ANIM.anim_interact_2_pista_3.pause();
       
        
        ANIM.anim_interact_2_pista_4 = new TimelineMax({repeat:-1});
        ANIM.anim_interact_2_pista_4
            .addLabel('inicio')
            .to('#escena_02 .pista4',12,{backgroundPosition:'-1172px 2160px', ease:Power0.easeNone})
            .addLabel('final')
            ;
        ANIM.anim_interact_2_pista_4.pause();
        
        // bus
        ANIM.anim_interact_3_bus = new TimelineMax();
        ANIM.anim_interact_3_bus
            .addLabel('inicio')
             .addCallback(function(){
                Player.playSoundFX('bus_mezcla');
            })
            .to('#escena_03 .bus',4.8,{x:0,y:0},'+=4')
            .to('#escena_03 .hombre',2,{x:0,y:0},'+=1')
            .to('#escena_03 .bus',0.2,{y:2, repeat:17},'-=3')
            .to('#escena_03 .bus',0.2,{y:1, repeat:15},'-=3')
            .addLabel('final')
            ;
        ANIM.anim_interact_3_bus.pause();
        
//        // araña
//        ANIM.anim_interact_3_spider = new TimelineMax();
//        ANIM.anim_interact_3_spider
//            .addLabel('inicio')
//            .addCallback(function(){
//                ANIM.randomXposSpider();
//            })
//            .to('#escena_03 .spider_complex',3,{y:-30, ease:Back.easeOut.config(1.7)})
//            .to('#escena_03 .spider_complex',2,{y:-50, ease:Back.easeOut.config(1.7)})
//            .to('#escena_03 .spider_complex',7,{y:-380, ease:Back.easeOut.config(1.7)})
//            .addLabel('final')
//            ;
//        ANIM.anim_interact_3_spider.pause();
        
        
       // estrellas
        ANIM.anim_interact_5 = new TimelineMax();
        ANIM.anim_interact_5
            .addLabel('inicio')
             .addCallback(function(){
                Player.playSoundFX('escena05_mezcla');
            })
            .to('#escena_05 .estrella1',1,{alpha:1})
            .to('#escena_05 .estrella2',1,{alpha:1},'-=1')
            .to('#escena_05 .estrella1',20,{rotation:720, ease:Power0.easeNone},'-=1')
            .to('#escena_05 .estrella2',20,{rotation:-180, ease:Power0.easeNone},'-=20')
            .to('#escena_05 .paloma .paloma1',0.1,{alpha:0},'-=5')
            .to('#escena_05 .paloma .paloma2',0.1,{alpha:1},'-=5')
            .to('#escena_05 .paloma .paloma2',0.1,{alpha:0},'-=3.4')
            .to('#escena_05 .paloma .paloma3',0.1,{alpha:1},'-=3.4')
            .to('#escena_05 .estrella1',1,{alpha:0},'-=1')
            .to('#escena_05 .estrella2',1,{alpha:0},'-=1')
            .addLabel('final')
            ;
        ANIM.anim_interact_5.pause();
        
       // TEATRO
        ANIM.anim_interact_6_teatro = new TimelineMax();
        ANIM.anim_interact_6_teatro
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('aplausos_fin');
                ANIM.fadeVolume('ciudad_loop',1,0.1,2);
            })
            .to('#escena_06 .oso .cabeza',0.3,{rotation:3, transformOrigin:'160px 200px'},'+=1')
            .to('#escena_06 .oso .cabeza',0.3,{rotation:-8, transformOrigin:'160px 200px'})
            .to('#escena_06 .oso .cabeza',0.3,{rotation:3, transformOrigin:'160px 200px'})
            .to('#escena_06 .oso .cabeza',0.3,{rotation:-8, transformOrigin:'160px 200px'})
            .to('#escena_06 .oso .cabeza',0.3,{rotation:0, transformOrigin:'160px 200px'})
            .addCallback(function(){
                Player.playSoundFX('gracias');
            },'-=0.9')
            .to('#escena_06 .doll .brazo',1,{rotation:90, transformOrigin:'45px 8px'},'-=0.9')
            .to('#escena_06 .doll .brazo',1,{rotation:0, transformOrigin:'45px 8px'})
            .to('#escena_06 .doll',1,{rotation:0, transformOrigin:'80px 155px'})
            .to('#escena_06 .oso',1,{rotation:0, transformOrigin:'240px 300px'},'-=0.5')
            .to('#escena_06 .luz',0.5,{alpha:0.6})
            .to('#escena_06 .luz',0.1,{alpha:0.2})
            .to('#escena_06 .butaca',0.3,{alpha:1})
            .to('#escena_06 .luz',0.3,{alpha:1},'-=0.3')
            .to('#escena_06 .fondo',0.3,{alpha:1},'-=0.3')
            .to('#escena_06 .hombre',0.3,{alpha:1},'-=0.3')
            .to('#escena_06 .rubia',0.3,{alpha:1},'-=0.3')
            .to('#escena_06 .lady',0.3,{alpha:1},'-=0.3')
            .to('#escena_06 .rubia',1,{x:0, y:0},'-=0.3')
            .to('#escena_06 .rubia',0.3,{x:-5,y:2, repeat:15, yoyo:true})
            .to('#escena_06 .hombre',0.25,{x:5,y:2, rotation:1, repeat:21, yoyo:true, transformOrigin:'70px 650px'},'-=5.5')
            .to('#escena_06 .lady',0.2,{x:-1,y:1, repeat:27, yoyo:true},'-=5.4')
            .addCallback(function(){
                ANIM.fadeVolume('ciudad_loop',0.1,1,2);
            })
            .addLabel('final')
            ;
        ANIM.anim_interact_6_teatro.pause();
        
       // NUBES
        ANIM.anim_interact_7_nubes = new TimelineMax();
        ANIM.anim_interact_7_nubes
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('campanilla');
                Player.playSoundFX('silbido');
                ANIM.fadeVolume('pajaros',1,0.1,3);
                ANIM.fadeVolume('ciudad_loop',1,0.1,3);
                TweenMax.to(ANIM.anim_nube1,5,{timeScale:12});
                TweenMax.to(ANIM.anim_nube2,5,{timeScale:12});
                TweenMax.to(ANIM.anim_nube3,5,{timeScale:12});
                TweenMax.to(ANIM.anim_nube4,5,{timeScale:12});
            })
            .to('#escena_07 .cartero',3,{x:0,y:0})
            .to('#escena_07 .cartero .ojos',0.1,{alpha:0},'-=2')
            .to('#escena_07 .cartero .ojos',0.1,{alpha:1},'-=1.8')
            .to('#escena_07 .cartero .ojos',0.1,{alpha:0},'-=1')
            .to('#escena_07 .cartero .ojos',0.1,{alpha:1},'-=0.8')
            .to('#escena_07 .cartero .ojos',0.1,{alpha:0},'-=0.6')
            .to('#escena_07 .cartero .ojos',0.1,{alpha:1},'-=0.4')
//            .addCallback(function(){
//                Player.playSoundFX('tarareo_elefante');
//            })
            .addCallback(function(){
                Player.playSoundFX('elefante');
                Player.cambiaVolume('elefante',0.15);
            },'+=2')
            .to('#escena_07 .cartero .ojos',0.1,{alpha:0})
            .to('#escena_07 .cartero .ojos',0.1,{alpha:1},'+=0.2')
            .to('#escena_07 .cartero .ojos',0.1,{alpha:0},'+=0.4')
            .to('#escena_07 .cartero .ojos',0.1,{alpha:1},'+=0.6')
            .addCallback(function(){
                TweenMax.to(ANIM.anim_nube1,5,{timeScale:0});
                TweenMax.to(ANIM.anim_nube2,5,{timeScale:0});
                TweenMax.to(ANIM.anim_nube3,5,{timeScale:0});
                TweenMax.to(ANIM.anim_nube4,5,{timeScale:0});    
            },'+=2')
            .to('#escena_07 .nubes .nube_elefante',5,{x:0,y:0})
            .to('#escena_07 .cartero .ojos',0.1,{alpha:0},'-=1')
            .to('#escena_07 .cartero .ojos',0.1,{alpha:1},'-=0.8')
            .to('#escena_07 .cartero .ojos',0.1,{alpha:0},'-=0.6')
            .to('#escena_07 .cartero .ojos',0.1,{alpha:1},'-=0.4')
            .addCallback(function(){
                ANIM.fadeVolume('pajaros',0.1,1,3);
                ANIM.fadeVolume('ciudad_loop',0.1,1,3);
            })
            .addLabel('final')
            ;
        ANIM.anim_interact_7_nubes.pause(); 
        
       // GATO FINAL
        ANIM.anim_interact_8_gato = new TimelineMax();
        ANIM.anim_interact_8_gato
            .addLabel('inicio')
            .to('#escena_08 .ojos_dia',0.1,{alpha:0})
            .addCallback(function(){
                ANIM.fadeVolume('ciudad_loop',1,0.4,3);
                Player.playSoundFX('tarareo_cancion');
                ANIM.fadeVolume('tarareo_cancion',0,1,1);
                ANIM.activaTodasTitilancia();
            })
            .to('#escena_08 .gato .gato_1',1,{x:0,y:0},'+=4')
            .to('#escena_08 .gato .gato_1',3,{x:-20,y:-10})
            .to('#escena_08 .gato .gato_1',0.5,{alpha:0},'-=0.5')
            .to('#escena_08 .gato .gato_2',1,{alpha:1,x:0,y:0})
            .to('#escena_08 .gato .gato_2',3,{x:-20})
            .to('#escena_08 .gato .gato_2',0.5,{alpha:0},'-=0.5')
            .to('#escena_08 .gato .gato_3',1,{alpha:1,x:0,y:0})
            .staggerTo('#escena_08 .estrella',1,{alpha:1},0.3,'-=10')
            .to('#escena_08 .ojos_noche',0.1,{alpha:1})
            .to('#escena_08 .ojos_noche',0.1,{alpha:0})
            .to('#escena_08 .ojos_noche',0.1,{alpha:1})
            .to('#escena_08 .boca_noche',0.1,{alpha:1})
            .to('#escena_08 .boca_noche',0.1,{alpha:0},'+=1')
            .addCallback(function(){
//                ANIM.fadeVolume('ciudad_loop',1,0,3);
                Player.playSoundFX('musica_final',true);
                ANIM.fadeVolume('musica_final',0,1,3);
            },'-=3')
            .addLabel('final')
            ;
        ANIM.anim_interact_8_gato.pause();
       
        
        ANIM.arr_interacts = [
            ANIM.anim_interact_0_3,
            ANIM.anim_interact_0_4,
            ANIM.anim_interact_0_5,
            ANIM.anim_interact_0_nena,
            ANIM.anim_interact_1,
            ANIM.anim_interact_2_pista_0,
            ANIM.anim_interact_2_pista_1,
            ANIM.anim_interact_2_pista_2,
            ANIM.anim_interact_2_pista_3,
            ANIM.anim_interact_2_pista_4,
            ANIM.anim_interact_3_bus,
//            ANIM.anim_interact_3_spider,
            ANIM.anim_interact_5,
            ANIM.anim_interact_6_teatro,
            ANIM.anim_interact_7_nubes,
            ANIM.anim_interact_8_gato,
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
        
//        TweenMax.killTweensOf("#escena_00 .drag_tolltip");
        TweenMax.set('#escena_00',{scale:1});
        TweenMax.set('#escena_00 .parpado',{scale:0.5, alpha:0});
        TweenMax.set('#escena_00 .paloma',{scale:0.5});
        TweenMax.set('#escena_00 .paloma .paloma1',{alpha:1});
        TweenMax.set('#escena_00 .paloma .paloma2',{alpha:0});
        TweenMax.set('#escena_00 .paloma .paloma3',{alpha:0});
        
        TweenMax.set('#escena_01 .ciclista',{x:0,y:0});
        TweenMax.set('#escena_01 .gato1',{x:100,y:600});
        TweenMax.set('#escena_01 .gato2',{alpha:0, rotation:25, x:100,y:100, transformOrigin:'1200px 900px'});
        TweenMax.set('#escena_01 .cabeza1',{alpha:1});
        TweenMax.set('#escena_01 .cabeza2',{alpha:0});
        
        ANIM.oneTimeOnly = true;
        ANIM.anim_interact_2_pista_0.seek(0);
        ANIM.anim_interact_2_pista_1.seek(0);
        ANIM.anim_interact_2_pista_2.seek(0);
        ANIM.anim_interact_2_pista_3.seek(0);
        ANIM.anim_interact_2_pista_4.seek(0);
        
        TweenMax.set('#escena_03 .bus',{x:370,y:-150});
        TweenMax.set('#escena_03 .hombre',{x:-300,y:230});
        TweenMax.set('#escena_03 .spider_complex',{y:-380});
        
        TweenMax.set('#escena_04 .gente',{scale:0.5, transformOrigin:'top left'});
        TweenMax.set('#escena_04',{transformOrigin:'1730px 800px'});
        TweenMax.killTweensOf("#escena_04 .gente");
        TweenMax.set('#escena_04 .gente',{alpha:0});
        
        
        TweenMax.set('#escena_05 .estrella1',{alpha:0, rotation:0});
        TweenMax.set('#escena_05 .estrella2',{alpha:0, rotation:0});
//        TweenMax.set('#escena_05 .paloma',{scale:1.4});
        TweenMax.set('#escena_05 .paloma .paloma1',{alpha:1});
        TweenMax.set('#escena_05 .paloma .paloma2',{alpha:0});
        TweenMax.set('#escena_05 .paloma .paloma3',{alpha:0});
        
        
        TweenMax.set('#escena_06 .oso',{rotation:27, transformOrigin:'240px 300px'});
        TweenMax.set('#escena_06 .oso .cabeza',{rotation:0, transformOrigin:'160px 200px'});
        TweenMax.set('#escena_06 .doll',{rotation:20, transformOrigin:'80px 155px'});
        TweenMax.set('#escena_06 .luz',{alpha:0});
        TweenMax.set('#escena_06 .hombre',{alpha:0,x:0,y:0, rotation:0, transformOrigin:'70px 650px'});
        TweenMax.set('#escena_06 .rubia',{alpha:0,x:-130,y:60, rotation:0});
        TweenMax.set('#escena_06 .lady',{alpha:0,x:0,y:0, rotation:0});
        TweenMax.set('#escena_06 .butaca',{alpha:0});
        
        
        TweenMax.set('#escena_07 .cartero',{x:600,y:420});
        TweenMax.set('#escena_07 .cartero .ojos',{alpha:1});
        TweenMax.set('#escena_07 .nube_elefante',{x:-1504});
        
        TweenMax.set('#escena_08 ._50_percent',{scale:0.5});
        TweenMax.set('#escena_08',{transformOrigin:'1920px 40px'});
        TweenMax.set('#escena_08 .ojos_dia',{alpha:0});
        TweenMax.set('#escena_08 .boca_dia',{alpha:0});
        TweenMax.set('#escena_08 .boca_noche',{alpha:0});
//        TweenMax.set('#escena_08 .ojos_noche',{alpha:0});
//        TweenMax.set('#escena_08 .fondo.noche',{alpha:0});
//        TweenMax.set('#escena_08 .gato',{x:1900,y:500});
        TweenMax.set('#escena_08 .gato .gato_1',{rotation:12, x:500,y:250});
        TweenMax.set('#escena_08 .gato .gato_2',{alpha:0,x:20});
        TweenMax.set('#escena_08 .gato .gato_3',{alpha:0,x:50,y:-100});
        TweenMax.set('#escena_08 .estrellas .estrella1',{alpha:0});
//        TweenMax.set('#escena_08 .estrellas .estrella2',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella3',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella4',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella5',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella6',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella7',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella8',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella9',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella10',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella11',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella12',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella13',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella14',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella15',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella16',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella17',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella18',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella19',{alpha:0});
//        TweenMax.set('#escena_08 .estrellas .estrella20',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella21',{alpha:0});
//        TweenMax.set('#escena_08 .estrellas .estrella22',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella23',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella24',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella25',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella26',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella27',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella28',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella29',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella30',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella31',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella32',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella33',{alpha:0});
        TweenMax.set('#escena_08 .estrellas .estrella34',{alpha:0});
        
        ANIM.pauseCambiaPosScaleMiniEstrellas();
        $('.mini_estrella').each(function(i){
            TweenMax.set($(this),{alpha:0});
        });
        
        ANIM.pauseNubes();
        ANIM.pauseWaitSound();
        
        
    },
    displayInteract:(cualEscena) => {
        $(cualEscena+' .interact').css({'display':'block'});
    },
    interactividad:(nEscena, callback = undefined, btn_especifico = "primario") => {
        let i_st = nEscena > 9 ? (nEscena) : `0${(nEscena)}`;
        
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
                 if(btn.hasClass('btn_3')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.hideBotonesEscena0();
                        ANIM.anim_interact_0_3.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_3.play(0);
                    });
                 }
                 if(btn.hasClass('btn_4')){
                    btn.click(function(){
                        ANIM.hideBotonesEscena0();
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_4.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_4.play(0);
                    });
                 }
                 if(btn.hasClass('btn_5')){
                    btn.click(function(){
                        ANIM.hideBotonesEscena0();
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_5.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_5.play(0);
                    });
                 }
                 if(btn.hasClass('btn_nena')){
                    btn.click(function(){
                        ANIM.hideBotonesEscena0();
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_nena.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_nena.play(0);
                    });
                 }
                break;
             case 1:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_1.play(0);
                    });
                 }
                break;
            case 2:
                btn.off('click').click(function(){
                    ANIM.plazaHERO(btn.attr('data-pista')); //<-- guitar HERO
                });
                 break;
             case 3:
                 if(btn.hasClass('primario')){
                     btn.click(function(){
                        $(this).css({"display":"none"});
                            ANIM.anim_interact_3_bus.eventCallback("onComplete", muestralo, [$(this), cb]);   
                            ANIM.anim_interact_3_bus.play(0);
                        });
                    }
                 if(btn.hasClass('btn_balcon')){
                     btn.click(function(){
//                        $(this).css({"display":"none"});
//                            ANIM.anim_interact_3_spider.eventCallback("onComplete", muestralo, [$(this), cb]);   
//                            ANIM.anim_interact_3_spider.play(0);
                            let boolean = Utils.randomInt(0,1);
                            if(boolean === 1){
                                Player.playSoundFX('paloma');
                            } else {
                                Player.playSoundFX('paloma2');
                            }
                        });
                    }
                 break;
            case 4:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        let boolean = Utils.randomInt(0,1);
                        if(boolean === 1){
                            Player.playSoundFX('paloma');
                        } else {
                            Player.playSoundFX('paloma2');
                        }
                    });
                 }
                
                 break;
             case 5:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_5.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_5.play(0);
                    });
                 }
                 break;
            case 6:
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_6_teatro.eventCallback("onComplete", muestralo, [$(this), cb]); 
                        ANIM.anim_interact_6_teatro.play(0);
                    });
                }
                 break;
             case 7:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_7_nubes.eventCallback("onComplete", muestralo, [$(this), cb]); 
                        ANIM.anim_interact_7_nubes.play(0);
                    });
                }
                 break;
             case 8:
                    btn.click(function(){
                        $(this).css({"display":"none"});  
//                        ANIM.anim_interact_8_gato.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_8_gato.play(0);
                    });
                 break;
             
        }
    },
    compensaEscenas:(d) => {
        // ESTA FUNCIÓN HAY QUE CONFIGURARLA A MANO POR CADA ESCENA QUE LO NECESITE 
        // (EN ESTE CASO LA ILUSTRACIÓN SE PERDÍA POR ARRIBA, POR ESO ESE COMPENSA POR TOP,
        // SI FUESE AL REVÉS COMPENSARÍA POR BOTTOM)
       let dif = Math.abs(d); 
//        $('#escena_00').css({'bottom':dif+'px'});
        $('#escena_01').css({'top':dif+'px'});
//        $('#escena_02').css({'bottom':dif+'px'});
//        $('#escena_03').css({'bottom':dif+'px'});
//        $('#escena_04').css({'bottom':dif+'px'});
//        $('#escena_05').css({'bottom':dif+'px'});
//        $('#escena_07').css({'bottom':dif+'px'});
//        $('#escena_08').css({'bottom':dif+'px'});
//        $('#escena_09').css({'bottom':dif+'px'});
//        $('#escena_10').css({'bottom':dif+'px'});
    }
};