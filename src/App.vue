<script setup>
import BaseCard from '@/components/AppCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { Switch, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'
import { ArrowLongRightIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

const enabled = $ref(false)
const inputSubscribe = ''

const cardsInfo = $ref([
  {
    id: 0,
    subheader: 'Перед рассветом',
    header: 'Утренний бухгалтер',
    text: `Самые важные новости и события за день. Кратко, по делу, структурировано.`,
    infoOne: 'Новости для бухгалтеров, ИП и директора',
    infoTwo: `Подборка статей за день`,
    number: 59342,
    src: `./image/001.png`,
  },
  {
    id: 1,
    subheader: 'После заката',
    header: 'Ночной бухгалтер',
    text: `Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.`,
    infoOne: 'Анализ, оценка и только самое главное',
    infoTwo: `Лучшие комменты юзеров в обзоре`,
    number: 37480,
    src: `./image/002.png`,
  },
  {
    id: 2,
    subheader: 'Раз в две недели',
    header: 'Ножницы скидок',
    text: `Подборка самых выгодных и полезных спецпредложений от надежных компаний.`,
    infoOne: 'Акции и скидки от лидеров рынка',
    infoTwo: `Те, кто подписался – экономят много денег `,
    number: 92118,
    src: `./image/003.png`,
  },
  {
    id: 3,
    subheader: 'По мере появления анонсов',
    header: 'Чемодан вебинаров',
    text: `Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.`,
    infoOne: 'Никогда не пришлем платные вебинары',
    infoTwo: 'Подборка топовых тем для вебинаров',
    number: 92082,
    src: `./image/004.png`,
  },
])
</script>

<template>
  <header class="mt-6 md:mt-10">
    <div class="logo flex justify-center mb-6">
      <svg
        fill="none"
        height="36"
        viewBox="0 0 76 36"
        width="76"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_2463)">
          <path
            d="M73.1422 11C73.1422 14.21 70.1549 17 67.1716 17V11L65.1814 11.0001V25H67.1716V19C70.1569 19 73.1422 21.7912 73.1422 25H75.1324C75.1324 21.0598 73.1422 19 70.3847 18C73.1422 17 75.1324 14.5085 75.1324 11H73.1422ZM8.46078 11C8.46078 14.21 5.47355 17 2.4902 17V11L0.5 11.0001V25H2.4902V19C5.47549 19 8.46078 21.7912 8.46078 25H10.451C10.451 21.0598 8.46078 19 5.70337 18C8.46078 17 10.451 14.5085 10.451 11H8.46078ZM16.6446 12.9536C16.6308 12.9914 12.4412 24.5732 12.4412 24.5732L14.6481 25.36C14.6481 25.36 18.8779 13.6631 18.8825 13.6463C18.9902 13.3232 19.2934 13.3266 19.3932 13.3278C19.5951 13.327 19.8358 13.388 19.9425 13.6831L24.1656 25.36L26.3725 24.5732L22.1688 12.9525C21.9409 12.2484 21.1009 11.0013 19.4187 11.0002C17.6879 10.9868 16.868 12.2236 16.6446 12.9536ZM50.2549 18C50.2549 15.2429 52.4868 13 55.2304 13C57.9739 13 60.2059 15.2429 60.2059 18C60.2059 20.7571 57.9739 23 55.2304 23C52.4868 23 50.2549 20.7571 50.2549 18ZM48.2647 18V34H50.2549V22.51C51.1334 24.0506 53.4758 24.9666 55.2304 25C59.13 24.9666 62.2717 21.8339 62.1961 18C62.2717 14.1327 59.13 11 55.2304 11C51.4065 11 48.2647 14.1327 48.2647 18Z"
            fill="black"
          />
          <path
            d="M44.0442 20.2256L45.5914 21.4214C45.5835 21.432 44.725 22.5291 43.6493 24.6541C42.3339 27.2505 41.7593 28.6841 41.7534 28.6976L41.7131 28.7868C39.7612 32.5345 36.6128 34.2153 33.2905 33.2842C31.5223 32.7876 30.0567 31.6432 29.1627 30.0603C28.2688 28.4764 28.0527 26.6434 28.5547 24.8985L33.1039 9.05904C33.5066 7.6585 34.4379 6.49656 35.7248 5.78757C37.0126 5.07857 38.5028 4.90787 39.9223 5.30553C42.8497 6.12703 44.555 9.1473 43.724 12.0376L43.7171 12.0589L40.2661 23.0751L40.272 23.0537C39.6463 25.2292 37.4586 26.4572 35.2915 25.8499C34.2503 25.558 33.3976 24.9015 32.8897 24.0013C32.371 23.0829 32.2532 21.9926 32.5597 20.9277L35.711 10.1754L37.5981 10.7147L34.4477 21.4622C34.2866 22.0247 34.3426 22.5901 34.6059 23.0566C34.8623 23.5105 35.2847 23.8316 35.8279 23.984C36.9537 24.2992 38.0519 23.6715 38.382 22.5242L38.3889 22.5018C38.3889 22.5018 41.8221 11.5429 41.8339 11.5051C41.9253 11.187 41.9695 10.866 41.9695 10.5498C41.9695 9.02024 40.9479 7.61001 39.385 7.17161C38.4704 6.91556 37.5107 7.02516 36.6816 7.48198C35.8534 7.93783 35.2532 8.6866 34.9939 9.5886L30.4447 25.428C29.705 28.0002 31.2227 30.6868 33.8279 31.4181C37.1904 32.3609 39.216 29.3251 39.9469 27.9352C40.0618 27.654 40.6541 26.2312 41.8919 23.787C43.0668 21.4679 44.0049 20.275 44.0442 20.2256Z"
            fill="#EF3124"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2463">
            <rect
              fill="white"
              height="36"
              transform="translate(0.5)"
              width="75"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="breadcrumbs flex items-center justify-center mb-2 md:mb-7 px-12">
      <a
        class="p-0.5 text-gray-400 text-xs text-center border-b-2 border-white hover:border-b-2 hover:border-indigo-50"
        href="#"
      >
        Хлебные крошки
      </a>
      <ArrowLongRightIcon class="h-3 w-3 md:mx-2 text-gray-400" />
      <a
        class="p-0.5 text-gray-400 text-xs text-center border-b-2 border-white hover:border-b-2 hover:border-indigo-50"
        href="#"
      >
        Хлебные крошки
      </a>
      <ArrowLongRightIcon class="h-3 w-3 md:mx-2 text-gray-400" />
      <a
        class="p-0.5 text-gray-400 text-xs text-center border-b-2 border-white hover:border-b-2 hover:border-indigo-50"
        href="#"
      >
        Хлебные крошки
      </a>
    </div>
    <h1 class="mb-6 md:mb-7 text-3xl md:text-6xl font-medium text-center tracking-tighter">Подписки «Клерка»</h1>
  </header>

  <main>
    <TabGroup>
      <TabList class="flex justify-between md:justify-center px-7 md:px-0 gap-6">
        <Tab
          class="group pb-4 text-gray-500 border-b-2 border-b-white hover:border-b-2 hover:border-blue-400 outline-none hover:text-blue-400 hover:font-bold font-medium tracking-tight text-md"
        >
          <a
            class="group-hover:font-medium"
            href="#"
          >
            Рассылки
          </a>
        </Tab>
        <Tab
          class="group pb-4 text-gray-500 border-b-2 border-b-white hover:border-b-2 hover:border-blue-400 outline-none hover:text-blue-400 hover:font-bold font-medium tracking-tight text-md"
        >
          <a
            class="group-hover:font-medium"
            href="#"
          >
            Соцсети
          </a>
        </Tab>
        <Tab
          class="group pb-4 text-gray-500 border-b-2 border-b-white hover:border-b-2 hover:border-blue-400 outline-none hover:text-blue-400 hover:font-bold font-medium tracking-tight text-md"
        >
          <a
            class="group-hover:font-medium"
            href="#"
          >
            Мессенджеры
          </a>
        </Tab>
      </TabList>

      <TabPanels class="p-4 md:p-6 bg-gray-100 h-auto md:rounded-2xl">
        <TabPanel>
          <div class="panel__header flex flex-col items-center justify-center w-full md:px-8 mb-6">
            <h3 class="mt-4 mb-4 md:my-6 text-2xl font-medium tracking-tight">
              Выберите рассылки, которые подходят именно вам
            </h3>

            <div class="relative flex w-full mb-4">
              <input
                class="h-14 px-4 w-full placeholder:text-gray-500 rounded-l-md rounded-r-[50px]"
                placeholder="Электронная почта"
                type="email"
                v-model.trim.lazy="inputSubscribe"
              />

              <BaseButton
                cssClasses="hover:animate-pulse invisible md:visible absolute right-0 h-full rounded-full text-md px-8 -ml-20 bg-blue-600 text-white"
                text="Подписаться"
              />

              <BaseButton
                cssClasses="transition duration-150 hover:ease-in-out hover:scale-110 hover:animate-pulse visible md:invisible absolute right-0 h-full w-8 rounded-full text-md px-7 -ml-20 bg-blue-600 text-white"
              >
                <ChevronRightIcon class="w-6 h-6 -ml-2.5" />
              </BaseButton>
            </div>

            <div class="w-full flex justify-start content-center items-center">
              <Switch
                v-model="enabled"
                :class="enabled ? 'bg-blue-600' : 'bg-gray-300'"
                class="relative mr-3 inline-flex h-[18px] w-[32px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <span
                  :class="enabled ? 'translate-x-3.5' : 'translate-x-0'"
                  aria-hidden="true"
                  class="pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                />
              </Switch>

              <span class="text-sm">Подписаться на все рассылки</span>
            </div>
          </div>

          <div class="panel__content flex flex-wrap justify-center gap-6">
            <BaseCard
              v-for="info in cardsInfo"
              :key="info.id"
              :header="info.header"
              :infoOne="info.infoOne"
              :infoTwo="info.infoTwo"
              :number="info.number"
              :subheader="info.subheader"
              :text="info.text"
              :src="info.src"
            />
          </div>
        </TabPanel>

        <TabPanel>Соцсети</TabPanel>
        <TabPanel>Мессенджеры</TabPanel>
      </TabPanels>
    </TabGroup>
  </main>

  <footer class="flex justify-center py-14">
    <svg
      fill="none"
      height="48"
      viewBox="0 0 196 48"
      width="196"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0993 7.74633H0.93335V4.49787H16.0993V7.74633Z"
        fill="black"
      />
      <path
        d="M19.8005 4.24799H23.7726L37.4942 40.1628H33.5221L19.8005 4.24799Z"
        fill="black"
      />
      <path
        d="M58.6182 40.7534H37.9455V37.3232H58.6182V40.7534Z"
        fill="black"
      />
      <path
        d="M61.71 23.8978C61.71 20.4752 62.1614 17.1888 63.0641 14.0388C63.9819 10.8888 65.3436 8.0265 67.149 5.45196C68.9545 2.87743 70.8277 1.0601 72.7686 0L73.6262 2.77142C71.4295 4.46758 69.624 7.05726 68.2097 10.5405C66.8105 14.0237 66.0432 17.9233 65.9078 22.2395L65.8852 24.1704C65.8852 30.0161 66.9459 35.0894 69.0673 39.3904C70.3462 41.965 71.8658 43.9792 73.6262 45.433L72.7686 48C70.7675 46.8793 68.8567 45.0014 67.0362 42.3663C63.4854 37.2172 61.71 31.0611 61.71 23.8978Z"
        fill="black"
      />
      <path
        d="M95.5827 2.33762L92.0237 3.54723C93.1792 5.96645 95.8138 13.1776 96.5533 15.8294L100.158 14.5733C99.3727 11.968 96.5995 4.57074 95.5827 2.33762ZM116.104 5.31512L111.852 4.10551C110.928 11.084 108.108 18.5278 104.457 23.2266C99.7887 29.1816 92.9019 33.6479 86.2924 35.6019L89.4816 38.8585C95.9986 36.5323 102.839 31.7404 107.6 25.4132C111.39 20.3887 113.886 13.7359 115.272 7.96695C115.457 7.22258 115.781 6.10602 116.104 5.31512ZM82.6873 5.12902L79.0359 6.4782C80.1452 8.47871 83.3344 16.3412 84.2125 19.2256L87.8639 17.8764C86.8009 14.8524 83.889 7.73434 82.6873 5.12902Z"
        fill="black"
      />
      <path
        d="M133.523 24.1249C133.523 27.5021 133.079 30.743 132.191 33.8476C131.318 36.9371 129.972 39.7918 128.151 42.4117C126.346 45.0317 124.45 46.8945 122.464 48L121.584 45.433C123.901 43.646 125.759 40.8746 127.158 37.1188C128.573 33.3478 129.295 29.168 129.325 24.5793V23.8523C129.325 20.672 128.994 17.7189 128.332 14.9929C127.67 12.2518 126.745 9.79839 125.556 7.63275C124.382 5.46711 123.058 3.77851 121.584 2.56697L122.464 0C124.45 1.10554 126.338 2.95315 128.129 5.54283C129.934 8.13251 131.281 10.9872 132.169 14.107C133.071 17.2267 133.523 20.566 133.523 24.1249Z"
        fill="black"
      />
      <path
        d="M157.558 40.7534H136.885V37.3232H157.558V40.7534Z"
        fill="black"
      />
      <path
        d="M161.643 40.1628H158.055L171.776 4.24799H175.342L161.643 40.1628Z"
        fill="black"
      />
      <path
        d="M195.067 7.74633H179.901V4.49787H195.067V7.74633Z"
        fill="black"
      />
    </svg>
  </footer>
</template>

<style lang="scss">
@import 'assets/styles/style.css';
@import 'assets/styles/base.css';

#app {
  max-width: 1024px;
  margin: 0 auto;
  font-weight: normal;
}
</style>
