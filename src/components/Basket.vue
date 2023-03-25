<script setup>
import Logo from "./Logo.vue";
import {computed, reactive} from 'vue'
import {useVuelidate} from '@vuelidate/core'
import {required, email, helpers, maxLength} from '@vuelidate/validators'
import {useStore} from "vuex";
import {RouterLink} from "vue-router";
import BasketGoods from "./BasketGoods.vue";

const formData = reactive({
  firstName: '',
  lastName: '',
  contact: {
    email: ''
  }
})
const store = useStore();
const numberCarts = computed(() => store.getters.BASKET_CART_COUNT);
const basketTotalPrice = computed(() => store.getters.BASKET_TOTAL_PRICE);

const phoneValidator = (value) => {
  const regexp = /^(\+38|38|8)?0[0-9]{9}$/;
  return regexp.test(value);
}

const isCyrillic = (value) => {
  const regexp = /[\u0400-\u04ff]+/gi;
  return regexp.test(value);
}

const rules = {
  firstName: {
    required: helpers.withMessage('Поле ім’я обов\'язкове для заповнення', required),
    // maxLength: maxLength(this),
    maxLength: helpers.withMessage('Поле ім’я не більше ніж 20 символів', maxLength(20)),
    isCyrillic: helpers.withMessage('Поле ім’я тільки кирилиця', isCyrillic),
    $autoDirty: true,
  },
  lastName: {
    required: helpers.withMessage('Поле прізвище обов\'язкове для заповнення', required),
    maxLength: helpers.withMessage('Поле прізвище не більше ніж 20 символів', maxLength(20)),
    isCyrillic: helpers.withMessage('Поле ім’я тільки кирилиця', isCyrillic),
    $autoDirty: true,
  },
  contact: {
    phone: {
      required: helpers.withMessage('Поле телефон обов\'язкове для заповнення', required),
      phoneValidator: helpers.withMessage('Введіть коректний номер телефону', phoneValidator),
      $autoDirty: true,
    },
    email: {
      email: helpers.withMessage('Поле email некоректне', email),
      $autoDirty: true,
    }
  }
}
const v$ = useVuelidate(rules, formData)
const handlerForm = async () => {
  const result = await v$.value.$validate();
  if (!result) {
    alert('Введіть обов\'язкові поля')
  }
}

defineExpose({
  formData,
  v$,
  handlerForm,
  numberCarts,
  basketTotalPrice,
})
</script>

<template>
  <div class="basket">
    <div class="basket-header">
      <Logo/>
    </div>
    <div class="contacts">
      <router-link :to="{name: 'main'}" class="contacts_back">Кошик</router-link>
      <h2 class="contacts_title">Оформлення замовлення</h2>
      <h3 class="contacts_subtitle">Контактні дані</h3>
      <form action="" @submit.prevent="handlerForm">
        <div class="validation__field">
          <span class="validation__field-name require">Ім’я</span>
          <input class="validation__input" v-model="formData.firstName" :class="{ error: v$.firstName.$errors.length }"
                 type="text" placeholder="Введіть ваше ім’я">
          <div class="validation__field-errors" v-for="error of v$.firstName.$errors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <div class="validation__field">
          <span class="validation__field-name require">Прізвище</span>
          <input class="validation__input" v-model="formData.lastName" :class="{ error: v$.lastName.$errors.length }"
                 type="text" placeholder="Введіть ваше прізвище">
          <div class="validation__field-errors" v-for="error of v$.lastName.$errors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <div class="validation__field">
          <span class="validation__field-name require">Номер телефону</span>
          <input class="validation__input" v-model="formData.contact.phone"
                 :class="{ error: v$.contact.phone.$errors.length }" type="tel"
                 placeholder="Введіть ваш номер телефону">
          <div class="validation__field-errors" v-for="error of v$.contact.phone.$errors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <div class="validation__field">
          <span class="validation__field-name">Email</span>
          <input class="validation__input" v-model="formData.contact.email"
                 :class="{ error: v$.contact.email.$errors.length }" type="email" placeholder="Введіть ваш email">
          <div class="validation__field-errors" v-for="error of v$.contact.email.$errors" :key="error.$uid">
            {{ error.$message }}
          </div>
        </div>
        <label class="validation__field">
          <span class="validation__field-name">Коментар</span>
          <textarea class="validation__textarea" name="description"
                    placeholder="Напишіть свій коментар до замовлення"></textarea>
        </label>
        <div class="confirm">
          <div class="confirm-price">
            Всього до сплати: <span class="confirm-price_count">{{ basketTotalPrice }}</span><span
              class="confirm-price_currency"> грн</span>
          </div>
          <div class="confirm_number">В кошику {{ numberCarts }} товари</div>
          <button class="confirm_btn" :disabled="numberCarts > 0 ? false : true" type="submit">Підтверджую замовлення
          </button>
        </div>
      </form>
      <BasketGoods/>
    </div>
  </div>
</template>
