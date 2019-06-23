import Vue from 'vue';

/* Validador ---> */
const configValidador = {
    errorBagName: 'errors_validate', // change if property conflicts
    fieldsBagName: 'fields',
    locale: 'es'
};
import es from 'vee-validate/dist/locale/es';
import VeeValidate, { Validator } from 'vee-validate';
Validator.localize('es', es);

Vue.use(VeeValidate, configValidador);