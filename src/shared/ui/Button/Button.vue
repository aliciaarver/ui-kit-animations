<script setup lang="ts">
import { computed } from 'vue';

import styles from './button.module.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    type?: 'button' | 'submit' | 'reset';
  }>(),
  {
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    fullWidth: false,
    type: 'button',
  }
);

const classes = computed(() => [
  styles.button,
  styles[`button_${props.variant}`],
  styles[`button_${props.size}`],
  props.loading && styles.button_loading,
  props.fullWidth && styles.button_fullWidth,
]);
</script>

<template>
  <button :class="classes" :disabled="disabled || loading" :type="type">
    <span v-if="loading" :class="styles.loader" aria-hidden="true" />
    <slot />
  </button>
</template>
