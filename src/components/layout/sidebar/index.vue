<template>
	<div
        class="lg:block"
        :class="sidebarOpen ? 'block' : 'hidden'"
    >
		<!-- Sidebar backdrop (mobile only) -->
		<div
			class="fixed inset-0 bg-opacity-30 lg:hidden lg:z-auto transition-opacity duration-200"
			:class="
				sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
			"
			aria-hidden="true"
		></div>       
        
        <!-- Expand / collapse button -->
        <button 
            @click.prevent="sidebarExpanded = !sidebarExpanded" 
            class="hidden lg:inline-flex absolute cursor-pointer sidebar-expanded:left-60 left-20 top-5 rounded-full bg-secondary-light z-50 transition duration-150"
        >        
            <div class="px-1.5 py-1.5 transition duration-150">
                <span class="sr-only">Expand / collapse sidebar</span>
                <heroicons-outline-vue name="chevron-double-left" class="w-3 h-3 fill-current sidebar-expanded:rotate-180 text-white transition duration-150" />                    
            </div>        
        </button>

		<!-- Sidebar -->
		<div
			id="sidebar"
			ref="sidebar"
			class="flex flex-col relative left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-52 lg:w-24 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 p-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white transition-all duration-200 ease-in-out"
			:class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'"
		>                        
			<!-- Sidebar header -->
			<div class="flex items-center justify-center pr-3 sm:px-2 mb-4">				
				<!-- Logo -->
				<router-link class="block" to="/">					
                    <h1 class="text-lg sidebar-expanded:text-3xl mt-0.5 text-primary">
                        LOGO
                    </h1>
				</router-link>                
			</div>            

			<!-- Links -->
			<div class="space-y-4">
                <Link                     
                    title="Beranda"
                    path="dashboard"
                    icon="home"                    
                />                
                
				<!-- Pages group -->
                <template v-for="(route, index) in routes" :key="`route-${index}`">
                    <div>
                        <span
                            class="text-base uppercase text-gray-800 font-medium"
                        >                            
                            <span 
                                class="hidden lg:block lg:sidebar-expanded:hidden p-0.5 bg-gray-500 lg:w-full"
                                aria-hidden="true"
                            ></span>

                            <span
                                class="lg:hidden lg:sidebar-expanded:block 2xl:block pl-1"
                            >
                                {{ route.title }}
                            </span>
                        </span>
                        <ul class="mt-1">
                            <template v-for="(menu, menuIndex) in route.items" :key="`menu-${menuIndex}`">
                                <SidebarLink
                                    v-slot="parentLink"
                                    :active-condition="isRouteActive(menu.path)"                                    
                                    v-if="menu.child && menu.child.length > 0"
                                >                            
                                    <a
                                        class="block px-3 text-gray-700 hover:text-gray-500 truncate transition duration-150 rounded-lg"
                                        :class="parentLink.expanded && 'bg-gray-300'"
                                        href="#0"
                                        @click.prevent="
                                            sidebarExpanded
                                                ? parentLink.handleClick()
                                                : (sidebarExpanded = true)
                                        "
                                    >
                                        <div class="flex items-center justify-between py-2">
                                            <div class="flex items-start pl-1 px-1">
                                                <heroicons-outline-vue :name="menu.icon" class="flex shrink-0 h-6 w-6 text-primary" />
                                                <span
                                                    class="text-sm font-medium ml-3 mt-0.5 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                    {{ menu.name }}
                                                </span>
                                            </div>
                                            <!-- Icon -->
                                            <div class="flex shrink-0 ml-2 px-2">
                                                <heroicons-outline-vue 
                                                    name="chevron-right" 
                                                    class="h-4 w-4 text-primary" 
                                                    :class="
                                                        parentLink.expanded &&
                                                        'rotate-90'
                                                    "
                                                />                                                
                                            </div>
                                        </div>
                                    </a>

                                    <div
                                        class="lg:hidden lg:sidebar-expanded:block 2xl:block"
                                    >                                        
                                        <ul
                                            class="mt-1"
                                            :class="!parentLink.expanded && 'hidden'"                                            
                                        >
                                            <template v-for="(child, childIndex) in menu.child" :key="childIndex">                                                
                                                <router-link
                                                    v-slot="{
                                                        href,
                                                        navigate,                                                      
                                                    }"
                                                    :to="{name: child.path}"
                                                    custom
                                                >
                                                    <li class="px-2 mb-2 last:mb-0">                                                        
                                                        <a
                                                            class="flex items-center text-gray-700 hover:text-gray-500 p-1.5 px-2.5 rounded-lg transition duration-150 truncate"
                                                            :href="href"
                                                            @click="navigate"
                                                        >
                                                            <heroicons-outline-vue 
                                                                name="circle" 
                                                                class="shrink-0 h-4 w-4 text-gray-500" 
                                                            />                                                                
                                                            <span
                                                                class="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                                                {{ child.title }}
                                                            </span>                                                        
                                                        </a>
                                                    </li>
                                                </router-link>                                                                                
                                            </template>                           
                                        </ul>
                                    </div>
                                </SidebarLink>	
                                
                                <li class="py-2 rounded-sm" v-else>
                                    <Link                                         
                                        :title="menu.name"
                                        :path="menu.path"
                                        :icon="menu.icon"
                                    />
                                </li>
                            </template>                                                                                    
                        </ul>
                    </div>		
                </template>
			</div>			
		</div>
	</div>
