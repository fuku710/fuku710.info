<template>
  <div class="flex flex-row">
    <div class="w-20">GitHub</div>
    <span>:</span>
    <a class="underline text-blue-500 hover:text-blue-800" :href="githubUrl">
      {{ userName }}
    </a>
  </div>
</template>
<script>
export default {
  props: {
    userName: { type: String, required: true },
  },
  computed: {
    githubUrl() {
      return `https://github.com/${this.userName}`
    },
  },
}
</script>
