<template>
  <v-sheet rounded elevation="1" :class="`d-flex pa-2 justify-space-between  ${item.color}`" >
    <div>
      <v-icon size="50px" class=" d-block ">{{ item.icon || 'mdi-default-outline' }}</v-icon>
      <span class=" font-weight-bold ">
        {{ item.title || 'Title' }}
      </span>
    </div>
    <div class="" style="font-size: 3rem;">
      {{ item.value || 0 }}
    </div>
  </v-sheet>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router';


const props = defineProps({
  item: Object
})

</script>

<style scoped></style>