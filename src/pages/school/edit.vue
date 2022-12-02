<template>
	<v-container>
		<template #title>{{ t('menus.schools.edit') }}</template>
		<template #content>
			<VTabs
				v-model="state.selectedTab"
				class="p-5 bg-white rounded-lg border border-gray-200 w-full justify-center"
			>
				<VTab
					v-for="(tab, i) in tabs"
					:key="`tab-${i}`"
					:val="tab.value"
					class="flex flex-col justify-center lg:items-center"
				>
					<div class="flex flex-row items-center py-3">
						<span
							class="bg-gray-200 w-20 h-0.5"
							:class="{
								'bg-transparent': i === 0,
							}"
						></span>
						<div
							class="border-2 rounded-full border-primary px-2 text-sm"
						>
							<span class="font-bold text-primary">{{
								i + 1
							}}</span>
						</div>
						<span
							class="bg-gray-200 w-20 h-0.5"
							:class="{
								'bg-transparent': i === tabs.length - 1,
							}"
						></span>
					</div>
					<div class="flex flex-row lg:gap-[99px]">
						<h1 class="font-bold text-justify text-gray-500">
							{{ tab.label }}
						</h1>
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
						class="grid grid-cols-1 gap-[20px] p-[20px] bg-white rounded-[8px] border border-[#CBD5E0] w-full"
					>
						<div class="text-[18px] text-[#6E6B7B]">
							{{ tab.label }}
						</div>
						<div
							class="grid lg:grid-cols-2 lg:gap-[24px] text-[#6E6B7B] text-[14px]"
						>
							<div>
								<div class="flex flex-col py-1">
									<label
										for="current_password"
										class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
										>{{ t('schools.form.npsn') }}
										<Asterisk />
									</label>
									<input
										:placeholder="`${t('placeholders.input')} ${t('schools.form.npsn')}`"
										id="current_password"
										name="current_password"
										type="text"
										required=""
										class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]"
									/>
									<div
										class="text-[12px] mt-[8px] text-[#F56565] errors_npsn"
										ref="npsn"
									></div>
								</div>

								<div class="flex flex-col py-1">
									<label
										for="current_password"
										class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
										>{{ t('schools.form.status') }}
										<Asterisk />
									</label>
									<select
										class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
									>
										<option value="" selected>
											-- {{ t('placeholders.select') }} {{ t('schools.form.status') }} --
										</option>
										<option value="0">Negeri</option>
										<option value="1">Swasta</option>
									</select>
									<div
										class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
										ref="status"
									></div>
								</div>

								<div class="flex flex-col py-1">
									<label
										for="current_password"
										class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
										>{{ t('schools.form.ownershipStatus') }}
										<Asterisk />
									</label>
									<select
										class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
									>
										<option value="" selected>
											-- {{ t('placeholders.select') }} {{ t('schools.form.ownershipStatus') }} --
										</option>
										<option value="f">Yayasan</option>
										<option value="g">Pemerintah</option>
										<option value="e">BUMN</option>
									</select>
									<div
										class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
										ref="ownership_status"
									></div>
								</div>

								<div class="flex flex-col py-1">
									<label
										for="current_password"
										class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
										>{{ t('schools.form.establishmentDate') }}
										<Asterisk />
									</label>
									<input
										:placeholder="`${t('placeholders.input')} ${t('schools.form.establishmentDate')}`"
										id="current_password"
										name="current_password"
										type="date"
										required=""
										class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]"
									/>
									<div
										class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
										ref="operational_date"
									></div>
								</div>
							</div>

							<div>
								<div class="flex flex-col py-1">
									<label
										for="current_password"
										class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
										>{{ t('schools.form.name') }}
										<Asterisk />
									</label>
									<input
										:placeholder="`${t('placeholders.input')} ${t('schools.form.name')}`"
										id="current_password"
										name="current_password"
										type="text"
										required=""
										class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]"
									/>
									<div
										class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
										ref="name"
									></div>
								</div>

								<div class="flex flex-col py-1">
									<label
										for="current_password"
										class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
										>{{ t('schools.form.studyType') }}
										<Asterisk />
									</label>
									<select
										class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
										ref="study_type"
									>
										<option value="" selected>
											-- {{ t('placeholders.select') }} {{ t('schools.form.studyType') }} --
										</option>
										<option value="sd">SD</option>
										<option value="smp">SMP</option>
										<option value="sma">SMA</option>
										<option value="mi">MI</option>
										<option value="mts">MTS</option>
										<option value="ma">MA</option>
									</select>
									<div
										class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
										ref="study_type"
									></div>
								</div>

								<div class="flex flex-col py-1">
									<label
										for="current_password"
										class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
										>{{ t('schools.form.establishmentLetter') }}
										<Asterisk />
									</label>
									<input
										:placeholder="`${t('placeholders.input')} ${t('schools.form.establishmentLetter')}`"
										id="current_password"
										name="current_password"
										type="text"
										required=""
										class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]"
									/>
									<div
										class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
										ref="establishment_letter"
									></div>
								</div>

								<div class="flex flex-col py-1">
									<label
										for="current_password"
										class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
										>{{ t('schools.form.teachingLearningTime') }}
										<Asterisk />
									</label>
									<input
										:placeholder="`${t('placeholders.input')} ${t('schools.form.teachingLearningTime')}`"
										id="current_password"
										name="current_password"
										type="number"
										required=""
										class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]"
									/>
									<div
										class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
										ref="teaching_learning_time"
									></div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="i === 1" class="grid grid-cols-1 gap-[20px]">
						<div
							class="grid grid-cols-1 gap-[20px] p-[20px] bg-white rounded-[8px] border border-[#CBD5E0] w-full"
						>
							<div class="text-[18px] text-[#6E6B7B]">
								{{ tab.label }}
							</div>
							<div>
								<div
									class="grid lg:grid-cols-1 lg:gap-[24px] text-[#6E6B7B] text-[14px]"
								>
									<div>
										<div class="flex flex-col py-1">
											<label
												for="current_password"
												class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
												>{{ t('schools.form.address') }}
												<Asterisk />
											</label>
											<input
												:placeholder="`${t('placeholders.input')} ${t('schools.form.address')}`"
												id="current_password"
												name="current_password"
												type="text"
												required=""
												class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]"
											/>
											<div
												class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
												ref="address"
											></div>
										</div>
									</div>
								</div>
								<div
									class="grid lg:grid-cols-2 lg:gap-[24px] text-[#6E6B7B] text-[14px]"
								>
									<div>
										<div class="flex flex-col py-1">
											<label
												for="current_password"
												class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
												>{{ t('schools.form.province') }}
												<Asterisk />
											</label>
											<select
												class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
											>
												<option value="" selected>
													-- {{ t('placeholders.select') }} {{ t('schools.form.province') }} --
												</option>
												<!-- <option
													v-for="province in provinces"
													:key="province"
													v-bind:value="
														province.id
													"
												>
													{{ province.name }}
												</option> -->
											</select>
											<div
												class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
												ref="province_id"
											></div>
										</div>

										<div>
											<div class="flex flex-col py-1">
												<label
													for="current_password"
													class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
													>{{ t('schools.form.district') }}
													<Asterisk />
												</label>
												<select
													class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
												>
													<option value="" selected>
														-- {{ t('placeholders.select') }} {{ t('schools.form.district') }} --
													</option>
													<!-- <option
														v-for="district in districts"
														:key="district"
														:value="
															district.id
														"
													>
														{{
															district.name
														}}
													</option> -->
												</select>
												<div
													class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
													ref="district_id"
												></div>
											</div>

											<div class="flex flex-col py-1">
												<label
													for="current_password"
													class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
													>{{ `${t('schools.form.neighborhoodAssociation')}` }} {{ t('schools.form.citizensAssociation') }}
													<Asterisk />
												</label>
												<span
													class="flex flex-col-3 w-full border border-gray-300 rounded-[4px] focus:ring-secondary focus:border-secondary text-[14px]"
												>
													<input
														:placeholder="t('schools.form.neighborhoodAssociation')"
														type="text"
														required=""
														min="1"
														class="appearance-none w-full h-[44px] py-[14px] px-[12px] shadow-sm placeholder-gray-400 focus:outline-none"
													/>
													<span
														class="flex items-center h-[44px] text-gray-400"
														>/</span
													>
													<input
														:placeholder="t('schools.form.citizensAssociation')"
														type="text"
														required=""
														min="1"
														class="appearance-none w-full h-[44px] py-[14px] px-[12px] shadow-sm placeholder-gray-400 focus:outline-none"
													/>
												</span>
												<div
													class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
													ref="rw"
												></div>
											</div>
										</div>
									</div>

									<div>
										<div class="flex flex-col py-1">
											<label
												for="current_password"
												class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
												>{{ t('schools.form.city') }}
												<Asterisk />
											</label>
											<select
												class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
											>
												<option value="" selected>
													-- {{ t('placeholders.select') }} {{ t('schools.form.city') }} --
												</option>
												<!-- <option
													v-for="city in cities"
													:key="city"
													v-bind:value="
														city.id
													"
												>
													{{ city.name }}
												</option> -->
											</select>
											<div
												class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
												ref="city_id"
											></div>
										</div>

										<div class="flex flex-col py-1">
											<label
												for="current_password"
												class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
												>{{ t('schools.form.subDistrict') }}
												<Asterisk />
											</label>
											<select
												class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
											>
												<option value="" selected>
													-- {{ t('placeholders.select') }} {{ t('schools.form.subDistrict') }} --
												</option>
												<!-- <option
													v-for="sub_district in sub_districts"
													:key="sub_district"
													v-bind:value="
														sub_district.id
													"
												>
													{{
														sub_district.name
													}}
												</option> -->
											</select>
											<div
												class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
												ref="sub_district_id"
											></div>
										</div>

										<div class="flex flex-col py-1">
											<label
												for="current_password"
												class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
												>{{ t('schools.form.postalCode') }}
												<Asterisk />
											</label>
											<select
												class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
											>
												<option value="" selected>
													-- {{ t('placeholders.select') }} {{ t('schools.form.postalCode') }} --
												</option>
												<!-- <option
													v-for="postal_code in postal_codes"
													:key="postal_code"
													v-bind:value="
														postal_code.id
													"
												>
													{{
														postal_code.code
													}}
												</option> -->
											</select>
											<div
												class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
												ref="postal_code_id"
											></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-col py-1">
							<label
								for="current_password"
								class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
								>{{ t('schools.form.maps') }}
								<Asterisk />
							</label>
							<!-- <GoogleMaps
								:location="{
									lat: form.latitude,
									lng: form.longitude,
								}"
								:getLocation="getLocation"
								:center="center"
								:zoom="13"
							/> -->
							<div
								class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
								ref="gmaps"
							></div>
						</div>
					</div>
					<div v-if="i === 2" class="grid grid-cols-1 gap-[20px]">
						<div
							class="grid grid-cols-1 gap-[20px] p-[20px] bg-white rounded-[8px] border border-[#CBD5E0] w-full"
						>
							<div class="text-[18px] text-[#6E6B7B]">
								{{ tab.label }}
							</div>
							<div
								class="grid lg:grid-cols-2 lg:gap-[24px] text-[#6E6B7B] text-[14px]"
							>
								<div>
									<div class="flex flex-col py-1">
										<label
											for="current_password"
											class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
											>{{ t('schools.form.phoneNumber') }}
											<Asterisk />
										</label>
										<input
											:placeholder="`${t('placeholders.input')} ${t('schools.form.phoneNumber')}`"
											id="current_password"
											name="current_password"
											type="text"
											required=""
											class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]"
										/>
										<div
											class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
											ref="phone_number"
										></div>
									</div>

									<div class="flex flex-col py-1">
										<label
											for="current_password"
											class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
											>{{ t('schools.form.email') }}
											<Asterisk />
										</label>
										<input
											:placeholder="`${t('placeholders.input')} ${t('schools.form.email')}`"
											id="current_password"
											name="current_password"
											type="text"
											required=""
											class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]"
										/>
										<div
											class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
											ref="email"
										></div>
									</div>
								</div>

								<div>
									<div class="flex flex-col py-1">
										<label
											for="current_password"
											class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
											>{{ t('schools.form.faxNumber') }}
										</label>
										<input
											:placeholder="`${t('placeholders.input')} ${t('schools.form.faxNumber')}`"
											id="current_password"
											name="current_password"
											type="text"
											required=""
											class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]"
										/>
										<div
											class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
											ref="fax_number"
										></div>
									</div>

									<div class="flex flex-col py-1">
										<label
											for="current_password"
											class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
											>{{ t('schools.form.website') }}
										</label>
										<input
											:placeholder="`${t('placeholders.input')} ${t('schools.form.website')}`"
											id="current_password"
											name="current_password"
											type="text"
											required=""
											class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]"
										/>
										<div
											class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
											ref="website"
										></div>
									</div>
								</div>
							</div>
						</div>
						<div
							class="grid grid-cols-1 gap-[20px] p-[20px] bg-white rounded-[8px] border border-[#CBD5E0] w-full"
						>
							<div class="text-[18px] text-[#6E6B7B]">
								{{ t('schools.form.adminContact') }}
							</div>
							<div
								class="grid lg:grid-cols-1 lg:gap-[20px] text-[#6E6B7B] text-[14px]"
							>
								<!-- <div
									v-for="index in form.admin"
									:key="index"
									class="grid lg:grid-cols-2 lg:gap-[24px]"
								>
									<div class="flex flex-col py-1">
										<label
											for="current_password"
											class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
											>Nama Lengkap
											<Asterisk />
										</label>
										<input
											v-model="index.name"
											placeholder="Masukan Nama Lengkap"
											id="current_password"
											name="current_password"
											type="text"
											required=""
											class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]"
										/>
										<div
											class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
											ref="admin_name"
										></div>
									</div>
									<div class="flex flex-col py-1">
										<label
											for="current_password"
											class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
											>E-Mail
											<Asterisk />
										</label>
										<input
											v-model="index.email"
											placeholder="Masukan Email"
											id="current_password"
											name="current_password"
											type="email"
											required=""
											class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]"
										/>
										<div
											class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
											ref="admin_email"
										></div>
									</div>
								</div>
								<div>
									<div
										class="flex flex-row-reverse items-end gap-[6px]"
									>
										<button
											class="bg-[#4299E1] hover:bg-blue-700 py-[4px] px-[8px] rounded text-white text-[14px]"
											@click.prevent="
												adminField()
											"
										>
											<Icon
												set="teamui"
												name="plus"
											></Icon>
										</button>
									</div>
								</div> -->
							</div>
						</div>
					</div>
					<!-- <div class="flex flex-row-reverse mt-4">
						<VButton variant="info">Selanjutnya</VButton>
					</div> -->
					<div class="flex flex-row-reverse items-end gap-2 mt-4">
						<VButton
							v-if="i < tabs.length && i !== tabs.length - 1"
							variant="info"
						>
							{{ t('buttons.next') }}
						</VButton>
						<VButton v-if="i === tabs.length - 1" variant="info">
							{{ t('buttons.save') }}
						</VButton>
						<VButton v-if="i > 0 && i" variant="info" outline>
							{{ t('buttons.previous') }}
						</VButton>
					</div>
				</VTabPanel>
			</VTabPanels>
		</template>
	</v-container>
</template>

<script>
	import { reactive } from 'vue'
	import { useI18n } from 'vue-i18n'
	import VTab from '@/components/tabs/Tab.vue'
	import VTabs from '@/components/tabs/Tabs.vue'
	import VTabPanel from '@/components/tabs/TabPanel.vue'
	import VTabPanels from '@/components/tabs/TabPanels.vue'
	import VButton from '@/components/ui/button/index.vue'

	export default {
		name: 'school-edit-page',
		components: {
			VTab,
			VTabs,
			VTabPanel,
			VTabPanels,
			VButton
		},
		setup() {
			const { t } = useI18n()

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

			return {
				t,
				tabs,
				state,
				getActive
			}
		}
	}
</script>
