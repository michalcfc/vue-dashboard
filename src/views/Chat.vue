<template lang="pug">
h1.text-3xl.my-4 Chat
.grid.grid-cols-2.gap-2
  div.bg-white list messages
    div(v-for="(conversation, key) in conversations[0]" :key="conversation")
      div(v-for="convers in conversation" :key="conversation.id").mt-4
        span {{ convers.name }}
        figure.w-12.h-12
          img(:src="convers.img").rounded-full.w-full.h-full.object-cover
  .bg-white chat
</template>

<script>
export default {
  name: 'Chat',
  data() {
    return {
      conversations: [{
        John: [{
          id: 1,
          name: 'John Howard',
          img: 'img/john.jpg',
          messages: [
            {
              id: 1,
              message: 'Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor',
              seneder: 'John Howard',
            },
            {
              id: 2,
              message: 'Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor',
              seneder: 'John Howard',
            },
          ],
        }],
        Maria: [{
          id: 2,
          name: 'Maria Estman',
          img: 'img/maria.jpg',
          messages: [
            {
              id: 1,
              message: 'Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor',
              seneder: 'Maria Estman',
            },
            {
              id: 2,
              message: 'Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor',
              seneder: 'Maria Estman',
            },
          ],
        }],
        Anna: [{
          id: 1,
          name: 'Anna Smith',
          img: 'img/anna.jpg',
          messages: [
            {
              id: 1,
              message: 'Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor',
              seneder: 'Anna Smith',
            },
            {
              id: 2,
              message: 'Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor',
              seneder: 'Anna Smith',
            },
          ],
        }],
        Marcus: [{
          id: 1,
          name: 'Marcus Holder',
          img: 'img/marcus.jpg',
          messages: [
            {
              id: 1,
              message: 'Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor',
              seneder: 'Marcus Holder',
            },
            {
              id: 2,
              message: 'Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor',
              seneder: 'Marcus Holder',
            },
          ],
        }],
        Kevin: [{
          id: 1,
          name: 'Kevin Dawoe',
          img: 'img/kevin.jpg',
          messages: [
            {
              id: 1,
              message: 'Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor',
              seneder: 'Kevin Dawoe',
            },
            {
              id: 2,
              message: 'Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor',
              seneder: 'Kevin Dawoe',
            },
          ],
        }],
        Christiene: [{
          id: 1,
          name: 'Christiene Johanson',
          img: 'img/christiene.jpg',
          messages: [
            {
              id: 1,
              message: 'Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor',
              seneder: 'Christiene Johanson',
            },
            {
              id: 2,
              message: 'Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor',
              seneder: 'Christiene Johanson',
            },
          ],
        }],
      }],
    };
  },
  props: {
    msg: String,
  },
};
</script>
