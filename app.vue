<script setup>
useSeoMeta({
	title: "Rent Kuso",
	ogTitle: "Rent Kuso",
	description: "Turn any event into a party! Rent professional DJs with top-tier sound equipment for weddings, birthdays, corporate events, and more. Book now and bring the beats to your celebration.",
	ogDescription: "Turn any event into a party! Rent professional DJs with top-tier sound equipment for weddings, birthdays, corporate events, and more. Book now and bring the beats to your celebration.",
	ogImage: "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/aethereal.my.id/%C3%A6thereal/https%3A%2F%2Faethereal.my.id%2Flogo.jpg/og.png",
	twitterCard: "summary_large_image",
	ogimageAlt: "Rental Kuso",
	ogImageWidth: "226",
	ogImageHeight: "226",
	twitterImage: "https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/aethereal.my.id/%C3%A6thereal/https%3A%2F%2Faethereal.my.id%2Flogo.jpg/og.png",
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
