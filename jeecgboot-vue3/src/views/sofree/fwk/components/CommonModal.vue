<template>
  <j-modal :title="title" :width="width" :maxHeight="400" :visible="visible" @ok="handleOk" :okButtonProps="{ class: { 'jee-hidden': disableSubmit } }" @cancel="handleCancel" cancelText="关闭">
    <FromComponent ref="registerForm" @ok="submitCallback" :formDisabled="disableSubmit" :formBpm="false" />
  </j-modal>
</template>

<script lang="ts" setup>
  const props = defineProps(['form_path']);
  import { ref, nextTick, defineExpose, defineAsyncComponent } from 'vue';
  import JModal from '/@/components/Modal/src/JModal/JModal.vue';

  const FromComponent = defineAsyncComponent(() =>
    import(props.form_path)
  );
  
  const title = ref<string>('');
  const width = ref<number>(800);
  const visible = ref<boolean>(false);
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
    visible.value = true;
    nextTick(async () => {
      while(registerForm.value == null){
        await templateLoaded(registerForm);
      }
      registerForm.value.add(obj);
    });
  }
  
  /**
   * 编辑
   * @param record
   */
  function edit(record) {
    title.value = disableSubmit.value ? '详情' : '编辑';
    visible.value = true;
    nextTick(async () => {
      while(registerForm.value == null){
        await templateLoaded(registerForm);
      }
      registerForm.value.edit(record);
    });
  }
  
  /**
   * 确定按钮点击事件
   */
  function handleOk() {
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
    handleCancel();
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

  /**
   * 取消按钮回调事件
   */
  function handleCancel() {
    visible.value = false;
  }

  defineExpose({
    add,
    edit,
    disableSubmit,
  });
</script>

<style lang="less">
  /**隐藏样式-modal确定按钮 */
  .jee-hidden {
    display: none !important;
  }
</style>
<style lang="less" scoped></style>
