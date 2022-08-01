let JSON_CUENTO = {
    nombre:"Kai Kai, la cuidadora de las aguas.",
    tipo:"Cuentos del medioambiente y la naturaleza.",
    descripcion:"Al inicio de los tiempos, la serpiente Kai Kai cuida amorosamente de las aguas y sus criaturas. Pero un día los hombres despiertan su ira y el mar embiste contra la tierra. Treng Treng, la serpiente de la tierra y los volcanes, emerge en defensa de los humanos y se trenza con Kai Kai en una feroz batalla de la que surgirá una tierra nueva.<br>Esta versión libre del mito mapuche de Kai Kai y Treng Treng vilú - recreado por el destacado poeta chileno Rafael Rubio - nos habla, a través de seres mitológicos, de las reacciones de la naturaleza y del origen de la geografía del sur de Chile.",
    creditos:[
                ["Texto::","Rafael Rubio Barrientos"],
                ["Ilustraciones:","Raquel Echeñique Llovet"],
                ["Narración:","Álvaro Rudolphy Fontaine"],
                ["Arreglos musicales:","Jorge Mercado Pino"],
                ["Edición a cargo de:","Constanza Ried Silva<br>Verónica Vives Cofré<br>Fundación Entrelíneas"],
                ["Montaje y desarrollo web:","Agencia Match"],
                ["Créditos de sonidos:","Revise detalles <a href='#' target='_blank'>aquí</a>"] 
    ],
    ID:0, 
    imagenes:[
        "img/kaikai/esc_0_fondo.jpg",
        "img/kaikai/esc_1_fondo.jpg",
        "img/kaikai/esc_2_fondo.jpg",
        "img/kaikai/esc_3_fondo.jpg",
        "img/kaikai/esc_4_fondo.jpg",
        "img/kaikai/esc_5_fondo.jpg",
        "img/kaikai/esc_6_fondo.jpg",
        "img/kaikai/esc_7_fondo.jpg",
        "img/kaikai/esc_8_fondo.jpg",
        "img/kaikai/sprite_esc1.png",
        "img/kaikai/sprite_esc2.png",
        "img/kaikai/sprite_esc3.png",
        "img/kaikai/sprite_esc4.png",
        "img/kaikai/sprite_esc5.png",
        "img/kaikai/sprite_esc6.png",
        "img/kaikai/sprite_esc7.png",
        "img/kaikai/sprite_esc9.png",
        "img/kaikai/splat1.png",
        "img/kaikai/splat2.png",
    ], 
    fx_sonido:[
        {nombre:"kultrun_doble",url:"audio/kaikai/fx/kultrun_doble.mp3"},
        {nombre:"kultrun_doble2",url:"audio/kaikai/fx/kultrun_doble2.mp3"},
        {nombre:"kultrun_simple",url:"audio/kaikai/fx/kultrun_simple.mp3"},
        {nombre:"trompe",url:"audio/kaikai/fx/trompe.mp3"},
        {nombre:"tormenta",url:"audio/kaikai/fx/tormenta_esc1.mp3"},
        {nombre:"trueno1",url:"audio/kaikai/fx/trueno1.mp3"},
        {nombre:"trueno2",url:"audio/kaikai/fx/trueno2.mp3"},
        {nombre:"trueno3",url:"audio/kaikai/fx/trueno3.mp3"},
//        {nombre:"mar_calmo",url:"audio/kaikai/fx/mar_calmo.mp3"},
        {nombre:"mar_calmo_loop",url:"audio/kaikai/fx/mar_calmo_loop.mp3"},
        {nombre:"Kaikai_en_agua",url:"audio/kaikai/fx/Kaikai_en_agua.mp3"},
        {nombre:"pez",url:"audio/kaikai/fx/pez.mp3"},
        {nombre:"saludo_gaviotas",url:"audio/kaikai/fx/saludo_gaviotas.mp3"},
        {nombre:"mar_apunta",url:"audio/kaikai/fx/mar_apunta.mp3"},
        {nombre:"fuego",url:"audio/kaikai/fx/fuego.mp3"},
        {nombre:"musica_esc4",url:"audio/kaikai/fx/musica_esc4_v3.mp3"},
        {nombre:"rugido",url:"audio/kaikai/fx/rugido.mp3"},
        {nombre:"maremoto",url:"audio/kaikai/fx/maremoto_loop_v2.mp3"},
        {nombre:"bg_pelea",url:"audio/kaikai/fx/bg_pelea_esc8_v3.mp3"},
        {nombre:"pelea1",url:"audio/kaikai/fx/pelea1.mp3"},
        {nombre:"pelea2",url:"audio/kaikai/fx/pelea2.mp3"},
        {nombre:"pelea3",url:"audio/kaikai/fx/pelea3.mp3"},
        {nombre:"musica_fin",url:"audio/kaikai/fx/musica_fin.mp3"},
              ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/kaikai/mini_0.jpg",
            audio:"audio/kaikai/escena_01_new2.mp3",
            parrafos:
            [
                {
                    texto: 'Al principio de los tiempos,',
                    tiempo:[0,2.5] 
                },
                {
                    texto: 'mi padre me llevó a un acantilado entre un estruendo de truenos.',
                    tiempo:[3, 8]
                },
                {
                    texto: '“Allá abajo está el mar”, dijo mi padre.',
                    tiempo:[8.5, 13]
                },
                {
                    texto: 'El mar era más grande que un bostezo.',
                    tiempo:[13.5, 18.2]
                },
                {
                    texto: 'Gaviotas negras aullaban sobre al agua.',
                    tiempo:[18.7, 22.9]
                },
                {
                    texto: '“Serás la pastora del agua.',
                    tiempo:[23.4, 26]
                },
                {
                    texto: 'Cuidarás sus pájaros, sus peces, sus algas.',
                    tiempo:[26.5, 31.4]
                },
                {
                    texto: 'Empinada en la punta de la ola más alta, llamarás con un silbido a tu rebaño de espuma”.',
                    tiempo:[31.9, 39.7]
                },
                {
                    texto: '“Calma la ira del oleaje, tenlo a raya. ',
                    tiempo:[40.2, 45]
                },
                {
                    texto: 'Que no despierte el sueño de los hombres”.',
                    tiempo:[45.5, 49]
                },
                {
                    texto: '“Tú serás el espíritu del mar. ',
                    tiempo:[49.5, 53.4]
                },
                {
                    texto: 'Tu nombre es Kai Kai Vilú. Serpiente del agua”.',
                    tiempo:[53.9, 59.6]
                },
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/kaikai/mini_1.jpg",
            audio:"audio/kaikai/escena_02.mp3",
            parrafos:
            [
                {
                    texto: 'Caí en un largo sueño.',
                    tiempo:[0, 3]
                },
                {
                    texto: 'Cuando desperté, el sol reía sobre el mar.',
                    tiempo:[3.5, 9.5]
                },
                {
                    texto: 'Miré mi largo cuerpo: mis escamas brillaban con el sol.',
                    tiempo:[10, 16.5]
                },
                {
                    texto: 'Alrededor bailaban peces y las algas se enroscaban en mi cuello.',
                    tiempo:[17, 25.5]
                },
                {
                    texto: 'Con fuerza alcé mi cola hacia lo alto.',
                    tiempo:[26, 30.5]
                },
                {
                    texto: 'Levanté mi cabeza sobre la superficie.',
                    tiempo:[31, 35]
                },
                {
                    texto: 'Sosteniéndome en la punta de una ola,',
                    tiempo:[35.5, 38.6]
                },
                {
                    texto: 'como una bailarina en equilibrio,',
                    tiempo:[39.1, 42]
                },
                {
                    texto: 'logré atrapar un rayo en pleno vuelo.',
                    tiempo:[42.5, 47.1]
                },
                {
                    texto: '¡Mi primer paso de danza!',
                    tiempo:[47.6, 50.3]
                },
                {
                    texto: 'Las olas aplaudieron.',
                    tiempo:[50.8, 52.8]
                },
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/kaikai/mini_2.jpg",
            audio:"audio/kaikai/escena_03.mp3",
            parrafos:
            [
          
                {
                    texto: 'Cuidé del agua.',
                    tiempo:[0, 2]
                },
                {
                    texto: 'Llamé a cada ola por su propio nombre.',
                    tiempo:[2.5, 6.5]
                },
                {
                    texto: 'Ninguna ola traviesa atravesó la orilla.',
                    tiempo:[7, 11.5]
                },
                {
                    texto: 'Los pescadores no pasaron hambre.',
                    tiempo:[12, 15.5]
                },
                {
                    texto: 'Hombre, mujer y niño tuvieron en sus manos el pez de cada día.',
                    tiempo:[16, 22]
                },
                {
                    texto: 'En las mesas brillaron las escamas de jureles, merluzas y lenguados.',
                    tiempo:[22.5, 29.3]
                },
                {
                    texto: 'Y la risa corría como un río. ',
                    tiempo:[29.8, 34]
                },
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/kaikai/mini_3.jpg",
            audio:"audio/kaikai/escena_04.mp3",
            parrafos:
            [
                {
                    texto: 'Una vez al año, hombres y mujeres se reunían en la orilla',
                    tiempo:[0, 5.6]
                },
                {
                    texto: 'para agradecer los regalos del mar.',
                    tiempo:[6.1, 9]
                },
                {
                    texto: 'Los jóvenes alzaban sus ofrendas:',
                    tiempo:[9.5, 13.5]
                },
                {
                    texto: 'coronas, flores blancas y amarillas.',
                    tiempo:[14, 17.5]
                },
                {
                    texto: 'Entre todos cantaban, y su canto era más puro que el agua.',
                    tiempo:[18, 23.5]
                },
                {
                    texto: 'El mar se dejaba querer',
                    tiempo:[24, 26.3]
                },
                {
                    texto: 'y las olas caían en la arena con una reverencia interminable.',
                    tiempo:[26.8, 33]
                },
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/kaikai/mini_4.jpg",
            audio:"audio/kaikai/escena_05.mp3",
            parrafos:
            [
                {
                    texto: 'Pero un día los hombres me olvidaron. ',
                    tiempo:[0, 4.5]
                },
                {
                    texto: 'Ya no agradecían mis regalos ni celebraban en mi honor.',
                    tiempo:[5, 9]
                },
                {
                    texto: 'Ya no cantaban ni llenaban mis brazos de flores.',
                    tiempo:[9.5, 13.5]
                },
                {
                    texto: 'Su olvido no era aceptable.',
                    tiempo:[14, 17]
                },
                {
                    texto: 'Decidí destruir su tierra.',
                    tiempo:[17.5, 20.5]
                },
                {
                    texto: 'Entonces grité a los cuatro vientos:',
                    tiempo:[21, 24]
                },
                {
                    texto: '“Azotaré mi cola contra el mar,',
                    tiempo:[24.5, 27.4]
                },
                {
                    texto: 'las olas romperán contra las rocas, arrasando con árboles y casas”.',
                    tiempo:[27.9, 33.5]
                },              
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/kaikai/mini_5.jpg",
            audio:"audio/kaikai/escena_06_new2.mp3",
            parrafos:
            [
                {
                    texto: 'La tierra tembló.',
                    tiempo:[0, 1.5]
                },
                {
                    texto: 'Treng Treng, mi hermana,',
                    tiempo:[2, 3.9]
                },
                {
                    texto: 'la serpiente de la tierra y los volcanes,',
                    tiempo:[4.4, 7.1]
                },
                {
                    texto: 'la amiga de hombres y animales,',
                    tiempo:[7.6, 9.9]
                },
                {
                    texto: 'los llamó desde la cumbre de los montes.',
                    tiempo:[10.4, 13.5]
                },
                {
                    texto: 'Pero muchos no quisieron escuchar.',
                    tiempo:[14, 17.5]
                },
                {
                    texto: '“Hermana, cálmate”, me rogó. “No destruyas mi casa”.',
                    tiempo:[18, 24.5]
                },
                {
                    texto: 'Pero ya era tarde.',
                    tiempo:[25, 27.5]
                },
                {
                    texto: 'Levanté mi larga y furiosa cola.',
                    tiempo:[28, 30.6]
                },
                {
                    texto: 'Arrojé olas enormes que se estrellaron contra la tierra.',
                    tiempo:[31.1, 34.5]
                },
                {
                    texto: 'Sobrepasaron el borde de la playa con un ruido de piedras,',
                    tiempo:[35, 39.3]
                },
                {
                    texto: 'con un ruido de piedras y campanas.',
                    tiempo:[39.8, 43]
                },
            ]
        },
        {
            nombre:"Escena 7",
            miniatura:"img/kaikai/mini_6.jpg",
            audio:"audio/kaikai/escena_07_new2.mp3",
            parrafos:
            [

                {
                    texto: 'Treng Treng surgió desde el fondo de la tierra.',
                    tiempo:[0, 4.5]
                },
                {
                    texto: 'Cargó a los hombres a la cima de los cerros, como un caballo de escamas y de greda.',
                    tiempo:[5, 11.5]
                },
                {
                    texto: 'A los que fueron alcanzados por las olas los convirtió en ballenas, en atunes, en toninas.',
                    tiempo:[12, 20]
                },
                {
                    texto: 'También en tritones y en sirenas.',
                    tiempo:[20.5, 23.6]
                },
                {
                    texto: 'Y los montes se elevaron sobre el agua, suspendidos al grito de Treng Treng.',
                    tiempo:[24.1, 30.5]
                },
            ]
        },
        {
            nombre:"Escena 8",
            miniatura:"img/kaikai/mini_7.jpg",
            audio:"audio/kaikai/escena_08_new.mp3",
            parrafos:
            [
                {
                    texto: 'Treng Treng bajó hacia el mar para enfrentarme.',
                    tiempo:[0, 3.5]
                },
                {
                    texto: 'Nos miramos las caras frente a frente.',
                    tiempo:[4, 7.5]
                },
                {
                    texto: 'Nos mostramos los dientes, afilados cuchillos de marfil.',
                    tiempo:[8, 14]
                },
                {
                    texto: 'El agua era un estruendo de trescientos treinta trenes;',
                    tiempo:[14.5, 18.5]
                },
                {
                    texto: 'un revoltijo de olas y cencerros.',
                    tiempo:[19, 22.5]
                },
                {
                    texto: 'Cuentan los hombres que un día nos cansamos de luchar.',
                    tiempo:[23, 27.5]
                },
                {
                    texto: 'Con nosotros, se calmó el mundo.',
                    tiempo:[28, 32]
                },
                {
                    texto: 'Nos rodearon las islas que nacieron.',
                    tiempo:[32.5, 35]
                },
                {
                    texto: 'Era una tierra nueva.',
                    tiempo:[35.5, 37.5]
                },
            ]
        },
        {
            nombre:"Escena 9",
            miniatura:"img/kaikai/mini_8.jpg",
            audio:"audio/kaikai/escena_09.mp3",
            parrafos:
            [
                {
                    texto: 'Algunos se salvaron. Subieron a las islas y el mar no los tocó.',
                    tiempo:[0, 7.5]
                },
                {
                    texto: 'Hombres y mujeres hicieron la promesa:',
                    tiempo:[8, 11.7]
                },
                {
                    texto: '“Tomaremos solamente lo justo, lo esencial para vivir.',
                    tiempo:[12.2, 17.2]
                },
                {
                    texto: 'Y daremos las gracias cada día por los regalos del mar”.',
                    tiempo:[17.7, 22]
                },
                {
                    texto: 'Sembraron semillas nuevas y a su cuidado los animales se multiplicaron como estrellas. ',
                    tiempo:[22.5, 29.5]
                },
                {
                    texto: 'Hombres y mujeres juraron no volver a perturbar mi reposo.',
                    tiempo:[30, 35]
                },
                {
                    texto: 'Porque yo soy Kai Kai vilú, la cuidadora de las aguas. El espíritu del mar.',
                    tiempo:[35.5, 43]
                },
            ]
        },
    ]    
};

let ANIM = {
    main_tl:undefined,
    creapartes:() => { 
        let escamas = $('#escena_01 .contenedor_escamas');
        let brillos = $('#escena_01 .contenedor_brillos');
        let brillos2 = $('#escena_08 .contenedor_brillos');
        let escamas2 = $('#escena_08 .contenedor_escamas');
        let algas = $('#escena_01 .contenedor_algas');
        let manchas = $('#escena_07 .contenedor_manchas');
        let arrEscamas = Array(61).fill(61);
        let arrBrillos = Array(61).fill(61);
        let arrBrillos2 = Array(40).fill(40);
        let arrEscamas2 = Array(40).fill(40);
        let arrAlgas = Array(11).fill(11);
        let arrManchas = Array(22).fill(22);
        
        escamas.append(ANIM.creaescamas(arrEscamas));
        brillos.append(ANIM.creabrillos(arrBrillos));
        brillos2.append(ANIM.creabrillos(arrBrillos2));
        escamas2.append(ANIM.creaescamas(arrEscamas2));
        algas.append(ANIM.creaalgas(arrAlgas));
        manchas.append(ANIM.creaManchas(arrManchas));
        ANIM.posBrillos('#escena_01');
        ANIM.posBrillos('#escena_08');
    },
    creaescamas:(arr) => {
        let newArr = arr.map((item, i) => {
            return `<div class="sprite escama escama${(i+1)}"></div>`;
        });
        return newArr.join("");
    },
    posBrillos:(escena) => {
        $(escena +" .escama").each(function(i){
            let j = i+1;
            let top = parseInt($(this).css('top'));
            let left = parseInt($(this).css('left'));
            let w = parseInt($(this).css('width'));
            let h = parseInt($(this).css('height'));
            let difx = parseInt($(escena + ' .brillo'+j).css('width'));
            let dify = parseInt($(escena + ' .brillo'+j).css('height'));
//            console.log(top, left, w, h, difx, dify, i);
            $(escena + ' .brillo'+j).css({'top':top+(h*0.5)-(dify*0.5), 'left':left+(w*0.5)-(difx*0.5)});
        });
    },
    creabrillos:(arr) => {
        let newArr = arr.map((item, i) => {
            let letra = 'A';
            if(i % 2 === 0) {
              letra = 'A';
            } else if(i % 3 === 0) {
              letra = 'B';
            } else {
              letra = 'C';
            }
            return `<div class="brillo brillo${letra} brillo${(i+1)}"></div>`;
        });
        return newArr.join("");
    },
    creaalgas:(arr) => {
        let newArr = arr.map((item, i) => {
            return `<div class="sprite alga alga${(i+1)}"></div>`;
        });
        return newArr.join("");
    },
    creaManchas:(arr) => {
        let newArr = arr.map((item, i) => {
            let abselector = i % 2 == 0 ? false : true;
            let ab = "A";
            if(abselector){
                ab = "B";
            }
            return `<div class="mancha mancha${ab} mancha${(i+1)}"></div>`;
        });
        return newArr.join("");
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
        .addLabel('0_0_audio','+=0.05')
        .addLabel('0_0','+=14')
//        .addLabel('subs_adicionales_1','+=13.3')
        .addLabel('0_1','+=16')
        .addLabel('0_2','+=21.3')
        .addLabel('0_3','+=26.5')
        .addLabel('0_4','+=31.5')
        .addLabel('0_5','+=36.5')
        .addLabel('0_6','+=39.8')
        .addLabel('0_7','+=44.9')
        .addLabel('0_8','+=53.5')
        .addLabel('0_9','+=58.9')
        .addLabel('0_10','+=62.6')
        .addLabel('0_11','+=67.5')
        .addLabel('fin_escena_0','+=73.5')
        
        /*escamas brillan*/
        .to('#escena_01',0.01,{left:0},'+=81')
        .to('#escena_02',0.01,{left:'1920px'})
        .addLabel('escena_1')
        .addLabel('1_0','+=2')
        .addLabel('1_1','+=5')
        .addLabel('1_2','+=11.5')
        .addLabel('1_3','+=18.5')
        .addLabel('1_4','+=27.5')
        .addLabel('1_5','+=32.5')
        .addLabel('1_6','+=37')
        .addLabel('1_7','+=40.6')
        .addLabel('1_8','+=44')
        .addLabel('1_9','+=49.1')
        .addLabel('1_10','+=52.3')
        .addLabel('fin_escena_1','+=55.8')
    
        
        /*pescando*/
        .to('#escena_02',0.01,{left:0},'+=60')
        .to('#escena_01',0.01,{left:'1920px'})
        .addLabel('escena_2')
        .addLabel('2_0',"+=2")
        .addLabel('2_1',"+=4")
        .addLabel('2_2',"+=8.5")
        .addLabel('2_3',"+=13.5")
        .addLabel('2_4',"+=17.5")
        .addLabel('2_5',"+=24")
        .addLabel('2_6',"+=31.3")
       
        .addLabel('fin_escena_2', '+=36')
        
        /*fuego*/
        .to('#escena_03',0.01,{left:0},'+=37')
        .to('#escena_02',0.01,{left:'1920px'})
        .addLabel('escena_3')
        .addLabel('3_0',"+=2")
        .addLabel('3_1',"+=7.6")
        .addLabel('3_2',"+=11")
        .addLabel('3_3',"+=15.6")
        .addLabel('3_4',"+=19.5")
        .addLabel('3_5',"+=25.5")
        .addLabel('3_6',"+=28.3")
        .addLabel('fin_escena_3',"+=35")
        
          /*ENOJADO*/
        .to('#escena_04',1,{left:0},"+=36")
        .to('#escena_03',1,{left:"1920px"})
        .addLabel('escena_4')
        .addLabel('4_0',"+=2")
     
        .addLabel('4_1',"+=6.5") 
        .addLabel('4_2',"+=11") 
        .addLabel('4_3',"+=15.5") 
        .addLabel('4_4',"+=19") 
        .addLabel('4_5',"+=22.5") 
        .addLabel('4_6',"+=26") 
        .addLabel('4_7',"+=29.4") 
        .addLabel('fin_escena_4',"+=35.5")
        .to('#escena_04',0.1, {scale:1.005, repeat:17, yoyo:true, transformOrigin:'1435px 640px'},'+=27')
        .to('#escena_04',0.1, {scale:1.003, repeat:17, yoyo:true, transformOrigin:'1435px 640px'},'+=1')
        .to('#escena_04',0.1, {scale:1.001, repeat:13, yoyo:true, transformOrigin:'1435px 640px'},'+=0.5')
        .to('#escena_04',0.1, {scale:1.0005, repeat:3, yoyo:true, transformOrigin:'1435px 640px'},'+=0.2')

        
        /*LOCURA*/
        .to('#escena_05',1,{left:0},"+=40")
        .to('#escena_04',1,{left:"1920px"})
        .addLabel('escena_5')
        .addLabel('5_0_audio',"+=2")
        .addLabel('5_0',"+=8.5")
        .addLabel('5_1',"+=10.5")
        .addLabel('5_2',"+=12.9")
        .addLabel('5_3',"+=16.1")
        .addLabel('5_4',"+=18.9")
        .addLabel('5_5',"+=22.5")
        .addLabel('5_6',"+=26.5")
        .addLabel('5_7',"+=33.5")
        .addLabel('5_8',"+=36.5")
        .addLabel('5_9',"+=39.6")
        .addLabel('5_10',"+=43.5")
        .addLabel('5_11',"+=48.3")
        .addLabel('fin_escena_5',"+=52")
        
         /*CERROS*/
        .to('#escena_06',1,{left:0},"+=53")
        .to('#escena_05',1,{left:"1920px"})
        .addLabel('escena_6')
        .addLabel('6_0_audio',"+=2")
        .addLabel('6_0',"+=12") 
        .addLabel('6_1',"+=17") 
        .addLabel('6_2',"+=24") 
        .addLabel('6_3',"+=32.5") 
        .addLabel('6_4',"+=35.9") 
        .addLabel('fin_escena_6', "+=42")
        
         /*PELEA*/
        .to('#escena_07',1,{left:0},"+=46")
        .to('#escena_06',1,{left:"1920px"})
        .addLabel('escena_7')
        .addLabel('7_0',"+=2")
        .addLabel('7_1',"+=5.5")
        .addLabel('7_2',"+=9.5")
        .addLabel('7_3',"+=16")
        .addLabel('7_4',"+=20.5")
        .addLabel('7_5',"+=24.5")
        .addLabel('7_6',"+=29.5")
        .addLabel('7_7',"+=34")
        .addLabel('7_8',"+=37")
        .addLabel('fin_escena_7',"+=39.5")
     
    
        /* islas */
        /*FINAL*/
        .to('#escena_08',1,{left:0},"+=52")
        .to('#escena_07',1,{left:"1920px"})
        .addLabel('escena_8')
        .addLabel('8_0',"+=2")
        .addLabel('8_1',"+=9.5")
        .addLabel('8_2',"+=13.7")
        .addLabel('8_3',"+=19.2")
        .addLabel('8_4',"+=25")
        .addLabel('8_5',"+=32.5")
        .addLabel('8_6',"+=38")
        .addLabel('fin_escena_8',"+=46")
        
        
        
        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_00');
        },"escena_0");
        
        ANIM.main_tl.addCallback(function(){
           Player.playSoundFX('kultrun_doble');
        },"0_0_audio");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(0, 0);
            Player.putSubtitulos(0, 0);
        },"0_0");
        
//        ANIM.main_tl.addCallback(function(){
//            $("#subtitulos p").html('Al principio de los tiempos,');
//        },"subs_adicionales_1");
        
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
            Player.playSoundParrafo(0, 5);
            Player.putSubtitulos(0, 5);
        },"0_5");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(0, 6);
            Player.putSubtitulos(0, 6);
        },"0_6");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(0, 7);
            Player.putSubtitulos(0, 7);
        },"0_7");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(0, 8);
            Player.putSubtitulos(0, 8);
        },"0_8");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(0, 9);
            Player.putSubtitulos(0, 9);
        },"0_9");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(0, 10);
            Player.putSubtitulos(0, 10);
        },"0_10");
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(0, 11);
            Player.putSubtitulos(0, 11);
        },"0_11");
          
        ANIM.main_tl.addCallback(function(){
            Player.activaBtnSiguiente();
            ANIM.main_tl.pause();
            ANIM.interactividad(0,undefined,'btn_tormenta');
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            
        },"fin_escena_0");
        
        
         /*escamas brillan*/
        /*LLAMADAS Y FUNCIONES ESCENA 1*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_01');
            ANIM.animaAlgas();
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
            Player.playSoundParrafo(1, 8);
            Player.putSubtitulos(1, 8);
        },"1_8");
       ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(1, 9);
            Player.putSubtitulos(1, 9);
        },"1_9");
       ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(1, 10);
            Player.putSubtitulos(1, 10);
        },"1_10");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            Player.activaBtnSiguiente();
            ANIM.interactividad(1);
//            ANIM.interactividad(1,undefined,'secundario');
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            ANIM.displayInteract('#escena_01');
            ANIM.animaAlgas();
            Player.playSoundFX('mar_calmo_loop',true);
        },"fin_escena_1");
        
        /*pescando*/
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_02');
            ANIM.animaBote();
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
            Player.playSoundParrafo(2, 6);
            Player.putSubtitulos(2, 6);
        },"2_6");
        
      
        ANIM.main_tl.addCallback(function(){
            ANIM.animaBote();
            ANIM.main_tl.pause();
            ANIM.interactividad(2,undefined,'btn_peces');
            ANIM.interactividad(2,undefined,'btn_brazos');
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('mar_calmo_loop',true);
        },"fin_escena_2");
        
        /*fuego*/
         /*LLAMADAS Y FUNCIONES ESCENA 3*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_03');
            ANIM.animaFuegos();
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
            Player.playSoundParrafo(3, 4);
            Player.putSubtitulos(3, 4);
        },"3_4"); 
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(3, 5);
            Player.putSubtitulos(3, 5);
        },"3_5"); 
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(3, 6);
            Player.putSubtitulos(3, 6);
        },"3_6");
        
      
        ANIM.main_tl.addCallback(function(){
            ANIM.animaFuegos();
            ANIM.main_tl.pause();
             ANIM.interactividad(3,undefined,'btn_musica');
             ANIM.interactividad(3,undefined,'btn_fuego');
             ANIM.interactividad(3,undefined,'btn_apunta');
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('mar_calmo_loop',true);
        },"fin_escena_3");
        
        
          /*ENOJADO*/
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
            ANIM.main_tl.pause();
            ANIM.interactividad(4);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_4");
        
        
         /*LOCURA*/
         /*LLAMADAS Y FUNCIONES ESCENA 5*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_05');
        },"escena_5");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('kultrun_simple');
        },"5_0_audio");
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
            Player.playSoundParrafo(5, 8);
            Player.putSubtitulos(5, 8);
        },"5_8");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(5, 9);
            Player.putSubtitulos(5, 9);
        },"5_9"); 
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(5, 10);
            Player.putSubtitulos(5, 10);
        },"5_10");
        
        ANIM.main_tl.addCallback(function(){
            Player.playSoundParrafo(5, 11);
            Player.putSubtitulos(5, 11);
        },"5_11"); 
        
//        ANIM.main_tl.addCallback(function(){
//            Player.playSoundParrafo(5, 12);
//            Player.putSubtitulos(5, 12);
//        },"5_12"); 
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(5);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('maremoto',true);
        },"fin_escena_5");
        
        
        /*Cerros*/
         /*LLAMADAS Y FUNCIONES ESCENA 6*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_06');
        },"escena_6");
         ANIM.main_tl.addCallback(function(){
            Player.playSoundFX('kultrun_doble2');
        },"6_0_audio");
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
            ANIM.main_tl.pause();
            
            ANIM.interactividad(6);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('trompe',true);
        },"fin_escena_6");
        
        /*PELEA*/
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
            ANIM.interactividad(7);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_7");
        
        //Final islas
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
            ANIM.interactividad(8, Player.activaBtnSiguiente);
