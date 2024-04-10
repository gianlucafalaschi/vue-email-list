
const { createApp } = Vue;

createApp({
    data() {
        return {
            emailsArray:[],
            newEmail: null,
        };
    },
    methods: {
        getEmailFromApi(){
            // Fino a quando non ho 10 items nell'array
            // Chiamiamo l'api che genera un numero
            // Quando otteniamo la risposta: popoliamo la variabile newEmail
            // con l'email ottenuta dall'api
        for (let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
            then((response) => {
                    const serverData = response.data;
                    this.newEmail = serverData.response;
                    console.log(this.newEmail);
                    this.emailsArray.push(this.newEmail);
                });
            }
            console.log(this.emailsArray);
        },
    },
    mounted() {
        this.getEmailFromApi();
        
    }
}).mount('#app');

// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.