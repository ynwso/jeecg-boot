import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import { getWeekMonthQuarterYear } from '/@/utils';
import { duplicateValidate } from '/@/utils/helper/validator';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '校区代码',
    align: "center",
    dataIndex: 'campusCode',
    sorter: true,
  },
  {
    title: '校区名称',
    align: "center",
    dataIndex: 'campusName',
    sorter: true,
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

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '校区代码',
    field: 'campusCode',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 
                 {asyncValidator : () => {return duplicateValidate('t_base_campus', 'campus_code', model.campusCode, model.id)} }
          ];
     },
  },
  {
    label: '校区名称',
    field: 'campusName',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入校区名称!'},
          ];
     },
  },
  {
    label: '校区简称',
    field: 'campusNameAbbr',
    component: 'Input',
  },
  {
    label: '地址',
    field: 'address',
    component: 'Input',
  },
  {
    label: '邮编',
    field: 'zipcode',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'memo',
    component: 'Input',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];

export const defSort: Recordable = {
  column: 'campusCode',
  order: 'asc'
}

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
