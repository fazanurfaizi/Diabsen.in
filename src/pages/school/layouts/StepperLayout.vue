<template>
	<div class="grid grid-cols-1 gap-[16px]">
		<div
			class="p-[20px] bg-white rounded-[8px] border border-[#CBD5E0] w-full"
		>
			<div class="flex flex-col lg:items-center">
				<div class="flex flex-row items-center py-[12px]">
					<slot name="indicators"></slot>
				</div>
				<div class="flex flex-row lg:gap-[99px]">
					<slot name="label"></slot>
				</div>
			</div>
		</div>

		<div
			class="p-[20px] bg-white rounded-[8px] border border-[#CBD5E0] w-full"
		>
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'StepLayout',
	}
</script>
