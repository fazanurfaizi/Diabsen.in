<template>
	<v-container>
		<template #title>{{ t('menus.schools.detail') }}</template>
		<template #content>
			<VTabs v-model="state.selectedTab" class="border-b border-gray-300">
				<VTab
					v-for="(tab, i) in tabs"
					:key="`tab-${i}`"
					:val="tab.value"
					class="text-sm font-medium text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
					:class="{
						'text-color-tabs-active border-color-tabs-active':
							getActive(tab.value),
						'text-color-tabs border-color-tabs': !getActive(
							tab.value
						),
					}"
				>
					<div class="inline-block px-4 rounded-t-lg">
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
						v-if="i === 0"
						class="border border-color-tabs rounded-lg p-[20px] mb-[18px] space-y-4"
					>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.npsn') }}</div>
							<div>{{ school.npsn }}</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.name') }}</div>
							<div>{{ school.name }}</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.status') }}</div>
							<div>{{ school.status }}</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.studyType') }}</div>
							<div>{{ school.study_type }}</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.ownershipStatus') }}</div>
							<div>{{ school.ownership_status }}</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.establishmentLetter') }}</div>
							<div>{{ school.establishment_letter }}</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.establishmentDate') }}</div>
							<div>{{ school.operational_date }}</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.teachingLearningTime') }}</div>
							<div>{{ school.teaching_learning_time }}</div>
						</div>
					</div>
					<div
						v-else-if="i === 1"
						class="border border-color-tabs rounded-lg p-[20px] mb-[18px] space-y-4"
					>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.address') }}</div>
							<div>{{ school.address }}</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.neighborhoodAssociation') }} / {{ t('schools.form.citizensAssociation') }}</div>
							<div>{{ `${school.rt}/${school.rw}` }}</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.subDistrict') }}</div>
							<div>{{ school.sub_district?.name }}</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.district') }}</div>
							<div>{{ school.sub_district?.name }}</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.city') }}</div>
							<div>{{ school.city?.name }}</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.postalCode') }}</div>
							<div>{{ school.postal_code?.code }}</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.province') }}</div>
							<div>{{ school.province?.name }}</div>
						</div>
					</div>
					<div
						v-else-if="i === 2"
						class="border border-color-tabs rounded-lg p-[20px] mb-[18px] space-y-4"
					>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.phoneNumber') }}</div>
							<a :href="`tel:+${school.phone_number}`">{{
								school.phone_number
							}}</a>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.faxNumber') }}</div>
							<div>{{ school.fax_number }}</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.email') }}</div>
							<a :href="`mailto:${school.email}`">{{
								school.email
							}}</a>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div>{{ t('schools.form.website') }}</div>
							<a :href="school.website" target="__blank">{{
								school.website
							}}</a>
						</div>
					</div>
					<div class="flex flex-row-reverse space-x-1">
						<VButton
							class="w-24"
							variant="info"
							@click="
								router.push({
									name: 'school-edit',
									params: { npsn: route.params?.npsn },
								})
							"
							>{{ t('buttons.edit') }}</VButton
						>
					</div>
				</VTabPanel>
			</VTabPanels>
		</template>
	</v-container>
</template>

<script>
	import { reactive, onMounted, computed } from 'vue'
	import { useRoute, useRouter } from 'vue-router'
	import { useStore } from 'vuex'
	import VTab from '@/components/tabs/Tab.vue'
	import VTabs from '@/components/tabs/Tabs.vue'
	import VTabPanel from '@/components/tabs/TabPanel.vue'
	import VTabPanels from '@/components/tabs/TabPanels.vue'
	import VButton from '@/components/ui/button/index.vue'
	import { useI18n } from 'vue-i18n'

	export default {
		name: 'school-detail-page',
		components: {
			VTab,
			VTabs,
			VTabPanel,
			VTabPanels,
			VButton
		},
		setup() {
			const { t } = useI18n()

			const route = useRoute()

			const router = useRouter()

			const store = useStore()

			const tabs = [
				{
					label: t('schools.tabs.identity'),
					value: 1,
				},
				{
					label: t('schools.tabs.address'),
					value: 2,
				},
				{
					label: t('schools.tabs.contact'),
					value: 3,
				},
			]

			const state = reactive({
				selectedTab: tabs[0].value,
			})

			const getActive = (tab) => {
				return state.selectedTab === tab
			}

			const school = computed(() => store.getters['schools/getSchool'])

			onMounted(async () => {
				await store.dispatch('schools/getDetailSchool', route.params?.npsn)
			})

			return {
				t,
				route,
				router,
				store,
				tabs,
				state,
				getActive,
				school
			}
		}
	}
</script>
