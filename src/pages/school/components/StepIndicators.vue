<template>
	<div
		v-if="step == 1"
		class="border-[2px] rounded-[200px] border-[#1F4690] px-[7px] text-[14px]"
	>
		<span class="font-bold text-[#1F4690]">1</span>
	</div>
	<div
		v-else-if="step > 1"
		class="bg-[#1F4690] border-[2px] rounded-[200px] border-[#1F4690] px-[7px] text-[14px]"
	>
		<span class="font-bold text-white">1</span>
	</div>

	<span v-if="step == 1" class="bg-[#CBD5E0] w-[200px] h-[2px]"></span>
	<span v-else-if="step > 1" class="bg-[#1F4690] w-[200px] h-[2px]"></span>

	<div
		v-if="step == 2"
		class="border-[2px] rounded-[200px] border-[#1F4690] px-[7px] text-[14px]"
	>
		<span class="font-bold text-[#1F4690]">2</span>
	</div>
	<div
		v-else-if="step > 2"
		class="bg-[#1F4690] border-[2px] rounded-[200px] border-[#1F4690] px-[7px] text-[14px]"
	>
		<span class="font-bold text-white">2</span>
	</div>
	<div
		v-else
		class="border-[2px] rounded-[200px] border-[#CBD5E0] px-[7px] text-[14px]"
	>
		<span class="font-bold text-[#CBD5E0]">2</span>
	</div>

	<span v-if="step == 3" class="bg-[#1F4690] w-[200px] h-[2px]"></span>
	<span v-else class="bg-[#CBD5E0] w-[200px] h-[2px]"></span>

	<div
		v-if="step == 3"
		class="border-[2px] rounded-[200px] border-[#1F4690] px-[7px] text-[14px]"
	>
		<span class="font-bold text-[#1F4690]">3</span>
	</div>
	<div
		v-else
		class="border-[2px] rounded-[200px] border-[#CBD5E0] px-[7px] text-[14px]"
	>
		<span class="font-bold text-[#CBD5E0]">3</span>
	</div>
</template>

<script>
	export default {
		props: ['step'],
		name: 'StepIndicators',
	}
</script>