</template>

<script>
import { ref, defineComponent, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import SidebarLink from './SidebarLink.vue'
import { appRoutes } from './routes'
import Link from '@/components/ui/link/index.vue'
import heroiconsOutlineVue from '@/components/icons/heroicons-outline.vue'

export default defineComponent({
    name: 'v-sidebar',
    components: {
        Link,
        SidebarLink,
        heroiconsOutlineVue
    },
    props: {
        sidebarOpen: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    emits: ['close-sidebar'],
    setup(props, { emit }) {
        const routes = ref(appRoutes)        
        const trigger = ref(null)
        const sidebar = ref(null)
        const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
        const sidebarExpanded = ref(
            storedSidebarExpanded === null
                ? false
                : storedSidebarExpanded === 'true'
        )

        const currentRoute = useRouter().currentRoute.value

        // close on click outside
        const clickHandler = ({ target }) => {
            if (!sidebar.value || !trigger.value) return
            if (
                !props.sidebarOpen ||
                sidebar.value.contains(target) ||
                trigger.value.contains(target)
            ) return
            emit('close-sidebar')
        }

        // close if the `esc` key is pressed
        const keyHandler = ({ keyCode }) => {
            if (!props.sidebarOpen || keyCode !== 27) return
            emit('close-sidebar')
        }

        const addExpandable = () => {
            document
                .querySelector('body')
                ?.classList.add('sidebar-expanded')
        }

        const removeExpandable = () => {
            document
                .querySelector('body')
                ?.classList.remove('sidebar-expanded')
        }

        const isRouteActive = (path) => {            
            return currentRoute.fullPath === path ||
                currentRoute.fullPath.includes(path) 
        } 

        onMounted(() => {
            addExpandable()
            localStorage.setItem('sidebar-expanded', 'true')
            document.addEventListener('click', clickHandler)
            document.addEventListener('keydown', keyHandler)
        })
        
        onUnmounted(() => {
            removeExpandable()
            localStorage.removeItem('sidebar-expanded')
            document.removeEventListener('click', clickHandler)
            document.removeEventListener('keydown', keyHandler)
        })

        watch(sidebarExpanded, () => {
            localStorage.setItem(
                'sidebar-expanded',
                sidebarExpanded.value.toString()
            )
            if (sidebarExpanded.value) {
                addExpandable()
            } else {
                removeExpandable()
            }
        })

        return {
            routes,
            trigger,
            sidebar,
            sidebarExpanded,
            currentRoute,
            isRouteActive
        }
    },
})
</script>