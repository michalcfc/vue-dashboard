<template lang="pug">
.grid.h-screen.place-items-center.bg-gray-100
  div
    router-link(to="/") Home
    br
    router-link(to="/login") Login
</template>

<script>
export default {
  name: 'LayoutB',
};
</script>
