import Vue from 'vue'
import Router from 'vue-router'
import Home from '../examples/Home.vue'
import PopupShow from '../examples/popup-show.vue'
import CellShow from '../examples/cell-show.vue'
import BaseActionSheetShow from '../examples/BaseActionSheet-show.vue'
import TransParentShow from '../examples/transParent-show.vue'
import TransShow from '../examples/trans-show.vue'
import cardShow from '../examples/card-show.vue'
import PanelShow from '../examples/panel-show.vue'
import LoadingShow from '../examples/loading-show.vue'
import ToastShow from '../examples/toast-show.vue'
import TabShow from '../examples/ncf-tab-show.vue'
import TabBarShow from '../examples/tabBar-show.vue'
import DialogShow from '../examples/dialog-show.vue'
import UploadShow from '../examples/upload-show.vue'
import InputShow from '../examples/input-show.vue'
import Sketeon from '../components/skeletion.vue'
import BulletinShow from '../examples/bulletin-show.vue'
import SlideShow from '../examples/slide-show.vue'
import ProgressBar from '../components/progressbar.vue'
import Radio from '../examples/radio-show.vue'
import Checkbox from '../examples/checkbox-show.vue'
import Rect from '../examples/button-show.vue'
import Flex from '../components/flex.vue'
import pickerShow from '../examples/pick-show/index.vue'
import pickerDemo0 from '../examples/pick-show/demo0.vue'
import pickerDemo1 from '../examples/pick-show/demo1.vue'
import pickerDemo2 from '../examples/pick-show/demo2.vue'
import datepicker from '../examples/datepicker-show/index.vue'
import datepickerDemo0 from '../examples/datepicker-show/demo0.vue'
import datepickerDemo1 from '../examples/datepicker-show/demo1.vue'
import datepickerDemo2 from '../examples/datepicker-show/demo2.vue'
import datepickerDemo3 from '../examples/datepicker-show/demo3.vue'
import TipShow from '../examples/tip-show.vue'
import NumberShow from '../examples/number-show.vue'

// 业务
import Amount from '../examples/amount.vue'
import SlideNews from '../examples/slide-news.vue'
import BankList from '../examples/bankList-show.vue'
import Filed from '../examples/filed.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/popup',
      name: 'PopShow',
      component: PopupShow
    },
    {
      path: '/cell',
      name: 'CellShow',
      component: CellShow
    },
    {
      path: '/baseaction',
      name: 'BaseActionSheet',
      component: BaseActionSheetShow
    },
    {
      path: '/transparent',
      name: 'TransParentShow',
      component: TransParentShow,
      children: [
        {
          path: 'trans',
          component: TransShow
        }
      ]
    },
    {
      path: '/card',
      name: 'cardShow',
      component: cardShow
    },
    {
      path: '/panel',
      name: 'PanelShow',
      component: PanelShow
    },
    {
      path: '/loading',
      name: 'LoadingShow',
      component: LoadingShow
    },
    {
      path: '/toast',
      name: 'ToastShow',
      component: ToastShow
    },
    {
      path: '/tab',
      name: 'TabShow',
      component: TabShow
    },
    {
      path: '/dialog',
      name: 'DialogShow',
      component: DialogShow
    },
    {
      path: '/upload',
      name: 'UploadShow',
      component: UploadShow
    },
    {
      path: '/input',
      name: 'InputShow',
      component: InputShow
    },
    {
      path: '/moneyInput',
      name: 'Amount',
      component: Amount
    },
    {
      path: '/sketeon',
      name: 'Sketeon',
      component: Sketeon
    },
    {
      path: '/bulletin',
      name: 'BulletinShow',
      component: BulletinShow
    },
    {
      path: '/slide',
      name: 'SlideShow',
      component: SlideShow
    },
    {
      path: '/slidenews',
      name: 'SlideNews',
      component: SlideNews
    },
    {
      path: '/filed',
      name: 'Filed',
      component: Filed
    },
    {
      path: '/banklist',
      name: 'BankList',
      component: BankList
    },
    {
      path: '/picker',
      name: 'pickerShow',
      component: pickerShow,
      children: [
        {
          path: 'demo0',
          component: pickerDemo0
        },
        {
          path: 'demo1',
          component: pickerDemo1
        },
        {
          path: 'demo2',
          component: pickerDemo2
        }
      ]
    },
    {
      path: '/rect',
      name: 'Rect',
      component: Rect
    },
    {
      path: '/tip',
      name: 'TipShow',
      component: TipShow
    },
    {
      path: '/flex',
      name: 'Flex',
      component: Flex
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      component: datepicker,
      children: [
        {
          path: 'demo0',
          component: datepickerDemo0
        },
        {
          path: 'demo1',
          component: datepickerDemo1
        },
        {
          path: 'demo2',
          component: datepickerDemo2
        },
        {
          path: 'demo3',
          component: datepickerDemo3
        }
      ]
    },
    {
      path: '/tabBar',
      name: 'tabBar',
      component: TabBarShow
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: Checkbox
    },
    {
      path: '/number',
      name: 'number',
      component: NumberShow
    }
  ]
})