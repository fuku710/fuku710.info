<template>
  <div class="w-1/6 p-2 rounded shadow bg-white">
    <span>Twitter:</span>
    <a class="underline text-blue-500 hover:text-blue-800" :href="twitterUrl">
      @{{ screenName }}
    </a>
  </div>
</template>
<script>
export default {
  props: {
    screenName: { type: String, required: true },
  },
  computed: {
    twitterUrl() {
      return `https://twitter.com/${this.screenName}`
    },
  },
}
</script>
