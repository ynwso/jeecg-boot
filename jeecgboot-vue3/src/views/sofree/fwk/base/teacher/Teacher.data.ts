import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import { getWeekMonthQuarterYear } from '/@/utils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '工号',
    align: "center",
    dataIndex: 'gh',
    sorter: true,
    fixed: 'left',
  },
  {
    title: '姓名',
    align: "center",
    dataIndex: 'name',
    sorter: true,
  },
  {
    title: '性别',
    align: "center",
    dataIndex: 'genderId_dictText',
    sorter: true,
  },
  {
    title: '所属部门',
    align: "center",
    dataIndex: 'departId_dictText',
    sorter: true,
  },
  {
    title: '联系电话',
    align: "center",
    dataIndex: 'mobile'
  },
  {
    title: '学历',
    align: "center",
    dataIndex: 'xlId_dictText',
    sorter: true,
  },
  {
    title: '学位',
    align: "center",
    dataIndex: 'xwId_dictText',
    sorter: true,
  },
  {
    title: '行政职务',
    align: "center",
    dataIndex: 'zwId_dictText'
  },
  {
    title: '职务级别',
    align: "center",
    dataIndex: 'zwjbId_dictText'
  },
  {
    title: '编制类别',
    align: "center",
    dataIndex: 'bzlbId_dictText'
  },
  {
    title: '教职工类别',
    align: "center",
    dataIndex: 'jzglbId_dictText'
  },
  {
    title: '所在岗位',
    align: "center",
    dataIndex: 'szgwId_dictText'
  },
  {
    title: '辅导员类型',
    align: "center",
    dataIndex: 'fdylxId_dictText',
    sorter:true
  },
  {
    title: '当前状态',
    align: "center",
    dataIndex: 'dqztId_dictText',
    sorter:true
  },
  {
    title: '外聘',
    align: "center",
    dataIndex: 'izWp_dictText'
  },
  {
    title: '在岗',
    align: "center",
    dataIndex: 'izOnDuty_dictText',
    sorter:true
  },
  {
    title: '个人照片',
    align: "center",
    dataIndex: 'photo',
    customRender: render.renderImage,
  },
];

export const defSort: Recordable = {
  column: 'gh',
  order: 'asc'
}

export const searchFormSchema: FormSchema[] = [
  {
    label: '部门',
    field: "departId",
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: "t_base_depart,depart_name,id",
      placeholder: '请选择所属部门',
      //stringToNumber: true,
    },
    //colProps: { span: 6 },
  },
  {
    label: '工号',
    field: 'gh',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    label: '姓名',
    field: 'name',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    label: '性别',
    field: 'genderId',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: "sex",
      placeholder: '请选择性别',
      stringToNumber: true,
    },
    colProps: { span: 6 },
  },
  {
    label: '外聘',
    field: 'izWp',
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: "yn",
      placeholder: '请选择',
      stringToNumber: true,
    },
    colProps: { span: 6 },
  },
];

// 高级查询数据
export const superQuerySchema = {
  gh: {title: '工号',order: 0,view: 'text', type: 'string',},
  name: {title: '姓名',order: 1,view: 'text', type: 'string',},
  genderId: {title: '性别',order: 2,view: 'text', type: 'string',},
  departId: {title: '所属部门',order: 3,view: 'list', type: 'string',dictTable: "t_base_depart", dictCode: 'id', dictText: 'depart_name',},
  mobile: {title: '联系电话',order: 7,view: 'text', type: 'string',},
  xlId: {title: '学历',order: 24,view: 'list', type: 'string',dictCode: 'gb_xl',},
  xwId: {title: '学位',order: 25,view: 'list', type: 'string',dictCode: 'gb_xw',},
  zwId: {title: '行政职务',order: 28,view: 'list', type: 'string',dictCode: 'sf_zw',},
  zwjbId: {title: '职务级别',order: 29,view: 'list', type: 'string',dictCode: 'gb_zwjb',},
  bzlbId: {title: '编制类别',order: 33,view: 'list', type: 'string',dictCode: 'gb_bzlb',},
  jzglbId: {title: '教职工类别',order: 34,view: 'list', type: 'string',dictCode: 'gb_jzglb',},
  szgwId: {title: '所在岗位',order: 35,view: 'list', type: 'string',dictCode: 'gb_gwzy',},
  fdylxId: {title: '辅导员类型',order: 37,view: 'list', type: 'string',dictCode: 'sf_fdylx',},
  dqztId: {title: '当前状态',order: 38,view: 'list', type: 'string',dictCode: 'gb_jzgdqzt',},
  izWp: {title: '外聘',order: 41,view: 'radio', type: 'string',dictCode: 'yn',},
  izOnDuty: {title: '在岗',order: 44,view: 'radio', type: 'string',dictCode: 'yn',},
  photo: {title: '个人照片',order: 45,view: 'image', type: 'string',},
};
