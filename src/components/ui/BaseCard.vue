<script setup>
import { Switch } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/20/solid'

defineProps({
  subheader: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  infoOne: {
    type: String,
    required: true,
  },
  infoTwo: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
})

const checked = $ref(false)
</script>

<template>
  <div class="card flex justify-between p-4 md:p-6 bg-white grow max-w-[476px] min-h-[244px] rounded-xl hover:shadow-lg">
    <div class="left-content flex flex-col justify-between max-w-[324px]">
      <div class="flex flex-col">
        <span class="text-[13px] text-gray-400">{{ subheader }}</span>
        <h3 class="mb-3 text-xl font-medium tracking-tight">{{ header }}</h3>
      </div>

      <div class="mb-3 text-[14px] leading-5 text-gray-500">
        {{ text }}
      </div>

      <div class="flex flex-col">
        <div class="text-[14px] inline-flex">
          <CheckIcon class="h-5 w-5 mr-2 text-green-400" />
          {{ infoOne }}
        </div>
        <div class="text-[14px] inline-flex">
          <CheckIcon class="h-5 w-5 mr-2 text-green-400" />
          {{ infoTwo }}
        </div>

        <div class="flex mt-3">
          <Switch
            v-model="checked"
            :class="checked ? 'bg-blue-600' : 'bg-gray-300'"
            class="relative mr-3 inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            <span
              :class="checked ? 'translate-x-6' : 'translate-x-0'"
              aria-hidden="true"
              class="pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
            />
          </Switch>
          <span>Уже получает {{ number }} человек</span>
        </div>
      </div>
    </div>

    <div class="right-content absolute md:relative right-3 w-[40px] sm:w-auto">
      <img
        class="w-[80px] h-auto"
        :src="src"
        alt="snippet"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
