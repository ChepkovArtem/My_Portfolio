import Vue from "vue";

const review = {
    template: "#review-comp",
    props: ["review"]
};

const authorPic = {
    template: "#author-pic",
    props: ["review"]
}

const authorInfo = {
    template: "#author-info",
    props: ["review"]
}

new Vue({
    el: "#reviews-component",
    template: "#review-container",
    components:{
        review,
        authorPic,
        authorInfo
    },
    data() {
      return {
          reviews: [],
      };
    },
        makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;

        return item;
      });
    },
    created() {
        const data = require("../data/reviews.json");
        this.reviews = data;
    }
});