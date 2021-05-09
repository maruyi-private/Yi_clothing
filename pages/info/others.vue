<template>
	<view class="uni-form-item">
	    <form @submit="formSubmit" @reset="formReset">
			<view class="uni-form-item uni-column">
			    <view class="title">性格</view>
			    <radio-group name="nature">
			        <label>
			            <radio value="0" /><text>内向</text>
			        </label>
			        <label style="margin-left: 30rpx;">
			            <radio value="1" /><text>外向</text>
			        </label>
					<label style="margin-left: 60rpx;">
					    <radio value="2" /><text>中</text>
					</label>
			    </radio-group>
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
		// props: ["phyData"],
		methods: {
			formSubmit: function(e) {
		        var formdata = e.detail.value
				this.$emit('othersSubmit', formdata);
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
