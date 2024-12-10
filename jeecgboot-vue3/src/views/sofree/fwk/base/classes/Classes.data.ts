import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import { getWeekMonthQuarterYear } from '/@/utils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '班级代码',
    align: "center",
    sorter: true,
    dataIndex: 'classCode'
  },
  {
    title: '班级名称',
    align: "center",
    sorter: true,
    dataIndex: 'className'
  },
  {
    title: '所属年级',
    align: "center",
    sorter: true,
    dataIndex: 'nj',
    customRender:({text}) =>{
      text = !text ? "" : (text.length > 10 ? text.substr(0,10) : text);
      if(text) {
        return getWeekMonthQuarterYear(text)['year'];
      } else {
        return text;
      }
    },
  },
  {
    title: '所属院/系/部',
    align: "center",
    sorter: true,
    dataIndex: 'departId_dictText'
  },
  {
    title: '所属专业',
    align: "center",
    sorter: true,
    dataIndex: 'majorId_dictText'
  },
  {
    title: '所在校区',
    align: "center",
    sorter: true,
    dataIndex: 'campusId_dictText'
  },
  {
    title: '班级简称',
    align: "center",
    dataIndex: 'classNameAbbr'
  },
  {
    title: '班主任',
    align: "center",
    dataIndex: 'bzrId_dictText'
  },
  {
    title: '辅导员',
    align: "center",
    dataIndex: 'fdyId_dictText'
  },
  {
    title: '预设人数',
    align: "center",
    dataIndex: 'ysrs'
  },
  {
    title: 'QQ群号',
    align: "center",
    dataIndex: 'qqqh'
  },
  {
    title: '状态',
    align: "center",
    sorter: true,
    dataIndex: 'zt_dictText'
  },
  
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '院/系/部',
    field: "departId",
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: "t_base_depart,depart_name,id,bmjb=1 and bmlb_id=1",
      placeholder: '请选择所属院/系/部',
      //stringToNumber: true,
      onChange: (e) => {
        console.log("院系部："+e);
      }
    },
    //colProps: { span: 6 },
  },
  {
    label: '专业',
    field: "majorId",
    component: 'JDictSelectTag',
    componentProps: {
      dictCode: "t_base_major,major_name,id",
      placeholder: '请选择所属专业',
      //stringToNumber: true,
    },
    //colProps: { span: 6 },
  },
  {
    label: '班级代码',
    field: 'classCode',
    component: 'JInput',
    colProps: { span: 6 },
  },
  {
    label: '班级名称',
    field: 'className',
    component: 'JInput',
    colProps: { span: 6 },
  },
];


// 高级查询数据
export const superQuerySchema = {
  classCode: {title: '班级代码',order: 0,view: 'text', type: 'string',},
  className: {title: '班级名称',order: 1,view: 'text', type: 'string',},
  nj: {title: '所属年级',order: 2,view: 'date', type: 'string',},
  departId: {title: '所属院/系/部',order: 3,view: 'link_down', type: 'string',},
  majorId: {title: '所属专业',order: 4,view: 'link_down', type: 'string',},
  campusId: {title: '所在校区',order: 5,view: 'list', type: 'string',dictTable: "t_base_campus", dictCode: 'id', dictText: 'campus_name',},
  classNameAbbr: {title: '班级简称',order: 6,view: 'text', type: 'string',},
  bzrId: {title: '班主任',order: 7,view: 'list', type: 'string',dictTable: "t_base_teacher", dictCode: 'id', dictText: 'name',},
  fdyId: {title: '辅导员',order: 8,view: 'list', type: 'string',dictTable: "t_base_teacher", dictCode: 'id', dictText: 'name',},
  ysrs: {title: '预设人数',order: 9,view: 'text', type: 'string',},
  qqqh: {title: 'QQ群号',order: 10,view: 'text', type: 'string',},
  zt: {title: '状态',order: 11,view: 'radio', type: 'string',dictCode: 'sf_status',},
  memo: {title: '备注',order: 12,view: 'text', type: 'string',},
  tenantId: {title: '租户ID',order: 13,view: 'number', type: 'number',},
};
