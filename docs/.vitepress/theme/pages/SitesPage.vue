<script setup lang="ts">
import Tag from '@/components/Tag.vue';
import {data} from '@/readmes.data';
</script>

<template>
  <div class="sites-page">
    <Content />

    <Tag v-for="item in data.sites" :href="item.url" target="_blank" class="item">{{ item.name }}</Tag>
  </div>
</template>

<style lang="scss" scoped>
.sites-page {
  padding: 32px;

  .item {
    margin: 5px;
  }
}
</style>
