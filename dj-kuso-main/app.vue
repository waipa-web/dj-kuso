<script setup>
useSeoMeta({
	title: "Rent Kuso",
	ogTitle: "Rent Kuso",
	description: "Turn any event into a party! Rent professional DJs with top-tier sound equipment for weddings, birthdays, corporate events, and more. Book now and bring the beats to your celebration.",
	ogDescription: "Turn any event into a party! Rent professional DJs with top-tier sound equipment for weddings, birthdays, corporate events, and more. Book now and bring the beats to your celebration.",
	ogImage: "https://www.rentalkuso.web.id/icon.png",
	twitterCard: "summary_large_image",
	ogimageAlt: "Rental Kuso",
	ogImageWidth: "226",
	ogImageHeight: "226",
	twitterImage: "https://www.rentalkuso.web.id/icon.png",
});
</script>

<template>
	<Html lang="en" class="dark">
		<div>
			<NuxtLayout>
				<NuxtLoadingIndicator color="#B68A62" />
				<NuxtPage />
			</NuxtLayout>
		</div>
	</Html>
</template>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
	transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
</style>
