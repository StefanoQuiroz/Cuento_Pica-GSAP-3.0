let JSON_CUENTO = {
    nombre:"El pequeño pez de Taharoa",
    tipo:"Cuentos del medioambiente y la naturaleza",
    descripcion:"El pequeño Taharoa era un pequeño niño que vivía en una isla triangular alejada de todo continente, llamada por algunos <i>Rapa Nui</i>. Le gustaba trepar las rocas y recorrer la costa recolectando tesoros y regalos del mar. Una tarde en que soplaba el cálido viento del norte, Taharoa bajó a la playa, y atrapó con una boya a un diminuto pez amarillo. Con cuidado lo llevó a su casa y prometió a sus padres cuidarlo y hacerse cargo de él. Todos los días, después del colegio, Taharoa bajaba al mar en busca de agua fresca y alimento para Iti- Iti, su pez. Se divertían mucho juntos, pero a medida que el pez fue creciendo, fue perdiendo también su alegría. Preocupado, Taharoa conversa con su padre que le ayuda a encontrar una solución a su problema.<br>Este relato nos traslada a los paisajes y a la cultura Rapa Nui y nos habla sobre el cuidado y el respeto que merecen los animales.",
    creditos:[
                ["Adaptación:","Ana María Arredondo Bravo"],
                ["Ilustraciones:","Ignacio del Real Marimón"],
                ["Narración:","Constanza Ried Silva"],
                ["Arreglos musicales:","Jorge Mercado Pino"],
                ["Música escenas 5 y 8:","Grupo Taina Vaikava (cortesía de Allan Fuentes Quintana)"],
                ["Edición a cargo de:","Constanza Ried Silva<br>Verónica Vives Cofré<br>Fundación Entrelíneas"],
                ["Montaje y desarrollo web:","Agencia Match"],
                ["Créditos de sonidos:","Revise detalles <a href='#' target='_blank'>aquí</a>"] 
    ],
    ID:0, 
    imagenes:[
        "img/taharoa/esc_0_fondo.jpg",
        "img/taharoa/esc_1_fondo.jpg",
        "img/taharoa/esc_2_fondo.jpg",
        "img/taharoa/esc_5_fondo.jpg",
        "img/taharoa/spriteA.png",
    ], 
    fx_sonido:[
        {nombre:"risa_corta_a",url:"audio/taharoa/fx/risa_corta_a.mp3"},
        {nombre:"risa_corta_b",url:"audio/taharoa/fx/risa_corta_b.mp3"},
        {nombre:"mar_loop",url:"audio/taharoa/fx/mar_loop.mp3"},
        {nombre:"mar_loop_suave",url:"audio/taharoa/fx/mar_loop_suave.mp3"},
        {nombre:"mar_loop_grave",url:"audio/taharoa/fx/mar_loop_grave.mp3"},
        {nombre:"musica_feliz",url:"audio/taharoa/fx/musica_feliz.mp3"},
        {nombre:"musica_mas_feliz",url:"audio/taharoa/fx/musica_mas_feliz.mp3"},
        {nombre:"martillando",url:"audio/taharoa/fx/martillando.mp3"},
        {nombre:"mmm1",url:"audio/taharoa/fx/mmm1.mp3"},
        {nombre:"mmm3",url:"audio/taharoa/fx/mmm3.mp3"},
        {nombre:"viento_6",url:"audio/taharoa/fx/viento_6.mp3"},
        {nombre:"gaviotas",url:"audio/taharoa/fx/gaviotas.mp3"},
        {nombre:"gaviotas_loop",url:"audio/taharoa/fx/gaviotas_loop.mp3"},
        {nombre:"asombro",url:"audio/taharoa/fx/asombro.mp3"},
        {nombre:"salpicaduraMINI",url:"audio/taharoa/fx/salpicaduraMINI.mp3"},
        {nombre:"salpicaduraMINIB",url:"audio/taharoa/fx/salpicaduraMINIB.mp3"},
        {nombre:"salpicaduraA",url:"audio/taharoa/fx/salpicaduraA.mp3"},
        {nombre:"salpicaduraB",url:"audio/taharoa/fx/salpicaduraB.mp3"},
        {nombre:"risa_feliz",url:"audio/taharoa/fx/risa_feliz.mp3"},
        {nombre:"musica_5",url:"audio/taharoa/fx/musica_5.mp3"},
        {nombre:"musica_8",url:"audio/taharoa/fx/musica_8.mp3"},
        {nombre:"ola_grande",url:"audio/taharoa/fx/ola_grande.mp3"},
    ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/taharoa/mini_0.jpg",
            audio:"audio/taharoa/escena_01.mp3",
            parrafos:
            [
                {
                    texto: 'El hogar del pequeño Taharoa era una isla triangular alejada de todo continente que algunos llaman <i>Te Pito o Te Henua</i> y otros <i>Rapa Nui</i>.',
                    tiempo:[0,14.5,2] 
                },
                {
                    texto: 'Taharoa vivía allí, y jamás se detenía: le gustaba trepar las rocas y recorrer la costa recolectando tesoros y regalos del mar.',
                    tiempo:[15,30.7,1.5]
                },
                {
                    texto: 'Una tarde en que soplaba el cálido viento del norte, Taharoa corrió donde su madre y le rogó:',
                    tiempo:[31.2,41.5,8] // 2.3 <----- SOPLANDO
                },
                {
                    texto: '–Nua, Nua, ¿puedo ir al mar?',
                    tiempo:[42,45,1.5] 
                },
                {
                    texto: 'Su mamá le entregó un pequeño bolso tejido por su abuela Vai Mangaro con dos plátanos, un <i>kumara</i> (camote), <i>poe</i> y un trozo de <i>toa</i> (caña de azúcar) para la sed.',
                    tiempo:[45.5,61,2] 
                },
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/taharoa/mini_1.jpg",
            audio:"audio/taharoa/escena_02.mp3",
            parrafos:
            [
                {
                    texto: 'Ese día, el mar estaba tranquilo.',
                    tiempo:[0,4.5,2] 
                },
                {
                    texto: 'Taharoa se entretenía saltando de poza en poza, cazando <i>pikea</i> (cangrejos), estrellas de mar, e intentando atrapar pequeños pececitos.',
                    tiempo:[5,19,1.5] 
                },
                {
                    texto: 'Buscó a su alrededor y divisó un pedazo de boya que las olas habían arrastrado cerca de allí.',
                    tiempo:[19.5,29,3] 
                },
                {
                    texto: 'Con paciencia de pescador, esperó y esperó, hasta que entró en ella un diminuto pez amarillo.',
                    tiempo:[29.5,41,1.5] 
                },
                {
                    texto: 'Emocionado, recogió su bolsa y caminó con cuidado a su casa para no derramar el agua.',
                    tiempo:[41.5,52,0.5] 
                },
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/taharoa/mini_2.jpg",
            audio:"audio/taharoa/escena_03.mp3",
            parrafos:
            [
                {
                    texto: '¡Taharoa, es hermoso! – dijo su madre– pero deberías devolverlo al mar.',
                    tiempo:[0,9,2] 
                },
                {
                    texto: '–¡Nua, por favor, quiero quedármelo! –dijo el pequeño con pesar.',
                    tiempo:[9.5,16.5,0.5] 
                },
                {
                    texto: '–Si me dejas, cuidaré de él, cambiaré su agua y le daré de comer.',
                    tiempo:[17,24,0.5] 
                },
                {
                    texto: 'Todos los días, después del colegio, Taharoa bajaba al mar en busca de agua fresca y <i>’aūke</i>, un alga con la que se alimentan los peces.',
                    tiempo:[24.5,39,2] 
                },
                {
                    texto: '¡Qué dichoso saltaba su amigo dentro de la boya cuando lo veía llegar! ',
                    tiempo:[39.5,45.5,1.5] 
                },
                {
                    texto: 'Movía sus aletas y giraba.',
                    tiempo:[46,49,0.5] 
                },
                {
                    texto: 'Era tan pequeñito que Taharoa lo llamó <i>Iti-Iti.</i>',
                    tiempo:[49.5,56,0.5] 
                },
                
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/taharoa/mini_3.jpg",
            audio:"audio/taharoa/escena_04.mp3",
            parrafos:
            [
                {
                    texto: 'Al cabo de un tiempo, el pez comenzó a crecer hasta casi no caber dentro de la boya.',
                    tiempo:[0,9.2,2] 
                },
                {
                    texto: '–Nua, ¿qué haremos? – preguntó el niño a su mamá.',
                    tiempo:[9.7,14.7,1.1] 
                },
                {
                    texto: '–No te preocupes, lo pondremos en el mismo tambor donde te bañábamos cuando eras pequeño.',
                    tiempo:[15.2,23.5,1.1] 
                },
                {
                    texto: 'Se divertían mucho juntos.',
                    tiempo:[24,27,0.9] 
                },
                {
                    texto: 'Taharoa sumergía sus piernas en el tambor y jugaba a atrapar a <i>Iti-Iti</i>, aunque nunca lo lograba.',
                    tiempo:[27.5,37,1] 
                },
                {
                    texto: 'El pez se hacía cada vez más grande y ágil.',
                    tiempo:[37.5,43,0.8] 
                },
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/taharoa/mini_4.jpg",
            audio:"audio/taharoa/escena_05.mp3",
            parrafos:
            [
                {
                    texto: 'Un día, <i>Iti- Iti</i> dejó de jugar.',
                    tiempo:[0,5,2] 
                },
                {
                    texto: 'Preocupado, el niño llamó a su padre:',
                    tiempo:[5.5,9.5,1.5] 
                },
                {
                    texto: '–Koro, mi pez está enfermo. Ya no se mueve ni salta como antes.',
                    tiempo:[10,17,1] 
                },
                {
                    texto: '–Taharoa, hijo mío –le dijo su papá– tu pez está triste porque no tiene el espacio que necesita.',
                    tiempo:[17.5,26,1] 
                },
                {
                    texto: 'Es hora de que lo devuelvas al mar. Ven, alístate, que yo te ayudaré.',
                    tiempo:[26.5,34,0.5] 
                },
                {
                    texto: 'Taharoa comprendió que su koro tenía razón.',
                    tiempo:[34.5,38.6,2] 
                },
                {
                    texto: 'Regresó al lugar donde había encontrado a <i>Iti-Iti</i> y lo dejó junto a las rocas.',
                    tiempo:[39.1,47,1] 
                },
                {
                    texto: 'Mientras lo observaba alejarse, sintió que un nudo apretaba su garganta.',
                    tiempo:[47.5,54.5,10]  //<-- animacion pez
                },
                {
                    texto: 'Volvió a casa en silencio de la mano de su papá.',
                    tiempo:[55,59.5,0.5] 
                },
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/taharoa/mini_5.jpg",
            audio:"audio/taharoa/escena_06.mp3",
            parrafos:
            [
                {
                    texto: 'Taharoa estaba triste. Ya no corría saltando entre las rocas.',
                    tiempo:[0,8.5,2] 
                },
                {
                    texto: 'Se pasaba las horas sentado escudriñando el mar.',
                    tiempo:[9,14,0.9] 
                },
                {
                    texto: '–¿Dónde estará mi pez?– pensaba.',
                    tiempo:[14.5,18,1] 
                },
                {
                    texto: 'Una tarde en que volvió a soplar el viento del norte, Taharoa tomó su bicicleta y se encaminó a la playa.',
                    tiempo:[18.5,30,1.9] 
                },
                {
                    texto: 'Cuando se acercaba vio que muchos pájaros <i>manu tara, kena y tavake</i> revoloteaban sobre el agua. ',
                    tiempo:[30.5,40,1.8] 
                },
                {
                    texto: 'Trepó a una alta roca desde donde divisó un gran cardumen de peces grises.',
                    tiempo:[40.5,48.8,1.5] 
                },
                {
                    texto: 'Abatido, se quedó mirándolos mientras se alejaban.',
                    tiempo:[49.3,55,0.5] 
                },
                
            ]
        },
        {
            nombre:"Escena 7",
            miniatura:"img/taharoa/mini_6.jpg",
            audio:"audio/taharoa/escena_07.mp3",
            parrafos:
            [
                {
                    texto: 'De pronto, una enorme ola cayó sobre él.',
                    tiempo:[0,5.5,9] //<-- ola grande 
                },
                {
                    texto: '–Empapado, se levantó para volver, pero algo llamó su atención. ',
                    tiempo:[6,13,0.5] 
                },
                {
                    texto: 'Era un pez amarillo, un hermoso <i>nanue para</i> que brillaba con los rayos del sol.',
                    tiempo:[13.5,21.6,1.5] 
                },
                {
                    texto: 'El corazón del niño comenzó a latir aceleradamente.',
                    tiempo:[22.1,28,0.9] 
                },
                {
                    texto: 'Siguió al pez saltando entre las rocas, y sin pensarlo dos veces, el pequeño Taharoa se lanzó al mar.',
                    tiempo:[28.5,38,0.5] 
                },
                {
                    texto: '–¡Mi pez! ¡Es mi pez! –gritó el niño loco de alegría, mientras <i>Iti-Iti</i> nadaba y salpicaba a su alrededor.',
                    tiempo:[38.5,50,1.4] 
                },
            ]
        },
        {
            nombre:"Escena 8",
            miniatura:"img/taharoa/mini_7.jpg",
            audio:"audio/taharoa/escena_08.mp3",
            parrafos:
            [
                {
                    texto: 'A partir de ese día, Taharoa e <i>Iti-Iti</i> no se volvieron a separar.',
                    tiempo:[0,8.2,2] 
                },
                {
                    texto: 'Cada vez que sopla el cálido viento del norte,',
                    tiempo:[8.7,13.2,1.3] 
                },
                {
                    texto: 'el niño se despide con un beso de su madre y corre al mar.',
                    tiempo:[13.7,19.5,0.5] 
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
        let cont = $('#escena_00 .soplido');
        let arrVolutas = Array(28).fill(28);
        let arrLetras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N'];
        cont.append(ANIM.creaElementos(arrVolutas, arrLetras,'voluta','B'));
        
        let cont2 = $('#escena_07 .gaviotas');
        let arrgaviotas = Array(9).fill(9);
        let arrLetras2 = ['A','B','C'];
        cont2.append(ANIM.creaElementos(arrgaviotas, arrLetras2,'gaviota','B'));
        
        /*IMPORTANTE NO TOCAR*/
        ANIM.sobreescribeAudioFX(); // <--- Soluciona una nueva feature que le agregué al audio PLAYER (Player.cambiaVolume)
        ANIM.sobreescribeCreditosFinal(); // <--- Soluciona una pifia que tenía el Plyer original (no detenía las interacciones al llegar al final del cuento)
        ANIM.sobreescribePrevParrafo(); // <--- Soluciona una pifia que tenía el Player original (mostraba los botones de interacción al hacer atrás)
        ANIM.sobreescribeOnBlur(); // <-- dejan de sonar los wait sounds
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
    sobreescribeOnBlur:() => {
        window.removeEventListener("blur", Player.onBlur);
        Player.onBlur = () => {
            if(Player.onPlayer){
                ANIM.main_tl.pause();
                Player.stopAudioParrafo();
                Player.resetSubtitulos();
                Player.tooglePlayPauseIco();
                ANIM.pauseWaitSound();
            }
        }
        window.addEventListener("blur", Player.onBlur, false);
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
    creaElementos:(arr1, arr2, quecosa, cualSprite) => {
        let count = -1;
        let newArr = arr1.map((item, i) => {
            if(i % arr2.length == 0 ){
                count+=1;
            }
            let j = i-count*arr2.length;
            let letra = arr2[j];
            return `<div class="sprite${cualSprite} ${quecosa} ${quecosa}${letra} ${quecosa}${(i+1)}"></div>`;
        });
        return newArr.join("");
    },
    animaVolutas:(n_escena) =>{
        let arr = [...document.getElementById(`soplo${n_escena}`).getElementsByClassName('voluta')];
        arr.map((item, i) => {
            ANIM.animaVoluta(n_escena, i+1, 'voluta');
        });
    },
    animaVoluta:(n_escena=1, cual = 1, clase = 'voluta') => {
        let tweensActives = TweenMax.getTweensOf(`#escena_0${n_escena} .${clase}${cual}`);
        if(tweensActives.length === 0){
            let x = Utils.randomInt(200,800)*-1;
            let posXOrig = 0;
            let t = Utils.randomInt(1000,6000)/1000;
            let positivonegativo = cual%2 === 0 ? 1 : -1;
            let r = Utils.randomInt(30,60)*positivonegativo;
            let y = Utils.randomInt(1, 380)*positivonegativo;
            let delay = 6-t;
//           console.log(r*-1);
            TweenMax.set(`#escena_0${n_escena} .${clase}${cual}`,{alpha:0, y:0, x:posXOrig, rotation:0});
            
            TweenMax.to(`#escena_0${n_escena} .${clase}${cual}`,
                    t,
                    {
                        alpha:1,
                        x:x,
                        y:y,
                        ease:Power3.easeOut,
                        delay:delay,
                        rotation:r*-1
                    });
            TweenMax.to(`#escena_0${n_escena} .${clase}${cual}`,
                    t*0.8,
                    {
                        alpha:0,
                        ease:Power3.easeOut,
                        delay:delay + t*0.2
                    });
        }
    },
    muevePajaritos:(condelay = true, serepite=false) => {
        $('#escena_07 .gaviota').each(function(i){
           ANIM.muevePajarito(i+1,condelay,i,serepite);
        });
    },
    muevePajarito:(cual, condelay = true, del = 1, serepite = false) => {
        let tweensActives = TweenMax.getTweensOf(`#escena_07 .gaviota${cual}`);
        if(tweensActives.length === 0){
            let pajarito = $(`#escena_07 .gaviota${cual}`);
            let s1 = Utils.randomInt(40,80)/100;
            let s2 = s1+0.3;
            let delay = condelay ? del : 0;
            let top1 = Utils.randomInt(0,800);
            let top2 = top1 - Utils.randomInt(100,900);
            let t = 9/s1;
            pajarito.css({'z-index':s1*100});
            TweenMax.set(pajarito,{scale:s1, x:0, y:top1, transformOrigin:'top left'});
            TweenMax.to(pajarito,t,{scale:s2, x:-2120, y:top2, delay:delay, transformOrigin:'top left', onComplete:function(c,cdel,d,rep){
                if(rep){
                    ANIM.muevePajarito(c, false, del, rep);
                } else {
                    console.log("NO SE REPITE");
                }
            }, onCompleteParams:[cual, condelay, del, serepite], ease:Power0.easeNone});
        }
    },
    pausaPajaritos:() => {
        $('#escena_07 .gaviota').each(function(i){
            TweenMax.killTweensOf($(this)); //<--- pauso traslación
            TweenMax.set('#escena_07 .gaviota',{x:0, transformOrigin:'top left'}); // los devuelvo al punto de origen
        });
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
        
//        ANIM.main_tl.add( TweenMax.fromTo('#escena_02 .fondo',54,{scale:2,y:-100,x:200},{scale:1,y:0,x:0,transformOrigin:'top right', ease:Power0.easeNone}),'2_0+=3.5'); 
        
        
        ANIM.main_tl.add( TweenMax.fromTo('#escena_04 .pez',10,{scale:0.4},{scale:1}),'4_7-=10');
        ANIM.main_tl.add( TweenMax.fromTo('#escena_04 .pez',10,{x:1050, y:-340, rotation:40},{ bezier:{curviness:1.25, 
                    values:[
                       {x:900, y:-460, rotation:50},
                        {x:500, y:-300, rotation:30},
                        {x:0, y:-50, rotation:0}
                    ]}}),'4_7-=10');
        
        ANIM.main_tl.addLabel('0_2_sopla','0_2-=10');
        ANIM.main_tl.addLabel('4_7_audio','4_7-=10');
        ANIM.main_tl.addLabel('4_7_audio_fade','4_7-=2');
        
        
        ANIM.main_tl.add( TweenMax.fromTo('#escena_06 .pez1',6,{scale:0.6,rotation:80,x:0, transformOrigin:'350px 800px'},{scale:0.32,rotation:-80,x:-660, transformOrigin:'350px 800px', ease:Power0.easeNone}),'6_2+=1.5'); 
        ANIM.main_tl.add( TweenMax.fromTo('#escena_06 .pez1',2.5,{y:0},{y:-260, ease:Power0.easeNone}),'6_2+=1.5'); 
        ANIM.main_tl.add( TweenMax.to('#escena_06 .pez1',2.5,{y:0, ease:Power0.easeNone}),'6_2+=5'); 
         
        ANIM.main_tl.add( TweenMax.fromTo('#escena_06 .pez2',15,{rotation:60,x:0, transformOrigin:'350px 2000px'},{rotation:-60,x:0, transformOrigin:'350px 2000px'}),'6_5-=1'); 
        ANIM.main_tl.add( TweenMax.fromTo('#escena_06 .taharoa',14,{x:0},{x:-1400}),'6_5-=1');
        
        
        
//        ;
        ANIM.main_tl.addCallback(function(){
            ANIM.anim_interact_0_sopla.play(0);
        },"0_2_sopla");
        
        ANIM.main_tl.addCallback(function(){
            Player.resetSubtitulos();
            Player.playSoundFX('mar_loop',true);
            ANIM.fadeVolume('mar_loop',0,1,1);
        },"4_7_audio");
        ANIM.main_tl.addCallback(function(){
            ANIM.fadeVolume('mar_loop',1,0,2);
        },"4_7_audio_fade");
        
        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_00');
        },"escena_0");
     
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
//            ANIM.interactividad(0);
            ANIM.anim_interact_0_sopla.play(0);
            ANIM.waitForSound('mar_loop',0.1,22.5,0);
            ANIM.waitForSound('risa_corta_b',0.1,5.8,0,5,0.8);
//            ANIM.waitForSound('viento_loop',0.1,2.8,0,0.1,1);
            Player.playSoundFX('mar_loop_grave',true);
            Player.playSoundFX('gaviotas',true);
            ANIM.fadeVolume('mar_loop',0,1,6);
            ANIM.fadeVolume('risa_corta_b',0,1,6);
//            ANIM.fadeVolume('viento_loop',0,1,6);
            ANIM.fadeVolume('mar_loop_grave',0,1,6);
            ANIM.fadeVolume('gaviotas',0,1,6);
            Player.resetSubtitulos();
            Player.tooglePlayPauseIco();
        },"fin_escena_0");
        
       
        /*LLAMADAS Y FUNCIONES ESCENA 1*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_01');
        },"escena_1");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            ANIM.interactividad(1);
            ANIM.waitForSound('mar_loop',0.1,22.5,0);
            Player.playSoundFX('musica_feliz',true);
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            ANIM.displayInteract('#escena_01');
        },"fin_escena_1");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_02');
        },"escena_2");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
//            ANIM.interactividad(2);
            
            ANIM.waitForSound('martillando',Utils.randomInt(10,40)/10,3,0,Utils.randomInt(10,40)/10,0.7);
            ANIM.waitForSound('risa_corta_b',0.1,5.8,0,5,0.8);
            ANIM.waitForSound('mmm1',Utils.randomInt(8,28)/10,1.4,1,Utils.randomInt(100,400)/10,0.6);
//            ANIM.waitForSound('mmm2',Utils.randomInt(60,140)/10,1,0,Utils.randomInt(100,400)/10,0.6);
            ANIM.waitForSound('mmm3',Utils.randomInt(30,100)/10,0.9,1,Utils.randomInt(100,400)/10,0.6);
            Player.playSoundFX('mar_loop_suave',true);
            
            Player.activaBtnSiguiente();
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
            Player.playSoundFX('musica_feliz',true);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_3");
        
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 4*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_04');
        },"escena_4");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(4);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('musica_5',true);
            Player.arr_SOUNDS_FX[Player.arr_SOUNDS_FX.length-1].sound.position = 27000;
            ANIM.fadeVolume('musica_5',0,1,3);
            Player.playSoundFX('mar_loop_suave',true);
            ANIM.fadeVolume('mar_loop_suave',0,0.5,3);
            Player.playSoundFX('gaviotas_loop',true);
            ANIM.fadeVolume('gaviotas_loop',0,0.4,4);
        },"fin_escena_4");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 5*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_05');
        },"escena_5");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
//            ANIM.interactividad(5);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            ANIM.anim_interact_5_locura.play(0);
            Player.playSoundFX('gaviotas_loop',true);
            Player.playSoundFX('musica_feliz',true);
            ANIM.fadeVolume('gaviotas_loop',0,1,4);
//            console.log("fin_escena 5");
        },"fin_escena_5");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 6*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_06');
            Player.playSoundFX('ola_grande');
        },"escena_6");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(6);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('gaviotas_loop',true);
            Player.playSoundFX('musica_mas_feliz',true);
            Player.playSoundFX('mar_loop_suave',true);
            ANIM.fadeVolume('gaviotas_loop',0,1,4);
        },"fin_escena_6");
        
        /*LLAMADAS Y FUNCIONES ESCENA 7*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_07');
            ANIM.muevePajaritos(true,true);
        },"escena_7");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('musica_8',true);
            Player.playSoundFX('gaviotas_loop',true);
            ANIM.fadeVolume('gaviotas_loop',0,0.6,4);
            Player.playSoundFX('mar_loop',true);
            ANIM.muevePajaritos(true,true);
            ANIM.anim_interact_7_salto_final.play(0);
        },"fin_escena_7");
        
     
        
       
        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
    },
    creaAnimInteractividad:() => {
        
        //
        ANIM.anim_interact_0_sopla = new TimelineMax();
        ANIM.anim_interact_0_sopla
         
            .addLabel('inicio')
            .to('#escena_00 .soplador',2,{rotation:-15,x:-150,y:350,transformOrigin:'120px 50px'})
            .addCallback(function(){
                if(!ANIM.main_tl.paused()){
                    ANIM.anim_interact_0_sopla.play('truco');
                }
            })
            .to('#escena_00 .soplador .soplador2',0.2,{alpha:1})
            .to('#escena_00 .soplador .soplador1',0.2,{alpha:0},'-=0.1')
            .addCallback(function(){
                ANIM.animaVolutas(0);
                Player.playSoundFX('viento_6');
               
            })
            .to('#escena_00 .soplador .soplador1',0.2,{alpha:1},'+=6')
            .to('#escena_00 .soplador .soplador2',0.2,{alpha:0},'-=0.1')
            .to('#escena_00 .soplador',1,{y:300, x:-100})
            .to('#escena_00 .soplador',1,{y:350, x:-150})
            
            .to('#escena_00 .soplador .soplador2',0.2,{alpha:1})
            .to('#escena_00 .soplador .soplador1',0.2,{alpha:0},'-=0.1')
            .addCallback(function(){
                ANIM.animaVolutas(0);
                Player.playSoundFX('viento_6');
            })
            .to('#escena_00 .soplador .soplador1',0.2,{alpha:1},'+=6')
            .to('#escena_00 .soplador .soplador2',0.2,{alpha:0},'-=0.1')
            .to('#escena_00 .soplador',1,{y:300, x:-100})
            .to('#escena_00 .soplador',1,{y:350, x:-150})
            
            .addLabel('truco')
            .to('#escena_00 .soplador .soplador2',0.2,{alpha:1})
            .to('#escena_00 .soplador .soplador1',0.2,{alpha:0},'-=0.1')
            .addCallback(function(){
                ANIM.animaVolutas(0);
                Player.playSoundFX('viento_6');
            })
            .to('#escena_00 .soplador .soplador1',0.2,{alpha:1},'+=6')
            .to('#escena_00 .soplador .soplador2',0.2,{alpha:0},'-=0.1')
            .to('#escena_00 .soplador',1,{y:300, x:-100})
            .to('#escena_00 .soplador',1,{y:350, x:-150})
            
            .to('#escena_00 .soplador',2,{rotation:0,x:0,y:0,transformOrigin:'120px 50px'})
            .addLabel('final')
            ;
        ANIM.anim_interact_0_sopla.pause();
        
        //
        ANIM.anim_interact_0_sopla_real = new TimelineMax({repeat:2});
        ANIM.anim_interact_0_sopla_real
         
            .addLabel('inicio')
            
            .addLabel('final')
            ;
        ANIM.anim_interact_0_sopla_real.pause(); 
        //
        ANIM.anim_interact_1_piedras = new TimelineMax();
        ANIM.anim_interact_1_piedras
         
            .addLabel('inicio')

            .addCallback(function(){
            // waitForSound:(cual, waitFor=4, cuantoDura=14, cuantasVeces = 1, cuantoDejoAlFinal = 0, volume=1, fade = false, fadeFrom = 12, volFadeTo = 0) => {
                ANIM.waitForSound('risa_corta_a',Utils.randomInt(0,35)/10,0.7,2,Utils.randomInt(0,35)/10);
                ANIM.waitForSound('asombro',2.5,0.9,2,7,0.5);
                
            })
            .staggerTo('#escena_01 .taharoa',2,{alpha:1},2.5)
            .addLabel('final')
            
             ;
        ANIM.anim_interact_1_piedras.pause(); 
        
        //
        ANIM.anim_interact_3_salto_pez = new TimelineMax();
        ANIM.anim_interact_3_salto_pez
         
            .addLabel('inicio')

            .addCallback(function(){
                Player.playSoundFX('salpicaduraMINI');
                Player.cambiaVolume('salpicaduraMINI',0.2);
            })
            .to('#escena_03 .pez1',1,{scale:0.5, y:-200, x:130, rotation:90, ease: Power1.easeOut})
            .to('#escena_03 .pez1',1,{scale:0.6, y:165, x:270, rotation:180, ease: Power1.easeIn})
            .to('#escena_03 .recipiente2',1,{alpha:1},'-=1')
            .to('#escena_03 .recipiente3',1,{alpha:1},'-=1')
            .to('#escena_03 .cubre_adicional',0.5,{alpha:1},'-=0.5')
            .addCallback(function(){
                Player.playSoundFX('salpicaduraA');
            },'-=0.2')
            .to('#escena_03 .pez1',0.1,{scale:0.6, y:166, x:250, rotation:0})
            .addCallback(function(){
                Player.playSoundFX('salpicaduraMINI');
            },'+=1')
            .to('#escena_03 .pez1',1,{scale:0.7, y:-105, x:470, rotation:90, ease: Power1.easeOut})
            .to('#escena_03 .pez1',1,{scale:1, y:420, x:660, rotation:180, ease: Power1.easeIn})
            .addCallback(function(){
                Player.playSoundFX('salpicaduraB');
            },'-=0.2')
            .addCallback(function(){
                Player.playSoundFX('salpicaduraMINIB');
                Player.playSoundFX('risa_feliz');
                ANIM.fadeVolume('risa_feliz',0,1,6);
            },'+=1.5')
            .to('#escena_03 .pez2',1,{scale:0.7, y:-150, x:-120, rotation:-30, ease: Power1.easeOut})
            .to('#escena_03 .pez2',3.5,{scale:1, y:0, x:0, rotation:0, ease: Power1.easeIn})
            .to('#escena_03 .taharoa2',3,{alpha:1},'-=4')
            .to('#escena_03 .interact',9.5,{y:-470,x:-950, ease: Power0.easeNone},'-=9')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_3_salto_pez.pause();
        //
        ANIM.anim_interact_4_pez_triste = new TimelineMax();
        ANIM.anim_interact_4_pez_triste
        
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('mar_loop',true);
                ANIM.fadeVolume('mar_loop',0,1,1);
            })
            .fromTo('#escena_04 .pez',10,{scale:0.4},{scale:1})
            .fromTo('#escena_04 .pez',10,{x:1050, y:-340, rotation:40},{ bezier:{curviness:1.25, 
                    values:[
                        {x:900, y:-460, rotation:50},
                        {x:500, y:-300, rotation:30},
                        {x:0, y:-50, rotation:0}
                    ]}},'-=10')
            .addCallback(function(){
                ANIM.fadeVolume('mar_loop',1,0,2);
            },'-=2')
            .addLabel('final')
            ;
        ANIM.anim_interact_4_pez_triste.pause();
        
        //
        ANIM.anim_interact_5_locura = new TimelineMax();
        ANIM.anim_interact_5_locura
         
            .addLabel('inicio')

            .addCallback(function(){
                TweenMax.staggerFromTo('#escena_05 .pajaros .pajaro',4,{backgroundPosition:'200px 0px'},{backgroundPosition:'-735px 0px',repeat:-1, ease:Power1.easeInOut},2);
            })
            .addCallback(function(){
                TweenMax.fromTo('#escena_05 .pez1',6,{backgroundPosition:'20px 0px'},{backgroundPosition:'-1623px 0px',repeat:-1, ease:Power0.easeNone});
                TweenMax.fromTo('#escena_05 .pez2',6,{backgroundPosition:'20px -86px'},{backgroundPosition:'-1623px -86px',repeat:-1, ease:Power0.easeNone,delay:1.25});
            },'+=5')
            .addLabel('final')
            ;
        ANIM.anim_interact_5_locura.pause();
        
        //
        ANIM.anim_interact_6_gran_salto = new TimelineMax();
        ANIM.anim_interact_6_gran_salto
         
            .addLabel('inicio')

            .addCallback(function(){
               
            })
            .fromTo('#escena_06 .pez2',15,{rotation:60,x:0, transformOrigin:'350px 2000px'},{rotation:-60,x:0, transformOrigin:'350px 2000px'})
            .fromTo('#escena_06 .taharoa',14,{x:0},{x:-1400},'-=14')
            .addLabel('final')
            ;
        ANIM.anim_interact_6_gran_salto.pause();
       
         
        //
        ANIM.anim_interact_7_salto_final = new TimelineMax({repeat:-1});
        ANIM.anim_interact_7_salto_final
         
            .addLabel('inicio')

            .addCallback(function(){
                Player.playSoundFX('salpicaduraA');
                Player.cambiaVolume('salpicaduraA',0.2);
            },'+=2')
            .to('#escena_07 .salto2 .pez',1,{rotation:0,y:-260,x:-150,ease:Power2.easeOut})
            .to('#escena_07 .salto2 .pez',1,{rotation:-90,y:0,x:-400,ease:Power2.easeIn})
            .addCallback(function(){
                Player.playSoundFX('salpicaduraMINI');
                Player.cambiaVolume('salpicaduraMINI',0.3);
            },'-=0.2')
            .addCallback(function(){
                Player.playSoundFX('salpicaduraA');
                Player.cambiaVolume('salpicaduraA',0.3);
            },'+=1')
            .to('#escena_07 .salto3 .pez',1,{rotation:0,y:-400,x:-150,ease:Power2.easeOut})
            .to('#escena_07 .salto3 .pez',1,{rotation:-90,y:0,x:-500,ease:Power2.easeIn})
            .addCallback(function(){
                Player.playSoundFX('salpicaduraMINI');
                Player.cambiaVolume('salpicaduraMINI',0.3);
            },'-=0.2')
            .addCallback(function(){
                Player.playSoundFX('salpicaduraMINIB');
                Player.cambiaVolume('salpicaduraMINIB',0.5);
            },'-=0.2')
            .addCallback(function(){
                Player.playSoundFX('salpicaduraB');
                Player.cambiaVolume('salpicaduraB',0.5);
            },'+=1')
            .to('#escena_07 .salto1 .pez',1,{rotation:0,y:-500,x:-150,ease:Power2.easeOut})
            .to('#escena_07 .salto1 .pez',1,{rotation:-90,y:0,x:-600,ease:Power2.easeIn})
            .addCallback(function(){
                Player.playSoundFX('salpicaduraMINIB');
                Player.cambiaVolume('salpicaduraMINIB',0.5);
            },'-=0.2')
            .addLabel('final')
            ;
        ANIM.anim_interact_7_salto_final.pause();
       
        
        ANIM.arr_interacts = [
            ANIM.anim_interact_0_sopla,
            ANIM.anim_interact_0_sopla_real,
            ANIM.anim_interact_1_piedras,
            ANIM.anim_interact_3_salto_pez,
            ANIM.anim_interact_4_pez_triste,
            ANIM.anim_interact_5_locura,
            ANIM.anim_interact_6_gran_salto,
            ANIM.anim_interact_7_salto_final,
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
        TweenMax.killTweensOf("#escena_00 .voluta");
        TweenMax.set('#escena_00 .soplador',{rotation:0,x:0,y:0,transformOrigin:'120px 50px'});
        TweenMax.set('#escena_00 .soplador1',{alpha:1});
        TweenMax.set('#escena_00 .soplador2',{alpha:0});
        TweenMax.set('#escena_00 .soplido',{rotation:-40,transformOrigin:'1200px 35px'});
        TweenMax.set('#escena_00 .voluta',{alpha:0,rotation:0});
        
        TweenMax.set('#escena_01 .taharoa',{alpha:0});
        TweenMax.set('#escena_01 .fondo',{scale:1.12});
        TweenMax.set('#escena_01 .interact',{scale:1.12});
        
        TweenMax.set('#escena_02 .fondo',{transformOrigin:'top right'});
        
        TweenMax.set('#escena_03 .recipiente2',{alpha:0});
        TweenMax.set('#escena_03 .recipiente3',{alpha:0});
        TweenMax.set('#escena_03 .interact',{y:300, x:600});
        TweenMax.set('#escena_03 .taharoa2',{alpha:0});
        TweenMax.set('#escena_03 .cubre_adicional',{alpha:0});
      
        TweenMax.set('#escena_03 .pez1',{scale:0.3, y:0, x:0, rotation:0});
        TweenMax.set('#escena_03 .pez2',{scale:0.4, y:180, x:-430, rotation:-90});
        
        TweenMax.set('#escena_04 .cubrePez',{alpha:0.5});
        TweenMax.set('#escena_04 .fondo',{scale:1.22,x:20});
        TweenMax.set('#escena_04 .interact',{scale:1.22,x:20});
//        TweenMax.set('#escena_04 .pez',{scale:0.4,x:1050,y:-340,rotation:40});
        
        
        TweenMax.set('#escena_05 .fondo',{scale:1.17});
        TweenMax.set('#escena_05 .interact',{scale:1.17});
        TweenMax.killTweensOf("#escena_05 .pajaros .pajaro");
        TweenMax.killTweensOf("#escena_05 .pez1");
        TweenMax.killTweensOf("#escena_05 .pez2");
        TweenMax.set('#escena_05 .pajaros .pajaro',{backgroundPosition:'200px 0px',rotation:-39, transformOrigin:'center'});
        TweenMax.set('#escena_05 .pez1',{backgroundPosition:'20px 0px'});
        TweenMax.set('#escena_05 .pez2',{backgroundPosition:'20px -86px'});
        
        TweenMax.set('#escena_06 .fondo',{scale:1.185,x:18});
        TweenMax.set('#escena_06 .interact',{scale:1.185,x:18});

        TweenMax.set('#escena_07 .fondo',{scale:1.15,x:-10});
        TweenMax.set('#escena_07 .salto .pez',{rotation:40,y:0,x:0});
        TweenMax.set('#escena_07 .salto2 .pez',{scale:0.4});
        TweenMax.set('#escena_07 .salto3 .pez',{scale:0.7});
        
        ANIM.pausaPajaritos();
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
                        ANIM.anim_interact_0_sopla.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_sopla.play(0);
                    });
                 }
                break;
             case 1:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1_piedras.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_1_piedras.play(0);
                    });
                 }
                break;
            case 2:
                
                 break;
             case 3:
                 if(btn.hasClass('primario')){
                     btn.click(function(){
                        $(this).css({"display":"none"});
                            ANIM.anim_interact_3_salto_pez.eventCallback("onComplete", muestralo, [$(this), cb]);   
                            ANIM.anim_interact_3_salto_pez.play(0);
                        });
                    }
                 break;
            case 4:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_4_pez_triste.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_4_pez_triste.play(0);
                    });
                 }
                
                 break;
             case 5:
                 
                 break;
            case 6:
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_6_gran_salto.eventCallback("onComplete", muestralo, [$(this), cb]); 
                        ANIM.anim_interact_6_gran_salto.play(0);
                    });
                }
                 break;
             case 7:
                 
                 break;
             
        }
    },
    compensaEscenas:(d) => {
        // ESTA FUNCIÓN HAY QUE CONFIGURARLA A MANO POR CADA ESCENA QUE LO NECESITE 
        // (EN ESTE CASO LA ILUSTRACIÓN SE PERDÍA POR ARRIBA, POR ESO ESE COMPENSA POR TOP,
        // SI FUESE AL REVÉS COMPENSARÍA POR BOTTOM)
       let dif = Math.abs(d); 
//        $('#escena_00').css({'bottom':dif+'px'});
//        $('#escena_01').css({'top':dif+'px'});
//        $('#escena_02').css({'bottom':dif+'px'});
//        $('#escena_03').css({'bottom':dif+'px'});
//        $('#escena_04').css({'bottom':dif+'px'});
//        $('#escena_05').css({'bottom':dif+'px'});
//        $('#escena_07').css({'bottom':dif+'px'});
//        $('#escena_08').css({'bottom':dif+'px'});
//        $('#escena_09').css({'bottom':dif+'px'});
//        $('#escena_10').css({'bottom':dif+'px'});
    }
         /*↑↑↑↑ HASTA LA ANTERIOR ↑↑↑↑↑*/
};