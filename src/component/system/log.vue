<template>
    <section class="log">
        <header class="this_header">
            <el-breadcrumb separator="/" class="crumbs">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>系统设置</el-breadcrumb-item>
                <el-breadcrumb-item>日志管理</el-breadcrumb-item>
            </el-breadcrumb>
            <nav class="this_nav">
                <span class="demonstration">日志类型:</span>
                <el-cascader placeholder="请选择日志类型" :options="options" filterable change-on-select></el-cascader>
                <span class="demonstration">操作日期:</span>
                <el-date-picker type="datetimerange" v-model="date" :picker-options="pickerOptions2" placeholder="选择时间范围" align="center">
                </el-date-picker>
                <el-button type="primary" class="btn">查询</el-button>
                <el-button :plain="true" type="info" class="btn">重置</el-button>
            </nav>
        </header>
        <h2 class="total">
            <!-- <el-button type="primary" @click="dialogFormVisible = true" class="btn">新建</el-button> -->
            <el-button class='refresh' type="primary" :loading="false">刷新</el-button>
            共 <em class="em">1000</em> 条记录
        </h2>
        <section class="this_section">
            <template>
                <el-table stripe class="this_table" :data="tableData3" border style="width: 100%">
                    <el-table-column label="操作" width="80">
                        <template scope="scope">
                            <el-button @click="dialogFormVisible = true" size="mini" :plain="true" type="success" icon="warning"></el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="date" label="日志类型">
                    </el-table-column>
                    <el-table-column prop="name" label="操作用户">
                    </el-table-column>
                    <el-table-column prop="address" label="ip地址">
                    </el-table-column>
                    <el-table-column prop="address" label="操作时间">
                    </el-table-column>
                    <el-table-column prop="address" label="日志内容">
                    </el-table-column>
                </el-table>
            </template>
        </section>
        <aside class="alert">
            <el-dialog title="查看系统日志" v-model="dialogFormVisible">
                <section class="alert_conetnt">
                    <el-row>
                        <el-col :span="12">
                            <span class="six">日志类型:</span>
                            <span>sdasdasdasd</span>
                            <span></span>
                        </el-col>
                        <el-col :span="12">
                            <span class="six">操作用户:</span>
                            <span>默认开发商</span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <span class="six"> IP地址:</span>
                            <span>sdasdasdasd</span>
                            <span></span>
                        </el-col>
                        <el-col :span="12">
                            <span class="six">操做时间:</span>
                            <span>默认开发商</span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <span class="six">日志内容:</span>
                            <el-input type="textarea" :rows="12" placeholder="请输入内容">
                            </el-input>
                        </el-col>
                    </el-row>
                </section>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false;resetForm('form')">关 闭</el-button>
                </div>
            </el-dialog>
        </aside>
    </section>
