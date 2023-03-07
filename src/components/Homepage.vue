<template>
    <Login />
    <Ilustration />
</template>

<script>
    import { defineComponent } from 'vue';
    import Login from '../components/Login.vue';
    import Ilustration from '../components/Ilustration.vue';

    export default defineComponent({

        components: {
            Login,
            Ilustration,
        },
    });

</script>