import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore(('lol'), () =>{

    // Dynamic routing based on the dropdown values selected on the HomePage's 'How can we help you?' section.

    const firstOptions = ['individual', 'organisation'];
    const secondOptions = ['learn', 'teach', 'donate']

    const selected = ref(firstOptions[0]);
    const secondSelected = ref(secondOptions[0]);
    const dynamicDestination = ref('');
    const pager = () => {

      if(selected.value === 'individual' && secondSelected.value === 'learn') {
        dynamicDestination.value = '/digital-divide';
      }
      if(selected.value === 'individual' && secondSelected.value === 'teach') {
        dynamicDestination.value = '/get-involved';
      }

      // Same for both 'Individual' and 'Organisation'
      if(selected.value && secondSelected.value === 'donate') {
        dynamicDestination.value = '/donate';
      }

      if(selected.value === 'organisation' && secondSelected.value === 'learn') {
        dynamicDestination.value = '/about';
      }
      if(selected.value === 'organisation' && secondSelected.value === 'teach') {
        dynamicDestination.value = '/our-network';
      }

    }

    return {selected, secondSelected, dynamicDestination, pager, firstOptions, secondOptions}


})