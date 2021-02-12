<template lang="pug">
nav.bg-blue-600.overflow-y-auto.inset-y-0.left-0
  .flex.items-center.justify-center.my-8
    img(src="img/logo.png").h-20
  div(
    class="hover:bg-blue-500"
  )(v-for="link in links").cursor-pointer.text-gray-100
    router-link(:to="`${link.path}`")
      div.w-full.p-4 {{ link.name }}
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      links: [
        { name: 'Dashboard', path: '/home' },
        { name: 'Chat', path: '/chat' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Blog', path: '/blog' },
        { name: 'Components UI', path: '/components-ui' }],
    };
  },
};
</script>
