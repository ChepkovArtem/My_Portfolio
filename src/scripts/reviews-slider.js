import Vue from 'vue';
import flicSlider from 'vue-flickity';


const review = {
    template: "#review-comp",
    props: ["review"]
};

const authorPic = {
    template: "#author-pic",
    props: ["review"]
};

const authorInfo = {
    template: "#author-info",
    props: ["review"]
};


new Vue({
    el: "#flickity-slider",
    template: "#flickity-slider-test",
    components:{
        flicSlider,
        review,
        authorPic,
        authorInfo
    },
    data(){
        return{
            reviews: [],
            flickityOptions:{
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false,
                groupCells: true,
                cellAlign: 'left',
            },
        };
    },
    methods:{
        next(){
            this.$refs.flickity.next();
        },
        
        previous(){
            this.$refs.flickity.previous();
        },
        makeArrWithRequiredImages(data) {
            return data.map(photo => {
              const requiredPic = require(`../images/content/${photo.authorpic}`);
              photo.authorpic = requiredPic;
      
              return photo;
            });
        },        
    },
    created() {
        const data = require("../data/reviews.json");
        this.reviews = this.makeArrWithRequiredImages(data);
    }
});