<template>
  <BasicModal v-bind="$attrs" @register="registerModal" destroyOnClose :title="title" :width="800" :maxHeight="400" @ok="handleSubmit">
    <FromComponent ref="registerForm" @ok="submitCallback" :formDisabled="disableSubmit" :formBpm="false" />
  </BasicModal>
</template>

<script lang="ts" setup>
  const props = defineProps(['form_path']);
  import { ref, nextTick, defineAsyncComponent, unref } from 'vue';
  import {BasicModal, useModalInner} from '/@/components/Modal';

  const FromComponent = defineAsyncComponent(() =>
    import(props.form_path)
  );
  const isUpdate = ref(true);
  const isDetail = ref(false);
  const showFooter = ref(true);
  //表单赋值
  const [registerModal, {setModalProps, closeModal}] = useModalInner(async (data) => {
      showFooter.value = data?.showFooter ?? true;
      setModalProps({confirmLoading: false,showCancelBtn:!!data?.showFooter,showOkBtn:!!data?.showFooter});
      isUpdate.value = !!data?.isUpdate;
      isDetail.value = !!data?.showFooter;
      if(showFooter.value){
        disableSubmit.value = false
      } else {
        disableSubmit.value = true
      }
      while(registerForm.value == null){
        await templateLoaded(registerForm);
      }
      if (unref(isUpdate)) {
        edit(data.record);
      } else {
        add(data.record);// record仅适用于树菜单
      }
  });
  
  const title = ref<string>('');
  const disableSubmit = ref<boolean>(false);
  const registerForm = ref();
  const emit = defineEmits(['register', 'success']);

  //检查模板是否加载完成(也不能非分百保证)
  function templateLoaded<T>(templateRef: T): Promise<T> {
    return new Promise((resolve, reject) => {
      const checkInsertRefLoaded = setInterval(() => {
        if (templateRef) {
          clearInterval(checkInsertRefLoaded);
          resolve(templateRef);
        }
      }, 100);
    });
  }

  /**
   * 新增, obj仅适用于树菜单
   * @param obj
   */
  function add(obj={}) {
    title.value = '新增';
    nextTick(() => {
      registerForm.value.add(obj);
    });
  }
  
  /**
   * 编辑
   * @param record
   */
  function edit(record) {
    title.value = disableSubmit.value ? '详情' : '编辑';
    nextTick(() => {
      registerForm.value.edit(record);
    });
  }
  
  /**
   * 确定按钮点击事件
   */
  function handleSubmit() {
    registerForm.value.submitForm();
  }

  /**
   * form保存回调事件, 兼容树菜单（以下参数 仅适用于树菜单）
   * @param isUpdate 是否为更新
   * @param values 表单值
   * @param expandedArr 展开的树菜单节点数组
   * @param changeParent 是否更改了父级节点
   */
  function submitCallback(obj) {
    closeModal();
    if(obj != null){//{ isUpdate, values, expandedArr, changeParent }
      emit('success', {
        isUpdate: obj.isUpdate,
        values: obj.values,
        expandedArr: obj.expandedArr,
        // 是否更改了父级节点
        changeParent: obj.changeParent,
      });
    } else {
      emit('success');
    }
  }

</script>

<style lang="less">
  /** 时间和数字输入框样式 */
  :deep(.ant-input-number) {
    width: 100%;
  }

  :deep(.ant-calendar-picker) {
    width: 100%;
  }
</style>
<style lang="less" scoped></style>
