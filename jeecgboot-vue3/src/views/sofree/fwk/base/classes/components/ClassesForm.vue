<template>
  <a-spin :spinning="confirmLoading">
    <JFormContainer :disabled="disabled">
      <template #detail>
        <a-form ref="formRef" class="antd-modal-form" :labelCol="labelCol" :wrapperCol="wrapperCol" name="ClassesForm">
          <a-row>
						<a-col :span="24">
							<a-form-item label="班级代码" v-bind="validateInfos.classCode" id="ClassesForm-classCode" name="classCode">
								<a-input v-model:value="formData.classCode" placeholder="请输入班级代码"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="班级名称" v-bind="validateInfos.className" id="ClassesForm-className" name="className">
								<a-input v-model:value="formData.className" placeholder="请输入班级名称"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="所属年级" v-bind="validateInfos.nj" id="ClassesForm-nj" name="nj">
								<a-date-picker placeholder="请选择所属年级" picker="year" v-model:value="formData.nj" value-format="YYYY"  style="width: 100%"  allow-clear />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="所属院/系/部" v-bind="validateInfos.departId" id="ClassesForm-departId" name="departId">
                <j-dict-select-tag v-model:value="formData.departId" dictCode="t_base_depart,depart_name,id" placeholder="请选择所属院/系/部"  allow-clear />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="所属专业" v-bind="validateInfos.majorId" id="ClassesForm-majorId" name="majorId">
                <j-dict-select-tag v-model:value="formData.majorId" dictCode="t_base_major,major_name,id" placeholder="请选择所属专业"  allow-clear />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="所在校区" v-bind="validateInfos.campusId" id="ClassesForm-campusId" name="campusId">
								<j-dict-select-tag v-model:value="formData.campusId" dictCode="t_base_campus,campus_name,id" placeholder="请选择所在校区"  allow-clear />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="班级简称" v-bind="validateInfos.classNameAbbr" id="ClassesForm-classNameAbbr" name="classNameAbbr">
								<a-input v-model:value="formData.classNameAbbr" placeholder="请输入班级简称"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="班主任" v-bind="validateInfos.bzrId" id="ClassesForm-bzrId" name="bzrId">
								<j-dict-select-tag v-model:value="formData.bzrId" dictCode="t_base_teacher,name,id" placeholder="请选择班主任"  allow-clear />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="辅导员" v-bind="validateInfos.fdyId" id="ClassesForm-fdyId" name="fdyId">
								<j-dict-select-tag v-model:value="formData.fdyId" dictCode="t_base_teacher,name,id" placeholder="请选择辅导员"  allow-clear />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="预设人数" v-bind="validateInfos.ysrs" id="ClassesForm-ysrs" name="ysrs">
								<a-input v-model:value="formData.ysrs" placeholder="请输入预设人数"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="QQ群号" v-bind="validateInfos.qqqh" id="ClassesForm-qqqh" name="qqqh">
								<a-input v-model:value="formData.qqqh" placeholder="请输入QQ群号"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="状态" v-bind="validateInfos.zt" id="ClassesForm-zt" name="zt">
								<j-dict-select-tag type='radio' v-model:value="formData.zt" dictCode="sf_status" placeholder="请选择状态"  allow-clear />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="备注" v-bind="validateInfos.memo" id="ClassesForm-memo" name="memo">
								<a-input v-model:value="formData.memo" placeholder="请输入备注"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
          </a-row>
        </a-form>
      </template>
    </JFormContainer>
  </a-spin>
</template>

<script lang="ts" setup>
  import { ref, reactive, defineExpose, nextTick, defineProps, computed, onMounted } from 'vue';
  import { defHttp } from '/@/utils/http/axios';
  import { useMessage } from '/@/hooks/web/useMessage';
  import JDictSelectTag from '/@/components/Form/src/jeecg/components/JDictSelectTag.vue';
  import { getValueType } from '/@/utils';
  import { saveOrUpdate } from '../Classes.api';
  import { Form } from 'ant-design-vue';
  import { duplicateValidate } from '/@/utils/helper/validator';
  import JFormContainer from '/@/components/Form/src/container/JFormContainer.vue';
  const props = defineProps({
    formDisabled: { type: Boolean, default: false },
    formData: { type: Object, default: () => ({})},
    formBpm: { type: Boolean, default: true }
  });
  const formRef = ref();
  const useForm = Form.useForm;
  const emit = defineEmits(['register', 'ok']);
  const formData = reactive<Record<string, any>>({
    id: '',
    classCode: '',   
    className: '',   
    nj: '',   
    departId: '',   
    majorId: '',   
    campusId: '',   
    classNameAbbr: '',   
    bzrId: '',   
    fdyId: '',   
    ysrs: '',   
    qqqh: '',   
    zt: '1',   
    memo: '',
  });
  const { createMessage } = useMessage();
  const labelCol = ref<any>({ xs: { span: 24 }, sm: { span: 5 } });
  const wrapperCol = ref<any>({ xs: { span: 24 }, sm: { span: 16 } });
  const confirmLoading = ref<boolean>(false);
  //表单验证
  const validatorRules = reactive({
    classCode: [{asyncValidator : () => {return duplicateValidate('t_base_class', 'class_code', formData.classCode, formData.id)} },],
    className: [{ required: true, message: '请输入班级名称!'},],
    nj: [{ required: true, message: '请选择所属年级!'},],
    departId: [{ required: true, message: '请选择所属院/系/部!'},],
  });
  const { resetFields, validate, validateInfos } = useForm(formData, validatorRules, { immediate: false });

  // 表单禁用
  const disabled = computed(()=>{
    if(props.formBpm === true){
      if(props.formData.disabled === false){
        return false;
      }else{
        return true;
      }
    }
    return props.formDisabled;
  });

  
  /**
   * 新增
   */
  function add() {
    edit({});
  }

  /**
   * 编辑
   */
  function edit(record) {
    nextTick(() => {
      resetFields();
      const tmpData = {};
      Object.keys(formData).forEach((key) => {
        if(record.hasOwnProperty(key)){
          tmpData[key] = record[key]
        }
      })
      //赋值
      Object.assign(formData, tmpData);
    });
  }

  /**
   * 提交数据
   */
  async function submitForm() {
    try {
      // 触发表单验证
      await validate();
    } catch ({ errorFields }) {
      if (errorFields) {
        const firstField = errorFields[0];
        if (firstField) {
          formRef.value.scrollToField(firstField.name, { behavior: 'smooth', block: 'center' });
        }
      }
      return Promise.reject(errorFields);
    }
    confirmLoading.value = true;
    const isUpdate = ref<boolean>(false);
    //时间格式化
    let model = formData;
    if (model.id) {
      isUpdate.value = true;
    }
    //循环数据
    for (let data in model) {
      //如果该数据是数组并且是字符串类型
      if (model[data] instanceof Array) {
        let valueType = getValueType(formRef.value.getProps, data);
        //如果是字符串类型的需要变成以逗号分割的字符串
        if (valueType === 'string') {
          model[data] = model[data].join(',');
        }
      }
    }
    await saveOrUpdate(model, isUpdate.value)
      .then((res) => {
        if (res.success) {
          createMessage.success(res.message);
          emit('ok');
        } else {
          createMessage.warning(res.message);
        }
      })
      .finally(() => {
        confirmLoading.value = false;
      });
  }


  defineExpose({
    add,
    edit,
    submitForm,
  });
</script>

<style lang="less" scoped>
  .antd-modal-form {
    padding: 14px;
  }
</style>
