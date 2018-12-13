<template>
    <main>
      <form action="" @submit.prevent="store">
        <input type="text" v-model="title">
      </form>
    </main>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
