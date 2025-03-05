<template>
    <button 
      @click="handleClick" 
      @focus="handleFocus" 
      @blur="handleBlur"
      :disabled="disabled"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  // Define props
  defineProps({
    disabled: Boolean
  });
  
  // Define emits
  const emit = defineEmits(['click', 'focus', 'blur']);
  
  const handleClick = (event) => {
    console.log('click');
    emit('click', event);
  };
  
  const handleFocus = (event) => {
    console.log('focus');
    emit('focus', event);
  };
  
  const handleBlur = (event) => {
    console.log('blur');
    emit('blur', event);
  };
  </script>
  