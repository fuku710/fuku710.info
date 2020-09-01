<template>
  <div class="w-1/6 p-2 rounded shadow bg-white">
    <span>GitHub :</span>
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
