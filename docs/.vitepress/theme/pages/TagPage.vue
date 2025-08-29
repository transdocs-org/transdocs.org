<script setup lang="ts">
import {useData} from 'vitepress';
import {computed} from 'vue';
import Tag from '@/components/Tag.vue';
import {data} from '../readmes.data';

const {params} = useData();

const tag = computed(() => params.value!.tag);

const list = computed(() => data.readmes.filter((item) => item.tags?.includes?.(tag.value)));
</script>

<template>
  <div class="tag-page">
    <Content />

    <ul>
      <li v-for="item in list">
        <Tag :href="`/${item.categoryId}/${item.filename}`" class="tag">{{ item.name }}</Tag>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.tag-page {
  padding: 32px;

  .tag {
    margin: 5px;
  }
}
</style>
