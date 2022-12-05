<template>
	<v-container>
		<template #title>Ubah Sekolah</template>
		<template #content>
			<StepperLayout>
				<template #indicators>
					<StepIndicators :step="step"></StepIndicators>
				</template>
				<template #label>
					<StepLabel></StepLabel>
				</template>
				<template #content>
					<div class="grid grid-cols-1 gap-[20px]">
						<div v-if="step === 1" id="step-1">
							<div
								class="grid grid-cols-1 gap-[20px] p-[20px] bg-white rounded-[8px] border border-[#CBD5E0] w-full"
							>
								<div class="text-[18px] text-[#6E6B7B]">
									Data Sekolah
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
												v-model="form.npsn"
												:placeholder="`${t('placehoders.input') t('schools.form.npsn')}`"
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
												>Status Sekolah
												<Asterisk />
											</label>
											<select
												v-model="form.status"
												class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
											>
												<option value="" selected>
													-- Pilih Status --
												</option>
												<option value="0">
													Negeri
												</option>
												<option value="1">
													Swasta
												</option>
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
												>Status Kepemilikan
												<Asterisk />
											</label>
											<select
												v-model="form.ownership_status"
												class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
											>
												<option value="" selected>
													-- Pilih Status Kepemilikan
													--
												</option>
												<option value="f">
													Yayasan
												</option>
												<option value="g">
													Pemerintah
												</option>
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
												>Tanggal SK Izin Operasional
												<Asterisk />
											</label>
											<input
												v-model="form.operational_date"
												placeholder="Masukan Tanggal SK Izin Operasional"
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
												>Nama Sekolah
												<Asterisk />
											</label>
											<input
												v-model="form.name"
												placeholder="Masukan Nama Sekolah"
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
												>Jenjang Pendidikan
												<Asterisk />
											</label>
											<select
												v-model="form.study_type"
												class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
												ref="study_type"
											>
												<option value="" selected>
													-- Pilih Jenjang Pendidikan
													--
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
												>No. SK Pendirian Sekolah
												<Asterisk />
											</label>
											<input
												v-model="
													form.establishment_letter
												"
												placeholder="Masukan No. SK Pendirian"
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
												>Waktu Kegiatan Mengajar (KBM)
												<Asterisk />
											</label>
											<input
												v-model="
													form.teaching_learning_time
												"
												placeholder="Masukan Waktu Kegiatan Mengajar (KBM)"
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
						</div>
						<div v-if="step === 2" id="step-2">
							<div class="grid grid-cols-1 gap-[20px]">
								<div
									class="grid grid-cols-1 gap-[20px] p-[20px] bg-white rounded-[8px] border border-[#CBD5E0] w-full"
								>
									<div class="text-[18px] text-[#6E6B7B]">
										Identitas Sekolah
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
														>Alamat
														<Asterisk />
													</label>
													<input
														v-model="form.address"
														placeholder="Masukan Alamat"
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
														>Provinsi
														<Asterisk />
													</label>
													<select
														v-model="
															form.province_id
														"
														@change="getCity"
														class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
													>
														<option
															value=""
															selected
														>
															-- Pilih Provinsi --
														</option>
														<option
															v-for="province in provinces"
															:key="province"
															v-bind:value="
																province.id
															"
														>
															{{ province.name }}
														</option>
													</select>
													<div
														class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
														ref="province_id"
													></div>
												</div>

												<div>
													<div
														class="flex flex-col py-1"
													>
														<label
															for="current_password"
															class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
															>Kecamatan
															<Asterisk />
														</label>
														<select
															v-model="
																form.district_id
															"
															@change="
																getSubDistrict
															"
															class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
														>
															<option
																value=""
																selected
															>
																-- Pilih
																Kecamatan --
															</option>
															<option
																v-for="district in districts"
																:key="district"
																:value="
																	district.id
																"
															>
																{{
																	district.name
																}}
															</option>
														</select>
														<div
															class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
															ref="district_id"
														></div>
													</div>

													<div
														class="flex flex-col py-1"
													>
														<label
															for="current_password"
															class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
															>RT/RW
															<Asterisk />
														</label>
														<span
															class="flex flex-col-3 block w-full border border-gray-300 rounded-[4px] focus:ring-secondary focus:border-secondary text-[14px]"
														>
															<input
																v-model="
																	form.rt
																"
																placeholder="RT"
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
																v-model="
																	form.rw
																"
																placeholder="RW"
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
														>Kota/Kabupaten
														<Asterisk />
													</label>
													<select
														v-model="form.city_id"
														@change="getDistrict"
														class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
													>
														<option
															value=""
															selected
														>
															-- Pilih
															Kota/Kabupaten --
														</option>
														<option
															v-for="city in cities"
															:key="city"
															v-bind:value="
																city.id
															"
														>
															{{ city.name }}
														</option>
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
														>Desa/Kelurahan
														<Asterisk />
													</label>
													<select
														v-model="
															form.sub_district_id
														"
														@change="getPostalCode"
														class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
													>
														<option
															value=""
															selected
														>
															-- Pilih
															Desa/Kelurahan --
														</option>
														<option
															v-for="sub_district in sub_districts"
															:key="sub_district"
															v-bind:value="
																sub_district.id
															"
														>
															{{
																sub_district.name
															}}
														</option>
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
														>Kode Pos
														<Asterisk />
													</label>
													<select
														v-model="
															form.postal_code_id
														"
														class="bg-white appearance-none block w-full h-[44px] py-[10px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-[14px]"
													>
														<option
															value=""
															selected
														>
															-- Pilih Kode Pos --
														</option>
														<option
															v-for="postal_code in postal_codes"
															:key="postal_code"
															v-bind:value="
																postal_code.id
															"
														>
															{{
																postal_code.code
															}}
														</option>
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
										>Peta Lokasi
										<Asterisk />
									</label>
									<GoogleMaps
										:location="{
											lat: form.latitude,
											lng: form.longitude,
										}"
										:getLocation="getLocation"
										:center="center"
										:zoom="13"
									/>
									<div
										class="text-[12px] mt-[8px] text-[#F56565] errors_current_password"
										ref="gmaps"
									></div>
								</div>
							</div>
						</div>
						<div v-if="step === 3" id="step-3">
							<div class="grid grid-cols-1 gap-[20px]">
								<div
									class="grid grid-cols-1 gap-[20px] p-[20px] bg-white rounded-[8px] border border-[#CBD5E0] w-full"
								>
									<div class="text-[18px] text-[#6E6B7B]">
										Kontak Sekolah
									</div>
									<div
										class="grid lg:grid-cols-2 lg:gap-[24px] text-[#6E6B7B] text-[14px]"
									>
										<div>
											<div class="flex flex-col py-1">
												<label
													for="current_password"
													class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]"
													>Nomor Telepon
													<Asterisk />
												</label>
												<input
													v-model="form.phone_number"
													placeholder="Masukan Nomor Telepon"
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
													>E-Mail Sekolah
													<Asterisk />
												</label>
												<input
													v-model="form.email"
													placeholder="Masukan E-Mail Sekolah"
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
													>Nomor Fax
												</label>
												<input
													v-model="form.fax_number"
													placeholder="Masukan Nomor Fax"
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
													>Website Sekolah
												</label>
												<input
													v-model="form.website"
													placeholder="Masukan Website Sekolah"
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
										Kontak Admin
									</div>
									<div
										class="grid lg:grid-cols-1 lg:gap-[20px] text-[#6E6B7B] text-[14px]"
									>
										<div
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
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-row-reverse items-end gap-[7px]">
							<button
								v-if="step != 3"
								class="bg-[#4299E1] hover:bg-blue-700 py-[0.5rem] px-[0.25rem] rounded text-white w-[110px] h-[36px] text-[14px]"
								@click.prevent="nextPage()"
							>
								Selanjutnya
							</button>
							<button
								v-if="step == 3"
								class="bg-[#4299E1] hover:bg-blue-700 py-[0.5rem] px-[0.25rem] rounded text-white w-[110px] h-[36px] text-[14px]"
								@click.prevent="storeSchool()"
							>
								Simpan
							</button>
							<button
								v-if="step != 1"
								class="border border-[#4299E1] p-[4px] rounded-[4px] text-[#4299E1] w-[78px] w-[110px] h-[36px] text-[14px]"
								@click.prevent="previousPage()"
							>
								Sebelumnya
							</button>
						</div>
					</div>
				</template>
			</StepperLayout>
		</template>
	</v-container>
