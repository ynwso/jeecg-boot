<!--DMCS depart major classes student-->
<template>
  <a-col :lg="3" v-if="props.has_nj">
      <a-form-item name="s_nj">
        <template #label><span title="年级">年级</span></template>
        <a-date-picker valueFormat="YYYY" placeholder="请选择" picker="year" v-model:value="props.queryParam.nj" allow-clear />
      </a-form-item>
  </a-col>
  <a-col :lg="5">
    <a-form-item name="s_departId">
      <template #label><span title="院/系/部">院/系/部</span></template>
      <j-dict-select-tag placeholder="请选择" v-model:value="props.queryParam.departId" dictCode="t_base_depart,depart_name,id,bmjb=1 and bmlb_id='1'" @change="departChanged" allow-clear />
    </a-form-item>
  </a-col>
  <a-col :lg="5" v-if="props.level >= 2" >
    <a-form-item name="s_majorId" :labelCol="{span: 4}">
      <template #label><span title="专业">专业</span></template>
      <j-dict-select-tag placeholder="请选择" ref="majorSelect" v-model:value="props.queryParam.majorId" :dictCode="majorCode" @change="majorChanged" allow-clear />
    </a-form-item>
  </a-col>
  <a-col :lg="5" v-if="props.level >= 3" >
    <a-form-item name="s_classId" :labelCol="{span: 4}">
      <template #label><span title="班级">班级</span></template>
      <j-dict-select-tag placeholder="请选择" ref="classSelect" v-model:value="props.queryParam.classId" :dictCode="classCode" allow-clear />
    </a-form-item>
  </a-col>
</template>
<script lang="ts" setup>
  import JDictSelectTag from '/@/components/Form/src/jeecg/components/JDictSelectTag.vue';
  import { ref  } from 'vue';
  const props = defineProps({
    has_nj: {
      type: Boolean,
      default: false
    },
    level: {
      type: Number,
      default: 3
    },
    queryParam: {
      type: Object,
      default: () => ({})
    },
  });
  const majorCode = ref("t_base_major,major_name,id,depart_id=''");
  const classCode = ref("t_base_class,class_name,id,major_id=''");
  const majorSelect = ref();
  const classSelect = ref();

  function departChanged(value: any) {
    majorCode.value = "t_base_major,major_name,id,depart_id='" + value + "'";
    classCode.value = "t_base_class,class_name,id,major_id=''";
    majorSelect.value.state = ""; 
    classSelect.value.state = "";
  }

  function majorChanged(value: any) {
    classCode.value = "t_base_class,class_name,id,major_id='" + value + "'";
    classSelect.value.state = "";
  }

</script>
