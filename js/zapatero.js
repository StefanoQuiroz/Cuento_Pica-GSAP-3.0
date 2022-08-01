let JSON_CUENTO = {
    nombre:"El zapatero y los duendes",
    tipo:"Cuento de hadas",
    descripcion:"Este cuento de la tradición popular europea recogido por los hermanos Grimm (Alemania, s. XIX) narra la historia de un zapatero muy pobre al que solo le queda cuero para fabricar un solo par de zapatos. Por la noche deja el cuero cortado y todo listo para armarlos a la mañana siguiente, pero al levantarse se da cuenta de que los zapatos están terminados sobre la mesa del taller. El zapatero y su mujer, asombrados, se proponen investigar qué es lo que ha sucedido.",
    creditos:[
                ["Adaptación:","Verónica Uribe Berenguer"],
                ["Ilustraciones:","Ignacio del Real Marimón"],
                ["Narración:","Constanza Ried Silva"],
                ["Arreglos musicales:","Jorge Mercado Pino"],
                ["Edición a cargo de:","Constanza Ried Silva<br>Verónica Vives Cofré<br>Fundación Entrelíneas"],
                ["Montaje y desarrollo web:","Agencia Match"],
                ["Créditos de sonidos:","Revise detalles <a href='#' target='_blank'>aquí</a>"] 
    ],
    ID:0, 
    imagenes:[
        "img/zapatero_duendes/esc_0_fondo.jpg",
        "img/zapatero_duendes/esc_1_fondo.jpg",
        "img/zapatero_duendes/esc_2_fondo.jpg",
        "img/zapatero_duendes/esc_3_fondo.jpg",
        "img/zapatero_duendes/esc_4_fondo.jpg",
        "img/zapatero_duendes/esc_5_fondo.jpg",
        "img/zapatero_duendes/esc_7_fondo.jpg",
        "img/zapatero_duendes/esc_8_fondo.jpg",
        "img/zapatero_duendes/esc_8_fondo2.png",
        "img/zapatero_duendes/tooltip_drag_0.jpg",
        "img/zapatero_duendes/tooltip_drag_7.jpg",
        "img/zapatero_duendes/esc_1_botas.png",
        "img/zapatero_duendes/esc_1_duende_pluma_parada.png",
        "img/zapatero_duendes/esc_1_guardas.png",
        "img/zapatero_duendes/esc_2_cliente_feliz.png",
        "img/zapatero_duendes/esc_3_botas.png",
        "img/zapatero_duendes/esc_6_duendes.png",
        "img/zapatero_duendes/mega_sprite_2.png",
        "img/zapatero_duendes/spite_volutas_humo.png",
    ], 
    fx_sonido:[
        {nombre:"magia",url:"audio/zapatero/fx/magia.mp3"},
        {nombre:"duendes",url:"audio/zapatero/fx/duendes.mp3"},
        {nombre:"cliente",url:"audio/zapatero/fx/cliente.mp3"},
        {nombre:"gato_growl",url:"audio/zapatero/fx/gato_growl.mp3"},
        {nombre:"gato_maulla",url:"audio/zapatero/fx/gato_maulla.mp3"},
        {nombre:"musica_compradores",url:"audio/zapatero/fx/musica_compradores2.mp3"},
        {nombre:"musica_duendes",url:"audio/zapatero/fx/musica_duendes2.mp3"},
        {nombre:"cancion_final",url:"audio/zapatero/fx/cancion_final.mp3"},
              ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/zapatero_duendes/mini_0.jpg",
            audio:"audio/zapatero/escena_01_new2.mp3",
            parrafos:
            [
                {
                    texto: "",
                    tiempo:[0,10.1] 
                },
                //Había una vez un zapatero (agregar este subtítulo con la animación)
                {
                    texto: "que se había vuelto tan pobre, tan pobre,",
                    tiempo:[10.5, 14.5]
                },
                {
                    texto: "que ya no tenía cuero más que para fabricar un solo par de zapatos.",
                    tiempo:[15.4, 23]
                },
                {
                    texto: "Por la noche cortó el último cuero que le quedaba",
                    tiempo:[24.6, 29.6]
                },
                {
                    texto: "y dejó todo preparado para armar los zapatos por la mañana.",
                    tiempo:[30,5, 36.8]
                }
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/zapatero_duendes/mini_1.jpg",
            audio:"audio/zapatero/escena_02_new.mp3",
            parrafos:
            [
                {
                    texto: "Al día siguiente, cuando entró a su taller... ¡qué sorpresa!",
                    tiempo:[0,7.5]  
                },
                {
                    texto: "Los zapatos estaban terminados sobre la mesa.",
                    tiempo:[8,13 ]
                },
                {
                    texto: "¿Cómo había sucedido aquello?",
                    tiempo:[14,16.4]   
                },
                {
                    texto: "El zapatero los observó con cuidado:",
                    tiempo:[17,22]  
                },
                {
                    texto: "las terminaciones eran finísimas.",
                    tiempo:[22.5,26.4]  
                },
                {
                    texto: "No había una sola mala puntada,",
                    tiempo:[26.9,30.7]  
                },
                {
                    texto: "los ojetillos estaban alineados, el cuero suave.",
                    tiempo:[31.2,36.4]  
                },
                {
                    texto: "–¡Un trabajo perfecto! –exclamó maravillado.",
                    tiempo:[36.9,42.5]  
                }
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/zapatero_duendes/mini_2.jpg",
            audio:"audio/zapatero/escena_03.mp3",
            parrafos:
            [
                {
                    texto: "Esa misma mañana llegó un comprador muy elegante",
                    tiempo:[0,5.2]  
                },
                {
                    texto: "que pagó por los zapatos mucho dinero.",
                    tiempo:[5.7,9.3]  
                },
                {
                    texto: "–Vaya, qué suerte la mía –dijo el zapatero.",
                    tiempo:[9.8,15.5]   
                },
                {
                    texto: "Con ese dinero compró cuero, cintas y botones.",
                    tiempo:[16,22.3]  
                },
                {
                    texto: "Preparó los materiales y los dejó sobre la mesa del taller",
                    tiempo:[22.8,28]  
                },
                {
                    texto: "para armar los zapatos por la mañana.",
                    tiempo:[28.5,32]  
                }
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/zapatero_duendes/mini_3.jpg",
            audio:"audio/zapatero/escena_04.mp3",
            parrafos:
            [
                {
                    texto: "El zapatero se levantó temprano para empezar a trabajar...",
                    tiempo:[0,4.6]  
                },
                {
                    texto: "pero, los dos pares de zapatos ya estaban listos,",
                    tiempo:[5.1,9.8]  
                },
                {
                    texto: "hechos con el mismo cuidado que los primeros.",
                    tiempo:[10.3,14.3]   
                },
                {
                    texto: "Los vendió ese mismo día y le pagaron muy bien por ellos.",
                    tiempo:[14.8,21.5]  
                }
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/zapatero_duendes/mini_4.jpg",
            audio:"audio/zapatero/escena_05.mp3",
            parrafos:
            [
                {
                    texto: "Con el dinero que ganó,",
                    tiempo:[0,2]  
                },
                {
                    texto: "el zapatero compró cuero, cintas y botones para cuatro pares de zapatos.",
                    tiempo:[2.5,10]  
                },
                {
                    texto: "Como siempre, dejó todo dispuesto",
                    tiempo:[10.5,13.8]   
                },
                {
                    texto: "y en la mañana aparecieron nuevamente los zapatos listos",
                    tiempo:[14.3,19]  
                },
                {
                    texto: "como por arte de magia.",
                    tiempo:[19.5,23]  
                },
                {
                    texto: "Así siguió sucediendo, día tras día, y noche tras noche,",
                    tiempo:[23.5,29.6]  
                },
                {
                    texto: "hasta que el zapatero y su mujer tuvieron dinero para vivir tranquilamente.",
                    tiempo:[30.1,37]  
                }
                
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/zapatero_duendes/mini_5.jpg",
            audio:"audio/zapatero/escena_06.mp3",
            parrafos:
            [
                {
                    texto: "Una noche, poco antes de Navidad,",
                    tiempo:[0,3.2]  
                },
                {
                    texto: "la mujer del zapatero le dijo:",
                    tiempo:[3.7,7.5]  
                },
                {
                    texto: "–¿Te parece que nos quedemos despiertos esta noche",
                    tiempo:[8,11.4]   
                },
                {
                    texto: "para ver qué sucede en el taller",
                    tiempo:[11.9,14.6]  
                },
                {
                    texto: "y así sepamos quién nos presta tan buena ayuda?",
                    tiempo:[15.1,21]  
                },
                {
                    texto: "Después de cenar, se escondieron y esperaron.",
                    tiempo:[21.5,26]  
                }
            ]
        },
        {
            nombre:"Escena 7",
            miniatura:"img/zapatero_duendes/mini_6.jpg",
            audio:"audio/zapatero/escena_07.mp3",
            parrafos:
            [
                {
                    texto: "A medianoche aparecieron dos hombrecitos desnudos",
                    tiempo:[0,5]  
                },
                {
                    texto: "saltando, cantando y haciendo piruetas.",
                    tiempo:[5.5,9.5]  
                },
                {
                    texto: "¡Eran muy graciosos!",
                    tiempo:[10,13.5]   
                },
                {
                    texto: "Tomaron el cuero y con sus pequeños deditos",
                    tiempo:[14,18.2]  
                },
                {
                    texto: "empezaron a clavar, a coser, y a pegar con tanta rapidez y habilidad",
                    tiempo:[18.7,25]  
                },
                {
                    texto: "que el zapatero quedó deslumbrado.",
                    tiempo:[25.5,29]  
                },
                {
                    texto: "Cuando se fueron, la mujer dijo a su marido:",
                    tiempo:[29.5,34.2]  
                },
                {
                    texto: "–¿Viste que estaban desnudos? ¡Deben pasar mucho frío! ¿Y si les hacemos un regalo?",
                    tiempo:[34.7,42.5]  
                }
            ]
        },
        {
            nombre:"Escena 8",
            miniatura:"img/zapatero_duendes/mini_7.jpg",
            audio:"audio/zapatero/escena_08.mp3",
            parrafos:
            [
                {
                    texto: "Al zapatero le pareció bien la idea de su esposa.",
                    tiempo:[0,4]  
                },
                {
                    texto: "La mujer cosió unas camisitas, unos pantaloncitos y unas chaquetas;",
                    tiempo:[4.5,11.3]  
                },
                {
                    texto: "y el zapatero hizo un par de preciosos botines para cada uno.",
                    tiempo:[11.8,17.5]   
                },
                {
                    texto: "Cuando tuvieron todo listo,",
                    tiempo:[18,20.8]  
                },
                {
                    texto: "dejaron los regalos en la mesa del taller.",
                    tiempo:[21.3,25]  
                },
                {
                    texto: "A medianoche entraron los duendes",
                    tiempo:[25.5,29.5]  
                },
                {
                    texto: "y se sorprendieron al ver la ropa en lugar del cuero cortado.",
                    tiempo:[30,35]  
                },
                {
                    texto: "Se vistieron, se calzaron los botines y se pusieron los dos pequeños sombreros",
                    tiempo:[35.5,43.5]  
                },
                {
                    texto: "que había alcanzado a terminar la mujer del zapatero.",
                    tiempo:[44,48.5]  
                }
            ]
        },
        {
            nombre:"Escena 9",
            miniatura:"img/zapatero_duendes/mini_8.jpg",
            audio:"audio/zapatero/escena_09_new.mp3",
            parrafos:
            [
                {
                    texto: "Los duendes estaban felices. Saltaron, bailaron y cantaron:",
                    tiempo:[0,7]  
                },
                {
                    texto: "Somos dos elegantes caballeros con botines, chaqueta y sombrero. ¿Para qué seguir siendo zapateros?",
                    tiempo:[7.5,35.5]  
                },
                {
                    texto: "Cantando se alejaron, y no regresaron nunca más.",
                    tiempo:[36,41]   
                },
                {
                    texto: "El zapatero y su mujer quedaron muy contentos",
                    tiempo:[41.5,45.6]  
                },
                {
                    texto: "de haber hecho felices a los duendes",
                    tiempo:[46.1,49.2]  
                },
                {
                    texto: "que tanto los habían ayudado.",
                    tiempo:[49.7,52.3]  
                },
                {
                    texto: " ",
                    tiempo:[52.8,65.6]  
                }
            ]
        },
    ]    
};

let ANIM = {
    main_tl:undefined,
    creapartes:() => {
        // crear trigos escena 03
//        
        let izq = $('#escena_01 .contenedor_volutas .izq');
        let der = $('#escena_01 .contenedor_volutas .der');
        let arr = Array(4).fill(4);
        
        izq.append(ANIM.creavolutas(arr));
        izq.append(ANIM.creavolutas(arr));
        der.append(ANIM.creavolutas(arr));
        der.append(ANIM.creavolutas(arr));
    },
    creavolutas:(arr) => {
        let newArr = arr.map((item, i) => {
            
            return `<div class="sprite voluta${(i+1)}"></div>`;
        });
        
        return newArr.join("");
    },
    fondoBaila:(i = 0) => {
        let boolean = i % 2 == 0 ? 0 : 1;
        let xval = Utils.randomInt(0,80)-40;
        let yval = Utils.randomInt(0,40)-20;
        let alpha = i % 2 == 0 ? 1 : 0;
        console.log('duj', i);
        if(i <= 61){
            if(boolean === 0 || i === 61){
                xval = 0;
                yval = 0;
            }
            TweenMax.to('#escena_08 .fondo.fondo1',1,{alpha:alpha}); 
            TweenMax.to('#escena_08 .fondo.fondo2',1,{x:xval,y:yval, 
                                                      onComplete:
                                                        function(a){
                                                            ANIM.fondoBaila(a+1);
                                                        }, 
                                                    onCompleteParams:[i]});
        }
    },
    bichosBailan:(i = 0) => {
        console.log(i);
        let alphaTor = i % 2 == 0 ? 0 : 1;
        let xval = 40;
        let yval = 40;
        let xvalChina = Utils.randomInt(0,60);
        let yvalChina = Utils.randomInt(0,60)*-1;
        let rChina = -15;
        let xValEs = 90;
        let yValEs = -100;
        let yValFIN = -50;
        let rEs = 10;
        if(i < 28){
            
            if(alphaTor === 0){
                xvalChina = 0;
                yvalChina = 0;
                rChina = 0;
                xValEs *= -1;
                yValFIN *= -1;
                rEs *= -1;
            }
            TweenMax.to('#escena_08 .chinita',2,{
                rotation:rChina,
//                x:Utils.randomInt(0,xval)-xval*0.5,
//                y:Utils.randomInt(0,yval)-yval,
                x:xvalChina,
                y:yvalChina,
                onComplete:
                    function(a){
                        ANIM.bichosBailan(a+1);
                    }, 
                onCompleteParams:[i],
                ease: Back.easeInOut.config(4),
                transformOrigin:'15px 108px'
            });
//            TweenMax.to('#escena_08 .escarabajo',2,{
////                rotation:Utils.randomInt(0,30)-15,
//                x:Utils.randomInt(0,xval)-xval*0.5,
////                y:Utils.randomInt(0,yval)-yval,
//                ease: Back.easeInOut.config(4),
//                transformOrigin:'205px 300px'
//            });
            TweenMax.to('#escena_08 .escarabajo',2,{ bezier:{curviness:1.25, 
                    values:[
                        {x:0, y:0, rotation:0},
                        {x:xValEs*0.5, y:yValEs, rotation:rEs*0.5},
                        {x:xValEs, y:yValFIN, rotation:rEs},
                        {x:xValEs*0.5, y:yValEs, rotation:rEs*0.5},
                        {x:0, y:0, rotation:0}
                    ]},
//                       ease:Expo.easeInOut
                    ease:Power0.easeNone,
                    transformOrigin:'205px 300px'
                  });
        }
        if(alphaTor == 1){   
            TweenMax.to('#escena_08 .chinita .chinita1',0.1,{alpha:0,delay:1});
            TweenMax.to('#escena_08 .chinita .chinita2',0.1,{alpha:1,delay:1});
            TweenMax.to('#escena_08 .escarabajo .escarabajo1',0.1,{alpha:0,delay:0.5});
            TweenMax.to('#escena_08 .escarabajo .escarabajo2',0.1,{alpha:1,delay:0.5});
//            TweenMax.to('#escena_08 .fondo',1,{scale:1});
        } else {
            TweenMax.to('#escena_08 .chinita .chinita1',0.1,{alpha:1,delay:1});
            TweenMax.to('#escena_08 .chinita .chinita2',0.1,{alpha:0,delay:1});
            TweenMax.to('#escena_08 .escarabajo .escarabajo1',0.1,{alpha:1,delay:0.5});
            TweenMax.to('#escena_08 .escarabajo .escarabajo2',0.1,{alpha:0,delay:0.5});
//            TweenMax.to('#escena_08 .fondo',1,{scale:1.01});
        }
    },
    init:() => {
        ANIM.creapartes();
//        let arrEscenas = JSON_CUENTO.escenas;
//        console.log(arrEscenas);
//        return;
        ANIM.main_tl = new TimelineMax({});
        
        ANIM.main_tl
        .set('.escena',{left:"-1920px"})
        
        /*INICIO*/
        .addLabel('escena_0')
        .set('#escena_00',{left:0},'+=0.1')
        .addLabel('0_0','+=2')

        .addLabel('subs_adicionales_1','+=9.5')
        .addLabel('0_1','+=12.5')
        .addLabel('0_2','+=17')
        .addLabel('0_3','+=25.5')
        .addLabel('0_4','+=31')
        .fromTo('#escena_00',22,{scale:2, transformOrigin:"755px 851px",x:-320, y:-20},{scale:1,x:0,y:0, ease: "expo.out"}, '+=16')
        .addLabel('fin_escena_0','+=1')
        
        /*zapatos grandes*/
        .to('#escena_01',0.01,{left:0},'+=16')
        .to('#escena_02',0.01,{left:'1920px'})
        .addLabel('escena_1')
        .addLabel('1_0','+=2')
        .addLabel('1_1','+=9.5')
        .addLabel('1_2','+=15')
        .addLabel('1_3','+=18.4')
        .addLabel('1_4','+=23')
        .addLabel('1_5','+=27.4')
        .addLabel('1_6','+=31.7')
        .addLabel('1_7','+=36.6')
        .fromTo('#escena_01 .fondo',23,{scale:0.4},{scale:1, ease: "expo.out"}, '+=2.1')
        .addLabel('fin_escena_1','+=18')
    
        
        /*cliente feliz*/
        .to('#escena_02',0.01,{left:0},'+=46')
        .to('#escena_01',0.01,{left:'1920px'})
        .addLabel('escena_2')
        .addLabel('2_0',"+=2")
        .addLabel('play_volutas_a','+=2.2')
        .addLabel('2_1',"+=7.2")
        .addLabel('2_2',"+=11.3")
        .addLabel('2_3',"+=17.5")
        .addLabel('2_4',"+=24.3")
        .addLabel('2_5',"+=30")
       
        .addLabel('fin_escena_2', '+=34')
        
        /*zapato y cosas en la mesa*/
        .to('#escena_03',0.01,{left:0},'+=35')
        .to('#escena_02',0.01,{left:'1920px'})
        .addLabel('escena_3')
        .addLabel('3_0',"+=2")
        .addLabel('3_1',"+=6.6")
        .addLabel('3_2',"+=11.8")
        .addLabel('3_3',"+=16.3")
        .addLabel('fin_escena_3',"+=23.5")
        
          /*CASA y felicidad*/
        .to('#escena_04',1,{left:0},"+=25")
        .to('#escena_03',1,{left:"1920px"})
        .addLabel('escena_4')
        .addLabel('4_0',"+=2")
        .addLabel('play_volutas_b','+=2.2')
        .addLabel('4_1',"+=4") 
        .addLabel('4_2',"+=12") 
        .addLabel('4_3',"+=15.5") 
        .addLabel('4_4',"+=20.3") 
        .addLabel('4_5',"+=23.7") 
        .addLabel('4_6',"+=30.3") 
        .fromTo('#escena_04',14,{scale:1.9, transformOrigin:"0px 900px",x:-320, y:-20},{scale:1,x:0,y:0, ease: "expo.out"}, '+=23.5')
        .addLabel('fin_escena_4',"+=0.5") 

        
        /*cocina*/
        .to('#escena_05',1,{left:0},"+=40")
        .to('#escena_04',1,{left:"1920px"})
        .addLabel('escena_5')
        .addLabel('5_0',"+=2")
        .addLabel('5_1',"+=5.2")
        .addLabel('5_2',"+=8.8")
        .addLabel('5_3',"+=12.1")
        .addLabel('5_4',"+=15")
        .addLabel('5_5',"+=21")
        .addLabel('fin_escena_5',"+=26")
        
         /*El gato gigante*/
        .to('#escena_06',1,{left:0},"+=41")
        .to('#escena_05',1,{left:"1920px"})
        .addLabel('escena_6')
        .addLabel('6_0',"+=2")
        .addLabel('6_1',"+=7") 
        .addLabel('6_2',"+=11.5") 
        .addLabel('6_3',"+=15.5") 
        .addLabel('6_4',"+=20.2") 
        .addLabel('6_5',"+=27") 
        .addLabel('6_6',"+=31") 
        .addLabel('6_7',"+=36.2") 
        .addLabel('fin_escena_6', "+=44.5")
        
         /*Cociendo*/
        .to('#escena_07',1,{left:0},"+=46")
        .to('#escena_06',1,{left:"1920px"})
        .addLabel('escena_7')
        .addLabel('7_0',"+=2")
        .addLabel('play_volutas_c','+=2.2')
        .addLabel('7_1',"+=6")
        .addLabel('7_2',"+=13.3")
        .addLabel('7_3',"+=19.5")
        .addLabel('7_4',"+=22.8")
        .addLabel('7_5',"+=27")
        .addLabel('7_6',"+=31.5")
        .addLabel('7_7',"+=37")
        .addLabel('7_8',"+=45.5")
        .addLabel('fin_escena_7',"+=50.5")
     
    
        /* bailando */
        /*FINAL*/
        .to('#escena_08',1,{left:0},"+=52")
        .to('#escena_07',1,{left:"1920px"})
        .addLabel('escena_8')
        .addLabel('8_0',"+=2")
        .addLabel('8_1',"+=9")
        .addLabel('8_2',"+=37.5")
        .addLabel('8_3',"+=43")
        .addLabel('8_4',"+=47.3")
        .addLabel('8_5',"+=50.8")
        .addLabel('8_6',"+=54.3")
        .addLabel('fin_escena_8',"+=67.6")
        
        
        
        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_00');
        },"escena_0");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(0, 0);
            Player.putSubtitulos(0, 0);
        },"0_0");
        
        ANIM.main_tl.addCallback(function(){
            $("#subtitulos p").html('Había una vez un zapatero');
        },"subs_adicionales_1");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(0, 1);
            Player.putSubtitulos(0, 1);
        },"0_1");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(0, 2);
            Player.putSubtitulos(0, 2);
        },"0_2");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(0, 3);
            Player.putSubtitulos(0, 3);
        },"0_3");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(0, 4);
            Player.putSubtitulos(0, 4);
        },"0_4");
          
        ANIM.main_tl.addCallback(function(){
            Player.activaBtnSiguiente();
            ANIM.main_tl.pause();
            ANIM.interactividad(0,undefined,'btn_drag');
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            
        },"fin_escena_0");
        
        
         /*zapatos grandes*/
        /*LLAMADAS Y FUNCIONES ESCENA 1*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_01');
        },"escena_1");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(1, 0);
            Player.putSubtitulos(1, 0);
        },"1_0");
        
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(1, 1);
            Player.putSubtitulos(1, 1);
        },"1_1");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(1, 2);
            Player.putSubtitulos(1, 2);
        },"1_2");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(1,3);
            Player.putSubtitulos(1, 3);
        },"1_3");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(1, 4);
            Player.putSubtitulos(1, 4);
        },"1_4");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(1, 5);
            Player.putSubtitulos(1, 5);
        },"1_5");
       ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(1, 6);
            Player.putSubtitulos(1, 6);
        },"1_6");
       ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(1, 7);
            Player.putSubtitulos(1, 7);
        },"1_7");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            ANIM.interactividad(1);
//            ANIM.interactividad(1,undefined,'secundario');
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            ANIM.displayInteract('#escena_01');
        },"fin_escena_1");
        
        /*cliente feliz*/
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_02');
        },"escena_2");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(2, 0);
            Player.putSubtitulos(2, 0);
        },"2_0");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.anim_interact_2_volutas_pipa.eventCallback("onComplete", function(){
                ANIM.anim_interact_2_volutas_pipa.play(0);
            });  
            ANIM.anim_interact_2_volutas_pipa.play(0);
        },"play_volutas_a");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(2, 1);
            Player.putSubtitulos(2, 1);
           
        },"2_1"); 
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(2, 2);
            Player.putSubtitulos(2, 2);
        },"2_2");
      
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(2, 3);
            Player.putSubtitulos(2, 3);
        },"2_3");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(2, 4);
            Player.putSubtitulos(2, 4);
        },"2_4");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(2, 5);
            Player.putSubtitulos(2, 5);
        },"2_5");
        
      
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(2,undefined,'btn_cejas');
            ANIM.interactividad(2,undefined,'btn_gatos');
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_2");
        
        /*zapatos y cosas en la mesa*/
         /*LLAMADAS Y FUNCIONES ESCENA 3*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_03');
        },"escena_3");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(3, 0);
            Player.putSubtitulos(3, 0);
        },"3_0");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(3, 1);
            Player.putSubtitulos(3, 1);
        },"3_1"); 
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(3, 2);
            Player.putSubtitulos(3, 2);
        },"3_2"); 
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(3, 3);
            Player.putSubtitulos(3, 3);
        },"3_3");
        
      
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(3);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_3");
        
        
          /*Casa y felicidad*/
        /*LLAMADAS Y FUNCIONES ESCENA 4*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_04');
        },"escena_4");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(4, 0);
            Player.putSubtitulos(4, 0);
        },"4_0");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(4, 1);
            Player.putSubtitulos(4, 1);
        },"4_1"); 
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(4, 2);
            Player.putSubtitulos(4, 2);
        },"4_2");
        
//        ANIM.main_tl.addCallback(function(){
//            ANIM.anim_interact_4_volutas_pipa.eventCallback("onComplete", function(){
//                ANIM.anim_interact_4_volutas_pipa.play(0);
//            });  
//            ANIM.anim_interact_4_volutas_pipa.play(0);
//        },"play_volutas_b");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(4, 3);
            Player.putSubtitulos(4, 3);
        },"4_3"); 
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(4, 4);
            Player.putSubtitulos(4, 4);
        },"4_4"); 
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(4, 5);
            Player.putSubtitulos(4, 5);
        },"4_5"); 
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(4, 6);
            Player.putSubtitulos(4, 6);
        },"4_6"); 
              
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(4);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_4");
        
        
         /*Cocina*/
         /*LLAMADAS Y FUNCIONES ESCENA 5*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_05');
        },"escena_5");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(5, 0);
            Player.putSubtitulos(5, 0);
        },"5_0");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(5, 1);
            Player.putSubtitulos(5, 1);
        },"5_1"); 
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(5, 2);
            Player.putSubtitulos(5, 2);
        },"5_2"); 
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(5, 3);
            Player.putSubtitulos(5, 3);
        },"5_3");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(5, 4);
            Player.putSubtitulos(5, 4);
        },"5_4"); 
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(5, 5);
            Player.putSubtitulos(5, 5);
        },"5_5"); 
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(5);
//            ANIM.interactividad(5,undefined,'btn_gato');
            ANIM.interactividad(5,undefined,'btn_silla');
            ANIM.interactividad(5,undefined,'btn_techo');
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            console.log("fin_escena 5");
        },"fin_escena_5");
        
        
        /*Gato Gigante*/
         /*LLAMADAS Y FUNCIONES ESCENA 6*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_06');
        },"escena_6");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(6, 0);
            Player.putSubtitulos(6, 0);
        },"6_0");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(6, 1);
            Player.putSubtitulos(6, 1);
        },"6_1"); 
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(6, 2);
            Player.putSubtitulos(6, 2);
        },"6_2"); 
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(6, 3);
            Player.putSubtitulos(6, 3);
        },"6_3");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(6, 4);
            Player.putSubtitulos(6, 4);
        },"6_4");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(6, 5);
            Player.putSubtitulos(6, 5);
        },"6_5");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(6, 6);
            Player.putSubtitulos(6, 6);
        },"6_6");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(6, 7);
            Player.putSubtitulos(6, 7);
        },"6_7");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            let o = {val:0};
            TweenMax.to(o, 1.5,{val:100, onComplete:function(){ //solo un timer para que aparezca después el boton
                ANIM.interactividad(6, undefined, 'btn_gato');
            }})
            ANIM.interactividad(6, undefined, 'btn_flor');
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_6");
        
        /*cociendo*/
        /*LLAMADAS Y FUNCIONES ESCENA 7*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_07');
        },"escena_7");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(7, 0);
            Player.putSubtitulos(7, 0);
        },"7_0");
        
//        ANIM.main_tl.addCallback(function(){
//            ANIM.anim_interact_7_volutas_pipa.eventCallback("onComplete", function(){
//                ANIM.anim_interact_7_volutas_pipa.play(0);
//            });  
//            ANIM.anim_interact_7_volutas_pipa.play(0);
//        },"play_volutas_c");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(7, 1);
            Player.putSubtitulos(7, 1);
        },"7_1"); 
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(7, 2);
            Player.putSubtitulos(7, 2);
        },"7_2"); 
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(7, 3);
            Player.putSubtitulos(7, 3);
        },"7_3");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(7, 4);
            Player.putSubtitulos(7, 4);
        },"7_4");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(7, 5);
            Player.putSubtitulos(7, 5);
        },"7_5");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(7, 6);
            Player.putSubtitulos(7, 6);
        },"7_6");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(7, 7);
            Player.putSubtitulos(7, 7);
        },"7_7");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(7, 8);
            Player.putSubtitulos(7, 8);
        },"7_8");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
//            ANIM.interactividad(7, Player.activaBtnSiguiente);
            ANIM.interactividad(7,undefined,'btn_drag');
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_7");
        
        //Final bailan
        /*LLAMADAS Y FUNCIONES ESCENA 8*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_08');
        },"escena_8");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(8, 0);
            Player.putSubtitulos(8, 0);
        },"8_0");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(8, 1);
            Player.putSubtitulos(8, 1);
        },"8_1");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(8, 2);
            Player.putSubtitulos(8, 2);
        },"8_2");

        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(8, 3);
            Player.putSubtitulos(8, 3);
        },"8_3");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(8, 4);
            Player.putSubtitulos(8, 4);
        },"8_4");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(8, 5);
            Player.putSubtitulos(8, 5);
        },"8_5");

        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(8, 6);
            Player.putSubtitulos(8, 6);
        },"8_6");
        
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
    animaVolutasPipa:(cuales, scale=1, y1=600, y2=800, x1=0, x2=300, t1=6, t2=8) => {
          $(cuales).each(function(i) {
              $(this).css({'z-index':Utils.randomInt(0,1)});
              let t = Utils.randomInt(t1*10,t2*10)*0.1;
              TweenMax.set($(this),{scale:scale});
//              TweenMax.fromTo($(this),t,{y:0,x:0},{y:Utils.randomInt(y1,y2)*-1, x:Utils.randomInt(x1,x2)-(x2*0.5), ease: SlowMo.ease.config(0.5, 0.7, false)});
              
              TweenMax.fromTo($(this),t,{y:0,x:0},{y:Utils.randomInt(y1,y2)*-1, x:Utils.randomInt(x1,x2)-(x2*0.5)});

              TweenMax.to($(this),t*0.75,{alpha:0, delay:t*0.25});
              TweenMax.to($(this),t*0.95,{scale:scale*2, delay:t*0.05});
           });
    },
    playVolutasMagia:() =>{
        $('#escena_01 .contenedor_volutas .sprite').each(function(i){
           $(this).css({'top':Utils.randomInt(0,430)+'px'});
        });
        TweenMax.staggerFromTo('#escena_01 .contenedor_volutas .der .sprite', 7,{x:0},{x:1150},0.4);
        TweenMax.staggerFromTo('#escena_01 .contenedor_volutas .izq .sprite', 7,{x:0},{x:-1150},0.4);
    },
    creaAnimInteractividad:() => {
        
        //duendes en zapato y volutas
        ANIM.anim_interact_1 = new TimelineMax();
        ANIM.anim_interact_1
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('duendes');
            })
            .addCallback(function(){
                ANIM.playVolutasMagia(); 
            },'+=1.5')
            .to('#escena_01 .duende2.duendeB',3,{y:0, x:0},'+=1')
            .to('#escena_01 .duende2.duendeB',3,{y:160, x:0},'+=1')
            
            .addCallback(function(){
                ANIM.anim_interact_1.pause();
                $('#escena_01 .btn_interact').css({"display":"block"});   
            },'+=0.1')
            .addCallback(function(){
                Player.playSoundFX('duendes');
//                 ANIM.playVolutasMagia(); 
            },'+=0.2')
            .addCallback(function(){
                ANIM.playVolutasMagia(); 
            },'+=1.5')
            .to('#escena_01 .duende2.duendeA',0.2,{y:0, x:0, width:'329px'},'+=0.2')
            .to('#escena_01 .duende2.duendeA',0.4,{y:290, x:50, width:'260px'})
            .to('#escena_01 .duende2.duendeA',0.2,{y:300, x:50, width:'260px'},'+=6.5')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_1.pause();
        
       //volutas pipa escena cliente
        ANIM.anim_interact_2_volutas_pipa = new TimelineMax();
        ANIM.anim_interact_2_volutas_pipa
            .fromTo('#escena_02 .contenedor_volutas .anim1', 1,{alpha:0},{alpha:0.6})
            .addCallback(function(){
                ANIM.animaVolutasPipa('#escena_02 .contenedor_volutas .anim1');
            },'-=1')
            .fromTo('#escena_02 .contenedor_volutas .anim2', 1,{alpha:0},{alpha:0.6},'+=12')
            .addCallback(function(){
                ANIM.animaVolutasPipa('#escena_02 .contenedor_volutas .anim2');
            },'-=1')
            .fromTo('#escena_02 .contenedor_volutas .anim3', 1,{alpha:0},{alpha:0.6},'+=12')
            .addCallback(function(){
                ANIM.animaVolutasPipa('#escena_02 .contenedor_volutas .anim3');
            },'-=1')
            .addCallback(function(){
                console.log('final');
            },'+=7')
        ;
        ANIM.anim_interact_2_volutas_pipa.pause();
        
        //volutas pipa escena casa
        ANIM.anim_interact_4_volutas_pipa = new TimelineMax();
        ANIM.anim_interact_4_volutas_pipa
            .fromTo('#escena_04 .contenedor_volutas .anim1', 1,{alpha:0},{alpha:0.6})
            .addCallback(function(){
            //cuales, scale=1, y1=600, y2=800, x1=0, x2=300, t1=6, t2=8
                ANIM.animaVolutasPipa('#escena_04 .contenedor_volutas .anim1', 0.4, 200, 300,0,90);
            },'-=1')
            .fromTo('#escena_04 .contenedor_volutas .anim2', 1,{alpha:0},{alpha:0.6},'+=12')
            .addCallback(function(){
                ANIM.animaVolutasPipa('#escena_04 .contenedor_volutas .anim2', 0.4, 200, 300,0,90);
            },'-=1')
            .fromTo('#escena_04 .contenedor_volutas .anim3', 1,{alpha:0},{alpha:0.6},'+=12')
            .addCallback(function(){
                ANIM.animaVolutasPipa('#escena_04 .contenedor_volutas .anim3', 0.4, 200, 300,0,90);
            },'-=1')
            .addCallback(function(){
                console.log('final');
            },'+=7')
        ;
        ANIM.anim_interact_4_volutas_pipa.pause();
        
        //volutas pipa escena cociendo
        ANIM.anim_interact_7_volutas_pipa = new TimelineMax();
        ANIM.anim_interact_7_volutas_pipa
            .fromTo('#escena_07 .contenedor_volutas .anim1', 1,{alpha:0},{alpha:0.6})
            .addCallback(function(){
            //cuales, scale=1, y1=600, y2=800, x1=0, x2=300, t1=6, t2=8
                ANIM.animaVolutasPipa('#escena_07 .contenedor_volutas .anim1', 1, 200, 300,0,120);
            },'-=1')
            .fromTo('#escena_07 .contenedor_volutas .anim2', 1,{alpha:0},{alpha:0.6},'+=12')
            .addCallback(function(){
                ANIM.animaVolutasPipa('#escena_07 .contenedor_volutas .anim2', 1, 200, 300,0,120);
            },'-=1')
            .fromTo('#escena_07 .contenedor_volutas .anim3', 1,{alpha:0},{alpha:0.6},'+=12')
            .addCallback(function(){
                ANIM.animaVolutasPipa('#escena_07 .contenedor_volutas .anim3', 1, 200, 300,0,120);
            },'-=1')
            .addCallback(function(){
                console.log('final');
            },'+=7')
        ;
        ANIM.anim_interact_7_volutas_pipa.pause();
        
        
        //cejas en cliente
        ANIM.anim_interact_2_cejas = new TimelineMax();
        ANIM.anim_interact_2_cejas
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('cliente');
            })
            .to('.ceja1',1,{y:-10,x:5,rotation:30, transformOrigin:'37px 42px'},'+=0.5')
            .to('.ceja2',1,{y:-10,x:5},'-=1')
            .to('.ceja1',1,{y:0,x:0,rotation:0, transformOrigin:'37px 42px'},'+=0.5')
            .to('.ceja2',1,{y:0,x:0},'-=1')
            .to('.ceja2',1,{y:0,x:0},'+=3')
            .addLabel('final')
        ;
        ANIM.anim_interact_2_cejas.pause();
        
        //duendes en cliente
        ANIM.anim_interact_2_duendes = new TimelineMax();
        ANIM.anim_interact_2_duendes
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('gato_growl');
            })
            .addCallback(function(){
                Player.playSoundFX('duendes');
            },'+=2')
            .to('#escena_02 .duende1.duendeA',0.5,{y:0,x:0},'+=0.1')
            .to('#escena_02 .duende1.duendeA',0.3,{y:-100,x:100})
            .addCallback(function(){
                Player.playSoundFX('duendes');
            },'+=2')
            .to('#escena_02 .duende1.duendeB',0.4,{y:0,x:0},'+=0.1')
            .to('#escena_02 .duende1.duendeB',0.3,{y:30,x:55})
            .addCallback(function(){
                Player.playSoundFX('gato_maulla');
            },'+=1')
            .to('#escena_02 .duende1.duendeB',0.3,{y:30,x:55},'+=1')
            ;
        ANIM.anim_interact_2_duendes.pause();
        
        
        // duendes y ojos en zapatos 
        ANIM.anim_interact_3 = new TimelineMax();
        ANIM.anim_interact_3
            .to("#escena_03 .zapatos .ojo1",0.2,{alpha:0})
            .to("#escena_03 .zapatos .ojo1",0.2,{alpha:1},'+=0.2')
            .to("#escena_03 .zapatos .ojo2",0.2,{alpha:0},'+=1')
            .to("#escena_03 .zapatos .ojo2",0.2,{alpha:1},'+=0.2')
            .addCallback(
                function(){
                    Player.playSoundFX('duendes');
                },'+=1'
            )
            .to('#escena_03 .duende2',0.3,{x:0,y:0,rotation:0, transformOrigin:'290px 180px'})
            .to('#escena_03 .duende2',0.3,{x:60,y:200,rotation:70, transformOrigin:'290px 180px'})
            .to("#escena_03 .zapatos .ojo1",0.2,{alpha:0},'+=3')
            .to("#escena_03 .zapatos .ojo1",0.2,{alpha:1},'+=0.2')
            
            .addLabel('final')
        ;                
        ANIM.anim_interact_3.pause();
        
        
        //CASA - compradores
        ANIM.anim_interact_4 = new TimelineMax();
        ANIM.anim_interact_4
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('musica_compradores');
            })
            .to("#escena_04 .persona4", 0.2,{alpha:1}, '+=5')
            .to("#escena_04 .persona5", 0.2,{alpha:1},'-=0.2')
            .to("#escena_04 .persona3", 0.2,{alpha:1}, '+=2')
            .to("#escena_04 .persona2", 0.2,{alpha:1},'-=0.2')
            .to("#escena_04 .persona1", 0.2,{alpha:1}, '+=2')
            .to("#escena_04 .persona1", 0.2,{alpha:1}, '+=8')
            
            .addLabel('final')
            
             ;
        ANIM.anim_interact_4.pause();
        
        ANIM.anim_interact_4B = new TimelineMax();
        ANIM.anim_interact_4B
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('musica_compradores');
            })
            .to("#escena_04 .persona4", 0.2,{alpha:1}, '+=5')
            .to("#escena_04 .persona5", 0.2,{alpha:1},'-=0.2')
            .to("#escena_04 .persona3", 0.2,{alpha:1}, '+=2')
            .to("#escena_04 .persona2", 0.2,{alpha:1},'-=0.2')
            .to("#escena_04 .persona1", 0.2,{alpha:1}, '+=2')
            .to("#escena_04 .persona1", 0.2,{alpha:1}, '+=8')
            
            .addLabel('final')
            
             ;
        ANIM.anim_interact_4B.pause();
        
         //COCINA CASO
        ANIM.anim_interact_5_caso = new TimelineMax();
        ANIM.anim_interact_5_caso
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('duendes');
            })
            .to('#escena_05 .duende1.flipped',0.3,{y:0})
            .to('#escena_05 .duende1.flipped',0.3,{y:50})
            .addCallback(function(){
                Player.playSoundFX('gato_maulla');
            },'+=1')
            .to('#escena_05 .gato1',0.1,{alpha:0})
            .to('#escena_05 .gato2',0.1,{alpha:1},'-=0.1')
            .to('#escena_05 .gato1',0.1,{alpha:1},'+=0.5')
            .to('#escena_05 .gato2',0.1,{alpha:0},'-=0.1')
            ;
        ANIM.anim_interact_5_caso.pause();
         
        //COCINA TECHO
        ANIM.anim_interact_5_techo = new TimelineMax();
        ANIM.anim_interact_5_techo
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('duendes');
            })
            .to('#escena_05 .duende1.not_flipped',0.3,{y:0})
            .to('#escena_05 .duende1.not_flipped',0.3,{y:50})
            ;
        ANIM.anim_interact_5_techo.pause();
        
        //COCINA silla
        ANIM.anim_interact_5_silla = new TimelineMax();
        ANIM.anim_interact_5_silla
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('duendes');
            })
            .to('#escena_05 .duende2',0.3,{y:0,x:0})
            .to('#escena_05 .duende2',0.3,{y:40, x:25})
            ;
        ANIM.anim_interact_5_silla.pause();
        
         //COCINA gato
//        ANIM.anim_interact_5_gato = new TimelineMax();
//        ANIM.anim_interact_5_gato
//            .addLabel('inicio')
//            .addCallback(function(){
//                Player.playSoundFX('gato_maulla');
//            })
//            .to('#escena_05 .gato1',0.1,{alpha:0})
//            .to('#escena_05 .gato2',0.1,{alpha:1},'-=0.1')
//            ;
//        ANIM.anim_interact_5_gato.pause();
        
               
        //gato gigante
        ANIM.anim_interact_6_gato = new TimelineMax();
        ANIM.anim_interact_6_gato
            .addLabel('inicio')
            .addCallback(function(){  
                Player.playSoundFX('gato_growl');
            })
//            .to('#escena_06 .gato',5,{y:0, ease:SlowMo.ease.config(0.1, 0.8, false)})
            .to('#escena_06 .gato',5,{y:0, ease:Power3.easeInOut})
            .addCallback(function(){  
                Player.playSoundFX('gato_maulla');
            },'-=1');
        ;
        ANIM.anim_interact_6_gato.pause();
       
               
        //flor girando
        ANIM.anim_interact_6_flor = new TimelineMax();
        ANIM.anim_interact_6_flor
            .addLabel('inicio')
            .addCallback(function(){  
                Player.playSoundFX('musica_duendes');
            })
            .to('#escena_06 .flor',23,{rotation:360*5, ease:Power0.easeNone})
        ;
        ANIM.anim_interact_6_flor.pause();
       
         //baile final
        ANIM.anim_interact_8 = new TimelineMax();
        ANIM.anim_interact_8
            .addLabel('inicio')
            .addCallback(function(){  
                Player.playSoundFX('cancion_final');
                ANIM.fondoBaila();
                
            })
            .addCallback(function(){  
               ANIM.bichosBailan();
            },'+=4.5')

            .to('#escena_08 .polilla', 50,{
                bezier:{curviness:1.25, 
                    values:[
                        {x:500, y:-350, rotation:25}, 
                        {x:1000, y:-350, rotation:185},
                        {x:-1300, y:850, rotation:260},
                        {x:-1300, y:-350, rotation:130},
                        {x:1300, y:1250, rotation:205},
                        {x:1300, y:850, rotation:265},
                        {x:-200, y:-350, rotation:330}
                    ]}
            , ease:Power0.easeNone},'+=0.5')
            .to('#escena_08 .polilla', 7,{x:-210})
            .addLabel('fin')
        ;
        ANIM.anim_interact_8.pause();
       
        

        
        ANIM.arr_interacts = [
         
            ANIM.anim_interact_1,
            ANIM.anim_interact_2_volutas_pipa,
            ANIM.anim_interact_4_volutas_pipa,
            ANIM.anim_interact_7_volutas_pipa,
            ANIM.anim_interact_2_duendes,
            ANIM.anim_interact_2_cejas,
            ANIM.anim_interact_3,
            ANIM.anim_interact_4,
            ANIM.anim_interact_4B,
            ANIM.anim_interact_5_caso,
            ANIM.anim_interact_5_techo,
            ANIM.anim_interact_5_silla,
//            ANIM.anim_interact_5_gato,
            ANIM.anim_interact_6_gato,
            ANIM.anim_interact_6_flor,
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
        
        TweenMax.set('#escena_01',{scale:0.9});
        TweenMax.set('#escena_01 .duende2.duendeA',{y:300, x:50, width:'260px'});
        TweenMax.set('#escena_01 .duende2.duendeB',{y:160, x:0});
        TweenMax.set('#escena_01 .contenedor_volutas .sprite',{x:0});
        $('#escena_01 .interact').css({'display':'none'});
       
        
        TweenMax.set('#escena_02 .fondo',{scale:0.9});
        TweenMax.set('#escena_02 .interact',{scale:0.9});
        TweenMax.set('#escena_02 .contenedor_volutas .sprite_humo',{y:0, x:0, alpha:0});
        TweenMax.set('#escena_02 .duende1.duendeA',{y:-100,x:100, scaleX:0.33, scaleY:-0.33, rotation:40});
        TweenMax.set('#escena_02 .duende1.duendeB',{y:30,x:55, scaleX:0.31, scaleY:0.31, rotation:-60});
        TweenMax.set('#escena_02 .cliente',{scale:0.9});
        TweenMax.set('#escena_02 .ceja1',{y:0,x:0, rotation:0});
        TweenMax.set('#escena_02 .ceja2',{y:0,x:0, rotation:0});
        
        TweenMax.set('#escena_03 .duende1',{y:100,x:0, scale:0.65});
        TweenMax.set('#escena_03 .duende2',{y:200, x:60, rotation:70, scale:0.68, transformOrigin:'290px 180px'});
        TweenMax.set('#escena_03 .zapatos .ojo1',{alpha:1});
        TweenMax.set('#escena_03 .zapatos .ojo2',{alpha:1});
        
        TweenMax.set('#escena_04 .persona1',{alpha:0});
        TweenMax.set('#escena_04 .persona2',{alpha:0});
        TweenMax.set('#escena_04 .persona3',{alpha:0});
        TweenMax.set('#escena_04 .persona4',{alpha:0});
        TweenMax.set('#escena_04 .persona5',{alpha:0});
        
        TweenMax.set('#escena_05 .duende1.not_flipped',{y:50, scaleX:0.27, scaleY:0.27});
        TweenMax.set('#escena_05 .duende1.flipped',{y:50, scaleX:-0.27, scaleY:0.27});
        TweenMax.set('#escena_05 .duende2',{y:40, x:25, scaleX:-0.23, scaleY:0.23});
        TweenMax.set('#escena_05 .gato1',{alpha:1});
        TweenMax.set('#escena_05 .gato2',{alpha:0});
        
        TweenMax.set('#escena_06 .gato',{y:454});
        TweenMax.set('#escena_06 .flor',{rotation:0});
        
        TweenMax.set('#escena_07 .cubridor_caja', {scale:0.9});
        TweenMax.set('#escena_07 .ropa1', {rotation:25});
        TweenMax.set('#escena_07 .ropa3', {rotation:25});
        TweenMax.set('#escena_07 .ropa4', {rotation:-7});
//        TweenMax.killTweensOf("#escena_00 .drag_tolltip");
        TweenMax.killTweensOf('#escena_08 .chinita');
        TweenMax.killTweensOf('#escena_08 .chinita .chinita1');
        TweenMax.killTweensOf('#escena_08 .chinita .chinita2');
        TweenMax.killTweensOf('#escena_08 .escarabajo');
        TweenMax.killTweensOf('#escena_08 .escarabajo .escarabajo1');
        TweenMax.killTweensOf('#escena_08 .escarabajo .escarabajo2');
//        TweenMax.killTweensOf('#escena_08 .polilla');
        TweenMax.killTweensOf('#escena_08 .fondo');
        
        TweenMax.set('#escena_08 .chinita',{rotation:0, scale:0.7});
        TweenMax.set('#escena_08 .escarabajo',{rotation:0, scale:0.7});
        TweenMax.set('#escena_08 .chinita1',{alpha:1});
        TweenMax.set('#escena_08 .chinita2',{alpha:0});
        TweenMax.set('#escena_08 .escarabajo1',{alpha:1});
        TweenMax.set('#escena_08 .escarabajo2',{alpha:0});
        TweenMax.set('#escena_08 .polilla',{x:-1100,y:900, rotation:90, scale:0.7});
        TweenMax.set('#escena_08 .fondo.fondo1',{scale:1, alpha:1});
        TweenMax.set('#escena_08 .fondo.fondo2',{alpha:1, x:0, y:0});
        
        
        ANIM.desactivaDragAndDrops();
        
        $('.indicador_interactividad').css({'display':'none'});
        
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
              if(btn.hasClass('btn_drag')){
                    if(Utils.isMobile()){
                        const elbtn1 = document.getElementById('btn_drag_herramientas');

                        elbtn1.addEventListener('touchstart', function(event) {
                            TweenMax.killTweensOf("#escena_00 .drag_tolltip");
                            ANIM.displayTooltipInformation('herramientas');
                        }, false);

                        elbtn1.addEventListener('touchend', function(event) {
                            TweenMax.to('#escena_00 .drag_tolltip',1,{alpha:0, delay:0.5, onComplete:function(){
                                elbtn1.style.display = 'none';
                                ANIM.hideTooltipInformation('herramientas');
                            }});
                            ANIM.activaDragAndDrops('herramientas');
                        }, false); 
                    } else {
                        btn
                            .hover(function(){
                                ANIM.displayTooltipInformation('herramientas');
                        },
                                   function(){
                                ANIM.hideTooltipInformation('herramientas');
                        })
                            .click(function(){
                            $(this).css({"display":"none"});
                            ANIM.activaDragAndDrops('herramientas');
                        });
                    }
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
                 if(btn.hasClass('btn_cejas')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_2_cejas.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_cejas.play(0);
                    });
                 }
                 if(btn.hasClass('btn_gatos')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_2_duendes.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_duendes.play(0);
                    });
                 }
                 break;
             case 3:
                 if(btn.hasClass('primario')){
                     btn.click(function(){
                        $(this).css({"display":"none"});

                            ANIM.anim_interact_3.eventCallback("onComplete", muestralo, [$(this), cb]);   
                            if(ANIM.anim_interact_3.currentLabel() === 'final'){
                                ANIM.anim_interact_3.play(0);
                            } else {
                                ANIM.anim_interact_3.play();
                            }

                        });
                    }
                 break;
            case 4:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        $('#escena_04 .btn_interact.musica').click(function(){
                            $(this).css({"display":"none"});
                            ANIM.anim_interact_4B.play(0);
                            ANIM.anim_interact_4B.eventCallback("onComplete", muestralo, [$(this), undefined]); 
                        });
                        ANIM.anim_interact_4.eventCallback("onComplete", muestralo, [$('#escena_04 .btn_interact.musica'), cb]); 
                        ANIM.anim_interact_4.play(0);
                    });
                 }
                
                 break;
             case 5:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_5_caso.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_5_caso.play(0);
                    });
                 }
                 if(btn.hasClass('btn_techo')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_5_techo.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_5_techo.play(0);
                    });
                 }
                 if(btn.hasClass('btn_silla')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_5_silla.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_5_silla.play(0);
                    });
                 }
//                 if(btn.hasClass('btn_gato')){
//                    btn.click(function(){
//                        $(this).css({"display":"none"});
//                        ANIM.anim_interact_5_gato.eventCallback("onComplete", muestralo, [$(this), cb]);   
//                        ANIM.anim_interact_5_gato.play(0);
//                    });
//                 }
                 break;
            case 6:
                if(btn.hasClass('btn_gato')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_6_gato.eventCallback("onComplete", muestralo, [$(this), cb]); 
                        ANIM.anim_interact_6_gato.play(0);
                    });
                }
                if(btn.hasClass('btn_flor')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_6_flor.eventCallback("onComplete", muestralo, [$(this), cb]); 
                        ANIM.anim_interact_6_flor.play(0);
                    });
                }
                 break;
             case 7:
                 if(btn.hasClass('btn_drag')){
                    if(Utils.isMobile()){
                        const elbtn2 = document.getElementById('btn_drag_ropas');

                        elbtn2.addEventListener('touchstart', function(event) {
                            TweenMax.killTweensOf("#escena_07 .drag_tolltip");
                            ANIM.displayTooltipInformation('ropas');
                        }, false);

                        elbtn2.addEventListener('touchend', function(event) {
                            TweenMax.to('#escena_07 .drag_tolltip',1,{alpha:0, delay:0.5, onComplete:function(){
                                elbtn2.style.display = 'none';
                                ANIM.hideTooltipInformation('ropas');
                            }});
                            ANIM.activaDragAndDrops('ropas');
                        }, false); 
                    } else {
                        btn
                            .hover(function(){
                                ANIM.displayTooltipInformation('ropas');
                        },
                                   function(){
                                ANIM.hideTooltipInformation('ropas');
                        })
                            .click(function(){
                            $(this).css({"display":"none"});
                            ANIM.activaDragAndDrops('ropas');
                        });
                    }
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
    displayTooltipInformation:(cual) => {
        let tt;
        switch (cual){
            case 'herramientas':
                 tt = $('#escena_00 .drag_tolltip');
                 break;
            case 'ropas':
                 tt = $('#escena_07 .drag_tolltip');
                 break;
        }
//        console.log('wot',cual);
        tt.css({'display':'grid'});
        if(tt.hasClass('vertical')){
            TweenMax.fromTo(tt,0.3,{alpha:0, y:-30},{alpha:1, y:0});
        } else {
            TweenMax.fromTo(tt,0.3,{alpha:0, x:-30},{alpha:1, x:0});
        }
    },
    hideTooltipInformation:(cual) => {
        let tt;
        switch (cual){
            case 'herramientas':
                 tt = $('#escena_00 .drag_tolltip');
                 break;
            case 'ropas':
                 tt = $('#escena_07 .drag_tolltip');
                 break;
        }
        tt.css({'display':'none'});
    },
    dragsAndDrops:{},
    desactivaDragAndDrops:() => {
        DND.arrDragabbles.map((item) => {
                            item.drag.map((d)=>{
//                                console.log('QUE ES D',d);
                                    let pos = ANIM.bringMePositions(item.name, d.target.className);
//                                    console.log('DESACTIVANDO',item.name, d.target.className, pos);
                                    TweenMax.set(d.target,{top:pos.top,left:pos.left,rotation:0});
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
    activaDragAndDrops:(cual) => {
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
            case 'herramientas':
                drags = $('#escena_00 .herramienta');
                drops =  [$('#escena_00 .hit_zone')];
                posOrig = [];
                drags.each(function(i){
                    posOrig.push({clases:$(this).attr('class'), top:parseInt($(this).css('top')), left:parseInt($(this).css('left'))});
                });
                drops[0].each(function(i){
                    let o = {clases:$(this).attr('class'), top:parseInt($(this).css('top')), left:parseInt($(this).css('left')), w:$(this).width(), h:$(this).height()};
                    posOrig.push(o);
                    ANIM.creaIndicadorHitZone('#escena_00', o);
                });
                //console.log(posOrig);
                onStart = (dragged) => {
//                    Player.activaBtnSiguiente();
//                    console.log('comienza', dragged, typeof(dragged), dragged.className, typeof(dragged.className));
                    let zi = parseInt(dragged.style.zIndex)-1;
                    console.log('onstart',zi);
                    $('#escenario #escena_00 .cubridor').css({'display':'block', 'z-index':zi});
                    if(Utils.hasClass(dragged, 'herramienta1')){
                        TweenMax.to(dragged,0.2,{rotation:70});
                    }
                    if(Utils.hasClass(dragged, 'herramienta2')){
                        TweenMax.to(dragged,0.2,{rotation:-110});
                    }
                    if(Utils.hasClass(dragged, 'herramienta3')){
                        TweenMax.to(dragged,0.2,{rotation:-50});
                    }
                    if(Utils.hasClass(dragged, 'herramienta4')){
                        TweenMax.to(dragged,0.2,{rotation:-90});
                    }
//                    $('#escena_00 .cubridor').css({'display':'none'});
                    $('#escena_00 .indicador_interactividad').css({'display':'block'});
                    TweenMax.fromTo('#escena_00 .indicador_interactividad',0.4,{alpha:0},{alpha:1});
                }
                   //.herramienta4',1,{top:780, left:1075, rotation:-90});
                onHit = (dragged,hitted) => {
                    let lFin, tInicio, tFin;
                    let zi = parseInt(dragged.style.zIndex)+1;
                    console.log('onHit',zi);
                    $('#escenario #escena_00 .cubridor').css({'display':'block', 'z-index':zi});
                    if(Utils.hasClass(dragged, 'herramienta1')){
                        lFin = 1085;
                        tInicio = 690;
                        tFin = 790;
                    }
                    if(Utils.hasClass(dragged, 'herramienta2')){
                        lFin = 1025;
                        tInicio = 700;
                        tFin = 790;
                    }
                    if(Utils.hasClass(dragged, 'herramienta3')){
                        lFin = 1075;
                        tInicio = 680;
                        tFin = 780;
                    }
                    if(Utils.hasClass(dragged, 'herramienta4')){
                        lFin = 1075;
                        tInicio = 680;
                        tFin = 780;
                    }

                    TweenMax.to(dragged, 0.5,{top:tInicio,left:lFin});
                    TweenMax.to(dragged,0.5,{top:tFin, onStart:function(){
                        Player.playSoundFX('magia');
                    }, onComplete:function(){
//                         TweenMax.set(dragged, {left:2000});
                    }, delay:0.5});

                    TweenMax.to('#escena_00 .indicador_interactividad',0.4,{alpha:0});
                }
                onNoHit = (dragged,hitted) => {
                    $('#escenario #escena_00 .cubridor').css({'display':'block', 'z-index':99999});
                    let pos = ANIM.bringMePositions('herramientas',dragged.className);
//                    console.log('POS',pos);
                    TweenMax.to(dragged,0.7,{left:pos.left, top:pos.top, rotation:0}); 
                    TweenMax.to('#escena_00 .indicador_interactividad',0.4,{alpha:0});
                }
                
                onDrag = (dragged,otro) => {
//                    console.log(dragged,otro);
                }
                DND.crea(cual,drags,drops,posOrig,onStart,onDrag,onHit,onNoHit);
                
                ANIM.desactivaDragAndDrops(); ///<---- Lo desactivo y lo activo altiro porque se me van para arriba al crearlo ????!!!
                ANIM.activaDragAndDrops('herramientas');
                break;
            case 'ropas':
                drags = $('#escena_07 .ropa');
                drops =  $('#escena_07 .hit_zone');
                posOrig = [];
                drags.each(function(i){
                    posOrig.push({clases:$(this).attr('class'), top:parseInt($(this).css('top')), left:parseInt($(this).css('left')), w:$(this).width(), h:$(this).height()});
                });
                drops.each(function(i){
                    let o = {clases:$(this).attr('class'), top:parseInt($(this).css('top')), left:parseInt($(this).css('left')), w:$(this).width(), h:$(this).height()};
                    posOrig.push(o);
                    ANIM.creaIndicadorHitZone('#escena_07', o);
                });
                //console.log(posOrig);
                
                onStart = (dragged) => {
                     let zi = parseInt(dragged.style.zIndex)-1;
                    console.log('onstart',zi);
                    $('#escenario #escena_07 .cubridor').css({'display':'block', 'z-index':zi});
                    if(Utils.hasClass(dragged, 'ropa1')){
                        TweenMax.to(dragged,0.2,{rotation:-45});
                    }
                    if(Utils.hasClass(dragged, 'ropa2')){
                        TweenMax.to(dragged,0.2,{rotation:0});
                    }
                    if(Utils.hasClass(dragged, 'ropa3')){
                        TweenMax.to(dragged,0.2,{rotation:-45});
                    }
                    if(Utils.hasClass(dragged, 'ropa4')){
                        TweenMax.to(dragged,0.2,{rotation:-90});
                    }
                    $('#escena_07 .indicador_interactividad').css({'display':'block'});
                    TweenMax.fromTo('#escena_07 .indicador_interactividad',0.4,{alpha:0},{alpha:1});
                }
                
                onHit = (dragged,hitted) => {
                    let lFin, tInicio, tFin,rFin;
                    let zi = parseInt(dragged.style.zIndex)+1;
//                    console.log('onHit',zi);
                    $('#escena_07 .cubridor').css({'display':'block', 'z-index':zi});
                    if(Utils.hasClass(dragged, 'ropa1')){
                        lFin = 855;
                        tInicio = 700;
                        tFin = 840;
                        rFin = -45;
                    }
                    if(Utils.hasClass(dragged, 'ropa2')){
                        lFin = 875;
                        tInicio = 700;
                        tFin = 860;
                        rFin = 0;
                    }
                    if(Utils.hasClass(dragged, 'ropa3')){
                        lFin = 855;
                        tInicio = 700;
                        tFin = 840;
                        rFin = -45;
                    }
                    if(Utils.hasClass(dragged, 'ropa4')){
                        lFin = 865;
                        tInicio = 700;
                        tFin = 880;
                        rFin = -90;
                    }

                    TweenMax.to(dragged, 0.5,{top:tInicio,left:lFin});
                    TweenMax.to(dragged,0.5,{top:tFin, rotation:rFin, onStart:function(){
                        Player.playSoundFX('magia');
//                        $('#escenario #escena_00 .cubridor').css({'display':'block'});
                    }, onComplete:function(){
//                         TweenMax.set(dragged, {left:2000});
                    }, delay:0.5});

                    TweenMax.to('#escena_07 .indicador_interactividad',0.4,{alpha:0});
                }
                
                onNoHit = (dragged,hitted) => {
                    $('#escena_07 .cubridor').css({'display':'block', 'z-index':99999});
                    let pos = ANIM.bringMePositions('ropas',dragged.className);
                    let rFin = 0;
                    if(Utils.hasClass(dragged, 'ropa1') || Utils.hasClass(dragged, 'ropa3')){
                        rFin = 25;
                    }
                    if(Utils.hasClass(dragged, 'ropa4')){
                        rFin = -7;
                    }

                    TweenMax.to(dragged,0.3,{left:pos.left, top:pos.top, rotation:rFin}); 
                    TweenMax.to('#escena_07 .indicador_interactividad',0.4,{alpha:0});
                }
                
                onDrag = (dragged,otro) => {
//                    console.log(dragged,otro);
                }
                DND.crea(cual,drags,drops,posOrig,onStart,onDrag,onHit,onNoHit);
                
                ANIM.desactivaDragAndDrops(); ///<---- Lo desactivo y lo activo altiro porque se me van para arriba al crearlo ????!!!
                ANIM.activaDragAndDrops('ropas');
                TweenMax.set('#escena_07 .ropa1', {rotation:25});
                TweenMax.set('#escena_07 .ropa3', {rotation:25});
                TweenMax.set('#escena_07 .ropa4', {rotation:-7});
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
        
        $(cualEscena).append(st);
    },
    checkColisions: (o, divs) => {
        divs.each(function(i){
//            if(i > 7){ // <-- porque las piedras de arriba ni las alcanza
                let p = { t:parseInt($(this).css('top')), l:parseInt($(this).css('left')), w:$(this).width(), h:$(this).height()};

                if(p.l > o.l && p.l + p.w < o.l + o.w){
                    if(p.t > o.t && p.t + p.h < o.t +o.h){
    //                    console.log("DENTRO",$(this).attr('class'));
                        let pos = {l:o.l + (o.w*0.5) - p.w*0.5, t: o.t + (o.h*0.5) - p.h*0.5};
//                        let pos = {l:o.l + (((o.w-p.w)/divs.length)*i), t: o.t + (o.h*0.5) - p.h*0.5};
                        TweenMax.set($(this),{top:pos.t, left:pos.l});
                    }
                }
//            }
        });
    },
    compensaEscenas:(d) => {
        // ESTA FUNCIÓN HAY QUE CONFIGURARLA A MANO POR CADA ESCENA QUE LO NECESITE 
        // (EN ESTE CASO LA ILUSTRACIÓN SE PERDÍA POR ARRIBA, POR ESO ESE COMPENSA POR TOP,
        // SI FUESE AL REVÉS COMPENSARÍA POR BOTTOM)
       let dif = Math.abs(d); 
        $('#escena_00').css({'bottom':dif+'px'});
//        $('#escena_01').css({'top':dif+'px'});
        $('#escena_02').css({'bottom':dif+'px'});
//        $('#escena_03').css({'bottom':dif+'px'});
        $('#escena_04').css({'bottom':dif+'px'});
//        $('#escena_05').css({'bottom':dif+'px'});
        $('#escena_07').css({'bottom':dif+'px'});
//        $('#escena_10').css({'bottom':dif+'px'});
    }
};