let JSON_CUENTO = {
    nombre:"Las doce princesas bailarinas",
    tipo:"Cuento de hadas",
    descripcion:"Este relato de la tradición popular europea, recopilado por los hermanos Jacob y Wilhelm Grimm (Alemania, s. XIX), cuenta la historia de doce princesas cuyos zapatos aparecían misteriosamente desgastados cada mañana como si hubiesen bailado toda la noche. Su padre, el rey, quiso resolver el misterio y ofreció una gran fortuna a quien descubriera el enigma. Muchos lo intentaron, pero al llegar la noche, caían en un profundo sueño. Hasta que un día alguien reveló el secreto.",
    creditos:[
                ["Adaptación:","Mónica Bombal Molina"],
                ["Ilustraciones:","Alejandra Acosta Argomedo"],
                ["Narración:","Ismael Oddó Méndez"],
                ["Arreglos musicales:","Jorge Mercado Pino"],
                ["Edición a cargo de:","Constanza Ried Silva<br>Verónica Vives Cofré<br>Fundación Entrelíneas"],
                ["Montaje y desarrollo web:","Agencia Match"],
                ["Créditos de sonidos:","Revise detalles <a href='#' target='_blank'>aquí</a>"] 
    ],
    ID:0, 
    imagenes:[
        "img/doce_princesas/spriteA.png",
        "img/doce_princesas/spriteB.png",
        "img/doce_princesas/spriteC.png",
        "img/doce_princesas/estrella.png",
        "img/doce_princesas/fondo_esc_0_LUZ.jpg",
        "img/doce_princesas/fondo_esc_0_SOMBRA.jpg",
        "img/doce_princesas/fondo_esc_1.png",
        "img/doce_princesas/fondo_esc_2.jpg",
        "img/doce_princesas/fondo_esc_3.jpg",
        "img/doce_princesas/fondo_esc_4.jpg",
        "img/doce_princesas/fondo_esc_5.jpg",
        "img/doce_princesas/fondo_esc_6.jpg",
        "img/doce_princesas/fondo_esc_7.jpg",
        "img/doce_princesas/fondo_esc_8.jpg",
        "img/doce_princesas/contraportada.jpg",
    ], 
    fx_sonido:[
        {nombre:"musica_esc1",url:"audio/doce_princesas/fx/musica_esc1.mp3"},
        {nombre:"interruptor",url:"audio/doce_princesas/fx/interruptor.mp3"},
        {nombre:"ronquido1",url:"audio/doce_princesas/fx/ronquido1.mp3"},
        {nombre:"ronquido2",url:"audio/doce_princesas/fx/ronquido2.mp3"},
        {nombre:"ronquido3",url:"audio/doce_princesas/fx/ronquido3.mp3"},
        {nombre:"ronquido4",url:"audio/doce_princesas/fx/ronquido4.mp3"},
        {nombre:"suspiro_rey",url:"audio/doce_princesas/fx/suspiro_rey.mp3"},
        {nombre:"risitas",url:"audio/doce_princesas/fx/risitas.mp3"},
        {nombre:"magia",url:"audio/doce_princesas/fx/magia.mp3"},
        {nombre:"murmullos_pasos_esc4",url:"audio/doce_princesas/fx/murmullos_pasos_esc4.mp3"},
        {nombre:"magia_hojas",url:"audio/doce_princesas/fx/magia_hojas.mp3"},
        {nombre:"musica_esc6",url:"audio/doce_princesas/fx/musica_esc6.mp3"},
        {nombre:"sorbo",url:"audio/doce_princesas/fx/sorbo.mp3"},
        {nombre:"desconcierto",url:"audio/doce_princesas/fx/desconcierto.mp3"},
        {nombre:"desconcierto2",url:"audio/doce_princesas/fx/desconcierto2.mp3"},
        {nombre:"mordisco1",url:"audio/doce_princesas/fx/mordisco1.mp3"},
        {nombre:"mordisco2",url:"audio/doce_princesas/fx/mordisco2.mp3"},
        {nombre:"trompeta",url:"audio/doce_princesas/fx/trompeta.mp3"},
        {nombre:"brillo_hojas",url:"audio/doce_princesas/fx/brillo_hojas.mp3"},
        {nombre:"asombro",url:"audio/doce_princesas/fx/asombro.mp3"},
        {nombre:"asombro_multiple",url:"audio/doce_princesas/fx/asombro_multiple.mp3"},
        {nombre:"musica_esc9",url:"audio/doce_princesas/fx/musica_esc9_v2.mp3"},
    ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/doce_princesas/mini_0.jpg",
            audio:"audio/doce_princesas/escena_01_new.mp3",
            parrafos:
            [
                {
                    texto: "Había una vez un rey que tenía doce hijas.",
                    tiempo:[0,5.5] 
                },
                {
                    texto: "Dormían juntas en una habitación, una al lado de la otra.",
                    tiempo:[6,12] 
                },
                {
                    texto: "Cada noche, a la hora de dormir, el rey apagaba las luces del palacio y cerraba sus puertas con llave.",
                    tiempo:[12.5,22.4] 
                },
                {
                    texto: "Pero algo extraño ocurría:",
                    tiempo:[22.9,25.2] 
                },
                {
                    texto: "¡Los zapatos de las princesas aparecían desgastados cada mañana",
                    tiempo:[25.7,32] 
                },
                {
                    texto: "como si hubiesen bailado toda la noche!",
                    tiempo:[32.5,37.5] 
                },
                
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/doce_princesas/mini_1.jpg",
            audio:"audio/doce_princesas/escena_02_new.mp3",
            parrafos:
            [
                {
                    texto: "El rey prometió premiar con una gran fortuna a quien descifrara tan extraño enigma.",
                    tiempo:[0,9.5] 
                },
                {
                    texto: "Muchos intentaron descubrir el secreto de las princesas,",
                    tiempo:[10,16] 
                },
                {
                    texto: "pero al llegar la noche",
                    tiempo:[16.5,19.7] 
                },
                {
                    texto: "los vencía inexplicablemente un profundo sueño.",
                    tiempo:[20.2,27.2] 
                },
                {
                    texto: "El monarca comenzaba a perder la paciencia.",
                    tiempo:[27.6,35] 
                },
                
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/doce_princesas/mini_2.jpg",
            audio:"audio/doce_princesas/escena_03.mp3",
            parrafos:
            [
                {
                    texto: "Un soldado que pasaba cerca del reino quiso probar suerte.",
                    tiempo:[0,5.2] 
                },
                {
                    texto: "Cuando se dirigía al palacio se encontró con una anciana que le advirtió:",
                    tiempo:[5.7,11] 
                },
                {
                    texto: "–Si quieres conocer el secreto de las princesas, no bebas del vino que te ofrezcan.",
                    tiempo:[11.5,17.5] 
                },
                {
                    texto: "Y llévate esta capa que te hará invisible cuando lo necesites.",
                    tiempo:[18,23.5] 
                },
                {
                    texto: "El soldado le agradeció y partió decidido a descubrir el misterio.",
                    tiempo:[24,30] 
                }
                
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/doce_princesas/mini_3.jpg",
            audio:"audio/doce_princesas/escena_04.mp3",
            parrafos:
            [
                {
                    texto: "Esa noche, el soldado –que era muy astuto– ",
                    tiempo:[0,4] 
                },
                {
                    texto: "escondió una esponja entre sus barbas para engañar a las princesas.",
                    tiempo:[4.5,9] 
                },
                {
                    texto: "Así, cuando la mayor le ofreció una copa,",
                    tiempo:[9.5,12.6] 
                },
                {
                    texto: "fingió beberla y dormirse.",
                    tiempo:[13.1,16.9] 
                },
                {
                    texto: "Al verlo roncar, las jóvenes vistieron espléndidos ropajes",
                    tiempo:[17.4,22.3] 
                },
                {
                    texto: "y calzaron sus mejores zapatos.",
                    tiempo:[22.8,25.5] 
                },
                {
                    texto: "Luego, golpearon una de las camas.",
                    tiempo:[26,29.5] 
                },
                {
                    texto: "Al instante esta se hundió,",
                    tiempo:[30,32.5] 
                },
                {
                    texto: "y apareció una larga escalera por la que fueron bajando una a una.",
                    tiempo:[33,38.6] 
                },
                {
                    texto: "El soldado, que lo había visto todo, se envolvió con la capa mágica y saltó tras ellas.",
                    tiempo:[39.3,47] 
                },
                
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/doce_princesas/mini_4.jpg",
            audio:"audio/doce_princesas/escena_05_new.mp3",
            parrafos:
            [
                {
                    texto: "Mientras bajaba, el soldado pisó sin querer el vestido de la más joven.",
                    tiempo:[0,6.5] 
                },
                {
                    texto: "–¡Alguien nos sigue! –exclamó la princesa.",
                    tiempo:[7,11.6] 
                },
                {
                    texto: "Pero ninguna de sus hermanas le prestó atención.",
                    tiempo:[12.1,16] 
                },
                {
                    texto: "Siguieron descendiendo hasta llegar a un magnífico sendero bordeado por árboles de plata;",
                    tiempo:[16.5,24.7] 
                },
                {
                    texto: "luego se internaron por una vía de árboles de oro;",
                    tiempo:[25.3,30] 
                },
                {
                    texto: "y finalmente doblaron por un atajo con árboles de diamantes.",
                    tiempo:[30.5,36.4] 
                },
                {
                    texto: "El soldado iba recolectando hojas, pero cada chasquido alertaba a la princesa menor.",
                    tiempo:[36.9,45] 
                },
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/doce_princesas/mini_5.jpg",
            audio:"audio/doce_princesas/escena_06_new.mp3",
            parrafos:
            [
                {
                    texto: "Llegaron a un gran lago donde las esperaban doce botes con doce príncipes.",
                    tiempo:[0,6] 
                },
                {
                    texto: "Cruzaron para entrar en un castillo iluminado",
                    tiempo:[6.5,9.6] 
                },
                {
                    texto: "en donde se oía una alegre fiesta con música de tambores y trompetas.",
                    tiempo:[10.1,15.6] 
                },
                {
                    texto: "Bailaron y bailaron,",
                    tiempo:[16.1,18] 
                },
                {
                    texto: "y mientras las parejas daban giros y volteretas,",
                    tiempo:[18.5,21.7] 
                },
                {
                    texto: "el soldado iba bebiendo de las copas de las princesas.",
                    tiempo:[22.2,26.3] 
                },
                {
                    texto: "La más pequeña, intrigada,",
                    tiempo:[26.8,29.4] 
                },
                {
                    texto: "no cesaba de comentar que algo no andaba bien.",
                    tiempo:[29.9,34] 
                },
                
            ]
        },
        {
            nombre:"Escena 7",
            miniatura:"img/doce_princesas/mini_6.jpg",
            audio:"audio/doce_princesas/escena_07_new.mp3",
            parrafos:
            [
                {
                    texto: "Al despuntar el sol, los zapatos, –desgastados de tanto danzar– obligaron a las princesas a regresar.",
                    tiempo:[0,8] 
                },
                {
                    texto: "Los príncipes se despidieron de las jóvenes hasta la siguiente noche.",
                    tiempo:[8.5,13.3] 
                },
                {
                    texto: "Al llegar a las escaleras, el soldado se adelantó,",
                    tiempo:[13.8,18] 
                },
                {
                    texto: "se metió en su cama y simuló estar dormido.",
                    tiempo:[18.5,22.3] 
                },
                {
                    texto: "Las princesas, cansadas, entraron sigilosamente, escondieron sus vestidos y se acostaron.",
                    tiempo:[22.8,33] 
                },
                {
                    texto: "A la mañana siguiente, el soldado fingió no saber nada, para poder seguirlas dos noches más.",
                    tiempo:[33.5,41.7] 
                },
                
            ]
        },
        {
            nombre:"Escena 8",
            miniatura:"img/doce_princesas/mini_7.jpg",
            audio:"audio/doce_princesas/escena_08_new.mp3",
            parrafos:
            [
                {
                    texto: "Al tercer día, el rey, ansioso, pidió explicaciones al soldado.",
                    tiempo:[0,8 ] 
                },
                {
                    texto: "–¿Qué hacen mis hijas durante la noche?",
                    tiempo:[8.5,13] 
                },
                {
                    texto: "–Bailan hasta la madrugada con doce príncipes",
                    tiempo:[13.5,18.8] 
                },
                {
                    texto: "en un castillo al que llegan por un bosque subterráneo –contestó el soldado,",
                    tiempo:[19.3,27] 
                },
                {
                    texto: "y le presentó las hojas de plata, oro y diamante como prueba.",
                    tiempo:[27.5,35.6] 
                },
                {
                    texto: "¿Es cierto? ¿Bailan a escondidas? –preguntó el rey a sus hijas.",
                    tiempo:[36.1,45] 
                },
                {
                    texto: "Las princesas se sonrojaron.",
                    tiempo:[45.5,50] 
                },                
            ]
        },
        {
            nombre:"Escena 9",
            miniatura:"img/doce_princesas/mini_8.jpg",
            audio:"audio/doce_princesas/escena_09_new.mp3",
            parrafos:
            [
                
                {
                    texto: "El rey cumplió con su palabra y pagó al soldado la fortuna prometida por resolver el enigma.",
                    tiempo:[0,11] 
                },
                {
                    texto: "¿Y las doce princesas?",
                    tiempo:[11.5,13.9] 
                },
                {
                    texto: "Nunca más tuvieron que bailar a escondidas.",
                    tiempo:[14.4,19.8] 
                },
                {
                    texto: "Junto a su padre, a quien también le gustaba danzar,",
                    tiempo:[20.4,25.5] 
                },
                {
                    texto: "organizaron en el palacio las más animadas y maravillosas fiestas de las que se tenga memoria.",
                    tiempo:[26,35] 
                },
                {
                    texto: "Y los zapateros de ese reino, ¡siempre estuvieron ocupados!",
                    tiempo:[35.5,41.5] 
                },
                {
                    texto: "",
                    tiempo:[42,50.5] 
                },
                
            ]
        },
        
    ]    
};

let ANIM = {
    main_tl:undefined,
    creapartes:() => {
        let cont1 = $('#escena_01 .flores1');
        let cont2 = $('#escena_01 .flores2');
        let cont3 = $('#escena_01 .flores3');
        let arrFlores = Array(12).fill(12);
        cont1.append(ANIM.creaFlores(arrFlores));
        cont2.append(ANIM.creaFlores(arrFlores));
        cont3.append(ANIM.creaFlores(arrFlores));
        
        let contHojas1 = $('#escena_04 .hojas_plata');
        let arrHojas1 = Array(27).fill(27);
        let contHojas2 = $('#escena_04 .hojas_oro');
        let arrHojas2 = Array(27).fill(27);
        let contHojas3 = $('#escena_04 .hojas_diamante');
        let arrHojas3 = Array(24).fill(24);
        contHojas1.append(ANIM.creaHojas(arrHojas1, 'plata'));
        contHojas2.append(ANIM.creaHojas(arrHojas2, 'oro'));
        contHojas3.append(ANIM.creaHojas(arrHojas3, 'diamante'));
        
        let contBrillos1 = $('#escena_04 .estrellas1');
        let contBrillos2 = $('#escena_04 .estrellas2');
        let contBrillos3 = $('#escena_04 .estrellas3');
        let contBrillos4 = $('#escena_07 .plato');
        let contBrillos5 = $('#escena_08 .cont_estrellas');
        let arrBrill1 = Array(20).fill(20);
        let arrBrill2 = Array(20).fill(20);
        let arrBrill3 = Array(20).fill(20);
        let arrBrill4 = Array(10).fill(10);
        let arrBrill5 = Array(20).fill(20);
        contBrillos1.append(ANIM.creaBrillos(arrBrill1));
        contBrillos2.append(ANIM.creaBrillos(arrBrill2));
        contBrillos3.append(ANIM.creaBrillos(arrBrill3));
        contBrillos4.append(ANIM.creaBrillos(arrBrill4));
        contBrillos5.append(ANIM.creaBrillos(arrBrill5));
        
        ANIM.sobreescribeAudioFX();
        ANIM.sobreescribeCreditosFinal();
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
        
        Player.cambiaVolume = (cual = 'musica_esc6', vol = 0.1) => {
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
            ANIM.pausaInteractividad();
        }  
    },
    cambiaVolume:(cual, desde = 1, hasta=0.2 , t = 1) => {
        let o = {vol:desde};
        let fade = new TimelineMax({onUpdate:function(){
//            console.log(o.vol);
            Player.cambiaVolume(cual, o.vol);
        }});
        
        fade.to(o, t,{vol:hasta});
        fade.play();
    },
    creaFlores:(arr) => {
        let newArr = arr.map((item, i) => {
            return `<div class="spriteA flor flor${(i+1)}"></div>`;
        });
        return newArr.join("");
    },
    creaHojas:(arr, cual) => {
        let newArr = arr.map((item, i) => {
            let letra = i % 2 == 0 ? 'A' : 'B';
            return `<div class="spriteA hoja_${cual} hoja_${cual}_${letra} hoja_${cual}_${(i+1)}"></div>`;
        });
        return newArr.join("");
    },
    creaBrillos:(arr) => {
        let newArr = arr.map((item, i) => {
            return `<div class="estrella">
                        <div class="estrellaA"></div>
                        <div class="estrellaB"></div>
                    </div>`;
        });
        return newArr.join("");
    },
    animaBrillos:(cuales='plata') => {
        let estrella = 1;
        let cont = cuales == 'plata' ? `#escena_04 .estrellas${1} .estrella` :  cuales == 'oro' ? `#escena_04 .estrellas${2} .estrella` : `#escena_04 .estrellas${3} .estrella`;
        
        $(cont).each(function(i){
            let minX = cuales == 'plata' ? 0 : cuales == 'oro' ? 790 : 1480;
            let maxX = cuales == 'plata' ? 280 : cuales == 'oro' ? 970 : 1730;
            let minY = cuales == 'plata' ? 0 : cuales == 'oro' ? 204 : 20;
            let maxY = cuales == 'plata' ? 350 : cuales == 'oro' ? 502 : 390;
            let left = `${Utils.randomInt(minX,maxX)}px`;
            let top = `${Utils.randomInt(minY,maxY)}px`;
            $(this).css({'left':left, 'top':top});
            TweenMax.set($(this), {scale:Utils.randomInt(40,80)/100});
            TweenMax.fromTo($(this).find('.estrellaA'), $(cont).length, {rotation:0},{rotation:Utils.randomInt(720,1080)});
            TweenMax.fromTo($(this).find('.estrellaB'), $(cont).length, {rotation:0},{rotation:Utils.randomInt(360,720)*-1});
        });
    },
    animaBrillosPlato:() => {
        let estrella = 1;
        let cont = '#escena_07 .plato .estrella';
        TweenMax.killTweensOf("#escena_07 .estrella");
        TweenMax.killTweensOf("#escena_07 .estrellaA");
        TweenMax.killTweensOf("#escena_07 .estrellaB");
        $(cont).each(function(i){
            let minX = 30;
            let maxX = 270;
            let minY = 30;
            let maxY = 140;
            let left = `${Utils.randomInt(minX,maxX)}px`;
            let top = `${Utils.randomInt(minY,maxY)}px`;
            $(this).css({'left':left, 'top':top});
            TweenMax.set($(this), {scale:Utils.randomInt(40,80)/100});
            TweenMax.fromTo($(this).find('.estrellaA'), $(cont).length, {rotation:0},{rotation:Utils.randomInt(720,1080), repeat:-1});
            TweenMax.fromTo($(this).find('.estrellaB'), $(cont).length, {rotation:0},{rotation:Utils.randomInt(360,720)*-1, repeat:-1});
        });
        TweenMax.set("#escena_07 .estrella",{alpha:0});
        TweenMax.staggerTo('#escena_07 .estrella', 0.3, {alpha:1, repeat:3, yoyo:true}, 0.3,function(){
            ANIM.animaBrillosPlato();
        })
            
    },
    animaBrillosSuelo:() => {
        let estrella = 1;
        let cont = '#escena_08 .cont_estrellas .estrella';
        console.log('cant',$(cont).length);
        TweenMax.killTweensOf("#escena_08 .estrella");
        TweenMax.killTweensOf("#escena_08 .estrellaA");
        TweenMax.killTweensOf("#escena_08 .estrellaB");
        $(cont).each(function(i){
            let minX = 0;
            let maxX = 1890;
            let minY = 750;
            let maxY = 1040;
            let left = `${Utils.randomInt(minX,maxX)}px`;
            let top = `${Utils.randomInt(minY,maxY)}px`;
            $(this).css({'left':left, 'top':top});
            TweenMax.set($(this), {scale:Utils.randomInt(40,80)/100});
            TweenMax.fromTo($(this).find('.estrellaA'), $(cont).length, {rotation:0},{rotation:Utils.randomInt(720,1080), repeat:-1});
            TweenMax.fromTo($(this).find('.estrellaB'), $(cont).length, {rotation:0},{rotation:Utils.randomInt(360,720)*-1, repeat:-1});
        });
        TweenMax.set("#escena_08 .estrella",{alpha:0});
        TweenMax.staggerTo('#escena_08 .estrella', 0.3, {alpha:1, repeat:25, yoyo:true}, 0.3,function(){
            ANIM.animaBrillosSuelo();
        })
            
    },
    setHojas:() =>{
        let arrHojasPlata = [
            1,-15,-42,25,-33,26,-33,31,0,-15,4,-16,-30,-20,-43,-26,-76,-66,-43,-23,-79,-72,-79,-79,-74,-60,-40
        ];
        
        arrHojasPlata.map((val, i) => {
            let tO = i % 2 == 0 ? '25px 45px' : '25px 42px';
            let hoja = `#escena_04 .hoja_plata_${(i+1)}`;
            TweenMax.set(hoja,{rotation:val, transformOrigin:tO});
        });
        
        let arrHojasOro = [
            65,93,65,58,3,-29,19,24,50,47,49,44,47,-60,47,-60,67,-90,87,-60,67,-20,-1,-73,-14,-41,-21
        ];
        
        arrHojasOro.map((val, i) => {
            let tO = i % 2 == 0 ? '11px 24px' : '11px 24px';
            let hoja = `#escena_04 .hoja_oro_${(i+1)}`;
            TweenMax.set(hoja,{rotation:val, transformOrigin:tO});
        });
        
        let arrHojasDiamante = [
            0,15,8,-86,53,-68,19,26,38,-60,-20,-14,-14,50,47,-17,0,-20,65,-79,55,-41,81,-12
        ];
        
        arrHojasDiamante.map((val, i) => {
            let tO = i % 2 == 0 ? '11px 24px' : '11px 24px';
            let hoja = `#escena_04 .hoja_diamante_${(i+1)}`;
            TweenMax.set(hoja,{rotation:val, transformOrigin:tO});
        });
    },
    animaNubes:() => {
        let arr = Array(4).fill(4);
        arr.map((item, i) => {
            ANIM.animaNube(i+1);
        });
    },
    animaNube:(cual = 1) => {
        let tweensActives = TweenMax.getTweensOf(`#escena_01 .nube${cual}`);
        if(tweensActives.length === 0){
            let j = -1;
            let left = Utils.randomInt(0,1) == 0 ? 406 : 1900;
            let delay = Utils.randomInt(10,200)/100;
            TweenMax.set(`#escena_01 .nube${cual}`,{top:Utils.randomInt(0,450), left:left, x:Utils.randomInt(600,700)*j});
            TweenMax.to(`#escena_01 .nube${cual}`,
                    Utils.randomInt(14000,27000)/1000,
                    {
                        x:0,
                        ease:Sine.easeInOut,
                        delay:delay,
                        onComplete:function(a){
                            ANIM.animaNube(a);
                        }, 
                        onCompleteParams:[cual]
                    });
        }
    },
    animaFlores:() => {
        if(!ANIM.anim_flores){

            ANIM.anim_flores = new TimelineMax({repeat:-1});
            ANIM.anim_flores

            .addLabel('inicio')
            .fromTo('#escena_01 .flores1 .flor',0.1,{alpha:0},{alpha:1, ease: "expo.out"}, '+=1')
            .fromTo('#escena_01 .flores2 .flor',0.1,{alpha:0},{alpha:1, ease: "expo.out"}, '+=3')
            .fromTo('#escena_01 .flores3 .flor',0.1,{alpha:0},{alpha:1, ease: "expo.out"}, '+=3')
            .to('#escena_01 .flor',0.5,{alpha:0, ease: "expo.out"},'+=4')
            .addLabel('final')

                 ;
        }
        ANIM.anim_flores.play();
        
    },
    animaPrincesasVentana:() => {
        if(!ANIM.anim_princesas_ventana){
            
            ANIM.anim_princesas_ventana = new TimelineMax({onComplete:function(){
                Player.activaBtnSiguiente();
                ANIM.interactividad(1);
            }});
            ANIM.anim_princesas_ventana
                .addCallback(function(){
                    ANIM.randomXposPrincesas();
                })
                .staggerTo('#escena_01 .princesa',6,{y:0}, 0.3)
                .addCallback(function(){
                    Player.playSoundFX('risitas');
                })
                .to('#escena_01 .princesa',0.1,{y:5, repeat:5, yoyo:true})
                .staggerTo('#escena_01 .princesa',1,{y:150}, 0.1)
            ;
        }
        ANIM.anim_princesas_ventana.play(0);
    },
    randomXposPrincesas:() => {
        let arrPos = [
            [-4, 231, 326],
            [60, 281, 1706],
            [310, 1605, 1686],
        ]; 
        let j = Utils.randomInt(0,arrPos.length-1);
        
        $('#escena_01 .princesa').each(function(i){
            let left = `${arrPos[j][i]}px`;
            $(this).css({'left':left});
        });
    },
    animaLuces:() => {
        let arr = Array(5).fill(5);
        arr.map((item, i) => {
            ANIM.animaLuz(i+1);
        });
    },
    animaLuz:(cual = 1) => {
        let tweensActives = TweenMax.getTweensOf(`#escena_06 .luz${cual}`);
        if(tweensActives.length === 0){
            let alpha = Utils.randomInt(15,50)/100;
            
            TweenMax.to(`#escena_06 .luz${cual}`,
                    Utils.randomInt(200,700)/1000,
                    {
                        alpha:alpha,
                        ease:Sine.easeInOut,
                        repeat:3,
                        yoyo:true,
                        onComplete:function(a){
                            ANIM.animaLuz(a);
                        }, 
                        onCompleteParams:[cual]
                    });
        }
        
    },
    bailanGrises:() => {
        ANIM.bailaGris('baile1',1);  
        ANIM.bailaGris('baile2');  
        ANIM.bailaGris('baile3',1,200);  
    },
    bailaGris:(cual, i=0, xMax = 400) => {
        let tweensActives = TweenMax.getTweensOf(`#escena_05 .${cual}`);
        if(tweensActives.length === 0){
            let pareja = `#escena_05 .${cual}`;
            let t = Utils.randomInt(1000,3000)/1000;
            let m = i % 2 == 0 ? 1 : -1;
            let xPos = Utils.randomInt(100,xMax)*m;
            TweenMax.to(pareja, t,{x:xPos, onComplete:function(a,b,c){
                ANIM.bailaGris(a,b,c);
            }, onCompleteParams:[cual,i+1,xMax]});
        }
    },
    bailanFinales:() => {
        ANIM.bailaFinal('baile1',0);  
        ANIM.bailaFinal('baile2',0);  
        ANIM.bailaFinal('baile3',0);  
        ANIM.bailaFinal('baile4',0);  
        ANIM.bailaFinal('baile5',0);  
    },
    bailaFinal:(cual, i=0, xMax = 400) => {
        let tweensActives = TweenMax.getTweensOf(`#escena_08 .${cual}`);
        let valores = {
            baile1:[-300,10,200,100,150,-500,1600,-1200,800,50,500,700,300,500],
            baile2:[300,250,200,100,150,100,300,250,200,100,150,100,30,50,130,20,130,50,90,300],
            baile4:[100,60,150,200,100,150,100,300,50,600,-500,700,-1300,1150,-1500,1200,-650,130,400,130,350,90,270,150,800,300,500,400,200,150,700],
            baile3:[300,250,200,100,150,100,100,250,200,100,150,100,30,50,130,20,130,50,90,70,150],
            baile5:[200,150,150,150,100,110,200,200,150,130,100,90,50,70,180,30,160,80,110,50,120,60]
        }
        if(tweensActives.length === 0){
            let pareja = `#escena_08 .${cual}`;
            let cant = valores[`${cual}`].length;
            let t = 62/cant;
            let m = i % 2 == 0 ? 1 : -1;
            let top = i % 3 == 0 ? true : false;
            let xPos = valores[`${cual}`][i]*m;
            let r = 2*m;
            let timejump = 0.2;
            if(top){
                TweenMax.to(pareja, timejump,{y:-20, repeat:1, yoyo:true, delay:t-(timejump*2)});
            }
            if(i < cant-1){
                TweenMax.to(pareja, t,{x:xPos, rotation:r, onComplete:function(a,b,c){
                    ANIM.bailaFinal(a,b,c);
                }, onCompleteParams:[cual,i+1,xMax]});
            } else {
                TweenMax.to(pareja, t,{x:0, rotation:0});
            }
        }
    },
    callmeOnlyOneTime:() => {
        if(ANIM.oneTimeOnly){
            ANIM.oneTimeOnly = false;
            TweenMax.to('#escena_05 .baile1',3,{x:0, onComplete:function(){
                ANIM.bailaGris('baile1',1,400);
            }});
            TweenMax.to('#escena_05 .baile2',1,{x:0, onComplete:function(){
                ANIM.bailaGris('baile2',0,300);
            }});
            TweenMax.to('#escena_05 .baile3',1.5,{x:0, onComplete:function(){
                ANIM.bailaGris('baile3',0,200);
            }});
        }  
    },
    init:() => {
        ANIM.creapartes();

        ANIM.main_tl = new TimelineMax({});
        
        ANIM.main_tl
        .set('.escena',{left:"-1920px"})
        
        /*INICIO*/
        .addLabel('escena_0')
        .set('#escena_00',{left:0},'+=0.1')
        .addLabel('0_0_audio','+=0.01')
        .addLabel('0_0','+=14.5')
        .addLabel('0_1','+=21')
        .addLabel('0_2','+=27.5')
        .addLabel('0_3','+=38.9')
        .addLabel('0_4','+=41.7')
        .addLabel('0_5','+=48.5')
        
        .addLabel('fin_escena_0','+=54')
        
  /*rey enojado*/  
        .to('#escena_01',0.01,{left:0},'+=59')
        .to('#escena_02',0.01,{left:'1920px'})
        .addLabel('escena_1')
        .addLabel('1_0','+=2')
        .addLabel('1_1','+=12.5')
        .addLabel('1_2','+=19')
        .addLabel('1_3','+=22.7')
        .addLabel('1_4','+=30.2')
        .addLabel('princesas_ventana','+=30.5')
        .addLabel('fin_escena_1','+=38')
    
        
/*abuela*/
        .to('#escena_02',0.01,{left:0},'+=100')
        .to('#escena_01',0.01,{left:'1920px'})
        .addLabel('escena_2')
        .addLabel('2_0',"+=2")
        .addLabel('2_1',"+=8.7")
        .addLabel('2_2',"+=15.5")
        .addLabel('2_3',"+=22")
        .addLabel('2_4',"+=29")
        .addLabel('fin_escena_2', '+=35.5')
        
/*soldado trans*/
        .to('#escena_03',0.01,{left:0},'+=39')
        .to('#escena_02',0.01,{left:'1920px'})
        .addLabel('escena_3')
        .addLabel('3_0',"+=2")
        .addLabel('3_1',"+=7")
        .addLabel('3_2',"+=13")
        .addLabel('3_3',"+=16.6")
        .addLabel('3_4',"+=21.9")
        .addLabel('3_5',"+=27.3")
        .addLabel('3_6',"+=31.5")
        .addLabel('3_7',"+=35.5")
        .addLabel('3_8',"+=38.5")
        .addLabel('3_9',"+=45.6")
        .addLabel('fin_escena_3',"+=54")
        
/*Soldado persigue en el bosque*/
        .to('#escena_04',1,{left:0},"+=59")
        .to('#escena_03',1,{left:"1920px"})
        .addLabel('escena_4')
        .addLabel('4_0',"+=2")
        .addLabel('4_1',"+=9.5") 
        .addLabel('4_2',"+=15.6") 
        .addLabel('4_3',"+=21") 
        .addLabel('4_4',"+=29.7") 
        .addLabel('4_5',"+=35") 
        .addLabel('4_6',"+=42.4") 
        .addLabel('fin_escena_4',"+=51") 

        
/*tomando vino*/
        .to('#escena_05',1,{left:0},"+=67")
        .to('#escena_04',1,{left:"1920px"})
        .addLabel('escena_5')
        .addLabel('5_0',"+=2")
        .addLabel('5_1',"+=9")
        .addLabel('5_2',"+=12.6")
        .addLabel('5_3',"+=19.6")
        .addLabel('5_4',"+=22")
        .addLabel('5_5',"+=25.7")
        .addLabel('5_6',"+=31.3")
        .addLabel('5_7',"+=34.4")
        .addLabel('fin_escena_5',"+=40")
        
 /*En los botes*/
        .to('#escena_06',1,{left:0},"+=101")
        .to('#escena_05',1,{left:"1920px"})
        .addLabel('escena_6')
        .addLabel('6_0',"+=2")
        .addLabel('6_1',"+=11") 
        .addLabel('6_2',"+=17.3") 
        .addLabel('6_3',"+=22") 
        .addLabel('6_4',"+=27.3") 
        .addLabel('6_5',"+=39") 
        .addLabel('fin_escena_6', "+=47.7")
        
/*Acusete car'e cuete*/
        .to('#escena_07',1,{left:0},"+=106")
        .to('#escena_06',1,{left:"1920px"})
        .addLabel('escena_7')
        .addLabel('7_0',"+=2")
        .addLabel('7_1',"+=10")
        .addLabel('7_2',"+=15")
        .addLabel('7_3',"+=20.8")
        .addLabel('7_4',"+=29")
        .addLabel('7_5',"+=37.6")
        .addLabel('7_6',"+=47")
        .addLabel('fin_escena_7',"+=52")
     
    
/* bailando */
        /*FINAL*/
        .to('#escena_08',1,{left:0},"+=102")
        .to('#escena_07',1,{left:"1920px"})
        .addLabel('escena_8')
        .addLabel('8_0',"+=2")
        .addLabel('8_1',"+=13")
        .addLabel('8_2',"+=15.9")
        .addLabel('8_3',"+=21.8")
        .addLabel('8_4',"+=27.5")
        .addLabel('8_5',"+=37")
        .addLabel('8_6',"+=43.5")
        .addLabel('fin_escena_8',"+=52.5")
        
        
        /*CREADOR DE callbacks para visualización de subtítulos */
        let temp_arr = JSON_CUENTO.escenas; 
        
        temp_arr.map((item, i) => {
             item.parrafos.map((parrafo, j) => {
                 ANIM.main_tl.addCallback(function(){
                    Player.playSoundParrafo(i, j);
                    Player.putSubtitulos(i, j);
                },`${i}_${j}`);
            });    
        });
        /***/
        
        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_00');
        },"escena_0");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('musica_esc1');
        },"0_0_audio");
     
        ANIM.main_tl.addCallback(function(){
            Player.activaBtnSiguiente();
            ANIM.main_tl.pause();
            ANIM.interactividad(0, undefined, 'btn_luz');
            ANIM.interactividad(0, undefined, 'btn_princesa1');
            ANIM.interactividad(0, undefined, 'btn_princesa2');
            ANIM.interactividad(0, undefined, 'btn_princesa3');
            ANIM.interactividad(0, undefined, 'btn_princesa4');
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_0");
        
       
        /*LLAMADAS Y FUNCIONES ESCENA 1*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_01');
            ANIM.animaNubes();
            ANIM.animaFlores();
        },"escena_1");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.animaPrincesasVentana();
        },"princesas_ventana");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            ANIM.animaNubes();
            ANIM.animaFlores();
            
        },"fin_escena_1");
        
/*abuela manta soldado*/        
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_02');
        },"escena_2");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(2);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_2");
        
// murmullo      
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
        
        
//arboles        
        /*LLAMADAS Y FUNCIONES ESCENA 4*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_04');
        },"escena_4");
      
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(4);
            ANIM.interactividad(4, undefined, 'btn_arbol1');
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_4");
        
   /*fiesta*/     
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
            Player.playSoundFX('musica_esc6',true);
           
        },"fin_escena_5");
        
   /*botes*/     
         /*LLAMADAS Y FUNCIONES ESCENA 6*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_06');
            ANIM.animaLuces();
        },"escena_6");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(6);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            ANIM.animaLuces();
        },"fin_escena_6");
        
        /*LLAMADAS Y FUNCIONES ESCENA 7*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_07');
        },"escena_7");
    
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(7);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
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
            console.log('FINAL');
        },"fin_escena_8");
        
       
        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
    },
    creaAnimInteractividad:() => {
        
        //
        ANIM.anim_interact_0_a = new TimelineMax();
        ANIM.anim_interact_0_a
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('ronquido1');
            })
            .addCallback(function(){
                ANIM.toogleClass(document.querySelector('#escena_00 .princesa1'),'flipped');
            }, '+=2.5')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_0_a.pause();
        
        ANIM.anim_interact_0_b = new TimelineMax();
        ANIM.anim_interact_0_b
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('ronquido2');
            })
            .addCallback(function(){
                ANIM.toogleClass(document.querySelector('#escena_00 .princesa2'),'flipped');
            }, '+=0.5')
            .to('#escena_00 .princesa2',0.2,{y:0, repeat:15,yoyo:true},'+=3')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_0_b.pause();
       
        ANIM.anim_interact_0_c = new TimelineMax();
        ANIM.anim_interact_0_c
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('ronquido3');
            })
            .addCallback(function(){
                ANIM.toogleClass(document.querySelector('#escena_00 .princesa3'),'flipped');
            }, '+=0.5')
            .to('#escena_00 .princesa3',0.2,{y:0, x:0, repeat:7,yoyo:true},'+=1')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_0_c.pause();
       
        ANIM.anim_interact_0_d = new TimelineMax();
        ANIM.anim_interact_0_d
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('ronquido4');
            })
            .addCallback(function(){
                ANIM.toogleClass(document.querySelector('#escena_00 .princesa4'),'flipped');
            }, '+=4')
            .addCallback(function(){
                ANIM.toogleClass(document.querySelector('#escena_00 .princesa4'),'flipped');
            }, '+=3.5')
            .addCallback(function(){
                ANIM.toogleClass(document.querySelector('#escena_00 .princesa4'),'flipped');
            }, '+=0.2')
            .addCallback(function(){
                ANIM.toogleClass(document.querySelector('#escena_00 .princesa4'),'flipped');
            }, '+=0.2')
            .addCallback(function(){
                ANIM.toogleClass(document.querySelector('#escena_00 .princesa4'),'flipped');
            }, '+=0.2')
            .addCallback(function(){
                ANIM.toogleClass(document.querySelector('#escena_00 .princesa4'),'flipped');
            }, '+=0.2')
            .addCallback(function(){
                ANIM.toogleClass(document.querySelector('#escena_00 .princesa4'),'flipped');
            }, '+=0.2')
            .addCallback(function(){
                ANIM.toogleClass(document.querySelector('#escena_00 .princesa4'),'flipped');
            }, '+=0.8')
            .addLabel('final')
           ;
        ANIM.anim_interact_0_d.pause();
       
        
        //////rey 
        ANIM.anim_interact_1_rey = new TimelineMax();
        ANIM.anim_interact_1_rey
         
            .addLabel('inicio')
            .addCallback(function(){
                    ANIM.randomXposPrincesas();
                })
                .staggerTo('#escena_01 .princesa',1,{y:0}, 0.1)
                .addCallback(function(){
                    Player.playSoundFX('risitas');
                })
                .to('#escena_01 .princesa',0.1,{y:5, repeat:5, yoyo:true})
                .staggerTo('#escena_01 .princesa',1,{y:150}, 0.1)
            .addCallback(function(){
                Player.playSoundFX('suspiro_rey');
            })
            .to('#escena_01 .ceja',1,{y:5, x:5,rotation:-10, transformOrigin:'5px 30px'})
            .to('#escena_01 .ceja',0.1,{y:5, x:5,rotation:-15, yoyo:true, repeat:9, transformOrigin:'5px 30px'})
            .to('#escena_01 .ceja',1,{y:5, x:5,rotation:-10, transformOrigin:'5px 30px'})
            .to('#escena_01 .ceja',0.5,{y:0, x:0,rotation:0, transformOrigin:'5px 30px'})
            .addLabel('final')
            
             ;
        ANIM.anim_interact_1_rey.pause();
        
        //////soldado abuela
        ANIM.anim_interact_2_soldado = new TimelineMax();
        ANIM.anim_interact_2_soldado
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('magia');
            })
            .to('#escena_02 .soldado',1,{y:20, rotation:-2, transformOrigin:"1000px 500px"},'+=1')
            .to('#escena_02 .soldado .cabeza',1,{rotation:-10, transformOrigin:"200px 200px"})
            .to('#escena_02 .soldado .cabeza',1,{rotation:0, transformOrigin:"200px 200px"})
            .to('#escena_02 .soldado',1,{y:0, rotation:0, transformOrigin:"1000px 500px"})
            .to('#escena_02 .soldado',0.3,{alpha:0.3, repeat:7, yoyo:true})
            .to('#escena_02 .soldado',0.3,{alpha:0.7})
            .addLabel('final')
            
             ;
        ANIM.anim_interact_2_soldado.pause();
        
        //////soldado trans 
        ANIM.anim_interact_3 = new TimelineMax();
        ANIM.anim_interact_3
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('murmullos_pasos_esc4');
            })
            .to('#escena_03 .soldado',6,{alpha:1},'+=3')
            .to('#escena_03 .soldado',0.4,{y:-10,x:-60,rotation:1, transformOrigin:"342px 826px"},'+=1')
            .to('#escena_03 .soldado',0.4,{y:0,x:-120,rotation:0, transformOrigin:"342px 826px"})
        
            .to('#escena_03 .soldado',0.4,{y:-10,x:-160,rotation:1, transformOrigin:"342px 826px"})
            .to('#escena_03 .soldado',0.4,{y:0,x:-240,rotation:0, transformOrigin:"342px 826px"})
        
            .to('#escena_03 .soldado',0.4,{y:-10,x:-300,rotation:1, transformOrigin:"342px 826px"})
            .to('#escena_03 .soldado',0.4,{y:0,x:-360,rotation:0, transformOrigin:"342px 826px"})
        
            .to('#escena_03 .soldado',0.4,{y:-10,x:-420,rotation:1, transformOrigin:"342px 826px"})
            .to('#escena_03 .soldado',0.4,{y:0,x:-480,rotation:0, transformOrigin:"342px 826px"})
        
            .to('#escena_03 .soldado',0.4,{y:-10,x:-540,rotation:1, transformOrigin:"342px 826px"})
            .to('#escena_03 .soldado',0.4,{y:0,x:-600,rotation:0, transformOrigin:"342px 826px"})
        
            .to('#escena_03 .soldado',0.4,{y:-10,x:-670,rotation:1, transformOrigin:"342px 826px"})
            .to('#escena_03 .soldado',0.4,{y:0,x:-730,rotation:0, transformOrigin:"342px 826px"})
        
            .to('#escena_03 .soldado',0.4,{y:-10,x:-820,rotation:1, transformOrigin:"342px 826px"},'+=5.3')
            .to('#escena_03 .soldado',0.4,{y:0,x:-880,rotation:0, transformOrigin:"342px 826px"})
        
            .to('#escena_03 .soldado',0.4,{y:-10,x:-940,rotation:1, transformOrigin:"342px 826px"})
            .to('#escena_03 .soldado',0.4,{y:0,x:-1020,rotation:0, transformOrigin:"342px 826px"})
        
            .to('#escena_03 .soldado',0.4,{y:-10,x:-1080,rotation:1, transformOrigin:"342px 826px"})
            .to('#escena_03 .soldado',0.4,{y:0,x:-1160,rotation:0, transformOrigin:"342px 826px"})
        
            .to('#escena_03 .soldado',0.4,{y:-10,x:-1220,rotation:1, transformOrigin:"342px 826px"})
            .to('#escena_03 .soldado',0.4,{y:0,x:-1300,rotation:0, transformOrigin:"342px 826px"})
        
            .to('#escena_03 .soldado',0.4,{y:-10,x:-1360,rotation:1, transformOrigin:"342px 826px"})
            .to('#escena_03 .soldado',0.4,{y:0,x:-1420,rotation:0, transformOrigin:"342px 826px"})
        
            .to('#escena_03 .soldado',0.4,{y:-10,x:-1480,rotation:1, transformOrigin:"342px 826px"})
            .to('#escena_03 .soldado',0.4,{y:0,x:-1560,rotation:0, transformOrigin:"342px 826px"})
        
            .to('#escena_03 .soldado',0.4,{y:-10,x:-1620,rotation:1, transformOrigin:"342px 826px"})
            .to('#escena_03 .soldado',0.4,{y:0,x:-1700,rotation:0, transformOrigin:"342px 826px"})
            
            .to('#escena_03 .soldado',0.4,{y:-10,x:-1780,rotation:1, transformOrigin:"342px 826px"})
            .to('#escena_03 .soldado',0.4,{y:0,x:-2190,rotation:0, transformOrigin:"342px 826px"})
            
            .to('#escena_03 .soldado2',1,{x:0},'+=1')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_3.pause(); 
        
        //////soldado trans  BOSQUE
        ANIM.anim_interact_4_soldado = new TimelineMax();
        ANIM.anim_interact_4_soldado
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('magia_hojas');
            })
            .addCallback(function(){
                Player.playSoundFX('magia');
            },'+=4')
            .to('#escena_04 .soldado1',1.5,{alpha:1, ease:Bounce.easeOut})
            .to('#escena_04 .soldado1',1,{alpha:0},'+=2')
            .addCallback(function(){
                Player.playSoundFX('magia');
            },'+=1')
            .to('#escena_04 .soldado2',1.5,{alpha:1, ease:Bounce.easeOut})
            .to('#escena_04 .soldado2',1,{alpha:0},'+=2')
            .addCallback(function(){
                Player.playSoundFX('magia');
                Player.playSoundFX('magia_hojas');
            },'+=1')
            .to('#escena_04 .soldado3',1.5,{alpha:1, ease:Bounce.easeOut})
            .to('#escena_04 .soldado3',1,{alpha:0},'+=2')
            .addCallback(function(){
                Player.playSoundFX('magia');
            },'+=1')
            .to('#escena_04 .soldado4',1.5,{alpha:1, ease:Bounce.easeOut})
            .to('#escena_04 .soldado4',1,{alpha:0},'+=2')
            .addCallback(function(){
                Player.playSoundFX('magia');
            },'+=1')
            .to('#escena_04 .soldado5',1.5,{alpha:1, ease:Bounce.easeOut})
            .to('#escena_04 .soldado5',1,{alpha:0},'+=2')
           
            .addLabel('final')
            
             ;
        ANIM.anim_interact_4_soldado.pause();
        
        //////Hojas plata
        ANIM.anim_interact_4_arbol_plata = new TimelineMax();
        ANIM.anim_interact_4_arbol_plata
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('magia_hojas');
                ANIM.animaBrillos('plata');
                ANIM.animaBrillos('oro');
                ANIM.animaBrillos('diamante');
            })
            .staggerTo('#escena_04 .hoja_plata',0.3,{alpha:1}, 0.1)
            .staggerTo('#escena_04 .hoja_oro',0.3,{alpha:1}, 0.1,'-=2')
            .staggerTo('#escena_04 .hoja_diamante',0.3,{alpha:1}, 0.1,'-=2')
            .staggerTo('#escena_04 .estrellas1 .estrella', 0.3, {alpha:1, repeat:27, yoyo:true}, 0.3, '-=4')
            .staggerTo('#escena_04 .estrellas2 .estrella', 0.3, {alpha:1, repeat:27, yoyo:true}, 0.3, '-=12')
            .staggerTo('#escena_04 .estrellas3 .estrella', 0.3, {alpha:1, repeat:27, yoyo:true}, 0.3, '-=14')
           
            .addLabel('final')
            
             ;
        ANIM.anim_interact_4_arbol_plata.pause();
        
        //////Tomando VINO
        ANIM.anim_interact_5_copas = new TimelineMax();
        ANIM.anim_interact_5_copas
         
            .addLabel('inicio')
            .addCallback(function(){
                ANIM.cambiaVolume('musica_esc6',1,0.2,3);
            })
            .addCallback(function(){
                 Player.playSoundFX('sorbo');
            }, '+=2')
            .to('#escena_05 .vino2 .vinoC',0.3,{alpha:0}, '+=2')
            .to('#escena_05 .vino2 .vinoB',0.3,{alpha:0}, '+=1')
            .to('#escena_05 .vino2 .vinoA',0.3,{alpha:0}, '+=1')
            .addCallback(function(){
                 Player.playSoundFX('desconcierto');
            })
            .to('#escena_05 .ceja',0.5,{y:-20})
            .to('#escena_05 .ceja',0.5,{y:0})
            .to('#escena_05 .vino1 .vinoC',0.3,{alpha:0}, '+=3')
            .to('#escena_05 .vino1 .vinoB',0.3,{alpha:0}, '+=1')
            .to('#escena_05 .vino1 .vinoA',0.3,{alpha:0}, '+=1')
            .addCallback(function(){
                 Player.playSoundFX('desconcierto2');
            }, '+=1')
            .to('#escena_05 .ceja',0.5,{y:-20})
            .addCallback(function(){
                 Player.playSoundFX('mordisco1');
            }, '+=1')
            .to('#escena_05 .manzana1.entera',0.1,{alpha:0})
            .to('#escena_05 .manzana1.mordida',0.1,{alpha:1},'-=0.1')
            .addCallback(function(){
                 Player.playSoundFX('mordisco2');
            }, '+=3')
            .to('#escena_05 .manzana2.entera',0.1,{alpha:0})
            .to('#escena_05 .manzana2.mordida',0.1,{alpha:1},'-=0.1')
            .addCallback(function(){
                ANIM.callmeOnlyOneTime();
                ANIM.cambiaVolume('musica_esc6',0.2,1,3);
            },'+=2')
            .addLabel('final')
             ;
        ANIM.anim_interact_5_copas.pause();
        
        //////BOTE
        ANIM.anim_interact_6_bote = new TimelineMax();
        ANIM.anim_interact_6_bote
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('magia');
            })
            .to('#escena_06 .soldado',1.5,{alpha:1}, '+=1')
            .to('#escena_06 .bote_container',3,{rotation:0, transformOrigin:'260px 444px',ease: Elastic.easeOut.config(1,0.3)}, '+=1')
            .addCallback(function(){
                Player.playSoundFX('desconcierto2');
            },'-=2.8')
            .addLabel('final')
             ;
        ANIM.anim_interact_6_bote.pause();  
      
        //////Escondidas
        ANIM.anim_interact_7_escondidas = new TimelineMax();
        ANIM.anim_interact_7_escondidas
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('trompeta');
            })
            .addCallback(function(){
                Player.playSoundFX('brillo_hojas');
            },'+=5')

            .to('#escena_07 .plato',0.1,{alpha:1})
            .addCallback(function(){
                ANIM.animaBrillosPlato();
            })
            .addCallback(function(){
                Player.playSoundFX('desconcierto');
            },'+=1')
            .to('#escena_07 .princesa6',0.5,{x:0,y:0, ease:Power1.easeIn})
            .to('#escena_07 .princesa12',0.5,{x:0,y:0, ease:Power1.easeIn},'-=0.5')
        
            .addCallback(function(){
                Player.playSoundFX('asombro');
            },'+=0.5')
            .to('#escena_07 .princesa5',0.5,{x:0,y:0, ease:Power1.easeIn})
            .to('#escena_07 .princesa11',0.5,{x:0,y:0, ease:Power1.easeIn},'-=0.5')
            
            .addCallback(function(){
                Player.playSoundFX('asombro_multiple');
            },'+=0.3')
        
            .to('#escena_07 .princesa4',0.5,{x:0,y:0, ease:Power1.easeIn})
            .to('#escena_07 .princesa10',0.5,{x:0,y:0, ease:Power1.easeIn},'-=0.5')
        
            .to('#escena_07 .princesa3',0.5,{x:0,y:0, ease:Power1.easeIn},'-=0.1')
            .to('#escena_07 .princesa9',0.5,{x:0,y:0, ease:Power1.easeIn},'-=0.5')
        
            .to('#escena_07 .princesa2',0.5,{x:0,y:0, ease:Power1.easeIn},'-=0.3')
            .to('#escena_07 .princesa8',0.5,{x:0,y:0, ease:Power1.easeIn},'-=0.5')
        
            .to('#escena_07 .princesa1',0.5,{x:0,y:0, ease:Power1.easeIn},'-=0.4')
            .to('#escena_07 .princesa7',0.5,{x:0,y:0, ease:Power1.easeIn},'-=0.5')
            .addLabel('final')
             ;
        ANIM.anim_interact_7_escondidas.pause(); 
        
        
        //////FINAL
        ANIM.anim_interact_8 = new TimelineMax({repeat:-1});
        ANIM.anim_interact_8
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('musica_esc9');
            })
            .addCallback(function(){
                ANIM.bailanFinales();
                ANIM.animaBrillosSuelo();
            },'+=1')
            .to('#escena_08 .baile',0.1,{x:0},'+=62')
            .addLabel('final')
             ;
        ANIM.anim_interact_8.pause();
        
        
        ANIM.arr_interacts = [
            ANIM.anim_interact_0_a,
            ANIM.anim_interact_0_b,
            ANIM.anim_interact_0_c,
            ANIM.anim_interact_0_d,
            ANIM.anim_interact_1_rey,
            ANIM.anim_interact_2_soldado,
            ANIM.anim_interact_3,
            ANIM.anim_interact_4_soldado,
            ANIM.anim_interact_4_arbol_plata,
            ANIM.anim_interact_5_copas,
            ANIM.anim_interact_6_bote,
            ANIM.anim_interact_7_escondidas,
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
        ANIM.forceDayLigth();

        TweenMax.set('#escena_01 .ceja',{y:0, x:0,rotation:0, transformOrigin:'5px 30px'});
        TweenMax.killTweensOf("#escena_01 .nube");
        TweenMax.set('#escena_01 .nube',{x:0});
        try{
            ANIM.anim_flores.pause();
        } catch(err){}
        try{
            ANIM.anim_princesas_ventana.pause();
        } catch(err){}
        TweenMax.set('#escena_01 .flores2 .flor',{scale:1.5});
        TweenMax.set('#escena_01 .flores3 .flor',{scale:1.8});
        TweenMax.set('#escena_01 .princesa',{y:150});
        
        TweenMax.set('#escena_02 .soldado',{y:0, alpha:1, rotation:0, transformOrigin:"1000px 500px"});
        TweenMax.set('#escena_02 .soldado .cabeza',{rotation:0, transformOrigin:"200px 200px"});
        
        TweenMax.set('#escena_03 .soldado',{alpha:0,y:0,x:0,rotation:0,rotationY:0,transformOrigin:"342px 826px"});
        TweenMax.set('#escena_03 .soldado2',{x:-400, rotation:-15, scale:0.9});
        
        TweenMax.set('#escena_04 .soldado',{alpha:0});
        TweenMax.set('#escena_04 .soldado3',{scale:0.7});
        TweenMax.set('#escena_04 .estrellas1 .estrella',{alpha:0});
        TweenMax.set('#escena_04 .estrellas2 .estrella',{alpha:0});
        TweenMax.set('#escena_04 .estrellas3 .estrella',{alpha:0});
        TweenMax.set('#escena_04 .hoja_plata',{alpha:0});
        TweenMax.set('#escena_04 .hoja_oro',{alpha:0});
        TweenMax.set('#escena_04 .hoja_diamante',{alpha:0});
        TweenMax.killTweensOf("#escena_04 .estrellaA");
        TweenMax.killTweensOf("#escena_04 .estrellaB");
        ANIM.setHojas();
        
        TweenMax.set('#escena_05 .vinoC',{alpha:1});
        TweenMax.set('#escena_05 .vinoB',{alpha:1});
        TweenMax.set('#escena_05 .vinoA',{alpha:1});
        TweenMax.set('#escena_05 .manzana1.mordida',{alpha:0});
        TweenMax.set('#escena_05 .manzana2.mordida',{alpha:0});
        TweenMax.set('#escena_05 .manzana1.entera',{alpha:1});
        TweenMax.set('#escena_05 .manzana2.entera',{alpha:1});
        TweenMax.set('#escena_05 .ceja',{y:0});
        TweenMax.killTweensOf("#escena_05 .baile1");
        TweenMax.killTweensOf("#escena_05 .baile2");
        TweenMax.killTweensOf("#escena_05 .baile3");
        TweenMax.set('#escena_05 .baile1',{x:1000});
        TweenMax.set('#escena_05 .baile2',{x:-500});
        TweenMax.set('#escena_05 .baile3',{x:-800});
        ANIM.oneTimeOnly = true; 
        
        
        TweenMax.set('#escena_06 .bote_container',{rotation:17.5, transformOrigin:'260px 444px'});
        TweenMax.set('#escena_06 .luz',{alpha:1});
        TweenMax.set('#escena_06 .soldado',{alpha:0});
        
        TweenMax.set('#escena_07 .princesa6',{x:150,y:280});
        TweenMax.set('#escena_07 .princesa12',{x:-150,y:280});
        TweenMax.set('#escena_07 .princesa5',{x:250,y:280});
        TweenMax.set('#escena_07 .princesa11',{x:-250,y:280});
        TweenMax.set('#escena_07 .princesa4',{x:350,y:200});
        TweenMax.set('#escena_07 .princesa10',{x:-350,y:200});
        TweenMax.set('#escena_07 .princesa3',{x:450,y:150});
        TweenMax.set('#escena_07 .princesa9',{x:-450,y:150});
        TweenMax.set('#escena_07 .princesa2',{x:550,y:120});
        TweenMax.set('#escena_07 .princesa8',{x:-550,y:120});
        TweenMax.set('#escena_07 .princesa1',{x:650,y:100});
        TweenMax.set('#escena_07 .princesa7',{x:-650,y:100});
        TweenMax.set('#escena_07 .plato',{alpha:0});
        TweenMax.set('#escena_07 .plato .estrella',{alpha:0});
        TweenMax.killTweensOf("#escena_07 .estrella");
        TweenMax.killTweensOf("#escena_07 .estrellaA");
        TweenMax.killTweensOf("#escena_07 .estrellaB");
        
        
        TweenMax.set('#escena_08 .cont_estrellas .estrella',{alpha:0});
        TweenMax.killTweensOf("#escena_08 .estrella");
        TweenMax.killTweensOf("#escena_08 .estrellaA");
        TweenMax.killTweensOf("#escena_08 .estrellaB");
        TweenMax.killTweensOf("#escena_08 .baile1");
        TweenMax.killTweensOf("#escena_08 .baile2");
        TweenMax.killTweensOf("#escena_08 .baile3");
        TweenMax.killTweensOf("#escena_08 .baile4");
        TweenMax.killTweensOf("#escena_08 .baile5");
        TweenMax.set('#escena_08 .baile1',{x:0, y:0, rotation:0});
        TweenMax.set('#escena_08 .baile2',{x:0, y:0, rotation:0});
        TweenMax.set('#escena_08 .baile3',{x:0, y:0, rotation:0});
        TweenMax.set('#escena_08 .baile4',{x:0, y:0, rotation:0});
        TweenMax.set('#escena_08 .baile5',{x:0, y:0, rotation:0});
        
    },
    toogleClass:(div, clase)=>{
        if(Utils.hasClass(div,clase)){
            ANIM.removeClass(div,clase);  
        } else {
            ANIM.addClass(div,clase);  
        }
//        div.classList.toggle(clase);
    },
    addClass:(div, clase)=>{
        div.classList.add(clase);
    },
    removeClass:(div, clase)=>{
        div.classList.remove(clase);
    },
    forceDayLigth:() => {
        ANIM.removeClass(document.querySelector('#escena_00 .fondo'),'sombra');
        ANIM.removeClass(document.querySelector('#escena_00 .interact'),'sombra');
        ANIM.removeClass(document.querySelector('#escena_00 .princesa'),'sombra');
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
                if(btn.hasClass('btn_luz')){
                    btn.click(function(){
                        const fondo0 = document.querySelector('#escena_00 .fondo');
                        const zona0 = document.querySelector('#escena_00 .interact');
                        ANIM.toogleClass(fondo0,'sombra');
                        ANIM.toogleClass(zona0,'sombra');
                        Player.playSoundFX('interruptor');
                    });
                }
                if(btn.hasClass('btn_princesa1')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_a.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_a.play(0);
                    });
                }
                 if(btn.hasClass('btn_princesa2')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_b.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_b.play(0);
                    });
                }
                 if(btn.hasClass('btn_princesa3')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_c.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_c.play(0);
                    });
                }
                 if(btn.hasClass('btn_princesa4')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_d.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_d.play(0);
                    });
                }
                break;
             case 1:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1_rey.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_1_rey.play(0);
                    });
                 }
                break;
            case 2:
                 
                btn.click(function(){
                    $(this).css({"display":"none"});
                    ANIM.anim_interact_2_soldado.eventCallback("onComplete", muestralo, [$(this), cb]);   
                    ANIM.anim_interact_2_soldado.play(0);
                });
                 
                 break;
             case 3:
                 if(btn.hasClass('primario')){
                     btn.click(function(){
                        $(this).css({"display":"none"});
                            ANIM.anim_interact_3.eventCallback("onComplete", muestralo, [$(this), cb]);
                            ANIM.anim_interact_3.play(0);
                        });
                    }
                 break;
            case 4:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_4_soldado.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_4_soldado.play(0);
                    });
                 }
                 
                 if(btn.hasClass('btn_arbol1')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_4_arbol_plata.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_4_arbol_plata.play(0);
                    });
                 } 
                
                 break;
             case 5:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_5_copas.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_5_copas.play(0);
                    });
                 }
                 break;
            case 6:
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_6_bote.eventCallback("onComplete", muestralo, [$(this), cb]); 
                        ANIM.anim_interact_6_bote.play(0);
                    });
                }
                 break;
             case 7:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_7_escondidas.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_7_escondidas.play(0);
                    });
                 }
                 break;
             case 8:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});  
                        ANIM.anim_interact_8.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_8.play(0);
                    });
                 }
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
        $('#escena_07').css({'top':dif+'px'});
//        $('#escena_08').css({'bottom':dif+'px'});
//        $('#escena_09').css({'bottom':dif+'px'});
    }
};