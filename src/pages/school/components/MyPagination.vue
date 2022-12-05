<template>
	<!-- <div class="flex justify-end">
        <ul class="inline-flex h-[36px]">
            <li><button class="border-[#E3E6EA] border-[1px] h-[36px] py-[4px] px-[8px] leading-4 text-[#1F4690] bg-[#E3E6EA] rounded-l-md text-[14px]" disabled>
                Page 1 of 7
            </button></li>
            <li><button class="border-[#E3E6EA] border-[1px] h-[36px] py-[4px] px-[8px] leading-4 text-[#1F4690] transition-colors duration-150 bg-white focus:shadow-outline hover:bg-[#E3E6EA]">
                <Icon set="teamui" name="first"></Icon>
            </button></li>
            <li><button class="border-[#E3E6EA] border-[1px] h-[36px] py-[4px] px-[8px] leading-4 w-[40px] text-[#1F4690] transition-colors duration-150 bg-white focus:shadow-outline hover:bg-[#E3E6EA]">
                <Icon set="teamui" name="prev"></Icon>
            </button></li>
            <li><button class="border-[#E3E6EA] border-[1px] h-[36px] py-[4px] px-[8px] leading-4 w-[40px] text-white transition-colors duration-150 bg-[#1F4690] focus:shadow-outline">1</button></li>
            <li><button class="border-[#E3E6EA] border-[1px] h-[36px] py-[4px] px-[8px] leading-4 w-[40px] text-[#1F4690] transition-colors duration-150 bg-white focus:shadow-outline hover:bg-[#E3E6EA]">2</button></li>
            <li><button class="border-[#E3E6EA] border-[1px] h-[36px] py-[4px] px-[8px] leading-4 w-[40px] text-[#1F4690] transition-colors duration-150 bg-white focus:shadow-outline hover:bg-[#E3E6EA]">3</button></li>
            <li><button class="border-[#E3E6EA] border-[1px] h-[36px] py-[4px] px-[8px] leading-4 w-[40px] text-[#1F4690] transition-colors duration-150 bg-white focus:shadow-outline hover:bg-[#E3E6EA]">4</button></li>
            <li><button class="border-[#E3E6EA] border-[1px] h-[36px] py-[4px] px-[8px] leading-4 w-[40px] text-[#1F4690] transition-colors duration-150 bg-white focus:shadow-outline hover:bg-[#E3E6EA]">5</button></li>
            <li><button class="border-[#E3E6EA] border-[1px] h-[36px] py-[4px] px-[8px] leading-4 w-[40px] text-[#1F4690] transition-colors duration-150 bg-white focus:shadow-outline hover:bg-[#E3E6EA]">
                <Icon set="teamui" name="next"></Icon>
            </button></li>
            <li><button class="border-[#E3E6EA] border-[1px] h-[36px] py-[4px] px-[8px] leading-4 text-[#1F4690] transition-colors duration-150 bg-white rounded-r-md focus:shadow-outline hover:bg-[#E3E6EA]">
                <Icon set="teamui" name="last"></Icon>
            </button></li>
        </ul>
    </div> -->

	<div class="flex justify-end">
		<ul class="inline-flex h-[36px]">
			<li class="pagination-item">
				<button
					class="border-[#E3E6EA] border-[1px] h-[36px] py-[4px] px-[8px] leading-4 text-[#1F4690] bg-[#E3E6EA] rounded-l-md text-[14px]"
					disabled
				>
					Page {{ currentPage }} of {{ totalPages }}
				</button>
			</li>

			<li class="pagination-item">
				<button
					v-if="isInFirstPage"
					class="border-[#E3E6EA] border-[1px] h-[36px] py-auto px-[8px] leading-4 bg-white cursor-not-allowed"
				>
					<Icon set="teamui" name="first" stroke="#CBD5E0"></Icon>
				</button>
				<button
					v-else
					@click.prevent="onClickFirstPage"
					class="border-[#E3E6EA] border-[1px] h-[36px] py-auto px-[8px] leading-4 bg-white focus:shadow-outline hover:bg-[#E3E6EA]"
					href="#"
					role="button"
					rel="prev"
				>
					<Icon set="teamui" name="first"></Icon>
				</button>
			</li>

			<li class="pagination-item">
				<button
					v-if="isInFirstPage"
					class="border-[#E3E6EA] border-[1px] h-[36px] py-auto px-[8px] leading-4 w-[40px] text-[#1F4690] bg-white cursor-not-allowed"
				>
					<Icon set="teamui" name="prev" stroke="#CBD5E0"></Icon>
				</button>
				<button
					v-else
					@click="onClickPreviousPage"
					class="border-[#E3E6EA] border-[1px] h-[36px] py-auto px-[8px] leading-4 w-[40px] text-[#1F4690] bg-white focus:shadow-outline hover:bg-[#E3E6EA]"
					aria-label="Go to previous page"
				>
					<Icon set="teamui" name="prev"></Icon>
				</button>
			</li>

			<li v-for="page in pages" class="pagination-item" :key="page.name">
				<button
					v-if="isPageActive(page.name)"
					class="border-[#E3E6EA] border-[1px] h-[36px] py-[4px] px-[8px] leading-4 w-[40px] text-white bg-[#1F4690] focus:shadow-outline"
				>
					{{ page.name }}
				</button>
				<button
					href="#"
					v-else
					@click.prevent="onClickPage(page.name)"
					role="button"
					class="border-[#E3E6EA] border-[1px] h-[36px] py-[4px] px-[8px] leading-4 w-[40px] text-[#1F4690] transition-colors duration-150 bg-white focus:shadow-outline hover:bg-[#E3E6EA]"
				>
					{{ page.name }}
				</button>
			</li>

			<li class="pagination-item">
				<button
					v-if="isInLastPage"
					class="border-[#E3E6EA] border-[1px] h-[36px] py-auto px-[8px] leading-4 bg-white cursor-not-allowed"
				>
					<Icon set="teamui" name="next" stroke="#CBD5E0"></Icon>
				</button>
				<button
					v-else
					@click.prevent="onClickNextPage"
					class="border-[#E3E6EA] border-[1px] h-[36px] py-auto px-[8px] leading-4 bg-white focus:shadow-outline hover:bg-[#E3E6EA]"
				>
					<Icon set="teamui" name="next"></Icon>
				</button>
			</li>

			<li class="pagination-item">
				<button
					v-if="isInLastPage"
					class="border-[#E3E6EA] border-[1px] h-[36px] py-auto px-[8px] leading-4 bg-white cursor-not-allowed"
				>
					<Icon set="teamui" name="last" stroke="#CBD5E0"></Icon>
				</button>
				<button
					v-else
					@click.prevent="onClickLastPage"
					class="border-[#E3E6EA] border-[1px] h-[36px] py-auto px-[8px] leading-4 bg-white focus:shadow-outline hover:bg-[#E3E6EA]"
					href="#"
					role="button"
					rel="next"
				>
					<Icon set="teamui" name="last"></Icon>
				</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'MyPagination',
		props: {
			maxVisibleButtons: {
				type: Number,
				required: false,
				default: 5,
			},

			totalPages: {
				type: Number,
				required: true,
			},

			total: {
				type: Number,
				required: true,
			},

			perPage: {
				type: Number,
				required: true,
			},

			currentPage: {
				type: Number,
				required: true,
			},

			hasMorePages: {
				type: Boolean,
				required: false,
				default: false,
			},
		},
		computed: {
			startPage() {
				if (
					this.currentPage === 1 ||
					this.currentPage === 2 ||
					this.currentPage === 3
				) {
					return 1
				}

				if (
					this.currentPage === this.totalPages ||
					this.currentPage === this.totalPages - 1
				) {
					return this.totalPages - this.maxVisibleButtons + 1
				}

				return this.currentPage - 2
			},
			endPage() {
				return Math.min(
					this.startPage + this.maxVisibleButtons - 1,
					this.totalPages
				)
			},
			pages() {
				const range = []

				for (let i = this.startPage; i <= this.endPage; i += 1) {
					range.push({
						name: i,
						isDisabled: i === this.currentPage,
					})
				}

				return range
			},
			isInFirstPage() {
				return this.currentPage === 1
			},
			isInLastPage() {
				return this.currentPage === this.totalPages
			},
		},
		methods: {
			onClickFirstPage() {
				this.$emit('pagechanged', 1)
			},
			onClickPreviousPage() {
				this.$emit('pagechanged', this.currentPage - 1)
			},
			onClickPage(page) {
				this.$emit('pagechanged', page)
			},
			onClickNextPage() {
				this.$emit('pagechanged', this.currentPage + 1)
			},
			onClickLastPage() {
				this.$emit('pagechanged', this.totalPages)
			},
			isPageActive(page) {
				return this.currentPage === page
			},
		},
	}
</script>

<style>
	.pagination {
		list-style-type: none;
	}

	.pagination-item {
		display: inline-block;
	}
</style>