//            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            console.log('FINAL');
        },"fin_escena_8");
        
       
        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
    },
    gaviotasPlanean:(cual=1, i=0 , t = 6000, y1=0, y2=100, x1=0, x2=100, r1=0 , r2=7) =>{
        TweenMax.staggerTo('#escena_00 .gaviota',1.5,{y:-10, x:30, repeat:11, yoyo:true, rotation:-3,ease:Sine.easeInOut}, 0.1);
    },
    animaFuegos:() => {
        let cant = $('#escena_03 .flama').length;
        let arrFuegos = Array(cant).fill(cant);
        arrFuegos.map((item, i) => {
            ANIM.animaFuego(i+1);
        });
    },
    animaFuego:(cual=1, t = 6000, y1=1, y2=100, x1=0, x2=70) =>{
//        console.log(cual, TweenMax.getTweensOf(`#escena_03 .fuego${cual.toString()}`));
        let tweensActives = TweenMax.getTweensOf(`#escena_03 .fuego${cual.toString()}`);
        if(tweensActives.length === 0){
            let realTime = Utils.randomInt(500,t)*0.001;
            let realY = Utils.randomInt(y1,y2)*-1;

            TweenMax.set(`#escena_03 .fuego${cual.toString()}`,{alpha:0,x:Utils.randomInt(x1,x2),y:0});
            TweenMax.to(`#escena_03 .fuego${cual.toString()}`,
                        realTime*0.8,
            {
                y:realY*0.8,
                alpha:Utils.randomInt(500,900)*0.001,
                ease:Power1.easeIn
            });
            TweenMax.to(`#escena_03 .fuego${cual.toString()}`,
                        realTime*0.2,
                        {
                            alpha:0,
                            y:realY,
                            delay:realTime*0.8,
                            onComplete:
                                function(b,a){
                                    ANIM.animaFuego(b);
                                }, 
                            onCompleteParams:[cual],
                            ease:Power1.easeOut
                        });

        }
    },
    animaCerros:(cual=1, count = 1, t1 = 500, t2 = 1000, y1=50, y2=100, x1=10, x2=100) =>{
        console.log(cual,count, t1,t2, y1, y2, x1,x2);
        let tweensActives = TweenMax.getTweensOf(`#escena_06 .cerro${cual.toString()}`);
        if(tweensActives.length === 0){
            let realTime = Utils.randomInt(t1,t2)*0.001;
            let realY = Utils.randomInt(y1,y2)*-1;
            let realX = Utils.randomInt(x1,x2);
            
            let alphaTor = count % 2 == 0 ? 0 : 1;
            let parpadeador = count % 7 == 0 ? 0 : 1;
            if(alphaTor == 1){ 
                realY = 0;
                realX = 0;
            }
            if(parpadeador == 0){
                console.log('papadeo');
                TweenMax.to('#escena_06 .ojo1',0.1, {alpha:1});
                TweenMax.to('#escena_06 .ojo2',0.1, {alpha:1});
                TweenMax.to('#escena_06 .ojo1',0.1, {alpha:0, delay:0.1});
                TweenMax.to('#escena_06 .ojo2',0.1, {alpha:0, delay:0.1});
            }
            TweenMax.to(`#escena_06 .cerro${cual.toString()}`,
                        realTime,
                        {
                            y:realY,
                            x:realX,
                            onComplete:
                                function(a,b,t1,t2,y1,y2,x1,x2){
                                    ANIM.animaCerros(a,b,t1,t2,y1,y2,x1,x2);
                                }, 
                            onCompleteParams:[cual,count+1,t1,t2,y1,y2,x1,x2]
                        });

        }
    },
    animaEscamas:() =>{
        ANIM.animaBrillos();
        TweenMax.staggerTo('#escena_01 .escama',0.1,{alpha:1, ease:Sine.easeInOut}, 0.03);
        TweenMax.staggerTo('#escena_01 .escama',0.1,{alpha:0, ease:Sine.easeInOut, delay:0.6}, 0.03);
    },
    animaBrillos:() =>{
        TweenMax.staggerFromTo('#escena_01 .brillo',0.5,{alpha:0, rotation:0},{alpha:1, rotation:180, ease:Sine.easeOut}, 0.03);
        TweenMax.staggerTo('#escena_01 .brillo',0.5,{alpha:0, rotation:360, ease:Sine.easeIn, delay:0.6}, 0.03);
    },
    animaAlgas:() =>{
        let tweensActives = TweenMax.getTweensOf('#escena_01 .alga');
        if(tweensActives.length === 0){
            let arrAlgas = Array(11).fill(11);
            arrAlgas.map((item, i) => {
                let j = i % 2 == 0 ? 1 : -1;
                TweenMax.to(`#escena_01 .alga${(i+1)}`,
                        Utils.randomInt(5000,8000)/1000,
                        {
                            x:Utils.randomInt(20,50)*j,
                            y:Utils.randomInt(10,25),
                            rotation:Utils.randomInt(0,15)*j,
                            repeat:-1,
                            yoyo:true,
                            ease:Sine.easeInOut, 
                            transformOrigin:'20px 370px'
                        });
            });
        }
        
    },
    animaBote:(count=1) =>{
        let tweensActives = TweenMax.getTweensOf('#escena_02 .bote');
        if(tweensActives.length === 0){
//            let j = Utils.randomInt(1,2)-1;
            let j = count % 2 == 0 ? 1 : -1;
//          console.log(j);
            TweenMax.to('#escena_02 .bote',
                    Utils.randomInt(3000,4000)/1000,
                    { 
                        rotation:Utils.randomInt(200,300)*j/100,
                        ease:Sine.easeInOut, 
                        transformOrigin:'260px 155px',
                        onComplete: function(){
                            ANIM.animaBote(count+1);
                        }
                    });
        }
        
    },
    creaAnimInteractividad:() => {
        
        //tormenta
        ANIM.anim_interact_0 = new TimelineMax();
        ANIM.anim_interact_0
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('tormenta');
            })
            .addCallback(function(){
                Player.playSoundFX('trueno1');
//                ANIM.gaviotasPlanean();
            }, '+=2')
            .to('#escena_00 .rayo1',0.1,{alpha:1},'+=0.5')
            .to('#escena_00 .rayo1',0.1,{alpha:0},'+=0.1')
            .to('#escena_00 .destello',0.1,{alpha:1},'-=0.1')
            .to('#escena_00 .destello',0.1,{alpha:0},'+=0.1')
            
            .to('#escena_00 .gaviota',0.1,{alpha:1},'-=0.1')
            
            .addCallback(function(){
                Player.playSoundFX('trueno2');
            }, '+=3')
            .to('#escena_00 .rayo2',0.1,{alpha:1},'+=0.5')
            .to('#escena_00 .rayo2',0.1,{alpha:0},'+=0.1')
            .to('#escena_00 .destello',0.1,{alpha:1},'-=0.1')
            .to('#escena_00 .destello',0.1,{alpha:0},'+=0.1')
            
             .to('#escena_00 .destello',0.1,{alpha:0.3})
            .to('#escena_00 .destello',0.1,{alpha:0},'+=0.1')
             .to('#escena_00 .destello',0.1,{alpha:0.05},'+=1')
            .to('#escena_00 .destello',0.1,{alpha:0},'+=0.1')
            .addCallback(function(){
                Player.playSoundFX('trueno3');
            }, '+=5')
            .to('#escena_00 .rayo1',0.1,{alpha:1},'+=0.5')
            .to('#escena_00 .rayo1',0.1,{alpha:0},'+=0.1')
            .to('#escena_00 .rayo2',0.1,{alpha:1},'-=0.6')
            .to('#escena_00 .rayo2',0.1,{alpha:0},'+=0.1')
            .to('#escena_00 .destello',0.1,{alpha:1},'-=0.1')
            .to('#escena_00 .destello',0.1,{alpha:0},'+=0.1')
            
            .addCallback(function(){
                Player.playSoundFX('trueno1');
            }, '+=3')
            .to('#escena_00 .rayo2',0.1,{alpha:1},'+=0.5')
            .to('#escena_00 .rayo2',0.1,{alpha:0},'+=0.1')
            .to('#escena_00 .destello',0.1,{alpha:1},'-=0.1')
            .to('#escena_00 .destello',0.1,{alpha:0},'+=0.1')
            .to('#escena_00 .gaviota',0.1,{alpha:0},'-=0.1')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_0.pause();
        
        //escamas
        ANIM.anim_interact_1 = new TimelineMax();
        ANIM.anim_interact_1
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('Kaikai_en_agua');
            })
            .addCallback(function(){
                ANIM.animaEscamas();
            }, '+=0.2')
         
            .addCallback(function(){
                ANIM.animaEscamas();
            }, '+=2')
            .addCallback(function(){
                ANIM.animaEscamas();
            }, '+=3')
            .addCallback(function(){
                ANIM.animaEscamas();
            }, '+=0.4')
            .addCallback(function(){
                ANIM.animaEscamas();
            }, '+=3')
            .addCallback(function(){
                ANIM.animaEscamas();
            }, '+=0.4')
            .addCallback(function(){
                ANIM.animaEscamas();
            }, '+=0.4')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_1.pause();
        
        
        //peces
        ANIM.anim_interact_2_peces = new TimelineMax();
        ANIM.anim_interact_2_peces
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('pez');
            })
            .to('#escena_02 .pez1',2,{x:50,rotation:270,transformOrigin:'70px 66px'})
            .addCallback(function(){
                Player.playSoundFX('pez');
            })
            .to("#escena_02 .pez2",1,{x:50,y:10,rotation:-150,transformOrigin:'10px 50px'})
            .addLabel('final')
            
             ;
        ANIM.anim_interact_2_peces.pause();
        
        
        //brazos saludando
        ANIM.anim_interact_2_brazos = new TimelineMax();
        ANIM.anim_interact_2_brazos
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('saludo_gaviotas');
            })
            .to('#escena_02 .brazo3',0.5,{rotation:-23,ease:Power2.easeOut, transformOrigin:'19px 65px'})
            .to('#escena_02 .brazo3',0.5,{rotation:0,ease:Power2.easeOut,transformOrigin:'19px 65px'})
            .to('#escena_02 .brazo3',0.5,{rotation:-23,ease:Power2.easeOut, transformOrigin:'19px 65px'})
            .to('#escena_02 .brazo3',0.5,{rotation:0,ease:Power2.easeOut,transformOrigin:'19px 65px'})
            .to('#escena_02 .brazo1',0.4,{rotation:30,transformOrigin:'50px 50px'})
            .to('#escena_02 .brazo2',0.4,{rotation:-50,transformOrigin:'8px 40px'},'-=0.4')
            .to('#escena_02 .brazo1',0.4,{rotation:0,transformOrigin:'50px 50px'})
            .to('#escena_02 .brazo2',0.4,{rotation:0,transformOrigin:'8px 40px'},'-=0.4')
            .to('#escena_02 .brazo1',0.4,{rotation:30,transformOrigin:'50px 50px'})
            .to('#escena_02 .brazo2',0.4,{rotation:-50,transformOrigin:'8px 40px'},'-=0.4')
            .to('#escena_02 .brazo1',0.4,{rotation:0,transformOrigin:'50px 50px'})
            .to('#escena_02 .brazo2',0.4,{rotation:0,transformOrigin:'8px 40px'},'-=0.4')
        
            .to('#escena_02 .brazo3',0.5,{rotation:-23,ease:Power2.easeOut, transformOrigin:'19px 65px'},'+=1')
            .to('#escena_02 .brazo3',0.5,{rotation:0,ease:Power2.easeOut,transformOrigin:'19px 65px'})
            .to('#escena_02 .brazo3',0.5,{rotation:-23,ease:Power2.easeOut, transformOrigin:'19px 65px'})
            .to('#escena_02 .brazo3',0.5,{rotation:0,ease:Power2.easeOut,transformOrigin:'19px 65px'})
            .to('#escena_02 .brazo1',0.4,{rotation:30,transformOrigin:'50px 50px'})
            .to('#escena_02 .brazo2',0.4,{rotation:-50,transformOrigin:'8px 40px'},'-=0.4')
            .to('#escena_02 .brazo1',0.4,{rotation:0,transformOrigin:'50px 50px'})
            .to('#escena_02 .brazo2',0.4,{rotation:0,transformOrigin:'8px 40px'},'-=0.4')
            .to('#escena_02 .brazo1',0.4,{rotation:30,transformOrigin:'50px 50px'})
            .to('#escena_02 .brazo2',0.4,{rotation:-50,transformOrigin:'8px 40px'},'-=0.4')
            .to('#escena_02 .brazo1',0.4,{rotation:0,transformOrigin:'50px 50px'})
            .to('#escena_02 .brazo2',0.4,{rotation:0,transformOrigin:'8px 40px'},'-=0.4')
            
            .addLabel('final')
            
             ;
        ANIM.anim_interact_2_brazos.pause();
        
        //fuego avivado
        ANIM.anim_interact_3_fuego = new TimelineMax();
        ANIM.anim_interact_3_fuego
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('fuego');
                $('#escena_03 .btn_interact.btn_musica').css({'display':'none'});
            })
            .to('#escena_03 .fuego',1,{scale:1.4,transformOrigin:'center bottom'})
            .to('#escena_03 .fuego',1,{scale:1,transformOrigin:'center bottom'}, '+=7')
            .addCallback(function(){
                $('#escena_03 .btn_interact.btn_musica').css({'display':'block'});
            })
            .addLabel('final')
            
             ;
        ANIM.anim_interact_3_fuego.pause();
        
        //musica
        ANIM.anim_interact_3_musica = new TimelineMax();
        ANIM.anim_interact_3_musica
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('musica_esc4');
                $('#escena_03 .btn_interact.btn_fuego').css({'display':'none'});
            })
            .to('#escena_03 .fuego',0.5,{scale:1.4,repeat:39, yoyo:true,transformOrigin:'center bottom'})
