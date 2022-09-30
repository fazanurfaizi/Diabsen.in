<template>
    <li
        class="py-2 rounded-sm mb-0.5 last:mb-0"     
    >
       <slot :handle-click="handleClick" :expanded="expanded"></slot> 
    </li>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'sidebar-link',
    props: {
        activeCondition: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    setup(props) {
        const expanded = ref(props.activeCondition)

        const handleClick = () => {
            expanded.value = !expanded.value
        }

        return {
            expanded,
            handleClick
        }
    }
})
</script>