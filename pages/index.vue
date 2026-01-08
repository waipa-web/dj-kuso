<template>
	<section class="jumbotron relative h-screen w-full">
		<div class="image h-full w-full">
			<img src="/jumbotron.png" alt="Banner" class="h-full w-full object-cover" />
		</div>

		<div class="jumbotron__text absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-black/80">
			<h1 class="jumbotron__title text-2xl md:text-4xl lg:text-6xl font-bold capitalize">Rental Kuso</h1>
			<h2 class="jumbotron__subtitle text-xl md:text-2xl lg:text-5xl font-bold capitalize lg:p-5">Sewa & Rental alat dj</h2>
			<p class="jumbotron__description lg:text-xl p-5 md:w-[70%] lg:w-[50%]">Turn any event into a party! Rent professional DJs with top-tier sound equipment for weddings, birthdays, corporate events, and more. Book now and bring the beats to your celebration.</p>
			<Button
				@click="onOpenBook"
				v-glitch="{
					playMode: 'hover',
					shake: false,
				}"
				class="font-bold lg:text-lg lg:p-5 cursor-pointer"
			>
				Book Now
			</Button>
		</div>
	</section>

	<section class="product pt-50">
		<h1 class="text-center font-bold text-2xl">Our Product</h1>

		<ClientOnly>
			<div class="products grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 p-10">
				<Card v-for="product in products" :key="product.id" class="flex flex-col h-full justify-between transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-primary hover:bg-zinc-900/20 cursor-pointer" @click="onOpenModalDetailProduct(product)">
					<div>
						<CardHeader>
							<CardTitle>{{ product.name }}</CardTitle>
						</CardHeader>
						<CardContent class="flex flex-col items-center mt-5">
							<img :src="product.image" alt="product image" class="w-full h-48 object-cover mb-2" />
						</CardContent>
					</div>

					<div class="description py-5 px-10">
						<div
							v-html="
								truncate(product.description, {
									length: 20,
									byWords: true,
								})
							"
						></div>
					</div>

					<CardFooter class="mt-auto flex justify-between items-center">
						<Badge class="font-bold px-3 py-1 text-sm" :class="product?.avaibility ? 'bg-green-500' : 'bg-red-500'">
							{{ product?.avaibility ? "Tersedia" : "On Service" }}
						</Badge>

						<span class="font-bold text-lg">{{ useRupiahFormat(product.price) }} / Day</span>
					</CardFooter>
				</Card>
			</div>
		</ClientOnly>
	</section>
	
	<section class="talent pt-50">
		<h1 class="text-center font-bold text-2xl">Our Talents</h1>

		<ClientOnly>
			<div class="talent grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 p-10">
				<Card v-for="talent in talents" :key="talent.id" class="flex flex-col h-full justify-between transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-primary hover:bg-zinc-900/20 cursor-pointer" @click="onOpenModalDetailProduct(talent)">
					<div>
						<CardHeader>
							<CardTitle>{{ talent.name }}</CardTitle>
						</CardHeader>
						<CardContent class="flex flex-col items-center mt-5">
							<img :src="talent.image" alt="talent image" class="w-full h-48 object-cover mb-2" />
						</CardContent>
					</div>

					<div class="description py-5 px-10">
						<div
							v-html="
								truncate(talent.description, {
									length: 20,
									byWords: true,
								})
							"
						></div>
					</div>

					<CardFooter class="mt-auto flex justify-between items-center">
						<Badge class="font-bold px-3 py-1 text-sm" :class="talent?.avaibility ? 'bg-green-500' : 'bg-red-500'">
							{{ talent?.avaibility ? "Tersedia" : "On Service" }}
						</Badge>

						<span class="font-bold text-lg">{{ useRupiahFormat(talent.price) }} / Jam</span>
					</CardFooter>
				</Card>
			</div>
		</ClientOnly>
	</section>


	<section class="terms pt-50 flex flex-wrap justify-center gap-20 p-10">
		<Card class="max-w-2xl mt-10 shadow-xl border border-border bg-background text-foreground">
			<CardHeader>
				<h2 class="text-2xl font-bold text-center">Syarat & Ketentuan Sewa</h2>
			</CardHeader>
			<CardContent class="pt-5">
				<ol class="list-decimal list-inside space-y-4 text-sm sm:text-base">
					<li>Foto peminjam dengan <strong>KTP</strong>.</li>
					<li>
						Lebih dari 24 jam akan dikenakan denda, dengan jumlah sewa per hari (24 jam) yaitu
						<span class="text-red-500 dark:text-red-400 font-semibold">Rp 370.000,-</span>.<br />
						Jika invoice tidak dibayarkan dalam 1 bulan, akan dikenakan
						<span class="text-red-500 dark:text-red-400 font-semibold">biaya keterlambatan 2% per hari</span>
						dari total harga sewa, dihitung sejak tanggal selesai peminjaman.
					</li>
					<li>Jika barang rusak, alat dibawa ke tempat servis dan peminjam menanggung biaya servis.</li>
					<li>Diluar Jakarta Barat, silakan hubungi kami terlebih dahulu via WhatsApp.</li>
					<li>Penyewaan barang sudah termasuk <strong>Operator</strong> atau perwakilan toko (<span class="italic">opsional jika dibutuhkan</span>).</li>
					<li>Booking tanggal bisa <strong>H-1</strong>, namun lebih disarankan dari jauh hari.</li>
					<li><strong>DP</strong> diperlukan jika masa sewa lebih dari 3 hari.</li>
					<li>Untuk sewa 3 hari atau lebih, dokumen persyaratan sedikit berbeda — hubungi kami.</li>
					<li>Peminjam <strong>setuju dan menerima sepenuhnya</strong> semua ketentuan. Jika terjadi keterlambatan, pencurian, kerusakan tanpa ganti rugi, atau hilang tanpa kabar, maka <span class="text-red-600 dark:text-red-400 font-semibold">Pihak Jasa tidak menjaminan lagi dan lepas tanggung jawab Data PEMINJAM atas dari segala macam.</span>.</li>
				</ol>
			</CardContent>
			<CardFooter class="justify-center pt-6">
				<Badge variant="outline">Hubungi Kami via WhatsApp</Badge>
			</CardFooter>
		</Card>

		<Card class="max-w-2xl mt-10 shadow-lg border border-border bg-background text-foreground">
			<CardHeader class="text-center">
				<h2 class="text-2xl font-bold text-green-600 dark:text-green-400">🎉 PROMO FREE ONGKIR</h2>
				<p class="text-sm text-muted-foreground mt-1">Nikmati kemudahan sewa tanpa biaya antar-jemput!</p>
			</CardHeader>

			<CardContent class="space-y-4 text-sm sm:text-base">
				<ul class="list-disc list-inside space-y-1">
					<li><strong>Gratis Ongkir</strong> untuk pengiriman maksimal <strong>5 KM</strong></li>
					<li>Berlaku khusus untuk <strong>sewa harian</strong></li>
				</ul>

				<div class="border rounded-md p-4 bg-muted/40 space-y-1">
					<p class="font-semibold text-base">Ongkos Kirim (di luar promo):</p>
					<ul class="list-disc list-inside pl-2">
						<li>5 – 10 KM: <span class="font-medium">Start from Rp 25.000</span></li>
						<li>10 – 20 KM: <span class="font-medium">Start from Rp 50.000</span></li>
						<li>&gt; 20 KM: <span class="italic">Silakan hubungi kami terlebih dahulu</span></li>
					</ul>
				</div>

				<p class="text-sm text-muted-foreground italic">Sudah termasuk antar-jemput 📦</p>
			</CardContent>
			<CardFooter class="justify-center pt-4">
				<Badge variant="outline" class="text-green-700 dark:text-green-300 border-green-600 dark:border-green-400"> Berlaku Terbatas </Badge>
			</CardFooter>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .map-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; /* Agar berada di tengah layar */
    }
  </style>