//            .addCallback(function(){
//                $('#escena_03 .btn_interact.btn_fuego').css({'display':'block'});
//            })
            .addLabel('final')
            
             ;
        ANIM.anim_interact_3_musica.pause();
        
        //brazo apuntando, alas moviendo
        ANIM.anim_interact_3_apunta = new TimelineMax();
        ANIM.anim_interact_3_apunta
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('mar_apunta');
            })
            .to('#escena_03 .ala1',0.25,{rotationY:-20,transformOrigin:'198px 90px'})
            .to('#escena_03 .ala2',0.25,{rotationY:-20,transformOrigin:'0px 90px'},'-=0.25')
            .to('#escena_03 .ala1',0.25,{rotationY:20,repeat:31, yoyo:true, transformOrigin:'198px 90px', ease:Sine.easeInOut})
            .to('#escena_03 .ala2',0.25,{rotationY:20,repeat:31, yoyo:true, transformOrigin:'0px 90px', ease:Sine.easeInOut},'-=8')
            .to('#escena_03 .ala1',0.25,{rotationY:0,transformOrigin:'198px 90px'})
            .to('#escena_03 .ala2',0.25,{rotationY:0,transformOrigin:'0px 90px'},'-=0.25')
            .to('#escena_03 .brazo',1,{x:0,y:0,rotation:0,transformOrigin:'-8px 8px'},'-=6')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_3_apunta.pause();
        
        //ENOJADO PECES
        ANIM.anim_interact_4_enojado = new TimelineMax({repeat:1});
        ANIM.anim_interact_4_enojado
            .addLabel('inicio')
            .set('#escena_04 .cabeza', {z:10})
            .to('#escena_04 .ojo1',0.1, {alpha:1})
            .to('#escena_04 .ojo2',0.1, {alpha:1},'-=0.1')
            .to('#escena_04 .ojo1',0.1, {alpha:0})
            .to('#escena_04 .ojo2',0.1, {alpha:0},'-=0.1')
            .to('#escena_04 .ojo1',0.1, {alpha:1},'+=0.5')
            .to('#escena_04 .ojo2',0.1, {alpha:1},'-=0.1')
            .to('#escena_04 .ojo1',0.1, {alpha:0})
            .to('#escena_04 .ojo2',0.1, {alpha:0},'-=0.1')
            .to('#escena_04 .pez1',2, {x:-500,y:-500, ease:Power3.easeOut},'+=1')
            .to('#escena_04 .pez2',2, {x:-1300,y:120, ease:Power3.easeOut},'-=1.8')
            .to('#escena_04 .pez7',2, {x:550,y:250, ease:Power3.easeOut},'-=1.8')
            .to('#escena_04 .pez3',2, {x:-1300,y:120, ease:Power3.easeOut},'-=1.8')
            .to('#escena_04 .pez5',2, {x:-350,y:450, ease:Power3.easeOut},'-=1.8')
            .to('#escena_04 .pez6',2, {x:-350,y:450, ease:Power3.easeOut},'-=1.8')
            .to('#escena_04 .pez8',2, {x:550,y:250, ease:Power3.easeOut},'-=1.8')
            .to('#escena_04 .pez9',2, {x:550,y:110, ease:Power3.easeOut},'-=1.8')
            .to('#escena_04 .pez4',2, {x:-1400,y:120, ease:Power3.easeOut},'-=1.8')
            .to('#escena_04 .pez10',2, {x:550,y:-80, ease:Power3.easeOut},'-=1.8')
            .addCallback(function(){
                Player.playSoundFX('rugido');
            },'-=4.5') 
