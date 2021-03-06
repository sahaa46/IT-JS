/*
Vue.component('todo-item', {
    template: '<li style="color:red;">{{todo.text}}</li>',
    props: ['todo']
});


var vm = new Vue({
    el: '#app',
    data: {
        msg: 'Emin Sahat',
        titleMsg: 'Bravo macko',
        imgUrl: 'https://vuejs.org/images/logo.png',
        show: false,
        todos: [
            { text: 'JavaScript najbolji jezik' },
            { text: 'Vue.js najbolji framwork' },
            { text: 'HTML je beton' }
        ],
        firstName: 'Emin'
    },
    methods: {
        showImg: function (evt) {
            console.log(evt);
            this.show = !this.show;
        },
        logData: function () {
            console.log(this.firstName);

        }
    }
});
*/


var vm = new Vue({
    el: '#app',
    data: {
        person: {
            firstname: '',
            lastname: '',
            position: '',
            phonenumber: '',
            email: '',
            socialmedia: '',
            adress: '',
            education: '',
            experience: ''
        },
        show: false
    },
    methods: {
        showTemplate: function (evt) {
            this.show = !this.show;
        },
        resetFields: function () {
            document.getElementById("myForm").reset();
        }
    }
});



