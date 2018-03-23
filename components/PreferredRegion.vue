<template>
  <span class="pref_region">{{city}}</span>
</template>

<script>
	export default {
		props: ['city']
	}
</script>

<style scoped>
.pref_region{
	display:inline;
}
</style>
