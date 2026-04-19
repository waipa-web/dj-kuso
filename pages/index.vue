<template>
	<!-- ===== HERO ===== -->
	<section class="jumbotron relative h-screen w-full overflow-hidden">
		<!-- Parallax BG -->
		<div class="hero-bg absolute inset-0 scale-110">
			<img src="/jumbotron.png" alt="Rental Kuso - Sewa Alat DJ Jakarta Barat" class="h-full w-full object-cover" />
			<div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/95"></div>
		</div>

		<!-- Floating noise grain -->
		<div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-noise"></div>

		<!-- EQ bars -->
		<div class="absolute bottom-0 left-0 w-full flex items-end justify-center gap-[3px] opacity-25 pointer-events-none overflow-hidden h-32">
			<div v-for="i in 80" :key="i" class="eq-bar flex-shrink-0 w-[6px] bg-white rounded-t-full" :style="{ animationDelay: `${(i * 0.07) % 1.2}s`, animationDuration: `${0.35 + (i % 7) * 0.1}s` }"></div>
		</div>

		<!-- Content -->
		<div class="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
			<!-- Animated title -->
			<div class="overflow-hidden mb-2">
				<h1 class="hero-title text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-none tracking-tighter text-white">
					Rental
				</h1>
			</div>
			<div class="overflow-hidden">
				<h1 class="hero-title-2 text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-none tracking-tighter text-primary" style="text-shadow: 0 0 80px hsl(var(--primary) / 0.5)">
					Kuso
				</h1>
			</div>

			<p class="hero-sub mt-6 text-sm md:text-base text-white/60 max-w-md leading-relaxed tracking-wide">
				Sewa alat DJ profesional untuk <span class="text-white font-semibold">wedding</span>, <span class="text-white font-semibold">ulang tahun</span>, <span class="text-white font-semibold">corporate event</span> & semua acara spesialmu.
			</p>

			<div class="hero-btns mt-10 flex flex-col sm:flex-row gap-3">
				<Button
					@click="onOpenBook"
					v-glitch="{ playMode: 'hover', shake: false }"
					size="lg"
					class="font-bold text-base px-10 py-6 cursor-pointer"
				>
					Book Sekarang
				</Button>
				<Button
					@click="scrollToContent"
					variant="outline"
					size="lg"
					class="font-bold text-base px-10 py-6 cursor-pointer border-white/20 text-white/80 hover:bg-white/10 hover:border-white/40"
				>
					Lihat Produk ↓
				</Button>
			</div>
		</div>

		<!-- Scroll indicator -->
		<div class="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 cursor-pointer hover:text-white/70 transition-colors" @click="scrollToContent">
			<span class="text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
			<div class="w-[18px] h-7 rounded-full border border-current flex items-start justify-center pt-1">
				<div class="scroll-dot w-[3px] h-[5px] bg-current rounded-full"></div>
			</div>
		</div>
	</section>

	<!-- ===== MARQUEE TICKER ===== -->
	<div class="ticker-wrap overflow-hidden border-y border-border bg-primary/5 py-3">
		<div class="ticker-track flex gap-0 whitespace-nowrap">
			<span v-for="n in 3" :key="n" class="ticker-content inline-flex gap-12 px-6 text-xs font-semibold uppercase tracking-widest text-primary/70">
				<span>🎵 Sewa Alat DJ</span>
				<span>🎤 Talent DJ</span>
				<span>🚚 Free Ongkir 5KM</span>
				<span>📍 Jakarta Barat</span>
				<span>📞 Hubungi Sekarang</span>
				<span>⭐ 100+ Clients</span>
				<span>🎵 Sewa Alat DJ</span>
				<span>🎤 Talent DJ</span>
				<span>🚚 Free Ongkir 0-5KM</span>
				<span>📍 Jakarta Barat</span>
				<span>📞 Hubungi Sekarang</span>
				<span>⭐ 100+ Clients</span>
			</span>
		</div>
	</div>

	<!-- ===== STATS ===== -->
	<section class="py-16 px-4 bg-muted/20">
		<div class="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
			<div v-for="(stat, i) in stats" :key="i" class="reveal text-center p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors duration-300" :style="{ transitionDelay: `${(i as number) * 0.1}s` }">
				<div class="text-4xl font-black text-primary">{{ stat.value }}</div>
				<div class="text-xs text-muted-foreground uppercase tracking-widest mt-2 font-medium">{{ stat.label }}</div>
			</div>
		</div>
	</section>

	<!-- ===== PRODUCTS ===== -->
	<section class="product py-24 px-4 bg-muted/10">
		<div class="max-w-7xl mx-auto">
			<div class="reveal text-center mb-16">
				<span class="text-xs text-primary uppercase tracking-widest font-semibold">Katalog</span>
				<h2 class="text-3xl md:text-5xl font-black mt-2">Our Products</h2>
				<p class="text-muted-foreground mt-3 text-sm max-w-md mx-auto">Peralatan DJ profesional siap pakai untuk semua jenis acara</p>
			</div>

			<ClientOnly>
				<div class="products grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
					<div v-for="(product, i) in products" :key="product.id" class="reveal" :style="{ transitionDelay: `${(i as number) * 0.08}s` }">
						<div
							class="tilt-card group h-full cursor-pointer rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.2)]"
							@click="onOpenModalDetailProduct(product, 'product')"
							@mousemove="onTilt"
							@mouseleave="onTiltLeave"
						>
							<div class="relative overflow-hidden">
								<img :src="product.image" alt="product image" class="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110" />
								<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
								<div class="absolute bottom-3 left-4 right-4 flex justify-between items-end">
									<span class="font-black text-xl text-white">{{ useRupiahFormat(product.price) }}<span class="text-xs font-normal text-white/70"> /day</span></span>
									<Badge class="font-bold text-xs" :class="product?.avaibility ? 'bg-green-500' : 'bg-red-500'">
										{{ product?.avaibility ? "Tersedia" : "On Service" }}
									</Badge>
								</div>
							</div>
							<div class="p-5">
								<h3 class="font-bold text-base mb-2">{{ product.name }}</h3>
								<div class="text-sm text-muted-foreground mb-4" v-html="truncate(product.description, { length: 18, byWords: true })"></div>
								<div class="flex items-center gap-1 text-xs text-primary font-semibold group-hover:gap-2 transition-all duration-200">
									<span>Lihat Detail</span>
									<span>→</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ClientOnly>
		</div>
	</section>

	<!-- ===== TALENTS ===== -->
	<section class="talent py-24 px-4 bg-muted/10">
		<div class="max-w-7xl mx-auto">
			<div class="reveal text-center mb-16">
				<span class="text-xs text-primary uppercase tracking-widest font-semibold">Talent Kami</span>
				<h2 class="text-3xl md:text-5xl font-black mt-2">Our Talents</h2>
				<p class="text-muted-foreground mt-3 text-sm max-w-md mx-auto">DJ profesional berpengalaman untuk memeriahkan setiap momen spesialmu</p>
			</div>

			<ClientOnly>
				<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
					<div v-for="(talent, i) in talents" :key="talent.id" class="reveal" :style="{ transitionDelay: `${(i as number) * 0.08}s` }">
						<div
							class="tilt-card group h-full cursor-pointer rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.2)]"
							@click="onOpenModalDetailProduct(talent, 'talent')"
							@mousemove="onTilt"
							@mouseleave="onTiltLeave"
						>
							<div class="relative overflow-hidden">
								<img :src="talent.image" alt="talent image" class="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110" />
								<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
								<div class="absolute bottom-3 left-4 right-4 flex justify-between items-end">
									<span class="font-black text-xl text-white">{{ useRupiahFormat(talent.price) }}<span class="text-xs font-normal text-white/70"> /jam</span></span>
									<Badge class="font-bold text-xs" :class="talent?.avaibility ? 'bg-green-500' : 'bg-red-500'">
										{{ talent?.avaibility ? "Tersedia" : "On Service" }}
									</Badge>
								</div>
							</div>
							<div class="p-5">
								<h3 class="font-bold text-base mb-2">{{ talent.name }}</h3>
								<div class="text-sm text-muted-foreground mb-4" v-html="truncate(talent.description, { length: 18, byWords: true })"></div>
								<div class="flex items-center gap-1 text-xs text-primary font-semibold group-hover:gap-2 transition-all duration-200">
									<span>Lihat Detail</span>
									<span>→</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ClientOnly>
		</div>
	</section>

	<!-- ===== TERMS & PROMO ===== -->
	<section class="terms py-24 px-4">
		<div class="max-w-6xl mx-auto">
			<div class="reveal text-center mb-16">
				<span class="text-xs text-primary uppercase tracking-widest font-semibold">Informasi</span>
				<h2 class="text-3xl md:text-5xl font-black mt-2">Syarat & Promo</h2>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<div class="reveal reveal-left">
					<Card class="h-full rounded-2xl shadow-xl border border-border bg-card">
						<CardHeader>
							<h2 class="text-xl font-bold text-center">📋 Syarat & Ketentuan</h2>
						</CardHeader>
						<CardContent class="pt-2">
							<ol class="space-y-3 text-sm">
								<li class="flex gap-3"><span class="text-primary font-black shrink-0">01</span><span>Foto diri peminjam dengan <strong>KTP</strong>.</span></li>
								<li class="flex gap-3"><span class="text-primary font-black shrink-0">02</span><span>Lebih dari 24 jam dikenakan denda <span class="text-red-500 font-semibold">Rp 370.000/hari</span>. Invoice tidak dibayar &gt;1 bulan: denda <span class="text-red-500 font-semibold">2%/hari</span>.</span></li>
								<li class="flex gap-3"><span class="text-primary font-black shrink-0">03</span><span>Barang rusak → biaya servis ditanggung peminjam.</span></li>
								<li class="flex gap-3"><span class="text-primary font-black shrink-0">04</span><span>Diluar Jakarta Barat, hubungi kami dulu via WhatsApp.</span></li>
								<li class="flex gap-3"><span class="text-primary font-black shrink-0">05</span><span>Sudah termasuk <strong>Operator</strong> (opsional).</span></li>
								<li class="flex gap-3"><span class="text-primary font-black shrink-0">06</span><span>Booking bisa <strong>H-1</strong>, tapi lebih bagus jauh hari.</span></li>
								<li class="flex gap-3"><span class="text-primary font-black shrink-0">07</span><span><strong>DP</strong> diperlukan untuk sewa lebih dari 3 hari.</span></li>
								<li class="flex gap-3"><span class="text-primary font-black shrink-0">08</span><span>Peminjam setuju semua ketentuan. Jika terjadi pelanggaran, <span class="text-red-500 font-semibold">pihak jasa lepas tanggung jawab</span>.</span></li>
							</ol>
						</CardContent>
						<CardFooter class="justify-center pt-4">
							<Button variant="outline" size="sm" @click="onOpenBook" class="cursor-pointer">Hubungi via WhatsApp →</Button>
						</CardFooter>
					</Card>
				</div>

				<div class="reveal reveal-right flex flex-col gap-6">
					<!-- Promo card -->
					<div class="rounded-2xl border border-green-500/30 bg-green-500/5 p-6 relative overflow-hidden">
						<div class="absolute -top-6 -right-6 text-[8rem] opacity-10 select-none pointer-events-none">🎉</div>
						<h3 class="text-xl font-black text-green-500 mb-1">FREE ONGKIR</h3>
						<p class="text-sm text-muted-foreground mb-4">Gratis antar-jemput untuk radius <strong class="text-foreground">5 KM</strong> dari toko!</p>
						<div class="space-y-2 text-sm">
							<div class="flex justify-between py-2 border-b border-border">
								<span class="text-muted-foreground">0 – 5 KM</span>
								<span class="font-bold text-green-500">GRATIS ✓</span>
							</div>
							<div class="flex justify-between py-2 border-b border-border">
								<span class="text-muted-foreground">5 – 10 KM</span>
								<span class="font-semibold">Mulai Rp 25.000</span>
							</div>
							<div class="flex justify-between py-2 border-b border-border">
								<span class="text-muted-foreground">10 – 20 KM</span>
								<span class="font-semibold">Mulai Rp 50.000</span>
							</div>
							<div class="flex justify-between py-2">
								<span class="text-muted-foreground">&gt; 20 KM</span>
								<span class="font-semibold italic">Hubungi kami</span>
							</div>
						</div>
					</div>

					<!-- Map -->
					<ClientOnly>
						<div class="rounded-2xl overflow-hidden shadow-xl border border-border flex-1 min-h-[260px]">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.4262775216832!2d106.78908429943054!3d-6.150495022877307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7ca5e953061%3A0xc8864f062b2d38bc!2sRental%20Sewa%20Alat%20DJ%20Kuso!5e0!3m2!1sid!2sid!4v1748841719964!5m2!1sid!2sid"
								width="100%" height="260" class="block border-0" loading="lazy"
							/>
						</div>
					</ClientOnly>
				</div>
			</div>
		</div>
	</section>

	<!-- ===== FOOTER ===== -->
	<footer class="w-full border-t border-border bg-card text-foreground">
		<div class="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
			<div class="flex flex-col gap-3 sm:col-span-1">
				<img src="/icon.png" alt="Logo" class="w-36" />
				<p class="text-sm text-muted-foreground leading-relaxed">Solusi sewa alat DJ profesional di Jakarta Barat. Siap bantu acara kamu jadi luar biasa.</p>
			</div>
			<div class="flex flex-col gap-2">
				<h3 class="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Produk</h3>
				<a href="#" @click.prevent="scrollToContent" class="text-sm hover:text-primary transition-colors">Alat DJ</a>
				<a href="#" @click.prevent="() => document.querySelector('.talent')?.scrollIntoView({ behavior: 'smooth' })" class="text-sm hover:text-primary transition-colors">DJ Talent</a>
				<a href="https://tokokusodj.carrd.co" target="_blank" class="text-sm hover:text-primary transition-colors">Toko Kuso DJ ↗</a>
			</div>
			<div class="flex flex-col gap-2">
				<h3 class="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Kontak</h3>
				<a href="https://wa.me/6289637221066" target="_blank" class="text-sm hover:text-primary transition-colors">WhatsApp: 0896-3722-1066</a>
				<a href="tel:+6289637221066" class="text-sm hover:text-primary transition-colors">Telp: +6289637221066</a>
				<a href="https://www.instagram.com/harr_setupide" class="text-sm hover:text-primary transition-colors">Instagram: @harr_setupide</a>
				<a href="https://maps.app.goo.gl/zCxq3CK19pctgKpA7" class="text-sm hover:text-primary transition-colors">Grogol Petamburan, Jakarta Barat</a>
			</div>
		</div>
		<div class="border-t border-border text-center text-xs text-muted-foreground py-4">
			© {{ new Date().getFullYear() }} Kuso Rental. All rights reserved.
		</div>
	</footer>

	<!-- ===== FLOATING WA BUTTON ===== -->
	<a
		href="https://wa.me/6289637221066"
		target="_blank"
		class="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-sm px-4 py-3 rounded-full shadow-2xl shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-green-500/50 group"
		aria-label="Chat WhatsApp"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
			<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
		</svg>
		<span class="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-300 whitespace-nowrap">Book Now!</span>
	</a>

	<!-- ===== DETAIL MODAL ===== -->
	<Dialog v-model:open="modalDetailProductState" class="w-full">
		<DialogScrollContent class="max-w-[90%] sm:max-w-[80%]">
			<div v-if="detailItem" class="flex flex-col md:flex-row gap-6 p-5">
				<div class="w-full md:w-1/2">
					<PagesCarouselThumbnail :images="detailItem.images"></PagesCarouselThumbnail>
				</div>
				<div class="w-full md:w-1/2 space-y-4">
					<h2 class="text-xl font-semibold flex items-center justify-between">
						<span>{{ detailItem.name }}</span>
						<Badge class="font-bold px-3 py-1" :class="detailItem.avaibility ? 'bg-green-500' : 'bg-red-500'">
							{{ detailItem.avaibility ? "Tersedia" : "On Service" }}
						</Badge>
					</h2>
					<div class="description overflow-y-auto max-h-[70vh]">
						<p v-html="detailItem.description" class="text-sm"></p>
					</div>
					<div class="text-xl font-bold text-primary">
						{{ useRupiahFormat(detailItem.price) }}
						<span v-if="detailType === 'product'"> / Day</span>
						<span v-else> / Jam</span>
					</div>
					<Tabs v-if="detailItem.video?.length" :default-value="detailItem.video[0].id" class="pt-6">
						<TabsList>
							<TabsTrigger v-for="item in detailItem.video" :key="item.id" :value="item.id">{{ item.name }}</TabsTrigger>
						</TabsList>
						<TabsContent v-for="item in detailItem.video" :value="item.id" class="pt-2">
							<iframe width="100%" height="315" :src="item.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</DialogScrollContent>
	</Dialog>
