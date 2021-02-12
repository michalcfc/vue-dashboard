<template lang="pug">
h1.text-3xl.my-4 Components
.grid.gap-4
  .bg-white.w-full.p-6
    h3 Buttons
    .mt-3
      button.text-center.px-4.py-2.mr-4.bg-blue-600.text-white.border.border-blue-600.rounded Primary
      button.text-center.px-4.py-2.mr-4.border.border-blue-600.rounded.text-blue-600 Secondary
      button.text-center.px-4.py-2.mr-4.border.border-red-600.rounded.text-red-600 Danger
      button.text-center.px-4.py-2.mr-4.border.bg-black.rounded.text-white Dark
  .bg-white.w-full.p-6
    h3 Headings
    .mt-3
      h1.text-6xl heading
      h2.text-5xl heading
      h3.text-4xl heading
      h4.text-3xl heading
      h5.text-2xl heading
      h6.text-1xl heading
</template>

<script>

export default {
  name: 'ComponentsUI',
  props: {
    msg: String,
  },
};
</script>
