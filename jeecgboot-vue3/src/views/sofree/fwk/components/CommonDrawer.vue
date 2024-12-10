<template>
  <BasicDrawer v-bind="$attrs" @register="registerDrawer" :title="title" :width="adaptiveWidth" @ok="handleSubmit" :showFooter="showFooter"
    destroyOnClose
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>

<script lang="ts" setup>
  const props = defineProps(['data_path','api_path']);

  import { ref, computed, unref, defineEmits } from 'vue';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { useDrawerAdaptiveWidth } from '/@/hooks/jeecg/useAdaptiveWidth';
  import {BasicForm, useForm} from '/@/components/Form/index';

  const data_path = props.data_path;
  const api_path = props.api_path;

  const { formSchema } = await import(data_path);
  const { saveOrUpdate } = await import(api_path);

  const { adaptiveWidth } = useDrawerAdaptiveWidth();

  const showFooter = ref(true);

  // Emits声明
  const emit = defineEmits(['register','success']);
  const isUpdate = ref(true);
  const isDetail = ref(false);
  //表单配置
  const [registerForm, { setProps,resetFields, setFieldsValue, validate, scrollToField }] = useForm({
      labelWidth: 150,
      schemas: formSchema,
      showActionButtonGroup: false,
      baseColProps: {span: 24}
  });

  const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
    //重置表单
    await resetFields();
    setDrawerProps({ confirmLoading: false, showFooter: showFooter.value });
    isUpdate.value = !!data?.isUpdate;
    isDetail.value = !!data?.showFooter;
    if (unref(isUpdate)) {
        //表单赋值
        await setFieldsValue({
            ...data.record,
        });
    }
    // 隐藏底部时禁用整个表单
    setProps({ disabled: !data?.showFooter })
  });
  //设置标题
  const title = computed(() => (!unref(isUpdate) ? '新增' : !unref(isDetail) ? '详情' : '编辑'));
  //表单提交事件
  async function handleSubmit(v) {
      try {
          let values = await validate();
          setDrawerProps({confirmLoading: true});
          //提交表单
          await saveOrUpdate(values, isUpdate.value);
          //关闭弹窗
          closeDrawer();
          //刷新列表
          emit('success');
      } catch ({ errorFields }) {
          if (errorFields) {
            const firstField = errorFields[0];
            if (firstField) {
              scrollToField(firstField.name, { behavior: 'smooth', block: 'center' });
            }
          }
          return Promise.reject(errorFields);
      } finally {
        setDrawerProps({confirmLoading: false});
      }
  }
</script>

<style lang="less" scoped></style>
