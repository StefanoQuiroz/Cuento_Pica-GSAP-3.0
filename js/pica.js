let JSON_CUENTO = {
    nombre:"Pica, la flor del desierto",
    tipo:"Mitos y leyendas - Cuento de amor",
    descripcion:"¿Sabías que en Chile existe uno de los desiertos más secos del mundo? Hace mucho tiempo, en ese desierto, había un pueblo pequeño cuyos habitantes se esforzaban por conseguir agua para subsistir. Un día, unos extranjeros llegaron a establecerse cerca de allí. Eran diferentes. <br>Una noche, Dámaso, un joven de la aldea de los extranjeros conoció a Wakatay, la hija del cacique.Tras varios encuentros, se enamoraron y pidieron al cacique autorización para casarse. Disgustado, este encomendó a Dámaso una misión imposible: “Habrá matrimonio si haces florecer este valle desierto”. En esta leyenda nortina conocerás cómo fue que el valle de Pica llegó a florecer.",
    creditos:[
                ["Texto:","Bernardita Bravo Pelizzola"],
                ["Ilustraciones:","Fabián Rivas Henríquez"],
                ["Narración:","Álvaro Rudolphy Fontaine"],
                ["Arreglos musicales:","Jorge Mercado Pino"],
                ["Edición a cargo de:","Constanza Ried Silva<br>Verónica Vives Cofré<br>Fundación Entrelíneas"],
                ["Montaje y desarrollo web:","Agencia Match"],
                ["Créditos de sonidos:","Revise detalles <a href='#' target='_blank'>aquí</a>"] 
    ],
    ID:0, 
    imagenes:[
        "img/pica/esc_0_fondo.jpg",
        "img/pica/esc_2_fondo.jpg",
        "img/pica/esc_3_fondo.jpg",
        "img/pica/esc_4_fondo.jpg",
        "img/pica/esc_5_fondo.jpg",
        "img/pica/esc_6_fondo.jpg",
        "img/pica/esc_7_fondo.jpg",
        "img/pica/tierra.jpg",
        "img/pica/tooltip_drag_3.jpg",
        "img/pica/spriteA.png",
        "img/pica/spriteB.png",
        "img/pica/spriteC.png",
        "img/pica/brillo_dimming.png",
        "img/pica/contraportada.jpg",
    ], 
    fx_sonido:[
        {nombre:"musica_intro",url:"audio/pica/fx/musica_intro2.mp3"},
        {nombre:"musica_pueblo",url:"audio/pica/fx/musica_pueblo.mp3"},
        {nombre:"pueblo_mezcla",url:"audio/pica/fx/pueblo_mezcla.mp3"},
        {nombre:"musica_caminando",url:"audio/pica/fx/musica_caminando.mp3"},
        {nombre:"musica_alegre",url:"audio/pica/fx/musica_alegre.mp3"},
        {nombre:"viento_10",url:"audio/pica/fx/viento_10.mp3"},
        {nombre:"canto_wakatai_corto",url:"audio/pica/fx/canto_wakatai_corto.mp3"},
        {nombre:"canto_wakatai_largo",url:"audio/pica/fx/canto_wakatai_largo.mp3"},
        {nombre:"pajaritos",url:"audio/pica/fx/pajaritos.mp3"},
        {nombre:"risa_hombre_a",url:"audio/pica/fx/risa_hombre_a.mp3"},
        {nombre:"risa_mujer_a",url:"audio/pica/fx/risa_mujer_a.mp3"},
        {nombre:"risa_mujer_b",url:"audio/pica/fx/risa_mujer_b.mp3"},
        {nombre:"risa_mujer_c",url:"audio/pica/fx/risa_mujer_c.mp3"},
        {nombre:"risa_mujer_d",url:"audio/pica/fx/risa_mujer_d.mp3"},
        {nombre:"risa_mujer_e",url:"audio/pica/fx/risa_mujer_e.mp3"},
        {nombre:"suspiro",url:"audio/pica/fx/suspiro.mp3"},
        {nombre:"agua_corriendo_a",url:"audio/pica/fx/agua_corriendo_a.mp3"},
        {nombre:"musica_final",url:"audio/pica/fx/musica_final.mp3"},
        {nombre:"risa_nenita",url:"audio/pica/fx/risa_nenita.mp3"},
    ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/pica/mini_0.jpg",
            audio:"audio/pica/escena_01.mp3",
            parrafos:
            [
                {
                    texto: '¿Sabías que en Chile existe uno de los desiertos más secos del mundo?',
                    tiempo:[0,5,9.5] //musica intro 
                },
                {
                    texto: 'Hace mucho tiempo, en ese desierto, había un pueblo pequeño.',
                    tiempo:[5.5,11.5,2] 
                },
                {
                    texto: 'Sus habitantes vivían en cabañas de madera, barro y caña.',
                    tiempo:[12,16,1.5]
                },
                {
                    texto: 'Se esforzaban por conseguir agua para subsistir entre montes de roca, altas dunas de arena, valles pedregosos y áridos caminos.',
                    tiempo:[16.5,26,1] 
                },
                
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/pica/mini_1.jpg",
            audio:"audio/pica/escena_02.mp3",
            parrafos:
            [
                {
                    texto: 'Un día, unos extranjeros llegaron a establecerse cerca de allí.',
                    tiempo:[0,5.5,2] //musica intro 2
                },
                {
                    texto: 'Eran diferentes.',
                    tiempo:[6,7.5,1] 
                },
                {
                    texto: 'Llegaron montados sobre grandes animales, construyeron casas de dos pisos,',
                    tiempo:[8,14.2,0.5] 
                },
                {
                    texto: 'y una torre muy alta con una cruz en su punta.',
                    tiempo:[14.7,18.2,0.3] 
                },
                {
                    texto: 'Traían árboles de dulces frutos con los que hacían vino,',
                    tiempo:[18.7,22,10] // <--- 10 segundos de viento
                },
                {
                    texto: 'y obtenían riquezas de una mina de plata.',
                    tiempo:[22.5,25,0.5] 
                },
                {
                    texto: 'Hablaban una lengua incomprensible.',
                    tiempo:[25.5,28.5,1] 
                },
                {
                    texto: 'Pero a pesar de las diferencias, los dos pueblos tenían algo en común:',
                    tiempo:[29,34.5,1.5] 
                },
                {
                    texto: 'el árido desierto que los envolvía, majestuoso e imponente,',
                    tiempo:[35,39.5,1.3] 
                },
                {
                    texto: 'como si escondiera un secreto.',
                    tiempo:[40,42,0.8] 
                },
                
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/pica/mini_2.jpg",
            audio:"audio/pica/escena_03.mp3",
            parrafos:
            [
                {
                    texto:'Una noche, Dámaso, un joven de la aldea de los extranjeros al que le gustaba caminar y oír el sonido de sus pasos,',
                    tiempo:[0,8.6,2] 
                },
                {
                    texto:'se encontró con una joven que cantaba bajo la luz de la luna.',
                    tiempo:[9.1,13.2,0.5]
                },
                {
                    texto:'Sus miradas se cruzaron, pero no se atrevieron a hablar.',
                    tiempo:[13.7,18,19] /// <-- canto wakatai
                },
                {
                    texto:'La noche siguiente se vieron de nuevo. Esta vez, ella le sonrió.',
                    tiempo:[18.5,24.5,1.4] 
                },
                {
                    texto:'“Yo, Wakatay”, le dijo suavemente. Dámaso le devolvió la sonrisa.',
                    tiempo:[25,32.5,1] 
                },
                
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/pica/mini_3.jpg",
            audio:"audio/pica/escena_04.mp3",
            parrafos:
            [
                {
                    texto: 'Los días siguientes volvieron a encontrarse.',
                    tiempo:[0,3.5,2]
                },
                {
                    texto: 'Wakatay cantaba y recogía pequeñas piedras. Dámaso se sentaba a su lado y la miraba jugar.',
                    tiempo:[4,11,0.5]
                },
                {
                    texto: 'Descubrió que ella conocía varias palabras en español, el idioma que él hablaba,',
                    tiempo:[11.5,17.3,1.2]
                },
                {
                    texto: 'y Wakatay le enseñó a nombrar las estrellas y montañas en su propia lengua.',
                    tiempo:[17.8,23,0.5] 
                },
                {
                    texto: 'Se sentían felices juntos.',
                    tiempo:[23.5,25.5,1] 
                },
                {
                    texto: 'Una noche, al despedirse, ella le regaló una flor.',
                    tiempo:[26,31,1.5]
                },    
                {
                    texto: 'Dámaso se fue a dormir con la flor aferrada a su mano.',
                    tiempo:[31.5,35.5,0.5]
                },                
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/pica/mini_4.jpg",
            audio:"audio/pica/escena_05.mp3",
            parrafos:
            [
                {
                    texto: 'Wakatay y Dámaso decidieron casarse.',
                    tiempo:[0,3.5,2] 
                },
                {
                    texto: 'Wakatay era la hija del cacique, un hombre serio que hablaba poco.',
                    tiempo:[4,8.6,0.5]
                },
                {
                    texto: 'Los jóvenes se presentaron ante él para pedirle su aprobación.',
                    tiempo:[9.1,12.5,1.4]
                },
                {
                    texto: 'El cacique se disgustó.',
                    tiempo:[13,14.5,1.5]
                },
                {
                    texto: 'Amaba a su pequeña hija y ese extranjero no le daba confianza.',
                    tiempo:[15,19,1]
                },
                {
                    texto: 'Le encomendó, entonces, una misión imposible:',
                    tiempo:[19.5,23.5,0.5]
                },
                {
                    texto: '–Habrá matrimonio si haces florecer este valle desierto –dijo, y se retiró lentamente.',
                    tiempo:[24,31.5,1.5]
                },
                {
                    texto: 'Desesperado y triste, Dámaso se internó sin rumbo por la pampa.',
                    tiempo:[32,37.5,2]
                },
                {
                    texto: 'Caminó por horas, hasta no saber dónde estaba ni cuánto tiempo había pasado.',
                    tiempo:[38,43,19] // musica
                },
                {
                    texto: 'Cansado, se recostó a la sombra de un tamarugo y se durmió.',
                    tiempo:[43.5,49,1.3]
                },
                {
                    texto: 'Soñó que escuchaba el sonido de un manantial que corría bajo la tierra.',
                    tiempo:[49.5,54,2.5]
                },
                
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/pica/mini_5.jpg",
            audio:"audio/pica/escena_06.mp3",
            parrafos:
            [
                {
                    texto: 'Cuando Dámaso despertó, el sonido del agua seguía ahí.',
                    tiempo:[0,5,4] // viento 10 segundos
                },
                {
                    texto: 'Extrañado, lo fue siguiendo hasta que llegó a una cocha, una pequeña piscina natural alimentada de agua subterránea que no conocía.',
                    tiempo:[5.5,15.5,1.3]
                },
                {
                    texto: 'Una misteriosa fuerza se apoderó de él: no le importaba cuán lejos estuviera el valle ni cuánto tiempo le tomara.',
                    tiempo:[16,24.5,1.4]
                },
                {
                    texto: 'Construiría un canal lo suficientemente largo para llegar allá con el agua y hacerlo florecer.',
                    tiempo:[25,32,0.9]
                },
                {
                    texto: 'Feliz, corrió a contarle a Wakatay sobre su descubrimiento.',
                    tiempo:[32.5,38.9,0.5]
                },
            ]
        },
        {
            nombre:"Escena 7",
            miniatura:"img/pica/mini_6.jpg",
            audio:"audio/pica/escena_07.mp3",
            parrafos:
            [
                {
                    texto: 'La decisión de Dámaso y Wakatay hizo posible que el milagro ocurriera:',
                    tiempo:[0,6,2]
                },
                {
                    texto: 'el valle floreció hasta convertirse en un hermoso oasis en medio del desierto.',
                    tiempo:[6.5,13.5,1.5]
                },
                {
                    texto: 'No solo se llenó de verde, sino que de exquisitas y fragantes frutas como mangos, guayabas, pomelos, naranjas, y pequeños limones.',
                    tiempo:[14,26.5,0.5]
                },
                
            ]
        },
        {
            nombre:"Escena 8",
            miniatura:"img/pica/mini_7.jpg",
            audio:"audio/pica/escena_08.mp3",
            parrafos:
            [
                {
                    texto:'Cuando los jóvenes volvieron a presentarse ante el padre de Wakatay, el cacique, frunciendo el ceño, solamente dijo: –Hay casamiento.',
                    tiempo:[0,11,2] 
                },
                {
                    texto:'Los habitantes de ambos pueblos celebraron juntos con una hermosa fiesta llena de colores, música, danza y abundante comida.',
                    tiempo:[11.5,21,1.4] 
                },
                {
                    texto:'Y dieron un nuevo nombre al pueblo de Wakatay: lo llamaron Pica, que en quechua significa Flor en la arena.',
                    tiempo:[21.5,32,0.5] 
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
//        let cont = $('#escena_05 .pastos');
//        let arrPasto = Array(75).fill(75);
        let arrLetras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S'];
//        cont.append(ANIM.creaElementos(arrPasto, arrLetras,'pasto','B'));
        
        let cont = Select.getContainer('escena_05', 'pastos');
        cont.insertAdjacentHTML('beforeend', ANIM.creaElementos(75, arrLetras, 'pasto', 'B'));
        
//        let cont2 = $('#escena_02 .estrellas');
//        let arrEstrellas2 = Array(35).fill(35);
        let arrLetrasB = ['A','B','C','D','E','F','G','H','I','J'];
//        cont2.append(ANIM.creaEstrellas(arrEstrellas2, arrLetrasB));
        let cont2 = Select.getContainer('escena_02', 'estrellas');
        cont2.insertAdjacentHTML('beforeend', ANIM.creaEstrellas(35, arrLetrasB));
        
//        cont2.find('.estrella').each(function(i){
//            ANIM.escalaEstrella($(this),20,60);
//            ANIM.ponEstrellaEnRect($(this),0,1920,0,400);
//        });
        
        let estrellas = document.getElementById(`escena_02`).getElementsByClassName('estrellas')[0].querySelectorAll('.estrella');
        estrellas.forEach((item, i) => {
            ANIM.escalaEstrella(item,20,60);
            ANIM.ponEstrellaEnRect(item,0,1920,0,400);
        });
        
//        let contPajaritos = $('#escena_05 .pajaritos');
//        let arrPajaritos = Array(4).fill(4);
//        contPajaritos.append(ANIM.creaPajaritos(arrPajaritos));
        let contPajaritos = Select.getContainer('escena_05', 'pajaritos');
        contPajaritos.insertAdjacentHTML('beforeend', ANIM.creaPajaritos(4));
        
//        /*IMPORTANTE NO TOCAR*/
//        ANIM.sobreescribeAudioFX(); // <--- Soluciona una nueva feature que le agregué al audio PLAYER (Player.cambiaVolume)
//        ANIM.sobreescribeCreditosFinal(); // <--- Soluciona una pifia que tenía el Plyer original (no detenía las interacciones al llegar al final del cuento)
//        ANIM.sobreescribePrevParrafo(); // <--- Soluciona una pifia que tenía el Player original (mostraba los botones de interacción al hacer atrás)
//        ANIM.sobreescribeOnBlur(); // <-- dejan de sonar los wait sounds
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
            gsap.set('body',{backgroundColor:'#E9EDF5'});
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
        let fade = gsap.timeline({onUpdate:function(){
            Player.cambiaVolume(cual, o.vol);
        }});
        
        fade.to(o, t,{vol:hasta});
        fade.play();
    },
    arrWaitSounds:[],
    waitForSound:(cual, waitFor=4, cuantoDura=14, cuantasVeces = 1, cuantoDejoAlFinal = 0, volume=1, fade = false, fadeFrom = 12, volFadeTo = 0) => {
        
        if(!ANIM[`wait_sound_${cual}`]){
            ANIM[`wait_sound_${cual}`] = gsap.timeline({repeat:cuantasVeces-1});
            
            let o = {val:0};
            let waitTL = `+=${waitFor}`;
            ANIM[`wait_sound_${cual}`]

            .addLabel('inicio')
            .call(function(){
                Player.playSoundFX(cual);
                Player.cambiaVolume(cual,volume);
            }, null, waitTL)
            .to(o, cuantoDura+cuantoDejoAlFinal,{val:100})
            .addLabel('final')
            ;
            
//            ANIM[`wait_sound_${cual}`].add(gsap.to(o, cuantoDura+cuantoDejoAlFinal,{val:100}),waitFor);   
            
            if(fade){
                ANIM[`wait_sound_${cual}`].call(function(){
                    ANIM.fadeVolume(cual,volume,volFadeTo, cuantoDura-fadeFrom);
                }, null, waitFor+fadeFrom);
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
    creaElementos:(cant, arr2, quecosa, cualSprite) => {
        let count = -1;
        let arr1 = Array(cant).fill(cant);
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
    creaEstrellas:(cant, arr2) => {
        let count = -1;
        let arr1 = Array(cant).fill(cant);
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
        gsap.set(div,{scale:s});
    },
    ponEstrellaEnRect:(div,minX=0,maxX=1920,minY=0,maxY=1080) => {
         gsap.fromTo(div,1,{alpha:1},{alpha:0, onComplete:function(d,maX,miX,miY,maY){
            let left = `${Utils.randomInt(miX,maX)}px`;
            let top = `${Utils.randomInt(miY,maY)}px`;
//            d.css({'left':left,'top':top});
            d.style.left = left;
            d.style.top = top;
            gsap.to(d,1,{alpha:1});
         },onCompleteParams:[div, minX, maxX, minY, maxY]});
        
    },
    animaNubes:(n_escena) => {
//        let arr = Array(3).fill(3);
        let arr = [...document.getElementById(`nubes${n_escena}`).getElementsByClassName('nube')];
        arr.map((item, i) => {
            ANIM.animaNube(n_escena,i+1);
        });
    },
    animaNube:(n_escena=1, cual = 1, primeraVez = true) => {
        let tweensActives = gsap.getTweensOf(`#escena_0${n_escena} .nube${cual}`);
        if(tweensActives.length === 0){
            let x = n_escena === 1 ? 9000 : 4000;
            let posXOrig = n_escena === 1 ? 0 : 600;
            let a = Utils.randomInt(20,70)/100;
            let t = Utils.randomInt(22000,65000)/1000;
            if(primeraVez && cual%2 === 0){
                posXOrig = n_escena === 1 ? Utils.randomInt(5000,7000): Utils.randomInt(2000,2400);
                t = t/2;
            }
            let top =  n_escena === 1 ? Utils.randomInt(0,1000)-300 : Utils.randomInt(0,400)-150 ;
            let delay = primeraVez ? 7/cual : 0.1;
            let s = n_escena === 1 ? Utils.randomInt(20,37)/10 : Utils.randomInt(50,100)/100 ;
            gsap.set(`#escena_0${n_escena} .nube${cual}`,{alpha:a, top:top, x:posXOrig, scale:s});
            if(primeraVez){
                gsap.set(`#escena_0${n_escena} .nube${cual}`,{alpha:0});
                gsap.to(`#escena_0${n_escena} .nube${cual}`, 3,{alpha:a, delay:delay});
            }
            gsap.to(`#escena_0${n_escena} .nube${cual}`,
                    t,
                    {
                        x:x,
                        ease:Power0.easeNone,
                        delay:delay,
                        onComplete:function(n,a){
                            ANIM.animaNube(n,a,false);
                        }, 
                        onCompleteParams:[n_escena,cual]
                    });
        }
    },
    animaOlas:(n_escena) => {
//        let arr = Array(3).fill(3);
        let arr = [...document.getElementById(`rio${n_escena}`).getElementsByClassName('ola')];
        arr.map((item, i) => {
            ANIM.animaOla(n_escena,i+1);
        });
    },
    animaOla:(n_escena=1, cual = 1, primeraVez = true) => {
        let tweensActives = gsap.getTweensOf(`#escena_0${n_escena} .ola${cual}`);
        if(tweensActives.length === 0){
            let x = -1920;
            let posXOrig = 1920;
            let t = Utils.randomInt(12000,25000)/1000;
            if(primeraVez && cual%2 === 0){
//                posXOrig = n_escena === 1 ? Utils.randomInt(5000,7000): Utils.randomInt(2000,2400);
                t = t/2;
            }
//            let h = $(`#escena_0${n_escena} .ola${cual}`).height();
            let h = document.getElementById(`escena_0${n_escena}`).getElementsByClassName(`ola${cual}`)[0].clientHeight;
            let y = Utils.randomInt(0, 180-h);
            let delay = 0.1;
           
            gsap.set(`#escena_0${n_escena} .ola${cual}`,{y:y, x:posXOrig});
            if(primeraVez){
                
            }
            gsap.to(`#escena_0${n_escena} .ola${cual}`,
                    t,
                    {
                        x:x,
                        ease:Power0.easeNone,
                        delay:delay,
                        onComplete:function(n,a){
                            ANIM.animaOla(n,a,false);
                        }, 
                        onCompleteParams:[n_escena,cual]
                    });
        }
    },
    animaRamas:(n_escena) => {
//        let arr = Array(3).fill(3);
        let arr = [...document.getElementById(`rio${n_escena}`).getElementsByClassName('rama')];
        arr.map((item, i) => {
            ANIM.animaRama(n_escena,i+1);
        });
    },
    animaRama:(n_escena=1, cual = 1) => {
        let tweensActives = gsap.getTweensOf(`#escena_0${n_escena} .rama${cual}`);
        if(tweensActives.length === 0){
            let x = -2100;
            let posXOrig = 0;
            let t = Utils.randomInt(12000,25000)/1000;
            let rIni = Utils.randomInt(0,360);
            let rFin = Utils.randomInt(0,360);
//            let h = $(`#escena_0${n_escena} .rama${cual}`).height();
            let h = document.getElementById(`escena_0${n_escena}`).getElementsByClassName(`rama${cual}`)[0].clientHeight;
            let y = Utils.randomInt(0, 180-h);
            let delay = 0.1;
           
            gsap.set(`#escena_0${n_escena} .rama${cual}`,{y:y, x:posXOrig,rotation:rIni});
           
            gsap.to(`#escena_0${n_escena} .rama${cual}`,
                    t,
                    {
                        x:x,
                        rotation:rFin,
                        ease:Power0.easeNone,
                        delay:delay,
                        onComplete:function(n,a){
                            ANIM.animaRama(n,a,false);
                        }, 
                        onCompleteParams:[n_escena,cual]
                    });
        }
    },
    arrEstrellaRect:[],
    cambiaEstrellaDeLugarRect:(id_cont = 'escena_00', class_cont = 'estrellas', minX=0, maxX=1920, minY=0, maxY=1080) => { 
//        let cont = $(str_cont);
        let cont = Select.getContainer(id_cont, class_cont);
//        let i = Utils.randomInt(1, cont.find('.estrella').length);
        let i = Utils.randomInt(1, cont.childElementCount);
        let estrella = `.estrella${i}`;
//        let div = cont.find(estrella);
        let div = cont.querySelectorAll(estrella)[0];
//        console.log(cont,i,estrella,div);
        ANIM.ponEstrellaEnRect(div, minX,maxX,minY, maxY);
    },
    animaCambiaDeLugarEstrellaRect:(escena = 'escena_03', cont = 'estrellas_fuera', minX=0, maxX=1920, minY=0, maxY=1080) => {
//        ANIM[`luna_jupiter_${cual}`]
        if(!ANIM[`anim_cambioDeLugarEstrellaRect${escena}_${cont}`]){
            ANIM[`anim_cambioDeLugarEstrellaRect${escena}_${cont}`] = gsap.timeline({repeat:-1});
            ANIM[`anim_cambioDeLugarEstrellaRect${escena}_${cont}`]
            .call(function(){
               ANIM.cambiaEstrellaDeLugarRect(escena, cont, minX, maxX, minY, maxY);
            }, null, '+=3');
            ANIM.arrEstrellaRect.push(ANIM[`anim_cambioDeLugarEstrellaRect${escena}_${cont}`]);
        }
        ANIM[`anim_cambioDeLugarEstrellaRect${escena}_${cont}`].play();
    },
    pauseCambiaDeLugarEstrellaRect:() => {
         ANIM.arrEstrellaRect.map((item, i) => {
            item.pause();
        });
    },
    creaPajaritos:(cant) => {
        let arr = Array(cant).fill(cant);
        let newArr = arr.map((item, i) => {
            return `<div class="pajarito pajarito${(i+1)}">
                        <div class="spriteB pajaritoA"></div>
                        <div class="spriteB pajaritoB"></div>
                        <div class="spriteB pajaritoC"></div>
                    </div>`;
        });
        return newArr.join("");
    },
    muevePajaritos:() => {
//        $('#escena_05 .pajarito').each(function(i){
        document.getElementById('escena_05').querySelectorAll('.pajarito').forEach((item,i) => {
           ANIM.aleteaPajarito(i);
           ANIM.muevePajarito(item);
        });
    },
    aleteaPajarito:(i) => {
        if(!ANIM['tl_aletea_pajarito_'+i]){
//            let pajaro = $('#escena_05 .pajarito'+(i+1));
            let pajaro = Select.getContainer('escena_05', `pajarito${(i+1)}`);
//            let a = pajaro.find('.pajaritoA');
//            let b = pajaro.find('.pajaritoB');
//            let c = pajaro.find('.pajaritoC');
            let a = pajaro.getElementsByClassName('pajaritoA')[0];
            let b = pajaro.getElementsByClassName('pajaritoB')[0];
            let c = pajaro.getElementsByClassName('pajaritoC')[0];
            let t = `+=${Utils.randomInt(30,70)/100}`;
            
            ANIM['tl_aletea_pajarito_'+i] = gsap.timeline({repeat:-1});
            ANIM['tl_aletea_pajarito_'+i]
                .to(b,0.1,{alpha:1})
            
                .fromTo(c,0.1,{alpha:0},{alpha:1},t)
                .to(b,0.1,{alpha:0},'-=0.1')
            
                .fromTo(a,0.1,{alpha:0},{alpha:1},t)
                .to(c,0.1,{alpha:0},'-=0.1')
            
                .to(c,0.1,{alpha:1},t)
                .to(a,0.1,{alpha:0},'-=0.1')
                
                .to(c,0.1,{alpha:0},t)
                .to(b,0.1,{alpha:1},'-=0.1')
            ;
        }
        ANIM['tl_aletea_pajarito_'+i].play();  
    },
    muevePajarito:(pajarito) => {
        let s1 = Utils.randomInt(40,100)/100;
        let s2 = s1-0.3;
        let top1 = Utils.randomInt(0,300)*-1;
        let top2 = top1 - Utils.randomInt(100,300);
        let t = 20/s1;
//        pajarito.css({'z-index':s1*100});
        pajarito.style.zIndex = s1*100;
//        $('#escena_05 .cerro').css({'z-index':(s1*100)+1000});
        document.getElementById('escena_05').querySelectorAll('.cerro').forEach(item => {
            item.style.zIndex = (s1*100)+1000;
        });
            
        gsap.set(pajarito,{scale:s1, x:0, y:top1, transformOrigin:'top left'});
        gsap.to(pajarito,t,{scale:s2, x:-2120, y:top2, transformOrigin:'top left', onComplete:function(p){
            ANIM.muevePajarito(p);
        }, onCompleteParams:[pajarito], ease:Power0.easeNone});
    },
    pausaPajaritos:() => {
//        $('#escena_05 .pajarito').each(function(i){
//            try{ ANIM['tl_aletea_pajarito_'+i].pause(); } catch (err){} //<--- pauso aleteo
//            gsap.killTweensOf($(this)); //<--- pauso traslación
//            gsap.set('#escena_05 .pajarito',{x:0, transformOrigin:'top left'}); // los devuelvo al punto de origen
//        });
         document.getElementById('escena_05').querySelectorAll('.pajarito').forEach( (item, i) => {
            try{ ANIM['tl_aletea_pajarito_'+i].pause(); } catch (err){} //<--- pauso aleteo
            gsap.killTweensOf(item); //<--- pauso traslación
            gsap.set('#escena_05 .pajarito',{x:0, transformOrigin:'top left'}); // los devuelvo al punto de origen
        });
    },
    ordenaPasto:(pastos) => {
//        pastos.each(function(i){
        pastos.forEach(item => {
            let l = Utils.randomInt(0, 1100);
            let b = Utils.randomInt(0, 80)*-1;
            let a = Utils.randomInt(20,100)/100;
//            $(this).css({'left':`${l}px`,'bottom':`${b}px`});
            item.style.left = `${l}px`;
            item.style.bottom = `${b}px`;

            gsap.set(item,{alpha:a});
        });
    },
    muevePasto:() => {
        ANIM.pausaPasto();
        let t = Utils.randomInt(250,1200)/1000;
        let r = Utils.randomInt(0,30)-15;
        gsap.to('#escena_05 .pelo1',t,{rotation:r/2*-1, transformOrigin:'40px 150px'});
        gsap.to('#escena_05 .pelo2',t,{rotation:r/2*-1, transformOrigin:'100px 0px'});
        gsap.to('#escena_05 .pastos .pasto',t,{rotation:r, transformOrigin:'50px 200px', stagger:0.005, onComplete:function(){ANIM.muevePasto();}});  
    }, 
    pausaPasto:() => {
        gsap.killTweensOf('#escena_05 .pastos .pasto'); 
        gsap.killTweensOf('#escena_05 .pelo1'); 
        gsap.killTweensOf('#escena_05 .pelo2'); 
    },
    pausaEscenas:() => {
        ANIM.pausaPajaritos();
        ANIM.pausaPasto();
        ANIM.pauseCambiaDeLugarEstrellaRect();
    },
    init:() => {
        ANIM.creapartes();

        Player.creaMainTL();
        
        
        ANIM.main_tl.add( gsap.fromTo('#escena_01 .interact',15,{scale:1, y:-1470, x:-5194},{scale:0.7, y:-820, x:0, transformOrigin:'0 0', ease:Power4.easeInOut }),'1_1-=2'); 
        ANIM.main_tl.add( gsap.fromTo('#escena_01 .interact .montana3',15,{x:200},{x:0, transformOrigin:'0 0', ease:Power4.easeInOut }),'1_1-=2'); 
        ANIM.main_tl.add( gsap.fromTo('#escena_01 .interact .montana1',15,{x:900},{x:0, transformOrigin:'0 0', ease:Power4.easeInOut }),'1_1-=2');
        
        ANIM.main_tl.add( gsap.fromTo('#escena_01 .interact .pueblo_espanol',10,{alpha:0},{alpha:1}),'1_4-=10'); 
        ANIM.main_tl.add( gsap.to('#escena_01 .interact',14.5,{scale:0.27, y:0, x:0, transformOrigin:'0 0'}),'1_7+=1'); 
        ANIM.main_tl.add( gsap.to('#escena_01 .interact .pueblo_nativo',14.5,{y:60}),'1_7+=1'); 
        ANIM.main_tl.add( gsap.to('#escena_01 .interact .pueblo_espanol',14.5,{y:60}),'1_7+=1'); 
        ANIM.main_tl.add( gsap.from('#escena_01 .interact .roca',14.5,{y:900}),'1_7+=1');
        
        ANIM.main_tl.add( gsap.from('#escena_01 .interact .montana2',9,{y:100}),'1_8+=0.1');
        
        
        ANIM.main_tl.addLabel('1_4_audio','1_4-=11');
        
        ANIM.main_tl.add(gsap.fromTo('#escena_02 .luna',9,{y:510, x:60},{y:0, x:0}),'2_2-=9');
        ANIM.main_tl.add(gsap.fromTo('#escena_02 .noche_oscura',3,{alpha:0.3},{alpha:0, ease:Power4.easeIn}),'2_2-=9');
        
        //lonco y paneo abajo
        ANIM.main_tl.add(gsap.to('#escena_04 .lonco',5,{alpha:0, scale:0.9, y:100, ease:Power4.easeIn, transformOrigin:'center bottom'}),'4_7+=2'); 
        ANIM.main_tl.add(gsap.fromTo('#escena_04 .interact',16,{y:-150},{y:-860, ease:Power4.easeInOut }),'4_7+=0.1');
        ANIM.main_tl.add(gsap.fromTo('#escena_04 .fondo',16,{y:-150},{y:-860, ease:Power4.easeInOut }),'4_7+=0.1');
        ANIM.main_tl.add(gsap.fromTo('#escena_04 .damaso',5,{alpha:0},{alpha:1}),'4_7+=15');
        
        
        ANIM.main_tl.addLabel('2_2_audio_canto','2_2-=18');
        ANIM.main_tl.addLabel('2_2_audio_fade_out','2_2-=9');
        
        ANIM.main_tl.addLabel('4_7_audio','4_7+=4');
        ANIM.main_tl.addLabel('4_7_resetSUBS','4_7+=6');
        ANIM.main_tl.addLabel('4_7_audio_fadeOut','4_7+=21');
        ANIM.main_tl.addLabel('5_0_audio_fade_out','5_0-=2');
        ANIM.main_tl.addLabel('6_1_vegetacion','6_1-=3');
        
     
        
        ANIM.main_tl.call(function(){
            Player.playSoundFX('viento_10');
            Player.resetSubtitulos();
        }, null, "1_4_audio");
        
        ANIM.main_tl.call(function(){
            Player.playSoundFX('canto_wakatai_corto');
            Player.resetSubtitulos();
        }, null, "2_2_audio_canto");
        ANIM.main_tl.call(function(){
           ANIM.fadeVolume('canto_wakatai_corto',1,0,9);
        }, null, "2_2_audio_fade_out");
        
        ANIM.main_tl.call(function(){
            Player.playSoundFX('musica_caminando');
        }, null, "4_7_audio");
        ANIM.main_tl.call(function(){
            ANIM.fadeVolume('musica_caminando',1,0,1.8);
        }, null, "4_7_audio_fadeOut");
        
        ANIM.main_tl.call(function(){
            Player.resetSubtitulos();
//            ANIM.animaOlas(4);
        }, null, "4_7_resetSUBS");
        
        ANIM.main_tl.call(function(){
           ANIM.fadeVolume('viento_10',1,0,2);
        }, null, "5_0_audio_fade_out");
        
        ANIM.main_tl.call(function(){
           ANIM.anim_interact_6_vegetacion.play(0);
        }, null, "6_1_vegetacion");
        
        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.call(function(){
            Player.hideOthersBut('escena_00');
            Player.playSoundFX('musica_intro');
        }, null, "escena_0");
     
        ANIM.main_tl.call(function(){
            Player.playSoundFX('musica_pueblo',true);
            Player.playSoundFX('pueblo_mezcla',true);
            Player.activaBtnSiguiente();
            ANIM.main_tl.pause();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        }, null, "fin_escena_0");
        
       
        /*LLAMADAS Y FUNCIONES ESCENA 1*/ //<-----------------------------------------------------
        ANIM.main_tl.call(function(){
            Player.hideOthersBut('escena_01');
//            Player.playSoundFX('intro_esc_2');
        }, null, "escena_1");

        ANIM.main_tl.call(function(){
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('musica_caminando',true);
            ANIM.animaNubes(1);
        }, null, "fin_escena_1");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.call(function(){
            Player.hideOthersBut('escena_02');
//            ANIM.animaEstrellasGrandes();
            ANIM.animaCambiaDeLugarEstrellaRect('escena_02','estrellas', 0, 1920, 0, 400);
        }, null, "escena_2");
        
        ANIM.main_tl.call(function(){
            ANIM.main_tl.pause();
//            ANIM.animaEstrellasGrandes();
            ANIM.interactividad(2);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            ANIM.animaCambiaDeLugarEstrellaRect('escena_02','estrellas', 0, 1920, 0, 400);
        }, null, "fin_escena_2");
        
       
         /*LLAMADAS Y FUNCIONES ESCENA 3*/ //<-----------------------------------------------------
        ANIM.main_tl.call(function(){
            Player.hideOthersBut('escena_03');
        }, null, "escena_3");
      
        ANIM.main_tl.call(function(){
            ANIM.main_tl.pause();
//            ANIM.interactividad(3);
            ANIM.interactividad(3, undefined, 'btn_drag');
            Player.playSoundFX('musica_alegre',true);
            // waitForSound:(cual, waitFor=4, cuantoDura=14, cuantasVeces = 1, cuantoDejoAlFinal = 0, volume=1, fade = false, fadeFrom = 12, volFadeTo = 0)
            ANIM.waitForSound('risa_hombre_a', Utils.randomInt(50,100)/10, 1.5, 0, Utils.randomInt(70,150)/10, 0.2);
            ANIM.waitForSound('risa_mujer_c', Utils.randomInt(100,200)/10, 0.94, 0, Utils.randomInt(70,150)/10, 0.8);
            ANIM.waitForSound('risa_mujer_d', Utils.randomInt(70,130)/10, 0.7, 0, Utils.randomInt(110,220)/10, 0.9);
            ANIM.waitForSound('risa_mujer_e', Utils.randomInt(20,50)/10, 4, 0, Utils.randomInt(170,350)/10, 0.5);
            ANIM.waitForSound('suspiro', Utils.randomInt(70,150)/10, 1.4, 0, Utils.randomInt(170,350)/10, 0.6);
 
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        }, null, "fin_escena_3");
        
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 4*/ //<-----------------------------------------------------
        ANIM.main_tl.call(function(){
            Player.hideOthersBut('escena_04');
        }, null, "escena_4");
        
        ANIM.main_tl.call(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(4);
            Player.activaBtnSiguiente();
            Player.playSoundFX('agua_corriendo_a',true);
            Player.playSoundFX('musica_caminando',true);
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
           
        }, null, "fin_escena_4");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 5*/ //<-----------------------------------------------------
        ANIM.main_tl.call(function(){
            Player.hideOthersBut('escena_05');
//            ANIM.ordenaPasto($('#escena_05 .pastos .pasto'));
            ANIM.ordenaPasto(Select.getContainer('escena_05', 'pastos').querySelectorAll('.pasto'));
            ANIM.muevePasto();
            Player.playSoundFX('viento_10');
        }, null,"escena_5");
        
        ANIM.main_tl.call(function(){
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('musica_alegre',true);

            ANIM.anim_interact_5_chinchilla.play(0);

            if(!ANIM.wait_tl_pajaritos){
                ANIM.wait_tl_pajaritos = gsap.timeline();
                ANIM.wait_tl_pajaritos
                .addLabel('inicio')
                .call(function(){
                    ANIM.waitForSound('pajaritos', 0, 18.1, 0, Utils.randomInt(70,150)/10, 0.4, true, 14);
                }, null, '+=5')
                .call(function(){
                   ANIM.muevePajaritos();
                }, null, '+=2')
                .addLabel('final')
                ;
            }
            ANIM.wait_tl_pajaritos.play(0);
            ANIM.muevePasto();
            console.log("fin_escena 5");
        }, null, "fin_escena_5");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 6*/ //<-----------------------------------------------------
        ANIM.main_tl.call(function(){
            Player.hideOthersBut('escena_06');
        }, null, "escena_6");

        ANIM.main_tl.call(function(){
            ANIM.main_tl.pause();
             Player.playSoundFX('musica_alegre',true);
            console.log(ANIM.anim_interact_6_vegetacion.paused());
             if(ANIM.anim_interact_6_vegetacion.paused()){
                ANIM.anim_interact_6_vegetacion.play(0);
            }
           
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        }, null, "fin_escena_6");
        
        /*LLAMADAS Y FUNCIONES ESCENA 7*/ //<-----------------------------------------------------
        ANIM.main_tl.call(function(){
            Player.hideOthersBut('escena_07');
        }, null, "escena_7");
        
        ANIM.main_tl.call(function(){
            ANIM.main_tl.pause();
//            ANIM.interactividad(7, Player.activaBtnSiguiente);
//            ANIM.interactividad(7);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('musica_final',true);
            ANIM.waitForSound('risa_hombre_a', Utils.randomInt(50,100)/10, 1.5, 0, Utils.randomInt(70,150)/10, 0.2);
            ANIM.waitForSound('risa_mujer_c', Utils.randomInt(100,200)/10, 0.94, 0, Utils.randomInt(70,150)/10, 0.8);
            ANIM.waitForSound('risa_mujer_d', Utils.randomInt(70,130)/10, 0.7, 0, Utils.randomInt(110,220)/10, 0.9);
            ANIM.waitForSound('risa_mujer_e', Utils.randomInt(20,50)/10, 4, 0, Utils.randomInt(170,350)/10, 0.5);
            ANIM.waitForSound('risa_nenita', Utils.randomInt(20,50)/10, 10, 0, Utils.randomInt(50,150)/10, 0.8);
            ANIM.waitForSound('risa_nenito', Utils.randomInt(20,50)/10, 7.6, 0, Utils.randomInt(60,200)/10, 0.8);
        }, null, "fin_escena_7");
        
        /*LLAMADAS Y FUNCIONES ESCENA 8*/ //<-----------------------------------------------------
        ANIM.main_tl.call(function(){
            Player.hideOthersBut('escena_08');
        }, null, "escena_8");
        
        ANIM.main_tl.call(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(8);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            console.log('FINAL');
        }, null, "fin_escena_8");
        
       
        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
    },
    creaAnimInteractividad:() => {
         
        //LUNA
        ANIM.anim_interact_2_luna = gsap.timeline();
        ANIM.anim_interact_2_luna
         
            .addLabel('inicio')
            .set('#escena_02 .luna',{y:510, x:60, immediateRender:false})
            .set('#escena_02 .noche_oscura',{alpha:0.3, immediateRender:false})
            .call(function(){
                Player.playSoundFX('canto_wakatai_corto');
            })
            .call(function(){
                ANIM.fadeVolume('canto_wakatai_corto',1,0,9);
            }, null, '+=9')
            .to('#escena_02 .luna',{duration:9, y:0, x:0, immediateRender:false})
            .to('#escena_02 .noche_oscura',{duration:3, alpha:0, ease:Power4.easeIn, immediateRender:false},'-=9')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_2_luna.pause();
        
//        ANIM.main_tl.add(ANIM.anim_interact_2_luna,'2_2-=18'); //<--
        
        //chinchilla, al lado del drag and drop
        ANIM.anim_interact_3_chinchilla = gsap.timeline();
        ANIM.anim_interact_3_chinchilla
         
            .addLabel('inicio')
            .call(function(){
//                $('#escena_03 .chinchilla').css({'z-index': '1'});
//                $('#escena_03 .cubre_chinchilla').css({'z-index': '2'});
                document.getElementById('escena_03').querySelectorAll('.chinchilla').forEach(item => {
                    item.style.zIndex = 1;
                });
                document.getElementById('escena_03').querySelectorAll('.cubre_chinchilla').forEach(item => {
                    item.style.zIndex = 2;
                });
            })
            .to('#escena_03 .chinchilla',0.3,{rotation:0, y:90, x:-350, transformOrigin:'0px 250px'})
            .call(function(){
               ANIM.anim_interact_3_chinchilla.pause();
            })
        
            .to('#escena_03 .chinchilla',0.3,{rotation:0, y:90, x:-270, transformOrigin:'0px 250px'})
            .call(function(){
               ANIM.anim_interact_3_chinchilla.pause();
            })
        
            .to('#escena_03 .chinchilla',0.3,{rotation:0, y:0, x:0, transformOrigin:'0px 250px'})
            .call(function(){
//                $('#escena_03 .chinchilla').css({'z-index': '2'});
//                $('#escena_03 .cubre_chinchilla').css({'z-index': '1'});
                document.getElementById('escena_03').querySelectorAll('.chinchilla').forEach(item => {
                    item.style.zIndex = 2;
                });
                document.getElementById('escena_03').querySelectorAll('.cubre_chinchilla').forEach(item => {
                    item.style.zIndex = 1;
                });
                ANIM.anim_interact_3_chinchilla.pause();
            })
            .call(function(){
//                $('#escena_03 .chinchilla').css({'z-index': '1'});
//                $('#escena_03 .cubre_chinchilla').css({'z-index': '2'});
                document.getElementById('escena_03').querySelectorAll('.chinchilla').forEach(item => {
                    item.style.zIndex = 1;
                });
                document.getElementById('escena_03').querySelectorAll('.cubre_chinchilla').forEach(item => {
                    item.style.zIndex = 2;
                });
            }, null, '+=0.1')
            .to('#escena_03 .chinchilla',0.3,{rotation:0, y:90, x:-270, transformOrigin:'0px 250px'})
            .call(function(){
                ANIM.anim_interact_3_chinchilla.pause();
            })
        
//            .to('#escena_03 .chinchilla',0.1,{x:-2,y:2, repeat:7, yoyo:true})
            .addLabel('final')
            
             ;
        ANIM.anim_interact_3_chinchilla.pause();
       
        
        //vizcachas, en el hoyo
        ANIM.anim_interact_4_vizcachas = gsap.timeline({repeat:2});
        ANIM.anim_interact_4_vizcachas

            .addLabel('inicio')
            .call(function(){
                
            })
            .to('#escena_04 .vizcacha2',0.5,{x:0},'+=2')
            .to('#escena_04 .vizcacha1',0.5,{x:0})
            .to('#escena_04 .vizcacha4',0.5,{x:60})
            .to('#escena_04 .vizcacha2',0.5,{x:-40},'+=2')
            .to('#escena_04 .vizcacha1',0.5,{x:-80})
            .to('#escena_04 .vizcacha4',0.5,{x:-40})
            .addLabel('final')
            
             ;
        ANIM.anim_interact_4_vizcachas.pause();
        
        
        //chinchilla, al lado de los pájaros y el pasto
        ANIM.anim_interact_5_chinchilla = gsap.timeline({repeat:-1});
        ANIM.anim_interact_5_chinchilla
         
            .addLabel('inicio')
            .call(function(){
//                $('#escena_05 .chinchilla').css({'z-index': '1'});
//                $('#escena_05 .cubre_chinchilla').css({'z-index': '2'});
                document.getElementById('escena_05').querySelectorAll('.chinchilla').forEach(item => {
                    item.style.zIndex = 1;
                });
                document.getElementById('escena_05').querySelectorAll('.cubre_chinchilla').forEach(item => {
                    item.style.zIndex = 2;
                });
            })
            .to('#escena_05 .chinchilla',0.3,{y:70, x:25},'+=5')
            .to('#escena_05 .chinchilla',0.3,{y:0, x:0},'+=2')
            .call(function(){
//                $('#escena_05 .chinchilla').css({'z-index': '2'});
//                $('#escena_05 .cubre_chinchilla').css({'z-index': '1'});
                document.getElementById('escena_05').querySelectorAll('.chinchilla').forEach(item => {
                    item.style.zIndex = 2;
                });
                document.getElementById('escena_05').querySelectorAll('.cubre_chinchilla').forEach(item => {
                    item.style.zIndex = 1;
                });
            })
            .to('#escena_05 .chinchilla',0.1,{x:2,y:2, repeat:7, yoyo:true})
            .call(function(){
//                $('#escena_05 .chinchilla').css({'z-index': '1'});
//                $('#escena_05 .cubre_chinchilla').css({'z-index': '2'});
                document.getElementById('escena_05').querySelectorAll('.chinchilla').forEach(item => {
                    item.style.zIndex = 1;
                });
                document.getElementById('escena_05').querySelectorAll('.cubre_chinchilla').forEach(item => {
                    item.style.zIndex = 2;
                });
            }, null, '+=3')
            .to('#escena_05 .chinchilla',0.3,{x:55, y:125})
        
            .call(function(){
//                $('#escena_05 .chinchilla').css({'z-index': '1'});
//                $('#escena_05 .cubre_chinchilla').css({'z-index': '2'});
                document.getElementById('escena_05').querySelectorAll('.chinchilla').forEach(item => {
                    item.style.zIndex = 1;
                });
                document.getElementById('escena_05').querySelectorAll('.cubre_chinchilla').forEach(item => {
                    item.style.zIndex = 2;
                });
            })
            .to('#escena_05 .chinchilla',0.3,{y:70, x:25},'+=7')
            .to('#escena_05 .chinchilla',0.3,{x:55, y:125},'+=1')
            .to('#escena_05 .chinchilla',0.3,{y:70, x:25},'+=1')
            .to('#escena_05 .chinchilla',0.3,{x:55, y:125},'+=0.2')
            .to('#escena_05 .chinchilla',0.3,{y:70, x:25},'+=0.5')
            .to('#escena_05 .chinchilla',0.3,{x:55, y:125},'+=0.1')
            .to('#escena_05 .chinchilla',0.3,{x:0, y:0},'+=1')
            .call(function(){
//                $('#escena_05 .chinchilla').css({'z-index': '2'});
//                $('#escena_05 .cubre_chinchilla').css({'z-index': '1'});
                document.getElementById('escena_05').querySelectorAll('.chinchilla').forEach(item => {
                    item.style.zIndex = 2;
                });
                document.getElementById('escena_05').querySelectorAll('.cubre_chinchilla').forEach(item => {
                    item.style.zIndex = 1;
                });
            })
            .call(function(){
//                $('#escena_05 .chinchilla').css({'z-index': '1'});
//                $('#escena_05 .cubre_chinchilla').css({'z-index': '2'});
                document.getElementById('escena_05').querySelectorAll('.chinchilla').forEach(item => {
                    item.style.zIndex = 1;
                });
                document.getElementById('escena_05').querySelectorAll('.cubre_chinchilla').forEach(item => {
                    item.style.zIndex = 2;
                });
            }, null, '+=4')
            .to('#escena_05 .chinchilla',0.3,{x:55, y:125})
            .addLabel('final')
            
             ;
        ANIM.anim_interact_5_chinchilla.pause();
        
        //vegetación
        ANIM.anim_interact_6_vegetacion = gsap.timeline();
        ANIM.anim_interact_6_vegetacion
         
            .addLabel('inicio')
            .call(function(){
                ANIM.setIniciales();
                ANIM.pauseWaitSound();
            })
            .to('#escena_06 .rio',6,{alpha:1},'+=0.1')
            .to('#escena_06 .arboles',1,{alpha:1, stagger:0.3},'+=0.46')
            .to('#escena_06 .caravana1',1,{alpha:1},'+=7.4')
            .call(function(){
                ANIM.animaNubes(6);
                ANIM.waitForSound('viento_10',0.1,9,0);
            })
            .to('#escena_06 .caravana1',1,{alpha:0},'+=10')
            .to('#escena_06 .caravana2',1,{alpha:1},'+=1')
            .to('#escena_06 .caravana2',1,{alpha:0},'+=3.6')
            .to('#escena_06 .caravana3',1,{alpha:1},'+=1')
            .call(function(){
//                Player.stopAudioParrafo();
                ANIM.interactividad(6);
//                Player.activaBtnSiguiente();
            }, null, '+=1')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_6_vegetacion.pause();
       
        
        ANIM.arr_interacts = [
            ANIM.anim_interact_2_luna,
            ANIM.anim_interact_3_chinchilla,
            ANIM.anim_interact_4_vizcachas,
            ANIM.anim_interact_5_chinchilla,
            ANIM.anim_interact_6_vegetacion,
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
        
        gsap.killTweensOf("#escena_01 .nube");
        gsap.set('#escena_01 .nube',{scale:3.5, x:0, transformOrigin:'top left'});
        
        
//        $('#escena_03 .chinchilla').css({'z-index': '1'});
//        $('#escena_03 .cubre_chinchilla').css({'z-index': '2'});
        document.getElementById('escena_03').querySelectorAll('.chinchilla').forEach(item => {
            item.style.zIndex = 1;
        });
        document.getElementById('escena_03').querySelectorAll('.cubre_chinchilla').forEach(item => {
            item.style.zIndex = 2;
        });
        gsap.set('#escena_03 .chinchilla',{rotation:0, y:90, x:-270, transformOrigin:'0px 250px'});
        
        gsap.set('#escena_04 .vizcacha1',{x:-80});
        gsap.set('#escena_04 .vizcacha2',{x:-40});
        gsap.set('#escena_04 .vizcacha4',{x:-40});
        
        
        
//        $('#escena_05 .chinchilla').css({'z-index': '1'});
//        $('#escena_05 .cubre_chinchilla').css({'z-index': '2'});
        document.getElementById('escena_05').querySelectorAll('.chinchilla').forEach(item => {
            item.style.zIndex = 1;
        });
        document.getElementById('escena_05').querySelectorAll('.cubre_chinchilla').forEach(item => {
            item.style.zIndex = 2;
        });
        gsap.set('#escena_05 .chinchilla',{scale:0.8,x:55,y:125});
        
//        gsap.set('#escena_05 .pastos .pasto',{alpha:0.6});
        
        gsap.killTweensOf("#escena_04 .ola");
        gsap.killTweensOf("#escena_04 .rama");
        
        try{ANIM.wait_tl_pajaritos.pause();}catch(err){};
        
        gsap.killTweensOf("#escena_06 .nube");
        gsap.set('#escena_06 .nube',{scale:1, x:0, transformOrigin:'top left'});
        gsap.set('#escena_06 .rio',{alpha:0});
        gsap.set('#escena_06 .arboles',{alpha:0});
        gsap.set('#escena_06 .caravana',{alpha:0});
        
        
        ANIM.pauseWaitSound();
        ANIM.pausaEscenas();
        ANIM.desactivaDragAndDrops();
//        $('.indicador_interactividad').css({'display':'none'});
        document.querySelectorAll('.indicador_interactividad').forEach(item => {
            item.style.display = 'none';
        });
    },
    displayInteract:(cualEscena) => {
        $(cualEscena+' .interact').css({'display':'block'});
    },
    interactividad:(nEscena, callback = undefined, btn_especifico = "primario", alphabutton = 1) => {
        let i_st = nEscena > 9 ? (nEscena) : `0${(nEscena)}`;
        let btn = document.getElementById(`escena_${i_st}`).getElementsByClassName(`btn_interact ${btn_especifico}`)[0];
        let cb = callback;
        btn.style.display = 'block';
        gsap.fromTo(btn,{alpha:0},{duration:1, alpha:alphabutton});
        let muestralo = (div, cbb) => {
            if(cbb !== undefined){
                cbb();
            }
            div.style.display = 'block';      
        }
         switch (nEscena){
            case 0:
                
                break;
             case 1:
                 
                break;
            case 2:
//                 if(btn.hasClass('primario')){
//                    btn.click(function(){
//                        $(this).css({"display":"none"});
                if(Utils.hasClass(btn,'primario')){
                    try{btn.removeEventListener('click',fn02);}catch(err){console.log(err.message);}
                    btn.addEventListener('click', fn02 = () => {  
                        btn.style.display = 'none'; 
                        ANIM.anim_interact_2_luna.eventCallback("onComplete", muestralo, [btn, cb]);   
                        ANIM.anim_interact_2_luna.play(0);
                    });
                 }
                 break;
             case 3:
//                 if(btn.hasClass('btn_drag')){
                if(Utils.hasClass(btn,'btn_drag')){
                    ANIM.arrPiedras = []; //RESETEO la torre (solo en este caso);
                    ANIM.creaDragAndDrops(btn, i_st, 'piedras', '.piedra');
                }
                 break;
            case 4:
//                 if(btn.hasClass('primario')){
//                    btn.click(function(){
//                        $(this).css({"display":"none"});
                 if(Utils.hasClass(btn,'primario')){
                    try{btn.removeEventListener('click',fn04);}catch(err){console.log(err.message);}
                    btn.addEventListener('click', fn04 = () => {  
                        btn.style.display = 'none'; 
//                        ANIM.anim_interact_4_vizcachas.eventCallback("onComplete", muestralo, [$('#escena_04 .btn_interact.musica'), cb]); 
                        ANIM.animaOlas(nEscena);
                        ANIM.animaRamas(nEscena);
                        ANIM.anim_interact_4_vizcachas.play(0);                   
                    });
                 }
                
                 break;
             case 5:
//                 if(btn.hasClass('primario')){
//                    btn.click(function(){
//                        $(this).css({"display":"none"});
                 if(Utils.hasClass(btn,'primario')){
                    try{btn.removeEventListener('click',fn05);}catch(err){console.log(err.message);}
                    btn.addEventListener('click', fn05 = () => {  
                        btn.style.display = 'none'; 
                        ANIM.anim_interact_5_chinchilla.eventCallback("onComplete", muestralo, [btn, cb]);   
                        ANIM.anim_interact_5_chinchilla.play(0);
                    });
                 }
                 
                 break;
            case 6:
//                if(btn.hasClass('primario')){
//                    btn.click(function(){
//                        $(this).css({"display":"none"});
                 if(Utils.hasClass(btn,'primario')){
                    try{btn.removeEventListener('click',fn06);}catch(err){console.log(err.message);}
                    btn.addEventListener('click', fn06 = () => {  
                        btn.style.display = 'none'; 
                        ANIM.anim_interact_6_vegetacion.eventCallback("onComplete", muestralo, [btn, cb]); 
                        ANIM.anim_interact_6_vegetacion.play(0);
                    });
                }
                 break;
             case 7:
                 
                 break;
             case 8:
//                    btn.click(function(){
//                        $(this).css({"display":"none"});  
                 if(Utils.hasClass(btn,'primario')){
                    try{btn.removeEventListener('click',fn08);}catch(err){console.log(err.message);}
                    btn.addEventListener('click', fn08 = () => {  
                        btn.style.display = 'none'; 
                        ANIM.anim_interact_8.eventCallback("onComplete", muestralo, [btn, cb]);   
                        ANIM.anim_interact_8.play(0);
                    });
                 }
                 break;
             
        }
    },
    displayTooltipInformation:(i_st) => {
//        let tt = $('#escena_'+i_st+' .drag_tolltip'); 
////        console.log('wot',cual);
//        tt.css({'display':'grid'});
//        if(tt.hasClass('vertical')){
//            gsap.fromTo(tt,0.3,{alpha:0, y:-30},{alpha:1, y:0});
//        } else {
//            gsap.fromTo(tt,0.3,{alpha:0, x:-30},{alpha:1, x:0});
//        }
        let tt = document.getElementById(`escena_${i_st}`).getElementsByClassName('drag_tolltip')[0];
        
        tt.style.display = 'grid';
        if(Utils.hasClass(tt,'vertical')){
            gsap.fromTo(tt,0.3,{alpha:0, y:-30},{alpha:1, y:0});
        } else {
            gsap.fromTo(tt,0.3,{alpha:0, x:-30},{alpha:1, x:0});
        }
    },
    hideTooltipInformation:(i_st) => {
//        let tt = $('#escena_'+i_st+' .drag_tolltip');
//        tt.css({'display':'none'});
        let tt = document.getElementById(`escena_${i_st}`).getElementsByClassName('drag_tolltip')[0];
        tt.style.display = 'none';
    },
    dragsAndDrops:{},
    creaDragAndDrops:(btn, i_st = '00', nombreDND = 'piedras', claseDrags = '.piedra') => {
        DND['nombre'+i_st] = nombreDND; 
        DND['clase_drags'+i_st] = claseDrags;

        if(Utils.isMobile()){
            DND['elbtn'+i_st] = document.getElementById('btn_drag_'+DND['nombre'+i_st]);
            DND['elbtn'+i_st].addEventListener('touchstart', function(event) {
                gsap.killTweensOf('#escena_'+i_st+' .drag_tolltip');
                ANIM.displayTooltipInformation(i_st);
            }, false);

             DND['elbtn'+i_st].addEventListener('touchend', function(event) {
                gsap.to('#escena_'+i_st+' .drag_tolltip',1,{alpha:0, delay:0.5, onComplete:function(){
                     DND['elbtn'+i_st].style.display = 'none';
                    ANIM.hideTooltipInformation(i_st);
                }});
                ANIM.activaDragAndDrops(DND['nombre'+i_st], i_st, DND['clase_drags'+i_st]);
            }, false); 
        } else {
//            btn
//                .hover(function(){
//                    ANIM.displayTooltipInformation(i_st);
//            },
//                       function(){
//                    ANIM.hideTooltipInformation(i_st);
//            })
//                .click(function(){
//                $(this).css({"display":"none"});
//                ANIM.activaDragAndDrops(DND['nombre'+i_st], i_st, DND['clase_drags'+i_st]);
//            });
            
            try{btn.removeEventListener('mouseover',window[`fnmover${i_st}`]);}catch(err){console.log(err.message);}
            try{btn.removeEventListener('mouseout',window[`fnmout${i_st}`]);}catch(err){console.log(err.message);}
            try{btn.removeEventListener('click',window[`fnclick${i_st}`]);}catch(err){console.log(err.message);}

            btn.addEventListener('mouseover', window[`fnmover${i_st}`] = () => { 
                ANIM.displayTooltipInformation(i_st);
                Player.playVideoInteraccion(); 
            }, false);
            btn.addEventListener('mouseout', window[`fnmout${i_st}`] = () => {  
                ANIM.hideTooltipInformation(i_st); 
            }, false);
            btn.addEventListener('click', window[`fnclick${i_st}`] = () => {  
                btn.style.display = 'none';
                ANIM.activaDragAndDrops(DND['nombre'+i_st], i_st, DND['clase_drags'+i_st]);
            }, false);
            
        }
    },
    desactivaDragAndDrops:() => {
        DND.arrDragabbles.map((item) => {
                            item.drag.map((d)=>{
//                                console.log('QUE ES D',d);
                                    let pos = ANIM.bringMePositions(item.name, d.target.className);
//                                    console.log('DESACTIVANDO',item.name, d.target.className, pos);
                                    gsap.set(d.target,{top:pos.top,left:pos.left,rotation:0});
                                    d.disable();
                                });
                            }
                         );
    },
    bringMePositions:(cual, clases) => {
        let pos;
        DND.arrDragabbles.map((item) => {
            if(item.name === cual){
//                    console.log(item.posOrig, clases);
                    item.posOrig.map((d)=>{
                                    if(d.clases === clases){
//                                        console.log('D', d);
                                        
                                        pos = d;
//                                        return pos;
                                    }
                                });
                            }
                
            }
        );
        return pos;
    },
    activaDragAndDrops:(cual, i_st, clasedrags) => {
        if(ANIM.dragsAndDrops[cual]){ // aca si existe lo activo
            DND.arrDragabbles.map((item) => {
                if(item.name === cual){
                        item.drag.map((d)=>{
                                d.enable();
                            });
                        }

                    }
                );
            return;
        }
        ANIM.dragsAndDrops[cual] = true; // y si no existe lo creo en el código siguiente
        
        let drags,drops,grabs,posOrig,onStart,onHit,onNoHit,onDrag;
        
        switch (cual){
            case 'piedras':
//                drags = $('#escena_'+i_st+' '+clasedrags);
//                drops =  [$('#escena_'+i_st+' .hit_zone')];
                drags = document.getElementById(`escena_${i_st}`).querySelectorAll(clasedrags);
                drops = document.getElementById(`escena_${i_st}`).querySelectorAll('.hit_zone');
                posOrig = [];
//                drags.each(function(i){
//                    posOrig.push({clases:$(this).attr('class'), top:parseInt($(this).css('top')), left:parseInt($(this).css('left'))});
//                });
                drags.forEach(item => {
                    posOrig.push({clases:item.classList.value, top:parseInt(item.offsetTop), left:parseInt(item.offsetLeft)});
                });
//                drops[0].each(function(i){
//                    let o = {clases:$(this).attr('class'), top:parseInt($(this).css('top')), left:parseInt($(this).css('left')), w:$(this).width(), h:$(this).height()};
//                    posOrig.push(o);
//                    ANIM.creaIndicadorHitZone('#escena_'+i_st, o);
//                });
                drops.forEach(item => {
                    let o = {clases:item.classList.value, top:parseInt(item.offsetTop), left:parseInt(item.offsetLeft), w:item.clientWidth, h:item.clientHeight};
                    posOrig.push(o);
                    ANIM.creaIndicadorHitZone(`escena_${i_st}`, o);
                });
                //console.log(posOrig);
                onStart = (dragged) => {
                    ANIM.lookInTorre(dragged);
                    let indicador = document.getElementById(`escena_${i_st}`).getElementsByClassName('indicador_interactividad')[0];
                    indicador.style.display = 'block';
                    gsap.fromTo('#escena_'+i_st+' .indicador_interactividad',0.4,{alpha:0},{alpha:1});
                }
                onHit = (dragged,hitted) => {
                    
                    if(ANIM.anim_interact_3_chinchilla.currentLabel() === 'final'){
                        ANIM.anim_interact_3_chinchilla.play(0);
                    } else {
                        ANIM.anim_interact_3_chinchilla.play();
                    }
                    
                    let lFin, tFin, posLHit,wHit, wDragged;
                    ANIM.arrPiedras.push(dragged);
//                    posLHit = parseInt($('#escena_'+i_st+' .hit_zone').css('left'));
                    let hitzone = document.getElementById(`escena_${i_st}`).getElementsByClassName('hit_zone')[0];
                    posLHit = parseInt(hitzone.offsetLeft);
//                    wHit = $('#escena_'+i_st+' .hit_zone').width();
                    wHit = hitzone.offsetWidth;
                    wDragged = dragged.offsetWidth;
                    lFin = (posLHit + (wHit/2)) - wDragged/2;
                    tFin = ANIM.getPosPiedra();
//                    console.log(posLHit,wHit,wDragged,lFin,tFin);
//                    console.log(dragged.id, dragged.offsetWidth,dragged.offsetHeight, posLHit);
//                    return;
                    gsap.to(dragged,0.5,{top:tFin, left:lFin, onStart:function(){
//                        Player.playSoundFX('magia');
                    }, onComplete:function(){
                    }
                                            });

                    gsap.to('#escena_'+i_st+' .indicador_interactividad',0.4,{alpha:0});
                }
                onNoHit = (dragged,hitted) => {
                    
                    let pos = ANIM.bringMePositions('piedras',dragged.className);
//                    console.log('POS',pos);
                    gsap.to(dragged,0.7,{left:pos.left, top:pos.top, rotation:0}); 
                    gsap.to('#escena_'+i_st+' .indicador_interactividad',0.4,{alpha:0});
                }
                
                onDrag = (dragged,otro) => {
//                    console.log(dragged,otro);
                }
                DND.crea(cual,drags,drops,posOrig,onStart,onDrag,onHit,onNoHit);
                
                ANIM.desactivaDragAndDrops(); ///<---- Lo desactivo y lo activo altiro porque se me van para arriba al crearlo ????!!!
                ANIM.activaDragAndDrops(cual);
                break;
            
        }
    },
    creaIndicadorHitZone:(cualEscena, o) => { 
        let dif = 0.5;
        let d = o.w > o.h ? o.w : o.h;
        let dd = d+d*dif;
        //console.log(o.top,(dd-d)*0.5);
        let top = o.top - (dd-o.h)*0.5;
        let left = o.left - (dd-o.w)*0.5;
        let st = `<div class="indicador_interactividad" style="width:${dd}px;height:${dd}px;top:${top}px;left:${left}px;display:none;"></div>`;
        document.getElementById(cualEscena).insertAdjacentHTML('beforeend',st);
    },
    checkColisions: (o, divs) => {
        divs.each(function(i){
                let p = { t:parseInt($(this).css('top')), l:parseInt($(this).css('left')), w:$(this).width(), h:$(this).height()};

                if(p.l > o.l && p.l + p.w < o.l + o.w){
                    if(p.t > o.t && p.t + p.h < o.t +o.h){
                        let pos = {l:o.l + (o.w*0.5) - p.w*0.5, t: o.t + (o.h*0.5) - p.h*0.5};
                        gsap.set($(this),{top:pos.t, left:pos.l});
                    }
                }
        });
    },
    arrPiedras:[],
    lookInTorre:(dragged) =>{
        let index = -1;
        ANIM.arrPiedras.map((piedra,i)=>{
            if(piedra.id === dragged.id){
                index = i;
            }
        });
        if(index !== -1){
            ANIM.arrPiedras.splice(index, 1);
            let hbase = 856;
            let acc = 0;
            ANIM.arrPiedras.map((piedra,i)=>{
                acc += piedra.offsetHeight * 0.5;
                gsap.to(piedra,0.5,{top:hbase - acc});
            });
        }
        
       
    },
    getPosPiedra:() => {
        let hbase = 856;
        
        let acc = 0;
        
        ANIM.arrPiedras.map((piedra,i)=>{
            acc += piedra.offsetHeight * 0.5;
        });
      
        return hbase - acc;
    },
    compensaEscenas:(d) => {
        // ESTA FUNCIÓN HAY QUE CONFIGURARLA A MANO POR CADA ESCENA QUE LO NECESITE 
        // (EN ESTE CASO LA ILUSTRACIÓN SE PERDÍA POR ARRIBA, POR ESO ESE COMPENSA POR TOP,
        // SI FUESE AL REVÉS COMPENSARÍA POR BOTTOM)
       let dif = Math.abs(d); 
        $('#escena_03').css({'bottom':dif+'px'});
        $('#escena_06').css({'bottom':dif+'px'});
        $('#escena_07').css({'bottom':dif+'px'});
    }
         /*↑↑↑↑ HASTA LA ANTERIOR ↑↑↑↑↑*/
};