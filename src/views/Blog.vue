<template lang="pug">
h1.text-3xl.my-4 Blog
div(class="xs:grid-cols-2 lg:grid-cols-3").grid.gap-4
  div(v-for="article in articles").auto-cols-max.bg-white.shadow.p-4.rounded
    img(:src="article.img")
    .h3.text-2xl.font-semibold.mb-4 {{ article.title }}
    p {{ article.desc }}
</template>

<script>

export default {
  name: 'Blog',
  data() {
    return {
      articles: [
        {
          img: 'img/logo.png',
          title: '12 best web development blogs to read and follow in 2020',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
          author: 'Mike',

        },
        {
          img: 'img/logo.png',
          title: '10 Tips for Junior Software Developers',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
          author: 'Anna',

        },
        {
          img: 'img/logo.png',
          title: 'Javascript tutorial',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
          author: 'Anna',
        },
        {
          img: 'img/logo.png',
          title: '12 best web development blogs to read and follow in 2020',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
          author: 'Mike',

        },
        {
          img: 'img/logo.png',
          title: '10 Tips for Junior Software Developers',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
          author: 'Anna',

        },
        {
          img: 'img/logo.png',
          title: 'Javascript tutorial',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
          author: 'Anna',
        },
        {
          img: 'img/logo.png',
          title: '12 best web development blogs to read and follow in 2020',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
          author: 'Mike',

        },
        {
          img: 'img/logo.png',
          title: '10 Tips for Junior Software Developers',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
          author: 'Anna',

        },
        {
          img: 'img/logo.png',
          title: 'Javascript tutorial',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget consequat nisl. Mauris rutrum, felis ac sollicitudin fringilla, metus augue fermentum justo, molestie malesuada lectus orci at tellus.',
          author: 'Anna',
        },
      ],
    };
  },
  props: {
    msg: String,
  },
};
</script>
