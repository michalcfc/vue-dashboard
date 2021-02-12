<template lang="pug">
- var cards = [{ name: "Views" },{ name: "Messages" },{ name: "Total guest" }]
div(class="xs:grid-cols-2 lg:grid-cols-3").grid.gap-4
  each card in cards
    .auto-cols-max.bg-white.shadow.p-10= card.name
</template>

<script>

export default {
  name: 'Home',
  props: {
    msg: String,
  },
};
</script>