</template>

<script setup lang="ts">
// @ts-ignore
import { vGlitch } from "vue-powerglitch";
import productData from "~/data/products.json";
import talentData from "~/data/talents.json";
import truncate from "truncate-html";

useSeoMeta({
	title: "Rental Kuso – Sewa Alat DJ Jakarta Barat | Sound System & Talent DJ",
	description: "Sewa alat DJ profesional di Jakarta Barat. Tersedia sound system, controller, talent DJ untuk wedding, ulang tahun, corporate event. Free ongkir 5 KM. Hubungi kami via WhatsApp!",
	ogTitle: "Rental Kuso – Sewa Alat DJ Jakarta Barat",
	ogDescription: "Sewa alat DJ profesional, sound system, dan talent DJ untuk semua acara. Free ongkir radius 5 KM. Booking mudah via WhatsApp.",
	ogImage: "/jumbotron.png",
	ogType: "website",
	twitterCard: "summary_large_image",
	twitterTitle: "Rental Kuso – Sewa Alat DJ Jakarta Barat",
	twitterDescription: "Sewa alat DJ profesional, sound system, dan talent DJ untuk semua acara.",
	twitterImage: "/jumbotron.png",
});

interface CatalogItem {
	id: number;
	name: string;
	price: number;
	description: string;
	image: string;
	avaibility: boolean;
	video: { id: number; name: string; url: string }[];
	images: string[];
}

