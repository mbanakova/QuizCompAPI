<template>
	<nav class="nav">
		<div class="container">
			<RouterLink active-class="active" class="router-link" to="/">home</RouterLink>
			<RouterLink active-class="active" class="router-link" to="results">results</RouterLink>
		</div>
	</nav>
</template>

<script setup>
</script>

<style scoped>
.nav {
	padding: 20px 0;
	background-color: #86dcf7;
}
.router-link {
	padding: 5px 10px;
}
.active {
	font-weight: 900;
	color: #461041;
}
</style>