//            .to('#escena_04',0.8, {scale:1.5, rotation:2, ease:Power4.easeIn, transformOrigin:'1435px 640px'},'-=2.5')
//            .to('#escena_04 .cabeza',0.1, {scale:1.2,transformOrigin:'300px 600px'},'-=1.7')
//            .to('#escena_04',0.1, {scale:1.4, rotation:-2, repeat:22, yoyo:true, transformOrigin:'1435px 640px'},'-=1.7')
//            .to('#escena_04 .cabeza',0.1, {scale:1, ease:Power4.easeIn,transformOrigin:'300px 600px'},'-=0.1')
//            .to('#escena_04',1.5, {scale:1, rotation:0, ease:Power4.easeOut, transformOrigin:'1435px 640px'})
            .addLabel('final')
            
             ;
        ANIM.anim_interact_4_enojado.pause();
        
        //transformacion
        ANIM.anim_interact_5 = new TimelineMax();
        ANIM.anim_interact_5
            .addLabel('inicio')
//            .addCallback(function(){
//                
//            })
//            .set('#escena_05 .trans', {alpha:1})
            .to('#escena_05 .transformacion2',0.2, {alpha:1},'+=1')
            .to('#escena_05 .transformacion2',1.2, {backgroundPosition:'-1470px -269px', ease:SteppedEase.config(5)})
            .to('#escena_05 .transformacion4',0.2, {alpha:1},'+=1')
            .to('#escena_05 .transformacion4',1.2, {backgroundPosition:'-625px -577px', ease:SteppedEase.config(5)})
            .to('#escena_05 .transformacion1',0.2, {alpha:1},'+=1')
            .to('#escena_05 .transformacion1',1.2, {backgroundPosition:'-945px 0px', ease:SteppedEase.config(5)})
            .to('#escena_05 .transformacion3',0.2, {alpha:1},'+=1')
            .to('#escena_05 .transformacion3',1.2, {backgroundPosition:'-568px -452px', ease:SteppedEase.config(4)})
            .staggerTo('#escena_05 .trans',2, {alpha:0},0.5,'+=3')
            
            .addLabel('final')
            
             ;
        ANIM.anim_interact_5.pause();
        
        //cerros
        ANIM.anim_interact_6_parpadea = new TimelineMax();
        ANIM.anim_interact_6_parpadea
            .addLabel('inicio')
            
            .to('#escena_06 .ojo1',0.1, {alpha:1})
            .to('#escena_06 .ojo2',0.1, {alpha:1},'-=0.1')
            .to('#escena_06 .ojo1',0.1, {alpha:0})
            .to('#escena_06 .ojo2',0.1, {alpha:0},'-=0.1')
            .to('#escena_06 .cerro1',2,{y:0,x:0, ease:Power0.easeNone})
            .addLabel('final')
            
             ;
        ANIM.anim_interact_6_parpadea.pause();
        
        //pelea
        ANIM.anim_interact_7_pelea = new TimelineMax();
        ANIM.anim_interact_7_pelea
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('bg_pelea');
            })
