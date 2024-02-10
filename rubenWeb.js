const app = Vue.createApp({
    data() {
        return {
             abrirVentana: '',
             imagenes: [
                'imagen1.jpg',
                'imagen2.jpg',
                'imagen4.jpg',
              ],
              cambio: 'imagen2,',
            indiceImagen: 0
        };
    },
    methods: {
           
        ventanas(ventana){
            this.abrirVentana = ventana
        },

        cambioImagen(){
            document.getElementById('imagen').src = 'Imagenes/' + this.imagenes[this.indiceImagen]
            alert(this.imagenes[this.indiceImagen])
            this.indiceImagen = this.indiceImagen + 1
            if(this.indiceImagen >= this.imagenes.length){
                this.indiceImagen = 0;
            }
        }
    }
    // //////////////////////////////////////////////////////////////////////////////fin de data
});

app.mount('#app');