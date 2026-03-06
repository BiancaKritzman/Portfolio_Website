<!-- if not working then delete code in node module -->
<!-- <script setup>
import { ref, onMounted } from 'vue'

const props = defineProps();
const displayedText = ref('');
let currentText = 0;
let charIndex = 0;
let deleting = false;
// Props: array of words and typing speed
props({
    texts: {
    type: Array,
  },
  typeSpeed: {
      type: Number,
      default: 100 // ms per character
  },
  backSpeed: {
    type: Number,
    default: 50 // ms per character when deleting
  },
  loop: {
      type: Boolean,
      default: true
  }
})

function type() {
  const fullText = props.texts[currentText]
  
  if (!deleting) {
    displayedText.value = fullText.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === fullText.length) {
      deleting = true
      setTimeout(type, 1000) // pause at end
      return
    }
  } else {
    displayedText.value = fullText.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      deleting = false
      currentText = (currentText + 1) % props.texts.length
    }
  }

  setTimeout(type, deleting ? props.backSpeed : props.typeSpeed)
}

onMounted(() => type())
</script>

<template>
    <span>{{ displayedText }}</span>
</template> -->