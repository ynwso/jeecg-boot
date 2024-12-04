<template>
  <Suspense>
    <template #default>
      <CommonList title="部门信息" data_path="fwk/base/department/Department.data" api_path="fwk/base/department/Department.api" auth_str="fwk.base:t_base_depart" form_path="fwk/base/department/components/DepartmentForm.vue"></CommonList>
    </template>
  </Suspense>
</template>

<script lang="ts" name="fwk.base-depart" setup>
  import CommonList from '/@/views/sofree/fwk/components/CommonTreeList.vue';
</script>