</template>
<script>
	import Asterisk from '@/components/Asterisk.vue'
	import StepIndicators from './components/StepIndicators.vue'
	import StepLabel from './components/StepLabel.vue'
	import StepperLayout from './layouts/StepperLayout.vue'
	import GoogleMaps from '@/components/GoogleMaps.vue'
	import { useStore } from 'vuex'
	import { useRouter } from 'vue-router'

	export default {
		name: 'SchoolCreate',
		components: {
			Asterisk,
			StepIndicators,
			StepLabel,
			StepperLayout,
			GoogleMaps,
		},
		data() {
			return {
				step: 1,
				total_page: 3,
				center: { lat: -6.905977, lng: 107.613144 },
				token: useStore().getters['auth/getToken'],
				router: useRouter(),
				provinces: null,
				districts: null,
				sub_districts: null,
				cities: null,
				postal_codes: null,
				form: {
					npsn: null,
					name: null,
					status: '',
					study_type: '',
					ownership_status: '',
					establishment_letter: null,
					establishment_date: null,
					operational_date: null,
					operational_letter: null,
					teaching_learning_time: null,
					address: null,
					rt: null,
					rw: null,
					province_id: '',
					city_id: '',
					district_id: '',
					sub_district_id: '',
					postal_code_id: '',
					latitude: null,
					longitude: null,
					phone_number: null,
					fax_number: null,
					email: null,
					website: null,
					admin: [
						{
							name: null,
							email: null,
						},
					],
				},
			}
		},
		methods: {
			nextPage() {
				if (this.step == 1) {
					const step = [
						'npsn',
						'name',
						'status',
						'study_type',
						'ownership_status',
						'establishment_letter',
						'operational_date',
						'teaching_learning_time',
					]

					for (let i in step) {
						if (!this.form[step[i]]) {
							this.$refs[
								step[i]
							].innerHTML = `The ${step[i]} field is required.`
							console.log(step[i])
							return false
						}
					}
				}

				if (this.step == 2) {
					const step = [
						'address',
						'province_id',
						'city_id',
						'district_id',
						'sub_district_id',
						'postal_code_id',
					]

					for (let i in step) {
						if (!this.form[step[i]]) {
							this.$refs[
								step[i]
							].innerHTML = `The ${step[i]} field is required.`
							console.log(step[i])
							return false
						}
					}

					if (!this.form.rt && !this.form.rw) {
						this.$refs[
							'rw'
						].innerHTML = `The RT/RW field is required.`
						return false
					}

					if (!this.form.latitude && !this.form.latitude) {
						this.$refs[
							'gmaps'
						].innerHTML = `The location field is required.`
						return false
					}
				}

				this.step++
			},
			previousPage() {
				this.step--
				console.log(this.step)
			},
			adminField() {
				this.form.admin.push({ name: null, email: null })
			},
			getLocation(lat, long) {
				this.form.latitude = lat
				this.form.longitude = long
				console.log(this.form.latitude, this.form.longitude)
			},
			async getProvince() {
				const token = this.token
				await this.axios
					.get(
						`${import.meta.env.VITE_API_URL_MASTER_DATA}/provinces`,
						{
							headers: {
								Accept: 'application/json',
								Authorization: 'Bearer ' + token,
							},
						}
					)
					.then((response) => {
						this.provinces = response.data.data
					})
			},
			async getCity() {
				const token = this.token
				await this.axios
					.get(
						`${
							import.meta.env.VITE_API_URL_MASTER_DATA
						}/cities?province_id=${this.form.province_id}`,
						{
							headers: {
								Accept: 'application/json',
								Authorization: 'Bearer ' + token,
							},
						}
					)
					.then((response) => {
						this.cities = response.data.data
					})
			},
			async getDistrict() {
				const token = this.token
				await this.axios
					.get(
						`${
							import.meta.env.VITE_API_URL_MASTER_DATA
						}/districts?city_id=${this.form.city_id}`,
						{
							headers: {
								Accept: 'application/json',
								Authorization: 'Bearer ' + token,
							},
						}
					)
					.then((response) => {
						this.districts = response.data.data
					})
			},
			async getSubDistrict() {
				const token = this.token
				await this.axios
					.get(
						`${
							import.meta.env.VITE_API_URL_MASTER_DATA
						}/sub-districts?district_id=${this.form.district_id}`,
						{
							headers: {
								Accept: 'application/json',
								Authorization: 'Bearer ' + token,
							},
						}
					)
					.then((response) => {
						this.sub_districts = response.data.data
					})
			},
			async getPostalCode() {
				const token = this.token
				await this.axios
					.get(
						`${
							import.meta.env.VITE_API_URL_MASTER_DATA
						}/postal_codes?province_id=${
							this.form.province_id
						}&city_id=${this.form.city_id}&district_id=${
							this.form.district_id
						}&sub_district_id=${this.form.sub_district_id}`,
						{
							headers: {
								Accept: 'application/json',
								Authorization: 'Bearer ' + token,
							},
						}
					)
					.then((response) => {
						this.postal_codes = response.data.data
					})
			},

			storeSchool() {
				if (this.step == 3) {
					const step = ['phone_number', 'email']

					for (let i in step) {
						if (!this.form[step[i]]) {
							this.$refs[
								step[i]
							].innerHTML = `The ${step[i]} field is required.`
							console.log(step[i])
							return false
						}
					}

					if (!this.form.admin[0].name) {
						this.$refs[
							'admin_name'
						][0].innerHTML = `The Name field is required.`
						return false
					}

					if (!this.form.admin[0].email) {
						this.$refs[
							'admin_email'
						][0].innerHTML = `The Email field is required.`
						return false
					}
				}

				const token = this.token
				this.axios
					.post(
						import.meta.env.VITE_API_URL_MASTER_DATA + '/school',
						this.form,
						{
							headers: {
								Accept: 'application/json',
								Authorization: 'Bearer ' + token,
							},
						}
					)
					.catch((error) => console.log(error))
					.finally(() => this.router.push({ name: 'school-list' }))
			},
		},
		created() {
			this.getProvince()
			this.getCity()
			this.getDistrict()
		},
	}
</script>
