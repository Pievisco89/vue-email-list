const app = new Vue({

  el: '#app',
  data:{
    arrEmail: [],
  },
  mounted(){
    this.callAPI('https://flynn.boolean.careers/exercises/api/random/mail')

  },
  methods:{
    callAPI(url){
      axios.get(url)
        .then(resp => {
          this.arrEmail.push(resp.data.response);
          if(this.arrEmail.length < 10) this.callAPI(url);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

})