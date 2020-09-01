<template>
  <div class="w-1/6 p-2 rounded shadow bg-white">
    <span>Name:</span>{{ name }}
  </div>
</template>
<script>
export default {
  props: {
    name: { type: String, required: true },
  },
}
</script>
