<template>
  <div class="w-sm rounded shadow-lg bg-gray-100 flex">
    <div class="flex flex-col justify-center p-2">
      <img class="w-16 h-16 rounded-full" :src="imageUrl" />
    </div>
    <div class="flex flex-col p-2">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },
}
</script>
