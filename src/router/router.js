import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//默认页面
const Default = resolve => {
    require.ensure(['../component/default.vue'], () => {
        resolve(require('../component/default.vue'))
    })
}

const Test = resolve => {
    // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
    // （代码分块）
    require.ensure(['../component/custom/Test.vue'], () => {
        resolve(require('../component/custom/Test.vue'))
    })
}

//系统设置=>地区管理
const Region = resolve => {
    require.ensure(['../component/system/region.vue'], () => {
        resolve(require('../component/system/region.vue'))
    })
}
	//系统设置=>院区管理
	const Campus = resolve => {
	    require.ensure(['../component/system/campus.vue'], () => {
	        resolve(require('../component/system/campus.vue'))
	    })
	}
	//系统设置=>角色管理
	const Role = resolve => {
	    require.ensure(['../component/system/role.vue'], () => {
	        resolve(require('../component/system/role.vue'))
	    })
	}
	//系统设置=>用户管理
	const User = resolve => {
	    require.ensure(['../component/system/user.vue'], () => {
	        resolve(require('../component/system/user.vue'))
	    })
	}
	//系统设置=>平台字典
	const Dictionary = resolve => {
	    require.ensure(['../component/system/dictionary.vue'], () => {
	        resolve(require('../component/system/dictionary.vue'))
	    })
	}
	//系统设置=>平台参数
	const Parameter = resolve => {
	    require.ensure(['../component/system/parameter.vue'], () => {
	        resolve(require('../component/system/parameter.vue'))
	    })
	}
	//系统设置=>日志管理
	const Log = resolve => {
	    require.ensure(['../component/system/log.vue'], () => {
	        resolve(require('../component/system/log.vue'))
	    })
	}




//放射设置=>其他设置=>快捷代码
const ShortcutCode = resolve => {
        require.ensure(['../component/radiation/other/shortcutCode.vue'], () => {
            resolve(require('../component/radiation/other/shortcutCode.vue'))
        })
    }
    //放射设置=>其他设置=>检查类型
   	const ExamineType = resolve => {
   	    require.ensure(['../component/radiation/other/examineType.vue'], () => {
   	        resolve(require('../component/radiation/other/examineType.vue'))
   	    })
   	}

	//放射设置=>其他设置=>检查项目
	const ExamineProject = resolve => {
	    require.ensure(['../component/radiation/other/examineProject.vue'], () => {
	        resolve(require('../component/radiation/other/examineProject.vue'))
	    })
	}

	//放射设置=>其他设置=>检查参数
	const ExamineArguments = resolve => {
	    require.ensure(['../component/radiation/other/examineArguments.vue'], () => {
	        resolve(require('../component/radiation/other/examineArguments.vue'))
	    })
	}

	//放射设置=>其他设置=>就诊类别
	const DiagnoseType = resolve => {
	    require.ensure(['../component/radiation/other/diagnoseType.vue'], () => {
	        resolve(require('../component/radiation/other/diagnoseType.vue'))
	    })
	}

	//放射设置=>其他设置=>造影剂
	const ContrastAgent = resolve => {
	    require.ensure(['../component/radiation/other/contrastAgent.vue'], () => {
	        resolve(require('../component/radiation/other/contrastAgent.vue'))
	    })
	}

	//放射设置=>其他设置=>检查部位
	const CheckBody = resolve => {
	    require.ensure(['../component/radiation/other/checkBody.vue'], () => {
	        resolve(require('../component/radiation/other/checkBody.vue'))
	    })
	}






//放射设置=>系统设置=>放射插件
const RadiationPlugin = resolve => {
    require.ensure(['../component/radiation/system/radiationPlugin.vue'], () => {
        resolve(require('../component/radiation/system/radiationPlugin.vue'))
    })
}






//放射设置=>模板设置=>快速书写模板
const FastWrite = resolve => {
        require.ensure(['../component/radiation/template/fastWrite.vue'], () => {
            resolve(require('../component/radiation/template/fastWrite.vue'))
        })
    }
    //放射设置=>模板设置=>质控评分模板
	const ReportWrite = resolve => {
	        require.ensure(['../component/radiation/template/reportWrite.vue'], () => {
	            resolve(require('../component/radiation/template/reportWrite.vue'))
	        })
	    }
	//放射设置=>模板设置=>报告书写模板
	const QualityScore = resolve => {
	    require.ensure(['../component/radiation/template/qualityScore.vue'], () => {
	        resolve(require('../component/radiation/template/qualityScore.vue'))
	    })
	}

const routes= [
	{	path: '/shortcutCode',			component: ShortcutCode, 	    name: '快捷代码'},
	{	path: '/examineType',			component: ExamineType, 	    name: '检查类型'},
	{	path: '/examineProject',		component: ExamineProject,      name: '检查项目'},
	{	path: '/examineArguments',		component: ExamineArguments,	name: '检查参数'},
	{	path: '/diagnoseType',			component: DiagnoseType, 		name: '就诊类别'},
	{	path: '/contrastAgent',			component: ContrastAgent, 		name: '造影剂'},
	{	path: '/checkBody',				component: CheckBody, 			name: '检查部位'},
	{	path: '/fastWrite',				component: FastWrite, 			name: '快速书写模板'},
	{	path: '/reportWrite',			component: ReportWrite, 		name: '质控评分模板'},
	{	path: '/qualityScore',			component: QualityScore, 		name: '报告书写模板'},
	{	path: '/region',				component: Region, 				name: '地区管理'},
	{	path: '/campus',				component: Campus, 				name: '院区管理'},
	{	path: '/role',					component: Role, 				name: '角色管理'},
	{	path: '/user',					component: User, 				name: '用户管理'},
	{	path: '/dictionary',			component: Dictionary, 			name: '平台字典'},
	{	path: '/parameter',				component: Parameter, 			name: '平台参数'},
	{	path: '/log',					component: Log, 				name: '日志管理'},
	{	path: '/radiationPlugin',		component: RadiationPlugin, 	name: '放射插件'},
	{	path: '/default',				component: Default, 			name: '默认首页'},
	{	path: '/Test',					component: Test, 				name: '公用模块'},
    {	path: '*',					 	redirect: '/default'}
]

const router = new VueRouter({
    // mode:'history',
    // base: __dirname,
    routes,
})

//全局路由钩子
router.afterEach((route) => {})

export default router;
