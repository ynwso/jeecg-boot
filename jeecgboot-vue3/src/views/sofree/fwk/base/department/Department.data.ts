import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
//import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//import { getWeekMonthQuarterYear } from '/@/utils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '部门代码',
    align: 'center',
    dataIndex: 'departCode',
    sorter: true,
  },
  {
    title: '部门名称',
    align: 'left',
    dataIndex: 'departName',
    sorter: true,
  },
  {
    title: '部门简称',
    align: 'center',
    dataIndex: 'departNameAbbr'
  },
  {
    title: '英文名称',
    align: 'center',
    dataIndex: 'departNameEn'
  },
  {
    title: '状态',
    align: 'center',
    dataIndex: 'zt_dictText',
    sorter: true,
  },
  {
    title: '排序',
    align: 'center',
    dataIndex: 'px',
    sorter: true,
  },
  {
    title: '部门级别',
    align: 'center',
    dataIndex: 'bmjb_dictText'
  },
  {
    title: '部门类别',
    align: 'center',
    dataIndex: 'bmlbId_dictText',
    sorter: true,
  },
  {
    title: '联系人',
    align: 'center',
    dataIndex: 'lxr'
  },
  {
    title: '联系电话',
    align: 'center',
    dataIndex: 'phone'
  },
  {
    title: 'qq群号',
    align: 'center',
    dataIndex: 'qqqh'
  },
  {
    title: '签章',
    align: 'center',
    dataIndex: 'stampPath',
    customRender: render.renderImage,
  },
];

export const defSort: Recordable = {
  column: 'departCode',
  order: 'asc'
}

export const searchFormSchema: FormSchema[] = [
  {
    label: '部门代码',
    field: 'departCode',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    label: '部门名称',
    field: 'departName',
    component: 'JInput',
    colProps: { span: 6 },
  },
];
// 高级查询数据
export const superQuerySchema = {
  pid: {title: '上级部门',order: 0,view: 'list', type: 'string',dictCode: '',},
  departCode: {title: '部门代码',order: 1,view: 'text', type: 'string',},
  departName: {title: '部门名称',order: 2,view: 'text', type: 'string',},
  departNameAbbr: {title: '部门简称',order: 3,view: 'text', type: 'string',},
  departNameEn: {title: '英文名称',order: 4,view: 'text', type: 'string',},
  zt: {title: '状态',order: 5,view: 'text', type: 'string',},
  px: {title: '排序',order: 6,view: 'number', type: 'number',},
  bmjb: {title: '部门级别',order: 7,view: 'radio', type: 'string',dictCode: '',},
  bmlbId: {title: '部门类别',order: 8,view: 'list', type: 'string',dictCode: 'dm_dwlb',},
  lxr: {title: '联系人',order: 9,view: 'text', type: 'string',},
  phone: {title: '联系电话',order: 10,view: 'text', type: 'string',},
  fax: {title: '传真',order: 11,view: 'text', type: 'string',},
  email: {title: '电子邮箱',order: 12,view: 'text', type: 'string',},
  address: {title: '地址',order: 13,view: 'text', type: 'string',},
  zipcode: {title: '邮编',order: 14,view: 'text', type: 'string',},
  qqqh: {title: 'qq群号',order: 15,view: 'text', type: 'string',},
  stampPath: {title: '签章',order: 16,view: 'text', type: 'string',},
};
