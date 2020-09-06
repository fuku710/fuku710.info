<template>
  <div class="flex flex-row">
    <div class="pr-1">Twitter</div>
    <span>:</span>
    <div class="pl-1">
      <a class="underline text-blue-500 hover:text-blue-800" :href="twitterUrl">
        @{{ screenName }}
      </a>
    </div>
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
