
const { createApp } = Vue;

createApp({
    data() {
        return {
            newEmail: null
        };
    },
    methods: {
        getEmailFromApi(){
            // Chamiamo l'api che genera un numero
            // Quando otteniamo la risposta: popoliamo la variabile newEmail
            // con l'email ottenuta dall'api
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
            then((response) => {
                const serverData = response.data;
                this.newEmail = serverData.response;
                console.log(this.newEmail)
            });
        }
    },
    mounted() {

        
    }
}).mount('#app');

// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.