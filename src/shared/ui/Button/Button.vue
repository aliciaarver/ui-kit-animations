<script setup lang="ts">
import { computed } from 'vue';

import styles from './button.module.scss';
import type { ButtonVariant } from './button.types';

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
  }>(),
  {
    variant: 'primary',
    disabled: false,
    type: 'button',
  }
);

const classes = computed(() => ({
  [styles.button]: true,
  [styles[props.variant]]: true,
  [styles.disabled]: props.disabled,
}));

const particles = Array.from({ length: 30 });
</script>

<template>
  <button :class="classes" :disabled="disabled" :type="type">
    <slot />
    <span :class="styles.particles">
      <span v-for="(_, i) in particles" :key="i" :class="styles.particle" />
    </span>
  </button>
</template>
