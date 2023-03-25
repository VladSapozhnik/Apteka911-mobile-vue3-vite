<script setup>
import Logo from "./Logo.vue";
import {computed} from "vue";
import {useStore} from "vuex";

const store = useStore();
const closePopup = () => store.commit('UPDATE_IS_OPEN_POPUP', false);
const isOpenPopup = computed(() => store.getters.IS_OPEN_POPUP);

defineExpose({
  closePopup,
  isOpenPopup
})
</script>

<template>
  <div class="popup_shadow _f _j-center _i-center" :class="{active: isOpenPopup}" @click="closePopup">
    <div class="popup" >
        <Logo class="popup_logo" />
        <div class="popup_description">
          Соцмережа постачальників та покупців для покупки товарів та обміну відгуками:
        </div>
        <ul class="popup-benefits">
          <li class="popup-benefits_item">1 000 000+ доступних товарів в каталозі</li>
          <li class="popup-benefits_item">пошук серед товарів у наявності</li>
          <li class="popup-benefits_item">перевірені постачальники товарів в Україні.</li>
        </ul>
        <div class="popup-feedback _f _f-column">
          Залиште ваш відгук
          <a class="popup-feedback_link" href="https://forms.gle/CKuK2yKpvPXbTLVQ9">https://forms.gle/CKuK2yKpvPXbTLVQ9</a>
        </div>
        <div class="popup_btn _f _j-center _i-center" @click="closePopup">Ok</div>
    </div>
  </div>
</template>