</head>
<body>

  <div class="map-container">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.4262775216832!2d106.78908429943054!3d-6.150495022877307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7ca5e953061%3A0xc8864f062b2d38bc!2sRental%20Sewa%20Alat%20DJ%20Kuso!5e0!3m2!1sid!2sid!4v1748841719964!5m2!1sid!2sid" 
      width="450" 
      height="350" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>

</body>
</html>
		</Card>
	</section>

	<footer class="w-full border-t border-border bg-background text-foreground mt-50 py-10">
		<div class="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
			<!-- Column 1: Logo / Brand -->
			<div class="flex flex-col space-y-2">
				<img src="/icon.png" alt="Logo" class="w-52 mb-2" />
				<h2 class="text-xl font-bold">Kuso Rental</h2>
				<p class="text-sm text-muted-foreground">Solusi sewa alat DJ</p>
				
				<h2 class="text-xl font-bold"> 
				     <a href="https://tokokusodj.carrd.co" target="_blank" class="hover:underline text-primary">Toko Kuso DJ
				     </a>
				</h2>
				<p class="text-sm text-muted-foreground">Jual Alat DJ</p>
			</div>

			<!-- Column 2: Contact Links -->
			<div class="flex flex-col items-start sm:items-end space-y-2">
				<h3 class="text-base font-semibold">Hubungi Kami</h3>
				<ul class="space-y-1 text-sm lg:text-end">
					<li>
						<a href="https://wa.me/6289637221066" target="_blank" class="hover:underline text-primary"> WhatsApp: 0896-3722-1066 </a>
					</li>
					<li>
						<a href="tel:+6289637221066" class="hover:underline text-primary"> Telp: +6289637221066 </a>
					</li>
					<li>
						<a href="https://www.instagram.com/harr_setupide" class="hover:underline text-primary"> Instagram: @harr_setupide </a>
					</li>
					<li>
						<a href="https://maps.app.goo.gl/zCxq3CK19pctgKpA7" class="hover:underline text-primary"> Grogol Petamburan, Jakarta Barat </a>
					</li>
				</ul>
			</div>
		</div>
	</footer>

	<Dialog v-model:open="modalDetailProductState" class="w-full">
		<DialogScrollContent class="max-w-[90%] sm:max-w-[80%]">
			<div class="flex flex-col md:flex-row gap-6 p-5">
				<!-- Carousel Section -->
				<div class="w-full md:w-1/2">
					<PagesCarouselThumbnail :images="productDetail!.images"></PagesCarouselThumbnail>
				</div>

				<!-- Product Details Section -->
				<div class="w-full md:w-1/2 space-y-4">
					<h2 class="text-xl font-semibold flex items-center justify-between">
						<span>{{ productDetail?.name }}</span>

						<Badge class="font-bold px-3 py-1" :class="productDetail?.avaibility ? 'bg-green-500' : 'bg-red-500'">
							{{ productDetail?.avaibility ? "Tersedia" : "On Service" }}
						</Badge>
					</h2>

					<div class="description overflow-y-auto max-h-[70vh]">
						<p v-html="productDetail?.description" class="text-sm"></p>
					</div>

					<div class="text-xl font-bold text-primary">{{ useRupiahFormat(productDetail!.price) }} / Day</div>

					<Tabs :default-value="productDetail?.video[0].id" class="pt-10">
						<TabsList>
							<TabsTrigger v-for="item in productDetail?.video" :value="item.id"> {{ item.name }} </TabsTrigger>
						</TabsList>

						<TabsContent v-for="item in productDetail?.video" :value="item.id" class="pt-2">
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
import truncate, { type IOptions } from "truncate-html";

const onOpenBook = () => {
	navigateTo("https://wa.me/6289637221066", {
		open: {
			target: "_blank",
		},
	});
};

interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	image: string;
	avaibility: boolean;
	video: {
		id: number;
		name: string;
		url: string;
	}[];
	images: string[];
}

const products = ref<Product[]>([]);

onMounted(() => {
	products.value = productData;
});

// Product detail dialog
const productDetail = ref<Product>();
const modalDetailProductState = ref(false);

const onOpenModalDetailProduct = (product: Product) => {
	productDetail.value = product;

	modalDetailProductState.value = true;
};
</script>
