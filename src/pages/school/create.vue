<template>    
    <v-container>
        <template #title>Tambah Sekolah</template>
        <template #content>
            <div class="grid grid-cols-1 gap-[16px]">
                <div class="p-[20px] bg-white rounded-[8px] border border-[#CBD5E0] w-full">
                    <div class="flex flex-col lg:items-center">
                        <div class="flex flex-row items-center py-[12px]">
                            <div class="border-[2px] rounded-[200px] border-[#1F4690] px-[7px] text-[14px]">
                                <span class="font-bold text-[#1F4690]">1</span>
                            </div>
                            <span class="bg-[#CBD5E0] w-[200px] h-[2px]"></span>
                            <div class="border-[2px] rounded-[200px] border-[#CBD5E0] px-[7px] text-[14px]">
                                <span class="font-bold text-[#CBD5E0]">2</span>
                            </div>
                            <span class="bg-[#CBD5E0] w-[200px] h-[2px]"></span>
                            <div class="border-[2px] rounded-[200px] border-[#CBD5E0] px-[7px] text-[14px]">
                                <span class="font-bold text-[#CBD5E0]">3</span>
                            </div>
                        </div>
                        <div class="flex flex-row gap-[99px]">
                            <span class="font-bold text-justify text-[#6E6B7B]">Identitas Sekolah</span>
                            <span class="font-bold  text-justify text-[#6E6B7B]">Alamat Sekolah</span>
                            <span class="font-bold  text-justify text-[#6E6B7B]">Kontak Sekolah</span>
                        </div>
                    </div>
                </div>

                <div class="p-[20px] bg-white rounded-[8px] border border-[#CBD5E0] w-full">
                    <div class="grid grid-cols-1 gap-[20px]">
                        <div v-if="step === 1" id="step-1">
                            <div class="grid grid-cols-1 gap-[20px]">
                                <div class="text-[18px] text-[#6E6B7B]">Data Sekolah</div>
                                <div class="grid lg:grid-cols-2 lg:gap-[24px] text-[#6E6B7B] text-[14px]">
                                    <div>
                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">NPSN
                                                <Asterisk />
                                            </label>
                                            <input placeholder="NPSN" id="current_password" name="current_password"
                                                type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>

                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Status
                                                Sekolah
                                                <Asterisk />
                                            </label>
                                            <input placeholder="Status Sekolah" id="current_password"
                                                name="current_password" type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>

                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Status
                                                Kepemilikan
                                                <Asterisk />
                                            </label>
                                            <input placeholder="Status Kepemilikan" id="current_password"
                                                name="current_password" type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>

                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Tanggal
                                                SK
                                                Izin Operasional
                                                <Asterisk />
                                            </label>
                                            <input placeholder="Tanggal SK Izin Operasional" id="current_password"
                                                name="current_password" type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Nama
                                                Sekolah
                                                <Asterisk />
                                            </label>
                                            <input placeholder="Nama Sekolah" id="current_password"
                                                name="current_password" type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>

                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Jenjang
                                                Pendidikan
                                                <Asterisk />
                                            </label>
                                            <input placeholder="Jenjang Pendidikan" id="current_password"
                                                name="current_password" type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>

                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">No. SK
                                                Pendirian
                                                Sekolah
                                                <Asterisk />
                                            </label>
                                            <input placeholder="No. SK Pendirian" id="current_password"
                                                name="current_password" type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>

                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Waktu
                                                Kegiatan
                                                Mengajar (KBM)
                                                <Asterisk />
                                            </label>
                                            <input placeholder="Waktu Kegiatan Mengajar (KBM)" id="current_password"
                                                name="current_password" type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="text-[18px] text-[#6E6B7B]">
                                    Tambah Admin
                                </div>
                                <div class="grid lg:grid-cols-2 lg:gap-[24px] text-[#6E6B7B] text-[14px]">
                                    <div>
                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Nama
                                                Lengkap
                                                <Asterisk />
                                            </label>
                                            <input placeholder="Nama Lengkap" id="current_password"
                                                name="current_password" type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">E-Mail
                                                <Asterisk />
                                            </label>
                                            <input placeholder="Email" id="current_password" name="current_password"
                                                type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>
                                        <div class="flex flex-row-reverse items-end gap-[6px]">
                                            <button
                                                class="bg-[#4299E1] hover:bg-blue-700 py-[0.5rem] px-[0.25rem] rounded text-white w-[110px] h-[36px] text-[14px]"
                                                @click.prevent="nextPage()">Tambah</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="step === 2" id="step-2">
                            <div class="grid grid-cols-1 gap-[20px]">
                                <div class="grid lg:grid-cols-2 lg:gap-[24px] text-[#6E6B7B] text-[14px]">
                                    <div>
                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Alamat
                                                <Asterisk />
                                            </label>
                                            <input placeholder="Alamat" id="current_password" name="current_password"
                                                type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>

                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Desa/Kelurahan
                                                <Asterisk />
                                            </label>
                                            <input placeholder="Desa/Kelurahan" id="current_password"
                                                name="current_password" type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-2 gap-[24px]">

                                            <div class="flex flex-col py-1">
                                                <label for="current_password"
                                                    class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Kota/Kabupaten
                                                    <Asterisk />
                                                </label>
                                                <input placeholder="Kota/Kabupaten" id="current_password"
                                                    name="current_password" type="text" required=""
                                                    class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                                <div
                                                    class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                                </div>
                                            </div>

                                            <div class="flex flex-col py-1">
                                                <label for="current_password"
                                                    class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Kode
                                                    Pos
                                                    <Asterisk />
                                                </label>
                                                <input placeholder="Kode Pos"
                                                    id="current_password" name="current_password" type="text"
                                                    required=""
                                                    class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                                <div
                                                    class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div>
                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">RT/RW
                                                <Asterisk />
                                            </label>
                                            <input placeholder="RT/RW" id="current_password"
                                                name="current_password" type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>

                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Kecamatan
                                                <Asterisk />
                                            </label>
                                            <input placeholder="Kecamatan" id="current_password"
                                                name="current_password" type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>

                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Provinsi
                                                <Asterisk />
                                            </label>
                                            <input placeholder="Provinsi" id="current_password"
                                                name="current_password" type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col py-1">
                                    <label for="current_password"
                                        class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Peta Lokasi
                                        <Asterisk />
                                    </label>
                                    <input placeholder="Peta Lokasi" id="current_password"
                                        name="current_password" type="text" required=""
                                        class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                    <div class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="step === 3" id="step-3">
                            <div class="grid grid-cols-1 gap-[20px]">
                                <div class="grid lg:grid-cols-2 lg:gap-[24px] text-[#6E6B7B] text-[14px]">
                                    <div>
                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Nomor Telepon
                                                <Asterisk />
                                            </label>
                                            <input placeholder="Nomor Telepon" id="current_password" name="current_password"
                                                type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>

                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">E-Mail Sekolah
                                                <Asterisk />
                                            </label>
                                            <input placeholder="E-Mail Sekolah" id="current_password"
                                                name="current_password" type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>

                                    </div>

                                    <div>
                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Nomor Fax
                                                <Asterisk />
                                            </label>
                                            <input placeholder="Nomor Fax" id="current_password"
                                                name="current_password" type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>

                                        <div class="flex flex-col py-1">
                                            <label for="current_password"
                                                class="block mb-[7px] text-[14px] font-normal text-[#6E6B7B]">Website Sekolah
                                                <Asterisk />
                                            </label>
                                            <input placeholder="Website Sekolah" id="current_password"
                                                name="current_password" type="text" required=""
                                                class="appearance-none block w-full h-[44px] py-[14px] px-[12px] border border-gray-300 rounded-[4px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary text-[14px]" />
                                            <div
                                                class="text-[12px] mt-[8px] text-[#F56565] errors_current_password">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row-reverse items-end gap-[7px]">
                            <button
                                class="bg-[#4299E1] hover:bg-blue-700 py-[0.5rem] px-[0.25rem] rounded text-white w-[110px] h-[36px] text-[14px]"
                                @click.prevent="nextPage()">Selanjutnya</button>
                            <button
                                class="border border-[#4299E1] p-[4px] rounded-[4px] text-[#4299E1] w-[78px] w-[110px] h-[36px] text-[14px]"
                                @click.prevent="previousPage()">Kembali</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </v-container>
</template>
<script>
import Asterisk from '@/components/Asterisk.vue'

export default {
    name: "SchoolCreate",
    components: {    
        Asterisk
    },
    data() {
        return {
            step: 1,
            total_page: 3
        }
    },
    methods: {
        nextPage() {
            if (this.step !== this.total_page) {
                this.step++;
                console.log(this.step)
            }
        },
        previousPage() {
            if (this.step > 1) {
                this.step--;
                console.log(this.step)
            }
        }
    },

}
</script>