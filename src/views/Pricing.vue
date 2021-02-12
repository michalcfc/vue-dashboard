<template lang="pug">
.flex.justify-center.margin-auto
  .text-center
    h1.text-4xl {{ headerText }}
    h5.text-lg {{ descriptionText }}
div.w-52.relative.m-auto.mt-6
  input(
    id="pack"
    type="checkbox"
    v-model="toggleActive"
    value="Jack"
  )
  label(
    for="pack"
  ).relative.w-full
    span(
      :class="{'text-red-200': toggleActive}") test1
    span(
      :class="{'text-red-200': !toggleActive}") test2
div(
  class="xs:grid-cols-2 lg:grid-cols-3").grid.gap-4
  div(
    v-for="price in prices"
  ).flex.flex-col.auto-cols-max.bg-white.shadow.p-10
    h1.font-bold.text-4xl {{ price.name }}
    div.text-6xl.mt-6.font-semibold {{toggleActive ? price.monthly : price.annual }}
    p.my-6 {{ price.desc }}
    div.flex-1
      ul(
        v-for="benefit in price.benefits"
      )
        li.mb-2 {{ benefit }}
    button(class="hover:bg-blue-600 hover:text-white"
    ).text-center.w-full.mt-8.text-blue-600.cursor-pointer.rounded.border.border-blue-600.px-4.py-4 Choose plan
</template>

<script>

export default {
  name: 'Basic',
  data() {
    return {
      toggleActive: '',
      headerText: 'Simple pricing that scales with your business',
      descriptionText: 'Whether you are an individual or a Fortune 500 enterprise, there is a plan thats right for you',
      prices: [
        {
          name: 'Standard',
          desc: 'Perfect for an individual or a small team starting to get bigger',
          annual: '$199',
          monthly: '$99',
          benefits: [
            '10 projects',
            '5GB storage',
            'Analytics',
            'Free mobile app',
            'Access to support forums',
          ],
        },
        {
          name: 'Regular',
          desc: 'Perfect for growing teams wanting to be in more control',
          annual: '$999',
          monthly: '$890',
          benefits: [
            'Members',
            '24 / 7 support',
            'Direct messaging',
            'Dedicated hardware',
            'Advanced analytics',
            'Unlimited storage',
          ],
        },
        {
          name: 'Premium',
          desc: 'Perfect for companies wanting advanced tools and support',
          annual: '$1999',
          monthly: '$999',
          benefits: [
            'Members',
            'No limits',
            'Direct messaging',
            'Dedicated hardware',
            'Unlimited activity',
            'Unlimited storage',
            'Unlimited projects',
          ],
        },
      ],
    };
  },
  methods: {
    changePlan() {
      this.toggleActive = !this.toggleActive;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
