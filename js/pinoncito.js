let JSON_CUENTO = {
    nombre:"Piñoncito",
    tipo:"Cuento de aventuras",
    descripcion:"A los pies de la cordillera vivían Catalina y Manuel. Llevaban una vida solitaria y tranquila, aunque una pena los acompañaba: no habían podido tener un hijo. Rogaban todas las noches para que llegara, hasta que un día de primavera, su ruego fue escuchado. Nació un pequeño niño, tan pequeño que su cuna era la piña de una araucaria. En esta versión criolla del cuento clásico de Pulgarcito, Piñoncito enfrenta varias aventuras y desafíos. Su astucia, agilidad y valentía le permitirán salir airoso de todas sus andanzas.<br> Este relato fue encontrado por Verónica Herrera Vélez en los archivos de la Biblioteca Nacional. La narración original es de doña Rosario Concha, de la ciudad de Linares, y fue recogida por S. de Saunieres en 1918.",
    creditos:[
                ["Adaptación:","Verónica Herrera Vélez"],
                ["Recreación del texto:","Pablo Álvarez Fuentes"],
                ["Ilustraciones:","Pedro Prado Verdejo"],
                ["Narración:","Alejandra Poli García"],
                ["Arreglos musicales:","Jorge Mercado Pino"],
                ["Edición a cargo de:","Constanza Ried Silva<br>Verónica Vives Cofré<br>Fundación Entrelíneas"],
                ["Montaje y desarrollo web:","Agencia Match"],
                ["Créditos de sonidos:","Revise detalles <a href='#' target='_blank'>aquí</a>"] 
    ],
    ID:0, 
    imagenes:[
        "img/pinoncito/esc_0_fondo.jpg",
        "img/pinoncito/esc_1_fondo.jpg",
        "img/pinoncito/esc_2_fondo.jpg",
        "img/pinoncito/esc_3_fondo_claro.jpg",
        "img/pinoncito/esc_3_fondo_oscuro.jpg",
        "img/pinoncito/esc_4_fondo.jpg",
        "img/pinoncito/esc_5_fondo.jpg",
        "img/pinoncito/esc_6_fondo.jpg",
        "img/pinoncito/esc_7_fondo.jpg",
        "img/pinoncito/esc_8_fondo.jpg",
        "img/pinoncito/spriteA.png",
        "img/pinoncito/spriteB.png",
        "img/pinoncito/spriteC.png",
        "img/pinoncito/spriteD.png",
        "img/pinoncito/cubreboca.png",
    ], 
    fx_sonido:[
        {nombre:"buho",url:"audio/pinoncito/fx/buho.mp3"},
        {nombre:"cancion_inicial",url:"audio/pinoncito/fx/cancion_inicial.mp3"},
        {nombre:"perro",url:"audio/pinoncito/fx/perro.mp3"},
        {nombre:"risa",url:"audio/pinoncito/fx/risa.mp3"},
        {nombre:"mosca",url:"audio/pinoncito/fx/mosca.mp3"},
        {nombre:"trueno",url:"audio/pinoncito/fx/trueno.mp3"},
        {nombre:"lluvia",url:"audio/pinoncito/fx/lluvia.mp3"},
        {nombre:"ladridos",url:"audio/pinoncito/fx/ladridos.mp3"},
        {nombre:"pasos_charco",url:"audio/pinoncito/fx/pasos_charco.mp3"},
        {nombre:"olfateando",url:"audio/pinoncito/fx/olfateando.mp3"},
        {nombre:"mugido",url:"audio/pinoncito/fx/mugido.mp3"},
        {nombre:"aguilucho",url:"audio/pinoncito/fx/aguilucho.mp3"},
        {nombre:"gritoA",url:"audio/pinoncito/fx/gritoA.mp3"},
        {nombre:"gritoB",url:"audio/pinoncito/fx/gritoB.mp3"},
        {nombre:"suspiro",url:"audio/pinoncito/fx/suspiro.mp3"},
        {nombre:"suspiroB",url:"audio/pinoncito/fx/suspiroB.mp3"},
        {nombre:"piopio",url:"audio/pinoncito/fx/piopio2.mp3"},
        {nombre:"serpiente",url:"audio/pinoncito/fx/serpiente.mp3"},
        {nombre:"musica_vuela",url:"audio/pinoncito/fx/musica_vuela.mp3"},
        {nombre:"yupi",url:"audio/pinoncito/fx/yupi.mp3"},
        {nombre:"cancion_final",url:"audio/pinoncito/fx/cancion_final.mp3"},
    ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/pinoncito/mini_0.jpg",
            audio:"audio/pinoncito/escena_01.mp3",
            parrafos:
            [
                {
                    texto: "A los pies de la cordillera vivían Catalina y Manuel.",
                    tiempo:[0,4.5,3.5]
                },
                {
                    texto: "Llevaban una vida solitaria y tranquila, aunque una pena los acompañaba:",
                    tiempo:[5,10.7,0.5] 
                },
                {
                    texto: "por más que querían, no habían podido tener un hijo.",
                    tiempo:[11.2,16,1] 
                },
                {
                    texto: "Tanto lo deseaban, que rogaban todas las noches para que llegara.",
                    tiempo:[16.5,21.7,0.5] 
                },
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/pinoncito/mini_1.jpg",
            audio:"audio/pinoncito/escena_02.mp3",
            parrafos:
            [
                {
                    texto: "Su canto fue escuchado, y al llegar la primavera, nació un pequeño niño.",
                    tiempo:[0,6.5,2]
                },
                {
                    texto: "Era tan, pero tan chiquito, que su cuna era la piña de un pehuén.",
                    tiempo:[7,13.5,1]
                },
                {
                    texto: "A medida que pasaban los años, se hacía más astuto e inteligente… pero no crecía ni un centímetro.",
                    tiempo:[14,22.5,9] // 9 seg risa guagua
                },
                {
                    texto: "A los siete años dormía en una caja de fósforos, descansaba sobre un dedal y jugaba a la pelota con migas de pan.",
                    tiempo:[23,33.4,1.5]
                },                
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/pinoncito/mini_2.jpg",
            audio:"audio/pinoncito/escena_03.mp3",
            parrafos:
            [
                {
                    texto: "Una tarde, Piñoncito tomó su espada de alfiler, se montó sobre su perro Trewa y salió a jugar por ahí en busca de aventuras.",
                    tiempo:[0,10,2]
                },
                {
                    texto: "Estaba tan entretenido persiguiendo a un saltamontes, que no se dio cuenta de que se acercaba un aguacero.",
                    tiempo:[10.5,18.5,1]
                },
                {
                    texto: "De pronto, un fuerte ruido partió el cielo en dos.",
                    tiempo:[19,23,1.5]
                },
                {
                    texto: "Piñoncito corrió a refugiarse debajo de una enorme callampa silvestre.",
                    tiempo:[23.5,29,0.5]
                },
                
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/pinoncito/mini_3.jpg",
            audio:"audio/pinoncito/escena_04.mp3",
            parrafos:
            [
                {
                    texto: "De repente, Piñoncito sintió que algo lo levantaba y lo sacudía con fuerza.",
                    tiempo:[0,8.5,2] 
                },
                {
                    texto: "Y de un momento a otro, todo estaba oscuro.",
                    tiempo:[9,14.5,1] 
                },
                {
                    texto: "–¿Dónde estoy? –se preguntó el niño–.", //(MUGIDO)
                    tiempo:[15,18.5,1.5] 
                },
                {
                    texto: "¡No puede ser, estoy adentro de una vaca!",
                    tiempo:[19,23.5,6.4] 
                },
                {
                    texto: "Decidido a salir, desenvainó su alfiler y comenzó a pinchar a diestra y siniestra.",
                    tiempo:[24,32.5,1.5] 
                },
                {
                    texto: "La vaca, incómoda, estornudó y lo lanzó a varios metros de distancia.",
                    tiempo:[33,41,1] 
                },   
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/pinoncito/mini_4.jpg",
            audio:"audio/pinoncito/escena_05.mp3",
            parrafos:
            [
                {
                    texto: "Piñoncito cayó encima de un montón de paja.",
                    tiempo:[0,5,2]
                },
                {
                    texto: "Todavía estaba empapado y aturdido cuando unas garras terribles lo tomaron con fuerza y lo llevaron volando montaña arriba.",
                    tiempo:[5.5,17.5,1]
                },
                {
                    texto: "Planeando desde el cielo podía ver el bosque. El viento enfriaba sus orejas.",
                    tiempo:[18,26,1]
                },
                
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/pinoncito/mini_5.jpg",
            audio:"audio/pinoncito/escena_06.mp3",
            parrafos:
            [
                {
                    texto: "El aguilucho se posó en un alto risco. Allí, escondido entre las rocas, Piñoncito divisó un nido.",
                    tiempo:[0,11.5,2] 
                },
                {
                    texto: "No tenía cómo bajar, así que se acomodó junto a los dos tibios huevos para pasar la noche.",
                    tiempo:[12,20,0.5] 
                },
                {
                    texto: "Los días transcurrieron y a nadie parecía molestarle su presencia.",
                    tiempo:[20.5,25.5,1.5] 
                },
                {
                    texto: "Piñoncito se sentía acogido, pero extrañaba a sus padres y a su perro Trewa.",
                    tiempo:[26,33,1] 
                },
                
            ]
        },
        {
            nombre:"Escena 7",
            miniatura:"img/pinoncito/mini_6.jpg",
            audio:"audio/pinoncito/escena_07.mp3",
            parrafos:
            [
                {
                    texto: "Un día que mamá aguilucho salió en busca de comida, una serpiente se aproximó silenciosamente al nido.",
                    tiempo:[0,11,2] 
                },
                {
                    texto: "Piñoncito, sin miedo, esperó a que se acercara, desenvainó su alfiler y lo clavó en la lengua de la culebra.",
                    tiempo:[11.5,22.5,1] 
                },
                {
                    texto: "La pájara, que regresaba en ese momento, la tomó de la cola y la lanzó lejos.",
                    tiempo:[23,31,1] 
                },
                
            ]
        },
        {
            nombre:"Escena 8",
            miniatura:"img/pinoncito/mini_7.jpg",
            audio:"audio/pinoncito/escena_08.mp3",
            parrafos:
            [
                {
                    texto: "Mamá aguilucho, agradecida, le dijo:",
                    tiempo:[0,3.3,2] 
                },
                {
                    texto: "–Piñoncito, pídeme lo que quieras. Te debo la vida de mis hijitos.",
                    tiempo:[3.8,10,0.5] 
                },
                {
                    texto: "–Por favor –respondió el pequeño–, llévame a casa.",
                    tiempo:[10.5,15,1] 
                },
                {
                    texto: "El niño se despidió de los polluelos y se acomodó entre las plumas del ave.",
                    tiempo:[15.5,22,1] 
                },
                {
                    texto: "Volaron por encima de los riscos de la cordillera y divisaron su casa a lo lejos, justo bajo el pehuén.",
                    tiempo:[22.5,32,1] 
                },
                {
                    texto: "Antes de llegar, mamá aguilucho se detuvo y le dio a Piñoncito un hueso de gigante patagón.",
                    tiempo:[32.5,42.5,1.5] 
                },
                {
                    texto: "– Frótalo con fuerza –le dijo–. Confía en mí.",
                    tiempo:[43,48,1]
                },
                
            ]
        },
        {
            nombre:"Escena 9",
            miniatura:"img/pinoncito/mini_8.jpg",
            audio:"audio/pinoncito/escena_09.mp3",
            parrafos:
            [
                {
                    texto: "Piñoncito frotó el hueso de gigante contra sus piernas y brazos y, como por arte de magia,",
                    tiempo:[0,10,2] 
                },
                {
                    texto: "se transformó en un niño alto y fuerte.",
                    tiempo:[10.5,15] 
                },
                {
                    texto: "Al golpear, casi derriba la puerta de su casa.",
                    tiempo:[15.5,20,1] 
                },
                {
                    texto: "Sus padres lo abrazaron y lo besaron como cuando era un recién nacido.",
                    tiempo:[20.5,27.2,1] 
                },
                {
                    texto: "No podían creer que ese niño fuera su Piñoncito.",
                    tiempo:[27.7,33.5,1] 
                },
                {
                    texto: "–¡Papá, mamá, he vuelto! –dijo entre risas y lágrimas.",
                    tiempo:[34,40.5,1] 
                },
                {
                    texto: "–¡Y creo que ya es hora de conseguirme una cama de verdad!",
                    tiempo:[41,46.5,1] 
                },
                {
                    texto: "",
                    tiempo:[47,58,2] 
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
        let cont = $('#escena_02 .gotas');
        let arrGotas = Array(15).fill(15);
        let arrLetras = ['A','B','C'];
        cont.append(ANIM.creaGotas(arrGotas, arrLetras));
        
        let cont2 = $('#escena_03 .gotas');
        let arrGotas2 = Array(7).fill(7);
        let arrLetras2 = ['C','B','C'];
        cont2.append(ANIM.creaGotas(arrGotas2, arrLetras2));
        
        
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
    creaGotas:(arr1, arr2) => {
        let count = -1;
        let newArr = arr1.map((item, i) => {
            if(i % arr2.length == 0 ){
                count+=1;
            }
            let j = i-count*arr2.length;
            let letra = arr2[j];
            return `<div class="spriteA gota gota${letra} gota${(i+1)}"></div>`;
//            <div class="spriteA gota gotaA gota1"></div>
        });
        return newArr.join("");
    },
    animaOjosGuaguaEsc1:() => {
        if(!ANIM.tl_ojos_guagua_esc1){
            ANIM.tl_ojos_guagua_esc1 = new TimelineMax({repeat:-1});
            ANIM.tl_ojos_guagua_esc1
                .fromTo('#escena_01 .guagua .parpado',0.1,{alpha:0},{alpha:1})
                .fromTo('#escena_01 .guagua .ojo',0.1,{alpha:1},{alpha:0},'-=0.1')
                .to('#escena_01 .guagua .parpado',0.1,{alpha:0},'+=0.1')
                .to('#escena_01 .guagua .ojo',0.1,{alpha:1},'-=0.1')
                .to('#escena_01 .guagua .parpado',0.1,{alpha:1},'+=5')
                .to('#escena_01 .guagua .ojo',0.1,{alpha:0},'-=0.1')
                .to('#escena_01 .guagua .parpado',0.1,{alpha:0},'+=0.1')
                .to('#escena_01 .guagua .ojo',0.1,{alpha:1},'-=0.1')
            ;
        }
        ANIM.tl_ojos_guagua_esc1.play();  
    },
    animaChupeteGuaguaEsc1:() => {
        if(!ANIM.tl_chupete_guagua_esc1){
            ANIM.tl_chupete_guagua_esc1 = new TimelineMax({repeat:-1});
            ANIM.tl_chupete_guagua_esc1
                .to('#escena_01 .guagua .chupete',0.2, {scale:1.05, repeat:9, yoyo:true})
                .addCallback(function(){
                
                },'+=4.2')
            ;
        }
        ANIM.tl_chupete_guagua_esc1.play();   
    },
    animaOjosPinonEsc1:() => {
        if(!ANIM.tl_ojos_pinon_esc1){
            ANIM.tl_ojos_pinon_esc1 = new TimelineMax({repeat:-1});
            ANIM.tl_ojos_pinon_esc1
                .fromTo('#escena_01 .caja .parpado',0.1,{alpha:0},{alpha:1})
                .fromTo('#escena_01 .caja .ojo',0.1,{alpha:1},{alpha:0},'-=0.1')
                .fromTo('#escena_01 .caja .pupila',0.1,{alpha:1},{alpha:0},'-=0.1')
                .to('#escena_01 .caja .parpado',0.1,{alpha:0},'+=0.1')
                .to('#escena_01 .caja .ojo',0.1,{alpha:1},'-=0.1')
                .to('#escena_01 .caja .pupila',0.1,{alpha:1},'-=0.1')
                .to('#escena_01 .caja .parpado',0.1,{alpha:1},'+=11')
                .to('#escena_01 .caja .ojo',0.1,{alpha:0},'-=0.1')
                .to('#escena_01 .caja .pupila',0.1,{alpha:0},'-=0.1')
                .to('#escena_01 .caja .parpado',0.1,{alpha:0},'+=0.1')
                .to('#escena_01 .caja .ojo',0.1,{alpha:1},'-=0.1')
                .to('#escena_01 .caja .pupila',0.1,{alpha:1},'-=0.1')
            ;
        }
        ANIM.tl_ojos_pinon_esc1.play();  
    },
    animaOjosAsustadoPinonEsc1:() => {
        if(!ANIM.tl_ojos_asustado_pinon_esc1){
            ANIM.tl_ojos_asustado_pinon_esc1 = new TimelineMax({repeat:-1});
            ANIM.tl_ojos_asustado_pinon_esc1
               
                .to('#escena_01 .caja .ojo1 .pupila',0.2,{x:0})
                .to('#escena_01 .caja .ojo2 .pupila',0.2,{x:0},'-=0.2')
                .to('#escena_01 .caja .ojo1 .pupila',0.2,{x:-24},'+=0.1')
                .to('#escena_01 .caja .ojo2 .pupila',0.2,{x:-5},'-=0.2')
                .to('#escena_01 .caja .ojo1 .pupila',0.2,{x:0},'+=0.1')
                .to('#escena_01 .caja .ojo2 .pupila',0.2,{x:0},'-=0.2')
                .to('#escena_01 .caja .ojo1 .pupila',0.2,{x:-24})
                .to('#escena_01 .caja .ojo2 .pupila',0.2,{x:-5},'-=0.2')
                .to('#escena_01 .caja .ojo1 .pupila',0.2,{x:0})
                .to('#escena_01 .caja .ojo2 .pupila',0.2,{x:0},'-=0.2')
                 .addCallback(function(){
                
                },'+=1.2')
            ;
        }
        ANIM.tl_ojos_asustado_pinon_esc1.play();  
    },
    waitForanimaMosca:() => {
        if(!ANIM.tl_animaMosca){
            ANIM.tl_animaMosca = new TimelineMax({onComplete:function(){ANIM.animaMosca();}});
         let t = 2
         let o = {val:0};
            ANIM.tl_animaMosca
                .to(o,t,{val:1})
            ;
        }
        ANIM.tl_animaMosca.play(0);
    },
    animaMosca:() => {
        TweenMax.to('#escena_01 .mosca .ala1',0.07, {rotation:70, repeat:-1, yoyo:true,transformOrigin:'175px 20px'});
        TweenMax.to('#escena_01 .mosca .ala2',0.07, {rotation:-70, repeat:-1, yoyo:true,transformOrigin:'20px 70px'});
        ANIM.mueveMosca();
    },
    mueveMosca:() => {
        let t = Utils.randomInt(300,3000)/1000;
        let r = Utils.randomInt(0,55)-10;
        let x = Utils.randomInt(0,600)-300;
        let y = Utils.randomInt(0,400)-100;
        
        TweenMax.to('#escena_01 .mosca',t,{rotation:r, x:x,y:y, onComplete:function(){
            ANIM.mueveMosca();
        }});
    },
    animaOjosPinonEsc3:() => {
        if(!ANIM.tl_ojos_pinon_esc3){
            ANIM.tl_ojos_pinon_esc3 = new TimelineMax({repeat:-1});
            ANIM.tl_ojos_pinon_esc3
                .fromTo('#escena_02 .ojo',0.1,{alpha:1},{alpha:0})
                .to('#escena_02 .ojo',0.1,{alpha:1})
                .to('#escena_02 .ojo',0.1,{alpha:0},'+=7')
                .to('#escena_02 .ojo',0.1,{alpha:1})
                .to('#escena_02 .ojo',0.1,{alpha:0},'+=1')
                .to('#escena_02 .ojo',0.1,{alpha:1})
                
            ;
        }
        ANIM.tl_ojos_pinon_esc3.play();  
    },
    pauseEscenas:() => {
        //1 triple amenaza
        TweenMax.killTweensOf("#escena_01 .mosca .ala1");
        TweenMax.killTweensOf("#escena_01 .mosca .ala2");
        TweenMax.killTweensOf("#escena_01 .mosca");
        TweenMax.set("#escena_01 .mosca .ala1",{rotation:0,transformOrigin:'175px 20px'});
        TweenMax.set("#escena_01 .mosca .ala2",{rotation:0,transformOrigin:'20px 70px'});
        TweenMax.set("#escena_01 .mosca",{rotation:0,x:700});
        try{  ANIM.tl_ojos_guagua_esc1.pause();   }  catch (err){}
        try{  ANIM.tl_ojos_pinon_esc1.pause();   }  catch (err){}
        try{  ANIM.tl_ojos_asustado_pinon_esc1.pause();   }  catch (err){}
        try{  ANIM.tl_chupete_guagua_esc1.pause();   }  catch (err){}
        try{  ANIM.tl_animaMosca.pause();   }  catch (err){}
        //2 lluvia
        ANIM.estalloviendo = false;
        try{  ANIM.tl_ojos_pinon_esc3.pause();   }  catch (err){}
        try{  ANIM.anim_tiriton.pause();   }  catch (err){}
        //aguilucho grita
        try{  ANIM.anim_final_esc_4.pause();   }  catch (err){}
        //suspiro piñoncito
        try{  ANIM.anim_final_esc_5.pause();   }  catch (err){} 
        //aguilucho grita 2
        try{  ANIM.anim_final_esc_6.pause();   }  catch (err){}
        //autoplay aguila
        try{  ANIM.anim_final_esc_7.pause();   }  catch (err){}
    },
    truena:() => {
        Player.playSoundFX('trueno');
        TweenMax.to('#escena_02 .resplandor', 0.1,{alpha:1,delay:0.5});  
        TweenMax.to('#escena_02 .resplandor', 0.1,{alpha:0,delay:0.6});  
        TweenMax.to('#escena_02 .boca', 0.1,{alpha:0,delay:1});  
    },
    randomThunder:() => {
         if(ANIM.estalloviendo){
             let t = Utils.randomInt(300,15000)/1000;
             let o = {val:0};
             TweenMax.to(o,t,{val:1, onComplete:function(){
                 if(ANIM.estalloviendo){
                     ANIM.truena();
                     ANIM.randomThunder();
                 }
             }});
         } 
    },
    tiriton:() => {
        if(!ANIM.anim_tiriton){
            ANIM.anim_tiriton = new TimelineMax({repeat:-1});
            ANIM.anim_tiriton
                .to('#escena_02 .pinoncito',0.1,{x:4})
                .to('#escena_02 .pinoncito',0.1,{x:-4,repeat:15,yoyo:true})
                .to('#escena_02 .pinoncito',0.1,{x:0})
                .to('#escena_02 .pinoncito',0.1,{x:4},'+=3.7')
                .to('#escena_02 .pinoncito',0.1,{x:-4,repeat:7,yoyo:true})
                .to('#escena_02 .pinoncito',0.1,{x:0})
                 .addCallback(function(){
                
                },'+=1.2')
            ;
           }
        ANIM.anim_tiriton.play();
    },
    estalloviendo:false,
    makeItRain:(escena = '#escena_02', maxW = 1920, maxY = 1080) => {
        ANIM.estalloviendo = true;
        $(escena+' .gota').each(function(i){
            ANIM.caeGota($(this),maxW,maxY);
        });
    },
    caeGota:(gota,maxW,maxY) => {
        let t = Utils.randomInt(800,3000)/1000;
        let d = Utils.randomInt(800,3000)/1000;
        let s = Utils.randomInt(400,1000)/1000;
        let h = gota.height();
        let w = gota.width();
        let y = 0;
        let x = Utils.randomInt(0,maxW)-w*0.5;
        TweenMax.set(gota, {y:y, x:x, scale:s, alpha:1});
        TweenMax.to(gota,t,{y:maxY+h, delay:d, ease:Power0.easeNone, onComplete:function(g,mx,my){
            ANIM.caeGota(g,mx,my);
        },onCompleteParams:[gota,maxW,maxY]});
    },
    finEscena4:() => {
        if(!ANIM.anim_final_esc_4){
            ANIM.anim_final_esc_4 = new TimelineMax();
            let o = {val:0};
            
            ANIM.anim_final_esc_4

            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('aguilucho');
            },'+=2')
            .to(o, 2,{val:100})
            .addCallback(function(){
                ANIM.interactividad(4);
                Player.activaBtnSiguiente();  
            })
            .addLabel('final')
            ;
        }
        ANIM.anim_final_esc_4.play(0);
    },
    finEscena5:() => {
        if(!ANIM.anim_final_esc_5){
            ANIM.anim_final_esc_5 = new TimelineMax();
            let o = {val:0};
            
            ANIM.anim_final_esc_5

            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('suspiroB');
            },'+=2')
            .to(o, 2,{val:100})
            .addCallback(function(){
                ANIM.interactividad(5);
                Player.activaBtnSiguiente();  
            })
            .addLabel('final')
            ;
        }
        ANIM.anim_final_esc_5.play(0);
    },
    finEscena6:() => {
        if(!ANIM.anim_final_esc_6){
            ANIM.anim_final_esc_6 = new TimelineMax();
            let o = {val:0};
            
            ANIM.anim_final_esc_6

            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('aguilucho');
            },'+=2')
            .to(o, 2,{val:100})
            .addCallback(function(){
                ANIM.interactividad(6);
                Player.activaBtnSiguiente();  
            })
            .addLabel('final')
            ;
        }
        ANIM.anim_final_esc_6.play(0);
    },
    finEscena7:() => {
        if(!ANIM.anim_final_esc_7){
            ANIM.anim_final_esc_7 = new TimelineMax();
            let o = {val:0};
            
            ANIM.anim_final_esc_7

            .addLabel('inicio')
            .to(o, 2,{val:100})
            .addCallback(function(){
               ANIM.anim_interact_7_vuela.play(0);
            })
            .addLabel('final')
            ;
        }
        ANIM.anim_final_esc_7.play(0);
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
                 
                ANIM.main_tl.addLabel(`${i}_${j}`, desfase); // acá le pongo el label correspondiente al párrafo
                posicion += duracion; // reasigno posicion del siguiente con la duración del actual
            });
            tiempo = posicion+delayAcumulado; // le digo al tiempo que se sume todo lo anterior
            ANIM.main_tl.addLabel(`fin_escena_${i}`, tiempo); // así le asigno el final de la escena
            tiempo += espacioEntreEscenas; // dejo un par de seundo para que las escenas no se monten una arriba de otra
            delayAcumulado += espacioEntreEscenas; // y obviamnete se lo tengo que sumar al delay acumulado
            
        });
        
        ANIM.main_tl.addLabel('1_1_pestaneo_chupete','1_1-=1');
        ANIM.main_tl.addLabel('1_2_audio_risa','1_2-=9.3');
        ANIM.main_tl.add(TweenMax.fromTo('#escena_01 .guagua',37, {scale:0.8,y:0,x:0},{
            
                                             bezier:{curviness:1.25,
                                                     values:[
                                                                {scale:0.5, y:-50, x:500},
                                                                {scale:0.3, y:-250, x:0}
                                                         ]
                                                    }
            , ease:Power0.easeNone
        }),'1_1+=0.3'); 
   
        ANIM.main_tl.add(TweenMax.fromTo('#escena_01 .fondo',37, { scale:2}, {scale:1 }),'1_1+=0.3'); 
        ANIM.main_tl.add(TweenMax.fromTo('#escena_01 .bicho',10, { x:-1100, y:300}, { x:0, y:0 }),'1_2-=1'); 
