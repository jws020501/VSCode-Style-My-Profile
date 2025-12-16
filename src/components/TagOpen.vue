<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="tag" :style="{ paddingLeft: `${(indent || 0) * 0.5}em` }">
    <span>&lt;</span>
    <span class="tagname"> {{ tagname  }}  </span>
     <span v-if="attr" class="attr">
     {{ " " + attr }}<span class="tagname"> =</span>
    </span>
    <span v-else class="attr">{{ attr }}</span>
    <span class="attr_value"> {{ attrValue }} </span>
    <span>&gt;</span>
  </div>
</template>

<script setup>
const props = defineProps({
  tagname: { type: String, required: true },
  attr: { type: String, default: undefined },
  attrValue: { type: String, default: '' },
  indent: { type: Number, default: 0 },
});

const { tagname, attr, attrValue, indent } = props;
</script>
