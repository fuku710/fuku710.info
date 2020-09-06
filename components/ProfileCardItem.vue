<template>
  <div class="flex flex-row">
    <div class="w-20">{{ label }}</div>
    <span>:</span>
    <a
      v-if="valueLinkUrl"
      class="underline text-blue-500 hover:text-blue-800"
      :href="valueLinkUrl"
    >
      {{ value }}
    </a>
    <span v-else>{{ value }}</span>
  </div>
</template>
<script>
export default {
  props: {
    label: { type: String, required: true },
    value: { type: String, required: true },
    valueLinkUrl: { type: String, default: null },
  },
}
</script>
