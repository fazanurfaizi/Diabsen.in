<template>
  <Layout>
    <Content>
      <template v-slot:title>Foobar</template>
      <template v-slot:content>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto vitae amet recusandae eius magnam dolores suscipit architecto ad dolorum. Iure cum repellat animi minus perferendis eum tempore nobis quam recusandae.
      </template>
    </Content>
  </Layout>
</template>

<script>
export default {
  name: "FoobarList",
  methods: {
    getData(){
      this.axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        console.log(response.data)
      })
    }
  },
  created() {
    this.getData()
  },
}
</script>