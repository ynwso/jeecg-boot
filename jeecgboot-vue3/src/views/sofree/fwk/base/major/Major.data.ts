import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import { getWeekMonthQuarterYear } from '/@/utils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '专业代码',
    align: "center",
    dataIndex: 'majorCode',
    sorter: true,
    //defaultSortOrder: 'ascend',
    //resizable: true, //配置列可伸缩
    //sortOrder : 'descend',
    //sortDirections : ['ascend', 'descend'],
  },
  {
    title: '专业名称',
    align: "center",
    dataIndex: 'majorName',
    sorter: true,
  },
  {
    title: '英文名称',
    align: "center",
    dataIndex: 'majorNameEn'
  },
  {
    title: '所属院/系/部',
    align: "center",
    dataIndex: 'departId_dictText',
    sorter: true,
    //defaultSortOrder: 'ascend',
  },
  {
    title: '学制',
    align: "center",
    dataIndex: 'xz'
  },
  {
    title: '专业类型',
    align: "center",
    dataIndex: 'gbzyType_dictText'
  },
  {
    title: '专业目录',
    align: "center",
    dataIndex: 'gbzyId_dictText'
  },
  {
    title: '所属学科',
    align: "center",
    dataIndex: 'xkId_dictText'
  },
  {
    title: '培养层次',
    align: "center",
    dataIndex: 'pyccId_dictText'
  },
  {
    title: '授予学位',
    align: "center",
    dataIndex: 'syxwId_dictText'
  },
  {
    title: '师范',
    align: "center",
    dataIndex: 'izSf_dictText'
  },
  {
    title: 'QQ群号',
    align: "center",
    dataIndex: 'qqqh'
  },
  {
    title: '专业简介',
    align: "center",
    dataIndex: 'memo'
  },
  {
    title: '状态',
    align: "center",
    dataIndex: 'zt_dictText',
    sorter: true,
  },
];

export const defSort: Recordable = {
  column: 'majorCode',
  order: 'asc'
}

export const searchFormSchema: FormSchema[] = [
  {
    label: '院/系/部',
    field: "departId",
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: "t_base_depart,depart_name,id,bmjb=1 and bmlb_id=1",
      placeholder: '请选择所属院/系/部',
      //stringToNumber: true,
    },
    //colProps: { span: 6 },
  },
  {
    label: '专业代码',
    field: 'majorCode',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    label: '专业名称',
    field: 'majorName',
    component: 'JInput',
    colProps: { span: 6 },
  },
];

// 高级查询数据
export const superQuerySchema = {
  majorCode: {title: '专业代码',order: 0,view: 'text', type: 'string',},
  majorName: {title: '专业名称',order: 1,view: 'text', type: 'string',},
  majorNameEn: {title: '英文名称',order: 3,view: 'text', type: 'string',},
  departId: {title: '所属院/系/部',order: 5,view: 'list', type: 'string',dictTable: "t_base_depart", dictCode: 'id', dictText: 'depart_name',},
  xz: {title: '学制',order: 6,view: 'number', type: 'number',},
  gbzyType: {title: '专业类型',order: 7,view: 'list', type: 'string',dictCode: 'sf_gbzy_lx',},
  gbzyId: {title: '专业目录',order: 8,view: 'list', type: 'string',dictCode: 'gb_gbzy',},
  xkId: {title: '所属学科',order: 9,view: 'list', type: 'string',dictCode: 'gb_yjxk',},
  pyccId: {title: '培养层次',order: 10,view: 'list', type: 'string',dictCode: 'gb_pycc',},
  syxwId: {title: '授予学位',order: 11,view: 'list', type: 'string',dictCode: 'gb_xw',},
  izSf: {title: '师范',order: 12,view: 'radio', type: 'string',dictCode: 'yn',},
  qqqh: {title: 'QQ群号',order: 13,view: 'text', type: 'string',},
  memo: {title: '专业简介',order: 14,view: 'text', type: 'string',},
  zt: {title: '状态',order: 15,view: 'radio', type: 'string',dictCode: 'sf_status',},
};
