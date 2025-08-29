<script setup lang="ts">
import Tag from '@/components/Tag.vue';
import {data} from '@/readmes.data';
</script>

<template>
  <div class="readmes-page">
    <Content />

    <section v-for="category in data.categories" class="section">
      <h2 class="section-title">{{ category.name.toUpperCase() }}</h2>

      <ol class="section-list">
        <li v-for="item in category.items">
          <Tag :href="`/${category.id}/${item.filename}`" :item class="item">{{ item.name }}</Tag>
        </li>
      </ol>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.readmes-page {
  padding: 32px;

  .section {
    &-title {
      font-weight: bold;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
      margin: 10px -5px 20px;

      .item {
        margin: 5px;
      }
    }
  }
}
</style>