//        ANIM.main_tl.add(TweenMax.to('#escena_01 .guagua',10, {scale:0.3, y:-250, x:0, ease:Power1.easeIn}),'1_3+=0.3'); 
        ANIM.main_tl.add(TweenMax.to('#escena_01 .bicho',10, { scale:0.8, x:-80,y:100}),'1_3+=0.3'); 
        ANIM.main_tl.add(TweenMax.from('#escena_01 .caja',10, {scale:1.1, y:250, x:650}),'1_3+=0.3'); 
        
        ANIM.main_tl.addLabel('3_3_audio_resp1','3_3-=6.4');
        ANIM.main_tl.addLabel('3_3_audio_resp2','3_3-=5');
        ANIM.main_tl.addLabel('3_3_audio_vaca','3_3-=4');
        
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
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('olfateando');
            Player.resetSubtitulos();
        },"3_3_audio_resp1");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('olfateando');
        },"3_3_audio_resp2");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('mugido');
        },"3_3_audio_vaca");
        
        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_00');
            Player.playSoundFX('buho');
        },"escena_0"); 
             
        ANIM.main_tl.addCallback(function(){
            Player.activaBtnSiguiente();
            ANIM.main_tl.pause();
            ANIM.interactividad(0);
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_0");
        
       
        /*LLAMADAS Y FUNCIONES ESCENA 1*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_01');
        },"escena_1");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.animaOjosGuaguaEsc1();
            ANIM.animaOjosPinonEsc1();
            ANIM.animaChupeteGuaguaEsc1();
        },"1_1_pestaneo_chupete");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('risa');
        },"1_2_audio_risa");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
//            ANIM.interactividad(1);
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            
            ANIM.animaOjosGuaguaEsc1();
            ANIM.animaOjosPinonEsc1();
            ANIM.animaOjosAsustadoPinonEsc1();
            ANIM.waitForanimaMosca();
            ANIM.animaChupeteGuaguaEsc1();
            
            
            Player.playSoundFX('mosca',true);
            ANIM.fadeVolume('mosca',0,1,2);
        },"fin_escena_1");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_02');
            ANIM.animaOjosPinonEsc3();
        },"escena_2");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(2);
            ANIM.animaOjosPinonEsc3();
            ANIM.truena();
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
            ANIM.finEscena4();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_4");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 5*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_05');
        },"escena_5");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.finEscena5();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
//            console.log("fin_escena 5");
        },"fin_escena_5");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 6*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_06');
        },"escena_6");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.finEscena6();
//            ANIM.interactividad(6);
//            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_6");
        
        /*LLAMADAS Y FUNCIONES ESCENA 7*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_07');
        },"escena_7");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.finEscena7();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_7");
        
        /*LLAMADAS Y FUNCIONES ESCENA 8*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_08');
        },"escena_8");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
//            ANIM.interactividad(8);
            Player.playSoundFX('cancion_final',true);
            ANIM.anim_interact_8.play(0);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
//            console.log('FINAL');
        },"fin_escena_8");
        
       
        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
    },
    creaAnimInteractividad:() => {
        
        //
        ANIM.anim_interact_0 = new TimelineMax();
        ANIM.anim_interact_0
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('cancion_inicial');
            })
            .to('#escena_00 .luna', 30,{y:0,x:0})
            .to('#escena_00 .ojo', 0.1,{alpha:1})
            .to('#escena_00 .cara_luna', 0.5,{alpha:1},'+=1')
            .addCallback(function(){
                Player.playSoundFX('perro');
                Player.cambiaVolume('perro',0.5);
            },'-=2')
//            .to('#escena_00 .cara_luna', 0.5,{alpha:0},'+=3')
            
            .addLabel('final')
            
             ;
        ANIM.anim_interact_0.pause();
        
        //
        ANIM.anim_interact_2_lluvia = new TimelineMax();
        ANIM.anim_interact_2_lluvia
         
            .addLabel('inicio')
            .addCallback(function(){
                ANIM.truena();
                Player.playSoundFX('lluvia',true);
                ANIM.fadeVolume('lluvia',0,1,4);
                ANIM.makeItRain();
            })
            .addCallback(function(){
                ANIM.tiriton();
            },'+=3')
            .addCallback(function(){
                ANIM.waitForSound('pasos_charco',1,3.2,0,3.5);
                ANIM.waitForSound('ladridos',2,4,0,3.5);
                ANIM.randomThunder();
            },'+=2')
            
            .addLabel('final')
            
             ;
        ANIM.anim_interact_2_lluvia.pause();
        
        //BRAZO
        ANIM.anim_interact_3_brazo = new TimelineMax();
        ANIM.anim_interact_3_brazo
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.stopAudioParrafo();
                ANIM.waitForSound('olfateando',0.1,1,2,0.2);
            },'+=0.2')
            .to('#escena_03 .pupila1',1.2, {
                bezier:{curviness:0.25,
                 values:[
                            {x:2,y:-5},
                            {x:0,y:-5},
                            {x:-6,y:-5},
                            {x:-6,y:-5},
                            {x:0,y:0}
                     ]
                }, repeat:1, ease:Power0.easeNone
            })
            .to('#escena_03 .pupila2',1.2, {
                bezier:{curviness:0.25,
                 values:[
                            {x:8, y:-3},
                            {x:0, y:-5},
                            {x:-35, y:10},
                            {x:-35, y:10},
                            {x:0, y:0}
                     ]
                }, repeat:1, ease:Power0.easeNone
            },'-=2.4')
            .to('#escena_03 .brazo',0.22, {rotation:-7, scale:0.9,repeat:15,yoyo:true, transformOrigin:'30px 610px'})
            .to('#escena_03 .fondo2',1, {alpha:1})
            .to('#escena_03 .claro',1, {alpha:1},'-=1')
            .addCallback(function(){
                Player.playSoundFX('lluvia',true);
                ANIM.fadeVolume('lluvia',0,1,2);
            },'-=1')
            .to('#escena_03 .cubreboca',0.1, {alpha:1})
            .addCallback(function(){
                ANIM.makeItRain('#escena_03',805,536);
            })
            
            .addLabel('final')
            
             ;
        ANIM.anim_interact_3_brazo.pause();
        
        //AGUILA
        ANIM.anim_interact_4_aguila= new TimelineMax();
        ANIM.anim_interact_4_aguila
         
            .addLabel('inicio')
            .addCallback(function(){
                 Player.playSoundFX('aguilucho');
            })
            .addCallback(function(){
                 Player.playSoundFX('gritoA');
            },'+=2')
            .addCallback(function(){
                Player.playSoundFX('gritoB');
                ANIM.fadeVolume('gritoB',1,0,2);
//                ANIM.animaPajas();
            },'+=1')
            .to('#escena_04 .pajarito',7,{scale:0.2, x:-950, y:-25, transformOrigin:'top left'},'-=1')
            .to('#escena_04 .paja1',7, {x:-150, y:500, rotation:180},'-=7')
            .to('#escena_04 .paja2',7, {x:-350, y:800, rotation:-80},'-=7')
            .to('#escena_04 .paja3',7, {x:-350, y:400, rotation:-80},'-=6.8')
            .to('#escena_04 .paja4',7, {x:-350, y:400, rotation:80},'-=7')
            .to('#escena_04 .paja5',7, {x:-350, y:400, rotation:380},'-=6.8')
            .to('#escena_04 .paja6',7, {x:-350, y:400, rotation:-380},'-=7')
            .to('#escena_04 .paja7',7, {x:-350, y:400, rotation:-680},'-=7')
            .to('#escena_04 .paja8',0.1, {alpha:1},'-=6')
            .to('#escena_04 .paja8',7, {x:-150, y:800, rotation:380,ease:Power2.easeOut},'-=6')
            .to('#escena_04 .paja9',0.1, {alpha:1},'-=7')
            .to('#escena_04 .paja9',7, {x:-350, y:600, rotation:-780,ease:Power2.easeOut},'-=7')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_4_aguila.pause();
        
       //pluma
        ANIM.anim_interact_5_pluma= new TimelineMax();
        ANIM.anim_interact_5_pluma
         
            .addLabel('inicio')
            .addCallback(function(){
                 Player.playSoundFX('suspiro');
            })
            .to('#escena_05 .pluma', 1.5,{y:-660,rotation:40, transformOrigin:'280px -300px',ease:Power2.easeInOut})
            .to('#escena_05 .pluma', 1.5,{y:-400,rotation:-30, transformOrigin:'280px -300px',ease:Power2.easeInOut})
            .to('#escena_05 .pluma', 1.5,{y:-160,rotation:20, transformOrigin:'280px -300px',ease:Power2.easeInOut})
            .to('#escena_05 .pluma', 1.5,{y:-80,rotation:-10, transformOrigin:'280px -300px',ease:Power2.easeInOut})
            .to('#escena_05 .pluma', 1.5,{y:0,rotation:30, transformOrigin:'280px -300px',ease:Power2.easeInOut})
//            .to('#escena_05 .pluma', 10,{y:0},'-=10')
            .to('#escena_05 .ojo', 0.1,{alpha:1},'+=0.4')
            .to('#escena_05 .ojo', 0.1,{alpha:0},'+=2.5')
            .to('#escena_05 .ojo', 0.1,{alpha:1})
            .to('#escena_05 .ojo', 0.1,{alpha:0},'+=0.1')
            .to('#escena_05 .ojo', 0.1,{alpha:1})
            .to('#escena_05 .ojo', 0.1,{alpha:0},'+=0.1')
            .to('#escena_05 .ojo', 0.1,{alpha:1})
            .to('#escena_05 .ojo', 0.1,{alpha:0},'+=0.1')
            .to('#escena_05 .ojo', 0.1,{alpha:1},'+=1')
            .to('#escena_05 .ojo', 0.1,{alpha:0},'+=0.1')
            .addCallback(function(){
                 Player.playSoundFX('suspiroB');
            },'+=1').addCallback(function(){
//                
            },'+=1')
            .addLabel('final') 
            ; 
        
        ANIM.anim_interact_5_pluma.pause();
        
       //aguila serpiente
        ANIM.anim_interact_6_aguilucho= new TimelineMax();
        ANIM.anim_interact_6_aguilucho
            .addLabel('inicio')
            .addCallback(function(){
                 Player.playSoundFX('serpiente');
            })
            .to('#escena_06 .ojo', 0.1, {alpha:0})
            .to('#escena_06 .parpado', 0.1, {alpha:1},'-=0.1') 
            .to('#escena_06 .ojo', 0.1, {alpha:1},'+=0.2')
            .to('#escena_06 .parpado', 0.1, {alpha:0},'-=0.1')
            .addCallback(function(){
                 Player.playSoundFX('piopio');
            })
            .to('#escena_06 .ojo', 0.1, {alpha:0})
            .to('#escena_06 .parpado', 0.1, {alpha:1},'-=0.1')
            .to('#escena_06 .ojo', 0.1, {alpha:1},'+=2')
            .to('#escena_06 .parpado', 0.1, {alpha:0},'-=0.1')
            .to('#escena_06 .ojo', 0.1, {alpha:0},'+=1')
            .to('#escena_06 .parpado', 0.1, {alpha:1},'-=0.1')
            .to('#escena_06 .ojo', 0.1, {alpha:1},'+=0.5')
            .to('#escena_06 .parpado', 0.1, {alpha:0},'-=0.1')
            .to('#escena_06 .aguila',6, {scale:1,rotation:0, transformOrigin:'center center', y:0,x:0})
            .to('#escena_06 .aguila .cerca',6, {alpha:1},'-=6')
            .addCallback(function(){
                Player.playSoundFX('aguilucho');
                ANIM.fadeVolume('piopio',1,0,2);
            },'-=5').addCallback(function(){
            
            },'+=1')
            .addLabel('final')
            ;
        ANIM.anim_interact_6_aguilucho.pause();
        
       //volando
        ANIM.anim_interact_7_vuela = new TimelineMax();
        ANIM.anim_interact_7_vuela
            .addLabel('inicio')
            .addCallback(function(){
                 Player.playSoundFX('aguilucho');
            })
            .addCallback(function(){
                 Player.playSoundFX('musica_vuela');
            },'+=1')
            .to('#escena_07 .pajarito', 6, {x:-2000, y:200, scaleX:1, scaleY:1},'-=1')
            .to('#escena_07 .pajarito', 0.2, {x:-1500, y:-500, scaleX:-0.2, scaleY:0.2})
            .to('#escena_07 .pinon', 0.2, {alpha:1})
            .to('#escena_07 .pajarito', 12, {x:2000, y:-300, scaleX:-0.6, scaleY:0.6,ease:Power0.easeNone})
            .to('#escena_07 .pajarito', 0.2, {x:1500, y:-200, scaleX:0.95, scaleY:0.95})
            .to('#escena_07 .pajarito', 6, {x:0, y:0, scaleX:1, scaleY:1})
            .addCallback(function(){
                ANIM.interactividad(7);
                Player.activaBtnSiguiente(); 
            })
            .addCallback(function(){
                Player.playSoundFX('aguilucho');
                Player.cambiaVolume('aguilucho',0.3);
            },'-=17')
            .addCallback(function(){
                Player.playSoundFX('yupi');
                Player.cambiaVolume('yupi',0.6);
            },'-=13')
            .addCallback(function(){
                Player.playSoundFX('aguilucho');
                Player.cambiaVolume('aguilucho',0.6);
               
            },'-=8')
            
//        TweenMax.set('#escena_07 .pinon', {alpha:0});
//        TweenMax.set('#escena_07 .pajarito', {alpha:0, x:0, y:0, rotation:0, scaleX:1, scaleY:1});
            .addLabel('final')
            ;
        ANIM.anim_interact_7_vuela.pause();
        
        ///FINAL LUNA
        
        ANIM.anim_interact_8 = new TimelineMax();
        ANIM.anim_interact_8
         
            .addLabel('inicio')
            .to('#escena_08 .luna', 3,{y:0,x:0,alpha:1},'+=2')
            .to('#escena_08 .cara_luna', 2,{alpha:1},'+=3')
            .to('#escena_08 .fin', 2,{alpha:1},'+=16')
            .addLabel('final')
            ;
        
        ANIM.anim_interact_8.pause();
       
        ANIM.arr_interacts = [
            ANIM.anim_interact_0,
            ANIM.anim_interact_2_lluvia,
            ANIM.anim_interact_3_brazo,
            ANIM.anim_interact_4_aguila,
            ANIM.anim_interact_5_pluma,
            ANIM.anim_interact_6_aguilucho,
            ANIM.anim_interact_7_vuela,
            ANIM.anim_interact_8,
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
        
        TweenMax.set('#escena_00 .luna', {y:600,x:150});
        TweenMax.set('#escena_00 .cara_luna', {alpha:0});
        TweenMax.set('#escena_00 .ojo', {alpha:0});
        
        TweenMax.set('#escena_01 .guagua .parpado',{alpha:0});
        TweenMax.set('#escena_01 .guagua .pinon3',{rotation:15});
        
        TweenMax.set('#escena_02 .resplandor', {alpha:0});
        TweenMax.set('#escena_02 .boca', {alpha:1});
        TweenMax.set('#escena_02 .pinoncito', {scale:1.1,x:0,y:0});
        TweenMax.killTweensOf("#escena_02 .gota");
        TweenMax.set('#escena_02 .gota', {y:0, alpha:0});
        
        TweenMax.killTweensOf("#escena_03 .gota");
        TweenMax.set('#escena_03 .gota', {y:0, alpha:0});
        TweenMax.set('#escena_03 .fondo2', {alpha:0});
        TweenMax.set('#escena_03 .cubreboca', {alpha:0});
        TweenMax.set('#escena_03 .brazo .claro', {alpha:0});
        TweenMax.set('#escena_03 .pupila1', {x:0,y:0});
        TweenMax.set('#escena_03 .pupila2', {x:0,y:0});
        
        
        TweenMax.set('#escena_04 .pajarito', {scale:1, x:0, y:0, transformOrigin:'top left'});
        TweenMax.set('#escena_04 .paja8', {alpha:0});
        TweenMax.set('#escena_04 .paja9', {alpha:0}); 
        
        
        TweenMax.set('#escena_05 .pluma', {y:-880, rotation:0, transformOrigin:'280px -300px'}); 
        TweenMax.set('#escena_05 .ojo', {alpha:0});
        
        TweenMax.set('#escena_06 .aguila',{scale:0.2,rotation:-20, transformOrigin:'center center', y:-300,x:-150});
        TweenMax.set('#escena_06 .aguila .cerca', {alpha:0});
        TweenMax.set('#escena_06 .ojo', {alpha:1});
        TweenMax.set('#escena_06 .parpado', {alpha:0});
        
        TweenMax.set('#escena_07 .pinon', {alpha:0});
        TweenMax.set('#escena_07 .pajarito', {x:0, y:0, rotation:0, scaleX:1, scaleY:1});
        
//        TweenMax.set('#escena_08 .luna', {x:70,y:350});
        TweenMax.set('#escena_08 .luna', {alpha:0});
        TweenMax.set('#escena_08 .luna .cara_luna', {alpha:0});
        TweenMax.set('#escena_08 .fin', {alpha:0});
       
        ANIM.pauseEscenas();
        ANIM.pauseWaitSound();
        
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
                 
                break;
            case 2:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
//                        ANIM.anim_interact_2_lluvia.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_lluvia.play(0);
                    });
                 }
                 break;
             case 3:
                 if(btn.hasClass('primario')){
                     btn.click(function(){
                        $(this).css({"display":"none"});
                            ANIM.setIniciales();
                            ANIM.anim_interact_3_brazo.eventCallback("onComplete", muestralo, [$(this), cb]);   
                            ANIM.anim_interact_3_brazo.play(0);
                        });
                    }
                 break;
            case 4:
                 if(btn.hasClass('primario')){
                     btn.click(function(){
                        $(this).css({"display":"none"});
                            ANIM.anim_interact_4_aguila.eventCallback("onComplete", muestralo, [$(this), cb]);   
                            ANIM.anim_interact_4_aguila.play(0);
                        });
                    }
                 break;
             case 5:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_5_pluma.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_5_pluma.play(0);
                    });
                 }
                 break;
            case 6:
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_6_aguilucho.eventCallback("onComplete", muestralo, [$(this), cb]); 
                        ANIM.anim_interact_6_aguilucho.play(0);
                    });
                }
                 break;
             case 7:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_7_vuela.eventCallback("onComplete", muestralo, [$(this), cb]); 
                        ANIM.anim_interact_7_vuela.play(0);
                    });
                }
                 break;
             case 8:
                    btn.click(function(){
                        $(this).css({"display":"none"});  
                        ANIM.anim_interact_8.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_8.play(0);
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