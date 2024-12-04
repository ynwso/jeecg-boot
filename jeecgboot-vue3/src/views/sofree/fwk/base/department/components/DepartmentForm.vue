<template>
  <a-spin :spinning="confirmLoading">
    <JFormContainer :disabled="disabled">
      <template #detail>
        <a-form ref="formRef" class="antd-modal-form" :labelCol="labelCol" :wrapperCol="wrapperCol" name="DepartmentForm">
          <a-row>
						<a-col :span="24">
							<a-form-item label="部门代码" v-bind="validateInfos.departCode" id="DepartmentForm-departCode" name="departCode">
								<a-input v-model:value="formData.departCode" placeholder="请输入部门代码"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="部门名称" v-bind="validateInfos.departName" id="DepartmentForm-departName" name="departName">
								<a-input v-model:value="formData.departName" placeholder="请输入部门名称"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="部门简称" v-bind="validateInfos.departNameAbbr" id="DepartmentForm-departNameAbbr" name="departNameAbbr">
								<a-input v-model:value="formData.departNameAbbr" placeholder="请输入部门简称"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="英文名称" v-bind="validateInfos.departNameEn" id="DepartmentForm-departNameEn" name="departNameEn">
								<a-input v-model:value="formData.departNameEn" placeholder="请输入英文名称"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
              <a-form-item label="上级部门" v-bind="validateInfos.pid">
                <j-tree-select
                  placeholder="请选择上级部门"
                  v-model:value="formData.pid"
                  dict="t_base_depart,depart_name,id"
                  pidField="pid"
                  pidValue="0"
                  hasChildField="has_child"
                  :disabled="disabled">
                </j-tree-select>
              </a-form-item>
            </a-col>
						<!--<a-col :span="24">
							<a-form-item label="部门级别" v-bind="validateInfos.bmjb" id="DepartmentForm-bmjb" name="bmjb">
                <a-radio-group v-model:value="formData.bmjb">
                  <a-radio value="1">二级部门</a-radio>
                  <a-radio value="2">三级部门</a-radio>
                </a-radio-group>
							</a-form-item>
						</a-col>-->
						<a-col :span="24">
							<a-form-item label="部门类别" v-bind="validateInfos.bmlbId" id="DepartmentForm-bmlbId" name="bmlbId">
								<j-dict-select-tag v-model:value="formData.bmlbId" dictCode="gb_dwlb" placeholder="请选择部门类别"  allow-clear />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="联系人" v-bind="validateInfos.lxr" id="DepartmentForm-lxr" name="lxr">
								<a-input v-model:value="formData.lxr" placeholder="请输入联系人"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="联系电话" v-bind="validateInfos.phone" id="DepartmentForm-phone" name="phone">
								<a-input v-model:value="formData.phone" placeholder="请输入联系电话"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="传真" v-bind="validateInfos.fax" id="DepartmentForm-fax" name="fax">
								<a-input v-model:value="formData.fax" placeholder="请输入传真"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="电子邮箱" v-bind="validateInfos.email" id="DepartmentForm-email" name="email">
								<a-input v-model:value="formData.email" placeholder="请输入电子邮箱"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="地址" v-bind="validateInfos.address" id="DepartmentForm-address" name="address">
								<a-input v-model:value="formData.address" placeholder="请输入地址"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="邮编" v-bind="validateInfos.zipcode" id="DepartmentForm-zipcode" name="zipcode">
								<a-input v-model:value="formData.zipcode" placeholder="请输入邮编"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="qq群号" v-bind="validateInfos.qqqh" id="DepartmentForm-qqqh" name="qqqh">
								<a-input v-model:value="formData.qqqh" placeholder="请输入qq群号"  allow-clear ></a-input>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="签章" v-bind="validateInfos.stampPath" id="DepartmentForm-stampPath" name="stampPath">
                <j-image-upload v-model:value="formData.stampPath" :multiple="false" :max="1" :accept="['.jpg', '.jpeg', '.png', '.gif']" :show-list="false" :disabled="disabled" />
							</a-form-item>
						</a-col>
            <a-col :span="24">
							<a-form-item label="状态" v-bind="validateInfos.zt" id="DepartmentForm-zt" name="zt">
                <a-radio-group v-model:value="formData.zt">
                  <a-radio value="1">启用</a-radio>
                  <a-radio value="0">禁用</a-radio>
                </a-radio-group>
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="排序" v-bind="validateInfos.px" id="DepartmentForm-px" name="px">
								<a-input-number v-model:value="formData.px" placeholder="请输入排序" style="width: 100%" />
							</a-form-item>
						</a-col>
						<a-col :span="24">
							<a-form-item label="备注" v-bind="validateInfos.memo" id="DepartmentForm-memo" name="memo">
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
  import { ref, reactive, defineExpose, nextTick, unref, defineProps, computed, onMounted } from 'vue';
  import { defHttp } from '/@/utils/http/axios';
  import { useMessage } from '/@/hooks/web/useMessage';
  import JDictSelectTag from '/@/components/Form/src/jeecg/components/JDictSelectTag.vue';
  import JTreeSelect from '/@/components/Form/src/jeecg/components/JTreeSelect.vue';
  import { getValueType } from '/@/utils';
  import {loadTreeData, saveOrUpdateDict} from '../Department.api';
  import { Form } from 'ant-design-vue';
  import { JImageUpload } from '/@/components/Form';
  import { duplicateValidate } from '/@/utils/helper/validator';
  import JFormContainer from '/@/components/Form/src/container/JFormContainer.vue';
  const useForm = Form.useForm;
  const formRef = ref();
  const isUpdate = ref(true);
  const expandedRowKeys = ref([]);
  const treeData = ref([]);
  const pidField = ref<string>('pid');
  const emit = defineEmits(['register', 'ok']);
  let model: Nullable<Recordable> = null;
  const formData = reactive<Record<string, any>>({
    id: '',
    pid: '',   
    departCode: '',   
    departName: '',   
    departNameAbbr: '',   
    departNameEn: '',   
    zt: '1',   
    px: undefined,
    bmlbId: '',   
    lxr: '',   
    phone: '',   
    fax: '',   
    email: '',   
    address: '',   
    zipcode: '',   
    qqqh: '',   
    stampPath: '',   
    memo: '',   
  });
  const { createMessage } = useMessage();
  const labelCol = ref<any>({ xs: { span: 24 }, sm: { span: 5 } });
  const wrapperCol = ref<any>({ xs: { span: 24 }, sm: { span: 16 } });
  const confirmLoading = ref<boolean>(false);
  //表单验证
  const validatorRules = reactive({
    departCode: [{asyncValidator : () => {return duplicateValidate('t_base_depart', 'depart_code', formData.departCode, formData.id)} },],
    departName: [{ required: true, message: '请输入部门名称!'},],
    bmlbId: [{ required: true, message: '请选择部门类别!'},],
  });
  const { resetFields, validate, validateInfos } = useForm(formData, validatorRules, { immediate: false });
  const props = defineProps({
    formDisabled: { type: Boolean, default: false },
    formData: { type: Object, default: () => ({}) },
    formBpm: { type: Boolean, default: true }
  });

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
  function add(obj = {}) {
    edit(obj);
  }

  /**
   * 编辑
   */
  function edit(record) {
    nextTick(async () => {
      resetFields();
      expandedRowKeys.value = [];
      treeData.value = await loadTreeData({ async: false, pcode: '' });
      const tmpData = {};
      Object.keys(formData).forEach((key) => {
        if(record.hasOwnProperty(key)){
          tmpData[key] = record[key]
        }
      })
      //赋值
      Object.assign(formData,tmpData);
      model = tmpData
    });
  }

  /**
   * 根据pid获取展开的节点
   * @param pid
   * @param arr
   */
  function getExpandKeysByPid(pid, arr) {
    if (pid && arr && arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].key == pid && unref(expandedRowKeys).indexOf(pid) < 0) {
          expandedRowKeys.value.push(arr[i].key);
          getExpandKeysByPid(arr[i]['parentId'], unref(treeData));
        } else {
          getExpandKeysByPid(pid, arr[i].children);
        }
      }
    }
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
    if (formData.id) {
      isUpdate.value = true;
    }
    //循环数据
    for (let data in formData) {
      //如果该数据是数组并且是字符串类型
      if (formData[data] instanceof Array) {
        let valueType = getValueType(formRef.value.getProps, data);
        //如果是字符串类型的需要变成以逗号分割的字符串
        if (valueType === 'string') {
          formData[data] = formData[data].join(',');
        }
      }
    }
    await saveOrUpdateDict(formData, isUpdate.value)
      .then(async (res) => {
        if (res.success) {
          await getExpandKeysByPid(formData['pid'], unref(treeData));
          delete formData['children'];
          emit('ok', {
            isUpdate: unref(isUpdate),
            values: { ...formData },
            expandedArr: unref(expandedRowKeys).reverse(),
            // 是否更改了父级节点
            changeParent: model != null && model['pid'] != formData['pid'],
          });
          createMessage.success(res.message);
        } else {
          createMessage.warning(res.message);
        }
      })
      .finally(() => {
        confirmLoading.value = false;
      });
  }


  /**
   * 值改变事件触发
   * @param key
   * @param value
   */
  function handleFormChange(key, value) {
    formData[key] = value;
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
