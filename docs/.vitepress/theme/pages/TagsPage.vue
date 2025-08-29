<script setup lang="ts">
import {computed} from 'vue';
import Tag from '@/components/Tag.vue';
import {data} from '@/readmes.data';

const list = computed(() => {
  return data.tags.map((tag) => {
    return {
      tag,
      list: data.readmes.filter((item) => item.tags?.includes?.(tag))
    };
  });
});
</script>

<template>
  <div class="tags-page">
    <Content />

    <section v-for="item in list" class="section">
      <h2 class="section-title">
        <a :href="`/tag/${item.tag}`">{{ item.tag }}</a>
      </h2>

      <ol class="section-list">
        <li v-for="item2 in item.list">
          <Tag rel="noreferrer" :href="`/${item2.categoryId}/${item2.filename}`" class="item">{{ item2.name }}</Tag>
        </li>
      </ol>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.tags-page {
  padding: 32px;

  .section {
    width: 100%;
    margin-bottom: 20px;

    &-title {
      margin-bottom: 10px;
      font-weight: bold;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
      margin: -5px;

      .item {
        margin: 5px;
      }
    }
  }
}
</style>