//            .to('#escena_07',7.5, {scale:1.05})
//            .to('#escena_07',7.5, {scale:1})
            .addCallback(function(){
                Player.playSoundFX('pelea1');
            },'+=2.5')
            .to('#escena_07',0.1, {scale:1.2, rotation:2})
            .to('#escena_07 .mancha1',0.1,{alpha:1},'-=0.1')
            .to('#escena_07 .mancha2',0.1,{alpha:1},'-=0.1')
            .to('#escena_07',1, {scale:1.1, rotation:-2})
            .to('#escena_07',5, {scale:1, rotation:0})
            .addCallback(function(){
                Player.playSoundFX('pelea2');
            },'+=2')
            .to('#escena_07',0.1, {scale:1.3, rotation:3})
            .to('#escena_07 .mancha3',0.1,{alpha:1},'-=0.1')
            .to('#escena_07 .mancha4',0.1,{alpha:1},'-=0.1')
            .to('#escena_07 .mancha5',0.1,{alpha:1},'-=0.1')
            .to('#escena_07',1, {scale:1.2, rotation:-3})
            .to('#escena_07',5, {scale:1, rotation:0})
            .addCallback(function(){
//                Player.playSoundFX('pelea3');
            },'+=2')
//            .to('#escena_07',0.1, {scale:1.4, rotation:4})
//            .to('#escena_07',0.1, {scale:1.4, rotation:-4})
            .to('#escena_07 .mancha6',0.1,{alpha:1},'-=0.1')
            .to('#escena_07 .mancha7',0.1,{alpha:1},'-=0.1')
            .to('#escena_07 .mancha8',0.1,{alpha:1},'-=0.1')
