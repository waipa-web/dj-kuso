<template>
	<Carousel
		@init-api="(val) => (emblaMainApi = val)"
		:opts="{
			loop: true,
		}"
		class="rounded-lg overflow-hidden"
		:plugins="[
			Autoplay({
				delay: 5000,
			}),
			Fade(),
		]"
	>
		<CarouselContent>
			<CarouselItem v-for="(image, index) in images" :key="index">
				<img :src="image" alt="Product Image" class="w-full h-auto object-cover" />
			</CarouselItem>
		</CarouselContent>
		<CarouselPrevious />
		<CarouselNext />
	</Carousel>

	<Carousel class="relative w-full max-w-xs" @init-api="(val) => (emblaThumbnailApi = val)">
		<CarouselContent class="flex gap-1 ml-0">
			<CarouselItem v-for="(image, index) in images" :key="index" class="pl-0 basis-1/4 cursor-pointer" @click="onThumbClick(index)">
				<div class="p-1" :class="index === selectedIndex ? '' : 'opacity-50'">
					<Card>
						<CardContent class="flex aspect-square items-center justify-center p-0">
							<img :src="image" alt="Product Image" />
						</CardContent>
					</Card>
				</div>
			</CarouselItem>
		</CarouselContent>
	</Carousel>
</template>

<script setup lang="ts">
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

defineProps<{
	images: string[];
}>();

const emblaMainApi = ref<CarouselApi>();
const emblaThumbnailApi = ref<CarouselApi>();
const selectedIndex = ref(0);

function onSelect() {
	if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
	selectedIndex.value = emblaMainApi.value.selectedScrollSnap();
	emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap());
}

function onThumbClick(index: number) {
	if (!emblaMainApi.value || !emblaThumbnailApi.value) return;
	emblaMainApi.value.scrollTo(index);
}

watchOnce(emblaMainApi, (emblaMainApi) => {
	if (!emblaMainApi) return;

	onSelect();
	emblaMainApi.on("select", onSelect);
	emblaMainApi.on("reInit", onSelect);
});
</script>

<style scoped></style>
