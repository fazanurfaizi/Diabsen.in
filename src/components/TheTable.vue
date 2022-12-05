<template>
	<div class="flex items-center my-2">
		<div class="relative">
			<label for="search_school" class="hidden">Search School</label>
			<div
				class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
			>
				<Icon name="search" class="h-3.5 w-4 stroke-primary"></Icon>
			</div>
			<input
				v-model="keyword"
				@keyup.enter="getDataSearch()"
				class="w-['229px'] h-9 py-2.5 pl-9 pr-2 mr-3 bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
				:placeholder="`Cari ${title}`"
				type="search"
			/>
		</div>
		<div>
			<Button @click="getDataSearch()">Cari</Button>
		</div>
	</div>
	<div class="sm:flex sm:items-center justify-between px-1">
		<div class="flex justify-center items-center space-x-2">
			<div>Show</div>
			<select
				@click="getData()"
				v-model="perPage"
				id="countries"
				class="bg-gray-50 border w-16 py-2 px-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
			>
				<option value="10">10</option>
				<option value="20">20</option>
				<option value="50">50</option>
				<option value="100">100</option>
			</select>
			<div>entries</div>
		</div>
		<div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
			<slot name="nav-right" />
		</div>
	</div>
	<div class="mt-2 flex flex-col">
		<div class="">
			<div
				class="inline-block min-w-full py-2 align-middle md:px-1 lg:px-1"
			>
				<div
					class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-sm"
				>
					<table class="min-w-full divide-y divide-gray-300">
						<thead class="bg-gray-50">
							<tr>
								<template
									v-for="(item, index) in headers"
									:key="index"
								>
									<th
										scope="col"
										class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
										v-if="
											typeof item.show === 'undefined' ||
											item?.show
										"
									>
										<div
											class="flex space-x-2 items-center bg-center"
										>
											<span>
												{{ item.title }}
											</span>
											<span v-if="item?.key !== 'action'">
												<Icon
													@click="
														getDataSort(
															index,
															item.key
														)
													"
													:name="
														headers[index].sort ===
														'ASC'
															? 'chevron-down'
															: 'chevron-up'
													"
													class="h-4 w-4 cursor-pointer"
													v-if="
														typeof item?.sort !==
														'undefined'
													"
												/>
											</span>
										</div>
									</th>
								</template>
							</tr>
						</thead>
						<tbody
							class="divide-y divide-gray-200 bg-white"
							v-if="items.length > 0"
						>
							<template
								v-for="(item, index) in items"
								:key="index"
							>
								<tr>
									<template
										v-for="(elm, i) in headers"
										:key="i"
									>
										<td
											class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900"
											v-if="
												(typeof elm.show ===
													'undefined' ||
													elm?.show) &&
												elm?.key !== 'action'
											"
										>
											{{ item[elm.key] }}
										</td>
										<td
											class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900"
											v-if="
												typeof elm.key !==
													'undefined' &&
												elm?.key === 'action'
											"
										>
											<slot :id="item.id" />
										</td>
									</template>
								</tr>
							</template>
						</tbody>
						<tbody class="divide-y divide-gray-200 bg-white" v-else>
							<tr>
								<td
									class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center"
									:colspan="headers.length - 1"
								>
									No Data
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	<!-- {{fulldata.from}} -->
	<div class="flex items-center justify-between bg-white py-3 px-1">
		<div class="flex flex-1 justify-between sm:hidden">
			<a
				href="#"
				class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>Previous</a
			>
			<a
				href="#"
				class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>Next</a
			>
		</div>

		<div
			class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"
		>
			<div>
				<p class="text-sm text-gray-700">
					Showing
					<span class="font-medium">{{ fulldata.from }}</span>
					to
					<span class="font-medium">{{ fulldata.to }}</span>
					of
					<span class="font-medium">{{ fulldata.total }}</span>
					results
				</p>
			</div>
			<div>
				<nav
					class="isolate inline-flex -space-x-px rounded-md shadow-sm"
					aria-label="Pagination"
				>
					<div
						class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
					>
						Page {{ fulldata.current_page }} of
						{{ fulldata.last_page }}
						<!-- {{fulldata.current_page}} -->
					</div>

					<a
						href="#"
						@click.prevent="getData(fulldata.first_page_url)"
						class="relative h-10 inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
					>
						<span class="sr-only">Previous</span>
						<Icon name="chevron-double-left" class="h-4 w-4" />
					</a>
					<div v-for="(item, index) in links" :key="index">
						<div
							v-if="item.label == fulldata.current_page"
							class="relative h-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 z-10"
						>
							{{ item.label }}
						</div>
						<div
							@click="getData(item.url)"
							v-else-if="item.label == 'pagination.previous'"
							href="#"
							class="relative h-10 inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 cursor-pointer"
						>
							<span class="sr-only">First</span>
							<Icon name="chevron-left" class="h-4 w-4" />
						</div>
						<div
							@click="getData(item.url)"
							v-else-if="item.label == 'pagination.next'"
							href="#"
							class="relative h-10 inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 cursor-pointer"
						>
							<span class="sr-only">Next</span>
							<Icon name="chevron-right" class="h-4 w-4" />
						</div>
						<div
							v-else-if="item.label == '...'"
							class="relative h-10 inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 cursor-text"
						>
							{{ item.label }}
						</div>
						<div
							@click="getData(item.url)"
							v-else
							class="relative h-10 inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 cursor-pointer"
						>
							{{ item.label }}
						</div>
					</div>
					<a
						href="#"
						@click.prevent="getData(fulldata.last_page_url)"
						class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
					>
						<span class="sr-only">Last</span>
						<Icon name="chevron-double-right" class="h-4 w-4" />
					</a>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
	import Button from './TheButton.vue'
	import Icon from './Icon.vue'
	import { useStore } from 'vuex'
	export default {
		name: 'TheTable',
		data() {
			return {
				fulldata: {
					from: 0,
					to: 0,
					total: 0,
					current_page: 0,
					last_page: 0,
					first_page_url: null,
				},
				token: useStore().getters['auth/getToken'],
				title: this.rows.title,
				items: [],
				headers: this.column,
				links: [],

				perPage: 10,
				keyword: this.rows.keyword,
				sort: this.rows.sort,
				sortOrder: this.rows.sortOrder,
				url: this.rows.url,
			}
		},
		props: {
			rows: Object,
			column: Array,
		},
		components: { Button, Icon },
		methods: {
			getData(url = null) {
				if (url !== null) {
					this.url = url
				}
				let param = {
					perPage: this.perPage,
					keyword: this.keyword,
					sort: this.sort,
					sortOrder: this.sortOrder,
				}

				const config = {
					headers: { Authorization: `Bearer ${this.token}` },
				}

				this.axios
					.post(this.url, param, config)
					.then((response) => {
						this.fulldata = response.data
						this.items = response.data.data
						this.links = response.data.links
					})
					.catch(console.log)
			},

			getDataSearch() {
				this.getData(this.url)
			},

			getDataSort(index) {
				const sortOrder =
					this.headers[index].sort == 'ASC' ? 'DESC' : 'ASC'
				this.headers[index].sort = sortOrder

				this.sort = this.headers[index].key
				this.sortOrder = sortOrder

				this.getData()
			},
		},
		created() {
			this.url = import.meta.env.VITE_API_URL_MASTER_DATA + this.rows.url
			this.getData()
		},
	}
</script>