//            .to('#escena_07',1, {scale:1.4, rotation:-2})
            .addCallback(function(){
//                Player.playSoundFX('pelea1');
            },'+=3')
//            .to('#escena_07',0.1, {scale:1.4, rotation:-5})
//            .to('#escena_07',0.1, {scale:1.4, rotation:5})
//            .to('#escena_07',0.1, {scale:1.4, rotation:-5})
            .to('#escena_07 .mancha9',0.1,{alpha:1},'-=0.1')
            .to('#escena_07 .mancha10',0.1,{alpha:1},'-=0.1')
            .to('#escena_07 .mancha11',0.1,{alpha:1},'-=0.1')
//            .to('#escena_07',1, {scale:1.2, rotation:2})
//            .to('#escena_07',2, {scale:1, rotation:0})
            .addCallback(function(){
//                Player.playSoundFX('pelea2');
            },'+=5')
//            .to('#escena_07',0.1, {scale:1.45, rotation:6})
//            .to('#escena_07',0.1, {scale:1.45, rotation:-6})
//            .to('#escena_07',0.1, {scale:1.45, rotation:6})
            .to('#escena_07 .mancha12',0.1,{alpha:1},'-=0.1')
            .to('#escena_07 .mancha13',0.1,{alpha:1},'-=0.1')
            .to('#escena_07 .mancha14',0.1,{alpha:1},'-=0.1')
