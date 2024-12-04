import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import { getWeekMonthQuarterYear } from '/@/utils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '校区代码',
    align: "center",
    dataIndex: 'campusCode'
  },
  {
    title: '校区名称',
    align: "center",
    dataIndex: 'campusName'
  },
  {
    title: '校区简称',
    align: "center",
    dataIndex: 'campusNameAbbr'
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
    title: '备注',
    align: "center",
    dataIndex: 'memo'
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '校区代码',
    field: 'campusCode',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    label: '校区名称',
    field: 'campusName',
    component: 'JInput',
    colProps: { span: 6 },
  },
];

// 高级查询数据
export const superQuerySchema = {
  campusCode: {title: '校区代码',order: 0,view: 'text', type: 'string',},
  campusName: {title: '校区名称',order: 1,view: 'text', type: 'string',},
  campusNameAbbr: {title: '校区简称',order: 2,view: 'text', type: 'string',},
  address: {title: '地址',order: 3,view: 'text', type: 'string',},
  zipcode: {title: '邮编',order: 4,view: 'text', type: 'string',},
  memo: {title: '备注',order: 5,view: 'text', type: 'string',},
};
