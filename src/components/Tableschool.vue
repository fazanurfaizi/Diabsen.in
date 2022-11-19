<template>
  <div class="overflow-x-auto relative sm:rounded-md gap-2.5 text-sm">
      <table class="border-collapse border w-full">
          <thead class="text-left bg-thead text-text-table font-bold">
            <tr>
              <th class="text-center py-3 px-2.5">NPSN</th>
              <th class="py-3 px-2.5">Nama Sekolah</th>
              <th class="py-3 px-2.5">Kab/Kota</th>
              <th class="py-3 px-2.5">Provinsi</th>
              <th class="text-center py-3 px-2.5">Kode POS</th>
              <th class="py-3 px-2.5">Alamat</th>
              <th class="text-center py-3 px-2.5">Aksi</th>
            </tr>
          </thead>
          <tbody class="text-left text-text-table font-normal">
            <tr v-for="element in data" :key="element">
              <td class="text-center py-3 px-2.5">{{element.NPSN}}</td>
              <td class="py-3 px-2.5">{{element.name}}</td>
              <td class="py-3 px-2.5">{{element.city}}</td>
              <td class="py-3 px-2.5">{{element.province}}</td>
              <td class="text-center py-3 px-2.5">{{element.zip_code}}</td>
              <td class="py-3 px-2.5">{{element.address}}</td>
              <td class="flex text-center py-3 px-2.5 justify-between">
                <!-- <Icon set="teamui" name="show" class="h-6 w-6"></Icon>
                <Icon set="teamui" name="create" class="h-6 w-6"></Icon>
                <Icon set="teamui" name="delete" class="h-6 w-6"></Icon> -->
                <button type="submit" value="" class="font-normal w-[44px] mr-[4px] bg-[#4299E1] hover:bg-blue-700 py-[0.5rem] px-[0.25rem] rounded-[4px] text-sm text-white h-[36px] text-[14px]" name="show" id="show">Detail</button>
                <button type="submit" value="" class="font-normal w-[32px] mr-[4px] bg-[#FAB215] hover:bg-yellow-700 py-[0.5rem] px-[0.25rem] rounded-[4px] text-sm text-white h-[36px] text-[14px]" name="edit" id="edit">Edit</button>
                <button type="submit" value="" class="font-normal w-[48px] mr-[4px] bg-[#E53E3E] hover:bg-red-700 py-[0.5rem] px-[0.25rem] rounded-[4px] text-sm text-white h-[36px] text-[14px]" name="delete" id="delete">Delete</button>
              </td>
            </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
  export default {
    name : "TableSchool",
    props: {
      data: {
          type: Object
      }
    }
  }
</script>