<template>
  <a-spin :spinning="confirmLoading">
    <JFormContainer :disabled="disabled">
      <template #detail>
        <a-form ref="formRef" class="antd-modal-form" :labelCol="labelCol" :wrapperCol="wrapperCol" name="MajorForm">
          <a-row>
						<a-col :span="24">
							<a-form-item label="专业代码" v-bind="validateInfos.majorCode" id="MajorForm-majorCode" name="majorCode">
								<a-input v-model:value="formData.majorCode" placeholder="请输入专业代码"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="专业名称" v-bind="validateInfos.majorName" id="MajorForm-majorName" name="majorName">
								<a-input v-model:value="formData.majorName" placeholder="请输入专业名称"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="专业简称" v-bind="validateInfos.majorNameAbbr" id="MajorForm-majorNameAbbr" name="majorNameAbbr">
								<a-input v-model:value="formData.majorNameAbbr" placeholder="请输入专业简称"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="英文名称" v-bind="validateInfos.majorNameEn" id="MajorForm-majorNameEn" name="majorNameEn">
								<a-input v-model:value="formData.majorNameEn" placeholder="请输入英文名称"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="英文简称" v-bind="validateInfos.majorNameEnAbbr" id="MajorForm-majorNameEnAbbr" name="majorNameEnAbbr">
								<a-input v-model:value="formData.majorNameEnAbbr" placeholder="请输入英文简称"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="所属院/系/部" v-bind="validateInfos.departId" id="MajorForm-departId" name="departId">
								<j-dict-select-tag v-model:value="formData.departId" dictCode="t_base_depart,depart_name,id,bmjb=1 and bmlb_id=1" placeholder="请选择所属院/系/部"  allow-clear />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="学制" v-bind="validateInfos.xz" id="MajorForm-xz" name="xz">
								<a-input-number v-model:value="formData.xz" placeholder="请输入学制" style="width: 100%" />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="专业类型" v-bind="validateInfos.gbzyType" id="MajorForm-gbzyType" name="gbzyType">
								<j-dict-select-tag v-model:value="formData.gbzyType" dictCode="sf_gbzy_lx" placeholder="请选择专业类型" @change="changeGbzyType"  allow-clear />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="专业目录" v-bind="validateInfos.gbzyId" id="MajorForm-gbzyId" name="gbzyId">
								<JSearchSelect v-model:value="formData.gbzyId" v-bind:dict="gbzyDict" placeholder="请选择专业目录"/>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="所属学科" v-bind="validateInfos.xkId" id="MajorForm-xkId" name="xkId">
								<JSearchSelect v-model:value="formData.xkId" dict="gb_yjxk" placeholder="请选择所属学科"/>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="培养层次" v-bind="validateInfos.pyccId" id="MajorForm-pyccId" name="pyccId">
								<JSearchSelect v-model:value="formData.pyccId" dict="gb_pycc" placeholder="请选择培养层次" />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="授予学位" v-bind="validateInfos.syxwId" id="MajorForm-syxwId" name="syxwId">
								<j-dict-select-tag v-model:value="formData.syxwId" dictCode="gb_xw" placeholder="请选择授予学位"  allow-clear />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="师范" v-bind="validateInfos.izSf" id="MajorForm-izSf" name="izSf">
								<j-dict-select-tag type='radio' v-model:value="formData.izSf" dictCode="yn" placeholder="请选择师范"  allow-clear />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="QQ群号" v-bind="validateInfos.qqqh" id="MajorForm-qqqh" name="qqqh">
								<a-input v-model:value="formData.qqqh" placeholder="请输入QQ群号"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="专业简介" v-bind="validateInfos.memo" id="MajorForm-memo" name="memo">
								<a-input v-model:value="formData.memo" placeholder="请输入专业简介"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="状态" v-bind="validateInfos.zt" id="MajorForm-zt" name="zt">
								<j-dict-select-tag type='radio' v-model:value="formData.zt" dictCode="sf_status" placeholder="请选择状态"  allow-clear />
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
  import {JSearchSelect} from '/@/components/Form';
  import { getValueType } from '/@/utils';
  import { saveOrUpdate } from '../Major.api';
  import { Form } from 'ant-design-vue';
  import { duplicateValidate } from '/@/utils/helper/validator';
  import JFormContainer from '/@/components/Form/src/container/JFormContainer.vue';
  const props = defineProps({
    formDisabled: { type: Boolean, default: false },
    formData: { type: Object, default: () => ({})},
    formBpm: { type: Boolean, default: true }
  });
  const gbzyDict = ref<any>();
  const formRef = ref();
  const useForm = Form.useForm;
  const emit = defineEmits(['register', 'ok']);
  const formData = reactive<Record<string, any>>({
    id: '',
    majorCode: '',   
    majorName: '',   
    majorNameAbbr: '',   
    majorNameEn: '',   
    majorNameEnAbbr: '',   
    departId: '',   
    xz: undefined,
    gbzyType: '',   
    gbzyId: '',   
    xkId: '',   
    pyccId: '',   
    syxwId: '',   
    izSf: '0',   
    qqqh: '',   
    memo: '',   
    zt: '1',   
  });
  const { createMessage } = useMessage();
  const labelCol = ref<any>({ xs: { span: 24 }, sm: { span: 5 } });
  const wrapperCol = ref<any>({ xs: { span: 24 }, sm: { span: 16 } });
  const confirmLoading = ref<boolean>(false);
  //表单验证
  const validatorRules = reactive({
    //majorCode: [{ required: true, message: '请输入专业代码!'},],
    majorCode: [{asyncValidator : () => {return duplicateValidate('t_base_major', 'major_code', formData.majorCode, formData.id)} },],
    majorName: [{ required: true, message: '请输入专业名称!'},],
    departId: [{ required: true, message: '请选择所属院/系/部!'},],
    xz: [{ required: true, message: '请输入学制!'},],
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
      gbzyDict.value = record.gbzyType;
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

  function changeGbzyType(value) {
      gbzyDict.value = value;
      formData.gbzyId = '';
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
