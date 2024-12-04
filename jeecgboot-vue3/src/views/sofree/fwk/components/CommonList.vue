<template>
  <div class="p-2">
    <!--引用表格-->
    <BasicTable @register="registerTable" :rowSelection="rowSelection">
      <!--插槽:table标题-->
      <template #tableTitle>
        <a-button type="primary" v-auth="auth_add"  @click="handleAdd" preIcon="ant-design:plus-outlined"> 新增</a-button>
        <a-button  type="primary" v-auth="auth_exportXls" preIcon="ant-design:export-outlined" @click="onExportXls"> 导出</a-button>
        <j-upload-button  type="primary" v-auth="auth_importExcel"  preIcon="ant-design:import-outlined" @click="onImportXls">导入</j-upload-button>
        <a-dropdown v-if="selectedRowKeys.length > 0">
          <template #overlay>
            <a-menu>
              <a-menu-item key="1" @click="batchHandleDelete">
                <Icon icon="ant-design:delete-outlined"></Icon>
                删除
              </a-menu-item>
            </a-menu>
          </template>
          <a-button v-auth="auth_deleteBatch">批量操作
            <Icon icon="mdi:chevron-down"></Icon>
          </a-button>
        </a-dropdown>
        <!-- 高级查询 -->
        <super-query :config="superQueryConfig" @search="handleSuperQuery" />
      </template>
      <!--操作栏-->
      <template #action="{ record }">
        <TableAction :actions="getTableAction(record)" :dropDownActions="getDropDownAction(record)"/>
      </template>
      <template v-slot:bodyCell="{ column, record, index, text }">
      </template>
    </BasicTable>
    <!-- 表单区域 -->
    <template v-if="useModal">
      <CommonModal ref="registerModal" @success="handleSuccess" v-bind:form_path="form_path" />
    </template>
    <template v-if="!useModal">
      <CommonModal @register="registerDrawer" @success="handleSuccess" v-bind:form_path="form_path" />
    </template>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    drawer: {
      type: String,
      default: 'fwk/components/CommonDrawer.vue'
    },
    modal: {
      type: String,
      default: 'fwk/components/CommonModal.vue'
    },
    auth_str: {
      type: String
    },
    data_path: {
      type: String
    },
    api_path: {
      type: String
    },
    form_path: {
      type: String
    }
  });
  const auth_add = props.auth_str + ':add';
  const auth_delete = props.auth_str + ':delete';
  const auth_deleteBatch = props.auth_str + ':deleteBatch';
  const auth_edit = props.auth_str + ':edit';
  const auth_exportXls = props.auth_str + ':exportXls';
  const auth_importExcel = props.auth_str + ':importExcel';

  const useModal = ref(false);
  const form_path = '/@/views/sofree/' + props.form_path;
  const modal_path = '/@/views/sofree/' +  (useModal.value ? props.modal:props.drawer);
  const data_path = '/@/views/sofree/' + props.data_path;
  const api_path = '/@/views/sofree/' + props.api_path;

  
  const { columns, searchFormSchema, superQuerySchema } = await import(data_path);
  const { list, deleteOne, batchDelete, getImportUrl, getExportUrl } = await import(api_path);

  import { ref, reactive, defineAsyncComponent  } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  
  //import { downloadFile } from '/@/utils/common/renderUtils';
  import { useDrawer } from '/@/components/Drawer';
  import { useUserStore } from '/@/store/modules/user';

  const formRef = ref();
  const queryParam = reactive<any>({});
  //const toggleSearchStatus = ref<boolean>(false);
  const registerModal = ref();
  const userStore = useUserStore();

  const CommonModal = defineAsyncComponent(() => import(modal_path));

  const [registerDrawer, { openDrawer }] = useDrawer();
  //注册table数据
  const { prefixCls, tableContext, onExportXls, onImportXls } = useListPage({
    tableProps: {
      title: props.title,
      api: list,
      columns,
      //canResize:true,
      //useSearchForm: true,
      size: 'small',
      formConfig: {
        schemas: searchFormSchema,
      },
      actionColumn: {
        width: 120,
        fixed: 'right',
      },
      beforeFetch: async (params) => {
        return Object.assign(params, queryParam);
      },
    },
    exportConfig: {
      name: props.title,
      url: getExportUrl,
      params: queryParam,
    },
	  importConfig: {
	    url: getImportUrl,
	    success: handleSuccess
	  },
  });
  const [registerTable, { reload, collapseAll, updateTableDataRecord, findTableDataRecord, getDataSource }, { rowSelection, selectedRowKeys }] = tableContext;
  const labelCol = reactive({
    xs:24,
    sm:4,
    xl:6,
    xxl:4
  });
  const wrapperCol = reactive({
    xs: 24,
    sm: 20,
  });

  // 高级查询配置
  const superQueryConfig = reactive(superQuerySchema);

  /**
   * 高级查询事件
   */
  function handleSuperQuery(params) {
    Object.keys(params).map((k) => {
      queryParam[k] = params[k];
    });
    searchQuery();
  }

  /**
   * 新增事件
   */
  function handleAdd() { 
    if(!useModal.value){
      openDrawer(true, {
        isUpdate: false,
        showFooter: true
      });
    } else {
      registerModal.value.disableSubmit = false;
      registerModal.value.add();
    }
  }
  
  /**
   * 编辑事件
   */
  function handleEdit(record: Recordable) {
    if(!useModal.value){
      openDrawer(true, {
        record,
        isUpdate: true,
        showFooter: true
      });
    } else {
      registerModal.value.disableSubmit = false;
      registerModal.value.edit(record);
    }
  }
   
  /**
   * 详情
   */
  function handleDetail(record: Recordable) {
    if(!useModal.value){
      openDrawer(true, {
        record,
        isUpdate: true,
        showFooter: false
      });
    } else {
      registerModal.value.disableSubmit = true;
      registerModal.value.edit(record);
    }
  }
   
  /**
   * 删除事件
   */
  async function handleDelete(record) {
    await deleteOne({ id: record.id }, handleSuccess);
  }
   
  /**
   * 批量删除事件
   */
  async function batchHandleDelete() {
    await batchDelete({ ids: selectedRowKeys.value }, handleSuccess);
  }
   
  /**
   * 成功回调
   */
  function handleSuccess() {
    (selectedRowKeys.value = []) && reload();
  }
   
  /**
   * 操作栏
   */
  function getTableAction(record) {
    return [
      {
        label: '编辑',
        onClick: handleEdit.bind(null, record),
        auth: auth_edit
      },
    ];
  }
   
  /**
   * 下拉操作栏
   */
  function getDropDownAction(record) {
    return [
      {
        label: '详情',
        onClick: handleDetail.bind(null, record),
      }, {
        label: '删除',
        popConfirm: {
          title: '是否确认删除',
          confirm: handleDelete.bind(null, record),
          placement: 'topLeft',
        },
        auth: auth_delete
      }
    ]
  }

  /**
   * 查询
   */
  function searchQuery() {
    reload();
  }
  
  /**
   * 重置
   */
  function searchReset() {
    formRef.value.resetFields();
    selectedRowKeys.value = [];
    //刷新数据
    reload();
  }
  



</script>

<style lang="less" scoped>
  .jeecg-basic-table-form-container {
    padding: 0;
    .table-page-search-submitButtons {
      display: block;
      margin-bottom: 24px;
      white-space: nowrap;
    }
    .query-group-cust{
      min-width: 100px !important;
    }
    .query-group-split-cust{
      width: 30px;
      display: inline-block;
      text-align: center
    }
    .ant-form-item:not(.ant-form-item-with-help){
      margin-bottom: 16px;
      height: 32px;
    }
    :deep(.ant-picker),:deep(.ant-input-number){
      width: 100%;
    }
  }
</style>
