const app = new Vue({
    el:'#root',
    data: {
        images:[
            {   
                "place":'Svezia',
                "quote":'Vieni a goderti quel po\' di tempo libero che ti rimane in un paradiso ',
                "src":" img/01.jpg",
            },
            
            {   
                "place":'Svizzera',
                "quote":'Vieni a goderti quel po\' di tempo libero che ti rimane in un paradiso ',
                "src":" img/02.jpg",
            },

            {   
                "place":'Gran Bretagna',
                "quote":'Vieni a goderti quel po\' di tempo libero che ti rimane in un paradiso ',
                "src":" img/03.jpg",
            },

            {   
                "place":'Germania',
                "quote":'Vieni a goderti quel po\' di tempo libero che ti rimane in un paradiso ',
                "src":" img/04.jpg",
            },

            {   
                'place':'Paradise',
                'quote':'Vieni a goderti quel po\' di tempo libero che ti rimane in un paradiso ',
                'src':" img/05.jpg",
            },

        
        ],
        currentImg:0
    },
    methods:{
        nextImage:function(){
            if(this.currentImg== this.images.length - 1 ){
                this.currentImg =0;
            }else{
                this.currentImg++;
            }
            
        },
        prevImg:function(){
            if(this.currentImg == 0){
                this.currentImg = this.images.length-1;
            }else{
                this.currentImg--;
            }    
        }

    }
});