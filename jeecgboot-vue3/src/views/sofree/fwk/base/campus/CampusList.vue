<template>
  <Suspense>
    <template #default>
      <CommonList title="校区信息" data_path="fwk/base/campus/Campus.data" api_path="fwk/base/campus/Campus.api" auth_str="fwk.base:t_base_campus" form_path="fwk/base/campus/components/CampusForm.vue"></CommonList>
    </template>
  </Suspense>
</template>

<script lang="ts" name="fwk.base-campus" setup>
  import CommonList from '/@/views/sofree/fwk/components/CommonList.vue';
</script>