//            .to('#escena_07',1, {scale:1.3, rotation:2})
            .addCallback(function(){
//                Player.playSoundFX('pelea1');
            },'+=4')
//            .to('#escena_07',0.1, {scale:1.5, rotation:-7})
//            .to('#escena_07',0.1, {scale:1.5, rotation:7})
//            .to('#escena_07',0.1, {scale:1.5, rotation:-7})
            .to('#escena_07 .mancha15',0.1,{alpha:1},'-=0.1')
            .to('#escena_07 .mancha16',0.1,{alpha:1},'-=0.1')
            .to('#escena_07 .mancha17',0.1,{alpha:1},'-=0.1')
//            .to('#escena_07',3, {scale:1.1, rotation:1})
            .addCallback(function(){
//                Player.playSoundFX('pelea2');
            },'+=6')
//            .to('#escena_07',0.1, {scale:1.5, rotation:-10})
//            .to('#escena_07',0.1, {scale:1.55, rotation:10})
//            .to('#escena_07',0.1, {scale:1.6, rotation:-10})
//            .to('#escena_07',0.1, {scale:1.5, rotation:10})
            .to('#escena_07 .mancha18',0.1,{alpha:1},'-=0.1')
            .to('#escena_07 .mancha19',0.1,{alpha:1},'-=0.1')
//            .to('#escena_07',0.5, {scale:1.4, rotation:4})
            .addCallback(function(){
//                Player.playSoundFX('pelea3');
            },'+=0.5')
//            .to('#escena_07',0.1, {scale:1.5, rotation:-15})
//            .to('#escena_07',0.1, {scale:1.55, rotation:15})
//            .to('#escena_07',0.1, {scale:1.6, rotation:-15})
//            .to('#escena_07',0.1, {scale:1.5, rotation:15})
            .to('#escena_07 .mancha20',0.1,{alpha:1},'-=0.1')
            .to('#escena_07 .mancha21',0.1,{alpha:1},'-=0.1')
            .to('#escena_07 .mancha22',0.1,{alpha:1},'-=0.1')
            .to('#escena_07',15, {scale:1, rotation:0})
            .staggerTo('#escena_07 .mancha',4,{alpha:0},-0.1,'-=5')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_7_pelea.pause();
       
        //FINAL
        ANIM.anim_interact_8 = new TimelineMax();
        ANIM.anim_interact_8
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('mar_calmo_loop',true);
            })
