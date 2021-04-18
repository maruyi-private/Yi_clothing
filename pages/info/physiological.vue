<template>
	<view class="uni-form-item">
	    <form @submit="formSubmit" @reset="formReset">
	        <!-- <view class="uni-form-item uni-column">
	            <view class="title">switch</view>
	            <view>
	                <switch name="switch" />
	            </view>
	        </view> -->
			<view class="uni-form-item uni-column">
			    <view class="title">姓名</view>
			    <input class="uni-input" name="input" placeholder="请输入姓名" />
			</view>
	        <view class="uni-form-item uni-column">
	            <view class="title">性别</view>
	            <radio-group name="radio">
	                <label>
	                    <radio value="radio1" /><text>男</text>
	                </label>
	                <label style="margin-left: 30rpx;">
	                    <radio value="radio2" /><text>女</text>
	                </label>
	            </radio-group>
	        </view>
	        <view class="uni-form-item uni-column">
	            <view class="title">身份</view>
	            <checkbox-group name="checkbox">
	                <label>
	                    <checkbox value="checkbox1" /><text>学生</text>
	                </label>
	                <label style="margin-left: 30rpx;">
	                    <checkbox value="checkbox2" /><text>在职</text>
	                </label>
					<label style="margin-left: 30rpx;">
					    <checkbox value="checkbox3" /><text>兼职</text>
					</label>
					<label style="margin-left: 30rpx;">
					    <checkbox value="checkbox4" /><text>退休</text>
					</label>
	            </checkbox-group>
	        </view>
	        <view class="uni-form-item uni-column">
	            <view class="title">年龄</view>
	            <slider value="50" name="slider" show-value></slider>
	        </view>
	        <view>
	            <button type="primary" form-type="submit">提交</button>
	            <button type="warn" form-type="reset" class="uni-btn-v">重置</button>
	        </view>
	    </form>
	</view>
</template>

<script>
	export default {
		methods: {
			formSubmit: function(e) {
		        var formdata = e.detail.value
				this.$emit('phySubmit', formdata);
		        // uni.showModal({
		        //     content: '表单数据内容：' + JSON.stringify(formdata),
		        //     showCancel: false
		        // });
		    },
		    formReset: function(e) {
		        console.log('清空数据')
		    }
		}
	}
</script>

<style>
	.uni-form-item {
		padding: 20rpx 0;
		margin-left: 30rpx;
		margin-right: 30rpx;
	}
	.uni-btn-v {
		margin-top: 20rpx;
	}
</style>
