<template>
  <div class="flex flex-col items-center">
    <Header class="m-1" title="fuku710" />
    <ProfileCard :image-url="imageUrl">
      <ProfileCardItem label="Name" :value="name" />
      <ProfileCardItemTwitter :screen-name="twitterScreenName" />
      <ProfileCardItemGitHub :user-name="githubUserName" />
    </ProfileCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'https://avatars2.githubusercontent.com/u/13159978?v=4',
      name: 'Fukuda Naoto',
      twitterScreenName: 'fuku_710',
      githubUserName: 'fuku710',
    }
  },
}
</script>
