<template>
	<view class="uni-form-item">
	    <form @submit="formSubmit" @reset="formReset">
	        <!-- <view class="uni-form-item uni-column">
	            <view class="title">switch</view>
	            <view>
	                <switch name="switch" />
	            </view>
	        </view> -->
			<!-- <view class="uni-form-item uni-column">
			    <view class="title">姓名</view>
			    <input class="uni-input" name="name" :value="phyData.name" placeholder="请输入姓名" />
			</view> -->
	        <view class="uni-form-item uni-column">
	            <view class="title">性别</view>
				<radio-group name="sex">
	                <label>
	                    <radio value="man" /><text>男</text>
	                </label>
	                <label style="margin-left: 30rpx;">
	                    <radio value="woman" /><text>女</text>
	                </label>
	            </radio-group>
	        </view>
	        <view class="uni-form-item uni-column">
	            <view class="title">身份</view>
	            <checkbox-group name="status">
	                <label>
	                    <checkbox value="0" /><text>学生</text>
	                </label>
	                <label style="margin-left: 30rpx;">
	                    <checkbox value="1" /><text>在职</text>
	                </label>
					<label style="margin-left: 30rpx;">
					    <checkbox value="2" /><text>兼职</text>
					</label>
					<label style="margin-left: 30rpx;">
					    <checkbox value="3" /><text>退休</text>
					</label>
	            </checkbox-group>
	        </view>
	        <view class="uni-form-item uni-column">
	            <view class="title">年龄</view>
	            <slider value="30" name="age" show-value max="150"></slider>
	        </view>
			<view class="uni-form-item uni-column">
			    <view class="title">身高（cm）</view>
			    <slider value="170" name="height" show-value min="20" max="300"></slider>
			</view>
			<view class="uni-form-item uni-column">
			    <view class="title">体重（Kg）</view>
			    <slider value="60" name="weight" show-value max="200"></slider>
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
		props: ["phyData"],
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
