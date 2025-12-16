<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    :fill="fill"
    v-bind="$attrs"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.405 9.89V6.56c0-2.26-1.346-3.27-2.946-3.6L8.484 3h-.148C8.25 2 7.502 1.6 7 1.6c-.501 0-1.254.4-1.336 1.4h-.148l-.05.01C3.9 3.477 2.67 4.59 2.59 6.557l-.008 3.332-1.078 1.09A.455.455 0 0 0 1.5 12h11a.5.5 0 0 0 .34-.86l-1.435-1.25zm-3.492-6c1.66.277 2.49 1.462 2.49 3.182v2.89H3.597l-.008-2.495C3.6 5.746 4.532 4.55 6.105 4.28l.158-.03.092-.024h1.368l.09.023zm.122 9.487A1.44 1.44 0 0 1 6.6 14.479c-.8 0-1.4-.62-1.4-1.36h-.8c0 1.192.988 2.16 2.2 2.16 1.213 0 2.2-.968 2.2-2.16h-.767z"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  fill: { type: String, default: 'currentColor' },
});
const { fill } = props;
</script>
