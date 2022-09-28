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
	estimateEndTime: "12:00", // 预约结束
	estimateReadonly: false, // 预约只读不可修改
	jobStartTime: "", // 营业开始
	jobEndTime: "", // 营业结束
	jobReadonly: false, // 营业只读不可修改
	organizationcode: '', // 画室号
	organizationcodeReadonly: false, // 画室号只读不可修改
	abbreviation: '', // 画室编码
	abbreviationReadonly: false // 画室编码只读不可修改
}