//        TweenMax.staggerFromTo('#escena_01 .brillo',0.5,{alpha:0, rotation:0},{alpha:1, rotation:180, ease:Sine.easeOut}, 0.03);
//        TweenMax.staggerTo('#escena_01 .brillo',0.5,{alpha:0, rotation:360, ease:Sine.easeIn, delay:0.6}, 0.03);
            .set('#escena_08 .brillo',{rotation:0,alpha:0})
            .staggerTo('#escena_08 .escama',0.1,{alpha:1, ease:Sine.easeInOut}, 0.05)
            .staggerTo('#escena_08 .escama',0.1,{alpha:0, ease:Sine.easeInOut}, 0.05, '-=1.7')
            .staggerTo('#escena_08 .brillo',0.5,{alpha:1, rotation:180, ease:Sine.easeOut}, 0.1, '-=2.5')
            .staggerTo('#escena_08 .brillo',0.5,{alpha:0, rotation:360, ease:Sine.easeIn}, 0.1,'-=4')         
    
            .addCallback(function(){
                Player.playSoundFX('musica_fin', true);
            })
            .to('#escena_08 .tonina1',1,{y:0, x:30, rotation:-20, ease:Power2.easeIn, transformOrigin:'50px 100px'})
            .to('#escena_08 .tonina1',1.5,{y:60, x:60, rotation:90, ease:Power2.easeOut, transformOrigin:'50px 100px'})
            .to('#escena_08 .tonina3',1,{y:-30, x:30, rotation:-20, ease:Power2.easeIn, transformOrigin:'50px 100px'},'-=2')
            .to('#escena_08 .tonina3',1.5,{y:60, x:100, rotation:90, ease:Power2.easeOut, transformOrigin:'50px 100px'},'-=1')
            .to('#escena_08 .tonina2',1,{y:0, x:30, rotation:-20, ease:Power2.easeIn, transformOrigin:'50px 100px'},'+=3')
            .to('#escena_08 .tonina2',1.5,{y:60, x:60, rotation:90, ease:Power2.easeOut, transformOrigin:'50px 100px'})
            
            .to('#escena_08 .tonina4',1,{y:0, x:30, rotation:-20, ease:Power2.easeIn, transformOrigin:'40px 50px'},'+=4')
            .to('#escena_08 .tonina4',1.5,{y:11, x:60, rotation:90, ease:Power2.easeOut, transformOrigin:'40px 50px'})
            .to('#escena_08 .tonina5',1,{y:-20, x:30, rotation:-20, ease:Power2.easeIn, transformOrigin:'40px 50px'},'-=2')
            .to('#escena_08 .tonina5',1.5,{y:10, x:70, rotation:90, ease:Power2.easeOut, transformOrigin:'40px 50px'},'-=1')
            
            .addLabel('final')
            
             ;
        ANIM.anim_interact_8.pause();
        
        ANIM.anim_interact_8_finalREAL = new TimelineMax();
        ANIM.anim_interact_8_finalREAL
            .addLabel('inicio')
            .set('#escena_08 .tonina1',{rotation:-90, y:60, x:0, transformOrigin:'50px 100px'})
            .set('#escena_08 .tonina2',{rotation:-90, y:60, x:0, transformOrigin:'50px 100px'})
            .set('#escena_08 .tonina3',{rotation:-90, y:60, x:0, transformOrigin:'50px 100px'})
            .set('#escena_08 .tonina4',{rotation:-90, y:8, x:0, transformOrigin:'40px 50px'})
            .set('#escena_08 .tonina5',{rotation:-90, y:10, x:0, transformOrigin:'40px 50px'})
            .set('#escena_08 .brillo',{rotation:0,alpha:0})
            .staggerTo('#escena_08 .escama',0.1,{alpha:1, ease:Sine.easeInOut}, 0.05)
            .staggerTo('#escena_08 .escama',0.1,{alpha:0, ease:Sine.easeInOut}, 0.05, '-=1.7')
            .staggerTo('#escena_08 .brillo',0.5,{alpha:1, rotation:180, ease:Sine.easeOut}, 0.1, '-=2.5')
            .staggerTo('#escena_08 .brillo',0.5,{alpha:0, rotation:360, ease:Sine.easeIn}, 0.1,'-=4')
             
            .to('#escena_08 .tonina1',1,{y:0, x:30, rotation:-20, ease:Power2.easeIn, transformOrigin:'50px 100px'})
            .to('#escena_08 .tonina1',1.5,{y:60, x:60, rotation:90, ease:Power2.easeOut, transformOrigin:'50px 100px'})
            .to('#escena_08 .tonina3',1,{y:-30, x:30, rotation:-20, ease:Power2.easeIn, transformOrigin:'50px 100px'},'-=2')
            .to('#escena_08 .tonina3',1.5,{y:60, x:100, rotation:90, ease:Power2.easeOut, transformOrigin:'50px 100px'},'-=1')
            
            .to('#escena_08 .tonina2',1,{y:0, x:30, rotation:-20, ease:Power2.easeIn, transformOrigin:'50px 100px'},'+=8')
            .to('#escena_08 .tonina2',1.5,{y:60, x:60, rotation:90, ease:Power2.easeOut, transformOrigin:'50px 100px'})
            .addCallback(function(){
                Player.activaBtnSiguiente();
            })
            .to('#escena_08 .tonina4',1,{y:0, x:30, rotation:-20, ease:Power2.easeIn, transformOrigin:'40px 50px'},'+=8')
            .to('#escena_08 .tonina4',1.5,{y:11, x:60, rotation:90, ease:Power2.easeOut, transformOrigin:'40px 50px'})
            .to('#escena_08 .tonina5',1,{y:-20, x:30, rotation:-20, ease:Power2.easeIn, transformOrigin:'40px 50px'},'-=2')
            .to('#escena_08 .tonina5',1.5,{y:10, x:70, rotation:90, ease:Power2.easeOut, transformOrigin:'40px 50px'},'-=1')
            
            .addLabel('final')
            
             ;
        ANIM.anim_interact_8_finalREAL.pause();
        
       
        ANIM.arr_interacts = [
         
            ANIM.anim_interact_0,
            ANIM.anim_interact_1,
            ANIM.anim_interact_2_peces,
            ANIM.anim_interact_2_brazos,
            ANIM.anim_interact_3_fuego,
            ANIM.anim_interact_3_musica,
            ANIM.anim_interact_3_apunta,
            ANIM.anim_interact_4_enojado,
            ANIM.anim_interact_5,
            ANIM.anim_interact_6_parpadea,
            ANIM.anim_interact_7_pelea,
            ANIM.anim_interact_8,
            ANIM.anim_interact_8_finalREAL,
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
        
        TweenMax.set('#escena_00 .destello',{alpha:0});
        TweenMax.set('#escena_00 .rayo',{alpha:0});
        TweenMax.set('#escena_00 .gaviota',{alpha:0});
        
        TweenMax.killTweensOf("#escena_01 .alga");
        TweenMax.set("#escena_01 .alga",{x:0,rotation:0}); 
        TweenMax.set('#escena_01 .escama',{alpha:0});
        TweenMax.set('#escena_01 .brillo',{alpha:0, rotation:0});
        
        TweenMax.killTweensOf("#escena_02 .bote");
        TweenMax.set("#escena_02 .bote",{x:0,y:0,rotation:0});
        TweenMax.set("#escena_02 .pez1",{x:0,y:0,rotation:-90,transformOrigin:'70px 66px'});
        TweenMax.set("#escena_02 .pez2",{x:150,y:-1,rotation:90,transformOrigin:'10px 50px'});
        TweenMax.set('#escena_02 .brazo1',{rotation:0,transformOrigin:'50px 50px'});
        TweenMax.set('#escena_02 .brazo2',{rotation:0,transformOrigin:'8px 40px'});
        TweenMax.set('#escena_02 .brazo3',{rotation:0,transformOrigin:'19px 65px'});
        
        TweenMax.set('#escena_03 .fuego',{scale:1});
        TweenMax.killTweensOf("#escena_03 .flama");
        TweenMax.set('#escena_03 .flama',{alpha:0, y:0, x:0});
        TweenMax.set('#escena_03 .brazo',{x:18,y:-3,rotation:95,transformOrigin:'-8px 8px'});
        
        TweenMax.set('#escena_04',{scale:1, rotation:0});
        TweenMax.set('#escena_04 .pez',{x:0,y:0});
        TweenMax.set('#escena_04 .ojo',{alpha:0});
        
        TweenMax.set('#escena_05 .trans',{alpha:0});
        TweenMax.set('#escena_05 .transformacion1',{backgroundPosition:'0px 0px'});
        TweenMax.set('#escena_05 .transformacion2',{backgroundPosition:'0px -269px'});
        TweenMax.set('#escena_05 .transformacion3',{backgroundPosition:'0px -452px'});
        TweenMax.set('#escena_05 .transformacion4',{backgroundPosition:'0px -577px'});

        TweenMax.killTweensOf("#escena_06 .cerro1");
        TweenMax.killTweensOf("#escena_06 .cerro2");
        TweenMax.killTweensOf("#escena_06 .cerro3");
        TweenMax.set('#escena_06 .ojo1',{alpha:0});
        TweenMax.set('#escena_06 .ojo2',{alpha:0});
        TweenMax.set('#escena_06 .cerro1',{x:-100,y:300});
        TweenMax.set('#escena_06 .cerro2',{x:0,y:0});
        TweenMax.set('#escena_06 .cerro3',{x:0,y:0});

        TweenMax.set('.mancha',{alpha:0});
        TweenMax.set('.mancha1',{scale:2, x:1450, y:500, rotation:0});
        TweenMax.set('.mancha2',{scale:1, x:150, y:500, rotation:0});
        TweenMax.set('.mancha3',{scale:1, x:1350, y:-220, rotation:80});
        TweenMax.set('.mancha4',{scale:2, x:350, y:-220, rotation:80});
        TweenMax.set('.mancha5',{scale:1.5, x:350, y:720, rotation:40});
        TweenMax.set('.mancha6',{scale:1.5, x:-100, y:120, rotation:90});
        TweenMax.set('.mancha7',{scale:1, x:1100, y:720, rotation:30});
        TweenMax.set('.mancha8',{scale:2, x:100, y:660, rotation:20});
        TweenMax.set('.mancha9',{scale:3, x:1300, y:660, rotation:25});
        TweenMax.set('.mancha10',{scale:3, x:0, y:60, rotation:90});
        TweenMax.set('.mancha11',{scale:3, x:1600, y:300, rotation:-30});
        TweenMax.set('.mancha12',{scale:3.4, x:290, y:800, rotation:-100});
        TweenMax.set('.mancha13',{scale:4, x:1190, y:800, rotation:-100});
        TweenMax.set('.mancha14',{scale:4, x:1400, y:800, rotation:-160});
        TweenMax.set('.mancha15',{scale:5, x:0, y:550, rotation:-160});
        TweenMax.set('.mancha16',{scale:5, x:1250, y:650, rotation:30});
        TweenMax.set('.mancha17',{scale:5, x:100, y:150, rotation:27});
        TweenMax.set('.mancha18',{scale:2, x:200, y:350, rotation:-27});
        TweenMax.set('.mancha19',{scale:2, x:500, y:150, rotation:-56});
        TweenMax.set('.mancha20',{scale:2, x:500, y:350, rotation:-96});
        TweenMax.set('.mancha21',{scale:3, x:800, y:350, rotation:59});
        TweenMax.set('.mancha22',{scale:3, x:800, y:0, rotation:19});
        
        TweenMax.set('#escena_08 .escama',{alpha:0});
        TweenMax.set('#escena_08 .brillo',{alpha:0, rotation:0});
        TweenMax.set('#escena_08 .tonina1',{rotation:-90, y:60, x:0, transformOrigin:'50px 100px'});
        TweenMax.set('#escena_08 .tonina2',{rotation:-90, y:60, x:0, transformOrigin:'50px 100px'});
        TweenMax.set('#escena_08 .tonina3',{rotation:-90, y:60, x:0, transformOrigin:'50px 100px'});
        TweenMax.set('#escena_08 .tonina4',{rotation:-90, y:8, x:0, transformOrigin:'40px 50px'});
        TweenMax.set('#escena_08 .tonina5',{rotation:-90, y:10, x:0, transformOrigin:'40px 50px'});

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
                if(btn.hasClass('btn_tormenta')){
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
                        ANIM.anim_interact_1.play(0);
                    });
                 }
                break;
            case 2:
                 if(btn.hasClass('btn_peces')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_2_peces.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_peces.play(0);
                    });
                 }
                 if(btn.hasClass('btn_brazos')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_2_brazos.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_brazos.play(0);
                    });
                 }
                 break;
             case 3:
                if(btn.hasClass('btn_musica')){
                 btn.click(function(){
                    $(this).css({"display":"none"});
                    ANIM.anim_interact_3_musica.eventCallback("onComplete",function(){
                            ANIM.anim_interact_3_musica.play(0);
                        });    
                    ANIM.anim_interact_3_musica.play(0);
                    });
                }
                if(btn.hasClass('btn_fuego')){
                    btn.click(function(){
                    $(this).css({"display":"none"});
                    ANIM.anim_interact_3_fuego.eventCallback("onComplete", muestralo, [$(this), cb]);   
                    ANIM.anim_interact_3_fuego.play(0);
                    });
                }
                if(btn.hasClass('btn_apunta')){
                    btn.click(function(){
                    $(this).css({"display":"none"});
                    ANIM.anim_interact_3_apunta.eventCallback("onComplete", muestralo, [$(this), cb]);   
                    ANIM.anim_interact_3_apunta.timeScale(0.7).play(0);
                    });
                }
                 break;
            case 4:
                 if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_4_enojado.eventCallback("onComplete", muestralo, [$(this), cb]); 
                        ANIM.anim_interact_4_enojado.play(0);
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
                        ANIM.anim_interact_6_parpadea.eventCallback("onComplete", function(){
                            ANIM.animaCerros(1,1,500,1000,100,200,10,100);
                            ANIM.animaCerros(2,1,3500,4000,30,100,25,30);
                            ANIM.animaCerros(3,1,1000,3000,300,500,10,100);
                        }); 
                        ANIM.anim_interact_6_parpadea.play(0);
                    });
                }
                 break;
             case 7:
                if(btn.hasClass('primario')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_7_pelea.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_7_pelea.play(0);
                    });
                 }
                 break;
             case 8:
                    btn.click(function(){
                        $(this).css({"display":"none"});  
                        ANIM.anim_interact_8.eventCallback("onComplete", function(){
                             ANIM.anim_interact_8_finalREAL.eventCallback("onComplete", function(){
                                ANIM.anim_interact_8_finalREAL.play(0);
                            });  
                            ANIM.anim_interact_8_finalREAL.play(0);
                        });   
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
        $('#escena_00').css({'top':dif+'px'});
        $('#escena_01').css({'bottom':dif+'px'});
        $('#escena_02').css({'bottom':dif+'px'});
        $('#escena_03').css({'bottom':dif+'px'});
//        $('#escena_04').css({'bottom':dif+'px'});
//        $('#escena_05').css({'bottom':dif+'px'});
//        $('#escena_07').css({'bottom':dif+'px'});
//        $('#escena_10').css({'bottom':dif+'px'});
    }
};