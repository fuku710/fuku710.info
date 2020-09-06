<template>
  <div class="flex flex-row">
    <div class="pr-1">{{ label }}</div>
    <span>:</span>
    <div v-if="valueLinkUrl" class="pl-1">
      <a
        class="underline text-blue-500 hover:text-blue-800"
        :href="valueLinkUrl"
      >
        {{ value }}
      </a>
    </div>
    <div v-else class="pl-1">
      <span>{{ value }}</span>
    </div>
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
