<template>

  <main v-if="data" class="template">


    <header class = 'template__header'>
      <PrismicRichText :field = "data.data.title"/>
    </header>

    <div class="template__body">
      <PrismicRichText :field = "data.data.body_text"/>
    </div>

  </main>

</template>

<script setup>
import {useSinglePrismicDocument} from "@prismicio/vue";

const {data} = useSinglePrismicDocument('get_involved')

</script>

<style lang="scss" scoped>

.digital {
  padding: 0 100px;

  h1 {
    margin-top: 5rem;
  }

  p{
    margin-top: 5rem;

  }
}

</style>
