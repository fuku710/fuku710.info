<template>
  <div class="flex flex-row">
    <div class="pr-1">GitHub</div>
    <span>:</span>
    <div class="pl-1">
      <a class="underline text-blue-500 hover:text-blue-800" :href="githubUrl">
        {{ userName }}
      </a>
    </div>
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
