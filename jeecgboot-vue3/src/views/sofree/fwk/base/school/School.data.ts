import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import { getWeekMonthQuarterYear } from '/@/utils';

//列表数据
export const columns: BasicColumn[] = [
  {
    title: '学校编码',
    align: "center",
    dataIndex: 'schoolCode'
  },
  {
    title: '学校名称',
    align: "center",
    dataIndex: 'schoolName'
  },
  {
    title: '学校简称',
    align: "center",
    dataIndex: 'schoolNameAbbr'
  },
  {
    title: '英文名称',
    align: "center",
    dataIndex: 'schoolNameEn'
  },
  {
    title: '英文简称',
    align: "center",
    dataIndex: 'schoolNameEnAbbr'
  },
  {
    title: '学校性质',
    align: "center",
    dataIndex: 'xxxzId_dictText'
  },
  {
    title: '学校举办者',
    align: "center",
    dataIndex: 'jbzId_dictText'
  },
  {
    title: '办学类型',
    align: "center",
    dataIndex: 'bxlxId_dictText'
  },
  {
    title: '主管部门',
    align: "center",
    dataIndex: 'zgbm'
  },
  {
    title: '书记',
    align: "center",
    dataIndex: 'secretary'
  },
  {
    title: '校长',
    align: "center",
    dataIndex: 'headmaster'
  },
  
  {
    title: '联系人',
    align: "center",
    dataIndex: 'contact'
  },
  {
    title: '联系电话',
    align: "center",
    dataIndex: 'phone'
  },
  {
    title: '传真',
    align: "center",
    dataIndex: 'fax'
  },
  {
    title: '电子邮箱',
    align: "center",
    dataIndex: 'email'
  },
  
  {
    title: '网址',
    align: "center",
    dataIndex: 'website'
  },
  
  {
    title: '所在省市区',
    align: "center",
    key: 'locationId',
    dataIndex: 'locationId',
  },
  {
    title: '地址',
    align: "center",
    dataIndex: 'address'
  },
  {
    title: '邮编',
    align: "center",
    dataIndex: 'zipcode'
  },
  {
    title: 'QQ群号',
    align: "center",
    dataIndex: 'qqqh'
  },
  
];

export const defSort: Recordable = {
  
}

// 高级查询数据
export const superQuerySchema = {
  schoolCode: {title: '学校编码',order: 0,view: 'text', type: 'string',},
  schoolName: {title: '学校名称',order: 1,view: 'text', type: 'string',},
  schoolNameAbbr: {title: '学校简称',order: 2,view: 'text', type: 'string',},
  schoolNameEn: {title: '英文名称',order: 3,view: 'text', type: 'string',},
  schoolNameEnAbbr: {title: '英文简称',order: 4,view: 'text', type: 'string',},
  xxxzId: {title: '学校性质',order: 5,view: 'list', type: 'string',dictCode: 'dm_xxxz',},
  jbzId: {title: '学校举办者',order: 19,view: 'list', type: 'string',dictCode: 'dm_xxjbz',},
  bxlxId: {title: '办学类型',order: 6,view: 'list', type: 'string',dictCode: 'dm_bxlx',},
  zgbm: {title: '主管部门',order: 7,view: 'text', type: 'string',},
  headmaster: {title: '校长',order: 8,view: 'text', type: 'string',},
  secretary: {title: '书记',order: 9,view: 'text', type: 'string',},
  contact: {title: '联系人',order: 10,view: 'text', type: 'string',},
  phone: {title: '联系电话',order: 11,view: 'text', type: 'string',},
  fax: {title: '传真',order: 12,view: 'text', type: 'string',},
  email: {title: '电子邮箱',order: 13,view: 'text', type: 'string',},
  website: {title: '网址',order: 15,view: 'text', type: 'string',},
  locationId: {title: '所在省市区',order: 17,view: 'list', type: 'string',dictCode: '',},
  address: {title: '地址',order: 14,view: 'text', type: 'string',},
  zipcode: {title: '邮编',order: 16,view: 'text', type: 'string',},
  qqqh: {title: 'QQ群号',order: 18,view: 'text', type: 'string',},
  
};
