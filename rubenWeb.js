const app = Vue.createApp({
    data() {
        return {
             abrirVentana: 'sobreMi',
             imagenes: [
                'imagen1.jpg',
                'imagen2.jpg',
                'imagen4.jpg',
              ],
              cambio: 'imagen2,',
            indiceImagen: 0,
            frasesDiv: '',
            frasesLibro: ['“La formación de hábitos es un proceso mediante el cual una conducta se vuelve progresivamente automática mediante la repetición constante“',
             '“Si realmente quieres algo, puedes conseguirlo. Pero la verdad es que nuestra verdadera motivación consiste en ser perezosos y hacer lo que es más conveniente“',
             '“Cada hábito que ponemos en manos de la tecnología libera tiempo y energía para que los pongamos al servicio de nuestra siguiente etapa de crecimiento',
             '“Me he dado cuenta que con frecuencia imitó el comportamiento de aquellos que me rodean, sin darme cuenta“'],
            i: 0,

        };
    },
    mounted(){
        this.frasesDiv = document.getElementById('frasesLibros1');
        setInterval(this.cambiarFrase, 5000);
       

    },
    methods: {
           
        ventanas(ventana){
            this.abrirVentana = ventana
        },


        cambiarFrase(){
          this.frasesDiv.innerText = this.frasesLibro[this.i];
          this.i++;
          if(this.i >= this.frasesLibro.length){
             this.i = 0;
          };
        },
        //INTERVALO DE FRASES 
        
        

    },
    // //////////////////////////////////////////////////////////////////////////////fin de data
});

app.mount('#app');