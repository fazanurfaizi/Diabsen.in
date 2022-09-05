<template>
    <layout>
        <ContentComponent>
            <template v-slot:title>Data Sekolah</template>
            <h1>Hello ini create school</h1>
        </ContentComponent>
    </layout>
</template>
<script>
    import ContentComponent from '@/layouts/ContentComponent.vue';
        export default{
        name: "SchoolCreate",
        components: { ContentComponent },
    }
</script>