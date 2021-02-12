<template lang="pug">
- var links = ["Dashboard", "Chat", "Blog", 'Pricing', 'Calendar', 'Compontents UI']
.flex.h-screen.bg-gray-100
    Sidebar.w-52
    .flex-1.flex.flex-col.overflow-hidden
      Header
        router-link(to="/") Home
        br
        router-link(to="/login") Login
      Main
      Footer
</template>

<script>
import Main from './components/Main/Main.vue';
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import Sidebar from './components/Sidebar/Sidebar.vue';

export default {
  name: 'LayoutDefault',
  components: {
    Header,
    Main,
    Sidebar,
    Footer,
  },
};
</script>
