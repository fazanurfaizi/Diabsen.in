<template>
  <v-container>
    <template #title>Detail Sekolah</template>
    <template #content>
      <TheTabs :column="columnTabs" @columnUpdate="columnHandler">
        <template #content>
          <div class="border border-color-tabs rounded-lg p-[18px]" >
            <div class="border border-color-tabs rounded-lg p-[20px] mb-[18px] space-y-4" v-show="columnTabs[0].isActive">
              <div class="grid grid-cols-2 gap-4">
                <div>NPSN</div>
                <div>{{data.NPSN}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Nama Sekolah</div>
                <div>{{data.name}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Status Sekolah</div>
                <div>{{data.status}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Jenjang Pendidikan</div>
                <div>{{data.study_type}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Status Kepemilikan</div>
                <div>{{data.ownership_status}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>No. SK Pendirian Sekolah</div>
                <div>{{data.establishment_letter}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Tanggal SK Pendirian </div>
                <div>{{data.establishment_date}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>No. SK Izin Operasional</div>
                <div>{{data.operational_date}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Tanggal SK Izin Operasional</div>
                <div>{{data.operational_date}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Waktu Kegiatan Belajar Mengajar (KBM)</div>
                <div>{{data.operational_date}}</div>
              </div>
            </div>
            <div class="border border-color-tabs rounded-lg p-[20px] mb-[18px] space-y-4" v-show="columnTabs[1].isActive">
              <div class="grid grid-cols-2 gap-4">
                <div>Alamat</div>
                <div>{{data.address}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>RT/RW</div>
                <div>{{data.operational_date}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Desa/Kelurahaan</div>
                <div>{{data.operational_date}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Kecamatan</div>
                <div>{{data.district}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Kota/Kabupaten</div>
                <div>{{data.city}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Kode Pos</div>
                <div>{{data.operational_date}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Provinsi </div>
                <div>{{data.province}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Kode POS </div>
                <div>{{data.zip_code}}</div>
              </div>
            </div>
            <div class="border border-color-tabs rounded-lg p-[20px] mb-[18px] space-y-4" v-show="columnTabs[2].isActive">
              <div class="grid grid-cols-2 gap-4">
                <div>Nomor Telepon</div>
                <div>{{data.phone}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Nomor FAX</div>
                <div>{{data.operational_date}}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Email Sekolah</div>
                <div>{{data.email }}</div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>Website Sekolah</div>
                <div>{{data.operational_date}}</div>
              </div>
            </div>
            <div class="flex flex-row-reverse space-x-1">
              <Button class="w-24" v-show="!isEdit" @click="isEdit = true">Edit</Button>
              <Button class="w-24" @click="isEdit = false" v-show="isEdit" outline>Cancel</Button>
              <Button class="w-24" v-show="isEdit">Save</Button>
            </div>
          </div>
        </template>
      </TheTabs>
    </template>
  </v-container>
</template>

<script>
import TheTabs from '@/components/TheTabs.vue';
import Button from '@/components/TheButton.vue';
// import TheTable from '@/components/TheTable.vue';
export default {
  name: "DashboardDetail",
  components: { TheTabs, Button },
  data() {
    return {
      isEdit: true,
      data: {},
      columnTabs:[
        {
          name: "Identitas Sekolah",
          key: "identitas",
          isActive: true,
        },
        {
          name: "Alamat Sekolah",
          key: "alamat",
          isActive: false,
        },
        {
          name: "Kontak Sekolah",
          key: "kontak",
          isActive: false,
        },
      ]
    }
  },
  computed: {
    tabs(){
      let result = false
      this.columnTabs.map(data => {
        // if (data.key === key) {
          result = data.isActive
        // }
      })
      console.log(result);
      return true
    }
  },
  created() {
    this.getData()
  },
  methods: {
    columnHandler(items){
      this.columnTabs = items
    },
    getData(){
      const url = import.meta.env.VITE_API_URL_MASTER_DATA + '/school/' + this.$route.params.id
      // console.log(this.$route.params.id);
      this.axios.get(url).then((r) => {
        console.log(r.data.data);
        this.data = r.data.data
      }).catch(console.log)
    }
  },
}
</script>
