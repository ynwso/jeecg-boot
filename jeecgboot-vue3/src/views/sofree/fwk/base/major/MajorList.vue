<template>
  <Suspense>
    <template #default>
      <CommonList title="专业信息" data_path="fwk/base/major/Major.data" api_path="fwk/base/major/Major.api" auth_str="fwk.base:t_base_major" form_path="fwk/base/major/components/MajorForm.vue"></CommonList>
    </template>
  </Suspense>
</template>

<script lang="ts" name="fwk.base-major" setup>
  import CommonList from '/@/views/sofree/fwk/components/CommonList.vue';
</script>
