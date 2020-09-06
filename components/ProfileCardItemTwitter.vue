<template>
  <div class="flex flex-row">
    <div class="w-20">Twitter</div>
    <span>:</span>
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