</template>
<script>
export default {
    data() {
            return {
                date:'',
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                input: '',
                dialogFormVisible: false,
                formLabelWidth: '120px',
                rules: {
                    name: [{
                        required: true,
                        message: '请输入活动名称',
                        trigger: 'blur'
                    }, {
                        min: 3,
                        max: 5,
                        message: '长度在 3 到 5 个字符',
                        trigger: 'blur'
                    }],
                    region: [{
                        required: true,
                        message: '请选择活动区域',
                        trigger: 'change'
                    }],
                    date1: [{
                        type: 'date',
                        required: true,
                        message: '请选择日期',
                        trigger: 'change'
                    }],
                    date2: [{
                        type: 'date',
                        required: true,
                        message: '请选择时间',
                        trigger: 'change'
                    }],
                    type: [{
                        type: 'array',
                        required: true,
                        message: '请至少选择一个活动性质',
                        trigger: 'change'
                    }],
                    resource: [{
                        required: true,
                        message: '请选择活动资源',
                        trigger: 'change'
                    }],
                    desc: [{
                        required: true,
                        message: '请填写活动形式',
                        trigger: 'blur'
                    }]
                },
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                options: [{
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                            value: 'yizhi',
                            label: '一致'
                        }, {
                            value: 'fankui',
                            label: '反馈'
                        }, {
                            value: 'xiaolv',
                            label: '效率'
                        }, {
                            value: 'kekong',
                            label: '可控'
                        }]
                    }, {
                        value: 'daohang',
                        label: '导航',
                        children: [{
                            value: 'cexiangdaohang',
                            label: '侧向导航'
                        }, {
                            value: 'dingbudaohang',
                            label: '顶部导航'
                        }]
                    }]
                }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                        value: 'basic',
                        label: 'Basic',
                        children: [{
                            value: 'layout',
                            label: 'Layout 布局'
                        }, {
                            value: 'color',
                            label: 'Color 色彩'
                        }, {
                            value: 'typography',
                            label: 'Typography 字体'
                        }, {
                            value: 'icon',
                            label: 'Icon 图标'
                        }, {
                            value: 'button',
                            label: 'Button 按钮'
                        }]
                    }, {
                        value: 'form',
                        label: 'Form',
                        children: [{
                            value: 'radio',
                            label: 'Radio 单选框'
                        }, {
                            value: 'checkbox',
                            label: 'Checkbox 多选框'
                        }, {
                            value: 'input',
                            label: 'Input 输入框'
                        }, {
                            value: 'input-number',
                            label: 'InputNumber 计数器'
                        }, {
                            value: 'select',
                            label: 'Select 选择器'
                        }, {
                            value: 'cascader',
                            label: 'Cascader 级联选择器'
                        }, {
                            value: 'switch',
                            label: 'Switch 开关'
                        }, {
                            value: 'slider',
                            label: 'Slider 滑块'
                        }, {
                            value: 'time-picker',
                            label: 'TimePicker 时间选择器'
                        }, {
                            value: 'date-picker',
                            label: 'DatePicker 日期选择器'
                        }, {
                            value: 'datetime-picker',
                            label: 'DateTimePicker 日期时间选择器'
                        }, {
                            value: 'upload',
                            label: 'Upload 上传'
                        }, {
                            value: 'rate',
                            label: 'Rate 评分'
                        }, {
                            value: 'form',
                            label: 'Form 表单'
                        }]
                    }, {
                        value: 'data',
                        label: 'Data',
                        children: [{
                            value: 'table',
                            label: 'Table 表格'
                        }, {
                            value: 'tag',
                            label: 'Tag 标签'
                        }, {
                            value: 'progress',
                            label: 'Progress 进度条'
                        }, {
                            value: 'tree',
                            label: 'Tree 树形控件'
                        }, {
                            value: 'pagination',
                            label: 'Pagination 分页'
                        }, {
                            value: 'badge',
                            label: 'Badge 标记'
                        }]
                    }, {
                        value: 'notice',
                        label: 'Notice',
                        children: [{
                            value: 'alert',
                            label: 'Alert 警告'
                        }, {
                            value: 'loading',
                            label: 'Loading 加载'
                        }, {
                            value: 'message',
                            label: 'Message 消息提示'
                        }, {
                            value: 'message-box',
                            label: 'MessageBox 弹框'
                        }, {
                            value: 'notification',
                            label: 'Notification 通知'
                        }]
                    }, {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [{
                            value: 'menu',
                            label: 'NavMenu 导航菜单'
                        }, {
                            value: 'tabs',
                            label: 'Tabs 标签页'
                        }, {
                            value: 'breadcrumb',
                            label: 'Breadcrumb 面包屑'
                        }, {
                            value: 'dropdown',
                            label: 'Dropdown 下拉菜单'
                        }, {
                            value: 'steps',
                            label: 'Steps 步骤条'
                        }]
                    }, {
                        value: 'others',
                        label: 'Others',
                        children: [{
                            value: 'dialog',
                            label: 'Dialog 对话框'
                        }, {
                            value: 'tooltip',
                            label: 'Tooltip 文字提示'
                        }, {
                            value: 'popover',
                            label: 'Popover 弹出框'
                        }, {
                            value: 'card',
                            label: 'Card 卡片'
                        }, {
                            value: 'carousel',
                            label: 'Carousel 走马灯'
                        }, {
                            value: 'collapse',
                            label: 'Collapse 折叠面板'
                        }]
                    }]
                }, {
                    value: 'ziyuan',
                    label: '资源',
                    children: [{
                        value: 'axure',
                        label: 'Axure Components'
                    }, {
                        value: 'sketch',
                        label: 'Sketch Templates'
                    }, {
                        value: 'jiaohu',
                        label: '组件交互文档'
                    }]
                }],
                tableData3: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            };
        },
        methods: {
            submitForm(formName) {
                // this.$refs[formName].validate((valid) => {
                //   if (valid) {
                //     alert('submit!');
                //   } else {
                //     console.log('error submit!!');
                //     return false;
                //   }
                // });
            },
            resetForm(formName) {
                // this.$refs[formName].resetFields();
            }
        }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/element.less";
.log {
    .this_header {
        // padding-top: 10px;
        height: 100px;
        .crumbs {
            // margin: 15px 30px;
            width: 96%;
            margin: 10px auto;
        }
        .this_nav {
            background: #f2f2f2;
            width: 96%;
            margin: 10px auto;
            padding: 1em;
            padding-left: none;
            display: flex;
            align-items: center;
            .demonstration {
                margin-right: 1em;
                margin-left: 1em;
            }
            .el-input,
            .el-select {
                width: 190px;
            }
            .btn {
                margin-left: 1em;
            }
            // border-top: 1px solid rgb(238, 246, 243);
            // margin-top: 30px;
        }
    }
    .total {
        // border:1px solid red;
        font-size: 14px;
        width: 96%;
        margin: 10px auto 0;
        text-align: right;
        // letter-spacing:1px;
        .refresh {
            margin-right: 15px;
        }
    }
    .this_section {
        display: flex;
        width: 96%;
        margin: 10px auto 0;
        flex-shrink: 2;
        height: 100%;
        .this_table {
            height: 100%;
            .cell {
                text-align: center;
            }
            .icon {
                width: 20px;
                &:hover {
                    color: #4bc889;
                }
            }
        }
    }
    .alert {
        .el-input,
        .el-select {
            width: 190px;
        }
        .long {
            .el-input,
            .el-select {
                width: 543px;
            }
        }
        .alert_conetnt {
            width: 80%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            .el-row {
                min-height: 3em;
                // display:flex;
                // align-items:center;
            }
        }
        .new_region {
            .label {
                width: 80px;
                text-align: right;
                vertical-align: middle;
                float: left;
                font-size: 14px;
                line-height: 1;
                padding: 11px 12px 11px 0;
            }
        }
    }
}
</style>
