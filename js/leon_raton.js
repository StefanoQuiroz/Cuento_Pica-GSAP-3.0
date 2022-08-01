let JSON_CUENTO = {
    nombre:"El León y el Ratón",
    tipo:"Fábula",
    descripcion:"Relato basado en la Fábula de Esopo, escritor que vivió hace 2.600 años aproximadamente en la Antigua Grecia.",
    creditos:[
                ["Adaptación del texto:","Verónica Uribe Berenguer."],
                ["Ilustraciones:","Daniel Blanco Pantoja."],
                ["Narración:","Constanza Ried Silva."],
                ["Edición a cargo de:","Constanza Ried Silva<br>Verónica Vives Cofré<br>Fundación Entrelíneas."],
                ["Montaje y desarrollo web:","Agencia Match."],
                ["Créditos de sonidos:","Revise el detalle de los sonidos <a href='#' target='_blank'>aquí</a>"]
    ],
    ID:0, 
    imagenes:[
        "img/esc_0_fondo.jpg",
        "img/esc_0_fondo2.jpg", 
        "img/esc_1_fondo.jpg",
        "img/esc_1_fondo2.jpg",
        "img/esc_2_fondo.jpg",
        "img/esc_2_ojos.png",
        "img/esc_3_fondo.jpg",
        "img/esc_3_lagrima_der_1.png",
        "img/esc_3_lagrima_der_2.png",
        "img/esc_3_lagrima_der_3.png",
        "img/esc_3_lagrima_izq_1.png",
        "img/esc_3_lagrima_izq_2.png",
        "img/esc_3_lagrima_izq_3.png",
        "img/esc_3_mandibula.png",
        "img/esc_3_parpado_der.png",
        "img/esc_3_parpado_izq.png",
        "img/esc_4_cola.png",
        "img/esc_4_fondo.jpg",
        "img/esc_4_fx2.jpg",
        "img/esc_4_pasto.png",
        "img/esc_4_raton_cuerpo.png",
        "img/esc_5_brazo_raton.png",
        "img/esc_5_cola_leon.png",
        "img/esc_5_fondo.jpg",
        "img/esc_5_hojas.png",
        "img/esc_5_leon.png",
        "img/esc_5_leon_parpado_der.png",
        "img/esc_5_leon_parpado_izq.png",
        "img/esc_6_estrella_1.jpg",
        "img/esc_6_estrella_2.jpg",
        "img/esc_6_estrella_3.jpg",
        "img/esc_6_estrella_4.jpg",
        "img/esc_6_estrella_5.jpg",
        "img/esc_6_fondo_dia.jpg",
        "img/esc_6_fondo_noche.jpg",
        "img/esc_7_cabeza.png",
        "img/esc_7_estrella2.png",
        "img/esc_7_estrella3.png",
        "img/esc_7_estrella4.png",
        "img/esc_7_estrella5.png",
        "img/esc_7_estrella6.png",
        "img/esc_7_estrella7.png",
        "img/esc_7_fondo.jpg",
        "img/esc_7_luna.png",
        "img/esc_7_mano.png",
        "img/esc_7_parpado.png",
    ], 
    fx_sonido:[
        {nombre:"sabana",url:"audio/sabana.mp3"}, 
        {nombre:"raton_chirrido",url:"audio/raton_chirrido.mp3"}, 
        {nombre:"leve_leon",url:"audio/leve_leon.mp3"}, 
        {nombre:"grunido_1",url:"audio/grunido_1.mp3"}, 
        {nombre:"super_leon",url:"audio/super_leon.mp3"}, 
        {nombre:"chirrido",url:"audio/chirrido.mp3"}, 
        {nombre:"elefante",url:"audio/elefante.mp3"}, 
        {nombre:"leon_triste",url:"audio/leon_triste_mezcla.mp3"}, 
        {nombre:"noche",url:"audio/noche.mp3"}, 
        {nombre:"roe",url:"audio/roe.mp3"}, 
        {nombre:"musica_final",url:"audio/musica_final.mp3"}, 
              ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/mini_0.jpg",
            audio:"audio/escena_01.mp3",
            parrafos:
            [
                {
                    texto: "Un día, iba un ratón caminando muy distraído cuando, sin darse cuenta,",
                    tiempo:[0,7.5] 
                },
                {
                    texto: "se encaramó por el lomo de un león que estaba echado, durmiendo la siesta.",
                    tiempo:[8, 14]
                }
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/mini_1.jpg",
            audio:"audio/escena_02.mp3",
            parrafos:
            [
                {
                    texto: "El león sintió cosquillas en el lomo y se rascó.",
                    tiempo:[0,6.5]  
                },
                {
                    texto: "—¿Qué es esto? —dijo sorprendido cuando tocó al ratón.",
                    tiempo:[7,13]  
                },
                {
                    texto: "Lo atrapó y se lo acercó a la cara.",
                    tiempo:[13.5,17]  
                }
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/mini_2.jpg",
            audio:"audio/escena_03.mp3",
            parrafos:
            [
                {
                    texto: "—Vaya, vaya... —gruñó—,",
                    tiempo:[0,5] 
                },
                {
                    texto: "un ratoncito, un pequeño bocado apetitoso—.",
                    tiempo:[5.5,11]
                },
                {
                    texto: "Y abrió la boca para comérselo.",
                    tiempo:[11.5,15]
                }
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/mini_3.jpg",
            audio:"audio/escena_04.mp3",
            parrafos:
            [
                {
                    texto: "Pero antes de que el león se lo tragara,",
                    tiempo:[0,3.5] 
                },
                {
                    texto: "el ratón sacó la voz y temblando dijo:",
                    tiempo:[4,9.5]
                },
                {
                    texto: "—Señor león, señor león, perdóname la vida,",
                    tiempo:[10,15.5] 
                },
                {
                    texto: "porque algún día yo podré salvar la tuya.",
                    tiempo:[16,20.5]
                }
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/mini_4.jpg",
            audio:"audio/escena_05.mp3",
            parrafos:
            [
                {
                    texto: "El león encontró muy graciosas las palabras del ratón",
                    tiempo:[0,5.5] 
                },
                {
                    texto: "y se rió con ganas.",
                    tiempo:[6,14]
                },
                {
                    texto: "—¡Qué ocurrencia! —dijo—.",
                    tiempo:[14.5,18]
                },
                {
                    texto: "¡Cómo piensas que algún día podrías tú salvarme la vida!",
                    tiempo:[19,24.5] 
                },
                {
                    texto: "¡A mí, el rey de los animales!",
                    tiempo:[25,31.5]
                },
                {
                    texto: "Me has divertido, ratoncito.",
                    tiempo:[32,35.5]
                },
                {
                    texto: "Te dejaré ir.",
                    tiempo:[36,37] 
                },
                {
                    texto: "Y riendo todavía,",
                    tiempo:[37.5,39.6]
                },
                {
                    texto: "el león soltó al ratón que escapó corriendo.",
                    tiempo:[40.1,45]
                }
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/mini_5.jpg",
            audio:"audio/escena_06.mp3",
            parrafos:
            [
                {
                    texto: "Pasaron los meses",
                    tiempo:[0,1.6] 
                },
                {
                    texto: "y el ratón se mantuvo lejos de las tierras del león.",
                    tiempo:[2.1,6.8]
                },
                {
                    texto: "Pero, un día, a la distancia,",
                    tiempo:[7.3,10.5]
                },
                {
                    texto: "escuchó unos gemidos.",
                    tiempo:[11,13]
                },
                {
                    texto: "Fue siguiendo el sonido lastimero y",
                    tiempo:[13.5,17.3] 
                },
                {
                    texto: "¡qué sorpresa! ...",
                    tiempo:[17.8,19]
                },
                {
                    texto: "encontró al león preso en una red",
                    tiempo:[19.5,23.3]
                },
                {
                    texto: "que los hombres habían puesto allí para atraparlo.",
                    tiempo:[23.8,29]
                }
            ]
        },
        {
            nombre:"Escena 7",
            miniatura:"img/mini_6.jpg",
            audio:"audio/escena_07-typeC.mp3",
            parrafos:
            [
                {
                    texto: "—Señor león —dijo el ratón—,",
                    tiempo:[0,3.6] 
                },
                {
                    texto: "hace ya un tiempo prometí salvarte la vida.",
                    tiempo:[4,8]
                },
                {
                    texto: "Hoy lo haré.",
                    tiempo:[8.5,10.5]
                },
                {
                    texto: "Y el ratón se puso a roer",
                    tiempo:[11.5,14.3] 
                },
                {
                    texto: "las cuerdas que ataban al león,",
                    tiempo:[14.7,16.9]
                },
                {
                    texto: "hasta que logró soltarlo.",
                    tiempo:[17.3,20]
                }
            ]
        },
        {
            nombre:"Escena 8",
            miniatura:"img/mini_7.jpg",
            audio:"audio/escena_final3.mp3", 
            parrafos:
            [
                {
                    texto: "El león, agradecido, dijo:",
                    tiempo:[0,2.7] 
                },
                {
                    texto: "—Vaya, nunca pensé que alguien tan insignificante",
                    tiempo:[3.1,8.4]
                },
                {
                    texto: "pudiera ayudarme como tú lo has hecho.",
                    tiempo:[8.7,11.5]
                },
                {
                    texto: "Y menos aún, salvarme la vida.",
                    tiempo:[12,15.7]
                },
                {
                    texto: "Gracias, gracias, señor ratón.",
                    tiempo:[16,21]
                },
                {
                    texto: " ",
                    tiempo:[21.5,35.5] 
                }
            ]
        }
    ]    
};

let ANIM = {
    main_tl:undefined,
    init:() => {
        
        ANIM.main_tl = new TimelineMax({});
        
        ANIM.main_tl
        .set('.escena',{left:"-1920px"})
        .set('#escena_01 .fondo2',{alpha:0})
        
        /*INICIO*/
        .addLabel('escena_0')
        .addLabel('0_0','+=2')
        .set('#escena_00',{left:0},'+=0.1')
        .set('#escena_00 .fondo2',{alpha:0})
        .fromTo('#escena_00 .fondo',1,{scale:1},{scale:1, ease: "expo.in"},"+=18")
        .fromTo('#escena_00 .fondo2',6,{alpha:0},{alpha:1},"-=1")
        .fromTo('#escena_00 .fondo2',4,{scale:1},{scale:1, transformOrigin:"1080px 440px"},"-=1")
        .addLabel('fin_escena_0')
        
        /*LEON SE DA CUENTA*/
        .addLabel('escena_1','+=1')
        .addLabel('1_0','+=2')
        .to('#escena_01',0.01,{left:0})
        .to('#escena_00',0.01,{left:'1920px'})
        .to('#escena_01 .fondo',7,{scale:1}) //<--- falso no hace nada, es para el tiempo
        .fromTo("#escena_01 .fondo2",1,{alpha:0},{alpha:1})
        .addLabel('1_1')
        .addLabel('1_2', "+=7")
        .addLabel('fin_escena_1',"+=12")
        
            /*LEON OJOS CERRADOS*/
        .to('#escena_02',0.01,{left:0},'+=13')
        .to('#escena_01',0.01,{left:'1920px'})
        .addLabel('escena_2',"+=1")
        .addLabel('2_0',"+=2")
        .fromTo("#escena_02 .ojos",1,{alpha:1},{alpha:0})
        .addLabel('2_1', '+=6')
        .addLabel('2_2', '+=12')
        .addLabel('fin_escena_2', '+=16')
        
        /*RATON LAGRIMA*/
        .to('#escena_03',0.01,{left:0},'+=16')
        .to('#escena_02',0.01,{left:'1920px'})
        .addLabel('escena_3',"+=1")
        .addLabel('3_0',"+=3")
        .addLabel('3_1',"+=7")
        .addLabel('3_2',"+=13")
        .addLabel('3_3',"+=19")
        .addLabel('fin_escena_3',"+=24")
        
          /*RATON SALTA*/
        .to('#escena_04',1,{left:0},"+=25")
        .to('#escena_03',1,{left:"1920px"})
        .addLabel('escena_4',"+=1")
        .addLabel('4_0',"+=3") //<--- es 3 porque sumo los dos segundos sin audio mas el uno de corte de escena
        .addLabel('4_1',"+=9")
        .addLabel('4_2',"+=16")
        .addLabel('4_3',"+=19.5")
        .addLabel('4_4',"+=25")
        .addLabel('4_5',"+=31")
        .addLabel('4_6',"+=35") 
        .addLabel('4_7',"+=36.5")
        .addLabel('4_8',"+=39")
        .addLabel('fin_escena_4',"+=44")
        
         /*LEON CUERDA*/
        .to('#escena_05',1,{left:0},"+=45")
        .to('#escena_04',1,{left:"1920px"})
        .addLabel('escena_5',"+=1")
        .addLabel('5_0',"+=3") //<--- es 3 porque sumo los dos segundos sin audio mas el uno de corte de escena
        .addLabel('5_1',"+=6")
        .addLabel('5_2',"+=12")
        .addLabel('5_3',"+=15.5")
        .addLabel('5_4',"+=18")
        .addLabel('5_5',"+=22")
        .addLabel('5_6',"+=24") 
        .addLabel('5_7',"+=28")
        .addLabel('fin_escena_5',"+=35")
        
         /*RATÓN COME CUERDA*/
        .to('#escena_06',1,{left:0},"+=36")
        .to('#escena_05',1,{left:"1920px"})
        .addLabel('escena_6',"+=1")
        .addLabel('6_0',"+=3") //<--- es 3 porque sumo los dos segundos sin audio mas el uno de corte de escena
        .addLabel('6_1',"+=6.6")
        .addLabel('6_2',"+=10.6")
        .addLabel('6_3',"+=12.8")
        .addLabel('6_4',"+=16.4")
        .addLabel('6_5',"+=19.9")

        .fromTo('#escena_06 .fondo2',8,{alpha:0},{alpha:1},"+=14.2") //<-- la suma del tiempo animado y el del desfase debe ser más que la el número de desfase anterior
        .staggerFromTo('#escena_06 .estrella',1,{alpha:0},{alpha:1},0.1,"-=0.5")
        .addLabel('fin_escena_6', "+=2")
        
         /*RATÓN FINAL*/
        .to('#escena_07',1,{left:0},"+=3")
        .to('#escena_06',1,{left:"1920px"})
        .addLabel('escena_7',"+=1")
        .addLabel('7_0',"+=3") //<--- es 3 porque sumo los dos segundos sin audio mas el uno de corte de escena
        .addLabel('7_1',"+=5.8")
        .addLabel('7_2',"+=11")
        .addLabel('7_3',"+=15")
        .addLabel('7_4',"+=19")
        .addLabel('7_5',"+=25.5")
        .addLabel('fin_escena_7', "+=40")
        
        ;
        
        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.addLabel("0_1","0_0+=8"); //primer parametro nombre, segundo el tiempo exacto en el timeline en el que hay que agregarla 
        
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_00');
        },"escena_0");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(0, 0);
            Player.putSubtitulos(0, 0);
        },"0_0");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(0, 1);
            Player.putSubtitulos(0, 1);
        },"0_1");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('sabana', true);
            Player.resetSubtitulos();
        },"fin_escena_0-=9");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
        },"fin_escena_0");
        
        
        /*LEON SE DA CUENTA*/
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
            Player.playSoundFX('leve_leon');
        },"1_1");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(1, 2);
            Player.putSubtitulos(1, 2);
        },"1_2");
      
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(1,Player.activaBtnSiguiente);
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_1");
        
            /*LEON OJOS CERRADOS*/
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_02');
        },"escena_2");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(2, 0);
            Player.putSubtitulos(2, 0);
        },"2_0");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(2, 1);
            Player.putSubtitulos(2, 1);
            
        },"2_1"); 
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(2, 2);
            Player.putSubtitulos(2, 2);
        },"2_2");
      
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(2, Player.activaBtnSiguiente);
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_2");
        
        /*RATON LAGRIMA*/
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
            ANIM.interactividad(3, Player.activaBtnSiguiente);
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_3");
        
        
          /*RATON SALTA*/
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
            Player.playSoundParrafo(4, 7);
            Player.putSubtitulos(4, 7);
        },"4_7");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(4, 8);
            Player.putSubtitulos(4, 8);
        },"4_8");
      
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(4, Player.activaBtnSiguiente);
            ANIM.interactividad(4, Player.activaBtnSiguiente, "secundario");
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
//            console.log("fin escena 4");
        },"fin_escena_4");
        
        
         /*LEON CUERDA*/
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
            Player.playSoundParrafo(5, 6);
            Player.putSubtitulos(5, 6);
        },"5_6");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(5, 7);
            Player.putSubtitulos(5, 7);
        },"5_7");
      
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(5, Player.activaBtnSiguiente);
            ANIM.interactividad(5, Player.activaBtnSiguiente, "secundario");
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_5");
        
        
        /*RATÓN COME CUERDA*/
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
            ANIM.main_tl.pause();
            ANIM.interactividad(6, Player.activaBtnSiguiente);
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_6");
        
        /*RATÓN FINAL*/
        /*LLAMADAS Y FUNCIONES ESCENA 7*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_07');
        },"escena_7");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(7, 0);
            Player.putSubtitulos(7, 0);
        },"7_0");
        
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
            ANIM.main_tl.pause();
            ANIM.interactividad(7, Player.activaBtnSiguiente);
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_7");
        
        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
    },
    creaAnimInteractividad:() => {
        //parpadeo ojo leon acostado
        ANIM.anim_interact_1 = new TimelineMax();
        ANIM.anim_interact_1
            .to("#escena_01 .fondo2",0.1,{alpha:0})
            .to("#escena_01 .fondo2",0.1,{alpha:1},'+=0.25')
            .to("#escena_01 .fondo2",0.1,{alpha:0},'+=1')
            .to("#escena_01 .fondo2",0.1,{alpha:1},'+=0.25')
            .to("#escena_01 .fondo2",0.1,{alpha:0},'+=1')
            .to("#escena_01 .fondo2",0.1,{alpha:1},'+=0.25')
        ;
        ANIM.anim_interact_1.pause();
        
        //parpadeo ojos león con ratón en mano
        ANIM.anim_interact_2 = new TimelineMax();
        ANIM.anim_interact_2
            .addCallback(
                function(){
                    Player.playSoundFX('super_leon');
                }
            )
            .to("#escena_02 .ojos",0.1,{alpha:1})
            .to("#escena_02 .ojos",0.1,{alpha:0},"+=0.25")
            .to("#escena_02 .ojos",0.1,{alpha:1},"+=2")
            .to("#escena_02 .ojos",0.1,{alpha:0},"+=0.25")
            .to("#escena_02 .ojos",0.1,{alpha:1},"+=2")
            .to("#escena_02 .ojos",0.1,{alpha:0},"+=0.25")
            .addCallback(
                function(){
                    Player.playSoundFX('raton_chirrido');
                }
            , '-=1'
            )
            .addLabel("a", '+=2')
        ;
        ANIM.anim_interact_2.pause();
        
        
        // ratón lagrimea     
        ANIM.anim_interact_3 = new TimelineMax();
        ANIM.anim_interact_3
            .addCallback(
                function(){
                    ANIM.setIniciales();
                }
            )
            .fromTo("#escena_03 .mandibula",0.1,{y:0},{y:-10, repeat:25, yoyo:true})
            .addCallback(
                function(){
                    Player.playSoundFX('chirrido');
                },
                "-=2.5"
            )
            .to("#escena_03 .parpado",0.1,{alpha:1},"-=1")
            .to("#escena_03 .parpado",0.1,{alpha:0},"+=0.25")
            .to("#escena_03 .parpado",0.1,{alpha:1},"+=1")
            .to("#escena_03 .parpado",0.1,{alpha:0},"+=0.25")
            .staggerFromTo("#escena_03 .ojo .lagrima_1",1,{alpha:0},{alpha:1}, 0.5,"-=2")
            .staggerTo("#escena_03 .ojo .lagrima_1",1,{alpha:0}, 0.5,"-=1")
            .staggerFromTo("#escena_03 .ojo .lagrima_2",1,{alpha:0},{alpha:1}, 0.5,"-=1.5")
            .staggerTo("#escena_03 .ojo .lagrima_2",1,{alpha:0}, 0.5,"-=1")
            .staggerFromTo("#escena_03 .ojo .lagrima_3",1,{alpha:0},{alpha:1}, 0.5,"-=1.5")
            .staggerTo("#escena_03 .ojo .lagrima_3",1,{alpha:0}, 0.5,"-=1")
            .to("#escena_03 .parpado",0.1,{alpha:1})
            .to("#escena_03 .parpado",0.1,{alpha:0},"+=0.25")
            .to("#escena_03 .parpado",0.1,{alpha:1},"+=1")
            .staggerFromTo("#escena_03 .ojo .lagrima_1",1,{alpha:0},{alpha:1}, 0.5,"-=1")
            .staggerTo("#escena_03 .ojo .lagrima_1",1,{alpha:0}, 0.5,"-=1")
            .staggerFromTo("#escena_03 .ojo .lagrima_2",1,{alpha:0},{alpha:1}, 0.5,"-=1.5")
            .staggerTo("#escena_03 .ojo .lagrima_2",1,{alpha:0}, 0.5,"-=1")
            .staggerFromTo("#escena_03 .ojo .lagrima_3",1,{alpha:0},{alpha:1}, 0.5,"-=1.5")
            .staggerTo("#escena_03 .ojo .lagrima_3",1,{alpha:0}, 0.5,"-=1")
            .to("#escena_03 .parpado",0.1,{alpha:0},"+=0.25")
        ;                
        ANIM.anim_interact_3.pause();
        
        //ratón salta
        ANIM.anim_interact_4 = new TimelineMax();
        ANIM.anim_interact_4
            .fromTo("#escena_04 .raton", 1,{rotation:-45},{left:460, top:460, rotation:0, transformOrigin:'90px 90px'})
            .addCallback(function(){
                Player.playSoundFX('chirrido');
            })
            .fromTo("#escena_04 .raton .cola", 1,{rotation:-75},{rotation:0, transformOrigin:'83px 82px'},'-=1')
            .to("#escena_04 .raton",1, {bezier:{curviness:1.25, 
                            values:[
                                {left:650, top:280}, 
                                {left:850,      top:690}
                            ], 
                            autoRotate:false}, ease:Power1.easeIn})
             .to("#escena_04 .raton",5,{left:1200, top:650, scale:0.5})
             .to("#escena_04 .raton .cola",0.1,{rotation:-15, repeat:50,yoyo:true},'-=5')
             ;
        ANIM.anim_interact_4.pause();
        
        //León Red
        ANIM.anim_interact_5 = new TimelineMax();
        ANIM.anim_interact_5
            .addCallback(function(){
                Player.playSoundFX('leon_triste');
            })
            .fromTo("#escena_05 .leon .parpados",0.1,{alpha:0},{alpha:1})
            .to("#escena_05 .leon .parpados",0.1,{alpha:0},"+=0.25")
            .to("#escena_05 .leon .parpados",0.1,{alpha:1},"+=1")
            .to("#escena_05 .leon .parpados",0.1,{alpha:0},"+=0.25")
            .to("#escena_05 .leon .parpados",0.1,{alpha:1},"+=1")
            .to("#escena_05 .leon .parpados",0.1,{alpha:0},"+=0.25")
            .to("#escena_05 .leon .cola",0.5,{rotation:-20, transformOrigin:"162px 28px", ease:Power3.easeOut})
            .to("#escena_05 .leon .cola",3,{rotation:0, transformOrigin:"162px 28px",ease: Elastic.easeOut.config(1, 0.4)})
        ;
        
        ANIM.anim_interact_5.pause();
        
        //León Red balanceo
        ANIM.anim_interact_5B = new TimelineMax();
        ANIM.anim_interact_5B
            .fromTo("#escena_05 .leon",0.5,{rotation:0},{rotation:7, transformOrigin:"500px 47px",ease:Power1.easeOut})
            .to("#escena_05 .leon",1,{rotation:-7, transformOrigin:"500px 47px",ease:Power1.easeOut})
            .to("#escena_05 .leon",1,{rotation:3, transformOrigin:"500px 47px",ease:Power1.easeOut})
            .to("#escena_05 .leon",0.8,{rotation:-3, transformOrigin:"500px 47px",ease:Power1.easeOut})
            .to("#escena_05 .leon",0.6,{rotation:1, transformOrigin:"500px 47px",ease:Power1.easeOut})
            .to("#escena_05 .leon",0.3,{rotation:0, transformOrigin:"500px 47px",ease:Power1.easeOut})
        ;
        ANIM.anim_interact_5B.pause();
        
        
        //Estrellas ratón come cuerda
        ANIM.anim_interact_6 = new TimelineMax();
        ANIM.anim_interact_6
            .addCallback(function(){
                Player.playSoundFX('roe');
            })
            .staggerFromTo('#escena_06 .estrella',0.5,{alpha:1},{alpha:0.5, repeat:19, yoyo:true},0.1)
            .addCallback(function(){
                Player.playSoundFX('noche',true);
            })
        ;
        ANIM.anim_interact_6.pause();
        
        
        //FINAL bracito en garra
        ANIM.anim_interact_7 = new TimelineMax();
        ANIM.anim_interact_7
            .fromTo("#escena_07 .mano",1,{rotation:90},{rotation:0, transformOrigin:"40px 60px", ease:Power1.easeInOut})
            .to("#escena_07 .cabeza_raton ",1,{rotation:7, transformOrigin:"40px 183px"})
            .to("#escena_07 .cabeza_raton ",2,{rotation:-7, transformOrigin:"40px 183px"})
            .to("#escena_07 .cabeza_raton ",0.5,{rotation:0, transformOrigin:"40px 183px", ease:Power1.easeIn})
            .addCallback(function(){
                Player.playSoundFX('musica_final',true);
            })
            .to("#escena_07 .parpado",0.1,{alpha:1})
            .to("#escena_07 .parpado",0.1,{alpha:0},"+=0.25")
            .to("#escena_07 .parpado",0.1,{alpha:1},"+=2")
            .to("#escena_07 .parpado",0.1,{alpha:0},"+=0.25")
            .to("#escena_07 .parpado",0.1,{alpha:1},"+=2")
            .to("#escena_07 .parpado",0.1,{alpha:0},"+=0.25")
            .to("#escena_07 .parpado_raton",0.1,{alpha:1}, '-=4')
            .to("#escena_07 .parpado_raton",0.1,{alpha:0},"-=3.75")
            .to("#escena_07 .parpado_raton",0.1,{alpha:1},"-=1.75")
            .to("#escena_07 .parpado_raton",0.1,{alpha:0},"-=1.5")
            .to("#escena_07 .parpado_raton",0.1,{alpha:1},"+=0.5")
            .to("#escena_07 .parpado_raton",0.1,{alpha:0},"+=0.75")
            .fromTo('#escena_07 .luna',0.5,{alpha:1},{alpha:0.5, repeat:19, yoyo:true}, '-=4')
            .staggerFromTo('#escena_07 .estrella',0.5,{alpha:1},{alpha:0.5, repeat:19, yoyo:true},0.1,'-=8')
        ;
        ANIM.anim_interact_7.pause();
                            
        ANIM.arr_interacts = [
          ANIM.anim_interact_1,  
          ANIM.anim_interact_2,  
          ANIM.anim_interact_3,  
          ANIM.anim_interact_4,  
          ANIM.anim_interact_5,  
          ANIM.anim_interact_5B,  
          ANIM.anim_interact_6,  
          ANIM.anim_interact_7,  
        ];
        
        ANIM.setIniciales();
    },
    pausaInteractividad:() =>{
        ANIM.arr_interacts.map((anim) => {
            anim.pause();
//            console.log(anim.paused());
        });
        ANIM.setIniciales();
    },
    setIniciales:() => {
        //estado inicial ratón lagrimea
        TweenMax.set("#escena_03 .ojo .lagrima_1",{alpha:0})
        TweenMax.set("#escena_03 .ojo .lagrima_2",{alpha:0})
        TweenMax.set("#escena_03 .ojo .lagrima_3",{alpha:0})
        TweenMax.set("#escena_03 .parpado",{alpha:0})
        
        //ratón salta
        TweenMax.set("#escena_04 .raton",{scale:1,top:500,left:460, rotation:-45,transformOrigin:'90px 90px'});
        TweenMax.set("#escena_04 .raton .cola",{rotation:-75,transformOrigin:'83px 82px'});
        
        //León red
        TweenMax.set('#escena_05 .leon .parpados',{alpha:0});
        
        //Estrellas raton come cuerda
        TweenMax.set('#escena_06 .estrella',{alpha:0});
        
        //FINAL bracito en garra
        TweenMax.set("#escena_07 .mano",{rotation:90})
        TweenMax.set("#escena_07 .parpado",{alpha:0})
        TweenMax.set("#escena_07 .parpado_raton",{alpha:0})
    },
    interactividad:(nEscena, callback = undefined, btn_especifico = "primario") => {
        var btn = $('#escena_0'+nEscena +' .btn_interact.'+btn_especifico);
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
            case 1:
                btn.click(function(){
                    $(this).css({"display":"none"});
                    ANIM.anim_interact_1.eventCallback("onComplete", muestralo, [$(this), cb]);   
                    ANIM.anim_interact_1.play(0);
                    Player.playSoundFX('grunido_1');
                });
                break;
            case 2:
                 btn.click(function(){
                    $(this).css({"display":"none"});
                    ANIM.anim_interact_2.eventCallback("onComplete", muestralo, [$(this), cb]);   
                    ANIM.anim_interact_2.play(0);
                    
                });
                
                 break;
             case 3:
                 btn.click(function(){
                    $(this).css({"display":"none"});
//                    ANIM.setIniciales();
                    ANIM.anim_interact_3.eventCallback("onComplete", muestralo, [$(this), cb]);   
                    ANIM.anim_interact_3.play(0);
                });
                
                 break;
            case 4:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_4.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_4.play(0);
                    });
                 }
                 if(btn.hasClass('secundario')){
                     btn.click(function(){
                        $(this).css({"display":"none"});
                         Player.playSoundFX('elefante');
                         muestralo($(this),cb);
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
                 if(btn.hasClass('secundario')){
                     btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_5B.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_5B.play(0);
                    });
                 }
                
                 break;
                case 6:
                 
                     btn.click(function(){
                        $(this).css({"display":"none"});
                        Player.stopAudioParrafo();
                        ANIM.anim_interact_6.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_6.play(0);

                    });
                 
                
                 break;
             case 7:
                     btn.click(function(){
                        $(this).css({"display":"none"});
                        Player.stopAudioParrafo();
                        ANIM.anim_interact_7.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_7.play(0);

                    });
                
                 break;
        }
    },
    compensaEscenas:(d) => {
        // ESTA FUNCIÓN HAY QUE CONFIGURARLA A MANO POR CADA ESCENA QUE LO NECESITE 
        // (EN ESTE CASO LA ILUSTRACIÓN SE PERDÍA POR ARRIBA, POR ESO ESE COMPENSA POR TOP,
        // SI FUESE AL REVÉS COMPENSARÍA POR BOTTOM)
       let dif = Math.abs(d); 
        $('#escena_01').css({'top':dif+'px'});
        $('#escena_02').css({'top':dif+'px'});
    }
};