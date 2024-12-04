<template>
  <BasicDrawer v-bind="$attrs" @register="registerDrawer" :title="title" :width="adaptiveWidth" @ok="handleOk" :showFooter="showFooter"
    destroyOnClose
  >
  <FromComponent ref="registerForm" @ok="submitCallback" :formDisabled="disableSubmit" :formBpm="false" />
  </BasicDrawer>
</template>

<script lang="ts" setup>
  const props = defineProps(['form_path']);
  
  import { ref, nextTick, defineExpose, unref, defineEmits, defineAsyncComponent } from 'vue';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { useDrawerAdaptiveWidth } from '/@/hooks/jeecg/useAdaptiveWidth';
  
  const title = ref<string>('');
  //const visible = ref<boolean>(false);
  const disableSubmit = ref<boolean>(false);
  const registerForm = ref();
  const emit = defineEmits(['register', 'success']);
  const isUpdate = ref(true);
  const { adaptiveWidth } = useDrawerAdaptiveWidth();

  const showFooter = ref(true);
  const FromComponent = defineAsyncComponent(() =>
    import(props.form_path)
  );

  const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
    showFooter.value = data?.showFooter ?? true;
    isUpdate.value = !!data?.isUpdate;
    setDrawerProps({ confirmLoading: false, showFooter: showFooter.value });
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
    closeDrawer();
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

  defineExpose({
    add,
    edit,
    disableSubmit,
  });
</script>

<style lang="less" scoped></style>