const products = ref<CatalogItem[]>(productData);
const talents = ref<CatalogItem[]>(talentData);
const detailItem = ref<CatalogItem | null>(null);
const detailType = ref<"product" | "talent">("product");
const modalDetailProductState = ref(false);

const stats = [
	{ value: "100+", label: "Clients" },
	{ value: "2023", label: "Sejak" },
	{ value: "5★", label: "Rating" },
	{ value: "Free", label: "Ongkir 5KM" },
];

// 3D card tilt
const onTilt = (e: MouseEvent) => {
	const card = (e.currentTarget as HTMLElement);
	const rect = card.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;
	const cx = rect.width / 2;
	const cy = rect.height / 2;
	const rotateX = ((y - cy) / cy) * -6;
	const rotateY = ((x - cx) / cx) * 6;
	card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
};
const onTiltLeave = (e: MouseEvent) => {
	const card = e.currentTarget as HTMLElement;
	card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
};

onMounted(() => {
	// Intersection Observer reveal
	const observer = new IntersectionObserver(
		(entries) => entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("revealed");
				observer.unobserve(entry.target);
			}
		}),
		{ threshold: 0.08 }
	);
	const observeAll = () => document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
	observeAll();
	setTimeout(observeAll, 400);

	// GSAP hero + parallax
	import("gsap").then((m) => {
		const gsap = (m as any).gsap ?? (m as any).default ?? m;
		import("gsap/ScrollTrigger").then((sm) => {
			const ST = (sm as any).ScrollTrigger ?? (sm as any).default;
			gsap.registerPlugin(ST);

			// Hero title split entrance
			gsap.fromTo(".hero-title",
				{ opacity: 0, y: 60, skewY: 4 },
				{ opacity: 1, y: 0, skewY: 0, duration: 0.9, ease: "power4.out", delay: 0.1 }
			);
			gsap.fromTo(".hero-title-2",
				{ opacity: 0, y: 60, skewY: 4 },
				{ opacity: 1, y: 0, skewY: 0, duration: 0.9, ease: "power4.out", delay: 0.25 }
			);
			gsap.fromTo([".hero-sub", ".hero-btns"],
				{ opacity: 0, y: 24 },
				{ opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out", delay: 0.5 }
			);
			gsap.fromTo(".hero-scroll",
				{ opacity: 0 },
				{ opacity: 1, duration: 0.6, delay: 1.2 }
			);

			// Scroll dot bounce
			gsap.to(".scroll-dot", { y: 10, duration: 0.8, repeat: -1, yoyo: true, ease: "power1.inOut" });

			// Parallax
			const bg = document.querySelector(".hero-bg") as HTMLElement;
			const hero = document.querySelector(".jumbotron") as HTMLElement;
			if (bg && hero) {
				gsap.to(bg, { yPercent: 20, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
			}

			onUnmounted(() => ST.getAll().forEach((t: any) => t.kill()));
		});
	});
});

const onOpenModalDetailProduct = (item: CatalogItem, type: "product" | "talent") => {
	detailItem.value = item;
	detailType.value = type;
	modalDetailProductState.value = true;
};
const onOpenBook = () => navigateTo("https://wa.me/6289637221066", { open: { target: "_blank" } });
const scrollToContent = () => document.querySelector(".product")?.scrollIntoView({ behavior: "smooth" });
</script>

<style>
/* ── Hero ── */
.hero-title, .hero-title-2 { opacity: 0; }
.hero-sub, .hero-btns, .hero-scroll { opacity: 0; }

/* ── EQ bars ── */
.eq-bar {
	height: 4px;
	animation: eq-pulse ease-in-out infinite alternate;
}
@keyframes eq-pulse {
	from { height: 4px; }
	to { height: 90px; }
}

/* ── Marquee ticker ── */
.ticker-wrap { --duration: 28s; }
.ticker-track { animation: ticker-scroll var(--duration) linear infinite; }
@keyframes ticker-scroll {
	from { transform: translateX(0); }
	to { transform: translateX(-33.333%); }
}

/* ── Scroll reveal ── */
.reveal {
	opacity: 0;
	transform: translateY(28px);
	transition: opacity 0.65s ease, transform 0.65s ease;
}
.reveal.reveal-left { transform: translateX(-40px); }
.reveal.reveal-right { transform: translateX(40px); }
.reveal.revealed { opacity: 1; transform: translate(0, 0); }

/* ── Tilt card transition ── */
.tilt-card {
	transition: transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease;
	will-change: transform;
}

/* ── Noise texture ── */
.bg-noise {
	background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
	background-size: 200px 200px;
}
</style>
