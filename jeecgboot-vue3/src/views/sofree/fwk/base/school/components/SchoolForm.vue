<template>
  <a-spin :spinning="confirmLoading">
    <JFormContainer :disabled="disabled">
      <template #detail>
        <a-form ref="formRef" class="antd-modal-form" :labelCol="labelCol" :wrapperCol="wrapperCol" name="SchoolForm">
          <a-row>
						<a-col :span="24">
							<a-form-item label="学校编码" v-bind="validateInfos.schoolCode" id="SchoolForm-schoolCode" name="schoolCode">
								<a-input v-model:value="formData.schoolCode" placeholder="请输入学校编码"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="学校名称" v-bind="validateInfos.schoolName" id="SchoolForm-schoolName" name="schoolName">
								<a-input v-model:value="formData.schoolName" placeholder="请输入学校名称"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="学校简称" v-bind="validateInfos.schoolNameAbbr" id="SchoolForm-schoolNameAbbr" name="schoolNameAbbr">
								<a-input v-model:value="formData.schoolNameAbbr" placeholder="请输入学校简称"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="英文名称" v-bind="validateInfos.schoolNameEn" id="SchoolForm-schoolNameEn" name="schoolNameEn">
								<a-input v-model:value="formData.schoolNameEn" placeholder="请输入英文名称"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="英文简称" v-bind="validateInfos.schoolNameEnAbbr" id="SchoolForm-schoolNameEnAbbr" name="schoolNameEnAbbr">
								<a-input v-model:value="formData.schoolNameEnAbbr" placeholder="请输入英文简称"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="学校性质" v-bind="validateInfos.xxxzId" id="SchoolForm-xxxzId" name="xxxzId">
								<j-dict-select-tag v-model:value="formData.xxxzId" dictCode="gb_xxxz" placeholder="请选择学校性质"  allow-clear />
							</a-form-item>
						</a-col>
            <a-col :span="24">
							<a-form-item label="学校举办者" v-bind="validateInfos.jbzId" id="SchoolForm-jbzId" name="jbzId">
								<j-dict-select-tag v-model:value="formData.jbzId" dictCode="gb_xxjbz" placeholder="请选择学校举办者"  allow-clear />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="办学类型" v-bind="validateInfos.bxlxId" id="SchoolForm-bxlxId" name="bxlxId">
								<j-dict-select-tag v-model:value="formData.bxlxId" dictCode="gb_bxlx" placeholder="请选择办学类型"  allow-clear />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="主管部门" v-bind="validateInfos.zgbm" id="SchoolForm-zgbm" name="zgbm">
								<a-input v-model:value="formData.zgbm" placeholder="请输入主管部门"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						
						<a-col :span="24">
							<a-form-item label="书记" v-bind="validateInfos.secretary" id="SchoolForm-secretary" name="secretary">
								<a-input v-model:value="formData.secretary" placeholder="请输入书记"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
            <a-col :span="24">
							<a-form-item label="校长" v-bind="validateInfos.headmaster" id="SchoolForm-headmaster" name="headmaster">
								<a-input v-model:value="formData.headmaster" placeholder="请输入校长"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="联系人" v-bind="validateInfos.contact" id="SchoolForm-contact" name="contact">
								<a-input v-model:value="formData.contact" placeholder="请输入联系人"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="联系电话" v-bind="validateInfos.phone" id="SchoolForm-phone" name="phone">
								<a-input v-model:value="formData.phone" placeholder="请输入联系电话"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="传真" v-bind="validateInfos.fax" id="SchoolForm-fax" name="fax">
								<a-input v-model:value="formData.fax" placeholder="请输入传真"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="电子邮箱" v-bind="validateInfos.email" id="SchoolForm-email" name="email">
								<a-input v-model:value="formData.email" placeholder="请输入电子邮箱"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						
						<a-col :span="24">
							<a-form-item label="网址" v-bind="validateInfos.website" id="SchoolForm-website" name="website">
								<a-input v-model:value="formData.website" placeholder="请输入网址"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						
						<a-col :span="24">
              <a-form-item label="所在省市区" v-bind="validateInfos.locationId" id="SchoolForm-locationId" name="locationId">
                    <JAreaSelect v-model:value="formData.locationId"/>
                </a-form-item>
						</a-col>
            <a-col :span="24">
							<a-form-item label="地址" v-bind="validateInfos.address" id="SchoolForm-address" name="address">
								<a-input v-model:value="formData.address" placeholder="请输入地址"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
            <a-col :span="24">
							<a-form-item label="邮编" v-bind="validateInfos.zipcode" id="SchoolForm-zipcode" name="zipcode">
								<a-input v-model:value="formData.zipcode" placeholder="请输入邮编"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="QQ群号" v-bind="validateInfos.qqqh" id="SchoolForm-qqqh" name="qqqh">
								<a-input v-model:value="formData.qqqh" placeholder="请输入QQ群号"  allow-clear ></a-input>
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
  //import { defHttp } from '/@/utils/http/axios';
  import { useMessage } from '/@/hooks/web/useMessage';
  import JDictSelectTag from '/@/components/Form/src/jeecg/components/JDictSelectTag.vue';
  import {JAreaSelect} from '/@/components/Form';
  import { getValueType } from '/@/utils';
  import { saveOrUpdate } from '../School.api';
  import { Form } from 'ant-design-vue';
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
    schoolCode: '',   
    schoolName: '',   
    schoolNameAbbr: '',   
    schoolNameEn: '',   
    schoolNameEnAbbr: '',   
    xxxzId: '',   
    bxlxId: '',   
    zgbm: '',   
    headmaster: '',   
    secretary: '',   
    contact: '',   
    phone: '',   
    fax: '',   
    email: '',   
    address: '',   
    website: '',   
    zipcode: '',   
    locationId: '',   
    qqqh: '',   
    jbzId: '',   
  });
  const { createMessage } = useMessage();
  const labelCol = ref<any>({ xs: { span: 24 }, sm: { span: 5 } });
  const wrapperCol = ref<any>({ xs: { span: 24 }, sm: { span: 16 } });
  const confirmLoading = ref<boolean>(false);
  //表单验证
  const validatorRules = reactive({
    schoolCode: [{ required: true, message: '请输入学校编码!'},],
    schoolName: [{ required: true, message: '请输入学校名称!'},],
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
    console.log("record:" + record);
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
