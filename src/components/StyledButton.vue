<template>
    <BaseButton id="button-head" class="styled-button material-symbols-outlined"  :disabled="disabled">
        home
      <span v-if="label">{{ label }}</span>
    </BaseButton>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

// Register FontAwesome Icon
const homeIcon = faHome;
defineProps({
  label: String,
  disabled: Boolean
});
</script>

<style scoped>
/* Style for Default Icon */
.default-icon {
  margin-right: 5px;
}
</style>
