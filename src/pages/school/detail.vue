<template>
	<v-container>
		<template #title>Detail Sekolah</template>
		<template #content>
			<VTabs
				v-model="state.selectedTab"
				class="border-b border-gray-300"
			>
				<VTab
					v-for="(tab, i) in tabs"
					:key="`tab-${i}`"
					:val="tab.value"
					class="text-sm font-medium text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
					:class="{
						'text-color-tabs-active border-color-tabs-active': getActive(tab.value),
						'text-color-tabs border-color-tabs': !getActive(tab.value),
					}"
				>
					<div
						class="inline-block px-4 rounded-t-lg"
					>
						<h1 class="font-bold text-base">{{ tab.label }}</h1>
					</div>
				</VTab>
			</VTabs>

			<VTabPanels
				v-model="state.selectedTab"
				:animate="true"
				:swipeable="true"
				class="select-none mt-4"
			>
				<VTabPanel
					v-for="(tab, i) in tabs"
					:key="`tab-panel-${i}`"
					:val="tab.value"
					class="box-border border border-color-tabs rounded-lg p-4"
				>
					<div
						v-if="(i === 0)"
						class="border border-color-tabs rounded-lg p-[20px] mb-[18px] space-y-4"
					>
						<div class="grid grid-cols-2 gap-4">
							<div>NPSN</div>
							<div>12345</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>Nama Sekolah</div>
							<div>SMAN 21 Bandung</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>Status Sekolah</div>
							<div>Aktif</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>Jenjang Pendidikan</div>
							<div>3</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>Status Kepemilikan</div>
							<div>Pemerintah</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>No. SK Pendirian Sekolah</div>
							<div>1234</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>Tanggal SK Pendirian</div>
							<div>2022-11-11</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>No. SK Izin Operasional</div>
							<div>1234</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>Tanggal SK Izin Operasional</div>
							<div>2020-11-20</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>Waktu Kegiatan Belajar Mengajar (KBM)</div>
							<div>2 Sesi</div>
						</div>
					</div>
					<div
						v-else-if="(i === 1)"
						class="border border-color-tabs rounded-lg p-[20px] mb-[18px] space-y-4"
					>
						<div class="grid grid-cols-2 gap-4">
							<div>Alamat</div>
							<div>Bandung</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>RT/RW</div>
							<div>02/01</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>Desa/Kelurahaan</div>
							<div>Sindangjaya</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>Kecamatan</div>
							<div>Mandalajati</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>Kota/Kabupaten</div>
							<div>Kota Bandung</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>Kode Pos</div>
							<div>40195</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>Provinsi</div>
							<div>Jawa Barat</div>
						</div>
					</div>
					<div
						v-else-if="(i === 2)"
						class="border border-color-tabs rounded-lg p-[20px] mb-[18px] space-y-4"
					>
						<div class="grid grid-cols-2 gap-4">
							<div>Nomor Telepon</div>
							<div>0910290129</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>Nomor FAX</div>
							<div>18291829</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>Email Sekolah</div>
							<div>sman21bdg@gmail.com</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>Website Sekolah</div>
							<div>www.sman21bdg.sch.id</div>
						</div>
					</div>
					<div class="flex flex-row-reverse space-x-1">
						<VButton class="w-24" variant="info">Edit</VButton>
					</div>
				</VTabPanel>
			</VTabPanels>
		</template>
	</v-container>
</template>

<script setup>
import VTab from '@/components/tabs/Tab.vue'
import VTabs from '@/components/tabs/Tabs.vue'
import VTabPanel from '@/components/tabs/TabPanel.vue'
import VTabPanels from '@/components/tabs/TabPanels.vue'
import VButton from '@/components/ui/button/index.vue'

import { reactive } from 'vue'

const tabs = [{
  label: 'Identitas Sekolah',
  value: 1,
}, {
  label: 'Alamat Sekolah',
  value: 2,
}, {
  label: 'Kontak Sekolah',
  value: 3,
}];

const state = reactive({
	selectedTab: tabs[0].value
})

const getActive = (tab) => {
	return state.selectedTab === tab
}
</script>
