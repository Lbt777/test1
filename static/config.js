/**
 * @estimateStartTime string 00:00
 * @estimateEndTime string 00:00
 * @jobStartTime string 00:00
 * @jobEndTime string 00:00
 * @organizationcode string|number
 * @abbreviation string|number
 * @Readonly Boolean
 */

export default {
	estimateStartTime: "10:00", // 预约开始
	estimateEndTime: "11:00", // 预约结束
	estimateReadonly: false, // 预约只读不可修改
	jobStartTime: "12:00", // 营业开始
	jobEndTime: "21:00", // 营业结束
	jobReadonly: false, // 营业只读不可修改
	organizationcode: '9999', // 画室号
	organizationcodeReadonly: true, // 画室号只读不可修改
	abbreviation: '11111', // 画室编码
	abbreviationReadonly: true // 画室编码只读不可修改
}
