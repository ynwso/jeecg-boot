<template>
  <Suspense>
    <template #default>
      <CommonList title="班级信息" :isNative="true" :useSearchForm="false" :searchColCount="5" data_path="fwk/base/classes/Classes.data" api_path="fwk/base/classes/Classes.api" auth_str="fwk.base:t_base_class" form_path="fwk/base/classes/components/ClassesForm.vue">
        <!--查询区域-->
        <template #tableSearchColSlot="props">
          <JDMCSSelectTag :has_nj="true" :level="2" :queryParam="props.queryParam"/>
          <template v-if="props.toggleSearchStatus">
            <a-col :lg="5">
              <a-form-item name="majorId">
                <template #label><span title="班级代码">班级代码</span></template>
                <a-input v-model:value="props.queryParam.classCode" placeholder="请输入班级代码"  allow-clear ></a-input>
              </a-form-item>
            </a-col>
            <a-col :lg="5">
              <a-form-item name="majorId">
                <template #label><span title="班级名称">班级名称</span></template>
                <a-input v-model:value="props.queryParam.className" placeholder="请输入班级名称"  allow-clear ></a-input>
              </a-form-item>
            </a-col>
          </template>
        </template>
      </CommonList>
    </template>
  </Suspense>
</template>

<script lang="ts" name="fwk.base-classes" setup>
  import CommonList from '/@/views/sofree/fwk/components/CommonList.vue';
  import JDMCSSelectTag from '/@/views/sofree/fwk/components/Form/JDMCSSelectForSearch.vue';

</script>
