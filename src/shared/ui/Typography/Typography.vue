<script setup lang="ts">
import { computed } from 'vue'
import styles from './index.module.scss'

type Variant = 'title' | 'subtitle' | 'body' | 'caption' | 'label' | 'link' | 'code' | 'button'

const tagMap: Record<Variant, string> = {
  title: 'h1',
  subtitle: 'h2',
  body: 'p',
  caption: 'span',
  label: 'label',
  link: 'a',
  code: 'code',
  button: 'button',
}

interface Props {
  variant?: Variant
  as?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'body',
})

const tag = computed(() => props.as || tagMap[props.variant ?? 'body'])
const classes = computed(() => `${styles[props.variant ?? 'body']} ${props.class || ''}`.trim())
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>
