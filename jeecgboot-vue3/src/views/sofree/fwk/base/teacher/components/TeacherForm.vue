<template>
  <a-spin :spinning="confirmLoading">
    <JFormContainer :disabled="disabled">
      <template #detail>
        <a-form ref="formRef" class="antd-modal-form" :labelCol="labelCol" :wrapperCol="wrapperCol" name="TeacherForm">
          <a-row>
			<a-col :span="6">
				<a-form-item label="工号" v-bind="validateInfos.gh" id="TeacherForm-gh" name="gh">
					<a-input v-model:value="formData.gh" placeholder="请输入工号"  allow-clear ></a-input>
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="姓名" v-bind="validateInfos.name" id="TeacherForm-name" name="name">
					<a-input v-model:value="formData.name" placeholder="请输入姓名"  allow-clear ></a-input>
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="性别" v-bind="validateInfos.genderId" id="TeacherForm-genderId" name="genderId">
					<j-dict-select-tag v-model:value="formData.genderId" dictCode="sex" placeholder="请选择性别"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6" style="position:absolute;right:0;display:inline-block;">
				<a-form-item label="个人照片" v-bind="validateInfos.photo" id="TeacherForm-photo" name="photo">
					<j-image-upload :fileMax="1" v-model:value="formData.photo"></j-image-upload>
				</a-form-item>
			</a-col>
		  </a-row>
		  <a-row>
			<a-col :span="6" >
				<a-form-item label="所属部门" v-bind="validateInfos.departId" id="TeacherForm-departId" name="departId">
					<j-dict-select-tag v-model:value="formData.departId" dictCode="t_base_depart,depart_name,id" placeholder="请选择所属部门"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="曾用名" v-bind="validateInfos.formerName" id="TeacherForm-formerName" name="formerName">
					<a-input v-model:value="formData.formerName" placeholder="请输入曾用名"  allow-clear ></a-input>
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="英文名" v-bind="validateInfos.nameEn" id="TeacherForm-nameEn" name="nameEn">
					<a-input v-model:value="formData.nameEn" placeholder="请输入英文名"  allow-clear ></a-input>
				</a-form-item>
			</a-col>
		  </a-row>
		  <a-row>
			<a-col :span="6">
				<a-form-item label="姓名拼音" v-bind="validateInfos.nameSpell" id="TeacherForm-nameSpell" name="nameSpell">
					<a-input v-model:value="formData.nameSpell" placeholder="请输入姓名拼音"  allow-clear ></a-input>
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="联系电话" v-bind="validateInfos.mobile" id="TeacherForm-mobile" name="mobile">
					<a-input v-model:value="formData.mobile" placeholder="请输入联系电话"  allow-clear ></a-input>
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="电子邮箱" v-bind="validateInfos.email" id="TeacherForm-email" name="email">
					<a-input v-model:value="formData.email" placeholder="请输入电子邮箱"  allow-clear ></a-input>
				</a-form-item>
			</a-col>
		  </a-row>
		  <a-row>
			<a-col :span="6">
				<a-form-item label="QQ号" v-bind="validateInfos.qqh" id="TeacherForm-qqh" name="qqh">
					<a-input v-model:value="formData.qqh" placeholder="请输入QQ号"  allow-clear ></a-input>
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="微信号" v-bind="validateInfos.wxh" id="TeacherForm-wxh" name="wxh">
					<a-input v-model:value="formData.wxh" placeholder="请输入微信号"  allow-clear ></a-input>
				</a-form-item>
			</a-col>
			<a-col :span="12">
				<a-form-item label="籍贯" v-bind="validateInfos.jgId" id="TeacherForm-jgId" name="jgId" :wrapper-col="{ span: 20}">
					<JAreaSelect v-model:value="formData.jgId"/>
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="民族" v-bind="validateInfos.mzId" id="TeacherForm-mzId" name="mzId">
					<j-dict-select-tag v-model:value="formData.mzId" dictCode="gb_mz" placeholder="请选择民族"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="政治面貌" v-bind="validateInfos.zzmmId" id="TeacherForm-zzmmId" name="zzmmId">
					<j-dict-select-tag v-model:value="formData.zzmmId" dictCode="gb_zzmm" placeholder="请选择政治面貌"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="港澳台侨外" v-bind="validateInfos.gatqwId" id="TeacherForm-gatqwId" name="gatqwId">
					<j-dict-select-tag v-model:value="formData.gatqwId" dictCode="gb_gatqw" placeholder="请选择港澳台侨外"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="出生日期" v-bind="validateInfos.birthday" id="TeacherForm-birthday" name="birthday">
					<a-date-picker placeholder="请选择出生日期"  v-model:value="formData.birthday" value-format="YYYY-MM-DD"  style="width: 100%"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="出生地" v-bind="validateInfos.csd" id="TeacherForm-csd" name="csd">
					<a-input v-model:value="formData.csd" placeholder="请输入出生地"  allow-clear ></a-input>
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="证件类型" v-bind="validateInfos.cardTypeId" id="TeacherForm-cardTypeId" name="cardTypeId">
					<j-dict-select-tag v-model:value="formData.cardTypeId" dictCode="gb_sfzjlx" placeholder="请选择证件类型"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="证件号码" v-bind="validateInfos.idCard" id="TeacherForm-idCard" name="idCard">
					<a-input v-model:value="formData.idCard" placeholder="请输入证件号码"  allow-clear ></a-input>
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="婚姻状况" v-bind="validateInfos.hyzkId" id="TeacherForm-hyzkId" name="hyzkId">
					<j-dict-select-tag v-model:value="formData.hyzkId" dictCode="gb_hyzk" placeholder="请选择婚姻状况"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="宗教信仰" v-bind="validateInfos.zjxyId" id="TeacherForm-zjxyId" name="zjxyId">
					<j-dict-select-tag v-model:value="formData.zjxyId" dictCode="gb_zjxy" placeholder="请选择宗教信仰"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="血型" v-bind="validateInfos.xxId" id="TeacherForm-xxId" name="xxId">
					<j-dict-select-tag v-model:value="formData.xxId" dictCode="gb_xx" placeholder="请选择血型"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="健康状况" v-bind="validateInfos.jkzkId" id="TeacherForm-jkzkId" name="jkzkId">
					<j-dict-select-tag v-model:value="formData.jkzkId" dictCode="gb_jkzk" placeholder="请选择健康状况"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="毕业学校" v-bind="validateInfos.byxxmc" id="TeacherForm-byxxmc" name="byxxmc">
					<a-input v-model:value="formData.byxxmc" placeholder="请输入毕业学校"  allow-clear ></a-input>
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="学历" v-bind="validateInfos.xlId" id="TeacherForm-xlId" name="xlId">
					<j-dict-select-tag v-model:value="formData.xlId" dictCode="gb_xl" placeholder="请选择学历"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="学位" v-bind="validateInfos.xwId" id="TeacherForm-xwId" name="xwId">
					<j-dict-select-tag v-model:value="formData.xwId" dictCode="gb_xw" placeholder="请选择学位"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="专业类别" v-bind="validateInfos.zgxlzylbId" id="TeacherForm-zgxlzylbId" name="zgxlzylbId">
					<j-dict-select-tag v-model:value="formData.zgxlzylbId" dictCode="sf_zylb" placeholder="请选择专业类别"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="专业技术职务" v-bind="validateInfos.zcId" id="TeacherForm-zcId" name="zcId">
					<j-dict-select-tag v-model:value="formData.zcId" dictCode="gb_zyjszw" placeholder="请选择专业技术职务"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="行政职务" v-bind="validateInfos.zwId" id="TeacherForm-zwId" name="zwId">
					<j-dict-select-tag v-model:value="formData.zwId" dictCode="sf_zw" placeholder="请选择行政职务"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="职务级别" v-bind="validateInfos.zwjbId" id="TeacherForm-zwjbId" name="zwjbId">
					<j-dict-select-tag v-model:value="formData.zwjbId" dictCode="gb_zwjb" placeholder="请选择职务级别"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="工作日期" v-bind="validateInfos.startWorkDate" id="TeacherForm-startWorkDate" name="startWorkDate">
					<a-date-picker placeholder="请选择工作日期"  v-model:value="formData.startWorkDate" value-format="YYYY-MM-DD"  style="width: 100%"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="入校日期" v-bind="validateInfos.hireDate" id="TeacherForm-hireDate" name="hireDate">
					<a-date-picker placeholder="请选择入校日期"  v-model:value="formData.hireDate" value-format="YYYY-MM-DD"  style="width: 100%"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="从教日期" v-bind="validateInfos.teacherDate" id="TeacherForm-teacherDate" name="teacherDate">
					<a-date-picker placeholder="请选择从教日期"  v-model:value="formData.teacherDate" value-format="YYYY-MM-DD"  style="width: 100%"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="编制类别" v-bind="validateInfos.bzlbId" id="TeacherForm-bzlbId" name="bzlbId">
					<j-dict-select-tag v-model:value="formData.bzlbId" dictCode="gb_bzlb" placeholder="请选择编制类别"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="教职工类别" v-bind="validateInfos.jzglbId" id="TeacherForm-jzglbId" name="jzglbId">
					<j-dict-select-tag v-model:value="formData.jzglbId" dictCode="gb_jzglb" placeholder="请选择教职工类别"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="所在岗位" v-bind="validateInfos.szgwId" id="TeacherForm-szgwId" name="szgwId">
					<j-dict-select-tag v-model:value="formData.szgwId" dictCode="gb_gwzy" placeholder="请选择所在岗位"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="教职工来源" v-bind="validateInfos.jslyId" id="TeacherForm-jslyId" name="jslyId">
					<j-dict-select-tag v-model:value="formData.jslyId" dictCode="sf_jsly" placeholder="请选择教职工来源"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="辅导员类型" v-bind="validateInfos.fdylxId" id="TeacherForm-fdylxId" name="fdylxId">
					<j-dict-select-tag v-model:value="formData.fdylxId" dictCode="sf_fdylx" placeholder="请选择辅导员类型"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="当前状态" v-bind="validateInfos.dqztId" id="TeacherForm-dqztId" name="dqztId">
					<j-dict-select-tag v-model:value="formData.dqztId" dictCode="gb_jzgdqzt" placeholder="请选择当前状态"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="研究方向" v-bind="validateInfos.yjfx" id="TeacherForm-yjfx" name="yjfx">
					<a-input v-model:value="formData.yjfx" placeholder="请输入研究方向"  allow-clear ></a-input>
				</a-form-item>
			</a-col>
		  </a-row>
		  <a-row type="flex" justify="start">
			<a-col :span="24" >
				<a-form-item label="个人简历" v-bind="validateInfos.grjl" id="TeacherForm-grjl" name="grjl" :wrapperCol="{xs: { span: 24 }, sm: { span: 22 } }">
					<a-input v-model:value="formData.grjl" placeholder="请输入个人简历"  allow-clear ></a-input>
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="外聘" v-bind="validateInfos.izWp" id="TeacherForm-izWp" name="izWp">
					<j-dict-select-tag type='radio' v-model:value="formData.izWp" dictCode="yn" placeholder="请选择外聘"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="教师资格" v-bind="validateInfos.izGxjszg" id="TeacherForm-izGxjszg" name="izGxjszg">
					<j-dict-select-tag type='radio' v-model:value="formData.izGxjszg" dictCode="yn" placeholder="请选择教师资格"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="双师" v-bind="validateInfos.izSs" id="TeacherForm-izSs" name="izSs">
					<j-dict-select-tag type='radio' v-model:value="formData.izSs" dictCode="yn" placeholder="请选择双师"  allow-clear />
				</a-form-item>
			</a-col>
			<a-col :span="6">
				<a-form-item label="在岗" v-bind="validateInfos.izOnDuty" id="TeacherForm-izOnDuty" name="izOnDuty">
					<j-dict-select-tag type='radio' v-model:value="formData.izOnDuty" dictCode="yn" placeholder="请选择在岗"  allow-clear />
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
  import JImageUpload from '/@/components/Form/src/jeecg/components/JImageUpload.vue';
  import {JAreaSelect} from '/@/components/Form';
  import { getValueType } from '/@/utils';
  import { saveOrUpdate } from '../Teacher.api';
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
    gh: '',   
    name: '',   
    genderId: '',   
    departId: '',   
    formerName: '',   
    nameEn: '',   
    nameSpell: '',   
    mobile: '',   
    email: '',   
    qqh: '',   
    wxh: '',   
    mzId: '',   
    jgId: '',   
    zzmmId: '',   
    gatqwId: '',   
    birthday: '',   
    csd: '',   
    cardTypeId: '',   
    idCard: '',   
    hyzkId: '',   
    zjxyId: '',   
    xxId: '',   
    jkzkId: '',   
    byxxmc: '',   
    xlId: '',   
    xwId: '',   
    zgxlzylbId: '',   
    zcId: '',   
    zwId: '',   
    zwjbId: '',   
    startWorkDate: '',   
    hireDate: '',   
    teacherDate: '',   
    bzlbId: '',   
    jzglbId: '',   
    szgwId: '',   
    jslyId: '',   
    fdylxId: '',   
    dqztId: '',   
    yjfx: '',   
    grjl: '',   
    izWp: '0',   
    izGxjszg: '1',   
    izSs: '0',   
    izOnDuty: '1',   
    photo: '',   
  });
  const { createMessage } = useMessage();
  //const labelCol = ref<any>({ xs: { span: 24 }, sm: { span: 6 } });
  const labelCol = ref<any> ({ style: { width: '100px' } });
  const wrapperCol = ref<any>({ xs: { span: 24 }, sm: { span: 16 } });
  const confirmLoading = ref<boolean>(false);
  //表单验证
  const validatorRules = reactive({
    gh: [{ required: true, message: '请输入工号!'}, {asyncValidator : () => {return duplicateValidate('t_base_teacher', 'gh', formData.gh, formData.id)} },],
    name: [{ required: true, message: '请输入姓名!'},],
    genderId: [{ required: true, message: '请输入性别!'},],
    departId: [{ required: true, message: '请输入所属部门!'},],
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
<style>
  #TeacherForm-photo .ant-upload.ant-upload-select {
	width: 128px;
	height: 138px;
  }
  #TeacherForm-photo .ant-upload-list-item-container {
	width: 128px;
	height: 138px;
  }

</style>